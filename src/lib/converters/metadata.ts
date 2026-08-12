import exifr from 'exifr';

export interface MetaRow {
  key: string;
  value: string;
}

export interface MetaGroup {
  name: string;
  rows: MetaRow[];
}

export interface ImageMetaInfo {
  filename: string;
  format: string;
  mime: string;
  size: number;
  width: number | null;
  height: number | null;
  groups: MetaGroup[];
  clean: boolean;
}

export interface StrippedImage {
  blob: Blob;
  objectUrl: string;
  format: string;
  extension: string;
  found: string[];
  removed: string[];
  beforeSize: number;
  afterSize: number;
}

type ImageKind = 'jpeg' | 'png' | 'webp';

const NAME_EXIF = 'EXIF / GPS';
const NAME_IPTC = 'IPTC';
const NAME_XMP = 'XMP';
const NAME_COMMENT = 'Comments';
const NAME_PNG_TEXT = 'PNG text chunks';
const NAME_TIME = 'Modification time';

export function imageKindOf(bytes: Uint8Array): ImageKind | 'other' {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'jpeg';
  if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return 'png';
  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
    bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50
  ) return 'webp';
  return 'other';
}

function decodeUtf8(bytes: Uint8Array): string {
  try {
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return '';
  }
}

function ascii(bytes: Uint8Array, start: number, end: number): string {
  let out = '';
  for (let i = start; i < end && i < bytes.length; i++) {
    const c = bytes[i];
    out += c >= 32 && c < 127 ? String.fromCharCode(c) : '·';
  }
  return out;
}

function isExifSegmentStart(bytes: Uint8Array): boolean {
  return bytes[0] === 0x45 && bytes[1] === 0x78 && bytes[2] === 0x69 && bytes[3] === 0x66 && bytes[4] === 0x00;
}

function isXmpSegmentStart(bytes: Uint8Array): boolean {
  const text = ascii(bytes, 0, Math.min(32, bytes.length));
  return text.startsWith('http://ns.adobe.com/xap') || text.startsWith('http://purl.org/dc');
}

function isIptcSegmentStart(bytes: Uint8Array): boolean {
  return ascii(bytes, 0, 14) === 'Photoshop 3.0\u0000';
}

function coarseName(marker: number, payload: Uint8Array): string | null {
  if (marker === 0xfe) return NAME_COMMENT;
  if (marker === 0xe1 && isExifSegmentStart(payload)) return NAME_EXIF;
  if ((marker === 0xe1 || marker === 0xe3) && isXmpSegmentStart(payload)) return NAME_XMP;
  if (marker === 0xed && isIptcSegmentStart(payload)) return NAME_IPTC;
  return null;
}

function nameJpegMarker(marker: number, payload: Uint8Array): { name: string; isMetadata: boolean } {
  const name = coarseName(marker, payload);
  const known = [
    0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xcb, 0xcc, 0xcd, 0xce, 0xcf,
    0xdb, 0xdd, 0xdc, 0xe0, 0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef,
    0xfe,
  ];
  return { name: name || `APP/marker 0x${marker.toString(16)}`, isMetadata: marker !== 0xe0 && marker !== 0xe2 && !!name };
}

function scanJpeg(bytes: Uint8Array): { removed: string[]; keptBytes: number } {
  const removed: string[] = [];
  const len = bytes.length;
  let pos = 2;
  let keptBytes = 2;
  while (pos + 1 < len) {
    if (bytes[pos] !== 0xff) {
      pos++;
      continue;
    }
    const marker = bytes[pos + 1];
    if (marker === 0xd9) {
      keptBytes += 2;
      break;
    }
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      pos += 2;
      keptBytes += 2;
      continue;
    }
    if (pos + 4 > len) break;
    const segLen = (bytes[pos + 2] << 8) | bytes[pos + 3];
    const segEnd = pos + 2 + segLen;
    if (segEnd > len) break;
    if (marker === 0xda) {
      keptBytes += len - pos;
      pos = len;
      break;
    }
    const payload = bytes.subarray(pos + 4, segEnd);
    const info = nameJpegMarker(marker, payload);
    if (info.isMetadata) {
      removed.push(info.name);
    } else {
      keptBytes += segEnd - pos;
    }
    pos = segEnd;
  }
  return { removed: dedupe(removed), keptBytes: pos >= len ? keptBytes : len };
}

function scanPng(bytes: Uint8Array): { removed: string[] } {
  const removed: string[] = [];
  const banner: Record<string, string> = {
    tEXt: NAME_PNG_TEXT,
    zTXt: NAME_PNG_TEXT,
    iTXt: NAME_PNG_TEXT,
    eXIf: NAME_EXIF,
    tIME: NAME_TIME,
  };
  if (bytes.length < 8) return { removed };
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const len = bytes.length;
  let pos = 8;
  while (pos + 8 <= len) {
    const size = dv.getUint32(pos);
    const type = String.fromCharCode(bytes[pos + 4], bytes[pos + 5], bytes[pos + 6], bytes[pos + 7]);
    const chunkEnd = pos + 12 + size;
    if (chunkEnd > len) break;
    if (banner[type]) removed.push(banner[type]);
    pos = chunkEnd;
  }
  return { removed: dedupe(removed) };
}

function scanWebp(bytes: Uint8Array): { removed: string[] } {
  const removed: string[] = [];
  if (bytes.length < 12) return { removed };
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const len = bytes.length;
  let pos = 12;
  while (pos + 8 <= len) {
    const fourcc = String.fromCharCode(bytes[pos], bytes[pos + 1], bytes[pos + 2], bytes[pos + 3]);
    const size = dv.getUint32(pos + 4, true);
    const dataEnd = pos + 8 + size;
    if (dataEnd > len) break;
    if (fourcc === 'EXIF') removed.push(NAME_EXIF);
    if (fourcc === 'XMP ' || fourcc === 'XMP') removed.push(NAME_XMP);
    pos = dataEnd + (size % 2);
  }
  return { removed: dedupe(removed) };
}

function dedupe(items: string[]): string[] {
  return Array.from(new Set(items));
}

export function detectRemovable(bytes: Uint8Array): string[] {
  const kind = imageKindOf(bytes);
  if (kind === 'jpeg') return scanJpeg(bytes).removed;
  if (kind === 'png') return scanPng(bytes).removed;
  if (kind === 'webp') return scanWebp(bytes).removed;
  return [];
}

function rebuildJpeg(bytes: Uint8Array): Uint8Array {
  const len = bytes.length;
  const parts: Uint8Array[] = [bytes.subarray(0, 2)];
  let pos = 2;
  while (pos + 1 < len) {
    if (bytes[pos] !== 0xff) {
      pos++;
      continue;
    }
    const marker = bytes[pos + 1];
    if (marker === 0xd9) {
      parts.push(bytes.subarray(pos, pos + 2));
      break;
    }
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      parts.push(bytes.subarray(pos, pos + 2));
      pos += 2;
      continue;
    }
    if (pos + 4 > len) break;
    const segLen = (bytes[pos + 2] << 8) | bytes[pos + 3];
    const segEnd = pos + 2 + segLen;
    if (segEnd > len) break;
    if (marker === 0xda) {
      parts.push(bytes.subarray(pos, len));
      pos = len;
      break;
    }
    const payload = bytes.subarray(pos + 4, segEnd);
    const info = nameJpegMarker(marker, payload);
    if (!info.isMetadata) {
      parts.push(bytes.subarray(pos, segEnd));
    }
    pos = segEnd;
  }
  if (pos < len) parts.push(bytes.subarray(pos));
  return concatBytes(parts);
}

function rebuildPng(bytes: Uint8Array): Uint8Array {
  const remove: Record<string, boolean> = { tEXt: true, zTXt: true, iTXt: true, eXIf: true, tIME: true };
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const len = bytes.length;
  const parts: Uint8Array[] = [bytes.subarray(0, 8)];
  let pos = 8;
  while (pos + 8 <= len) {
    const size = dv.getUint32(pos);
    const type = String.fromCharCode(bytes[pos + 4], bytes[pos + 5], bytes[pos + 6], bytes[pos + 7]);
    const chunkEnd = pos + 12 + size;
    if (chunkEnd > len) break;
    if (!remove[type]) parts.push(bytes.subarray(pos, chunkEnd));
    pos = chunkEnd;
  }
  return concatBytes(parts);
}

function rebuildWebp(bytes: Uint8Array): Uint8Array {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const len = bytes.length;
  const parts: Uint8Array[] = [];
  let pos = 12;
  let payloadBytes = 0;
  while (pos + 8 <= len) {
    const fourcc = String.fromCharCode(bytes[pos], bytes[pos + 1], bytes[pos + 2], bytes[pos + 3]);
    const size = dv.getUint32(pos + 4, true);
    const dataEnd = pos + 8 + size;
    if (dataEnd > len) break;
    if (fourcc !== 'EXIF' && fourcc !== 'XMP ' && fourcc !== 'XMP') {
      parts.push(bytes.subarray(pos, dataEnd));
      payloadBytes += 8 + size + (size % 2);
    }
    pos = dataEnd + (size % 2);
  }
  const out = new Uint8Array(12 + payloadBytes);
  out.set(bytes.subarray(0, 12), 0);
  const outDv = new DataView(out.buffer);
  outDv.setUint32(4, 4 + payloadBytes, true);
  let offset = 12;
  for (const part of parts) {
    out.set(part, offset);
    offset += part.length;
  }
  return out;
}

function concatBytes(parts: Uint8Array[]): Uint8Array {
  const total = parts.reduce((sum, p) => sum + p.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const part of parts) {
    out.set(part, offset);
    offset += part.length;
  }
  return out;
}

function kindToName(kind: ImageKind | 'other'): { format: string; extension: string; mime: string } {
  switch (kind) {
    case 'jpeg':
      return { format: 'JPEG', extension: 'jpg', mime: 'image/jpeg' };
    case 'png':
      return { format: 'PNG', extension: 'png', mime: 'image/png' };
    case 'webp':
      return { format: 'WebP', extension: 'webp', mime: 'image/webp' };
    default:
      return { format: 'Image', extension: 'img', mime: 'application/octet-stream' };
  }
}

export async function stripMetadata(file: File): Promise<StrippedImage> {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const kind = imageKindOf(bytes);
  if (kind === 'other') {
    throw new Error('This tool supports JPEG, PNG, and WebP files.');
  }

  let out: Uint8Array;
  let removed: string[] = [];
  if (kind === 'jpeg') {
    removed = scanJpeg(bytes).removed;
    out = rebuildJpeg(bytes);
  } else if (kind === 'png') {
    removed = scanPng(bytes).removed;
    out = rebuildPng(bytes);
  } else {
    removed = scanWebp(bytes).removed;
    out = rebuildWebp(bytes);
  }

  const meta = kindToName(kind);
  const blob = new Blob([new Uint8Array(out)], { type: meta.mime });
  return {
    blob,
    objectUrl: URL.createObjectURL(blob),
    format: meta.format,
    extension: meta.extension,
    found: removed,
    removed,
    beforeSize: file.size,
    afterSize: blob.size,
  };
}

function formatValue(value: unknown, seen = new Set<unknown>()): string | null {
  if (value === null || value === undefined) return null;
  if (typeof value === 'string') return value.replace(/\0/g, '').trim() || null;
  if (typeof value === 'number') return Number.isInteger(value) ? String(value) : String(Math.round(value * 1000) / 1000);
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (value instanceof Date) return value.toISOString();
  if (ArrayBuffer.isView(value)) {
    if (value instanceof Uint8Array && value.length > 0 && value.length < 200) {
      try {
        return decodeUtf8(value).trim() || null;
      } catch {
        return null;
      }
    }
    return null;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return null;
    if (value.length > 0 && typeof value[0] !== 'object') return value.map((v) => formatValue(v, seen)).filter(Boolean).join(', ');
    return null;
  }
  if (typeof value === 'object') {
    if (seen.has(value)) return null;
    seen.add(value);
    return '<object>';
  }
  return String(value);
}

function flattenGroup(name: string, obj: Record<string, unknown>): { groups: MetaGroup[] } {
  const rows: MetaRow[] = [];
  const subGroups: MetaGroup[] = [];
  const banned = new Set(['thumbnail', 'thumbnails', 'imagebitmap', 'blob']);

  for (const [key, value] of Object.entries(obj)) {
    const low = key.toLowerCase();
    if (value === null || value === undefined) continue;
    if (banned.has(low)) continue;
    if (ArrayBuffer.isView(value)) continue;
    if (typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date)) {
      const flat = flattenGroup(`${name} › ${key}`, value as Record<string, unknown>);
      subGroups.push(...flat.groups);
      continue;
    }
    const text = formatValue(value);
    if (text) rows.push({ key, value: text });
  }

  return { groups: rows.length ? [{ name, rows }, ...subGroups] : subGroups };
}

export async function readImageMetadata(file: File): Promise<ImageMetaInfo> {
  let width: number | null = null;
  let height: number | null = null;
  try {
    const bitmap = await createImageBitmap(file);
    width = bitmap.width;
    height = bitmap.height;
    bitmap.close();
  } catch {
    // dimensions may still be readable via headers below
  }

  const kind = imageKindOf(new Uint8Array(await file.slice(0, 16).arrayBuffer()));
  const { format, mime } = kindToName(kind);

  const buffer = await file.arrayBuffer();

  let data: Record<string, unknown> = {};
  try {
    const parsed = await exifr.parse(buffer, {
      exif: true,
      iptc: true,
      xmp: true,
      icc: true,
      reviveValues: true,
    });
    if (parsed && typeof parsed === 'object') data = parsed;
  } catch {
    data = {};
  }

  const groups: MetaGroup[] = [];

  try {
    const gps = (await exifr.gps(buffer)) as {
      latitude?: number;
      longitude?: number;
      altitude?: unknown;
      dateTime?: unknown;
    };
    if (gps && (gps.latitude !== undefined || gps.longitude !== undefined)) {
      const rows: MetaRow[] = [];
      if (gps.latitude !== undefined) rows.push({ key: 'latitude', value: `${gps.latitude}°` });
      if (gps.longitude !== undefined) rows.push({ key: 'longitude', value: `${gps.longitude}°` });
      if (gps.altitude !== undefined) rows.push({ key: 'altitude', value: formatValue(gps.altitude) || '' });
      if (gps.dateTime !== undefined) rows.push({ key: 'dateTime', value: formatValue(gps.dateTime) || '' });
      groups.push({ name: 'GPS', rows });
    }
  } catch {
    // ignore
  }

  const cleanData = { ...data };
  delete cleanData.latitude;
  delete cleanData.longitude;
  delete cleanData.altitude;
  groups.push(...flattenGroup('Metadata', cleanData).groups);

  return {
    filename: file.name,
    format,
    mime,
    size: file.size,
    width,
    height,
    groups,
    clean: groups.length === 0,
  };
}
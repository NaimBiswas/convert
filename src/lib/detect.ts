import type { Format } from './converters/types';
import { XMLParser } from 'fast-xml-parser';
import * as yaml from 'js-yaml';

export function detectFormat(text: string): Format | null {
  if (!text || !text.trim()) return null;

  const trimmed = text.trim();

  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    try {
      JSON.parse(trimmed);
      return 'JSON';
    } catch { }
  }

  if (trimmed.startsWith('<') && trimmed.endsWith('>')) {
    try {
      const parser = new XMLParser({ ignoreAttributes: true });
      parser.parse(trimmed);
      return 'XML';
    } catch { }
  }

  const lines = trimmed.split('\n').filter(Boolean);
  if (lines.length >= 2) {
    const commaCounts = lines.map(l => (l.match(/,/g) || []).length);
    const avgCommas = commaCounts.reduce((a, b) => a + b, 0) / commaCounts.length;
    if (avgCommas >= 2 && commaCounts.every(c => c > 0 && Math.abs(c - avgCommas) <= avgCommas * 0.5)) {
      return 'CSV';
    }
  }

  if (/^[\w-]+\s*:.+/m.test(trimmed)) {
    try {
      const parsed = yaml.load(trimmed);
      if (parsed !== null && parsed !== undefined && typeof parsed !== 'string' && typeof parsed !== 'number' && typeof parsed !== 'boolean') {
        return 'YAML';
      }
    } catch { }
  }

  return null;
}

export function validate(text: string, format: Format): { valid: boolean; message: string } {
  if (!text || !text.trim()) {
    return { valid: false, message: 'Editor is empty. Paste or upload data first.' };
  }

  try {
    switch (format) {
      case 'JSON': {
        JSON.parse(text);
        return { valid: true, message: 'Valid JSON' };
      }
      case 'CSV': {
        return { valid: true, message: 'CSV data detected' };
      }
      case 'XML': {
        const parser = new XMLParser({ ignoreAttributes: true });
        parser.parse(text);
        return { valid: true, message: 'Valid XML' };
      }
      case 'YAML': {
        yaml.load(text);
        return { valid: true, message: 'Valid YAML' };
      }
      case 'Excel (XLSX)': {
        return { valid: false, message: 'Cannot validate Excel from text. Use the Upload tab.' };
      }
      default:
        return { valid: true, message: `Format: ${format}` };
    }
  } catch (e) {
    return { valid: false, message: `${format}: ${(e as Error).message}` };
  }
}

export function formatText(text: string, format: Format): string {
  switch (format) {
    case 'JSON': {
      const parsed = JSON.parse(text);
      return JSON.stringify(parsed, null, 2);
    }
    case 'XML': {
      return text;
    }
    case 'YAML': {
      return text;
    }
    default:
      return text;
  }
}

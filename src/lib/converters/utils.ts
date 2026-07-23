import type { ColumnType } from './types';

export function flattenObject(obj: unknown, prefix = '', sep = '_'): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  if (obj === null || obj === undefined) {
    result[prefix || 'value'] = null;
    return result;
  }

  if (typeof obj !== 'object') {
    result[prefix || 'value'] = obj;
    return result;
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      result[prefix || 'value'] = null;
      return result;
    }
    const allPrimitive = obj.every(v => v === null || v === undefined || typeof v !== 'object');
    if (allPrimitive) {
      result[prefix || 'value'] = obj.join('; ');
      return result;
    }
    obj.forEach((item, i) => {
      Object.assign(result, flattenObject(item, prefix ? `${prefix}${sep}${i}` : `${i}`, sep));
    });
    return result;
  }

  const keys = Object.keys(obj as Record<string, unknown>);
  if (keys.length === 0) {
    result[prefix || 'value'] = null;
    return result;
  }

  for (const key of keys) {
    const val = (obj as Record<string, unknown>)[key];
    const newPrefix = prefix ? `${prefix}${sep}${key}` : key;
    Object.assign(result, flattenObject(val, newPrefix, sep));
  }

  return result;
}

export function normalizeRows<T extends Record<string, unknown>>(
  rows: T[],
  headers: string[],
): T[] {
  return rows.map(row => {
    const normalized: Record<string, unknown> = {};
    for (const h of headers) {
      const val = row[h];
      normalized[h] = val === null || val === undefined ? '' : val;
    }
    return normalized as T;
  });
}

export function inferColumnTypes<T extends Record<string, unknown>>(
  rows: T[],
  headers: string[],
): Record<string, ColumnType> {
  const types: Record<string, ColumnType> = {};

  for (const h of headers) {
    types[h] = inferTypeFromValues(rows.map(r => r[h]));
  }

  return types;
}

function inferTypeFromValues(values: unknown[]): ColumnType {
  let hasString = false;
  let hasNumber = false;
  let hasBoolean = false;
  let hasDate = false;
  let hasNull = false;

  for (const v of values) {
    if (v === null || v === undefined || v === '') {
      hasNull = true;
      continue;
    }
    if (typeof v === 'boolean') {
      hasBoolean = true;
      continue;
    }
    if (typeof v === 'number') {
      hasNumber = true;
      continue;
    }
    if (typeof v === 'string') {
      if (/^\d{4}-\d{2}-\d{2}/.test(v) || /^\d{1,2}\/\d{1,2}\/\d{4}/.test(v)) {
        hasDate = true;
        continue;
      }
      if (v.toLowerCase() === 'true' || v.toLowerCase() === 'false') {
        hasBoolean = true;
        continue;
      }
      if (/^-?\d+(\.\d+)?$/.test(v.trim())) {
        hasNumber = true;
        continue;
      }
      hasString = true;
      continue;
    }
    hasString = true;
  }

  const detected: ColumnType[] = [];
  if (hasNumber) detected.push('number');
  if (hasBoolean) detected.push('boolean');
  if (hasDate) detected.push('date');
  if (hasString) detected.push('string');
  if (hasNull) detected.push('null');

  if (detected.length === 0) return 'null';
  if (detected.length === 1) return detected[0];
  if (detected.length === 2 && hasNull) {
    const nonNull = detected.find(t => t !== 'null')!;
    return nonNull;
  }
  return 'string';
}

export function detectHeadersFromArrays(input: unknown): { headers: string[]; rows: unknown[][] } | null {
  if (!Array.isArray(input)) return null;
  if (input.length === 0) return null;

  const first = input[0];
  if (!Array.isArray(first)) return null;

  if (!first.every(v => typeof v === 'string')) return null;
  const headers = first as string[];
  const rows = input.slice(1) as unknown[][];

  return { headers, rows };
}

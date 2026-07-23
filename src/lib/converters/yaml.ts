import yaml from 'js-yaml';
import type { ParseResult } from './types';
import { flattenObject, normalizeRows, inferColumnTypes } from './utils';

export function parseYAML(input: string): ParseResult {
  const parsed = yaml.load(input);

  if (parsed === null || parsed === undefined) {
    return { headers: [], rows: [], meta: { rowCount: 0, colCount: 0, size: new Blob([input]).size } };
  }

  if (typeof parsed === 'number' || typeof parsed === 'boolean') {
    const rows = [{ value: String(parsed) }];
    const headers = ['value'];
    return {
      headers,
      rows,
      meta: { rowCount: 1, colCount: 1, size: new Blob([input]).size, columnTypes: inferColumnTypes(rows as any, headers) },
    };
  }

  if (typeof parsed === 'string') {
    const lines = parsed.split('\n').filter(Boolean);
    const rows = lines.map((line, i) => ({ line: i + 1, text: line }));
    const headers = ['line', 'text'];
    return {
      headers,
      rows,
      meta: { rowCount: rows.length, colCount: headers.length, size: new Blob([input]).size },
    };
  }

  const arr = Array.isArray(parsed) ? parsed : [parsed];
  const flatRows = arr.map(item => flattenObject(item));
  const headers = [...new Set(flatRows.flatMap(Object.keys))] as string[];
  const rawRows = flatRows.map(row =>
    Object.fromEntries(headers.map(h => [h, row[h] ?? null]))
  );
  const rows = normalizeRows(rawRows, headers);

  return {
    headers,
    rows,
    meta: {
      rowCount: rows.length,
      colCount: headers.length,
      size: new Blob([input]).size,
      columnTypes: inferColumnTypes(rawRows, headers),
    },
  };
}

export function stringifyYAML(data: Record<string, unknown>[]): string {
  return yaml.dump(data, { indent: 2, lineWidth: -1, noRefs: true });
}

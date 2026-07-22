import type { ParseResult } from './types';

export function parseJSON(input: string): ParseResult {
  const parsed = JSON.parse(input);
  const arr = Array.isArray(parsed) ? parsed : [parsed];
  const headers = [...new Set(arr.flatMap(Object.keys))];
  const rows = arr.map((item: Record<string, unknown>) =>
    Object.fromEntries(headers.map(h => [h, item[h] ?? '']))
  );
  return {
    headers,
    rows,
    meta: {
      rowCount: rows.length,
      colCount: headers.length,
      size: new Blob([input]).size,
    },
  };
}

export function stringifyJSON(data: Record<string, unknown>[]): string {
  return JSON.stringify(data, null, 2);
}

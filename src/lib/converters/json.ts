import type { ParseResult } from './types';
import { flattenObject, normalizeRows, inferColumnTypes, detectHeadersFromArrays } from './utils';

export function parseJSON(input: string): ParseResult {
  const parsed = JSON.parse(input);

  const arrayHeader = detectHeadersFromArrays(parsed);
  if (arrayHeader) {
    const headers = arrayHeader.headers;
    const rows = arrayHeader.rows.map(row => {
      const obj: Record<string, unknown> = {};
      headers.forEach((h, i) => { obj[h] = row[i] ?? null; });
      return obj;
    });
    return {
      headers,
      rows,
      meta: {
        rowCount: rows.length,
        colCount: headers.length,
        size: new Blob([input]).size,
        columnTypes: inferColumnTypes(rows, headers),
      },
    };
  }

  const arr = Array.isArray(parsed) ? parsed : [parsed];
  const flatRows = arr.map(item => flattenObject(item));
  const allKeys = [...new Set(flatRows.flatMap(Object.keys))];
  const rawRows = flatRows.map(row =>
    Object.fromEntries(allKeys.map(h => [h, row[h] ?? null]))
  );
  const headers = allKeys;
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

export function stringifyJSON(data: Record<string, unknown>[]): string {
  return JSON.stringify(data, null, 2);
}

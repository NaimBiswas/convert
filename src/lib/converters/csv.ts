import Papa from 'papaparse';
import type { ParseResult } from './types';
import { flattenObject, normalizeRows, inferColumnTypes } from './utils';

export function parseCSV(input: string): ParseResult {
  const result = Papa.parse<Record<string, unknown>>(input, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  });

  const flatRows = result.data.map(row => flattenObject(row));
  const headers = [...new Set(flatRows.flatMap(Object.keys))];
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

export function stringifyCSV(data: Record<string, unknown>[]): string {
  return Papa.unparse(data);
}

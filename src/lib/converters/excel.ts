import * as XLSX from 'xlsx';
import type { ParseResult } from './types';
import { flattenObject, normalizeRows, inferColumnTypes } from './utils';

export function parseExcel(data: ArrayBuffer): ParseResult {
  const workbook = XLSX.read(data, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const jsonData = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);
  const flatRows = jsonData.map(row => flattenObject(row));
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
      size: data.byteLength,
      columnTypes: inferColumnTypes(rawRows, headers),
    },
  };
}

export function stringifyExcel(data: Record<string, unknown>[]): Uint8Array {
  const sheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');

  const output = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  return new Uint8Array(output);
}

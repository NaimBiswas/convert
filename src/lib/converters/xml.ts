import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import type { ParseResult } from './types';
import { flattenObject, normalizeRows, inferColumnTypes } from './utils';

export function parseXML(input: string): ParseResult {
  const parser = new XMLParser({
    ignoreAttributes: false,
    trimValues: true,
    parseTagValue: true,
    parseAttributeValue: true,
  });

  const parsed = parser.parse(input);
  const rootKey = Object.keys(parsed)[0];
  let root = parsed[rootKey];

  if (!root) {
    return { headers: [], rows: [], meta: { rowCount: 0, colCount: 0, size: 0 } };
  }

  if (typeof root === 'object' && !Array.isArray(root)) {
    const itemsKey = Object.keys(root).find(k => Array.isArray(root[k]));
    if (itemsKey) {
      root = root[itemsKey];
    } else {
      root = [root];
    }
  }

  const arr = Array.isArray(root) ? root : [root];
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

export function stringifyXML(data: Record<string, unknown>[], rootName = 'root', itemName = 'item'): string {
  const builder = new XMLBuilder({
    ignoreAttributes: false,
    format: true,
    suppressEmptyNode: true,
  });

  const obj = {
    [rootName]: {
      [itemName]: data,
    },
  };

  return builder.build(obj);
}

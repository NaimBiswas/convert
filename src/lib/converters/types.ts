export type Format = 'JSON' | 'CSV' | 'Excel (XLSX)' | 'XML' | 'YAML' | 'HTML Table' | 'Markdown';

export interface ConvertResult {
  data: string;
  format: Format;
  error?: string;
}

export interface ParseResult<T = Record<string, unknown>> {
  headers: string[];
  rows: T[];
  meta: {
    rowCount: number;
    colCount: number;
    size: number;
  };
}

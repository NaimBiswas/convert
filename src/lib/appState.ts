import type { ParseResult, Format } from './converters/types';

const MAX_HISTORY_ENTRIES = 5;

export interface AppState {
  fromFormat: Format;
  toFormat: Format;
  parseResult: ParseResult | null;
  rawInput: string;
  searchQuery: string;
  page: number;
  pageSize: number;
  sortColumn: string | null;
  sortDirection: 'asc' | 'desc';
  history: ParseResult[];
  historyIndex: number;
}

type Listener = () => void;

let state: AppState = {
  fromFormat: 'JSON',
  toFormat: 'Excel (XLSX)',
  parseResult: null,
  rawInput: '',
  searchQuery: '',
  page: 0,
  pageSize: 50,
  sortColumn: null,
  sortDirection: 'asc',
  history: [],
  historyIndex: -1,
};

const listeners = new Set<Listener>();

export function getState(): AppState {
  return state;
}

export function setState(partial: Partial<AppState>): void {
  state = { ...state, ...partial };
  listeners.forEach(fn => fn());
}

export function subscribe(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function pushHistory(parseResult: ParseResult): void {
  const newHistory = state.history.slice(0, state.historyIndex + 1);
  newHistory.push(structuredClone(parseResult));
  if (newHistory.length > MAX_HISTORY_ENTRIES) {
    newHistory.splice(0, newHistory.length - MAX_HISTORY_ENTRIES);
  }
  state = {
    ...state,
    parseResult,
    history: newHistory,
    historyIndex: newHistory.length - 1,
    page: 0,
    sortColumn: null,
    sortDirection: 'asc',
    searchQuery: '',
  };
  listeners.forEach(fn => fn());
}

export function undo(): void {
  if (state.historyIndex > 0) {
    const idx = state.historyIndex - 1;
    state = { ...state, parseResult: state.history[idx], historyIndex: idx };
    listeners.forEach(fn => fn());
  }
}

export function redo(): void {
  if (state.historyIndex < state.history.length - 1) {
    const idx = state.historyIndex + 1;
    state = { ...state, parseResult: state.history[idx], historyIndex: idx };
    listeners.forEach(fn => fn());
  }
}

export function getDisplayData(): { headers: string[]; rows: Record<string, unknown>[]; columnTypes: Record<string, string> } | null {
  const pr = state.parseResult;
  if (!pr) return null;

  let rows = pr.rows;

  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    rows = rows.filter(r =>
      Object.values(r).some(v => String(v).toLowerCase().includes(q))
    );
  }

  if (state.sortColumn) {
    const col = state.sortColumn;
    const dir = state.sortDirection === 'asc' ? 1 : -1;
    rows = [...rows].sort((a, b) => {
      const va = a[col];
      const vb = b[col];
      if (va == null) return 1;
      if (vb == null) return -1;
      if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * dir;
      return String(va).localeCompare(String(vb)) * dir;
    });
  }

  const columnTypes = pr.meta.columnTypes ?? {};

  return { headers: pr.headers, rows, columnTypes };
}

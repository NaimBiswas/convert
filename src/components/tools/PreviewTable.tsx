"use client";

import { useEffect } from "react";
import {
  subscribe,
  getState,
  setState,
  getDisplayData,
  pushHistory,
  undo,
  redo,
} from "@/lib/appState";
import { stringifyCSV } from "@/lib/converters/csv";
import { stringifyJSON } from "@/lib/converters/json";
import { stringifyXML } from "@/lib/converters/xml";
import { stringifyYAML } from "@/lib/converters/yaml";
import { toHTMLTable, toMarkdown, toPDF, downloadBlob, escapeHtml } from "@/lib/exportUtils";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";

export default function PreviewTable({ locale }: { locale: Locale }) {
  const t = ui[locale].tool;

  useEffect(() => {
    const root = document.getElementById("previewRoot") as HTMLElement;
    const sectionLabel = document.getElementById("sectionLabel") as HTMLElement | null;
    const tableHead = document.getElementById("tableHead") as HTMLElement | null;
    const tableBody = document.getElementById("tableBody") as HTMLElement | null;
    const tableMeta = document.getElementById("tableMeta") as HTMLElement | null;
    const searchInput = document.getElementById("searchInput") as HTMLInputElement | null;
    const findReplaceBtn = document.getElementById("findReplaceBtn");
    const findReplaceBar = document.getElementById("findReplaceBar") as HTMLElement | null;
    const findInput = document.getElementById("findInput") as HTMLInputElement | null;
    const replaceInput = document.getElementById("replaceInput") as HTMLInputElement | null;
    const replaceBtn = document.getElementById("replaceBtn");
    const replaceAllBtn = document.getElementById("replaceAllBtn");
    const closeFindBtn = document.getElementById("closeFindBtn");
    const transposeBtn = document.getElementById("transposeBtn");
    const caseBtn = document.getElementById("caseBtn");
    const caseBar = document.getElementById("caseBar") as HTMLElement | null;
    const caseColSelect = document.getElementById("caseColSelect") as HTMLSelectElement | null;
    const caseUpper = document.getElementById("caseUpper");
    const caseLower = document.getElementById("caseLower");
    const caseCapitalize = document.getElementById("caseCapitalize");
    const closeCaseBtn = document.getElementById("closeCaseBtn");
    const undoBtn = document.getElementById("undoBtn") as HTMLButtonElement | null;
    const redoBtn = document.getElementById("redoBtn") as HTMLButtonElement | null;
    const addRowBtn = document.getElementById("addRowBtn");
    const addColBtn = document.getElementById("addColBtn");
    const delEmptyRowsBtn = document.getElementById("delEmptyRowsBtn");
    const delDupesBtn = document.getElementById("delDupesBtn");
    const pagination = document.getElementById("pagination") as HTMLElement | null;
    const downloadXLSX = document.getElementById("downloadXLSX");
    const downloadCSV = document.getElementById("downloadCSV");
    const downloadJSON = document.getElementById("downloadJSON");
    const downloadXML = document.getElementById("downloadXML");
    const downloadYAML = document.getElementById("downloadYAML");
    const downloadHTML = document.getElementById("downloadHTML");
    const downloadMD = document.getElementById("downloadMD");
    const downloadPDF = document.getElementById("downloadPDF");
    const copyJSONBtn = document.getElementById("copyJSONBtn");
    const copyCSVBtn = document.getElementById("copyCSVBtn");
    const copyMDBtn = document.getElementById("copyMDBtn");

    if (!root) return;

    let editingCell: { row: number; col: string } | null = null;

    function render() {
      const state = getState();
      const display = getDisplayData();

      if (!display || display.rows.length === 0) {
        root.style.display = "none";
        return;
      }

      root.style.display = "";

      const { headers, rows, columnTypes } = display;
      const totalRows = state.parseResult?.rows.length ?? rows.length;
      const sz = state.pageSize || 50;
      const totalPages = Math.max(1, Math.ceil(rows.length / sz));
      const page = Math.min(state.page, totalPages - 1);
      const start = page * sz;
      const pageRows = rows.slice(start, start + sz);

      if (sectionLabel) sectionLabel.textContent = `Preview — ${totalRows} rows × ${headers.length} columns`;

      renderHead(headers, columnTypes, state.sortColumn, state.sortDirection);
      renderBody(headers, pageRows);
      renderFooter(headers.length, totalRows, page, totalPages);

      if (undoBtn) undoBtn.toggleAttribute("disabled", state.historyIndex <= 0);
      if (redoBtn) redoBtn.toggleAttribute("disabled", state.historyIndex >= state.history.length - 1);

      if (state.history.length > 0 && searchInput) {
        searchInput.value = state.searchQuery;
      }

      highlightDownloadBtn(state.toFormat);
    }

    function highlightDownloadBtn(format: string) {
      const ids = [
        "downloadXLSX",
        "downloadCSV",
        "downloadJSON",
        "downloadXML",
        "downloadYAML",
        "downloadHTML",
        "downloadMD",
        "downloadPDF",
      ];
      ids.forEach((id) => document.getElementById(id)?.classList.remove("primary"));
      const map: Record<string, string> = {
        "Excel (XLSX)": "downloadXLSX",
        CSV: "downloadCSV",
        JSON: "downloadJSON",
        XML: "downloadXML",
        YAML: "downloadYAML",
        "HTML Table": "downloadHTML",
        Markdown: "downloadMD",
        PDF: "downloadPDF",
      };
      const target = map[format] && document.getElementById(map[format]);
      if (target) target.classList.add("primary");
    }

    let dragCol: string | null = null;

    function renderHead(
      headers: string[],
      columnTypes: Record<string, string>,
      sortCol: string | null,
      sortDir: string
    ) {
      if (!tableHead) return;
      tableHead.innerHTML =
        "<tr>" +
        headers
          .map((h) => {
            const sortIcon = sortCol === h ? (sortDir === "asc" ? " ▲" : " ▼") : "";
            const type = columnTypes[h] || "";
            const badge = type ? ` <span class="type-badge ${type}">${type}</span>` : "";
            return `<th data-col="${h}" draggable="true">${h}${badge}<span class="sort-icon">${sortIcon}</span></th>`;
          })
          .join("") +
        '<th class="action-col">Actions</th></tr>';

      tableHead.querySelectorAll("th[data-col]").forEach((th) => {
        th.addEventListener("click", (e) => {
          if ((e.target as HTMLElement).closest(".no-sort")) return;
          const col = (th as HTMLElement).dataset.col!;
          const st = getState();
          if (st.sortColumn === col) {
            setState({ sortDirection: st.sortDirection === "asc" ? "desc" : "asc" });
          } else {
            setState({ sortColumn: col, sortDirection: "asc" });
          }
        });

        th.addEventListener("dragstart", (e) => {
          dragCol = (th as HTMLElement).dataset.col!;
          (e as DragEvent).dataTransfer!.effectAllowed = "move";
        });

        th.addEventListener("dragover", (e) => {
          e.preventDefault();
          (e as DragEvent).dataTransfer!.dropEffect = "move";
        });

        th.addEventListener("drop", (e) => {
          e.preventDefault();
          const targetCol = (th as HTMLElement).dataset.col!;
          if (!dragCol || dragCol === targetCol) return;
          const st = getState();
          const pr = st.parseResult;
          if (!pr) return;
          const headers = [...pr.headers];
          const fromIdx = headers.indexOf(dragCol);
          const toIdx = headers.indexOf(targetCol);
          if (fromIdx === -1 || toIdx === -1) return;
          headers.splice(fromIdx, 1);
          headers.splice(toIdx, 0, dragCol);
          const rows = pr.rows.map((r) => {
            const nr: Record<string, unknown> = {};
            headers.forEach((h) => {
              nr[h] = r[h] ?? "";
            });
            return nr;
          });
          const updated = { ...pr, headers, rows, meta: { ...pr.meta } };
          pushHistory(updated);
          dragCol = null;
        });

        th.addEventListener("dragend", () => {
          dragCol = null;
        });
      });
    }

    function truncate(text: string, max: number): string {
      return text.length > max ? text.slice(0, max) + "..." : text;
    }

    function renderBody(headers: string[], rows: Record<string, unknown>[]) {
      if (!tableBody) return;
      tableBody.innerHTML = rows
        .map((row, ri) => {
          const cells = headers
            .map((h) => {
              const val = row[h] ?? "";
              const raw = typeof val === "object" ? JSON.stringify(val) : String(val);
              const display = truncate(escapeHtml(raw), 55);
              return `<td data-col="${h}" data-row="${ri}" class="editable" title="${escapeHtml(raw)}">${display}</td>`;
            })
            .join("");
          return `<tr>${cells}<td class="action-col"><button class="del-row-btn" data-idx="${ri}">✕</button></td></tr>`;
        })
        .join("");

      tableBody.querySelectorAll(".editable").forEach((el) => {
        el.addEventListener("dblclick", () => startEdit(el as HTMLElement));
      });

      tableBody.querySelectorAll(".del-row-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = parseInt((btn as HTMLElement).dataset.idx!);
          deleteRow(idx);
        });
      });
    }

    function renderFooter(colCount: number, totalRows: number, page: number, totalPages: number) {
      if (tableMeta) tableMeta.textContent = `${totalRows} rows · ${colCount} cols`;
      if (pagination) {
        pagination.innerHTML = Array.from({ length: totalPages }, (_, i) =>
          `<button class="page-btn${i === page ? " current" : ""}" data-page="${i}">${i + 1}</button>`
        ).join("");

        pagination.querySelectorAll(".page-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            setState({ page: parseInt((btn as HTMLElement).dataset.page!) });
          });
        });
      }
    }

    function startEdit(el: HTMLElement) {
      if (editingCell) return;
      const col = el.dataset.col!;
      const rowIdx = parseInt(el.dataset.row!);
      const current = el.textContent || "";

      const input = document.createElement("input");
      input.type = "text";
      input.value = current;
      input.className = "cell-editor";
      el.textContent = "";
      el.appendChild(input);
      input.focus();
      input.select();

      editingCell = { row: rowIdx, col };

      function finish() {
        if (!editingCell) return;
        const newVal = input.value;
        const st = getState();
        const display = getDisplayData();
        if (!display) return;

        const sz = st.pageSize || 50;
        const actualRow = st.page * sz + rowIdx;
        const rows = [...(st.parseResult?.rows ?? [])];
        if (actualRow < rows.length && st.parseResult) {
          rows[actualRow] = { ...rows[actualRow], [col]: newVal };
          const updated = { ...st.parseResult, rows };
          pushHistory(updated);
        }
        editingCell = null;
      }

      input.addEventListener("blur", finish);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          input.blur();
        }
        if (e.key === "Escape") {
          el.textContent = current;
          editingCell = null;
        }
      });
    }

    searchInput?.addEventListener("input", () => {
      setState({ searchQuery: searchInput.value, page: 0 });
    });

    findReplaceBtn?.addEventListener("click", () => {
      if (!findReplaceBar) return;
      findReplaceBar.style.display = findReplaceBar.style.display === "none" ? "flex" : "none";
      if (findReplaceBar.style.display === "flex") findInput?.focus();
    });

    closeFindBtn?.addEventListener("click", () => {
      if (findReplaceBar) findReplaceBar.style.display = "none";
    });

    function doFindReplace(all: boolean) {
      const find = findInput?.value || "";
      const replace = replaceInput?.value || "";
      if (!find) return;
      const st = getState();
      const rows = st.parseResult?.rows;
      if (!rows) return;
      const newRows = rows.map((r) => {
        const nr = { ...r };
        for (const key of Object.keys(nr)) {
          if (typeof nr[key] === "string" && (nr[key] as string).includes(find)) {
            if (all) {
              nr[key] = (nr[key] as string).split(find).join(replace);
            } else {
              const st2 = getState();
              if (st2.searchQuery) {
                nr[key] = (nr[key] as string).replace(find, replace);
              }
            }
          }
        }
        return nr;
      });
      if (!st.parseResult) return;
      const updated = { ...st.parseResult, rows: newRows };
      pushHistory(updated);
      if (!all && findReplaceBar) findReplaceBar.style.display = "none";
    }

    replaceBtn?.addEventListener("click", () => doFindReplace(false));
    replaceAllBtn?.addEventListener("click", () => doFindReplace(true));

    transposeBtn?.addEventListener("click", () => {
      const st = getState();
      const pr = st.parseResult;
      if (!pr || pr.rows.length === 0) return;
      const headers = pr.headers;
      const rows = pr.rows;
      const newHeaders = ["field", ...rows.map((_, i) => `Row ${i + 1}`)];
      const newRows = headers.map((h) => {
        const row: Record<string, unknown> = { field: h };
        rows.forEach((r, i) => {
          row[`Row ${i + 1}`] = r[h] ?? "";
        });
        return row;
      });
      const updated = {
        ...pr,
        headers: newHeaders,
        rows: newRows,
        meta: { ...pr.meta, rowCount: newRows.length, colCount: newHeaders.length },
      };
      pushHistory(updated);
    });

    caseBtn?.addEventListener("click", () => {
      const st = getState();
      if (!st.parseResult) return;
      if (!caseBar) return;
      caseBar.style.display = caseBar.style.display === "none" ? "flex" : "none";
      if (caseBar.style.display === "flex" && caseColSelect) {
        caseColSelect.innerHTML = st.parseResult.headers.map((h) => `<option value="${h}">${h}</option>`).join("");
      }
    });

    closeCaseBtn?.addEventListener("click", () => {
      if (caseBar) caseBar.style.display = "none";
    });

    function applyCase(transform: (s: string) => string) {
      const col = caseColSelect?.value || "";
      const st = getState();
      const rows = st.parseResult?.rows;
      if (!rows || !st.parseResult) return;
      const newRows = rows.map((r) => {
        const nr = { ...r };
        if (typeof nr[col] === "string") nr[col] = transform(nr[col] as string);
        return nr;
      });
      const updated = { ...st.parseResult, rows: newRows };
      pushHistory(updated);
    }

    caseUpper?.addEventListener("click", () => applyCase((s) => s.toUpperCase()));
    caseLower?.addEventListener("click", () => applyCase((s) => s.toLowerCase()));
    caseCapitalize?.addEventListener("click", () => applyCase((s) => s.replace(/\b\w/g, (c) => c.toUpperCase())));

    undoBtn?.addEventListener("click", undo);
    redoBtn?.addEventListener("click", redo);

    const onKeydown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      const isInput = tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement).isContentEditable;
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        if (!isInput) {
          if (e.shiftKey) {
            redo();
          } else {
            undo();
          }
        }
        e.preventDefault();
      }
      if (e.key === "Escape") {
        if (findReplaceBar) findReplaceBar.style.display = "none";
        if (caseBar) caseBar.style.display = "none";
      }
    };
    document.addEventListener("keydown", onKeydown);

    addRowBtn?.addEventListener("click", () => {
      const st = getState();
      const rows = st.parseResult?.rows;
      if (!rows || !st.parseResult) return;
      const emptyRow: Record<string, unknown> = {};
      st.parseResult.headers.forEach((h) => {
        emptyRow[h] = "";
      });
      const newRows = [...rows, emptyRow];
      const updated = {
        ...st.parseResult,
        rows: newRows,
        meta: { ...st.parseResult.meta, rowCount: newRows.length },
      };
      pushHistory(updated);
    });

    addColBtn?.addEventListener("click", () => {
      const name = prompt("New column name:");
      if (!name) return;
      const st = getState();
      const rows = st.parseResult?.rows;
      if (!rows || !st.parseResult) return;
      const newHeaders = [...st.parseResult.headers, name];
      const newRows = rows.map((r) => ({ ...r, [name]: "" }));
      const updated = {
        ...st.parseResult,
        headers: newHeaders,
        rows: newRows,
        meta: { ...st.parseResult.meta, colCount: newHeaders.length },
      };
      pushHistory(updated);
    });

    function deleteRow(idx: number) {
      const st = getState();
      const rows = st.parseResult?.rows;
      if (!rows || !st.parseResult) return;
      const sz = st.pageSize || 50;
      const actualIdx = st.page * sz + idx;
      const newRows = rows.filter((_, i) => i !== actualIdx);
      const updated = {
        ...st.parseResult,
        rows: newRows,
        meta: { ...st.parseResult.meta, rowCount: newRows.length },
      };
      pushHistory(updated);
    }

    delEmptyRowsBtn?.addEventListener("click", () => {
      const st = getState();
      const rows = st.parseResult?.rows;
      if (!rows || !st.parseResult) return;
      const newRows = rows.filter((r) =>
        Object.values(r).some((v) => v !== "" && v !== null && v !== undefined)
      );
      if (newRows.length === rows.length) return;
      const updated = {
        ...st.parseResult,
        rows: newRows,
        meta: { ...st.parseResult.meta, rowCount: newRows.length },
      };
      pushHistory(updated);
    });

    delDupesBtn?.addEventListener("click", () => {
      const st = getState();
      const rows = st.parseResult?.rows;
      if (!rows || !st.parseResult) return;
      const seen = new Set<string>();
      const newRows = rows.filter((r) => {
        const key = JSON.stringify(r);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      if (newRows.length === rows.length) return;
      const updated = {
        ...st.parseResult,
        rows: newRows,
        meta: { ...st.parseResult.meta, rowCount: newRows.length },
      };
      pushHistory(updated);
    });

    function getExportRows(): Record<string, unknown>[] | null {
      const display = getDisplayData();
      return display?.rows ?? null;
    }

    function getExportHeaders(): string[] {
      const display = getDisplayData();
      return display?.headers ?? [];
    }

    function getFilename(ext: string) {
      return "converted" + ext;
    }

    downloadXLSX?.addEventListener("click", () => {
      const rows = getExportRows();
      if (!rows) return;
      const sheetName = "Sheet1";
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, sheetName);

      const cols = Object.keys(rows[0] || {}).map((_, i) => ({
        wch: Math.max(12, String(rows[0]?.[Object.keys(rows[0])[i]] ?? "").length + 2),
      }));
      ws["!cols"] = cols;

      const data = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      downloadBlob(
        new Uint8Array(data),
        getFilename(".xlsx"),
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
    });

    downloadCSV?.addEventListener("click", () => {
      const rows = getExportRows();
      if (!rows) return;
      downloadBlob(stringifyCSV(rows), getFilename(".csv"), "text/csv");
    });

    downloadJSON?.addEventListener("click", () => {
      const rows = getExportRows();
      if (!rows) return;
      downloadBlob(stringifyJSON(rows), getFilename(".json"), "application/json");
    });

    downloadXML?.addEventListener("click", () => {
      const rows = getExportRows();
      if (!rows) return;
      downloadBlob(stringifyXML(rows), getFilename(".xml"), "application/xml");
    });

    downloadYAML?.addEventListener("click", () => {
      const rows = getExportRows();
      if (!rows) return;
      downloadBlob(stringifyYAML(rows), getFilename(".yaml"), "text/yaml");
    });

    downloadHTML?.addEventListener("click", () => {
      const rows = getExportRows();
      const headers = getExportHeaders();
      if (!rows) return;
      const html =
        '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>' +
        toHTMLTable(rows, headers) +
        "</body></html>";
      downloadBlob(html, getFilename(".html"), "text/html");
    });

    downloadMD?.addEventListener("click", () => {
      const rows = getExportRows();
      const headers = getExportHeaders();
      if (!rows) return;
      downloadBlob(toMarkdown(rows, headers), getFilename(".md"), "text/markdown");
    });

    downloadPDF?.addEventListener("click", () => {
      const rows = getExportRows();
      const headers = getExportHeaders();
      if (!rows) return;
      const doc = new jsPDF();
      doc.setFontSize(14);
      doc.text("Exported Data", 14, 16);
      toPDF(doc, rows, headers);
      doc.save(getFilename(".pdf"));
    });

    function clipboardCopy(text: string, btn: HTMLElement) {
      navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = "✓ Copied!";
        setTimeout(() => {
          btn.textContent = orig;
        }, 2000);
      });
    }

    copyJSONBtn?.addEventListener("click", () => {
      const rows = getExportRows();
      if (!rows) return;
      clipboardCopy(stringifyJSON(rows), copyJSONBtn as HTMLElement);
    });

    copyCSVBtn?.addEventListener("click", () => {
      const rows = getExportRows();
      if (!rows) return;
      clipboardCopy(stringifyCSV(rows), copyCSVBtn as HTMLElement);
    });

    copyMDBtn?.addEventListener("click", () => {
      const rows = getExportRows();
      const headers = getExportHeaders();
      if (!rows) return;
      clipboardCopy(toMarkdown(rows, headers), copyMDBtn as HTMLElement);
    });

    const unsubscribe = subscribe(render);

    return () => {
      unsubscribe();
      document.removeEventListener("keydown", onKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="previewRoot" style={{ display: "none" }}>
      <div className="section-label" id="sectionLabel">
        {t.preview}
      </div>

      <div className="toolbar" id="toolbar">
        <div className="toolbar-left">
          <input type="text" id="searchInput" className="search-input" placeholder={t.searchPlaceholder} />
          <button className="tool-btn" id="findReplaceBtn" title={t.findReplace}>
            🔍
          </button>
          <button className="tool-btn" id="transposeBtn" title={t.transpose}>
            ↕⇄
          </button>
          <button className="tool-btn" id="caseBtn" title={t.caseTransforms}>
            Aa
          </button>
        </div>
        <div className="toolbar-right">
          <button className="tool-btn" id="undoBtn" title={`${t.undo} (Ctrl+Z)`} disabled>
            ↩ {t.undo}
          </button>
          <button className="tool-btn" id="redoBtn" title={`${t.redo} (Ctrl+Shift+Z)`} disabled>
            ↪ {t.redo}
          </button>
          <button className="tool-btn" id="addRowBtn" title={t.addRow}>
            + {t.addRow}
          </button>
          <button className="tool-btn" id="addColBtn" title={t.addColumn}>
            + {t.addColumn}
          </button>
        </div>
      </div>

      <div id="findReplaceBar" className="find-bar" style={{ display: "none" }}>
        <input type="text" id="findInput" className="find-input" placeholder={t.findPlaceholder} />
        <input type="text" id="replaceInput" className="find-input" placeholder={t.replacePlaceholder} />
        <button className="tool-btn" id="replaceBtn">
          {t.replace}
        </button>
        <button className="tool-btn" id="replaceAllBtn">
          {t.replaceAll}
        </button>
        <button className="tool-btn" id="closeFindBtn">
          ✕
        </button>
      </div>

      <div id="caseBar" className="find-bar" style={{ display: "none" }}>
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{t.transformColumn}</span>
        <select id="caseColSelect" className="find-input" style={{ width: "auto" }}></select>
        <button className="tool-btn" id="caseUpper">
          {t.uppercase}
        </button>
        <button className="tool-btn" id="caseLower">
          {t.lowercase}
        </button>
        <button className="tool-btn" id="caseCapitalize">
          {t.capitalize}
        </button>
        <button className="tool-btn" id="closeCaseBtn">
          ✕
        </button>
      </div>

      <div className="table-wrap">
        <div className="table-scroll">
          <table id="dataTable">
            <thead id="tableHead"></thead>
            <tbody id="tableBody"></tbody>
          </table>
        </div>
        <div className="table-footer" id="tableFooter">
          <span id="tableMeta"></span>
          <div className="footer-actions">
            <button className="tool-btn sm" id="delEmptyRowsBtn" title={t.deleteEmptyRows}>
              ✕ {t.empty}
            </button>
            <button className="tool-btn sm" id="delDupesBtn" title={t.removeDuplicates}>
              ✕ {t.dups}
            </button>
          </div>
          <div className="pagination" id="pagination"></div>
        </div>
      </div>

      <div className="output-area" id="outputArea">
        <button className="btn-download" id="downloadXLSX">
          ⬇ XLSX
        </button>
        <button className="btn-download" id="downloadCSV">
          ⬇ CSV
        </button>
        <button className="btn-download" id="downloadJSON">
          ⬇ JSON
        </button>
        <button className="btn-download" id="downloadXML">
          ⬇ XML
        </button>
        <button className="btn-download" id="downloadYAML">
          ⬇ YAML
        </button>
        <button className="btn-download" id="downloadHTML">
          ⬇ HTML
        </button>
        <button className="btn-download" id="downloadMD">
          ⬇ Markdown
        </button>
        <button className="btn-download" id="downloadPDF">
          ⬇ PDF
        </button>
        <div className="clip-group">
          <button className="btn-download" id="copyJSONBtn">
            📋 JSON
          </button>
          <button className="btn-download" id="copyCSVBtn">
            📋 CSV
          </button>
          <button className="btn-download" id="copyMDBtn">
            📋 Markdown
          </button>
        </div>
      </div>
      <div className="privacy-footnote">
        <span>🔒</span>
        <span>{t.privacyFootnote}</span>
      </div>
    </div>
  );
}

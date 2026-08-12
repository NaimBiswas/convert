"use client";

import { useEffect } from "react";
import { detectFormat, validate, formatText } from "@/lib/detect";
import { parseJSON } from "@/lib/converters/json";
import { parseCSV } from "@/lib/converters/csv";
import { parseXML } from "@/lib/converters/xml";
import { parseYAML } from "@/lib/converters/yaml";
import { pushHistory, setState } from "@/lib/appState";
import {
  generateRandomData,
  encodeBase64,
  decodeBase64,
  encodeHex,
  decodeHex,
} from "@/lib/tools";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";
import * as XLSX from "xlsx";

const SAMPLE_DATA: Record<string, string> = {
  JSON: `{
  "employees": [
    { "name": "Alice", "role": "Engineer", "active": true },
    { "name": "Bob", "role": "Designer", "active": false },
    { "name": "Charlie", "role": "Manager", "active": true }
  ]
}`,
  CSV: `name,email,age,role,active
Sarah Chen,sarah.chen@acmecorp.com,34,Engineering Lead,true
Marcus Johnson,marcus.j@startup.io,28,Backend Developer,true
Priya Sharma,priya.sharma@dataflow.co,31,Data Analyst,false
Alex Kim,alex.kim@webster.tech,26,Frontend Developer,true
Yuki Tanaka,yuki.tanaka@bridge.jp,42,Product Manager,true`,
  XML: `<?xml version="1.0" encoding="UTF-8"?>
<employees>
  <employee>
    <name>Alice</name>
    <role>Engineer</role>
    <active>true</active>
  </employee>
  <employee>
    <name>Bob</name>
    <role>Designer</role>
    <active>false</active>
  </employee>
  <employee>
    <name>Charlie</name>
    <role>Manager</role>
    <active>true</active>
  </employee>
</employees>`,
  YAML: `employees:
  - name: Alice
    role: Engineer
    active: true
  - name: Bob
    role: Designer
    active: false
  - name: Charlie
    role: Manager
    active: true`,
  "Excel (XLSX)": "Use the Upload tab to load an Excel (.xlsx) file.",
};

export default function InputPanel({ locale }: { locale: Locale }) {
  const t = ui[locale].tool;

  useEffect(() => {
    const editor = document.getElementById("codeEditor") as HTMLTextAreaElement;
    const tabs = document.querySelectorAll("#inputTabs .input-tab");
    const loadExample = document.getElementById("loadExample");
    const clearBtn = document.getElementById("clearBtn");
    const validateBtn = document.getElementById("validateBtn");
    const formatBtn = document.getElementById("formatBtn") as HTMLButtonElement | null;
    const convertBtn = document.getElementById("convertBtn") as HTMLButtonElement | null;
    const uploadZone = document.getElementById("uploadZone");
    const fileInput = document.getElementById("fileInput") as HTMLInputElement | null;
    const browseLink = document.getElementById("browseLink");
    const urlZone = document.getElementById("urlZone");
    const urlInput = document.getElementById("urlInput") as HTMLInputElement | null;
    const fetchBtn = document.getElementById("fetchBtn");
    const corsProxyCheck = document.getElementById("corsProxyCheck") as HTMLInputElement | null;
    const sheetBar = document.getElementById("sheetBar");
    const sheetSelect = document.getElementById("sheetSelect") as HTMLSelectElement | null;
    const sheetCount = document.getElementById("sheetCount");
    const validationBadge = document.getElementById("validationBadge") as HTMLElement;
    const swapBtn2 = document.getElementById("swapBtn2") as HTMLButtonElement | null;
    const resetBtn = document.getElementById("resetBtn");
    const toolsBtn = document.getElementById("toolsBtn");
    const toolsMenu = document.getElementById("toolsMenu");
    const genDataBtn = document.getElementById("genDataBtn");
    const base64EncodeBtn = document.getElementById("base64EncodeBtn");
    const base64DecodeBtn = document.getElementById("base64DecodeBtn");
    const hexEncodeBtn = document.getElementById("hexEncodeBtn");
    const hexDecodeBtn = document.getElementById("hexDecodeBtn");

    const fromSelect = document.getElementById("from-format") as HTMLSelectElement | null;
    const toSelect = document.getElementById("to-format") as HTMLSelectElement | null;

    if (!editor || !validationBadge) return;

    let loadedFile: { name: string; data: string | ArrayBuffer; sheets?: string[] } | null = null;

    setState({
      parseResult: null,
      rawInput: "",
      searchQuery: "",
      page: 0,
      sortColumn: null,
      sortDirection: "asc",
      history: [],
      historyIndex: -1,
    });

    function setActiveTab(tabName: string) {
      tabs.forEach((tEl) => tEl.classList.remove("active"));
      const btn = document.querySelector(`.input-tab[data-tab="${tabName}"]`) as HTMLElement | null;
      if (btn) btn.classList.add("active");
      if (uploadZone) uploadZone.style.display = tabName === "upload" ? "flex" : "none";
      if (urlZone) urlZone.style.display = tabName === "url" ? "block" : "none";
      const hideEditor = (tabName === "upload" || tabName === "url") && !editor.value;
      editor.style.display = hideEditor ? "none" : "";
      if (tabName === "url") urlInput?.focus();
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setActiveTab(tab.getAttribute("data-tab")!);
      });
    });

    browseLink?.addEventListener("click", () => fileInput?.click());

    uploadZone?.addEventListener("dragover", (e) => {
      e.preventDefault();
      uploadZone.classList.add("drag-over");
    });

    uploadZone?.addEventListener("dragleave", () => {
      uploadZone.classList.remove("drag-over");
    });

    uploadZone?.addEventListener("drop", (e) => {
      e.preventDefault();
      uploadZone.classList.remove("drag-over");
      const file = e.dataTransfer?.files[0];
      if (file) handleFile(file);
    });

    fileInput?.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (file) handleFile(file);
      fileInput.value = "";
    });

    const MAX_FILE_SIZE = 50 * 1024 * 1024;

    function handleFile(file: File) {
      if (file.size > MAX_FILE_SIZE) {
        showValidation(false, `File too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max: 50 MB`);
        return;
      }
      const ext = file.name.split(".").pop()?.toLowerCase();
      if (ext === "xlsx") {
        readBinaryFile(file);
      } else {
        readTextFile(file);
      }
    }

    function readTextFile(file: File) {
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result as string;
        editor.value = text;
        loadedFile = { name: file.name, data: text };
        setActiveTab("paste");
        updateConvertButton();
      };
      reader.readAsText(file);
    }

    function readBinaryFile(file: File) {
      const reader = new FileReader();
      reader.onload = () => {
        const data = reader.result as ArrayBuffer;
        try {
          const workbook = XLSX.read(data, { type: "array" });
          const sheetNames = workbook.SheetNames;
          loadedFile = { name: file.name, data, sheets: sheetNames };

          if (sheetNames.length > 1) {
            if (sheetBar) sheetBar.style.display = "flex";
            if (sheetSelect)
              sheetSelect.innerHTML = sheetNames.map((s) => `<option value="${s}">${s}</option>`).join("");
            if (sheetCount) sheetCount.textContent = `${sheetNames.length} sheets`;
            loadSheet(workbook, sheetNames[0]);
          } else {
            if (sheetBar) sheetBar.style.display = "none";
            loadSheet(workbook, sheetNames[0]);
          }

          updateConvertButton();
        } catch {
          alert("Could not read Excel file. Make sure it is a valid .xlsx file.");
        }
      };
      reader.readAsArrayBuffer(file);
    }

    function loadSheet(workbook: XLSX.WorkBook, name: string) {
      const sheet = workbook.Sheets[name];
      const csv = XLSX.utils.sheet_to_csv(sheet);
      editor.value = csv;
      if (fromSelect) fromSelect.value = "CSV";
      setActiveTab("paste");
    }

    sheetSelect?.addEventListener("change", () => {
      if (!loadedFile?.data) return;
      const workbook = XLSX.read(loadedFile.data as ArrayBuffer, { type: "array" });
      loadSheet(workbook, sheetSelect.value);
    });

    const INPUT_FORMATS = ["JSON", "CSV", "XML", "YAML", "Excel (XLSX)"];

    function validateFormatMatch() {
      const text = editor.value.trim();
      const from = fromSelect?.value || "JSON";
      const to = toSelect?.value || "Excel (XLSX)";

      editor.classList.remove("format-mismatch");
      if (convertBtn) convertBtn.textContent = `⟳ Convert to ${to}`;

      if (!text || !INPUT_FORMATS.includes(from)) return;

      let match = true;
      let message = "";

      if (from === "Excel (XLSX)") {
        if (!loadedFile?.sheets) {
          match = false;
          message = "Excel requires file upload — use Upload tab";
        }
      } else {
        const detected = detectFormat(text);
        if (detected && detected !== from) {
          match = false;
          message = `Content looks like ${detected}, not ${from}`;
        } else if (!detected) {
          match = false;
          message = `Could not detect ${from} data`;
        }
      }

      if (!match) {
        editor.classList.add("format-mismatch");
        if (convertBtn) convertBtn.textContent = `⚠ ${message}`;
      }
    }

    function updateConvertButton() {
      validateFormatMatch();
    }

    fromSelect?.addEventListener("change", updateConvertButton);
    toSelect?.addEventListener("change", updateConvertButton);
    window.addEventListener("format-swap", updateConvertButton);
    editor.addEventListener("input", validateFormatMatch);

    loadExample?.addEventListener("click", () => {
      const format = fromSelect?.value || "JSON";
      editor.value = SAMPLE_DATA[format] || SAMPLE_DATA["JSON"];
      loadedFile = null;
      validationBadge.style.display = "none";
      updateConvertButton();
    });

    clearBtn?.addEventListener("click", () => {
      editor.value = "";
      loadedFile = null;
      validationBadge.style.display = "none";
      editor.focus();
    });

    validateBtn?.addEventListener("click", () => {
      const text = editor.value;
      const detected = detectFormat(text);
      const format = detected || (fromSelect?.value as never) || "JSON";
      const result = validate(text, format);
      showValidation(result.valid, result.message, format);
    });

    formatBtn?.addEventListener("click", () => {
      const text = editor.value;
      if (!text.trim()) return;
      const format = detectFormat(text) || (fromSelect?.value as never) || "JSON";
      try {
        editor.value = formatText(text, format);
        showValidation(true, `Formatted as ${format}`, format);
      } catch {
        showValidation(false, `Could not format as ${format}`, format);
      }
    });

    function doConvert() {
      const text = editor.value;
      if (!text.trim()) {
        showValidation(false, "Nothing to convert — paste or upload data first.");
        return;
      }

      const from = fromSelect?.value || "JSON";
      const to = toSelect?.value || "Excel (XLSX)";
      const detected = detectFormat(text);

      let formatToParse = detected || from;
      if (formatToParse === "Excel (XLSX)" && loadedFile?.sheets) {
        formatToParse = "CSV";
      }

      try {
        let result;
        switch (formatToParse) {
          case "JSON":
            result = parseJSON(text);
            break;
          case "CSV":
            result = parseCSV(text);
            break;
          case "XML":
            result = parseXML(text);
            break;
          case "YAML":
            result = parseYAML(text);
            break;
          case "Excel (XLSX)":
            showValidation(false, "Cannot parse Excel from text. Use the Upload tab.");
            return;
          case "HTML Table":
          case "Markdown":
            showValidation(false, `${formatToParse} is output-only — select a different source format`);
            return;
          default:
            showValidation(false, `Unsupported format: ${formatToParse}`);
            return;
        }
        if (result.rows.length === 0) {
          showValidation(false, "Parsed successfully but no data rows found.");
          return;
        }
        pushHistory(result);
        setState({ fromFormat: formatToParse as never, toFormat: to as never, rawInput: text });
        showValidation(true, `Parsed ${result.meta.rowCount} rows × ${result.meta.colCount} columns`);
      } catch (e) {
        showValidation(false, `Parse error: ${(e as Error).message}`);
      }
    }

    convertBtn?.addEventListener("click", doConvert);

    swapBtn2?.addEventListener("click", () => {
      if (!fromSelect || !toSelect) return;
      const tmp = fromSelect.value;
      fromSelect.value = toSelect.value;
      toSelect.value = tmp;
      updateConvertButton();
    });

    resetBtn?.addEventListener("click", () => {
      editor.value = "";
      loadedFile = null;
      validationBadge.style.display = "none";
      setActiveTab("paste");
      setState({ history: [], historyIndex: -1, parseResult: null });
    });

    function showValidation(valid: boolean, message: string, _format?: string) {
      validationBadge.style.display = "flex";
      validationBadge.className = `validation-badge ${valid ? "valid" : "invalid"}`;
      validationBadge.textContent = valid ? `✓ ${message}` : `✗ ${message}`;
      setTimeout(() => {
        validationBadge.style.opacity = "0";
        setTimeout(() => {
          validationBadge.style.display = "none";
          validationBadge.style.opacity = "1";
        }, 300);
      }, 3000);
    }

    let activeFetch: AbortController | null = null;

    fetchBtn?.addEventListener("click", async () => {
      let url = (urlInput?.value || "").trim();
      if (!url) {
        showValidation(false, "Enter a URL first.");
        return;
      }

      if (activeFetch) activeFetch.abort();
      const controller = new AbortController();
      activeFetch = controller;

      if (corsProxyCheck?.checked) {
        url = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
      }
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        editor.value = text;
        loadedFile = null;
        setActiveTab("paste");
        showValidation(true, `Fetched ${(text.length / 1024).toFixed(1)} KB from URL`);
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
        showValidation(false, `Fetch failed: ${(e as Error).message}. Try enabling the CORS proxy.`);
      } finally {
        if (activeFetch === controller) activeFetch = null;
      }
    });

    urlInput?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") fetchBtn?.dispatchEvent(new MouseEvent("click"));
    });

    toolsBtn?.addEventListener("click", () => {
      if (toolsMenu) {
        toolsMenu.style.display = toolsMenu.style.display === "none" ? "block" : "none";
      }
    });

    const closeTools = (e: MouseEvent) => {
      if (
        toolsMenu &&
        !(toolsBtn as HTMLElement).contains(e.target as Node) &&
        !toolsMenu.contains(e.target as Node)
      ) {
        toolsMenu.style.display = "none";
      }
    };
    document.addEventListener("click", closeTools);

    genDataBtn?.addEventListener("click", () => {
      editor.value = generateRandomData();
      loadedFile = null;
      if (toolsMenu) toolsMenu.style.display = "none";
      setActiveTab("paste");
      showValidation(true, "Generated random data (CSV)");
    });

    base64EncodeBtn?.addEventListener("click", () => {
      try {
        editor.value = encodeBase64(editor.value);
        if (toolsMenu) toolsMenu.style.display = "none";
        showValidation(true, "Base64 encoded");
      } catch {
        showValidation(false, "Base64 encode failed");
      }
    });

    base64DecodeBtn?.addEventListener("click", () => {
      try {
        editor.value = decodeBase64(editor.value.trim());
        if (toolsMenu) toolsMenu.style.display = "none";
        showValidation(true, "Base64 decoded");
      } catch {
        showValidation(false, "Invalid Base64 input");
      }
    });

    hexEncodeBtn?.addEventListener("click", () => {
      try {
        editor.value = encodeHex(editor.value);
        if (toolsMenu) toolsMenu.style.display = "none";
        showValidation(true, "Hex encoded");
      } catch {
        showValidation(false, "Hex encode failed");
      }
    });

    hexDecodeBtn?.addEventListener("click", () => {
      try {
        editor.value = decodeHex(editor.value.trim());
        if (toolsMenu) toolsMenu.style.display = "none";
        showValidation(true, "Hex decoded");
      } catch {
        showValidation(false, "Invalid hex input");
      }
    });

    const onKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        const tag = (e.target as HTMLElement).tagName;
        if (tag === "TEXTAREA" || tag === "INPUT") {
          e.preventDefault();
          doConvert();
        }
      }
    };
    document.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("format-swap", updateConvertButton);
      editor.removeEventListener("input", validateFormatMatch);
      document.removeEventListener("click", closeTools);
      document.removeEventListener("keydown", onKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="input-header">
        <div className="input-tabs" id="inputTabs">
          <button className="input-tab active" data-tab="paste" id="tabPaste">
            {t.paste}
          </button>
          <button className="input-tab" data-tab="upload" id="tabUpload">
            {t.upload}
          </button>
          <button className="input-tab" data-tab="url">
            {t.url}
          </button>
        </div>
        <div className="input-actions">
          <button className="btn" id="loadExample">
            ↻ {t.loadExample}
          </button>
          <button className="btn" id="formatBtn" title="Pretty-print">
            ▦ {t.format}
          </button>
          <button className="btn" id="clearBtn">
            ✕ {t.clear}
          </button>
          <button className="btn" id="validateBtn" style={{ color: "var(--success)", borderColor: "var(--success)" }}>
            ✓ {t.validate}
          </button>
        </div>
      </div>

      <div className="privacy-notice">
        <span>🔒</span>
        <span>{t.privacyNotice}</span>
      </div>

      <div id="uploadZone" className="upload-zone" style={{ display: "none" }}>
        <div className="drop-inner">
          <div className="upload-icon">📂</div>
          <p className="upload-text">
            {t.dragDropText}{" "}
            <span className="upload-link" id="browseLink">
              {t.browse}
            </span>
          </p>
          <p className="upload-hint">{t.uploadSupports}</p>
          <input type="file" id="fileInput" accept=".json,.csv,.xml,.yaml,.yml,.xlsx" hidden />
        </div>
      </div>

      <div id="urlZone" className="url-zone" style={{ display: "none" }}>
        <div className="url-row">
          <input type="text" id="urlInput" className="url-input" placeholder="https://example.com/data.json" />
          <button className="btn" id="fetchBtn">
            ⬇ {t.fetch}
          </button>
        </div>
        <label className="url-option">
          <input type="checkbox" id="corsProxyCheck" />
          <span>{t.corsProxy}</span>
        </label>
      </div>

      <div id="sheetBar" className="sheet-bar" style={{ display: "none" }}>
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{t.sheet}</span>
        <select id="sheetSelect" className="sheet-select"></select>
        <span id="sheetCount" style={{ fontSize: 12, color: "var(--text-muted)" }}></span>
      </div>

      <textarea className="code-editor" id="codeEditor" placeholder={t.editorPlaceholder}></textarea>

      <div id="validationBadge" className="validation-badge" style={{ display: "none" }}></div>

      <div className="convert-row">
        <button className="btn-convert" id="convertBtn">
          ⟳ {t.convert}
        </button>
        <button className="btn-ghost" id="swapBtn2">
          ⇄ {t.swap}
        </button>
        <button className="btn-ghost" id="resetBtn">
          ↻ {t.reset}
        </button>
        <div className="tools-dropdown">
          <button className="btn-ghost" id="toolsBtn">
            🔧 {t.tools} ▾
          </button>
          <div className="tools-menu" id="toolsMenu" style={{ display: "none" }}>
            <button className="tool-menu-item" id="genDataBtn">
              🎲 {t.generateRandomData}
            </button>
            <button className="tool-menu-item" id="base64EncodeBtn">
              🔐 {t.base64Encode}
            </button>
            <button className="tool-menu-item" id="base64DecodeBtn">
              🔓 {t.base64Decode}
            </button>
            <button className="tool-menu-item" id="hexEncodeBtn">
              🔢 {t.hexEncode}
            </button>
            <button className="tool-menu-item" id="hexDecodeBtn">
              🔢 {t.hexDecode}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect } from "react";
import {
  readImageMetadata,
  stripMetadata,
  detectRemovable,
} from "@/lib/converters/metadata";
import type { ImageMetaInfo, StrippedImage } from "@/lib/converters/metadata";
import { downloadBlob } from "@/lib/exportUtils";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";

export default function ImageMetaResult({
  locale,
  mode,
}: {
  locale: Locale;
  mode: "view" | "remove";
}) {
  const t = ui[locale].image;

  const LABELS = {
    metadata: t.metadata,
    gps: t.gps,
    loading: "Reading metadata…",
    noMetadata: t.noMetadata,
    nothing: t.nothingFound,
    removeBtn: t.removeBtn,
    foundMeta: t.foundMeta,
    tableField: t.tableField,
    tableValue: t.tableValue,
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.getElementById("metaResultRoot") as HTMLElement | null;
    const previewImg = document.getElementById("metaPreviewImg") as HTMLImageElement | null;
    const fileName = document.getElementById("metaFileName") as HTMLElement | null;
    const formatEl = document.getElementById("metaFormat") as HTMLElement | null;
    const dimensions = document.getElementById("metaDimensions") as HTMLElement | null;
    const fileSize = document.getElementById("metaFileSize") as HTMLElement | null;
    const loading = document.getElementById("metaLoading") as HTMLElement | null;
    const loadingText = document.getElementById("metaLoadingText") as HTMLElement | null;
    const message = document.getElementById("metaMessage") as HTMLElement | null;
    const removeStep = document.getElementById("metaRemoveStep") as HTMLElement | null;
    const foundList = document.getElementById("metaFoundList") as HTMLElement | null;
    const removeBtn = document.getElementById("metaRemoveBtn") as HTMLButtonElement | null;
    const viewer = document.getElementById("metaViewer") as HTMLElement | null;
    const groupsEl = document.getElementById("metaGroups") as HTMLElement | null;
    const emptyEl = document.getElementById("metaEmpty") as HTMLElement | null;
    const exportBtn = document.getElementById("metaExportBtn");
    const resetBtn = document.getElementById("metaResetBtn");
    const cleanResult = document.getElementById("metaCleanResult") as HTMLElement | null;
    const cleanFileName = document.getElementById("cleanFileName") as HTMLElement | null;
    const cleanFileSize = document.getElementById("cleanFileSize") as HTMLElement | null;
    const cleanRemoved = document.getElementById("cleanRemoved") as HTMLElement | null;
    const cleanDownload = document.getElementById("metaCleanDownload") as HTMLButtonElement | null;
    const resetBtn2 = document.getElementById("metaResetBtn2");

    let sourceUrl: string | null = null;
    let cleanUrl: string | null = null;
    let currentFile: File | null = null;
    let info: ImageMetaInfo | null = null;

    function formatBytes(bytes: number): string {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
    }

    function revokeAll() {
      if (sourceUrl) {
        URL.revokeObjectURL(sourceUrl);
        sourceUrl = null;
      }
      if (cleanUrl) {
        URL.revokeObjectURL(cleanUrl);
        cleanUrl = null;
      }
    }

    function reset() {
      revokeAll();
      currentFile = null;
      info = null;
      if (root) root.style.display = "none";
      if (message) message.style.display = "none";
      if (loading) loading.style.display = "none";
      if (removeStep) removeStep.style.display = "none";
      if (viewer) viewer.style.display = "none";
      if (cleanResult) cleanResult.style.display = "none";
      window.dispatchEvent(new CustomEvent("meta-reset"));
    }

    function showMessage(kind: "ok" | "info" | "err", text: string) {
      if (!message) return;
      message.style.display = "block";
      message.className = `meta-message ${kind}`;
      message.textContent = text;
    }

    function setInfo(name: string, format: string, dims: string, size: string) {
      if (fileName) fileName.textContent = name;
      if (formatEl) formatEl.textContent = format;
      if (dimensions) dimensions.textContent = dims;
      if (fileSize) fileSize.textContent = size;
    }

    function setPreview(url: string) {
      if (previewImg) {
        previewImg.src = url;
        previewImg.alt = "";
      }
    }

    async function readDimensions(file: File): Promise<string> {
      let width: number | null = null;
      let height: number | null = null;
      try {
        const bmp = await createImageBitmap(file);
        width = bmp.width;
        height = bmp.height;
        bmp.close();
      } catch {
        // fall back to metadata reader below
      }
      if (width && height) return `${width} × ${height} px`;
      try {
        const parsed = await readImageMetadata(file);
        if (parsed.width && parsed.height) return `${parsed.width} × ${parsed.height} px`;
      } catch {
        // ignore
      }
      return "—";
    }

    const handleView = async (file: File) => {
      if (loading) loading.style.display = "flex";
      if (loadingText) loadingText.textContent = LABELS.loading;
      if (viewer) viewer.style.display = "none";
      if (removeStep) removeStep.style.display = "none";
      if (cleanResult) cleanResult.style.display = "none";
      if (message) message.style.display = "none";
      try {
        info = await readImageMetadata(file);
        const dims = await readDimensions(file);
        setInfo(file.name, info.format, dims, formatBytes(info.size));
        setPreview(sourceUrl || "");
        if (loading) loading.style.display = "none";
        if (info.groups.length === 0) {
          if (groupsEl) groupsEl.textContent = "";
          if (emptyEl) emptyEl.style.display = "block";
        } else {
          if (emptyEl) emptyEl.style.display = "none";
          renderGroups(info.groups);
        }
        if (viewer) viewer.style.display = "block";
        root?.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (e) {
        if (loading) loading.style.display = "none";
        showMessage("err", (e as Error).message);
      }
    };

    const handleRemove = async (file: File) => {
      if (loading) loading.style.display = "flex";
      if (loadingText) loadingText.textContent = LABELS.loading;
      if (removeStep) removeStep.style.display = "none";
      if (cleanResult) cleanResult.style.display = "none";
      if (viewer) viewer.style.display = "none";
      if (message) message.style.display = "none";
      try {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const found = detectRemovable(bytes);
        const dims = await readDimensions(file);
        setInfo(file.name, "", dims, formatBytes(file.size));
        if (formatEl) formatEl.textContent = file.type.replace(/^image\//, "").toUpperCase();
        setPreview(sourceUrl || "");
        if (loading) loading.style.display = "none";
        if (foundList) foundList.textContent = "";
        if (found.length === 0) {
          showMessage("ok", LABELS.nothing);
          return;
        }
        if (foundList) {
          const label = document.createElement("div");
          label.className = "found-label";
          label.textContent = LABELS.foundMeta;
          foundList.appendChild(label);
          const chips = document.createElement("div");
          chips.className = "found-chips";
          for (const name of found) {
            const chip = document.createElement("span");
            chip.className = "found-chip";
            chip.textContent = name;
            chips.appendChild(chip);
          }
          foundList.appendChild(chips);
        }
        if (removeStep) removeStep.style.display = "block";
        root?.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (e) {
        if (loading) loading.style.display = "none";
        showMessage("err", (e as Error).message);
      }
    };

    function renderGroups(groups: ImageMetaInfo["groups"]) {
      if (!groupsEl) return;
      groupsEl.textContent = "";
      for (const group of groups) {
        const block = document.createElement("div");
        block.className = "meta-group";
        const head = document.createElement("h3");
        const heading =
          group.name === "GPS" ? LABELS.gps : group.name === "Metadata" ? LABELS.metadata : group.name;
        head.textContent = heading;
        if (group.name === "GPS") head.classList.add("gps-heading");
        block.appendChild(head);
        const table = document.createElement("table");
        table.className = "meta-table";
        const thead = document.createElement("thead");
        const headRow = document.createElement("tr");
        const thKey = document.createElement("th");
        thKey.textContent = LABELS.tableField;
        const thVal = document.createElement("th");
        thVal.textContent = LABELS.tableValue;
        headRow.appendChild(thKey);
        headRow.appendChild(thVal);
        thead.appendChild(headRow);
        table.appendChild(thead);
        const tbody = document.createElement("tbody");
        for (const row of group.rows) {
          const tr = document.createElement("tr");
          const k = document.createElement("th");
          k.scope = "row";
          k.className = "meta-row-key";
          k.textContent = row.key;
          const v = document.createElement("td");
          v.className = "meta-row-value";
          v.textContent = row.value;
          tr.appendChild(k);
          tr.appendChild(v);
          tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        block.appendChild(table);
        groupsEl.appendChild(block);
      }
    }

    const onMetaFileSelected = (e: Event) => {
      const file = (e as CustomEvent).detail?.file as File | undefined;
      if (!file) return;
      revokeAll();
      currentFile = file;
      sourceUrl = URL.createObjectURL(file);
      if (root) root.style.display = "block";
      if (mode === "view") {
        handleView(file);
      } else {
        handleRemove(file);
      }
    };
    window.addEventListener("meta-file-selected", onMetaFileSelected);

    removeBtn?.addEventListener("click", async () => {
      if (!currentFile) return;
      removeBtn.disabled = true;
      removeBtn.textContent = "⏳ …";
      try {
        const result: StrippedImage = await stripMetadata(currentFile);
        cleanUrl = result.objectUrl;
        if (sourceUrl) {
          URL.revokeObjectURL(sourceUrl);
          sourceUrl = null;
        }
        setPreview(cleanUrl);
        const base = currentFile.name.replace(/\.[^.]+$/, "");
        if (cleanFileName) cleanFileName.textContent = `${base}_clean.${result.extension}`;
        if (cleanFileSize) cleanFileSize.textContent = `${formatBytes(result.beforeSize)} → ${formatBytes(result.afterSize)}`;
        if (cleanRemoved) cleanRemoved.textContent = result.removed.join(", ") || "—";
        if (cleanDownload) {
          cleanDownload.onclick = () => {
            downloadBlob(result.blob, `${base}_clean.${result.extension}`, result.blob.type);
          };
        }
        if (removeStep) removeStep.style.display = "none";
        if (cleanResult) cleanResult.style.display = "block";
        root?.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (err) {
        showMessage("err", (err as Error).message);
      } finally {
        removeBtn.disabled = false;
        removeBtn.textContent = `🗑 ${LABELS.removeBtn}`;
      }
    });

    exportBtn?.addEventListener("click", () => {
      if (!info) {
        showMessage("err", "No metadata to export");
        return;
      }
      let jsonStr = "";
      try {
        const payload = {
          filename: info.filename,
          format: info.format,
          size: info.size,
          width: info.width,
          height: info.height,
          generatedAt: new Date().toISOString(),
          metadata: Object.fromEntries(
            info.groups.map((g) => [g.name, Object.fromEntries(g.rows.map((r) => [r.key, r.value]))])
          ),
        };
        const base = info.filename.replace(/\.[^.]+$/, "");
        jsonStr = JSON.stringify(payload, null, 2);
        downloadBlob(jsonStr, `${base}-metadata.json`, "application/json");
        showMessage("ok", "Metadata exported successfully");
      } catch (e) {
        showMessage("err", "Export failed: " + (e as Error).message);
        // Fallback: copy to clipboard
        try {
          navigator.clipboard.writeText(jsonStr);
          showMessage("ok", "JSON copied to clipboard as fallback");
        } catch {
          // ignore
        }
      }
    });

    resetBtn?.addEventListener("click", reset);
    resetBtn2?.addEventListener("click", reset);

    const onMetaReset = () => {
      revokeAll();
    };
    window.addEventListener("meta-reset", onMetaReset);

    return () => {
      window.removeEventListener("meta-file-selected", onMetaFileSelected);
      window.removeEventListener("meta-reset", onMetaReset);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="metaResultRoot"
      style={{ display: "none" }}
      data-mode={mode}
      data-t-metadata={t.metadata}
      data-t-gps={t.gps}
      data-t-loading="Reading metadata…"
      data-t-nometadata={t.noMetadata}
      data-t-nothing={t.nothingFound}
      data-t-removebtn={t.removeBtn}
      data-t-foundmeta={t.foundMeta}
      data-t-field={t.tableField}
      data-t-value={t.tableValue}
    >
      <div className="section-label">{t.result}</div>

      <div className="preview-strip">
        <div className="preview-image-wrap">
          <img id="metaPreviewImg" alt="" />
        </div>
        <div className="preview-info">
          <div className="info-grid">
            <div className="info-cell">
              <span className="info-label">{t.fileName}</span>
              <span className="info-value" id="metaFileName">
                —
              </span>
            </div>
            <div className="info-cell">
              <span className="info-label">{t.outputFormat}</span>
              <span className="info-value" id="metaFormat">
                —
              </span>
            </div>
            <div className="info-cell">
              <span className="info-label">{t.dimensions}</span>
              <span className="info-value" id="metaDimensions">
                —
              </span>
            </div>
            <div className="info-cell">
              <span className="info-label">{t.fileSize}</span>
              <span className="info-value" id="metaFileSize">
                —
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="metaLoading" className="meta-loading" style={{ display: "none" }}>
        <span className="spinner"></span>
        <span id="metaLoadingText">⏳</span>
      </div>

      <div id="metaMessage" className="meta-message" style={{ display: "none" }}></div>

      <div id="metaRemoveStep" className="meta-panel" style={{ display: "none" }}>
        <div id="metaFoundList"></div>
        <button className="btn-primary" id="metaRemoveBtn">
          🗑 {t.removeBtn}
        </button>
      </div>

      <div id="metaViewer" style={{ display: "none" }}>
        <div id="metaGroups"></div>
        <div id="metaEmpty" className="meta-empty" style={{ display: "none" }}>
          🖼️ {t.noMetadata}
        </div>
        <div className="meta-actions">
          <button className="btn-download primary" id="metaExportBtn">
            ⬇ {t.exportJson}
          </button>
          <button className="btn-ghost" id="metaResetBtn">
            ↻ {t.tryAnother}
          </button>
        </div>
      </div>

      <div id="metaCleanResult" style={{ display: "none" }}>
        <div className="info-grid">
          <div className="info-cell">
            <span className="info-label">{t.fileName}</span>
            <span className="info-value" id="cleanFileName">
              —
            </span>
          </div>
          <div className="info-cell">
            <span className="info-label">{t.fileSize}</span>
            <span className="info-value" id="cleanFileSize">
              —
            </span>
          </div>
          <div className="info-cell">
            <span className="info-label">{t.removedGroups}</span>
            <span className="info-value" id="cleanRemoved">
              —
            </span>
          </div>
        </div>
        <div className="meta-actions">
          <button className="btn-download primary" id="metaCleanDownload">
            ⬇ {t.downloadClean}
          </button>
          <button className="btn-ghost" id="metaResetBtn2">
            ↻ {t.tryAnother}
          </button>
        </div>
      </div>
    </div>
  );
}
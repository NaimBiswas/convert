"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { ConvertedImage } from "@/lib/converters/image";
import { imageExt } from "@/lib/converters/image";
import { downloadBlob } from "@/lib/exportUtils";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";

export default function ImagePreview({ locale }: { locale: Locale }) {
  const t = ui[locale].image;

  useEffect(() => {
    const root = document.getElementById("imagePreviewRoot") as HTMLElement | null;
    const sectionLabel = document.getElementById("imageSectionLabel") as HTMLElement | null;
    const img = document.getElementById("imagePreviewImg") as HTMLImageElement | null;
    const fileName = document.getElementById("imageFileName") as HTMLElement | null;
    const dimensions = document.getElementById("imageDimensions") as HTMLElement | null;
    const outputFormat = document.getElementById("imageOutputFormat") as HTMLElement | null;
    const fileSize = document.getElementById("imageFileSize") as HTMLElement | null;
    const downloadBtn = document.getElementById("imageDownloadBtn");
    const resetBtn = document.getElementById("imageResetBtn");

    let current: ConvertedImage | null = null;
    let sourceName = "image";

    function formatBytes(bytes: number): string {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
    }

    function updateFileName() {
      if (current && fileName) {
        fileName.textContent = `${sourceName}.${imageExt(current.format)}`;
      }
    }

    const onSelected = (e: Event) => {
      if (current && current.objectUrl) URL.revokeObjectURL(current.objectUrl);
      if (root) root.style.display = "none";
      current = null;
      sourceName = (e as CustomEvent).detail?.name?.replace(/\.\w+$/, "") || "image";
    };

    const onConverted = (e: Event) => {
      current = (e as CustomEvent).detail as ConvertedImage;
      if (sectionLabel) sectionLabel.textContent = "Result";
      if (img) {
        img.src = current.objectUrl;
        img.alt = `Converted ${current.format} image`;
      }
      if (dimensions) dimensions.textContent = `${current.width} × ${current.height} px`;
      if (outputFormat) outputFormat.textContent = current.format;
      if (fileSize) fileSize.textContent = formatBytes(current.size);
      updateFileName();
      if (root) {
        root.style.display = "block";
        root.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("image-selected", onSelected);
    window.addEventListener("image-converted", onConverted);

    downloadBtn?.addEventListener("click", () => {
      if (!current) return;
      const ext = imageExt(current.format);
      downloadBlob(current.blob, `${sourceName}.${ext}`, current.blob.type);
    });

    resetBtn?.addEventListener("click", () => {
      if (root) root.style.display = "none";
      if (current && current.objectUrl) URL.revokeObjectURL(current.objectUrl);
      current = null;
      window.dispatchEvent(new CustomEvent("image-reset"));
    });

    return () => {
      window.removeEventListener("image-selected", onSelected);
      window.removeEventListener("image-converted", onConverted);
    };
  }, []);

  return (
    <div id="imagePreviewRoot" style={{ display: "none" }}>
      <div className="section-label" id="imageSectionLabel">
        {t.result}
      </div>

      <div className="preview-body">
        <div className="preview-image-wrap">
          <Image src={"/placeholder.jpg"} id="imagePreviewImg" alt="" />
        </div>

        <div className="preview-info">
          <div className="info-grid">
            <div className="info-cell">
              <span className="info-label">{t.fileName}</span>
              <span className="info-value" id="imageFileName">
                —
              </span>
            </div>
            <div className="info-cell">
              <span className="info-label">{t.dimensions}</span>
              <span className="info-value" id="imageDimensions">
                —
              </span>
            </div>
            <div className="info-cell">
              <span className="info-label">{t.outputFormat}</span>
              <span className="info-value" id="imageOutputFormat">
                —
              </span>
            </div>
            <div className="info-cell">
              <span className="info-label">{t.fileSize}</span>
              <span className="info-value" id="imageFileSize">
                —
              </span>
            </div>
          </div>

          <div className="preview-actions">
            <button className="btn-download primary" id="imageDownloadBtn">
              ⬇ {t.download}
            </button>
            <button className="btn-ghost" id="imageResetBtn">
              ↻ {t.convertAnother}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
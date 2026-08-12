"use client";

import { useEffect } from "react";
import { convertImage } from "@/lib/converters/image";
import type { ImageFormat, ConvertedImage } from "@/lib/converters/image";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";

export default function ImageInput({
  locale,
  defaultTo = "JPG",
}: {
  locale: Locale;
  defaultTo?: string;
}) {
  const t = ui[locale].image;

  useEffect(() => {
    const dropZone = document.getElementById("imgDropZone");
    const browseLink = document.getElementById("imgBrowseLink");
    const fileInput = document.getElementById("imgFileInput") as HTMLInputElement | null;
    const controls = document.getElementById("imgControls") as HTMLElement | null;
    const targetSelect = document.getElementById("imgTarget") as HTMLSelectElement | null;
    const qualityInput = document.getElementById("imgQuality") as HTMLInputElement | null;
    const qualityValue = document.getElementById("qualityValue");
    const qualityGroup = document.getElementById("qualityGroup") as HTMLElement | null;
    const convertBtn = document.getElementById("imgConvertBtn") as HTMLButtonElement | null;
    const validation = document.getElementById("imgValidation") as HTMLElement | null;

    let currentFile: File | null = null;

    const lossyFormats: ImageFormat[] = ["JPG", "WEBP"];

    function showValidation(valid: boolean, message: string) {
      if (!validation) return;
      validation.style.display = "flex";
      validation.className = `validation-badge ${valid ? "valid" : "invalid"}`;
      validation.textContent = (valid ? "✓ " : "✗ ") + message;
    }

    function clearValidation() {
      if (validation) validation.style.display = "none";
    }

    function updateQualityVisibility() {
      if (!targetSelect || !qualityGroup) return;
      qualityGroup.style.display = lossyFormats.includes(targetSelect.value as ImageFormat)
        ? "flex"
        : "none";
    }

    function handleFile(file: File | null) {
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        showValidation(false, "Unsupported file type — please upload an image.");
        return;
      }
      if (file.size > 30 * 1024 * 1024) {
        showValidation(false, `File too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max: 30 MB`);
        return;
      }
      currentFile = file;
      clearValidation();
      if (controls) controls.style.display = "flex";
      window.dispatchEvent(
        new CustomEvent("image-selected", {
          detail: { name: file.name, size: file.size, type: file.type },
        })
      );
    }

    browseLink?.addEventListener("click", (e) => {
      e.stopPropagation();
      fileInput?.click();
    });

    dropZone?.addEventListener("click", () => fileInput?.click());

    dropZone?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        fileInput?.click();
      }
    });

    ["dragover", "dragenter"].forEach((ev) => {
      dropZone?.addEventListener(ev, (e) => {
        e.preventDefault();
        dropZone.classList.add("drag-over");
      });
    });

    ["dragleave", "dragend"].forEach((ev) => {
      dropZone?.addEventListener(ev, (e) => {
        e.preventDefault();
        dropZone.classList.remove("drag-over");
      });
    });

    dropZone?.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.classList.remove("drag-over");
      const file = e.dataTransfer?.files[0];
      if (file) handleFile(file);
    });

    fileInput?.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (file) handleFile(file);
      fileInput.value = "";
    });

    targetSelect?.addEventListener("change", () => {
      clearValidation();
      updateQualityVisibility();
    });

    qualityInput?.addEventListener("input", () => {
      if (qualityValue) qualityValue.textContent = qualityInput.value;
    });

    const onReset = () => {
      currentFile = null;
      if (controls) controls.style.display = "none";
      clearValidation();
    };
    window.addEventListener("image-reset", onReset);

    convertBtn?.addEventListener("click", async () => {
      if (!currentFile || !targetSelect || !qualityInput) return;
      const target = targetSelect.value as ImageFormat;
      const quality = parseInt(qualityInput.value, 10) / 100;
      convertBtn.disabled = true;
      convertBtn.textContent = "⏳ Converting…";
      try {
        const result: ConvertedImage = await convertImage(currentFile, target, quality);
        window.dispatchEvent(new CustomEvent("image-converted", { detail: result }));
      } catch (e) {
        showValidation(false, (e as Error).message);
      } finally {
        convertBtn.disabled = false;
        convertBtn.textContent = "⟳ Convert";
      }
    });

    updateQualityVisibility();

    return () => {
      window.removeEventListener("image-reset", onReset);
    };
     
  }, []);

  return (
    <div className="image-input">
      <div className="privacy-notice">
        <span>🔒</span>
        <span>{t.privacy}</span>
      </div>

      <div
        id="imgDropZone"
        className="upload-zone"
        role="button"
        tabIndex={0}
        aria-label={t.dragDropText}
      >
        <div className="drop-inner">
          <div className="upload-icon">🖼️</div>
          <p className="drop-text">
            {t.dragDropText}{" "}
            <span className="browse-link" id="imgBrowseLink">
              {t.browse}
            </span>
          </p>
          <p className="drop-hint">{t.supports}</p>
          <input type="file" id="imgFileInput" accept="image/*,.avif,.ico" hidden />
        </div>
      </div>

      <div id="imgControls" className="controls" style={{ display: "none" }}>
        <div className="control-group">
          <label className="control-label" htmlFor="imgTarget">
            {t.target}
          </label>
          <div className="format-group">
            <select id="imgTarget" className="format-select" defaultValue={defaultTo}>
              <option value="PNG">PNG</option>
              <option value="JPG">JPG</option>
              <option value="WEBP">WEBP</option>
            </select>
            <span className="format-select-arrow">▼</span>
          </div>
        </div>

        <div className="control-group" id="qualityGroup">
          <label className="control-label" htmlFor="imgQuality">
            {t.quality}: <span id="qualityValue">85</span>%
          </label>
          <input type="range" id="imgQuality" className="quality-range" min="10" max="100" defaultValue="85" />
        </div>

        <button className="btn-convert" id="imgConvertBtn">
          ⟳ {t.convert}
        </button>
      </div>

      <div id="imgValidation" className="validation-badge" style={{ display: "none" }}></div>
    </div>
  );
}
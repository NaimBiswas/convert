"use client";

import { useEffect } from "react";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";

export default function ImageMetaInput({ locale }: { locale: Locale }) {
  const t = ui[locale].image;

  useEffect(() => {
    const dropZone = document.getElementById("metaDropZone");
    const browseLink = document.getElementById("metaBrowseLink");
    const fileInput = document.getElementById("metaFileInput") as HTMLInputElement | null;
    const validation = document.getElementById("metaValidation") as HTMLElement | null;

    function showValidation(valid: boolean, message: string) {
      if (!validation) return;
      validation.style.display = "flex";
      validation.className = `validation-badge ${valid ? "valid" : "invalid"}`;
      validation.textContent = (valid ? "✓ " : "✗ ") + message;
    }

    function clearValidation() {
      if (validation) validation.style.display = "none";
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
      clearValidation();
      window.dispatchEvent(new CustomEvent("meta-file-selected", { detail: { file } }));
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

    const onReset = () => {
      clearValidation();
    };
    window.addEventListener("meta-reset", onReset);

    return () => {
      window.removeEventListener("meta-reset", onReset);
    };
  }, []);

  return (
    <div className="image-meta-input">
      <div className="privacy-notice">
        <span>🔒</span>
        <span>{t.privacy}</span>
      </div>

      <div
        id="metaDropZone"
        className="upload-zone"
        role="button"
        tabIndex={0}
        aria-label={t.dragDropText}
      >
        <div className="drop-inner">
          <div className="upload-icon">🖼️</div>
          <p className="drop-text">
            {t.dragDropText}{" "}
            <span className="browse-link" id="metaBrowseLink">
              {t.browse}
            </span>
          </p>
          <p className="drop-hint">{t.metaSupports}</p>
          <input
            type="file"
            id="metaFileInput"
            accept="image/jpeg,image/png,image/webp,image/jpg,.jpeg,.jpg,.png,.webp"
            hidden
          />
        </div>
      </div>

      <div id="metaValidation" className="validation-badge" style={{ display: "none" }}></div>
    </div>
  );
}
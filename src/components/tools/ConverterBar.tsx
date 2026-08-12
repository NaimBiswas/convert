"use client";

import { useEffect } from "react";
import { setState } from "@/lib/appState";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";

const formats = ["JSON", "CSV", "Excel (XLSX)", "XML", "YAML", "HTML Table", "Markdown"];

export default function ConverterBar({
  from = "JSON",
  to = "Excel (XLSX)",
  locale,
}: {
  from?: string;
  to?: string;
  locale: Locale;
}) {
  const swapTitle = ui[locale].tool.swapFormats;

  useEffect(() => {
    const fromSel = document.getElementById("from-format") as HTMLSelectElement | null;
    const toSel = document.getElementById("to-format") as HTMLSelectElement | null;
    const swap = document.getElementById("swapBtn");
    const bar = document.querySelector(".converter-bar") as HTMLElement | null;

    if (bar && fromSel && toSel) {
      const fromVal = bar.getAttribute("data-from");
      const toVal = bar.getAttribute("data-to");
      if (fromVal) fromSel.value = fromVal;
      if (toVal) toSel.value = toVal;
      setState({ fromFormat: fromSel.value as never, toFormat: toSel.value as never });
    }

    swap?.addEventListener("click", () => {
      if (!fromSel || !toSel) return;
      const tmp = fromSel.value;
      fromSel.value = toSel.value;
      toSel.value = tmp;
      window.dispatchEvent(new CustomEvent("format-swap"));
    });
  }, []);

  return (
    <div className="converter-bar" data-from={from} data-to={to}>
      <div className="format-group">
        <select className="format-select" id="from-format" defaultValue={from}>
          {formats.map((f) => (
            <option value={f} key={f}>
              {f}
            </option>
          ))}
        </select>
        <span className="format-select-arrow">▼</span>
      </div>

      <div className="bridge">
        <span className="bridge-line"></span>
        <button className="swap-btn" id="swapBtn" title={swapTitle}>
          ⇄
        </button>
        <span className="bridge-line"></span>
      </div>

      <div className="format-group">
        <select className="format-select" id="to-format" defaultValue={to}>
          {formats.map((f) => (
            <option value={f} key={f}>
              {f}
            </option>
          ))}
        </select>
        <span className="format-select-arrow">▼</span>
      </div>
    </div>
  );
}

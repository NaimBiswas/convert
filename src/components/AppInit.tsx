"use client";

import { useEffect } from "react";
import { initTheme } from "@/lib/theme";
import { languages } from "@/i18n/languages";
import type { Locale } from "@/i18n/languages";

export default function AppInit({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = languages[locale].htmlLang;
    initTheme();
  }, [locale]);
  return null;
}

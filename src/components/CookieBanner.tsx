"use client";

import { useEffect } from "react";
import Link from "next/link";
import { getRelativeLocaleUrl } from "@/lib/links";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";

function loadScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
}

function loadAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    (window.dataLayer as unknown[]).push(args);
  }
  loadScript("https://www.googletagmanager.com/gtag/js?id=G-CH6QGF1ES3");
  gtag("js", new Date());
  gtag("config", "G-CH6QGF1ES3");
  loadScript("https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js", {
    "custom-element": "amp-auto-ads",
  });
}

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.style.display = "none";
  loadAnalytics();
}

export default function CookieBanner({ locale }: { locale: Locale }) {
  const t = ui[locale].layout;

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === "accepted") {
      loadAnalytics();
    } else {
      const banner = document.getElementById("cookie-banner");
      if (banner) banner.style.display = "flex";
    }
    window.acceptCookies = acceptCookies;
  }, []);

  return (
    <div id="cookie-banner" className="cookie-banner" style={{ display: "none" }}>
      <span>
        {t.cookieBanner}{" "}
        <Link href={getRelativeLocaleUrl(locale, t.cookiesPath)}>{t.cookieLearnMore}</Link>.
      </span>
      <button onClick={acceptCookies}>{t.cookieGotIt}</button>
    </div>
  );
}

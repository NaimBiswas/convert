"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getRelativeLocaleUrl, stripLocaleFromPath } from "@/lib/links";
import { languages, locales } from "@/i18n/languages";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";
import { toggleTheme } from "@/lib/theme";

function ThemeToggle({ ariaLabel }: { ariaLabel: string }) {
  return (
    <button
      className="theme-btn theme-toggle"
      onClick={() => toggleTheme()}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <svg
        className="theme-icon icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        className="theme-icon icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

const toolIcons: Record<string, string> = {
  jsonToCsv: "fa-solid fa-code",
  csvToJson: "fa-solid fa-table",
  excelToJson: "fa-solid fa-file-excel",
  jsonToExcel: "fa-solid fa-file-code",
  excelToCsv: "fa-solid fa-table-columns",
  imageConverter: "fa-solid fa-image",
  pngToJpg: "fa-solid fa-file-image",
  jpgToPng: "fa-solid fa-camera",
  webpToJpg: "fa-solid fa-file",
  jpgToWebp: "fa-solid fa-layer-group",
  pngToWebp: "fa-solid fa-images",
  imageMetadataViewer: "fa-solid fa-tags",
  removeImageMetadata: "fa-solid fa-broom",
};

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const t = ui[locale].header;
  const currentPath = stripLocaleFromPath(pathname) || "/";

  const converterCategories = [
    {
      label: t.categoryCsv,
      items: [
        { slug: "json-to-csv-converter", label: t.jsonToCsv, icon: "jsonToCsv" },
        { slug: "csv-to-json-converter", label: t.csvToJson, icon: "csvToJson" },
      ],
    },
    {
      label: t.categoryExcel,
      items: [
        { slug: "excel-to-json-converter", label: t.excelToJson, icon: "excelToJson" },
        { slug: "json-to-excel-converter", label: t.jsonToExcel, icon: "jsonToExcel" },
        { slug: "excel-to-csv-converter", label: t.excelToCsv, icon: "excelToCsv" },
      ],
    },
    {
      label: t.categoryImage,
      items: [
        { slug: "image-converter", label: t.imageConverter, icon: "imageConverter" },
        { slug: "png-to-jpg-converter", label: t.pngToJpg, icon: "pngToJpg" },
        { slug: "jpg-to-png-converter", label: t.jpgToPng, icon: "jpgToPng" },
        { slug: "webp-to-jpg-converter", label: t.webpToJpg, icon: "webpToJpg" },
        { slug: "jpg-to-webp-converter", label: t.jpgToWebp, icon: "jpgToWebp" },
        { slug: "png-to-webp-converter", label: t.pngToWebp, icon: "pngToWebp" },
        { slug: "image-metadata-viewer", label: t.imageMetadataViewer, icon: "imageMetadataViewer" },
        { slug: "remove-image-metadata", label: t.removeImageMetadata, icon: "removeImageMetadata" },
      ],
    },
  ];

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("headerNav");
    const convertersDropdown = document.getElementById("convertersDropdown");
    const langDropdown = document.getElementById("langDropdown");

    const onHamburger = () => nav?.classList.toggle("open");
    const closeNav = () => nav?.classList.remove("open");
    const onConverters = (e: MouseEvent) => {
      e.stopPropagation();
      convertersDropdown?.classList.toggle("open");
    };
    const onLang = (e: MouseEvent) => {
      e.stopPropagation();
      langDropdown?.classList.toggle("open");
    };
    const closeAll = () => {
      document.querySelectorAll(".dropdown.open").forEach((el) => el.classList.remove("open"));
    };

    const navLinks = nav ? Array.from(nav.querySelectorAll("a")) : [];
    navLinks.forEach((a) => a.addEventListener("click", closeNav));

    hamburger?.addEventListener("click", onHamburger);
    convertersDropdown?.addEventListener("click", onConverters);
    langDropdown?.addEventListener("click", onLang);
    document.addEventListener("click", closeAll);

    return () => {
      navLinks.forEach((a) => a.removeEventListener("click", closeNav));
      hamburger?.removeEventListener("click", onHamburger);
      convertersDropdown?.removeEventListener("click", onConverters);
      langDropdown?.removeEventListener("click", onLang);
      document.removeEventListener("click", closeAll);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <Link href={getRelativeLocaleUrl(locale, "/")} className="logo">
          <div className="logo-icon">C</div>
          <span className="logo-text">{t.logoText}</span>
        </Link>
      </div>
      <div className="header-right">
        <button className="hamburger" id="hamburger" aria-label={t.menuAria}>
          ☰
        </button>
        <nav className="header-nav" id="headerNav">
          <Link href={getRelativeLocaleUrl(locale, "/")}>{t.home}</Link>
          <Link href={getRelativeLocaleUrl(locale, "/docs")}>{t.docs}</Link>
          <Link href={getRelativeLocaleUrl(locale, "/faq")}>{t.faq}</Link>
          <Link href={getRelativeLocaleUrl(locale, "/blog")}>{t.blog}</Link>
          <Link href={getRelativeLocaleUrl(locale, "/about")}>{t.about}</Link>
          <div className="dropdown menu-dropdown" id="convertersDropdown">
            <button className="dropdown-btn">
              {t.converters} ▾
            </button>
            <div className="dropdown-menu menu-panel">
              {converterCategories.map((cat) => (
                <div className="menu-category" key={cat.label}>
                  <span className="menu-category-label">{cat.label}</span>
                  {cat.items.map((link) => (
                    <Link
                      className="menu-item"
                      href={getRelativeLocaleUrl(locale, `/${link.slug}`)}
                      key={link.slug}
                    >
                      <i className={`menu-icon ${toolIcons[link.icon]}`} aria-hidden="true"></i>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://github.com/NaimBiswas/convert/issues/new"
            target="_blank"
            rel="noopener"
            className="report-btn"
          >
            {t.reportIssue}
          </a>
          <span className="badge">{t.versionBadge}</span>
          <div className="dropdown lang-dropdown" id="langDropdown">
            <button className="dropdown-btn" aria-label={t.language}>
              {languages[locale].native} ▾
            </button>
            <div className="dropdown-menu lang-menu">
              {locales.map((loc) => (
                <Link
                  href={getRelativeLocaleUrl(loc, currentPath)}
                  className={loc === locale ? "current-lang" : ""}
                  key={loc}
                >
                  {languages[loc].native}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <ThemeToggle ariaLabel={t.themeAria} />
      </div>
    </header>
  );
}

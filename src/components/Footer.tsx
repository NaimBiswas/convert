import { getRelativeLocaleUrl } from "@/lib/links";
import Link from "next/link";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/languages";

export default function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale].footer;
  const loc = (p: string) => getRelativeLocaleUrl(locale, p);

  const links = [
    { href: loc("/"), label: t.home },
    { href: loc("/docs"), label: t.docs },
    { href: loc("/faq"), label: t.faq },
    { href: loc("/blog"), label: t.blog },
    { href: loc("/about"), label: t.about },
    { href: loc("/contact"), label: t.contact },
    { href: loc("/privacy"), label: t.privacy },
    { href: loc("/terms"), label: t.terms },
    { href: loc("/cookies"), label: t.cookies },
    { href: "https://github.com/NaimBiswas/convert", label: t.github },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <span className="footer-tag">
          <span className="lock-icon">🔒</span>
          {t.tagline}
        </span>
        <div className="footer-links">
          {links.map((l, i) => (
            <span key={l.href}>
              {i > 0 && <span className="sep">·</span>}
              {l.href.startsWith("http") ? (
                <a href={l.href} target="_blank" rel="noopener">
                  {l.label}
                </a>
              ) : (
                <Link href={l.href}>{l.label}</Link>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} {t.copyright}
      </div>
    </footer>
  );
}

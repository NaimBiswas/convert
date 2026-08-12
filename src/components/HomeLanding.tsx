import { getRelativeLocaleUrl } from "@/lib/links";
import Link from "next/link";
import { homeContent } from "@/i18n/content";
import type { Locale } from "@/i18n/languages";
import ConverterBar from "./tools/ConverterBar";
import InputPanel from "./tools/InputPanel";
import PreviewTable from "./tools/PreviewTable";

const icons: Record<string, string> = {
  api: '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>',
  db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  config:
    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  report:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  sheet: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
  json: '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>',
  csv: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  excel: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
  xml: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
};

export default function HomeLanding({ locale }: { locale: Locale }) {
  const c = homeContent[locale];

  return (
    <>
      <section className="hero">
        <h1 dangerouslySetInnerHTML={{ __html: c.hero.h1 }} />
        {c.hero.descs.map((d, i) => (
          <p key={i} className="hero-desc" dangerouslySetInnerHTML={{ __html: d }} />
        ))}
        <div className="trust-badge">
          <span className="trust-icon">🔒</span>
          <span>{c.hero.trust}</span>
        </div>
      </section>

      <ConverterBar locale={locale} />
      <InputPanel locale={locale} />
      <PreviewTable locale={locale} />

      <section className="features">
        <h2>{c.features.heading}</h2>
        <div className="feature-grid">
          {c.features.cards.map((card, i) => (
            <Link key={i} href={getRelativeLocaleUrl(locale, card.link)} className="feature-card">
              <h3 dangerouslySetInnerHTML={{ __html: card.title }} />
              <p dangerouslySetInnerHTML={{ __html: card.desc }} />
            </Link>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>{c.howItWorks.heading}</h2>
        <ol className="steps">
          {c.howItWorks.steps.map((step, i) => (
            <li key={i}>
              <strong dangerouslySetInnerHTML={{ __html: step.title }} /> —{" "}
              <span dangerouslySetInnerHTML={{ __html: step.desc }} />
            </li>
          ))}
        </ol>
      </section>

      <section className="use-cases">
        <div className="section-header">
          <h2>{c.useCases.heading}</h2>
          <p>{c.useCases.sub}</p>
        </div>
        <div className="use-case-grid">
          {c.useCases.cards.map((card, i) => (
            <div className="use-case-card" key={i}>
              <div className="use-case-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: icons[card.icon] || "" }}
                />
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="format-table">
        <div className="section-header">
          <h2>{c.formats.heading}</h2>
          <p>{c.formats.sub}</p>
        </div>
        <div className="format-grid">
          {c.formats.cards.map((card, i) => (
            <div className="format-card" key={i}>
              <span className="format-label">{card.label}</span>
              <span className="format-arrow">→</span>
              <div className="format-targets">
                {card.targets.map((target, j) => (
                  <span key={j}>{target}</span>
                ))}
              </div>
              <span className="format-tag">{card.tag}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
import { getRelativeLocaleUrl } from "@/lib/links";
import Link from "next/link";
import { homeContent } from "@/i18n/content";
import type { Locale } from "@/i18n/languages";
import ConverterBar from "./tools/ConverterBar";
import InputPanel from "./tools/InputPanel";
import PreviewTable from "./tools/PreviewTable";

export default function HomeLanding({ locale }: { locale: Locale }) {
  const c = homeContent[locale];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-500 text-primary-foreground min-h-[60vh] flex items-center justify-center py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {c.hero.h1}
          </h1>
          <div className="space-y-3 max-w-2xl mx-auto">
            {c.hero.descs.map((d, i) => (
              <p key={i} className="text-lg lg:text-xl text-primary-foreground/90 leading-relax">
                {d}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
            <span className="badge bg-badge">
              <span className="badge-icon">🔒</span>
              {c.hero.trust}
            </span>
          </div>
        </div>
      </section>

      {/* Converter Bar + Panels */}
      <div className="container mx-auto my-12">
        <ConverterBar locale={locale} />
        <div className="grid gap-6 md:grid-cols-2 pt-6">
          <InputPanel locale={locale} />
          <PreviewTable locale={locale} />
        </div>
      </div>

      {/* Main Features */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {c.features.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {c.formats.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.features.cards.map((card, i) => (
              <Link
                key={i}
                href={getRelativeLocaleUrl(locale, card.link)}
                className="group rounded-xl border border-border p-5 hover:border-primary transition-colors"
              >
                <div className="feature-icon mb-3">
                  <svg
                    className="w-6 h-6 text-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {card.icon === "json"
                      ? "<polyline points=\"16 3 21 3 21 8\"/><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"/><polyline points=\"21 16 21 21 16 21\"/><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"/><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"/>"
                      : card.icon === "csv"
                      ? "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"/><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"/>"
                      : card.icon === "excel"
                      ? "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"/><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"/>"
                      : card.icon === "xml"
                      ? "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/><polyline points=\"10 9 9 9 8 9\"/>"
                      : card.icon === "image"
                      ? "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/>"
                      : ""
                    }
                  </svg>
                </div>
                <h3 className="text-lg font-medium group-hover:text-primary mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">
              {c.howItWorks.heading}
            </h2>
            <ol className="space-y-3">
              {c.howItWorks.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded bg-primary p-2">
                    <span className="text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <strong className="font-medium">{step.title}</strong>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="pb-8">
            <h2 className="text-2xl font-bold mb-3">
              {c.useCases.heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {c.useCases.sub}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.useCases.cards.map((card, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border p-5 hover:border-primary transition-colors"
              >
                <div className="feature-icon mb-3">
                  {card.icon === "api"
                    ? "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\" /><polyline points=\"16 3 21 3 21 8\" />"
                    : card.icon === "db"
                    ? "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"/><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"/>"
                    : card.icon === "config"
                    ? "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"/>"
                    : card.icon === "sheet"
                    ? "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"/><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"/>"
                    : card.icon === "report"
                    ? "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/><polyline points=\"10 9 9 9 8 9\"/>"
                    : ""
                  }
                </div>
                <h3 className="text-lg font-medium group-hover:text-primary mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              {c.formats.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {c.formats.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {c.formats.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-xl border border-border p-4"
              >
                <span className="format-label text-sm font-medium">
                  {card.label}
                </span>
                <span className="format-arrow text-primary text-sm ml-1">→</span>
                <div className="format-targets">
                  {card.targets.map((target, j) => (
                    <span
                      key={j}
                      className="format-target text-xs text-muted-foreground ml-1"
                    >
                      {target}
                    </span>
                  ))}
                </div>
                <span className="format-tag text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                  {card.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
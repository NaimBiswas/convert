import { converterContent } from "@/i18n/content";
import type { ConverterSlug } from "@/i18n/content";
import type { Locale } from "@/i18n/languages";
import ConverterBar from "./tools/ConverterBar";
import InputPanel from "./tools/InputPanel";
import PreviewTable from "./tools/PreviewTable";
import LandingContent from "./LandingContent";

export default function ConverterLanding({
  locale,
  slug,
}: {
  locale: Locale;
  slug: ConverterSlug;
}) {
  const c = converterContent[locale][slug];

  return (
    <main className="landing">
      <section className="landing-hero">
        <h1>{c.h1}</h1>
        <p className="landing-desc" dangerouslySetInnerHTML={{ __html: c.desc }} />
      </section>

      <ConverterBar from={c.from} to={c.to} locale={locale} />
      <InputPanel locale={locale} />
      <PreviewTable locale={locale} />

      <LandingContent sections={c.sections} />
    </main>
  );
}
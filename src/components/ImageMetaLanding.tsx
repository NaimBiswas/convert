import { converterContent } from "@/i18n/content";
import type { ConverterSlug } from "@/i18n/content";
import type { Locale } from "@/i18n/languages";
import ImageMetaInput from "./tools/ImageMetaInput";
import ImageMetaResult from "./tools/ImageMetaResult";
import LandingContent from "./LandingContent";

export default function ImageMetaLanding({
  locale,
  slug,
}: {
  locale: Locale;
  slug: ConverterSlug;
}) {
  const c = converterContent[locale][slug];
  const mode = slug === "remove-image-metadata" ? "remove" : "view";

  return (
    <main className="landing">
      <section className="landing-hero">
        <h1>{c.h1}</h1>
        <p className="landing-desc" dangerouslySetInnerHTML={{ __html: c.desc }} />
      </section>

      <ImageMetaInput locale={locale} />
      <ImageMetaResult locale={locale} mode={mode} />

      <LandingContent sections={c.sections} />
    </main>
  );
}
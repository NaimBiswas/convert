import { converterContent } from "@/i18n/content";
import type { ConverterSlug } from "@/i18n/content";
import type { Locale } from "@/i18n/languages";
import ImageInput from "./tools/ImageInput";
import ImagePreview from "./tools/ImagePreview";
import LandingContent from "./LandingContent";

export default function ImageConverterLanding({
  locale,
  slug,
}: {
  locale: Locale;
  slug: ConverterSlug;
}) {
  const c = converterContent[locale][slug];
  const defaultTo = c.to === "WEBP" ? "WEBP" : c.to === "PNG" ? "PNG" : "JPG";

  return (
    <main className="landing">
      <section className="landing-hero">
        <h1>{c.h1}</h1>
        <p className="landing-desc" dangerouslySetInnerHTML={{ __html: c.desc }} />
      </section>

      <ImageInput locale={locale} defaultTo={defaultTo} />
      <ImagePreview locale={locale} />

      <LandingContent sections={c.sections} />
    </main>
  );
}
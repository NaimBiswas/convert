import type { Metadata } from "next";
import { getRelativeLocaleUrl } from "@/lib/links";
import { languages, locales, defaultLocale } from "@/i18n/languages";
import type { Locale } from "@/i18n/languages";

export const SITE_URL = "https://metadataconverter.com";

export function siteUrlFor(locale: Locale, logicalPath: string): string {
  return `${SITE_URL}${getRelativeLocaleUrl(locale, logicalPath)}`;
}

export function buildMetadata(opts: {
  locale: Locale;
  logicalPath: string;
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  robots?: string;
  siteName: string;
}): Metadata {
  const {
    locale,
    logicalPath,
    title,
    description,
    keywords,
    image = `${SITE_URL}/og-image.png`,
    robots = "index, follow",
    siteName,
  } = opts;

  const url = siteUrlFor(locale, logicalPath);
  const absImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const languagesMap: Record<string, string> = {};
  locales.forEach((loc) => {
    languagesMap[languages[loc].htmlLang] = siteUrlFor(loc, logicalPath);
  });
  languagesMap["x-default"] = siteUrlFor(defaultLocale, logicalPath);

  const fullTitle = `${title} - ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords,
    robots,
    alternates: {
      canonical: url,
      languages: languagesMap,
    },
    openGraph: {
      type: "website",
      locale: languages[locale].ogLocale,
      title: fullTitle,
      description,
      url,
      siteName,
      images: [{ url: absImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absImage],
    },
  };
}

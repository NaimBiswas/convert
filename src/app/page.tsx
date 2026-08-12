import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/languages";
import { ui } from "@/i18n/ui";
import { homeContent } from "@/i18n/content";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import JsonLd, { defaultWebApplicationSchema } from "@/components/JsonLd";
import HomeLanding from "@/components/HomeLanding";

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale;
  const c = homeContent[locale];
  return buildMetadata({
    locale,
    logicalPath: "/",
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    siteName: ui[locale].layout.siteName,
  });
}

export default function RootPage() {
  const locale = defaultLocale;
  const c = homeContent[locale];
  const schema = defaultWebApplicationSchema({
    siteName: ui[locale].layout.siteName,
    url: SITE_URL,
    description: c.meta.description,
  });

  return (
    <>
      <JsonLd data={schema} />
      <HomeLanding locale={locale} />
    </>
  );
}
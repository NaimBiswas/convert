import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/languages";
import type { Locale } from "@/i18n/languages";
import { ui } from "@/i18n/ui";
import { homeContent } from "@/i18n/content";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import JsonLd, { defaultWebApplicationSchema } from "@/components/JsonLd";
import HomeLanding from "@/components/HomeLanding";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = homeContent[locale];
  const siteName = ui[locale].layout.siteName;

  const schema = defaultWebApplicationSchema({
    siteName,
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
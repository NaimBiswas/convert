import AppInit from "@/components/AppInit";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import SidebarAdSlot from "@/components/SidebarAdSlot";
import CookieBanner from "@/components/CookieBanner";
import { defaultLocale, isLocale } from "@/i18n/languages";
import type { Locale } from "@/i18n/languages";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;

  return (
    <div className="app">
      <AppInit locale={locale} />
      <Header locale={locale} />
      <div className="main">
        <AdBanner />
        {children}
      </div>
      <Footer locale={locale} />
      <SidebarAdSlot />
      <CookieBanner locale={locale} />
    </div>
  );
}
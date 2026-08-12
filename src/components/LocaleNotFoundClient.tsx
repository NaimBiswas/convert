"use client";

import { usePathname } from "next/navigation";
import NotFoundPage from "@/components/ui/page-not-found";
import { detectLocaleFromPath, getRelativeLocaleUrl } from "@/lib/links";

export default function LocaleNotFoundClient() {
  const pathname = usePathname();
  const locale = detectLocaleFromPath(pathname);
  return <NotFoundPage homeHref={getRelativeLocaleUrl(locale, "/")} />;
}
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LinkInterceptor() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = (e.target as Element | null)?.closest?.("a");
      if (!target) return;
      if (target.getAttribute("target") === "_blank") return;
      const href = target.getAttribute("href");
      if (!href) return;
      // Ignore blob: and data: URLs (used for downloads)
      if (href.startsWith("blob:") || href.startsWith("data:")) return;
      if (
        href.startsWith("//") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.hash) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        return;
      }
      e.preventDefault();
      router.push(href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}
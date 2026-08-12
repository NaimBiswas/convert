"use client";

import { useEffect } from "react";

let loaded = false;

export default function ScriptLoader() {
  useEffect(() => {
    if (loaded) return;
    loaded = true;

    const headScripts: { src: string; attrs?: Record<string, string> }[] = [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5712552452630675",
        attrs: { crossOrigin: "anonymous" },
      },
      {
        src: "https://5gvci.com/act/files/tag.min.js?z=11439433",
        attrs: { "data-cfasync": "false" },
      },
      {
        src: "https://richinfo.co/richpartners/push/js/rp-cl-ob.js?pubid=1019454&siteid=403824&niche=33",
        attrs: { type: "module", "data-cfasync": "false" },
      },
      {
        src: "https://richinfo.co/richpartners/pops/js/richads-pu-ob.js",
        attrs: { "data-pubid": "1019454", "data-siteid": "403825", "data-cfasync": "false" },
      },
      {
        src: "https://richinfo.co/richpartners/pops/js/richads-pu-ob.js",
        attrs: { "data-pubid": "1019454", "data-siteid": "403826", "data-cfasync": "false" },
      },
    ];

    headScripts.forEach(({ src, attrs }) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      Object.entries(attrs ?? {}).forEach(([k, v]) => s.setAttribute(k, v));
      document.head.appendChild(s);
    });

    const bodyScripts: { src: string; zone: string }[] = [
      { src: "https://n6wxm.com/vignette.min.js", zone: "11439435" },
      { src: "https://nap5k.com/tag.min.js", zone: "11439434" },
      { src: "https://nap5k.com/tag.min.js", zone: "11431620" },
    ];

    bodyScripts.forEach(({ src, zone }) => {
      const s = document.createElement("script");
      s.dataset.zone = zone;
      s.src = src;
      (document.body || document.documentElement).appendChild(s);
    });
  }, []);

  return null;
}

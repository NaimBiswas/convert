"use client";

import { useEffect, useRef } from "react";

let queueTail = Promise.resolve();

export default function AdUnit({
  config,
  src,
  className,
}: {
  config: string;
  src: string;
  className?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || frame.querySelector("script")) return;
    queueTail = queueTail
      .then(
        () =>
          new Promise<void>((resolve) => {
            if (frame.querySelector("script")) {
              resolve();
              return;
            }
            const cfg = document.createElement("script");
            cfg.text = config;
            frame.appendChild(cfg);
            const loader = document.createElement("script");
            loader.src = src;
            loader.onload = () => resolve();
            loader.onerror = () => resolve();
            frame.appendChild(loader);
          })
      )
      .catch(() => {});
  }, [config, src]);

  return <div ref={frameRef} className={className} />;
}
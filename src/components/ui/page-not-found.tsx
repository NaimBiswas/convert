"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type NotFoundPageProps = {
  homeHref?: string;
};

export default function NotFoundPage({ homeHref = "/" }: NotFoundPageProps) {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <MessageDisplay homeHref={homeHref} />
      <CharactersAnimation />
      <CircleAnimation />
    </div>
  );
}

/* ============ 1. Message display ============ */

function MessageDisplay({ homeHref }: { homeHref: string }) {
  const router = useRouter();

  return (
    <div className="absolute z-[100] flex h-[90%] w-[90%] flex-col items-center justify-center text-center">
      <div className="w-full max-w-lg rounded-2xl bg-white/90 backdrop-blur-sm px-6 py-6 shadow-2xl sm:px-8 sm:py-8">
      <div className="flex flex-col items-center" style={{paddingBottom:20}}>
        <div className="m-[1%] text-[35px] font-semibold text-black sm:text-[42px]">
          Page Not Found
        </div>
        <div className="m-[1%] text-[80px] font-bold leading-none text-black sm:text-[120px]">
          404
        </div>
        <p className="m-[1%] w-[92%] min-w-[40%] text-center text-[15px] text-neutral-700 sm:w-1/2">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>
        <div className="mt-8 mb-8 flex flex-wrap justify-center gap-6">
          <button
            type="button"
            onClick={() => router.back()}
            style={{paddingLeft:10, paddingRight:10,
              paddingTop: '5px',
              paddingBottom: '5px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            className="flex h-auto items-center gap-2 border-2 border-black px-8 py-3 text-base font-medium text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Go Back
          </button>
          <button
            type="button"
            onClick={() => router.push(homeHref)}
            style={{paddingLeft:10, paddingRight:10,
              paddingTop: '5px',
              paddingBottom: '5px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            className="flex h-auto items-center gap-2 bg-black px-8 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-neutral-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go Home
          </button>
        </div>
      </div>
      </div>

    </div>
  );
}

/* ============ 2. Characters (walking stick figures) ============ */

function stickSvgSrc(variant: number): string {
  const figures: Record<number, string> = {
    0: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="22" r="11" fill="#fff"/><line x1="60" y1="33" x2="60" y2="80" stroke="#fff" stroke-width="7" stroke-linecap="round"/><line x1="60" y1="48" x2="34" y2="66" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="48" x2="86" y2="66" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="80" x2="40" y2="108" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="80" x2="80" y2="108" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`,
    1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="22" r="11" fill="#fff"/><line x1="60" y1="33" x2="60" y2="80" stroke="#fff" stroke-width="7" stroke-linecap="round"/><line x1="60" y1="48" x2="28" y2="58" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="48" x2="92" y2="58" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="80" x2="38" y2="106" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="80" x2="82" y2="106" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`,
    2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="22" r="11" fill="#fff"/><line x1="60" y1="33" x2="60" y2="80" stroke="#fff" stroke-width="7" stroke-linecap="round"/><line x1="60" y1="48" x2="28" y2="66" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="48" x2="92" y2="66" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="80" x2="38" y2="102" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="80" x2="82" y2="102" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`,
    3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="22" r="11" fill="#fff"/><line x1="60" y1="33" x2="60" y2="76" stroke="#fff" stroke-width="7" stroke-linecap="round"/><line x1="60" y1="48" x2="32" y2="62" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="48" x2="88" y2="62" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="76" x2="42" y2="78" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="76" x2="78" y2="78" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`,
  };
  return `data:image/svg+xml;utf8,${encodeURIComponent(figures[variant] ?? figures[0])}`;
}

type SticksConfig = {
  top?: string;
  bottom?: string;
  variant: number;
  transform?: string;
  speedX: number;
  speedRotation?: number;
};

const STICKS_CONFIG: SticksConfig[] = [
  { top: "0%", variant: 0, transform: "rotateZ(-90deg)", speedX: 1500 },
  { top: "10%", variant: 1, speedX: 3000, speedRotation: 2000 },
  { top: "20%", variant: 2, speedX: 5000, speedRotation: 1000 },
  { top: "25%", variant: 0, speedX: 2500, speedRotation: 1500 },
  { top: "35%", variant: 0, speedX: 2000, speedRotation: 300 },
  { bottom: "5%", variant: 3, speedX: 0 },
];

function CharactersAnimation() {
  const charactersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = charactersRef.current;
    if (!container) return;

    const render = () => {
      container.innerHTML = "";
      STICKS_CONFIG.forEach((figure, index) => {
        const isLast = index === STICKS_CONFIG.length - 1;
        const stick = document.createElement("img");
        stick.className = "characters";
        stick.style.position = "absolute";
        stick.style.width = "18%";
        stick.style.height = "18%";
        if (figure.top) stick.style.top = figure.top;
        if (figure.bottom) stick.style.bottom = figure.bottom;
        stick.src = stickSvgSrc(figure.variant);
        if (figure.transform) stick.style.transform = figure.transform;
        container.appendChild(stick);

        if (isLast) return;

        stick.animate(
          [{ left: "100%" }, { left: "-20%" }],
          { duration: figure.speedX, easing: "linear", fill: "forwards" }
        );

        if (index !== 0 && figure.speedRotation) {
          stick.animate(
            [{ transform: "rotate(0deg)" }, { transform: "rotate(-360deg)" }],
            { duration: figure.speedRotation, iterations: Infinity, easing: "linear" }
          );
        }
      });
    };

    render();
    window.addEventListener("resize", render);
    return () => {
      window.removeEventListener("resize", render);
      container.innerHTML = "";
    };
  }, []);

  return <div ref={charactersRef} className="absolute h-[95%] w-[99%]" />;
}

/* ============ 3. Circle animation ============ */

type Circle = { x: number; y: number; size: number };

const TOTAL_CIRCLES = 300;

function CircleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number | undefined>(undefined);
  const timerRef = useRef(0);
  const circlesRef = useRef<Circle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initCircles = () => {
      circlesRef.current = [];
      for (let i = 0; i < TOTAL_CIRCLES; i++) {
        const randomX =
          Math.floor(Math.random() * (canvas.width * 3 - canvas.width * 1.2 + 1)) +
          canvas.width * 1.2;
        const randomY =
          Math.floor(Math.random() * (canvas.height - canvas.height * -0.2 + 1)) +
          canvas.height * -0.2;
        const size = canvas.width / 1000;
        circlesRef.current.push({ x: randomX, y: randomY, size });
      }
    };

    const draw = () => {
      const context = canvas.getContext("2d");
      if (!context) return;

      timerRef.current += 1;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.fillStyle = "white";
      context.clearRect(0, 0, canvas.width, canvas.height);

      const distanceX = canvas.width / 80;
      const growthRate = canvas.width / 1000;

      circlesRef.current.forEach((circulo) => {
        context.beginPath();
        if (timerRef.current < 65) {
          circulo.x -= distanceX;
          circulo.size += growthRate;
        } else if (timerRef.current < 500) {
          circulo.x -= distanceX * 0.02;
          circulo.size += growthRate * 0.2;
        }
        context.arc(circulo.x, circulo.y, circulo.size, 0, Math.PI * 2);
        context.fill();
      });

      if (timerRef.current > 500) {
        const raf = requestIdRef.current;
        if (raf != null) cancelAnimationFrame(raf);
        return;
      }
      requestIdRef.current = requestAnimationFrame(draw);
    };

    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      timerRef.current = 0;
      const raf = requestIdRef.current;
      if (raf != null) cancelAnimationFrame(raf);
      initCircles();
      draw();
    };

    render();
    window.addEventListener("resize", render);
    return () => {
      window.removeEventListener("resize", render);
      const raf = requestIdRef.current;
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
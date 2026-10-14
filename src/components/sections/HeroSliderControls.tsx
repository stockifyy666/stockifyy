"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSliderControls({ totalSlides }: { totalSlides: number }) {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer(current: number) {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlide((s) => {
        const next = (s + 1) % totalSlides;
        applySlide(next, totalSlides);
        return next;
      });
    }, 7000);
  }

  useEffect(() => {
    startTimer(0);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goTo(next: number) {
    applySlide(next, totalSlides);
    setSlide(next);
    startTimer(next);
  }

  return (
    <>
      <button
        onClick={() => goTo((slide - 1 + totalSlides) % totalSlides)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity sm:h-11 sm:w-11"
        style={{ background: "rgba(11,31,46,0.55)", border: "1px solid rgba(254,165,0,0.3)" }}
      >
        <ChevronLeft className="size-4 sm:size-5 text-white" />
      </button>
      <button
        onClick={() => goTo((slide + 1) % totalSlides)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity sm:h-11 sm:w-11"
        style={{ background: "rgba(11,31,46,0.55)", border: "1px solid rgba(254,165,0,0.3)" }}
      >
        <ChevronRight className="size-4 sm:size-5 text-white" />
      </button>
    </>
  );
}

function applySlide(active: number, total: number) {
  for (let i = 0; i < total; i++) {
    const el = document.getElementById(`hero-slide-${i}`);
    if (!el) continue;
    if (i === active) {
      el.style.opacity = "1";
      el.style.zIndex = "10";
    } else {
      el.style.opacity = "0";
      el.style.zIndex = "0";
    }
  }
}

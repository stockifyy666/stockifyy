"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { laptop: "/images/laptopBanner.jpeg",  mobile: "/images/mobileBanner.png" },
  { laptop: "/images/laptopslide2.jpeg", mobile: "/images/mobileSlide2.jpeg" },
  
];

const INTERVAL = 5000;

export default function AdvertisementBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <div
      className="relative w-full overflow-hidden group min-h-[55vh] sm:min-h-[80vh] md:min-h-[79vh] lg:min-h-[80vh] xl:min-h-[102vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${i === 0 ? "relative" : "absolute inset-0"} transition-opacity duration-700`}
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.laptop} alt={`Advertisement ${i + 1}`} className="hidden md:block w-full h-auto" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.mobile} alt={`Advertisement ${i + 1}`} className="block md:hidden w-full h-auto" />
        </div>
      ))}

      {/* Left arrow — desktop only */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(11,31,46,0.55)", border: "1px solid rgba(254,165,0,0.3)" }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5 text-white" />
      </button>

      {/* Right arrow — desktop only */}
      <button
        onClick={next}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(11,31,46,0.55)", border: "1px solid rgba(254,165,0,0.3)" }}
        aria-label="Next slide"
      >
        <ChevronRight className="size-5 text-white" />
      </button>

      {/* Enroll Now — overlaid at the bottom, no extra gap */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <a
          href="https://wa.me/923362444466?text=Hi%2C%20I%20would%20like%20to%20enroll%20in%20the%20Technical%20Analysis%20SuperClass.%20Please%20guide%20me%20on%20the%20next%20steps."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-display text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90 whitespace-nowrap"
          style={{ background: "linear-gradient(135deg, #FEA500 0%, #7C5200 100%)" }}
        >
          Enroll Now →
        </a>
      </div>
    </div>
  );
}

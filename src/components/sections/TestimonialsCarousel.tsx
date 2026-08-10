"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const reviews = [
  "/images/r1.png",
  "/images/r2.png",
  "/images/r3.png",
  "/images/r4.png",
  "/images/r5.png",
  "/images/r6.png",
  "/images/r7.png",
];

const GOOGLE_REVIEWS_URL =
  "https://search.google.com/local/reviews?placeid=ChIJD0z5nLHt3zgRXQBJPAKe3hc";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % reviews.length),
    []
  );
  const prev = () =>
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const prevIdx = (current - 1 + reviews.length) % reviews.length;
  const nextIdx = (current + 1) % reviews.length;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Desktop: 3 cards */}
      <div className="hidden md:flex items-center justify-center gap-5">
        {/* Prev arrow */}
        <button
          onClick={() => { prev(); setPaused(true); }}
          aria-label="Previous review"
          className="flex-shrink-0 w-10 h-10 rounded-full border border-creamLine bg-white shadow-sm flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Cards */}
        <div className="flex gap-5 items-center">
          {/* Left card */}
          <div className="w-[260px] flex-shrink-0 opacity-50 rounded-2xl overflow-hidden shadow-sm border border-creamLine bg-white transition-all duration-500">
            <Image
              src={reviews[prevIdx]}
              alt={`Google review ${prevIdx + 1}`}
              width={260}
              height={320}
              sizes="260px"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Center card (active) */}
          <div className="w-[320px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border-2 border-gold bg-white transition-all duration-500">
            <Image
              src={reviews[current]}
              alt={`Google review ${current + 1}`}
              width={320}
              height={400}
              sizes="320px"
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Right card */}
          <div className="w-[260px] flex-shrink-0 opacity-50 rounded-2xl overflow-hidden shadow-sm border border-creamLine bg-white transition-all duration-500">
            <Image
              src={reviews[nextIdx]}
              alt={`Google review ${nextIdx + 1}`}
              width={260}
              height={320}
              sizes="260px"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Next arrow */}
        <button
          onClick={() => { next(); setPaused(true); }}
          aria-label="Next review"
          className="flex-shrink-0 w-10 h-10 rounded-full border border-creamLine bg-white shadow-sm flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile: single card */}
      <div className="md:hidden flex items-center gap-3 px-2">
        <button
          onClick={() => { prev(); setPaused(true); }}
          aria-label="Previous review"
          className="flex-shrink-0 w-9 h-9 rounded-full border border-creamLine bg-white shadow-sm flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg border-2 border-gold bg-white">
          <Image
            src={reviews[current]}
            alt={`Google review ${current + 1}`}
            width={400}
            height={300}
            sizes="(max-width: 768px) calc(100vw - 80px)"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <button
          onClick={() => { next(); setPaused(true); }}
          aria-label="Next review"
          className="flex-shrink-0 w-9 h-9 rounded-full border border-creamLine bg-white shadow-sm flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setPaused(true); }}
            aria-label={`Go to review ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-gold"
                : "w-2 h-2 bg-creamLine hover:bg-amber"
            }`}
          />
        ))}
      </div>

      {/* Read All Reviews button */}
      <div className="flex justify-center mt-8">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-gold text-amber font-display text-sm font-medium px-7 py-3 hover:bg-gold hover:text-white transition-all duration-300"
        >
          Read All Reviews on Google
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Award, Crown, PhoneCall, Users } from "lucide-react";

const slides = [
  {
    src: "/images/course-banner-technical-analysis.webp",
    mobileSrc: "/images/course-banner-technical-analysis-mobile.jpg",
    alt: "Technical Analysis SuperClass Batch 10 with Dr. Masood Rashid & Mr. Hassan Askari",
  },
  {
    src: "/images/course-banner-index.webp",
    mobileSrc: "/images/course-banner-index-mobile.jpg",
    alt: "Technical Analysis course index — topics covered",
  },
];

const ENROLL_WHATSAPP_URL =
  "https://wa.me/923362444466?text=Hi%2C%20I%20would%20like%20to%20enroll%20in%20the%20Technical%20Analysis%20SuperClass.%20Please%20guide%20me%20on%20the%20next%20steps.";

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setSlide((s) => (s + 1) % slides.length),
      7000
    );
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goTo(updater: (s: number) => number) {
    setSlide(updater);
    startTimer();
  }

  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] dark:bg-[#0f0f0f]">
      {/* dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(254,165,0,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.6,
        }}
      />

      {/* top-right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(254,165,0,0.10) 0%, transparent 65%)" }}
      />

      {/* bottom-left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(254,165,0,0.07) 0%, transparent 65%)" }}
      />

      {/* gold top border */}
      <div
        className="absolute inset-x-0 top-0 z-10 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #FEA500, #7C5200, #FEA500, transparent)" }}
      />

      {/* Banner slider */}
      <div>
        <div className="relative z-10 w-full overflow-hidden aspect-[1080/700] sm:aspect-[3/1]">
          {slides.map((s, i) => (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === slide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={s.mobileSrc}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                quality={60}
                className="object-cover sm:hidden"
              />
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                quality={60}
                className="hidden object-cover sm:block"
              />
            </div>
          ))}

          {/* Left arrow */}
          <button
            onClick={() => goTo((s) => (s - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity sm:h-11 sm:w-11"
            style={{ background: "rgba(11,31,46,0.55)", border: "1px solid rgba(254,165,0,0.3)" }}
          >
            <ChevronLeft className="size-4 sm:size-5 text-white" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => goTo((s) => (s + 1) % slides.length)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity sm:h-11 sm:w-11"
            style={{ background: "rgba(11,31,46,0.55)", border: "1px solid rgba(254,165,0,0.3)" }}
          >
            <ChevronRight className="size-4 sm:size-5 text-white" />
          </button>

          {/* Enroll Now button */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 z-20 -translate-x-1/2">
            <a
              href={ENROLL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-opacity hover:opacity-90 whitespace-nowrap font-display sm:gap-2 sm:px-8 sm:py-3 sm:text-sm"
              style={{ background: "linear-gradient(135deg, #FEA500 0%, #7C5200 100%)" }}
            >
              Enroll Now →
            </a>
          </div>
        </div>

        {/* Quick-resource strip */}
        <div className="anim-1 relative z-10 w-full bg-[#FFFDF7] py-3 sm:py-4 border-b" style={{ borderColor: "rgba(254,165,0,0.35)" }}>
          <div className="mx-auto flex max-w-content items-start justify-center gap-3 px-3 sm:gap-14 sm:px-6 md:gap-20">
            <div className="badge-pop-1 group flex flex-col items-center gap-1.5 cursor-default">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDeep shadow-[0_4px_20px_rgba(254,165,0,0.35)]">
                <Award className="size-5 sm:size-7 md:size-8 text-white" />
              </div>
              <span className="text-center text-[9px] sm:text-[11px] font-semibold text-ink">Verify Certificate</span>
            </div>

            <Link href="/services/stockifyy-membership" className="badge-pop-2 group flex flex-col items-center gap-1.5">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDeep shadow-[0_4px_20px_rgba(254,165,0,0.35)] transition-transform group-hover:scale-110">
                <Crown className="size-5 sm:size-7 md:size-8 text-white" />
              </div>
              <span className="text-center text-[9px] sm:text-[11px] font-semibold text-ink">Stockifyy Membership</span>
            </Link>

            <Link href="/team" className="badge-pop-3 group flex flex-col items-center gap-1.5">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDeep shadow-[0_4px_20px_rgba(254,165,0,0.35)] transition-transform group-hover:scale-110">
                <Users className="size-5 sm:size-7 md:size-8 text-white" />
              </div>
              <span className="text-center text-[9px] sm:text-[11px] font-semibold text-ink">Meet Our Team</span>
            </Link>

            <Link href="/services/one-on-one-advisory" className="badge-pop-4 group flex flex-col items-center gap-1.5">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDeep shadow-[0_4px_20px_rgba(254,165,0,0.35)] transition-transform group-hover:scale-110">
                <PhoneCall className="size-5 sm:size-7 md:size-8 text-white" />
              </div>
              <span className="text-center text-[9px] sm:text-[11px] font-semibold text-ink">One on One Advisory</span>
            </Link>
          </div>
        </div>
      </div>

      {/* bottom divider */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #FEA500, transparent)", opacity: 0.5 }}
      />
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, BadgeCheck, Award, Crown, PhoneCall, Users } from "lucide-react";
import { Ticker } from "./Ticker";
import Counter from "@/components/ui/Counter";
import websiteImage from "../../../public/images/website-image.png";

// Course promo banners — top slider, auto-advances every 5s (matches
// the live site's banner pace).
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
  }, []);

  // Manual arrow clicks restart the auto-advance timer so the slide
  // the visitor just chose actually stays for a full interval instead
  // of the background timer flipping it again almost immediately.
  function goTo(updater: (s: number) => number) {
    setSlide(updater);
    startTimer();
  }

  return (
    <section className="relative overflow-hidden" style={{ background: "#FFFDF7" }}>
      <style>{`
        @keyframes float-up {
          0%   { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop-in {
          0%   { opacity: 0; transform: scale(0.75) translateY(10px); }
          70%  { opacity: 1; transform: scale(1.06) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .badge-pop-1 { animation: pop-in 0.5s 0.1s cubic-bezier(0.34,1.56,0.64,1) both; }
        .badge-pop-2 { animation: pop-in 0.5s 0.22s cubic-bezier(0.34,1.56,0.64,1) both; }
        .badge-pop-3 { animation: pop-in 0.5s 0.34s cubic-bezier(0.34,1.56,0.64,1) both; }
        .badge-pop-4 { animation: pop-in 0.5s 0.46s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        .anim-1 { animation: float-up 0.65s 0.05s ease forwards; opacity: 0; }
        .anim-2 { animation: float-up 0.65s 0.15s ease forwards; opacity: 0; }
        .anim-3 { animation: float-up 0.65s 0.25s ease forwards; opacity: 0; }
        .anim-4 { animation: float-up 0.65s 0.35s ease forwards; opacity: 0; }
        .anim-5 { animation: float-up 0.65s 0.45s ease forwards; opacity: 0; }
        .anim-6 { animation: float-up 0.65s 0.55s ease forwards; opacity: 0; }
        .shimmer-text {
          background-image: linear-gradient(90deg, #FEA500 0%, #7C5200 40%, #FEA500 80%, #7C5200 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .float-card-1 { animation: float-card 4s 0s ease-in-out infinite; }
        .float-card-2 { animation: float-card 4s 1.5s ease-in-out infinite; }
      `}</style>

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

      {/* TICKER */}
      {/* <Ticker /> */}

      {/* Slider + badges alone are given a full viewport's worth of
          height on larger screens (centered if they don't need it
          all). This guarantees the headline/photo row below always
          starts at a fresh scroll position — never half-visible,
          awkwardly peeking in at the bottom edge of the screen. */}
      <div className="lg:flex lg:min-h-[calc(100dvh-5rem)] lg:flex-col lg:justify-center">

      {/* Course promo slider — full-bleed, no side gutters (edge to
          edge like the live site's banner), placed directly in the
          section so it isn't constrained by the max-w-content wrapper
          used below for the text/CTA column. */}
      <div className="anim-1 relative z-10 w-full overflow-hidden aspect-[1080/700] sm:aspect-[3/1]">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Separate, purpose-cropped artwork for phones vs
                desktop/tablet — not just the same image squeezed in. */}
            <Image src={s.mobileSrc} alt={s.alt} fill priority={i === 0} sizes="100vw" quality={90} className="object-cover sm:hidden" />
            <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="100vw" quality={90} className="hidden object-cover sm:block" />
          </div>
        ))}
        <button
          type="button"
          onClick={() => goTo((s) => (s - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:h-9 sm:w-9"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo((s) => (s + 1) % slides.length)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:h-9 sm:w-9"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Enroll Now — sits at a consistent visual position inside the banner
            at every screen size and zoom level. We use top+bottom anchoring
            so the button is always in the lower-center of whichever image is
            visible. Per-slide bottom% is tuned to the actual artwork. */}
        <a href={ENROLL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{bottom: slide === 0 ? "8%" : "4%"}} className="sm:hidden absolute left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-goldDeep px-4 py-1.5 font-display text-[11px] font-bold text-white shadow-lg transition-opacity hover:opacity-90">Enroll Now <ArrowRight className="size-3.5" /></a>
        <a href={ENROLL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{bottom: "5%"}} className="hidden sm:inline-flex absolute left-1/2 -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-goldDeep px-7 py-2.5 font-display text-base font-bold text-white shadow-lg transition-opacity hover:opacity-90">Enroll Now <ArrowRight className="size-5" /></a>
      </div>

      {/* Quick-resource strip — IBS-style circles, Stockifyy gold theme */}
      <div className="anim-1 relative z-10 w-full bg-[#FFFDF7] shadow-[0_4px_20px_-4px_rgba(254,165,0,0.18)] py-3 sm:py-4">
        <div className="mx-auto flex max-w-content items-start justify-center gap-8 px-6 sm:gap-14 md:gap-20">
          <div className="badge-pop-1 group flex flex-col items-center gap-2 cursor-default">
            <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDeep shadow-[0_4px_20px_rgba(254,165,0,0.35)]">
              <Award className="size-7 md:size-8 text-white" />
            </div>
            <span className="text-center text-[11px] font-semibold text-ink sm:text-xs">Verify Certificate</span>
          </div>

          <Link href="/services/stockifyy-membership" className="badge-pop-2 group flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDeep shadow-[0_4px_20px_rgba(254,165,0,0.35)] transition-transform group-hover:scale-110">
              <Crown className="size-7 md:size-8 text-white" />
            </div>
            <span className="text-center text-[11px] font-semibold text-ink sm:text-xs">Stockifyy Membership</span>
          </Link>

          <Link href="/team" className="badge-pop-3 group flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDeep shadow-[0_4px_20px_rgba(254,165,0,0.35)] transition-transform group-hover:scale-110">
              <Users className="size-7 md:size-8 text-white" />
            </div>
            <span className="text-center text-[11px] font-semibold text-ink sm:text-xs">Meet Our Team</span>
          </Link>

          <Link href="/services/one-on-one-advisory" className="badge-pop-4 group flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDeep shadow-[0_4px_20px_rgba(254,165,0,0.35)] transition-transform group-hover:scale-110">
              <PhoneCall className="size-7 md:size-8 text-white" />
            </div>
            <span className="text-center text-[11px] font-semibold text-ink sm:text-xs">One on One Advisory</span>
          </Link>
        </div>
      </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:py-4">

          {/* ════════ LEFT — copy ════════ */}
          <div className="flex w-full flex-col items-start pb-8 pt-3 sm:pb-10 sm:pt-4 lg:w-1/2 lg:py-1 lg:pr-8">

            {/* kicker */}
            <div
              className="anim-1 inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
              style={{
                border: "1.5px solid rgba(254,165,0,0.4)",
                background: "rgba(254,165,0,0.08)",
              }}
            >
              <BadgeCheck className="size-3 sm:size-3.5" style={{ color: "#FEA500" }} />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-[11px] sm:tracking-[0.2em]"
                style={{ color: "#7C5200" }}
              >
                SECP-LICENSED · SHARIAH-COMPLIANT

              </span>
            </div>

            {/* headline */}
            <h1 className="font-display anim-2 mt-5 text-[2rem] font-black leading-[1.06] tracking-tight text-[#111111] sm:text-4xl md:text-5xl lg:text-[3.3rem] xl:text-[3.9rem]">
              Grow Your Wealth
              <br />
              <span className="shimmer-text">The Right Way.</span>
            </h1>

            {/* sub-headline */}
            <p
              className="anim-2 mt-2.5 text-base font-medium sm:text-lg md:text-xl"
              style={{ color: "" }}
            >
              Pakistan&apos;s most trusted stock market advisory.
            </p>

            {/* body */}
            <p className="anim-3 mt-1 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base sm:mt-4">
              Research driven financial advisory for Pakistan Stock Exchange investors, 
              built around your goals, risk profile and values.

            </p>

            {/* CTAs */}
            <div className="anim-4 mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <Link
                href="/#contact"
                className="glow-btn font-display inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:scale-[1.02] sm:gap-2.5 sm:px-8 sm:py-4"
                style={{ background: "linear-gradient(135deg, #FEA500 0%, #7C5200 100%)" }}
              >
                Start Growing Wealth
                <ArrowRight className="size-3.5 sm:size-4" />
              </Link>
              <Link
                href="/services"
                className="font-display inline-flex items-center gap-2 rounded-full border border-gold/40 bg-transparent px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-r hover:from-gold hover:to-goldDeep hover:text-white sm:px-8 sm:py-4"
              >
                Explore Services
              </Link>
            </div>

            {/* stats */}
            <div
              className="anim-5 mt-8 grid grid-cols-3 gap-3 border-t pt-6 sm:pt-8 sm:mt-2 sm:gap-8 "
              style={{ borderColor: "rgba(254,165,0,0.2)" }}
            >
              {[
                { value: "10k+", label: "Active Clients",    sub: "& growing"      },
                { value: "18+",   label: "Years Experience",  sub: "in PSX markets" },
                { value: "100%", label: "Shariah Compliant", sub: "every service"  },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl shimmer-text font-black sm:text-2xl md:text-3xl">
                    <Counter value={s.value} />
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-[#111111] sm:mt-1 sm:text-[11px]">
                    {s.label}
                  </p>
                  <p className="text-[9px] text-gray-400 sm:text-[10px]">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ════════ RIGHT — combined team image ════════ */}
          <div className="relative w-full lg:w-[56%] self-stretch overflow-hidden flex items-start justify-center lg:pt-16">
            <Image
              src={websiteImage}
              alt="Stockifyy Advisory Team — Sohail Farooq & Mufeez Azeez"
              width={900}
              height={800}
              priority
              className="w-full h-auto object-contain object-top"
              sizes="(max-width: 640px) 100vw, (max-width: 1080px) 55vw, 50vw"
              style={{
                mixBlendMode: "multiply",
                filter: "drop-shadow(0 12px 40px rgba(254,165,0,0.15))",
              }}
            />
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
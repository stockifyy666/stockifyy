"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Counter from "@/components/ui/Counter";
import websiteImage from "../../../public/images/website-image.png";

export default function HeroContent() {
  const [contentVisible, setContentVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mobile/tablet: always show immediately
    if (window.innerWidth < 1280) {
      setContentVisible(true);
      return;
    }
    const el = contentRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight + 200) {
      setContentVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setContentVisible(true); observer.disconnect(); } },
      { threshold: 0.01, rootMargin: "150px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FFFDF7]">
    <div
      ref={contentRef}
      className={`relative z-10 mx-auto max-w-content px-6 md:px-10${contentVisible ? " content-visible" : ""}`}
    >
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:min-h-[640px] lg:py-8">

        {/* ════════ LEFT — copy ════════ */}
        <div className="flex w-full flex-col items-start pb-4 pt-3 sm:pb-10 sm:pt-8 lg:w-1/2 lg:py-1 lg:pr-8">

          {/* kicker */}
          <div
            className="scroll-anim-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 sm:px-4 sm:py-2"
            style={{
              border: "1.5px solid rgba(254,165,0,0.4)",
              background: "rgba(254,165,0,0.08)",
            }}
          >
            <BadgeCheck className="size-3 sm:size-3.5" style={{ color: "#FEA500" }} />
            <span
              className="text-[9px] font-bold uppercase tracking-[0.1em] sm:text-[11px] sm:tracking-[0.2em]"
              style={{ color: "#7C5200" }}
            >
              SECP-LICENSED · SHARIAH-COMPLIANT
            </span>
          </div>

          {/* headline */}
          <h1 className="font-display scroll-anim-2 mt-2 text-[1.6rem] font-black leading-[1.06] tracking-tight text-[#111111] sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.3rem] xl:text-[3.9rem]">
            Grow Your Wealth
            <br />
            <span className="shimmer-text">The Right Way.</span>
          </h1>

          {/* sub-headline */}
          <p className="scroll-anim-2 mt-1.5 text-sm font-medium sm:mt-2.5 sm:text-lg md:text-xl">
            Pakistan&apos;s most trusted stock market advisory.
          </p>

          {/* body — hidden on very small screens to save space */}
          <p className="scroll-anim-3 hidden sm:block mt-1 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base sm:mt-4">
            Research driven financial advisory for Pakistan Stock Exchange investors,
            built around your goals, risk profile and values.
          </p>

          {/* CTAs */}
          <div className="scroll-anim-4 mt-3 flex flex-wrap items-center gap-2 sm:mt-9 sm:gap-4">
            <Link
              href="/#lets-talk"
              className="glow-btn font-display inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold text-white sm:gap-2.5 sm:px-8 sm:py-4 sm:text-sm"
              style={{ background: "linear-gradient(135deg, #FEA500 0%, #7C5200 100%)" }}
            >
              Start Growing Wealth
              <ArrowRight className="size-3 sm:size-4" />
            </Link>
            <Link
              href="/services"
              className="font-display inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-transparent px-4 py-2.5 text-xs font-semibold text-ink sm:px-8 sm:py-4 sm:text-sm"
            >
              Explore Services
            </Link>
          </div>

          {/* stats */}
          <div
            className="scroll-anim-5 mt-3 grid grid-cols-3 gap-2 border-t pt-3 sm:mt-8 sm:pt-6 sm:gap-8"
            style={{ borderColor: "rgba(254,165,0,0.2)" }}
          >
            {[
              { value: "10k+", label: "Active Clients",    sub: "& growing"      },
              { value: "18+",  label: "Years Experience",  sub: "in PSX markets" },
              { value: "100%", label: "Shariah Compliant", sub: "every service"  },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-base shimmer-text font-black sm:text-2xl md:text-3xl">
                  <Counter value={s.value} />
                </p>
                <p className="mt-0.5 text-[8px] font-bold uppercase tracking-wide text-[#111111] sm:mt-1 sm:text-[11px]">
                  {s.label}
                </p>
                <p className="hidden sm:block text-[9px] text-gray-600 sm:text-[10px]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ════════ RIGHT — combined team image ════════ */}
        <div className="scroll-anim-img relative w-full h-[200px] sm:h-[280px] lg:h-auto lg:w-[56%] lg:self-stretch lg:overflow-hidden flex items-start justify-center lg:pt-16">
          <Image
            src={websiteImage}
            alt="Stockifyy Advisory Team — Sohail Farooq & Mufeez Azeez"
            width={900}
            height={599}
            quality={75}
            className="w-auto h-full lg:w-full lg:h-auto object-contain object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 55vw, 50vw"
            style={{
              mixBlendMode: "multiply",
              filter: "drop-shadow(0 12px 40px rgba(254,165,0,0.15))",
            }}
          />
        </div>

      </div>
    </div>

    </div>
  );
}

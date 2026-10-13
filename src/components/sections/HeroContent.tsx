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
    const el = contentRef.current;
    if (!el) return;
    // Fire immediately if already in view (handles sticky + SSR case)
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
    <div style={{ background: "#FFFDF7" }}>
    <div
      ref={contentRef}
      className={`relative z-10 mx-auto max-w-content px-6 md:px-10${contentVisible ? " content-visible" : ""}`}
    >
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:py-4">

        {/* ════════ LEFT — copy ════════ */}
        <div className="flex w-full flex-col items-start pb-8 pt-3 sm:pb-10 sm:pt-4 lg:w-1/2 lg:py-1 lg:pr-8">

          {/* kicker */}
          <div
            className="scroll-anim-1 inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
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
          <h1 className="font-display scroll-anim-2 mt-5 text-[2rem] font-black leading-[1.06] tracking-tight text-[#111111] sm:text-4xl md:text-5xl lg:text-[3.3rem] xl:text-[3.9rem]">
            Grow Your Wealth
            <br />
            <span className="shimmer-text">The Right Way.</span>
          </h1>

          {/* sub-headline */}
          <p className="scroll-anim-2 mt-2.5 text-base font-medium sm:text-lg md:text-xl">
            Pakistan&apos;s most trusted stock market advisory.
          </p>

          {/* body */}
          <p className="scroll-anim-3 mt-1 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base sm:mt-4">
            Research driven financial advisory for Pakistan Stock Exchange investors,
            built around your goals, risk profile and values.
          </p>

          {/* CTAs */}
          <div className="scroll-anim-4 mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
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
            className="scroll-anim-5 mt-8 grid grid-cols-3 gap-3 border-t pt-6 sm:pt-8 sm:mt-2 sm:gap-8"
            style={{ borderColor: "rgba(254,165,0,0.2)" }}
          >
            {[
              { value: "10k+", label: "Active Clients",    sub: "& growing"      },
              { value: "18+",  label: "Years Experience",  sub: "in PSX markets" },
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
        <div className="scroll-anim-img relative w-full lg:w-[56%] self-stretch overflow-hidden flex items-start justify-center lg:pt-16">
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

    </div>
  );
}

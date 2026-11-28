"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/content/site";
import logo from "../../../public/images/logo.svg";

const DURATION_MS = 5000;

// A light sprinkle of brand-coloured confetti (deterministic for SSR)
const CONFETTI = Array.from({ length: 18 }, (_, i) => ({
  left: 4 + ((i * 53) % 92),
  delay: ((i * 7) % 9) / 10,
  duration: 1.8 + ((i * 5) % 7) / 5,
  color: ["#C98A12", "#E8B04B", "#0E2A3A"][i % 3],
  w: i % 2 ? 6 : 4,
  h: i % 2 ? 10 : 4,
}));

export default function PortalLaunchPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("portalPopupSeen")) return;
    sessionStorage.setItem("portalPopupSeen", "1");
    setOpen(true);
    const t = setTimeout(() => setOpen(false), DURATION_MS);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="pl-anim fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1A1A1A]/45 animate-[plFade_200ms_ease-out]"
      onClick={() => setOpen(false)}
    >
      <style>{`
@keyframes plFade{from{opacity:0}to{opacity:1}}
@keyframes plIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@keyframes plFall{0%{transform:translateY(-12px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translateY(340px) rotate(540deg);opacity:0}}
@keyframes plBar{from{transform:scaleX(1)}to{transform:scaleX(0)}}
@media (prefers-reduced-motion: reduce){.pl-anim,.pl-anim *{animation:none!important}}
`}</style>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pl-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px] overflow-hidden rounded-2xl bg-[#FFFDF7] shadow-xl animate-[plIn_300ms_ease-out]"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {CONFETTI.map((c, i) => (
            <span
              key={i}
              className="absolute top-0 rounded-[1px]"
              style={{
                left: `${c.left}%`,
                width: c.w,
                height: c.h,
                background: c.color,
                opacity: 0,
                animation: `plFall ${c.duration}s ${c.delay}s ease-in forwards`,
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative px-8 pt-8 pb-7 text-center">
          <Image src={logo} alt="Stockifyy" className="mx-auto h-11 w-auto" />

          <div className="mx-auto mt-6 mb-5 h-px w-12 bg-[#C98A12]" />

          <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-[#986300]">
            Good news
          </p>
          <h2 id="pl-title" className="mt-2 font-display text-2xl text-[#1A1A1A] leading-snug">
            Our Data Portal is now live
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/65">
            Thank you for being part of the Stockifyy journey. You can now
            access market data and research on our new portal.
          </p>

          <a
            href={site.dataPortalHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-gold to-goldDeep px-7 py-3 font-display text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Visit Stockifyy&apos;s Portal
          </a>
          <button
            onClick={() => setOpen(false)}
            className="mt-3 block w-full font-sans text-xs text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
          >
            Not now
          </button>
        </div>

        <div
          className="h-[3px] origin-left bg-[#C98A12]"
          style={{ animation: `plBar ${DURATION_MS}ms linear forwards` }}
        />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";

// framer-motion lives only in RingScene → separate lazy chunk, never parsed on mobile
const RingScene = dynamic(() => import("./RingScene"), { ssr: false });

// ── Grid card (mobile / tablet / laptop) ─────────────────────────────────────
function GridCard({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/offerings/${service.slug}`}
      aria-label={service.title}
      className="block h-[150px] w-full sm:h-[300px] md:h-[230px] lg:h-[220px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="sr-only">{service.title}</span>
      <div
        className="relative flex h-full w-full flex-col items-center justify-end gap-2 overflow-hidden rounded-2xl p-3"
        style={{
          border: hovered ? "1px solid rgba(254,165,0,0.75)" : "1px solid rgba(254,165,0,0.35)",
          boxShadow: hovered
            ? "0 28px 64px rgba(30,24,8,0.28),0 0 0 4px rgba(254,165,0,0.18),inset 0 1px 0 rgba(255,255,255,0.9)"
            : "0 8px 32px rgba(30,24,8,0.14),0 2px 8px rgba(254,165,0,0.12),inset 0 1px 0 rgba(255,255,255,0.85)",
          transition: "box-shadow 0.4s ease, border-color 0.4s ease",
        }}
      >
        <Image
          src={service.image1}
          alt=""
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 400px) 180px, (max-width: 768px) 200px, 220px"
          style={{
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: hovered
              ? "linear-gradient(to top, rgba(11,31,46,0.75) 0%, rgba(11,31,46,0.2) 50%, rgba(11,31,46,0) 100%)"
              : "linear-gradient(to top, rgba(11,31,46,0.60) 0%, rgba(11,31,46,0.15) 55%, rgba(11,31,46,0) 100%)",
            transition: "background 0.4s ease",
          }}
        />
      </div>
    </Link>
  );
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function ServicesSpiral() {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "Laptop" | "desktop">("mobile");

  useEffect(() => {
    function check() {
      const w = window.innerWidth;
      if (w < 400) setScreenSize("mobile");
      else if (w < 768) setScreenSize("tablet");
      else if (w < 1024) setScreenSize("Laptop");
      else setScreenSize("desktop");
    }
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="bg-[#FFFDF7]">
      <section className="max-w-content mx-auto px-6 md:px-10 py-12 md:py-14">
        <div className="text-center max-w-2xl mx-auto">
          <p className="case-index text-ink font-display text-lg mb-4">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight">
            Financial Guidance for Every  <span className="text-gradient-gold">  Stage of Your Journey</span>
          </h2>
          <p className="font-sans text-slate mt-5 leading-relaxed">
            From opening your first PSX account to building and managing long-term wealth, our services are designed around your goals,
            experience and financial needs
          </p>
        </div>

        <div className="mt-6">
          {screenSize === "mobile" && (
            <div className="grid grid-cols-2 gap-3">
              {services.map((s) => <GridCard key={s.slug} service={s} />)}
            </div>
          )}

          {screenSize === "tablet" && (
            <div className="grid grid-cols-2 gap-10">
              {services.map((s) => <GridCard key={s.slug} service={s} />)}
            </div>
          )}

          {screenSize === "Laptop" && (
            <div className="grid grid-cols-3 gap-3">
              {services.map((s) => <GridCard key={s.slug} service={s} />)}
            </div>
          )}

          {screenSize === "desktop" && (
            <>
              <div aria-hidden="true">
                <RingScene radius={340} height={420} />
              </div>
              <ul className="sr-only">
                {services.map((s) => (
                  <li key={s.slug}><a href={`/offerings/${s.slug}`}>{s.title}</a></li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

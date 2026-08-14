"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";

const AUTO_SPD = 20;
const TILT_X = 5;

function degToRad(d: number) {
  return (d * Math.PI) / 180;
}

// ── Shared card face ──────────────────────────────────────────────────────
function CardFace({ service, hovered }: { service: (typeof services)[0]; hovered: boolean }) {
  return (
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
        className="object-cover"
        sizes="200px"
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

      <p className="relative z-10 px-2 text-center font-display text-[11px] font-semibold leading-tight text-white">
        {service.title.length > 26 ? service.title.slice(0, 24).trimEnd() + "…" : service.title}
      </p>
      {hovered && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 rounded-full bg-gold px-3 py-0.5 font-display text-[9px] font-bold uppercase tracking-widest text-ink"
        >
          Explore →
        </motion.span>
      )}
    </div>
  );
}

// ── Ring card ─────────────────────────────────────────────────────────────
function RingCard({
  service,
  spinAngle,
  index,
  total,
  radius,
  onHoverChange,
}: {
  service: (typeof services)[0];
  spinAngle: number;
  index: number;
  total: number;
  radius: number;
  onHoverChange: (hovering: boolean) => void;
}) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const baseAngle = (index / total) * 360;
  const theta = degToRad(baseAngle + spinAngle);
  const x = Math.sin(theta) * radius;
  const z = Math.cos(theta) * radius;
  const depthT = (z / radius + 1) / 2;
  const opacity = 0.75 + depthT * 0.25;
  const depthScale = 0.72 + depthT * 0.28;

  const W = Math.round(radius * 0.44);
  const H = Math.round(radius * 0.5);

  const handleHoverStart = useCallback(() => {
    setHovered(true);
    onHoverChange(true);
  }, [onHoverChange]);

  const handleHoverEnd = useCallback(() => {
    setHovered(false);
    onHoverChange(false);
  }, [onHoverChange]);

  return (
    <motion.div
      style={{
        position: "absolute",
        width: W,
        height: H,
        marginLeft: -W / 2,
        marginTop: -H / 2,
        translateX: x,
        translateZ: z,
        rotateY: 0,
        rotateX: 0,
        opacity,
        zIndex: hovered ? 99 : Math.round(depthT * 20),
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      animate={{ scale: hovered ? depthScale * 1.15 : depthScale }}
      transition={{ type: "spring", stiffness: 300, damping: 26, mass: 0.6 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={() => router.push(`/services/${service.slug}`)}
      onKeyDown={(e) => e.key === "Enter" && router.push(`/services/${service.slug}`)}
      role="link"
      tabIndex={0}
      aria-label={service.title}
      className="cursor-pointer"
    >
      <CardFace service={service} hovered={hovered} />
      <div
        style={{
          position: "absolute",
          bottom: -5,
          left: 8,
          right: 8,
          height: 6,
          background: "linear-gradient(180deg,#FEA500,#7C5200)",
          borderRadius: "0 0 12px 12px",
          transform: "rotateX(-90deg)",
          transformOrigin: "top",
          opacity: 0.45,
        }}
      />
    </motion.div>
  );
}

// ── Grid card (mobile / tablet) ──────────────────────────────────────────
function GridCard({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block h-36 w-full sm:h-40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardFace service={service} hovered={hovered} />
    </Link>
  );
}

// ── Ring scene ────────────────────────────────────────────────────────────
function RingScene({ radius, height }: { radius: number; height: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number>(0);
  const isDrag = useRef(false);
  const lastMX = useRef(0);
  const velRef = useRef(0);
  const isHovered = useRef(false);

  const [spinAngle, setSpinAngle] = useState(0);

  const rawTX = useMotionValue(0);
  const rawTY = useMotionValue(0);
  const sTX = useSpring(rawTX, { stiffness: 55, damping: 18 });
  const sTY = useSpring(rawTY, { stiffness: 55, damping: 18 });
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  useEffect(() => {
    const uX = sTX.on("change", setTiltX);
    const uY = sTY.on("change", setTiltY);
    return () => {
      uX();
      uY();
    };
  }, [sTX, sTY]);

  useEffect(() => {
    function tick(now: number) {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0.016;
      lastRef.current = now;

      if (!isDrag.current && !isHovered.current) {
        velRef.current = velRef.current * 0.93 + AUTO_SPD * dt * 0.07;
        angleRef.current += velRef.current;
      } else if (isHovered.current) {
        velRef.current = velRef.current * 0.82;
        angleRef.current += velRef.current * dt;
      }

      setSpinAngle(angleRef.current % 360);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleCardHoverChange = useCallback((hovering: boolean) => {
    isHovered.current = hovering;
  }, []);

  function onPointerDown(e: React.PointerEvent) {
    if ((e.target as HTMLElement).closest("[role=link]")) return;
    isDrag.current = true;
    lastMX.current = e.clientX;
    velRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!isDrag.current) return;
    const dx = e.clientX - lastMX.current;
    velRef.current = dx * 0.25;
    angleRef.current += dx * 0.25;
    lastMX.current = e.clientX;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      rawTY.set(((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 7);
      rawTX.set(((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 5);
    }
  }
  function onPointerUp() {
    isDrag.current = false;
  }
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isDrag.current) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawTY.set(((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 7);
    rawTX.set(((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 5);
  }
  function onMouseLeave() {
    rawTX.set(0);
    rawTY.set(0);
  }

  return (
    <div
      ref={containerRef}
      className="relative flex w-full select-none items-center justify-center"
      style={{ height, perspective: 1000, cursor: isDrag.current ? "grabbing" : "grab" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        style={{
          position: "relative",
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
          rotateX: TILT_X + tiltX,
          rotateY: tiltY,
        }}
      >
        {services.map((service, i) => (
          <RingCard
            key={service.slug}
            service={service}
            spinAngle={spinAngle}
            index={i}
            total={services.length}
            radius={radius}
            onHoverChange={handleCardHoverChange}
          />
        ))}
      </motion.div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────
export default function ServicesSpiral() {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    function check() {
      const w = window.innerWidth;
      if (w < 640) setScreenSize("mobile");
      else if (w < 1024) setScreenSize("tablet");
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
              {services.map((s) => (
                <GridCard key={s.slug} service={s} />
              ))}
            </div>
          )}

          {screenSize === "tablet" && (
            <div className="grid grid-cols-3 gap-4">
              {services.map((s) => (
                <GridCard key={s.slug} service={s} />
              ))}
            </div>
          )}

          {screenSize === "desktop" && <RingScene radius={340} height={420} />}
        </div>
      </section>
    </div>
  );
}

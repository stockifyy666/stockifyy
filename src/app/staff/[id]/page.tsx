"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getStaffBySlug } from "@/content/staff";
import { XCircle, Copy, Check } from "lucide-react";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(" ");
  const letters = (parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0]).toUpperCase();
  return (
    <div className="w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1A1209, #2D1F0A)" }}>
      <span style={{ fontFamily: "Georgia, serif", fontSize: 56, fontWeight: 700, color: "#C9A84C" }}>{letters}</span>
    </div>
  );
}

// ── Confetti ─────────────────────────────────────────────────────────────────
function useConfetti(active: boolean) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    type Piece = { x: number; y: number; vx: number; vy: number; w: number; h: number; angle: number; spin: number; color: string; opacity: number; shape: "rect" | "circle" };
    const colors = ["#C9A84C", "#E8C97A", "#FFFFFF", "#F0E0A0", "#8B6914", "#FFD700", "#10B981", "#F5C842"];
    const pieces: Piece[] = [];

    const spawnBurst = (ox: number) => {
      for (let i = 0; i < 80; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
        const speed = 7 + Math.random() * 12;
        pieces.push({ x: ox, y: canvas.height * 0.38, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 3, w: 6 + Math.random() * 8, h: 4 + Math.random() * 5, angle: Math.random() * 360, spin: (Math.random() - 0.5) * 14, color: colors[Math.floor(Math.random() * colors.length)], opacity: 1, shape: Math.random() > 0.4 ? "rect" : "circle" });
      }
    };
    spawnBurst(canvas.width * 0.22);
    spawnBurst(canvas.width * 0.78);

    const w = canvas.width, h = canvas.height;
    let raf: number;
    const start = Date.now();
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      const elapsed = Date.now() - start;
      for (const p of pieces) {
        p.vy += 0.36; p.vx *= 0.98; p.vy *= 0.98; p.x += p.vx; p.y += p.vy; p.angle += p.spin;
        if (elapsed > 2200) p.opacity = Math.max(0, p.opacity - 0.018);
        ctx!.save(); ctx!.globalAlpha = p.opacity; ctx!.translate(p.x, p.y); ctx!.rotate((p.angle * Math.PI) / 180); ctx!.fillStyle = p.color;
        if (p.shape === "circle") { ctx!.beginPath(); ctx!.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx!.fill(); }
        else { ctx!.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); }
        ctx!.restore();
      }
      if (elapsed < 4200) raf = requestAnimationFrame(draw);
      else ctx!.clearRect(0, 0, w, h);
    }
    draw();
    return () => cancelAnimationFrame(raf);
  }, [active]);
  return canvasRef;
}
// ─────────────────────────────────────────────────────────────────────────────

// Ornamental divider SVG
function OrnamentalDivider() {
  return (
    <svg viewBox="0 0 300 16" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="8" x2="118" y2="8" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
      <polygon points="130,8 138,4 146,8 138,12" fill="#C9A84C" opacity="0.6" />
      <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8" />
      <polygon points="154,8 162,4 170,8 162,12" fill="#C9A84C" opacity="0.6" />
      <line x1="182" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

export default function StaffVerifyPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const staff = getStaffBySlug(id ?? "");
  const [verifyUrl, setVerifyUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const canvasRef = useConfetti(false);

  useEffect(() => { setVerifyUrl(window.location.href); }, []);
  function copyLink() {
    navigator.clipboard.writeText(verifyUrl).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); });
  }

  if (!staff || !staff.isActive) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "#FFFFFF" }}>
        <div className="w-full max-w-sm text-center rounded-3xl px-10 py-12"
          style={{
            background: "linear-gradient(160deg, #0b0432 0%, #130558 100%)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.3)",
          }}>
          <XCircle className="size-14 mx-auto mb-5" style={{ color: "#C9A84C" }} />
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 10 }}>
            Not Recognised
          </h1>
          <p className="font-sans text-sm mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
            No active staff member found for
          </p>
          <p className="font-sans font-bold text-sm mb-8 break-all" style={{ color: "#FFFFFF" }}>
            {id}
          </p>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-sans text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, #C9A84C, #8B6914)", color: "#FFFFFF" }}>
            Return to Stockifyy
          </Link>
        </div>
      </div>
    );
  }

  return (
    /* ── Deep warm obsidian background ── */
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-14"
      style={{ background: "#FFFFFF" }}>

      {/* Confetti */}
      <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none" style={{ width: "100vw", height: "100vh" }} />

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
      </div>

      {/* ── CARD ── */}
      <div className="relative w-full max-w-[480px]"
        style={{
          borderRadius: 24,
          background: "#F8F2E6",
          boxShadow: "0 50px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}>

        {/* ── Header ── */}
        <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #0b0432 0%, #130558 45%, #0b0432 100%)", borderRadius: "18px 18px 0 0" }}>

          {/* Decorative arcs */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.07)" }} />
          <div className="absolute -top-8 -left-8 w-44 h-44 rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.05)" }} />
          <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
            style={{ background: "radial-gradient(circle at top right, rgba(255,255,255,0.05) 0%, transparent 70%)" }} />

          {/* Logo only — no text */}
          <div className="relative z-10 flex justify-center pt-10 pb-48">
            <Image src="/images/logo.svg" alt="Stockifyy" width={160} height={160}
              style={{ filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(5deg)" }} />
          </div>

          {/* Curved bottom edge — navy bulges down in center */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: 60 }}>
            <svg viewBox="0 0 420 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,0 Q210,75 420,0 L420,60 L0,60 Z" fill="#F8F2E6" />
            </svg>
          </div>
        </div>

        {/* Photo — sits over the curved boundary */}
        <div className="relative z-20 flex justify-center" style={{ marginTop: -150 }}>
          <div className="relative">
            {/* Outer gold ring */}
            <div className="rounded-full flex items-center justify-center"
              style={{
                width: 280, height: 280,
                background: "linear-gradient(145deg, #C9A84C, #8B6914)",
                padding: 4,
                boxShadow: "0 12px 48px rgba(0,0,0,0.4), 0 0 0 2px rgba(201,168,76,0.25)",
              }}>
              {/* Solid navy inner background disc + photo */}
              <div className="rounded-full overflow-hidden w-full h-full"
                style={{ background: "#0b0432" }}>
                {staff.image
                  ? <Image src={staff.image} alt={staff.name} width={560} height={560}
                      className="w-full h-full object-cover object-top" />
                  : <Initials name={staff.name} />}
              </div>
            </div>
            {/* Active badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full px-2.5 py-1"
              style={{ background: "#0b0432", border: "1.5px solid rgba(16,185,129,0.5)" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#10B981" }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#10B981" }} />
              </span>
              <span className="font-sans text-[8px] font-bold uppercase tracking-wider" style={{ color: "#10B981" }}>Active</span>
            </div>
          </div>
        </div>

        {/* ── Cream body ── */}
        <div className="px-8 pt-5 pb-8" style={{ background: "#F8F2E6" }}>

          {/* Name */}
          <div className="text-center mb-1">
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.55rem, 5.5vw, 1.9rem)",
              fontWeight: 700,
              color: "#1A1209",
              letterSpacing: "-0.015em",
              lineHeight: 1.15,
            }}>
              {staff.name}
            </h1>
          </div>

          {/* Designation */}
          <p className="text-center mb-6 font-sans font-semibold tracking-[0.08em]"
            style={{ fontSize: "0.78rem", color: "#8B6914", textTransform: "uppercase" }}>
            {staff.position}
          </p>

          {/* Ornamental divider */}
          <div className="mb-6">
            <OrnamentalDivider />
          </div>

          {/* Details */}
          <div className="space-y-4">
            {[
              { label: "Department",     value: staff.department },
              { label: "Office",         value: staff.office ? `${staff.office}, Pakistan` : "—" },
              { label: "Official Email", value: "info@stockifyy.com" },
              { label: "Direct Contact", value: staff.phone ?? "—" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-baseline justify-between gap-4">
                <span className="font-sans text-[12px] font-bold uppercase tracking-[0.12em] shrink-0"
                  style={{ color: "#B89A50" }}>
                  {label}
                </span>
                <span className="font-sans text-sm font-semibold text-right break-all"
                  style={{ color: "#1A1209" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom ornamental divider */}
          <div className="mt-6 mb-5">
            <OrnamentalDivider />
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between">
            <Link href="/" className="font-sans text-xs font-semibold tracking-wide"
              style={{ color: "#8B6914" }}>
              stockifyy.com
            </Link>
            <button onClick={copyLink}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-sans text-[10px] font-semibold transition-all"
              style={{
                background: copied ? "rgba(16,185,129,0.1)" : "rgba(139,105,20,0.1)",
                border: `1px solid ${copied ? "rgba(16,185,129,0.4)" : "rgba(139,105,20,0.3)"}`,
                color: copied ? "#059669" : "#8B6914",
              }}>
              {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        {/* Bottom champagne shimmer */}
        <div className="h-1.5" style={{ background: "linear-gradient(90deg, #5C3D00, #C9A84C 30%, #F0D080 55%, #C9A84C 75%, #5C3D00)", borderRadius: "0 0 24px 24px" }} />
      </div>

      <p className="mt-8 font-sans text-[15px] font-semibold text-center max-w-xs leading-relaxed"
        style={{ color: "black" }}>
        Verified by Stockifyy Identity Governance.{" "}
        <a href="mailto:info@stockifyy.com" className="underline" style={{ color: "black" }}>
          info@stockifyy.com
        </a>
      </p>
    </div>
  );
}

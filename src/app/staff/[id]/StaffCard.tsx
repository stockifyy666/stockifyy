"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { StaffMember } from "@/content/staff";
import { XCircle, Copy, Check } from "lucide-react";

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

function OrnamentalDivider() {
  return (
    <svg viewBox="0 0 300 16" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="0" y1="8" x2="118" y2="8" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
      <polygon points="130,8 138,4 146,8 138,12" fill="#C9A84C" opacity="0.6" />
      <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8" />
      <polygon points="154,8 162,4 170,8 162,12" fill="#C9A84C" opacity="0.6" />
      <line x1="182" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

export default function StaffCard({ staff, id }: { staff: StaffMember | undefined; id: string }) {
  const [verifyUrl, setVerifyUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => { setVerifyUrl(window.location.href); }, []);

  function copyLink() {
    navigator.clipboard.writeText(verifyUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  if (!staff || !staff.isActive) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#FFFFFF" }}>
        <div className="w-full max-w-sm text-center rounded-3xl px-10 py-12"
          style={{
            background: "linear-gradient(160deg, #0b0432 0%, #130558 100%)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.3)",
          }}>
          <XCircle className="size-14 mx-auto mb-5" style={{ color: "#C9A84C" }} aria-hidden="true" />
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 10 }}>
            Not Recognised
          </h1>
          <p className="font-sans text-sm mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
            No active staff member found for
          </p>
          <p className="font-sans font-bold text-sm mb-8 break-all" style={{ color: "#FFFFFF" }}>{id}</p>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-sans text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, #C9A84C, #8B6914)", color: "#FFFFFF" }}>
            Return to Stockifyy
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-14" style={{ background: "#FFFFFF" }}>

      {/* Ambient glow — decorative only */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-[700px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
      </div>

      {/* Card */}
      <article
        aria-label={`Staff profile: ${staff.name}`}
        className="relative w-full max-w-[480px]"
        style={{
          borderRadius: 24,
          background: "#F8F2E6",
          boxShadow: "0 50px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}>

        {/* Header */}
        <div className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0b0432 0%, #130558 45%, #0b0432 100%)", borderRadius: "18px 18px 0 0" }}>
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full pointer-events-none" aria-hidden="true"
            style={{ border: "1.5px solid rgba(255,255,255,0.07)" }} />
          <div className="absolute -top-8 -left-8 w-44 h-44 rounded-full pointer-events-none" aria-hidden="true"
            style={{ border: "1.5px solid rgba(255,255,255,0.05)" }} />
          <div className="relative z-10 flex justify-center pt-10 pb-48">
            <Image src="/images/logo.svg" alt="Stockifyy Financial Advisory" width={160} height={160}
              style={{ filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(5deg)" }} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true" style={{ height: 60 }}>
            <svg viewBox="0 0 420 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%", height: "100%" }}>
              <path d="M0,0 Q210,75 420,0 L420,60 L0,60 Z" fill="#F8F2E6" />
            </svg>
          </div>
        </div>

        {/* Photo */}
        <div className="relative z-20 flex justify-center" style={{ marginTop: -150 }}>
          <div className="relative">
            <div className="rounded-full flex items-center justify-center"
              style={{
                width: 280, height: 280,
                background: "linear-gradient(145deg, #C9A84C, #8B6914)",
                padding: 4,
                boxShadow: "0 12px 48px rgba(0,0,0,0.4), 0 0 0 2px rgba(201,168,76,0.25)",
              }}>
              <div className="rounded-full overflow-hidden w-full h-full" style={{ background: "#0b0432" }}>
                {staff.image
                  ? <Image
                      src={staff.image}
                      alt={`${staff.name} — ${staff.position} at Stockifyy`}
                      width={280}
                      height={280}
                      priority
                      fetchPriority="high"
                      className="w-full h-full object-cover object-top"
                    />
                  : <Initials name={staff.name} />}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full px-2.5 py-1"
              style={{ background: "#0b0432", border: "1.5px solid rgba(16,185,129,0.5)" }}
              role="status" aria-label="Active staff member">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#10B981" }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#10B981" }} />
              </span>
              <span className="font-sans text-[8px] font-bold uppercase tracking-wider" style={{ color: "#10B981" }}>Active</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 pt-5 pb-8" style={{ background: "#F8F2E6" }}>
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
          <p className="text-center mb-6 font-sans font-semibold tracking-[0.08em]"
            style={{ fontSize: "0.78rem", color: "#8B6914", textTransform: "uppercase" }}>
            {staff.position}
          </p>
          <div className="mb-6"><OrnamentalDivider /></div>

          <dl className="space-y-4">
            {[
              { label: "Department",     value: staff.department },
              { label: "Office",         value: staff.office ? `${staff.office}, Pakistan` : "—" },
              { label: "Official Email", value: "info@stockifyy.com" },
              { label: "Direct Contact", value: staff.phone ?? "—" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-baseline justify-between gap-4">
                <dt className="font-sans text-[12px] font-bold uppercase tracking-[0.12em] shrink-0"
                  style={{ color: "#B89A50" }}>
                  {label}
                </dt>
                <dd className="font-sans text-sm font-semibold text-right break-all" style={{ color: "#1A1209" }}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 mb-5"><OrnamentalDivider /></div>

          <div className="flex items-center justify-between">
            <Link href="/" className="font-sans text-xs font-semibold tracking-wide" style={{ color: "#8B6914" }}
              aria-label="Return to Stockifyy homepage">
              stockifyy.com
            </Link>
            <button
              onClick={copyLink}
              aria-label={copied ? "Link copied to clipboard" : "Copy profile link to clipboard"}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-sans text-[10px] font-semibold transition-all"
              style={{
                background: copied ? "rgba(16,185,129,0.1)" : "rgba(139,105,20,0.1)",
                border: `1px solid ${copied ? "rgba(16,185,129,0.4)" : "rgba(139,105,20,0.3)"}`,
                color: copied ? "#059669" : "#8B6914",
              }}>
              {copied ? <Check className="size-3" aria-hidden="true" /> : <Copy className="size-3" aria-hidden="true" />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        <div className="h-1.5"
          style={{ background: "linear-gradient(90deg, #5C3D00, #C9A84C 30%, #F0D080 55%, #C9A84C 75%, #5C3D00)", borderRadius: "0 0 24px 24px" }}
          aria-hidden="true" />
      </article>

      <p className="mt-8 font-sans text-[15px] font-semibold text-center max-w-xs leading-relaxed" style={{ color: "black" }}>
        Verified by Stockifyy Identity Governance.{" "}
        <a href="mailto:info@stockifyy.com" className="underline" style={{ color: "black" }}>
          info@stockifyy.com
        </a>
      </p>
    </div>
  );
}

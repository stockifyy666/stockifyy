"use client";
import { useState } from "react";
import { Award, Search, ShieldCheck, CheckCircle, XCircle, Calendar, GraduationCap, Hash, BadgeCheck, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getCertificateById } from "@/content/certificates";
import type { Certificate } from "@/content/certificates";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-PK", { day: "numeric", month: "long", year: "numeric" });
}

const WHATSAPP_URL = "https://wa.me/923362444466?text=Hi%2C%20I%20need%20help%20verifying%20my%20Stockifyy%20certificate.";

export default function VerifyIndexPage() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<Certificate | null | undefined>(undefined);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [lastSearched, setLastSearched] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = id.trim();
    if (!trimmed) return;
    const found = getCertificateById(trimmed);
    setLastSearched(trimmed);
    setResult(found ?? null);
    if (!found) setWrongAttempts((n) => n + 1);
    else setWrongAttempts(0);
  }

  function handleReset() {
    setId("");
    setResult(undefined);
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">

      {/* Hero */}
      <div className="w-full bg-gradient-to-br from-[#1A1A1A] via-[#2a1a00] to-[#1A1A1A] py-10 sm:py-16 md:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-[600px] h-[600px] rounded-full border border-gold/10" /></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-[400px] h-[400px] rounded-full border border-gold/10" /></div>
        <div className="relative z-10">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold mb-6">Stockifyy — Wealth Multiplier</span>
          <h1 className="font-display text-4xl md:text-6xl text-white font-semibold leading-tight">Certificate <span className="text-gradient-gold">Verification</span></h1>
          <p className="font-sans text-white/50 mt-5 max-w-md mx-auto text-sm leading-relaxed">Instantly authenticate any Stockifyy certificate using the unique ID printed on your document.</p>
        </div>
      </div>

      <main className="flex-1 flex items-start justify-center px-6 py-6 sm:py-10 md:py-16">
        <div className="w-full max-w-lg">

          {/* Search card */}
          <div className="bg-white rounded-3xl border border-[#E8DDC8] shadow-sm overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-gold via-[#fbbf24] to-goldDeep" />
            <div className="px-6 md:px-10 py-8">

              <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-lg mb-4">
                <Award className="size-7" />
              </div>
              <h2 className="font-display text-xl font-bold text-ink mb-1 text-center">Enter Certificate ID</h2>
              <p className="font-sans text-sm text-slate mb-6 text-center">The ID is printed on your certificate.</p>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="e.g. RC-2026-01"
                  className="flex-1 rounded-2xl border border-[#E8DDC8] bg-[#FFFDF7] px-4 py-3 font-mono text-sm text-ink placeholder:text-slate/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={!id.trim()}
                  className="flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-gold to-goldDeep px-4 py-3 text-sm font-bold text-white shadow-md transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Search className="size-4" />
                  <span className="hidden sm:inline">Verify</span>
                </button>
              </form>

              {/* ── IDLE ── */}
              {result === undefined && (
                <div className="mt-6 flex flex-col items-center gap-2 py-4 text-center">
                  <ShieldCheck className="size-9 text-gold/40" />
                  <p className="font-sans text-sm text-slate">Enter your Certificate ID above to verify.</p>
                </div>
              )}

              {/* ── FOUND ── */}
              {result && (
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3">
                    <CheckCircle className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-sm font-semibold text-emerald-800">Certificate Verified ✓</p>
                      <p className="font-sans text-xs text-emerald-600 mt-0.5">This record is authentic and exists in Stockifyy&apos;s official registry.</p>
                    </div>
                    <BadgeCheck className="size-5 text-emerald-400 ml-auto shrink-0 hidden sm:block mt-0.5" />
                  </div>

                  <div className="rounded-2xl border border-[#E8DDC8] bg-[#FFFDF7] overflow-hidden">
                    <div className="px-5 py-5 text-center border-b border-[#E8DDC8]">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-goldDeep mb-1">Certificate of Completion</p>
                      <h3 className="font-display text-xl font-black text-ink">{result.name}</h3>
                      <p className="font-sans text-sm text-slate mt-1">{result.course}</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-[#E8DDC8]">
                      <div className="flex flex-col items-center gap-1.5 px-3 py-4 text-center sm:border-r border-[#E8DDC8]">
                        <Calendar className="size-4 text-goldDeep" />
                        <p className="text-[9px] uppercase tracking-widest text-slate font-sans">Date</p>
                        <p className="font-display text-xs font-semibold text-ink">{formatDate(result.completionDate)}</p>
                      </div>
                      {result.instructor && (
                        <div className="flex flex-col items-center gap-1.5 px-3 py-4 text-center sm:border-r border-[#E8DDC8]">
                          <GraduationCap className="size-4 text-goldDeep" />
                          <p className="text-[9px] uppercase tracking-widest text-slate font-sans">Instructor</p>
                          <p className="font-display text-xs font-semibold text-ink">{result.instructor}</p>
                        </div>
                      )}
                      <div className="flex flex-col items-center gap-1.5 px-3 py-4 text-center sm:border-r border-[#E8DDC8]">
                        <Hash className="size-4 text-goldDeep" />
                        <p className="text-[9px] uppercase tracking-widest text-slate font-sans">Enroll No</p>
                        <p className="font-mono text-xs font-bold text-ink">{result.id}</p>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 px-3 py-4 text-center">
                        <Hash className="size-4 text-goldDeep" />
                        <p className="text-[9px] uppercase tracking-widest text-slate font-sans">Cert No</p>
                        <p className="font-mono text-xs font-bold text-ink">{result.certificateNo}</p>
                      </div>
                    </div>
                    <div className="border-t border-[#E8DDC8] bg-[#FFF7E9]/60 py-3 flex justify-center">
                      <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5">
                        <ShieldCheck className="size-3.5 text-emerald-500" />
                        <span className="font-sans text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">Verified & Authentic</span>
                      </div>
                    </div>
                  </div>

                  <button onClick={handleReset} className="w-full rounded-2xl border border-[#E8DDC8] py-2.5 text-sm font-sans text-slate hover:border-gold hover:text-goldDeep transition-colors">
                    Verify another certificate
                  </button>
                </div>
              )}

              {/* ── NOT FOUND ── */}
              {result === null && (
                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 rounded-2xl bg-red-50 border border-red-200 px-4 py-3">
                    <XCircle className="size-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-sm font-semibold text-red-700">Certificate Not Found</p>
                      <p className="font-sans text-xs text-red-500 mt-0.5">
                        No record matching <span className="font-mono font-bold">{lastSearched}</span> was found. Please check the ID on your document.
                      </p>
                    </div>
                  </div>

                  <button onClick={handleReset} className="w-full rounded-2xl border border-[#E8DDC8] py-2.5 text-sm font-sans text-slate hover:border-gold hover:text-goldDeep transition-colors">
                    Try again
                  </button>

                  {/* After 2 wrong attempts — contact CTA */}
                  {wrongAttempts >= 2 && (
                    <div className="rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#2a1a00] border border-gold/30 px-5 py-5 text-center space-y-3">
                      <div className="flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-gold/20">
                        <MessageCircle className="size-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-white">Still having trouble?</p>
                        <p className="font-sans text-xs text-white/60 mt-1">Our team can help you locate your certificate record directly.</p>
                      </div>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-goldDeep px-6 py-2.5 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity"
                      >
                        <MessageCircle className="size-4" />
                        Contact Stockifyy
                      </a>
                    </div>
                  )}
                </div>
              )}

            </div>
            <div className="border-t border-[#E8DDC8] bg-[#FFF7E9]/40 px-6 py-3 text-center">
              <p className="font-sans text-[10px] text-slate/60">© {new Date().getFullYear()} Stockifyy Financial Advisory · SECP Licensed</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

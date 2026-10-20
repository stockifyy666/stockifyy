"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Search, Award, CheckCircle, XCircle, Calendar, GraduationCap, Hash, ShieldCheck, BadgeCheck } from "lucide-react";
import { getCertificateById } from "@/content/certificates";
import type { Certificate } from "@/content/certificates";

interface Props {
  open: boolean;
  onClose: () => void;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-PK", { day: "numeric", month: "long", year: "numeric" });
}

export default function VerifyModal({ open, onClose }: Props) {
  const [id, setId] = useState("");
  const [result, setResult] = useState<Certificate | null | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setId("");
      setResult(undefined);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = id.trim();
    if (!trimmed) return;
    setResult(getCertificateById(trimmed) ?? null);
  }

  function reset() {
    setId("");
    setResult(undefined);
    inputRef.current?.focus();
  }

  if (!open) return null;

  const content = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden />

      {/* panel */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">

        {/* gold top bar */}
        <div className="h-1.5 w-full rounded-t-3xl bg-gradient-to-r from-gold via-[#fbbf24] to-goldDeep" />

        {/* header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#E8DDC8]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-md">
              <Award className="size-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-ink leading-tight">Certificate Verification</h2>
              <p className="text-[11px] text-slate font-sans">Stockifyy — SECP Licensed</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8DDC8] text-slate hover:border-gold hover:text-goldDeep transition-colors"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* body */}
        <div className="px-6 py-6">

          {/* search */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Certificate ID  e.g. RC-2026-01"
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

          {/* result: idle */}
          {result === undefined && (
            <div className="mt-6 flex flex-col items-center gap-2 py-6 text-center">
              <ShieldCheck className="size-10 text-gold/50" />
              <p className="font-sans text-sm text-slate">Enter your Certificate ID to verify authenticity.</p>
              <p className="font-sans text-xs text-slate/60">The ID is printed on your certificate document.</p>
            </div>
          )}

          {/* result: found */}
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

              <button onClick={reset} className="w-full rounded-2xl border border-[#E8DDC8] py-2.5 text-sm font-sans text-slate hover:border-gold hover:text-goldDeep transition-colors">
                Verify another certificate
              </button>
            </div>
          )}

          {/* result: not found */}
          {result === null && (
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-red-50 border border-red-200 px-4 py-3">
                <XCircle className="size-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-sm font-semibold text-red-700">Certificate Not Found</p>
                  <p className="font-sans text-xs text-red-500 mt-0.5">No record matching <span className="font-mono font-bold">{id.trim()}</span> was found. Please check the ID on your document.</p>
                </div>
              </div>
              <button onClick={reset} className="w-full rounded-2xl border border-[#E8DDC8] py-2.5 text-sm font-sans text-slate hover:border-gold hover:text-goldDeep transition-colors">
                Try again
              </button>
            </div>
          )}

        </div>

        {/* footer */}
        <div className="border-t border-[#E8DDC8] bg-[#FFF7E9]/40 px-6 py-3 text-center">
          <p className="font-sans text-[10px] text-slate/60">© {new Date().getFullYear()} Stockifyy Financial Advisory · SECP Licensed</p>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}

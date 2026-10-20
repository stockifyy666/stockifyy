"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Award, Search, ShieldCheck } from "lucide-react";

export default function VerifyIndexPage() {
  const [id, setId] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = id.trim();
    if (trimmed) router.push(`/verify/${encodeURIComponent(trimmed)}`);
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
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
          <div className="bg-white rounded-3xl border border-[#E8DDC8] shadow-sm overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-gold via-[#fbbf24] to-goldDeep" />
            <div className="px-8 md:px-12 py-10 text-center">
              <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-lg mb-5"><Award className="size-8" /></div>
              <h2 className="font-display text-2xl font-bold text-ink mb-2">Enter Certificate ID</h2>
              <p className="font-sans text-sm text-slate mb-8">The ID is printed on your certificate. Enter it below to verify.</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Enter Certificate ID" className="w-full rounded-2xl border border-[#E8DDC8] bg-[#FFFDF7] px-5 py-3.5 font-mono text-sm text-ink placeholder:text-slate/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all" />
                <button type="submit" disabled={!id.trim()} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-goldDeep px-8 py-3.5 font-display text-sm font-bold text-white shadow-md transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed">
                  <Search className="size-4" /> Verify Certificate
                </button>
              </form>
            </div>
            <div className="border-t border-[#E8DDC8] bg-[#FFF7E9]/50 py-4 flex justify-center">
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-5 py-2">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span className="font-sans text-xs font-semibold text-emerald-700 uppercase tracking-wide">Secure Verification</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

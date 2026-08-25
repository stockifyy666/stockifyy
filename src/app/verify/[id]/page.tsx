import type { Metadata } from "next";
import { CheckCircle, XCircle, Award, Calendar, User, Hash, GraduationCap, BookOpen, ShieldCheck, BadgeCheck } from "lucide-react";
import { getCertificateById } from "@/content/certificates";
import Link from "next/link";

type Props = { params: { id: string } };

export function generateMetadata({ params }: Props): Metadata {
  const cert = getCertificateById(params.id);
  if (!cert) return { title: "Certificate Not Found — Stockifyy" };
  return {
    title: `Certificate Verified — ${cert.name} | Stockifyy`,
    description: `Verify the certificate of ${cert.name} for ${cert.course} issued by Stockifyy.`,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-PK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function VerifyPage({ params }: Props) {
  const cert = getCertificateById(params.id);

  return (
    <div className="min-h-screen bg-cream flex flex-col">

      {/* Hero */}
      <div className="w-full bg-gradient-to-br from-[#1A1A1A] via-[#2a1a00] to-[#1A1A1A] py-20 md:py-28 px-6 text-center relative overflow-hidden">
        {/* Decorative gold rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-gold/10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] rounded-full border border-gold/10" />
        </div>

        <div className="relative z-10">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold mb-6">
            Stockifyy — Wealth Multiplier
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white font-semibold leading-tight">
            Certificate <span className="text-gradient-gold">Verification</span>
          </h1>
          <p className="font-sans text-white/50 mt-5 max-w-md mx-auto text-sm leading-relaxed">
            Instantly authenticate any Stockifyy certificate using the unique ID printed on your document.
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-content mx-auto w-full px-6 md:px-10 py-16 md:py-24">

        {cert ? (
          /* ── VALID ── */
          <div className="space-y-8">

            {/* Verified badge row */}
            <div className="flex items-center gap-4 rounded-2xl bg-emerald-50 border border-emerald-200 px-6 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500">
                <CheckCircle className="size-6 text-white" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-emerald-800">
                  Certificate Successfully Verified
                </p>
                <p className="font-sans text-sm text-emerald-600 mt-0.5">
                  This record is authentic and exists in Stockifyy's official registry.
                </p>
              </div>
              <BadgeCheck className="size-8 text-emerald-400 ml-auto shrink-0 hidden sm:block" />
            </div>

            {/* Main certificate card */}
            <div className="bg-white rounded-3xl border border-[#E8DDC8] shadow-sm overflow-hidden">

              {/* Gold top bar */}
              <div className="h-2 w-full bg-gradient-to-r from-gold via-[#fbbf24] to-goldDeep" />

              {/* Certificate header */}
              <div className="px-8 md:px-12 pt-10 pb-8 border-b border-[#E8DDC8] text-center">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-lg mb-5">
                  <Award className="size-8" />
                </div>
                <p className="font-sans text-xs uppercase tracking-[0.25em] text-goldDeep font-semibold mb-2">
                  Certificate of Completion
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
                  {cert.name}
                </h2>
                <p className="font-sans text-slate mt-2 text-sm">{cert.course}</p>

                {/* Official verified statement */}
                <div className="mt-6 mx-auto max-w-2xl rounded-2xl bg-gold/5 border border-gold/20 px-6 py-4">
                  <p className="font-sans text-sm text-slate leading-relaxed">
                    This certificate is officially verified and confirms that{" "}
                    <span className="font-semibold text-ink">{cert.name}</span> has successfully
                    completed{" "}
                    <span className="font-semibold text-ink">{cert.course}</span> with{" "}
                    <span className="font-semibold text-goldDeep">Stockifyy</span>.
                  </p>
                </div>
              </div>

              {/* Details row — full width */}
              <div className="border-t border-[#E8DDC8] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DDC8]">

                <div className="flex flex-col items-center justify-center gap-2 px-6 py-8 text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                    <Calendar className="size-4 text-goldDeep" />
                  </span>
                  <p className="text-xs font-sans text-slate uppercase tracking-widest">Completion Date</p>
                  <p className="font-display text-sm font-semibold text-ink">{formatDate(cert.completionDate)}</p>
                </div>

                {cert.instructor && (
                  <div className="flex flex-col items-center justify-center gap-2 px-6 py-8 text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                      <GraduationCap className="size-4 text-goldDeep" />
                    </span>
                    <p className="text-xs font-sans text-slate uppercase tracking-widest">Instructor</p>
                    <p className="font-display text-sm font-semibold text-ink">{cert.instructor}</p>
                  </div>
                )}

                <div className="flex flex-col items-center justify-center gap-2 px-6 py-8 text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                    <Hash className="size-4 text-goldDeep" />
                  </span>
                  <p className="text-xs font-sans text-slate uppercase tracking-widest">Certificate ID</p>
                  <p className="font-mono text-sm font-bold text-ink tracking-widest">{cert.id}</p>
                </div>

              </div>

              {/* Verified badge — centered */}
              <div className="border-t border-[#E8DDC8] bg-[#FFF7E9]/50 py-5 flex justify-center">
                <div className="flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-5 py-2.5">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span className="font-sans text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                    Verified & Authentic
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <p className="font-sans text-sm text-slate mb-4">
                Issued by <span className="font-semibold text-goldDeep">Stockifyy Financial Advisory</span> — SECP Certified
              </p>
              <Link
                href="/"
                className="inline-block rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-8 py-3 hover:opacity-90 transition-opacity shadow-md"
              >
                Visit Stockifyy
              </Link>
            </div>

          </div>

        ) : (
          /* ── INVALID ── */
          <div className="max-w-lg mx-auto text-center py-10">
            <div className="flex h-24 w-24 mx-auto items-center justify-center rounded-full bg-red-50 border-2 border-red-100 mb-8">
              <XCircle className="size-12 text-red-400" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              Certificate Not Found
            </h2>
            <p className="font-sans text-slate leading-relaxed mb-2">
              No certificate matching ID{" "}
              <span className="font-mono font-bold text-ink bg-[#E8DDC8]/80 px-2 py-0.5 rounded-md">
                {params.id}
              </span>{" "}
              was found in our records.
            </p>
            <p className="font-sans text-sm text-slate leading-relaxed mb-10">
              Please double-check the ID printed on your certificate, or contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-8 py-3 hover:opacity-90 transition-opacity shadow-md"
              >
                Contact Stockifyy
              </Link>
              <Link
                href="/"
                className="rounded-full border border-[#E8DDC8] text-ink font-display text-sm font-medium px-8 py-3 hover:border-gold transition-colors"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      {/* <footer className="border-t border-[#E8DDC8] bg-[#FFF7E9]/60 px-6 py-6 text-center">
        <p className="text-xs font-sans text-slate">
          © {new Date().getFullYear()} Stockifyy Financial Advisory · SECP Licensed ·{" "}
          <Link href="/privacy-policy" className="hover:text-goldDeep transition-colors">Privacy Policy</Link>
        </p>
      </footer> */}

    </div>
  );
}

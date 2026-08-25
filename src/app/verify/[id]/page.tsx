import type { Metadata } from "next";
import { CheckCircle, XCircle, Award, Calendar, User, Hash, GraduationCap, BookOpen, ShieldCheck } from "lucide-react";
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

function Row({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 py-5 border-b border-[#E8DDC8] last:border-0">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-sm">
        <Icon className="size-4" />
      </span>
      <div>
        <p className="text-xs font-sans text-slate uppercase tracking-widest mb-0.5">{label}</p>
        <p className="font-display text-base font-semibold text-ink">{value}</p>
      </div>
    </div>
  );
}

export default function VerifyPage({ params }: Props) {
  const cert = getCertificateById(params.id);

  return (
    <div className="min-h-screen bg-cream flex flex-col">

      {/* Hero band */}
      <div className="w-full bg-gradient-to-r from-[#1A1A1A] to-[#2d2008] py-16 md:py-24 px-6 text-center">
        <p className="case-index font-display text-gold text-sm mb-4 uppercase tracking-widest">
          Stockifyy — Wealth Multiplier
        </p>
        <h1 className="font-display text-3xl md:text-5xl text-white font-semibold leading-tight">
          Certificate <span className="text-gradient-gold">Verification</span>
        </h1>
        <p className="font-sans text-white/60 mt-4 max-w-md mx-auto text-sm leading-relaxed">
          Authenticate any Stockifyy course certificate instantly using the unique ID printed on the document.
        </p>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-content mx-auto w-full px-6 md:px-10 py-14 md:py-20">

        {cert ? (
          /* ── VALID ── */
          <>
            {/* Status banner */}
            <div className="flex items-center gap-4 rounded-2xl bg-emerald-50 border border-emerald-200 px-6 py-5 mb-10">
              <CheckCircle className="size-8 text-emerald-500 shrink-0" />
              <div>
                <p className="font-display text-lg font-semibold text-emerald-800">
                  Certificate Successfully Verified
                </p>
                <p className="font-sans text-sm text-emerald-600 mt-0.5">
                  This certificate is authentic and was issued by Stockifyy Financial Advisory.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">

              {/* Main card */}
              <div className="md:col-span-2 bg-white rounded-3xl border border-[#E8DDC8] shadow-sm overflow-hidden">
                {/* Card top accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-gold to-goldDeep" />

                <div className="px-8 py-2">
                  <Row icon={User}          label="Graduate Name"    value={cert.name} />
                  <Row icon={BookOpen}      label="Course Completed" value={cert.course} />
                  <Row icon={Calendar}      label="Completion Date"  value={formatDate(cert.completionDate)} />
                  {cert.grade      && <Row icon={Award}        label="Grade"           value={cert.grade} />}
                  {cert.instructor && <Row icon={GraduationCap} label="Instructor"     value={cert.instructor} />}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* ID box */}
                <div className="bg-white rounded-3xl border border-[#E8DDC8] shadow-sm p-7">
                  <p className="text-xs font-sans text-slate uppercase tracking-widest mb-3">
                    Certificate ID
                  </p>
                  <div className="flex items-center gap-2 bg-gold/5 border border-gold/20 rounded-xl px-4 py-3">
                    <Hash className="size-4 text-goldDeep shrink-0" />
                    <span className="font-mono text-sm font-bold text-ink tracking-widest">{cert.id}</span>
                  </div>
                </div>

                {/* Trust box */}
                <div className="bg-white rounded-3xl border border-[#E8DDC8] shadow-sm p-7 text-center">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-md mb-4">
                    <ShieldCheck className="size-7" />
                  </div>
                  <p className="font-display text-base font-semibold text-ink">SECP Licensed</p>
                  <p className="font-sans text-xs text-slate mt-2 leading-relaxed">
                    Stockifyy is a regulated financial advisory. All certificates are verified against our official records.
                  </p>
                  <Link
                    href="/"
                    className="inline-block mt-5 rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-6 py-2.5 hover:opacity-90 transition-opacity"
                  >
                    Visit Stockifyy
                  </Link>
                </div>
              </div>
            </div>
          </>

        ) : (
          /* ── INVALID ── */
          <div className="max-w-xl mx-auto text-center">
            <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-red-50 border border-red-200 mb-6">
              <XCircle className="size-10 text-red-500" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-3">
              Certificate Not Found
            </h2>
            <p className="font-sans text-slate leading-relaxed mb-2">
              No certificate matching ID{" "}
              <span className="font-mono font-bold text-ink bg-[#E8DDC8]/60 px-2 py-0.5 rounded-md">
                {params.id}
              </span>{" "}
              exists in our records.
            </p>
            <p className="font-sans text-sm text-slate leading-relaxed mb-8">
              Please double-check the ID printed on your certificate, or contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-7 py-3 hover:opacity-90 transition-opacity"
              >
                Contact Stockifyy
              </Link>
              <Link
                href="/"
                className="rounded-full border border-[#E8DDC8] text-ink font-display text-sm font-medium px-7 py-3 hover:border-gold transition-colors"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8DDC8] bg-[#FFF7E9]/60 px-6 py-6 text-center">
        <p className="text-xs font-sans text-slate">
          © {new Date().getFullYear()} Stockifyy Financial Advisory · SECP Licensed ·{" "}
          <Link href="/privacy-policy" className="hover:text-goldDeep transition-colors">Privacy Policy</Link>
        </p>
      </footer>

    </div>
  );
}

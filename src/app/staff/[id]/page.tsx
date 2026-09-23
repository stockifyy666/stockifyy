import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Building2,
  Mail,
  Phone,
  ShieldCheck,
  Briefcase,
  Hash,
} from "lucide-react";
import { getStaffById } from "@/content/staff";
import StaffAvatar from "@/components/ui/StaffAvatar";

type Props = { params: { id: string } };

// Never let search engines index or follow links from this page,
// and never let it show up in any listing/preview.
export function generateMetadata({ params }: Props): Metadata {
  const staff = getStaffById(params.id);
  return {
    title: staff ? "Staff Verification | Stockifyy" : "Staff Not Found | Stockifyy",
    description: "Official staff identity verification portal.",
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default function StaffVerifyPage({ params }: Props) {
  const staff = getStaffById(params.id);

  // Invalid / random / inactive staff ID → hard 404, no data leaked.
  if (!staff) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Hero */}
      <div className="w-full bg-gradient-to-br from-[#1A1A1A] via-[#2a1a00] to-[#1A1A1A] py-20 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border border-gold/10" />
        </div>
        <div className="relative z-10">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold mb-6">
            Stockifyy — Staff Directory
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-white font-semibold leading-tight">
            Staff <span className="text-gradient-gold">Verification</span>
          </h1>
          <p className="font-sans text-white/50 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            This page confirms the authenticity of a Stockifyy employee's office
            identity card.
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 md:px-10 py-14 md:py-20">
        <div className="space-y-6">
          {/* Verified badge row */}
          <div className="flex items-center gap-4 rounded-2xl bg-emerald-50 border border-emerald-200 px-6 py-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500">
              <ShieldCheck className="size-6 text-white" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-emerald-800">
                Identity Verified
              </p>
              <p className="font-sans text-sm text-emerald-600 mt-0.5">
                This is a genuine Stockifyy staff member.
              </p>
            </div>
            <BadgeCheck className="size-8 text-emerald-400 ml-auto shrink-0 hidden sm:block" />
          </div>

          {/* Profile card */}
          <div className="bg-white rounded-3xl border border-[#E8DDC8] shadow-sm overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-gold via-[#fbbf24] to-goldDeep" />

            <div className="px-8 md:px-12 pt-10 pb-8 text-center border-b border-[#E8DDC8]">
              <div className="flex justify-center mb-5">
                <StaffAvatar name={staff.name} photo={staff.photo} size={128} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink leading-tight">
                {staff.name}
              </h2>
              <p className="font-sans text-goldDeep font-semibold text-sm mt-1.5">
                {staff.designation}
              </p>
              <p className="font-sans text-slate text-sm mt-0.5">
                {staff.department}
              </p>
            </div>

            {/* Details */}
            <div className="divide-y divide-[#E8DDC8]">
              <DetailRow icon={<Building2 className="size-4 text-goldDeep" />} label="Office / Branch" value={staff.office} />
              <DetailRow icon={<Briefcase className="size-4 text-goldDeep" />} label="Department" value={staff.department} />
              <DetailRow icon={<Mail className="size-4 text-goldDeep" />} label="Email" value={staff.email} href={`mailto:${staff.email}`} />
              <DetailRow icon={<Phone className="size-4 text-goldDeep" />} label="Phone" value={staff.phone} href={`tel:${staff.phone.replace(/\s+/g, "")}`} />
              <DetailRow icon={<Hash className="size-4 text-goldDeep" />} label="Staff ID" value={staff.id} mono />
            </div>

            {/* Verified footer */}
            <div className="border-t border-[#E8DDC8] bg-[#FFF7E9]/50 py-5 flex justify-center">
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-5 py-2.5">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span className="font-sans text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                  Verified & Active Employee
                </span>
              </div>
            </div>
          </div>

          <p className="text-center font-sans text-xs text-slate">
            © {new Date().getFullYear()} Stockifyy — This is an internal identity
            verification page and is not part of the public website.
          </p>
        </div>
      </main>
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
  href,
  mono,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  mono?: boolean;
}) {
  const content = (
    <p
      className={`font-sans text-sm font-semibold text-ink ${
        mono ? "font-mono tracking-widest" : ""
      }`}
    >
      {value}
    </p>
  );

  return (
    <div className="flex items-center gap-4 px-8 md:px-12 py-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-sans text-slate uppercase tracking-widest mb-0.5">
          {label}
        </p>
        {href ? (
          <a href={href} className="hover:text-goldDeep transition-colors">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

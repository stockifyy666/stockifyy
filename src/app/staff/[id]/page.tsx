import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Building2,
  Mail,
  Phone,
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
    // Fits one screen on any device — no scrolling needed to see the
    // full card. `100dvh` accounts for mobile browser chrome; the
    // header height is subtracted so the card centers in what's left.
    <div className="min-h-[calc(100dvh-5rem)] bg-cream flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-[380px]">
        {/* Verified badge row */}
        <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3 mb-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500">
            <ShieldCheck className="size-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold text-emerald-800 leading-tight">
              Identity Verified
            </p>
            <p className="font-sans text-[11px] text-emerald-600 leading-tight">
              Genuine Stockifyy staff member
            </p>
          </div>
        </div>

        {/* ID card */}
        <div className="bg-white rounded-2xl border border-[#E8DDC8] shadow-md overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-gold via-[#fbbf24] to-goldDeep" />

          {/* Photo + name */}
          <div className="px-6 pt-6 pb-5 text-center border-b border-[#E8DDC8]">
            <div className="flex justify-center mb-3">
              <StaffAvatar name={staff.name} photo={staff.photo} size={88} />
            </div>
            <h1 className="font-display text-xl font-bold text-ink leading-tight">
              {staff.name}
            </h1>
            <p className="font-sans text-goldDeep font-semibold text-xs mt-1">
              {staff.designation}
            </p>
          </div>

          {/* Details — compact 2-column grid, no scrolling */}
          <div className="grid grid-cols-2 gap-px bg-[#E8DDC8]">
            <DetailCell icon={<Building2 className="size-3.5 text-goldDeep" />} label="Office" value={staff.office} />
            <DetailCell icon={<Briefcase className="size-3.5 text-goldDeep" />} label="Department" value={staff.department} />
            <DetailCell
              icon={<Mail className="size-3.5 text-goldDeep" />}
              label="Email"
              value={staff.email}
              href={`mailto:${staff.email}`}
              className="col-span-2"
            />
            <DetailCell
              icon={<Phone className="size-3.5 text-goldDeep" />}
              label="Phone"
              value={staff.phone}
              href={`tel:${staff.phone.replace(/\s+/g, "")}`}
            />
            <DetailCell icon={<Hash className="size-3.5 text-goldDeep" />} label="Staff ID" value={staff.id} mono />
          </div>

          {/* Verified footer */}
          <div className="border-t border-[#E8DDC8] bg-[#FFF7E9]/50 py-3 flex justify-center">
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1.5">
              <ShieldCheck className="size-3.5 text-emerald-500" />
              <span className="font-sans text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">
                Verified &amp; Active
              </span>
            </div>
          </div>
        </div>

        <p className="text-center font-sans text-[10px] text-slate mt-3">
          © {new Date().getFullYear()} Stockifyy — Internal verification only.
        </p>
      </div>
    </div>
  );
}

function DetailCell({
  icon,
  label,
  value,
  href,
  mono,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  mono?: boolean;
  className?: string;
}) {
  const content = (
    <p
      // break-words (not truncate) — verification data like a phone
      // number or email must never be cut off, even in a tight cell.
      className={`font-sans text-[13px] font-semibold text-ink leading-snug break-words ${
        mono ? "font-mono tracking-wide" : ""
      }`}
    >
      {value}
    </p>
  );

  return (
    <div className={`flex items-center gap-2.5 bg-white px-4 py-3 min-w-0 ${className}`}>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[9.5px] font-sans text-slate uppercase tracking-wide mb-0.5">
          {label}
        </p>
        {href ? (
          <a href={href} className="hover:text-goldDeep transition-colors block">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

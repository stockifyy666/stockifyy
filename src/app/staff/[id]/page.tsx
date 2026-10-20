import type { Metadata } from "next";
import { getStaffBySlug } from "@/content/staff";
import StaffCard from "./StaffCard";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const staff = getStaffBySlug(id);

  if (!staff || !staff.isActive) {
    return {
      title: "Staff Not Found | Stockifyy",
      description: "No active staff member found with this identifier.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${staff.name} — ${staff.position} | Stockifyy`,
    description: `Verify ${staff.name}'s identity as ${staff.position} at Stockifyy Financial Advisory. SECP-licensed, Shariah-compliant stock market advisory, ${staff.office ?? "Pakistan"}.`,
    robots: { index: true, follow: true },
    openGraph: {
      title: `${staff.name} | Stockifyy Staff`,
      description: `${staff.position} at Stockifyy Financial Advisory.`,
      type: "profile",
      images: staff.image ? [{ url: staff.image, width: 280, height: 280, alt: staff.name }] : [],
    },
    twitter: {
      card: "summary",
      title: `${staff.name} | Stockifyy`,
      description: `${staff.position} at Stockifyy Financial Advisory.`,
    },
  };
}

export default async function StaffPage({ params }: Props) {
  const { id } = await params;
  const staff = getStaffBySlug(id);

  const jsonLd = staff?.isActive
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        name: staff.name.trim(),
        jobTitle: staff.position,
        worksFor: {
          "@type": "Organization",
          name: "Stockifyy Financial Advisory",
          url: "https://stockifyy.com",
          sameAs: "https://stockifyy.com",
        },
        workLocation: {
          "@type": "Place",
          name: staff.office ? `${staff.office}, Pakistan` : "Pakistan",
        },
        email: "info@stockifyy.com",
        telephone: staff.phone,
        url: `https://stockifyy.com/staff/${id}`,
        ...(staff.image ? { image: `https://stockifyy.com${staff.image}` } : {}),
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <StaffCard staff={staff} id={id} />
    </>
  );
}

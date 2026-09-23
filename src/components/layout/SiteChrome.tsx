"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

/**
 * The public marketing Footer + floating WhatsApp button are heavy
 * and only make sense on the public site. The internal staff
 * verification pages (/staff/*) are a standalone screen (like a
 * digital ID card) and must fit on one screen without them.
 */
export default function SiteChrome() {
  const pathname = usePathname();
  const isStaffVerification = pathname?.startsWith("/staff");

  if (isStaffVerification) return null;

  return (
    <>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

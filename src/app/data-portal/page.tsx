import type { Metadata } from "next";
import Link from "next/link";
import { Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Portal",
  description: "The Stockifyy Data Portal is currently under development. Check back soon.",
};

export default function DataPortalPage() {
  return (
    <div className="bg-cream min-h-[70vh] flex items-center">
      <section className="max-w-content mx-auto px-6 md:px-10 py-12 text-center w-full">
        {/* Icon */}
       <div className="flex  justify-center items-center gap-6">
         <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 border border-gold/30 mb-8">
          <Construction className="size-9 text-gold" aria-hidden="true" />
        </div>

        <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber mb-6">
          Coming Soon
        </span>
       </div>

        <h1 className="font-display text-4xl md:text-5xl text-ink mb-5 leading-tight">
          Data Portal is Under Development
        </h1>

        <p className="font-sans text-slate max-w-lg mx-auto mb-4 leading-relaxed text-base md:text-lg">
          We&apos;re building a powerful data portal to give you real-time
          PSX market insights, Shariah screening tools, and portfolio
          analytics — all in one place.
        </p>

        <p className="font-sans text-slate/70 max-w-md mx-auto mb-10 text-sm leading-relaxed">
          Our team is working hard to bring this to you soon. In the meantime,
          feel free to explore our services or get in touch with us directly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-7 py-3.5 shadow-lg hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
          <Link
            href="/#contact"
            className="inline-block rounded-full border border-gold/40 text-ink font-display text-sm font-medium px-7 py-3.5 hover:border-gold hover:text-goldDeep transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

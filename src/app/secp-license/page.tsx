import type { Metadata } from "next";
import Image from "next/image";
import secpLicense from "../../../public/images/secp-lisenced.jpeg";

export const metadata: Metadata = {
  title: "SECP License",
  description: "Stockifyy Advisory is licensed by the Securities and Exchange Commission of Pakistan (SECP).",
};

export default function SecpLicensedPage() {
  return (
    <div className="bg-cream">
      <div
        className="border-b border-creamLine"
        style={{ background: "linear-gradient(135deg, #FFF7E9 0%, #FFFDF7 100%)" }}
      >
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <p className="case-index text-gold text-sm uppercase tracking-widest mb-4">
            Regulatory
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-4">
            SECP License
          </h1>
          <p className="font-sans text-slate max-w-xl leading-relaxed">
            Stockifyy Advisory is licensed by the Securities and Exchange
            Commission of Pakistan (SECP).
          </p>
        </div>
      </div>

      <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-3xl mx-auto rounded-lg overflow-hidden border border-creamLine shadow-sm bg-white">
          <Image
            src={secpLicense}
            alt="Stockifyy Advisory SECP license certificate"
            className="w-full h-auto"
            placeholder="blur"
            priority
          />
        </div>
      </section>
    </div>
  );
}

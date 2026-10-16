import type { Metadata } from "next";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nine Shariah-compliant advisory services on the PSX: one-on-one advisory, corporate advisory, assets under advisement, portfolio designing, wealth planning, webinars, taxation services, PSX account opening and the Stockifyy investor community.",
};

export default function ServicesPage() {
  return (
    <div className="bg-cream">
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-goldDeep">
            What We Offer
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-ink font-semibold mt-5">
            Financial services built around you.
          </h1>
          <p className="font-sans text-slate mt-4 leading-relaxed">
            Every service is Shariah-compliant and grounded in research —
            from your first trade to institutional-grade portfolio strategy.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </div>
  );
}

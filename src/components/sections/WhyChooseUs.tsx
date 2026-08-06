"use client";

import { HeartHandshake, ShieldCheck, SearchCheck } from "lucide-react";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Ethical Investing",
    body: "Invest in businesses that comply with Islamic principles.",
  },
  {
    icon: ShieldCheck,
    title: "Shariah Compliance",
    body: "Only Shariah-compliant companies as per PSX Shariah Board criteria.",
  },
  {
    icon: SearchCheck,
    title: "Financial Screening",
    body: "Companies are screened on financial ratios and business activities.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-[#FFF7E9]/95">
      <section className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-24">
        <div className="">
          <p className="case-index font-display text-ink text-lg mb-4">Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-6">
            Why investors <br /> choose <span className="text-gradient-gold">Stockifyy</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 mt-12 items-center">
          {/* YouTube embed */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[20px] shadow-xl">
            <iframe
              src="https://www.youtube-nocookie.com/embed/oTD6C3ZHPYk?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3"
              title="Why Choose Stockifyy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
          </div>

          <div className="space-y-8">
            {reasons.map((r) => (
              <div key={r.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-sm">
                  <r.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink mb-1">{r.title}</h3>
                  <p className="font-sans text-sm text-slate leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

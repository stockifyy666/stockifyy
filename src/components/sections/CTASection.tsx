import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-8 py-16 md:px-16 md:py-24 text-center">
        <p className="case-index text-ink font-display text-lg mb-4">
          INVEST WITH CLARITY 

        </p>

        <h2 className="font-display text-3xl md:text-5xl text-ink mx-auto leading-tight mb-6">
          Take the Next Step Towards a
 <span className="text-gradient-gold"> Stronger Financial Future.</span>
        </h2>

        <p className="font-sans text-slate max-w-xl mx-auto mb-9 leading-relaxed">
          Build your investment journey on informed decisions, professional guidance and a disciplined approach to the market.
        </p>

        <Link
          href="/#contact"
          className="glow-btn font-display inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:scale-[1.02] sm:gap-2.5 sm:px-8 sm:py-4"
          style={{ background: "linear-gradient(135deg, #FEA500 0%, #7C5200 100%)" }}
        >
        SPEAK WITH AN ADVISOR

          <ArrowRight className="size-3.5 sm:size-4" />
        </Link>
      </div>
    </section>
  );
}

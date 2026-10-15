import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/content/faq";

export default function FAQSection() {
  return (
    <section id="faq" className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-28">
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14">
        {/* <SectionHeading
          index="No. 007 — FAQ"
          title="Common questions before the first call."
        /> */}

        <div>
          <p className="case-index text-ink dark:text-[#e8e0d0] font-display text-lg mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink dark:text-[#e8e0d0] leading-tight mb-6">
            Common questions before the <span className="text-gradient-gold">first call.</span>
          </h2>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}

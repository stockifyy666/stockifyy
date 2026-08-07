import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <div className="bg-[#FFFDF7]">
      <section className="py-24 md:py-24 overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 mb-14">
          <SectionHeading
            index="Our Testimonials"
            title="Clients Who"
            subtitle="Trust Us"
            align="center"
          />
        </div>

        <div className="max-w-content mx-auto px-6 md:px-10">
          <TestimonialsCarousel />
        </div>
      </section>
    </div>
  );
}

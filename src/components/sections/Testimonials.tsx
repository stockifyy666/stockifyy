import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <div className="bg-[#FFFDF7]">
      <section className="py-24 md:py-24 overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 mb-14">
          <SectionHeading
            index="Our Testimonials"
            title="What Our"   

            subtitle="Clients Say"
            align="center"
          />
          <p className="font-sans text-center text-slate mt-5 leading-relaxed">
           Real experiences shared by investors who have worked with Stockifyy.

          </p>
        </div>

        <div className="max-w-content mx-auto px-6 md:px-10">
          <TestimonialsCarousel />
        </div>
      </section>
    </div>
  );
}

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
const HeroContent = dynamic(() => import("@/components/sections/HeroContent"));

const AboutUs = dynamic(() => import("@/components/sections/AboutUs"));
const ServicesSpiral = dynamic(() => import("@/components/sections/ServicesSpiral"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function Home() {
  return (
    <>
      {/* Hero slider + badges — normal flow (not sticky) */}
      <Hero />

      {/* Grow Your Wealth — sticky so About Us slides over it */}
      <div className="sticky top-20 z-0">
        <HeroContent />
      </div>

      {/* All sections scroll over HeroContent */}
      <div className="relative z-10 bg-[#FFFDF7]">
        <AboutUs />
        <ServicesSpiral />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
        <FAQSection />
        <ContactSection />
      </div>
    </>
  );
}

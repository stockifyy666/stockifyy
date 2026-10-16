import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
const HeroContent = dynamic(() => import("@/components/sections/HeroContent"), { ssr: false });

const AboutUs = dynamic(() => import("@/components/sections/AboutUs"), { ssr: false });
const ServicesSpiral = dynamic(() => import("@/components/sections/ServicesSpiral"), { ssr: false });
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const CTASection = dynamic(() => import("@/components/sections/CTASection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Hero slider + badges — normal flow (not sticky) */}
      <Hero />

      {/* Grow Your Wealth — sticky so About Us slides over it */}
      <div className="sticky top-0 z-0">
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

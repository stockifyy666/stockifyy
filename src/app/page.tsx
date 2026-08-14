import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import ServicesSpiral from "@/components/sections/ServicesSpiral";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero stays sticky — sections below scroll over it */}
      <div className="sticky top-0 z-0">
        <Hero />
      </div>

      <div className="relative z-10 bg-[#FFFDF7]">
        <AboutUs />
        <ServicesSpiral />
        <WhyChooseUs />
        {/* <StatsSection /> */}
        <Testimonials />
        <CTASection />
        <FAQSection />
        <ContactSection />
      </div>
    </>
  );
}

import dynamic from "next/dynamic";
import AdvertisementBanner from "@/components/sections/AdvertisementBanner";
import Hero from "@/components/sections/Hero";

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
      <AdvertisementBanner />

      <div className="sticky top-0 z-0">
        <Hero />
      </div>

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

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import AdvertisementBanner from "@/components/sections/AdvertisementBanner";
// import AdvertisementBannerDesigned from "@/components/sections/AdvertisementBannerDesigned";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Stockifyy | Pakistan's #1 SECP-Licensed Stock Market Advisory",
  description:
    "Grow your wealth the right way. Pakistan's most trusted SECP-licensed, Shariah-compliant stock market advisory for PSX investors since 2006.",
  alternates: { canonical: "https://stockifyy.com" },
  openGraph: {
    url: "https://stockifyy.com",
    title: "Stockifyy | Pakistan's #1 SECP-Licensed Stock Market Advisory",
    description: "Grow your wealth the right way. SECP-licensed, Shariah-compliant PSX advisory since 2006.",
    images: [{ url: "/images/ICON.png", width: 1200, height: 630 }],
  },
};
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
      {/* <AdvertisementBanner /> */}
      {/* <AdvertisementBannerDesigned /> */}

      {/* Hero slider + badges */}
      <Hero />

      {/* Grow Your Wealth — sticky top-20 so badge clears navbar (h=82px) */}
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

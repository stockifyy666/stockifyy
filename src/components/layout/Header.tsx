"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { services } from "@/content/services";
import logo from "../../../public/images/logo.svg"
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion

  const [homeItem, aboutItem, ...restNav] = site.nav;

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
<header className="sticky top-0 z-50 border-b border-[#E8DDC8] bg-[#FFF7E9]/90 backdrop-blur-xl">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo lockup */}
      <Link href="/" className="flex items-center">
  <Image
    src={logo}
    alt="Stockifyy Logo"
    priority
    className="h-12 w-auto object-contain"
  />
</Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 font-sans text-sm text-gray-700">
          <Link href={homeItem.href} className="hover:text-[#986300] duration-200 transition-colors">
            {homeItem.label}
          </Link>
          <Link href={aboutItem.href} className="hover:text-[#986300] duration-200 transition-colors">
            {aboutItem.label}
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className="flex items-center gap-1.5 hover:text-[#986300] transition-colors"
            >
              Services
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-60 transition-all duration-150 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
         <div className="bg-white rounded-2xl border border-gray-200 shadow-xl py-2 w-60 max-h-[70vh] overflow-y-auto">
  {services.map((s) => (
    <Link
      key={s.slug}
      href={`/services/${s.slug}`}
      className="block px-4 py-2.5 text-xs leading-snug text-gray-700 hover:bg-[#FFF7E9] hover:text-[#986300] transition"
    >
      {s.navLabel}
    </Link>
  ))}

  <div className="border-t border-gray-100 my-1.5" />

  <Link
    href="/services"
    className="block px-4 py-2.5 text-xs font-semibold text-[#986300] hover:bg-[#FFF7E9]"
  >
    View All Services →
  </Link>
</div>
            </div>
          </div>

          {restNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#986300] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={site.dataPortalHref}
          className="hidden lg:inline-block font-display text-sm font-medium bg-gradient-to-r from-[#FEA500] to-[#986300] text-white shadow-lg hover:opacity-90 rounded-full px-6 py-2.5 hover:bg-paper transition-colors"
        >
          Data Portal
        </Link>

        {/* Mobile menu toggle */}
     <button
  onClick={() => setMobileOpen((v) => !v)}
  aria-label={mobileOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileOpen}
  className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center"
>
  <span
    className={`absolute w-6 h-0.5 bg-[#1A1A1A] rounded-full transition-all duration-300 ${
      mobileOpen ? "rotate-45" : "-translate-y-2"
    }`}
  />
  <span
    className={`absolute w-6 h-0.5 bg-[#1A1A1A] rounded-full transition-all duration-300 ${
      mobileOpen ? "opacity-0" : ""
    }`}
  />
  <span
    className={`absolute w-6 h-0.5 bg-[#1A1A1A] rounded-full transition-all duration-300 ${
      mobileOpen ? "-rotate-45" : "translate-y-2"
    }`}
  />
</button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden bg-[#FFF7E9] border-t border-[#E8DDC8] transition-[max-height] duration-300 ease-in-out ${
          mobileOpen ? "max-h-[calc(100vh-5rem)] overflow-y-auto" : "max-h-0"
        }`}
      >
        <nav className="max-w-content mx-auto px-6 py-6 flex flex-col font-sans text-base">
          <Link href={homeItem.href} className="py-4 border-b border-[#E8DDC8] text-[#1A1A1A]">
            {homeItem.label}
          </Link>
          <Link href={aboutItem.href} className="py-4 border-b border-[#E8DDC8] text-[#1A1A1A]">
            {aboutItem.label}
          </Link>

          {/* Services accordion */}
          <div className="border-b border-[#E8DDC8]">
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className="w-full flex items-center justify-between py-4 text-[#1A1A1A]"
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                mobileServicesOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="py-2.5 text-sm leading-snug text-[#1A1A1A]/70 hover:text-[#986300]"
                  >
                    {s.navLabel}
                  </Link>
                ))}
                <Link href="/services" className="py-2.5 text-sm text-brass">
                  View all services →
                </Link>
              </div>
            </div>
          </div>

          {restNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-4 border-b border-[#E8DDC8] text-[#1A1A1A]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={site.dataPortalHref}
          className="font-display mt-6 text-center rounded-full bg-gradient-to-r from-[#FEA500] to-[#986300] text-white px-5 py-3.5 font-medium shadow-lg hover:opacity-90 transition"
          >
            Data Portal
          </Link>
        </nav>
      </div>
    </header>
  );
}
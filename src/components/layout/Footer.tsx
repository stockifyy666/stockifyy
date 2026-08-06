import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";
import { services } from "@/content/services";

import logo from "../../../public/images/logo.svg";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.2 22H2l7.7-8.8L1 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 4H5.5l12.2 16z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23 12s0-3.4-.4-5a3 3 0 0 0-2.1-2.1C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.5.4A3 3 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a3 3 0 0 0 2.1 2.1c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4A3 3 0 0 0 22.6 17c.4-1.6.4-5 .4-5zM9.8 15.3V8.7l6 3.3-6 3.3z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials = [
  { label: "Twitter", href: "https://x.com/stockifyypsx?s=11", icon: TwitterIcon },
  { label: "YouTube", href: "https://youtube.com/@stockifyyltd?si=pi4Kcdn5PxqYyra6", icon: YoutubeIcon },
  { label: "Facebook", href: "https://www.facebook.com/share/1BxKXSkqKb/?mibextid=wwXIfr", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/stockifyyltd?igsh=aTl1OTQ2MjI4YW9y&utm_source=qr", icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFF7E9] border-t border-[#E8DDC8] ">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={logo}
                alt="Stockifyy Logo"
                width={180}
                height={60}
                priority
                className="h-14 w-auto"
              />
            </Link>

            <p className="font-sans text-sm text-gray-600 max-w-md leading-7">
              Our mission at Stockifyy is to make Shariah-compliant investing
              easy and reliable for everyone, whether you are just starting
              your investment journey or already active in the market. We
              provide clear, research-driven guidance to help investors make
              informed financial decisions.
            </p>

            {/* <div className="mt-6 space-y-2 font-sans text-sm text-gray-500">
              <p>{site.address}</p>
              <p>{site.email}</p>
              <p>{site.phone}</p>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#986300] font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 font-sans text-sm text-gray-600">
              {services.slice(0, 3).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-[#986300]"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/services"
                  className="font-medium text-[#986300] hover:text-[#FEA500] transition-colors"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#986300] font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3 font-sans text-sm text-gray-600">
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-[#986300]"
                >
                  Insights
                </Link>
              </li>

              <li>
                <Link
                  href="/#about"
                  className="transition-colors hover:text-[#986300]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/team"
                  className="transition-colors hover:text-[#986300]"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  href="/#faq"
                  className="transition-colors hover:text-[#986300]"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-[#986300]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[#E8DDC8]" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FEA500]/30 text-[#986300] transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-[#FEA500] hover:to-[#7C5200] hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="text-center">
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-[#986300] transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms-and-conditions" className="hover:text-[#986300] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
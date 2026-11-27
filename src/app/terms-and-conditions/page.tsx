import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions governing use of Stockifyy Pvt Limited's website and services.",
};

const sections = [
  {
    title: "1. Introduction",
    body: [
      "This website is owned and operated by Stockifyy Pvt Limited (hereinafter and throughout this website referred to as “we”, “us” and “our”).",
      "By using stockifyy.com, you agree to these terms and any other posted guidelines. If you disagree, do not use our services.",
    ],
  },
  {
    title: "2. Subscription",
    body: [
      "You agree to pay the specified subscription fee when subscribing to our services or packages.",
    ],
  },
  {
    title: "3. Information from External Sources",
    body: [
      "We use data from public sources, which may change without notice. We are not responsible for inaccuracies from these sources.",
    ],
  },
  {
    title: "4. No Guarantee",
    body: [
      "We strive for accuracy but do not guarantee the completeness or reliability of information. We may update our website without notice.",
    ],
  },
  {
    title: "5. Limitation of Liability",
    body: [
      "We are not liable for any damages arising from using or being unable to use our website, including unauthorized access.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "All content on our platforms is our intellectual property or that of our licensors and is protected by law. Do not reproduce or distribute it without our consent.",
    ],
  },
  {
    title: "7. Third-Party Websites",
    body: [
      "We are not responsible for the content or accuracy of third-party websites linked to ours. Use them at your own risk.",
    ],
  },
  {
    title: "8. Privacy Policy",
    body: [
      "Our Privacy Policy explains how we handle your personal information. We respect your privacy and will not share your information without consent, except as required by law. You can read our Privacy Policy at stockifyy.com/privacy-policy.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These terms are governed by the regulations of the SECP and the laws of the Government of Pakistan.",
    ],
  },
  {
    title: "10. Changes to Terms",
    body: [
      "We may change these terms at any time without notice. Continued use of our services after changes means you accept the new terms.",
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "If you have any questions about these terms, or any complaints about this site or the services we offer, please email us at info@stockifyy.com.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <div
        className="border-b border-creamLine"
        style={{ background: "linear-gradient(135deg, #FFF7E9 0%, #FFFDF7 100%)" }}
      >
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <p className="case-index text-gold text-sm uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="font-sans text-slate max-w-xl leading-relaxed">
            Please read these terms carefully before using our website or
            engaging with any of our advisory services.
          </p>
          <p className="font-sans text-xs text-slate/60 mt-4">
            Effective date: 27 November 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-3xl space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl md:text-2xl text-ink mb-4">
                {s.title}
              </h2>
              <div className="space-y-4">
                {s.body.map((para, i) => (
                  <p key={i} className="font-sans text-slate leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-creamLine flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-block rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-7 py-3 shadow-lg hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
          <Link
            href="/privacy-policy"
            className="inline-block rounded-full border border-gold/40 text-ink font-display text-sm font-medium px-7 py-3 hover:border-gold hover:text-goldDeep transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </article>
    </div>
  );
}


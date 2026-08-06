import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions governing use of Stockifyy Advisory's website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using the Stockifyy Advisory website (stockifyy.com) or any of our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.",
    ],
  },
  {
    title: "2. Nature of Our Services",
    body: [
      "Stockifyy Advisory is a Securities and Exchange Commission of Pakistan (SECP) certified advisory firm. We provide stock market guidance, educational content, trade alerts, portfolio advisory, and related financial information services.",
      "Our services are informational and advisory in nature. Nothing on this website or communicated through our services constitutes a guarantee of investment returns or a solicitation to buy or sell any specific security. Past performance is not indicative of future results.",
    ],
  },
  {
    title: "3. Shariah Compliance Disclaimer",
    body: [
      "Stockifyy Advisory follows established Shariah screening criteria for the recommendations and guidance we provide. However, Shariah compliance of specific securities can change over time due to changes in a company's financial ratios or business activities.",
      "Investors are ultimately responsible for verifying the Shariah compliance status of their own investments. Stockifyy does not accept liability for any investments made based solely on our compliance assessments.",
    ],
  },
  {
    title: "4. No Financial Advice Guarantee",
    body: [
      "Information provided on this website and through our services is for educational and informational purposes. Individual financial circumstances vary, and nothing we communicate should be treated as personalised financial advice unless you are an enrolled advisory client with a formal agreement in place.",
      "You should consult a qualified financial adviser before making significant investment decisions.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      "All content on this website, including text, graphics, logos, research reports, and educational materials, is the intellectual property of Stockifyy Advisory and is protected by applicable copyright and intellectual property laws.",
      "You may not reproduce, distribute, or commercially exploit any content from this website without prior written permission from Stockifyy Advisory.",
    ],
  },
  {
    title: "6. User Conduct",
    body: [
      "You agree not to use this website for any unlawful purpose, to transmit harmful or misleading content, to attempt to gain unauthorised access to any part of the website or its systems, or to interfere with the website's operation in any way.",
    ],
  },
  {
    title: "7. Third-Party Links",
    body: [
      "Our website may contain links to third-party websites for your convenience. Stockifyy Advisory does not endorse or take responsibility for the content, privacy practices, or services of any third-party websites.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Stockifyy Advisory shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of this website or reliance on any information provided, including investment losses.",
    ],
  },
  {
    title: "9. Amendments",
    body: [
      "Stockifyy Advisory reserves the right to amend these Terms and Conditions at any time. Updated terms will be posted on this page with a revised effective date. Continued use of our website after any changes constitutes your acceptance of the revised terms.",
    ],
  },
  {
    title: "10. Governing Law",
    body: [
      "These Terms and Conditions are governed by the laws of Pakistan. Any disputes arising from your use of our website or services shall be subject to the exclusive jurisdiction of the courts of Pakistan.",
    ],
  },
  {
    title: "11. Contact",
    body: [
      "If you have any questions regarding these Terms and Conditions, please contact us at partners@stockifyy.com.",
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
            Effective date: 1 August 2025
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

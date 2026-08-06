import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Stockifyy Advisory collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect information you voluntarily provide when you contact us through our website, including your full name, email address, phone number, and any message or enquiry you submit via our contact form.",
      "We may also collect non-personal technical data such as your browser type, device, IP address, pages visited, and time spent on the site through standard web analytics tools. This data is used solely to improve the performance and user experience of our website.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "Information you provide is used to respond to your enquiries, deliver our advisory services, send you relevant updates or educational content you have requested, and improve our offerings.",
      "We do not sell, rent, or share your personal information with third parties for their own marketing purposes. We may share data with trusted service providers who assist in operating our website, strictly under confidentiality obligations.",
    ],
  },
  {
    title: "3. Shariah Compliance & Data Ethics",
    body: [
      "Consistent with our commitment to Shariah-compliant practices, we treat your personal data with honesty and transparency. We collect only what is necessary, retain it only as long as needed, and never use it in ways you would not reasonably expect.",
    ],
  },
  {
    title: "4. Cookies",
    body: [
      "Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how visitors use our site. You can disable cookies through your browser settings; however, some features of the website may not function correctly as a result.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "6. Third-Party Links",
    body: [
      "Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "You have the right to access, correct, or request deletion of any personal information we hold about you. To exercise these rights, please contact us at partners@stockifyy.com. We will respond to your request within a reasonable timeframe.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised effective date. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "9. Contact Us",
    body: [
      "If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at partners@stockifyy.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="font-sans text-slate max-w-xl leading-relaxed">
            Your privacy matters to us. This policy explains what information
            we collect, how we use it, and how we protect it.
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
            href="/terms-and-conditions"
            className="inline-block rounded-full border border-gold/40 text-ink font-display text-sm font-medium px-7 py-3 hover:border-gold hover:text-goldDeep transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>
      </article>
    </div>
  );
}

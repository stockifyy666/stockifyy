import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Stockifyy Pvt Limited collects, uses, and protects your personal information.",
};

const sections: { title: string; body: string[]; list?: string[] }[] = [
  {
    title: "1. Consent to Use Information",
    body: [
      "By using the Stockifyy Pvt Limited website or services, you agree to this Privacy Policy. If you disagree, please stop using our services immediately.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "Non-Personal Information: includes web requests, browser type, pages visited, and time spent on pages. This is collected for security, auditing, and statistical purposes.",
      "Personal Information: includes name, gender, phone number, email, address, any information given in the KYC form, and IP address. We collect this as per the requirements of the SECP.",
    ],
  },
  {
    title: "3. Purpose of Collection",
    body: [
      "We collect information to provide and improve our services and for research. Non-personal information helps us enhance our services based on user preferences. We also collect information entered into KYC and other forms on our site as per SECP requirements, in our capacity as your financial advisor.",
    ],
  },
  {
    title: "4. Sharing Information",
    body: ["We may share information with:"],
    list: ["Our team members", "Legal authorities, if required"],
  },
  {
    title: "5. User Rights and Retention",
    body: [
      "You can access, correct, update, or object to the use of your personal information via our Contact Us page. We retain your information as long as needed to provide our services and comply with legal obligations.",
    ],
  },
  {
    title: "6. Security and Confidentiality",
    body: [
      "We take industry-standard security measures to protect your personal information but cannot guarantee complete security. You share information at your own risk.",
    ],
  },
  {
    title: "7. Links to Other Websites",
    body: [
      "This Privacy Policy applies only to our services. We are not responsible for third-party websites linked from our site. Please read their privacy policies before use.",
    ],
  },
  {
    title: "8. Contact Information",
    body: [
      "For any questions about this Privacy Policy, email us at info@stockifyy.com.",
    ],
  },
  {
    title: "9. Updates to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Check the effective date above for updates. Your continued use of our services means you accept the changes.",
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
                {s.list && (
                  <ul className="list-disc pl-6 space-y-2 font-sans text-slate">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
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


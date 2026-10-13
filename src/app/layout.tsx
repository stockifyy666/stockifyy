import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { site } from "@/content/site";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} | Corporate Advisory`,
    template: `%s | ${site.name}`,
  },
  description:
    "Pakistan's most trusted SECP-licensed, Shariah-compliant stock market advisory. Expert financial guidance for PSX investors since 2006.",
  metadataBase: new URL("https://stockifyy.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://stockifyy.com",
    title: `${site.fullName} | Stock Market Advisory`,
    description:
      "Pakistan's most trusted SECP-licensed, Shariah-compliant stock market advisory. Expert financial guidance for PSX investors since 2006.",
    siteName: site.fullName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Stockifyy",
              url: "https://stockifyy.com",
              logo: "https://stockifyy.com/images/favicon.ico",
              description:
                "Pakistan's most trusted SECP-licensed, Shariah-compliant stock market advisory.",
              telephone: "+923362444466",
              areaServed: { "@type": "Country", name: "Pakistan" },
              knowsAbout: [
                "Stock Market Advisory",
                "Technical Analysis",
                "PSX Investments",
                "Shariah-Compliant Finance",
              ],
              sameAs: [
                "https://www.facebook.com/stockifyy",
                "https://www.instagram.com/stockifyy",
              ],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        {/* Preload first banner image for LCP improvement */}
        <link
          rel="preload"
          as="image"
          href="/images/course-banner-technical-analysis-mobile.jpg"
          media="(max-width: 640px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/course-banner-technical-analysis.webp"
          media="(min-width: 641px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/website-image.png"
          media="(min-width: 1024px)"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

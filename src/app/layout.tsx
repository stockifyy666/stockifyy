import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import dynamic from "next/dynamic";
import { site } from "@/content/site";

// CHATBOT_DISABLED — uncomment when ready to go live
// const AIChatbot = dynamic(() => import("@/components/ui/AIChatbot"), { ssr: false });

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
    default: `${site.fullName} | Stock Market Advisory Pakistan`,
    template: `%s | ${site.name}`,
  },
  description:
    "Pakistan's most trusted SECP-licensed, Shariah-compliant stock market advisory. Expert financial guidance for PSX investors since 2006.",
  metadataBase: new URL("https://stockifyy.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  keywords: [
    "stock market Pakistan", "PSX advisory", "SECP licensed", "Shariah compliant investment",
    "Pakistan Stock Exchange", "financial advisory Pakistan", "halal investment", "Stockifyy",
  ],
  authors: [{ name: "Stockifyy Financial Advisory" }],
  creator: "Stockifyy",
  publisher: "Stockifyy Financial Advisory",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: "https://stockifyy.com",
    title: `${site.fullName} | Stock Market Advisory Pakistan`,
    description:
      "Pakistan's most trusted SECP-licensed, Shariah-compliant stock market advisory. Expert financial guidance for PSX investors since 2006.",
    siteName: site.fullName,
    locale: "en_PK",
    images: [{ url: "/images/ICON.png", width: 1200, height: 630, alt: "Stockifyy Financial Advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Stock Market Advisory`,
    description: "Pakistan's most trusted SECP-licensed stock market advisory.",
    images: ["/images/ICON.png"],
  },
  verification: {},
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-94FMJ9N9CM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-94FMJ9N9CM');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* <AIChatbot /> */}
      </body>
    </html>
  );
}

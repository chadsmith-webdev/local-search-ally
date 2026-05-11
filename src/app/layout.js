import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import Script from "next/script";
import { siteConfig } from "@/lib/metadata";
import {
  Bricolage_Grotesque,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-ui",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020203",
};

const websiteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.localsearchally.com/#website",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    description: "Local SEO and web development for NWA home service trades.",
    publisher: { "@id": "https://www.localsearchally.com/#localbusiness" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
  },
];

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | Local Search Ally`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      className={`${bricolage.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <link rel='preconnect' href='https://www.googletagmanager.com' />
        <link rel='preconnect' href='https://www.google-analytics.com' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a href='#main-content' className='skip-link'>
          Skip to main content
        </a>
        <MotionProvider>
          <Navbar />
          <main id='main-content' className='flex-1 min-h-screen'>
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-SGQ98MEHWZ'
          strategy='afterInteractive'
        />
        <Script id='ga4-init' strategy='afterInteractive'>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SGQ98MEHWZ', {
            linker: { domains: ['localsearchally.com', 'audit.localsearchally.com'] }
          });
        `}</Script>
      </body>
    </html>
  );
}

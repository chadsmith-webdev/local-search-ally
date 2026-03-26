import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/lib/metadata";
// app/layout.tsx
import { Exo_2, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const exo2 = Exo_2({ subsets: ['latin'], variable: '--font-display' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  verification: {
    google: siteConfig.googleVerification,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.image],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        margin: 0,
        fontFamily: "var(--font-body), sans-serif",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <SchemaMarkup />
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-SGQ98MEHWZ" />
      </body>
    </html>
  );
}
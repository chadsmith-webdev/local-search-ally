import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/lib/metadata";

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
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        margin: 0,
        fontFamily: "var(--font-poppins), sans-serif",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
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
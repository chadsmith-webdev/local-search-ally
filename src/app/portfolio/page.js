import PortfolioHero from "@/components/PortfolioHero";
import PortfolioDemos from "@/components/PortfolioDemos";
import PortfolioCraft from "@/components/PortfolioCraft";
import PortfolioHonesty from "@/components/PortfolioHonesty";
import FinalCTASection from "@/components/FinalCTASection";

export const metadata = {
  title: "Portfolio — Local Search Ally | NWA Contractor Websites",
  description:
    "Demo builds for NWA home service trades — plumbing, HVAC, electrical, roofing, remodeling, and landscaping. Real work you can click through and judge for yourself.",
  alternates: {
    canonical: "https://localsearchally.com/portfolio",
  },
  openGraph: {
    title: "Portfolio — Local Search Ally",
    description:
      "Demo contractor websites built to rank on Google and convert visitors into calls. Click through five trade-specific builds for NWA home service businesses.",
    url: "https://localsearchally.com/portfolio",
    siteName: "Local Search Ally",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio — Local Search Ally",
  description:
    "Demo websites for NWA home service trades: plumbing, HVAC, electrical, roofing, remodeling, and landscaping.",
  url: "https://localsearchally.com/portfolio",
  author: {
    "@type": "Person",
    name: "Chad Smith",
    worksFor: {
      "@type": "LocalBusiness",
      name: "Local Search Ally",
      url: "https://localsearchally.com",
      telephone: "+14793808626",
    },
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioHero />
      <PortfolioDemos />
      <PortfolioCraft />
      <PortfolioHonesty />
      <FinalCTASection />
    </>
  );
}

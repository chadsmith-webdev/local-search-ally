import GbpHero from "@/components/GbpHero";
import GbpProblem from "@/components/GbpComponents/Problem";
import GbpSolution from "@/components/GbpComponents/Solution";
import GbpProcess from "@/components/GbpComponents/Process";
import GbpProof from "@/components/GbpComponents/Proof";
import GbpHowItWorks from "@/components/GbpComponents/HowItWorks";
import GbpFAQ from "@/components/GbpComponents/FAQ";
import FinalCTA from "@/components/FinalCTASection";

export const metadata = {
  title: "Google Business Profile Optimization | NWA | Local Search Ally",
  description:
    "Get into the Google Map Pack with expert GBP optimization. Complete profile optimization, photo strategy, and review management for NWA contractors.",
  keywords:
    "Google Business Profile optimization, map pack, GBP management, local business optimization, NWA",
  openGraph: {
    title: "Google Business Profile Optimization for Contractors",
    description:
      "Dominate Google Maps in your area. Expert Google Business Profile optimization to get into the map pack and drive local calls.",
    url: "https://localsearchally.com/services/gbp-optimization",
    siteName: "Local Search Ally",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://localsearchally.com/services/gbp-optimization",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Google Business Profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Google Business Profile (GBP) is the listing that appears on Google Maps and local search results. It includes your business name, address, phone, hours, photos, reviews, and questions from customers. When someone searches 'plumber near me' or 'HVAC in Rogers,' the map pack at the top shows the top 3 local businesses. That's the GBP at work.",
      },
    },
    {
      "@type": "Question",
      name: "How important is GBP for local rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GBP is the foundation of local SEO. Your GBP optimization directly impacts your visibility in Google Maps, your position in the map pack, and your conversion rate. A fully optimized GBP with high-quality photos, accurate info, and positive reviews outranks incomplete profiles every time.",
      },
    },
    {
      "@type": "Question",
      name: "What does GBP optimization include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optimization includes fixing your business information for consistency, writing a compelling description with local keywords, uploading high-quality photos and videos, managing customer questions and reviews, optimizing your service areas, and creating regular posts. I cover all of it.",
      },
    },
    {
      "@type": "Question",
      name: "How long until I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Changes often show up in Google within 1-2 weeks, but ranking improvements typically take 30-90 days as Google sees consistent optimization and review growth. Some clients see map pack movement within 60 days.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Business Profile Optimization",
  description:
    "Expert GBP optimization to get into the Google Map Pack. Includes photo strategy, review management, and profile optimization.",
  areaServed: [
    "Rogers, AR",
    "Bentonville, AR",
    "Fayetteville, AR",
    "Springdale, AR",
    "Siloam Springs, AR",
  ],
  provider: {
    "@type": "LocalBusiness",
    name: "Local Search Ally",
    url: "https://localsearchally.com",
    telephone: "+14793808626",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://localsearchally.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://localsearchally.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "GBP Optimization",
      item: "https://localsearchally.com/services/gbp-optimization",
    },
  ],
};

export default function GbpPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GbpHero />
      <GbpProblem />
      <GbpSolution />
      <GbpProcess />
      <GbpHowItWorks />
      <GbpProof />
      <GbpFAQ />
      <FinalCTA />
    </>
  );
}

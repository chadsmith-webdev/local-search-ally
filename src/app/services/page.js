import ServicesHero from "@/components/ServicesHero";
import ServicesStatBar from "@/components/ServicesStatBar";
import ProblemFrame from "@/components/ProblemFrame";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesBundle from "@/components/ServicesBundle";
import ServicesHowItWorks from "@/components/ServicesHowItWorks";
import ServicesAuthority from "@/components/ServicesAuthority";
import ServicesAuditCTA from "@/components/ServicesAuditCTA";
import ServicesFAQ from "@/components/ServicesFAQ";
import ServicesFinalCTA from "@/components/ServicesFinalCTA";

export const metadata = {
  title: "Local SEO Services for NWA Contractors | Local Search Ally",
  description:
    "Local SEO, web design, GBP management, and reputation services built for NWA home service trades. No contracts. Starting at $149/month.",
  openGraph: {
    title: "Local SEO Services for NWA Contractors | Local Search Ally",
    description:
      "Get found by homeowners in Rogers, Bentonville, Fayetteville, and Springdale — before they call your competitor.",
    url: "https://localsearchally.com/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services — NWA Contractors",
  provider: {
    "@type": "LocalBusiness",
    name: "Local Search Ally",
    url: "https://localsearchally.com",
    telephone: "+14793808626",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Siloam Springs",
      addressRegion: "AR",
      addressCountry: "US",
    },
  },
  areaServed: [
    "Rogers, AR",
    "Bentonville, AR",
    "Fayetteville, AR",
    "Springdale, AR",
    "Northwest Arkansas",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Local SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO",
          description:
            "GBP optimization, citation cleanup, keyword research, on-page SEO, and monthly reporting — built to get NWA contractors into the Map Pack.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "499",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design & Development",
          description:
            "Mobile-first, SEO-built websites for home service trades — click-to-call, dedicated service pages, LocalBusiness schema.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "799",
          priceCurrency: "USD",
          unitText: "ONE_TIME",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Optimization & Management",
          description:
            "Full GBP audit, category optimization, photo uploads, weekly posts, and monthly adjustments to maximize Map Pack position.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "199",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reputation Management",
          description:
            "Review request process, response templates, and monthly reporting on review count and rating trend.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "149",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ServicesHero />
        <ServicesStatBar />
        <ProblemFrame />
        <ServicesGrid />
        <ServicesBundle />
        <ServicesHowItWorks />
        <ServicesAuthority />
        <ServicesAuditCTA />
        <ServicesFAQ />
        <ServicesFinalCTA />
      </main>
    </>
  );
}

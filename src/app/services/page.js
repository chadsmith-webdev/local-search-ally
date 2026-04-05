import ServicesPageHero from "@/components/ServicesPageHero";
import ServicesDetail from "@/components/ServicesDetail";
import ServicesAuditBridge from "@/components/ServicesAuditBridge";
import ServicesPricing from "@/components/ServicesPricing";
import ServicesPageFinalCTA from "@/components/ServicesPageFinalCTA";

export const metadata = {
  title: "Services — Local Search Ally | NWA Contractor SEO & Web Design",
  description:
    "Local SEO, web design, Google Business Profile management, and reputation management for NWA home service trades. One person. No handoffs. No long-term contracts.",
  openGraph: {
    title: "Services — Local Search Ally",
    description:
      "Four services that work together — SEO, web, GBP, and reputation — for NWA contractors who are tired of being invisible online.",
    url: "https://localsearchally.com/services",
    siteName: "Local Search Ally",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://localsearchally.com/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO & Web Design for NWA Contractors",
  description:
    "Local SEO, web design, Google Business Profile optimization, and reputation management for home service trade businesses in Northwest Arkansas.",
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
    areaServed: [
      "Rogers, AR",
      "Bentonville, AR",
      "Fayetteville, AR",
      "Springdale, AR",
      "Siloam Springs, AR",
      "Northwest Arkansas",
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NWA Contractor Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO",
          description:
            "Keyword research, on-page optimization, citation building, and monthly reporting for NWA home service trades.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design & Development",
          description:
            "Mobile-first, SEO-built websites for home service trade businesses in Northwest Arkansas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Management",
          description:
            "Full GBP audit, photo strategy, post management, and Q&A for NWA contractors.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reputation Management",
          description:
            "Review request process, response templates, and monitoring for home service trade businesses.",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ServicesPageHero />
        <ServicesDetail />
        <ServicesAuditBridge />
        <ServicesPricing />
        <ServicesPageFinalCTA />
      </main>
    </>
  );
}

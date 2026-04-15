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
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 10:00-14:00", "Su 14:00-18:00"],
    areaServed: [
      {
        "@type": "City",
        name: "Rogers",
        containedInPlace: { "@type": "State", name: "Arkansas" },
      },
      {
        "@type": "City",
        name: "Bentonville",
        containedInPlace: { "@type": "State", name: "Arkansas" },
      },
      {
        "@type": "City",
        name: "Fayetteville",
        containedInPlace: { "@type": "State", name: "Arkansas" },
      },
      {
        "@type": "City",
        name: "Springdale",
        containedInPlace: { "@type": "State", name: "Arkansas" },
      },
      {
        "@type": "City",
        name: "Siloam Springs",
        containedInPlace: { "@type": "State", name: "Arkansas" },
      },
      { "@type": "AdministrativeArea", name: "Northwest Arkansas" },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NWA Contractor Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Visibility Plan",
        price: "497",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "RecurringChargeSpecification",
          billingDuration: "P1M",
          price: "497",
          priceCurrency: "USD",
        },
        itemOffered: {
          "@type": "Service",
          name: "Visibility — Local SEO Starter",
          description:
            "Google Business Profile optimization and management, citation cleanup, and monthly visibility reporting for NWA home service trades.",
        },
      },
      {
        "@type": "Offer",
        name: "Growth Plan",
        price: "797",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "RecurringChargeSpecification",
          billingDuration: "P1M",
          price: "797",
          priceCurrency: "USD",
        },
        itemOffered: {
          "@type": "Service",
          name: "Growth — Local SEO + On-Page",
          description:
            "Full local SEO including on-page optimization for service pages, keyword strategy, competitor tracking, and local content for NWA contractors.",
        },
      },
      {
        "@type": "Offer",
        name: "Full Stack Plan",
        price: "1197",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "RecurringChargeSpecification",
          billingDuration: "P1M",
          price: "1197",
          priceCurrency: "USD",
        },
        itemOffered: {
          "@type": "Service",
          name: "Full Stack — SEO + Web + Reputation",
          description:
            "Complete local marketing management: SEO, website maintenance, monthly blog content, and reputation monitoring for NWA home service trade businesses.",
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

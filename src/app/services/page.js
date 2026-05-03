import ServicesPageHero from "@/components/ServicesPageHero";
import ServicesDetail from "@/components/ServicesDetail";
import ServicesAuditBridge from "@/components/ServicesAuditBridge";
import ServicesPricing from "@/components/ServicesPricing";
import ServicesPageFinalCTA from "@/components/ServicesPageFinalCTA";
import FAQSection from "@/components/FAQSection";

const SERVICES_FAQS = [
  {
    q: "What services does Local Search Ally offer?",
    a: "Local Search Ally offers local SEO, Google Business Profile optimization, web design, reputation management, and citation building — all for NWA home service trades. Plans start at $497/month with no long-term contracts.",
  },
  {
    q: "Do I need all these services or can I start with just one?",
    a: "You can start with a single service. Most NWA contractors begin with GBP optimization or a full local SEO plan, then add web or reputation management as they see results. There's no minimum commitment.",
  },
  {
    q: "What is included in the local SEO service?",
    a: "Local SEO includes Google Business Profile management, NAP citation cleanup, on-page optimization for service pages, keyword strategy for NWA searches, and monthly reports showing rankings, calls, and actions taken.",
  },
  {
    q: "What does Google Business Profile management actually involve?",
    a: "It means keeping your profile fully filled out, posting weekly updates, responding to every review, uploading photos, and selecting the right categories — the ongoing activity that signals to Google your business is active.",
  },
  {
    q: "What does web design include and how long does it take?",
    a: "Web design starts at $799 and includes a mobile-first, SEO-built site optimized for local search and lead generation. Most contractor sites are completed in 3–4 weeks. No templates — built to convert searches into calls.",
  },
  {
    q: "How does reputation management work?",
    a: "Reputation management starts at $99/month and includes a review request process, response templates, and monitoring. It helps NWA contractors generate consistent new reviews without chasing customers manually.",
  },
  {
    q: "Are there long-term contracts for any of the services?",
    a: "No. Every service is month-to-month. You can cancel any time. There are no setup fees, no cancellation penalties, and no retainer lock-in. You stay because the results are there — not because you're obligated.",
  },
  {
    q: "How much does local SEO cost for a small contractor?",
    a: "The Visibility plan starts at $497/month covering GBP management, citation cleanup, and monthly reporting. Growth is $797/month and adds on-page SEO and keyword strategy. Full Stack is $1,197/month.",
  },
  {
    q: "What trades do you work with in Northwest Arkansas?",
    a: "HVAC, plumbing, roofing, electrical, landscaping, and remodeling. These home service trades share the same local search patterns and benefit most from Map Pack visibility and GBP optimization in NWA.",
  },
  {
    q: "How do I know which service plan is right for my business?",
    a: "Start with the free SEO audit at audit.localsearchally.com. It shows where you stand today — GBP completeness, citation gaps, and competitor visibility. That usually makes the right starting point obvious.",
  },
];

const servicesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-04-29",
  mainEntity: SERVICES_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const metadata = {
  title: "Services — Local Search Ally | NWA Contractor SEO & Web Design",
  description:
    "Local SEO, web design, Google Business Profile management, and reputation management for NWA home service trades. One person. No handoffs. No long-term contracts.",
  openGraph: {
    title: "Services — Local Search Ally",
    description:
      "Four services that work together — SEO, web, GBP, and reputation — for NWA contractors who are tired of being invisible online.",
    url: "https://www.localsearchally.com/services",
    siteName: "Local Search Ally",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.localsearchally.com/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.localsearchally.com/services#service",
  name: "Local SEO & Web Design for NWA Contractors",
  description:
    "Local SEO, web design, Google Business Profile optimization, and reputation management for home service trade businesses in Northwest Arkansas.",
  provider: { "@id": "https://www.localsearchally.com/#localbusiness" },
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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }}
      />
      <ServicesPageHero />
      <ServicesDetail />
      <ServicesAuditBridge />
      <ServicesPricing />
      <FAQSection
        faqs={SERVICES_FAQS}
        eyebrow='Services FAQ'
        heading={
          <>
            Common questions about
            <br />
            working with Local Search Ally.
          </>
        }
      />
      <ServicesPageFinalCTA />
    </>
  );
}

import SpringdalePlumbingClient from "@/components/SpringdalePlumbingClient";

const pageUrl = "https://www.localsearchally.com/service-areas/springdale-ar/plumbing";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Springdale, AR Plumber SEO | Local Search Ally",
    description:
      "Get found first in the Springdale, AR Map Pack. I help plumbers capture more calls with GBP optimization, intent-based service pages, and local authority building.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Springdale, AR Plumber SEO | Local Search Ally",
      description:
        "Get found first in the Springdale, AR Map Pack. I help plumbers capture more calls with GBP optimization, intent-based service pages, and local authority building.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Springdale, AR Plumber SEO | Local Search Ally",
      description:
        "Get found first in the Springdale, AR Map Pack. I help plumbers capture more calls with GBP optimization, intent-based service pages, and local authority building.",
    },
  };
}

export default function SpringdalePlumbingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for plumbers in Springdale, AR — Google Business Profile optimization, service pages, and citation building for high-competition NWA markets.",
    areaServed: [
      {
        "@type": "City",
        name: "Springdale",
        containedInPlace: { "@type": "State", name: "Arkansas" },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Siloam Springs",
      addressRegion: "AR",
      addressCountry: "US",
      postalCode: "72761",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.18670",
      longitude: "-94.12880",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to see Map Pack movement in Springdale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Springdale is a dense, competitive market, often overlapping with Fayetteville searches. For plumbers with a baseline presence, we usually see significant Map Pack movement within 90 days. If you are starting from zero or have a suspended/filtered profile, the timeline is closer to 4-6 months of consistent signal building.",
        },
      },
      {
        "@type": "Question",
        name: "Should I focus on 'Plumber Springdale' or 'Plumber near me'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "'Plumber Springdale' relies heavily on your business address and local citations. 'Plumber near me' is driven by proximity and Google Business Profile strength. I optimize for both to ensure you capture homeowners whether they are in downtown Springdale or the residential outskirts.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a separate website for my Springdale office?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. If you have one primary office in Springdale, a single, well-optimized website with a dedicated Springdale service page is usually more powerful than splitting your authority across two sites.",
        },
      },
      {
        "@type": "Question",
        name: "Why are my competitors outranking me with fewer reviews?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reviews are only one part of the algorithm. If a competitor has a more complete GBP, better service-area boundary definitions, or service-specific pages on their website (like 'drain cleaning'), Google may see them as more relevant despite a lower review count. I fix those relevance gaps first.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help if I serve both Springdale and Fayetteville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I specialize in setting up service-area signals that maximize your reach across both cities without getting filtered out of either market.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.localsearchally.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.localsearchally.com/service-areas" },
      { "@type": "ListItem", position: 3, name: "Springdale", item: "https://www.localsearchally.com/service-areas/springdale-ar" },
      { "@type": "ListItem", position: 4, name: "Plumbing SEO", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SpringdalePlumbingClient auditUrl={auditUrl} />
    </>
  );
}

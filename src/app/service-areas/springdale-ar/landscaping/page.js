import SpringdaleLandscapingClient from "@/components/SpringdaleLandscapingClient";

const pageUrl = "https://www.localsearchally.com/service-areas/springdale-ar/landscaping";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Springdale Landscaping SEO | Local Search Ally",
    description:
      "Win the Springdale landscaping market. I help landscapers in Springdale, AR dominate the Map Pack, showcase real projects, and outrank NWA competitors.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Springdale Landscaping SEO | Local Search Ally",
      description:
        "Win the Springdale landscaping market. I help landscapers in Springdale, AR dominate the Map Pack, showcase real projects, and outrank NWA competitors.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Springdale Landscaping SEO | Local Search Ally",
      description:
        "Win the Springdale landscaping market. I help landscapers in Springdale, AR dominate the Map Pack, showcase real projects, and outrank NWA competitors.",
    },
  };
}

export default function SpringdaleLandscapingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for landscapers in Springdale, AR — Google Business Profile optimization, neighborhood service pages, and citation building for residential hubs.",
    areaServed: [
      {
        "@type": "City",
        name: "Springdale",
        containedInPlace: { "@type": "State", name: "Arkansas" },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Springdale",
      addressRegion: "AR",
      addressCountry: "US",
      postalCode: "72764",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.1867",
      longitude: "-94.1288",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to see landscaping SEO results in Springdale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Springdale is a dense market with high demand. I usually see Map Pack movement within 90 days for established businesses. If you are starting fresh, expect 4-6 months to build the authority needed to dominate the top three results.",
        },
      },
      {
        "@type": "Question",
        name: "Should I focus on 'Lawn Care Springdale' or 'Landscaping'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both, but they capture different intent. 'Lawn Care' is for recurring mowing, while 'Landscaping' leans toward projects like mulch or design work. I optimize for both to ensure your routes stay full and your project calendar stays booked.",
        },
      },
      {
        "@type": "Question",
        name: "Can I rank for specific neighborhoods in Springdale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Neighborhood relevance is key. I build service pages that mention specific areas and help you build a photo strategy that proves you're already working where homeowners are searching.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to keep doing SEO during the winter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Winter is when homeowners plan for spring. If I stop SEO in November, competitors will outrank you by March. I use the off-season to build the foundation for your busiest spring ever.",
        },
      },
      {
        "@type": "Question",
        name: "How do photos affect my landscaping ranking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Photos are everything. Google uses geo-data to confirm you're working in Springdale. I help you build a system to capture and post project shots that prove your quality and relevance.",
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
      { "@type": "ListItem", position: 4, name: "Landscaping SEO", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SpringdaleLandscapingClient auditUrl={auditUrl} />
    </>
  );
}

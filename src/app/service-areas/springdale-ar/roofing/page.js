import SpringdaleRoofingClient from "@/components/SpringdaleRoofingClient";

const pageUrl = "https://www.localsearchally.com/service-areas/springdale-ar/roofing";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Springdale, AR Roofing SEO | Local Search Ally",
    description:
      "Win the Springdale roofing market. I help roofing contractors in Springdale, AR rank higher in the Map Pack, capture storm-damage leads, and outrank NWA competitors.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Springdale, AR Roofing SEO | Local Search Ally",
      description:
        "Win the Springdale roofing market. I help roofing contractors in Springdale, AR rank higher in the Map Pack, capture storm-damage leads, and outrank NWA competitors.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Springdale, AR Roofing SEO | Local Search Ally",
      description:
        "Win the Springdale roofing market. I help roofing contractors in Springdale, AR rank higher in the Map Pack, capture storm-damage leads, and outrank NWA competitors.",
    },
  };
}

export default function SpringdaleRoofingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for roofing contractors in Springdale, AR — Google Business Profile optimization, storm-ready service pages, and citation building for high-ticket markets.",
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
        name: "Storm chasers flood Springdale after every hail event. How do I compete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You compete by looking unmistakably local. I help you build a verified GBP with a local address and photos of roofs you've actually replaced in Springdale, which out-of-state crews can't match.",
        },
      },
      {
        "@type": "Question",
        name: "Do I really need a website if my Google Business Profile is good?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For high-ticket roofing jobs, homeowners will vet your website after finding your GBP. If your site doesn't show proof of finished NWA projects, you'll lose them to a more established-looking competitor.",
        },
      },
      {
        "@type": "Question",
        name: "How does insurance work into roofing SEO in Springdale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I build dedicated service pages that answer insurance and storm-damage questions on Google before the homeowner even asks them, capturing the high-intent traffic that follows a storm.",
        },
      },
      {
        "@type": "Question",
        name: "I work all over NWA. Can I rank in surrounding towns too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I build city-specific service-area pages for communities like Tontitown or Bethel Heights, ensuring homeowners in those areas find you just as easily as those in central Springdale.",
        },
      },
      {
        "@type": "Question",
        name: "How many reviews do I need to rank in the Springdale Map Pack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It's about velocity and detail. I help you build a system to earn fresh, keyword-rich reviews consistently, signaling to Google that you are the most active and trusted roofer in the city.",
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
      { "@type": "ListItem", position: 4, name: "Roofing SEO", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SpringdaleRoofingClient auditUrl={auditUrl} />
    </>
  );
}

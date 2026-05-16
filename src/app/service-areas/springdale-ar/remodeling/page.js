import SpringdaleRemodelingClient from "@/components/SpringdaleRemodelingClient";

const pageUrl = "https://www.localsearchally.com/service-areas/springdale-ar/remodeling";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Springdale Remodeling SEO | Local Search Ally",
    description:
      "Win high-value remodeling projects in Springdale. I help remodeling contractors in Springdale, AR dominate the Map Pack and showcase their best work to ready-to-hire homeowners.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Springdale Remodeling SEO | Local Search Ally",
      description:
        "Win high-value remodeling projects in Springdale. I help remodeling contractors in Springdale, AR dominate the Map Pack and showcase their best work to ready-to-hire homeowners.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Springdale Remodeling SEO | Local Search Ally",
      description:
        "Win high-value remodeling projects in Springdale. I help remodeling contractors in Springdale, AR dominate the Map Pack and showcase their best work to ready-to-hire homeowners.",
    },
  };
}

export default function SpringdaleRemodelingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for remodeling contractors in Springdale, AR — Google Business Profile optimization, portfolio service pages, and authority building for high-end markets.",
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
        name: "How long does it take for remodeling SEO to show results in Springdale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Remodeling is a high-consideration market. While we can often see Map Pack movement within 90 days, the true lead-generation impact usually takes 4-6 months of consistent signal building.",
        },
      },
      {
        "@type": "Question",
        name: "Can I rank for surrounding neighborhoods like Tontitown or Bethel Heights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Neighborhood-level authority is a major part of my strategy. I build service-area pages for the specific communities you serve, so homeowners in those areas find you easily.",
        },
      },
      {
        "@type": "Question",
        name: "I mostly work from referrals. Why do I need local SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Referrals are how your name gets out there, but Google is where the vetting happens. Nearly every referral in Springdale will look you up online before booking a consultation. I help you protect those referrals.",
        },
      },
      {
        "@type": "Question",
        name: "Do photos of my remodeling projects really help with ranking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. For remodeling, photos are one of your strongest trust signals. I help you build a system to capture and post high-quality project shots that prove your craftsmanship.",
        },
      },
      {
        "@type": "Question",
        name: "Why are my competitors outranking me for 'kitchen remodel' searches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Competition is high. If a competitor has more detailed service pages, a more active GBP, or a stronger set of local reviews, Google will rank them higher. I focus on closing those authority gaps.",
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
      { "@type": "ListItem", position: 4, name: "Remodeling SEO", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SpringdaleRemodelingClient auditUrl={auditUrl} />
    </>
  );
}

import SiloamPlumbingClient from "@/components/SiloamPlumbingClient";

const pageUrl = "https://www.localsearchally.com/service-areas/siloam-springs-ar/plumbing";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Siloam Springs, AR Plumber SEO | Local Search Ally",
    description:
      "Most plumbers in Siloam Springs aren't showing up where homeowners search. I help you fix that — GBP, service pages, reviews — so the calls come to you.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Siloam Springs, AR Plumber SEO | Local Search Ally",
      description:
        "Most plumbers in Siloam Springs aren't showing up where homeowners search. I help you fix that — GBP, service pages, reviews — so the calls come to you.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Siloam Springs, AR Plumber SEO | Local Search Ally",
      description:
        "Most plumbers in Siloam Springs aren't showing up where homeowners search. I help you fix that — GBP, service pages, reviews — so the calls come to you.",
    },
  };
}

export default function SiloamSpringPlumbingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for plumbers in Siloam Springs, AR — Google Business Profile optimization, service pages, and citation building.",
    areaServed: [
      {
        "@type": "City",
        name: "Siloam Springs",
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
      latitude: "36.18808",
      longitude: "-94.54064",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to see results in a market like Siloam Springs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smaller markets tend to move faster than larger ones. In a less saturated market like Siloam Springs, meaningful Map Pack movement typically happens within 60 to 90 days of consistent work on GBP signals, citations, and on-page content — faster than you'd expect in Rogers or Fayetteville.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a website, or is a Google Business Profile enough?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A GBP gets you into the Map Pack, but a website backs up your credibility and captures searches that fall outside the three-pack. For most plumbers, the combination — a strong GBP and a lean, well-built website — outperforms either one alone.",
        },
      },
      {
        "@type": "Question",
        name: "I've already claimed my GBP. Isn't that enough?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Claiming it is the starting point. What drives rankings is the ongoing quality of your profile — category accuracy, service entries, photo volume and recency, review velocity, and how consistently your business information matches what's on your website and across directories. A claimed but neglected profile rarely beats an actively managed one.",
        },
      },
      {
        "@type": "Question",
        name: "What if I already have a few reviews? Do I still need to focus on that?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Review velocity matters as much as total count. A plumber who earned 5 reviews three years ago looks less active than one who earned 8 reviews in the last six months. Google weighs recency, and so do homeowners. A consistent review request process keeps that signal fresh.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with plumbers outside of Siloam Springs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — I work with home service trades across Northwest Arkansas, including Rogers, Bentonville, Fayetteville, Springdale, and surrounding areas.",
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
      { "@type": "ListItem", position: 3, name: "Siloam Springs", item: "https://www.localsearchally.com/service-areas/siloam-springs-ar" },
      { "@type": "ListItem", position: 4, name: "Plumber SEO", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiloamPlumbingClient auditUrl={auditUrl} />
    </>
  );
}

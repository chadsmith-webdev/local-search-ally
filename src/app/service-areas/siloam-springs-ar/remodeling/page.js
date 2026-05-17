import SiloamRemodelingClient from "@/components/SiloamRemodelingClient";

const pageUrl =
  "https://www.localsearchally.com/service-areas/siloam-springs-ar/remodeling";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Siloam Springs, AR Remodeling SEO | Local Search Ally",
    description:
      "Remodeling is the highest-stakes home decision a homeowner makes. I help Siloam Springs remodelers show up first when kitchens, baths, and additions get researched online.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Siloam Springs, AR Remodeling SEO | Local Search Ally",
      description:
        "Remodeling is the highest-stakes home decision a homeowner makes. I help Siloam Springs remodelers show up first when kitchens, baths, and additions get researched online.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Siloam Springs, AR Remodeling SEO | Local Search Ally",
      description:
        "Remodeling is the highest-stakes home decision a homeowner makes. I help Siloam Springs remodelers show up first when kitchens, baths, and additions get researched online.",
    },
  };
}

export default function SiloamSpringsRemodelingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for remodeling contractors in Siloam Springs, AR — Google Business Profile optimization, service pages, and citation building.",
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
        name: "Remodeling jobs come from referrals. Do I really need SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Referrals are how the homeowner hears your name. Google is where they decide if they actually call. Nearly every remodeling referral in Siloam Springs gets a second-opinion search before the phone rings — your name, your reviews, your project photos. If what they find online doesn't match what their neighbor said about you, the referral leaks. SEO doesn't replace referrals. It protects them.",
        },
      },
      {
        "@type": "Question",
        name: "My work is in private homes. I can't post addresses or before-and-afters publicly. How do I show proof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most of my remodeling clients had the same concern, and it's solvable. Interior project photography rarely shows anything identifying — a finished kitchen, a tiled walk-in shower, a built-in mudroom. The room is the proof, not the address. With written permission, the photos go on your GBP, your service pages, and your reviews. I help you build a release process that protects the homeowner and gives you the visual portfolio Google needs.",
        },
      },
      {
        "@type": "Question",
        name: "I do kitchens, baths, additions, and finish carpentry. Should one site cover all of it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'One site, separate pages. Homeowners researching a kitchen remodel don\'t search the same way someone planning a primary suite addition does — and Google knows that. A dedicated page for each major service type, each with its own photos, scope, and FAQ, ranks far better than a single "services" page that lists everything. The homepage anchors your brand. The service pages do the actual ranking work.',
        },
      },
      {
        "@type": "Question",
        name: "My typical job is $40k+. Are homeowners really finding contractors that way on Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Higher the ticket, deeper the research. A homeowner spending $40,000 on a kitchen will spend weeks comparing remodelers — GBP profile, photos, recent reviews, website portfolio, the Houzz profile, the Facebook page. They are not picking based on the first ad. They are vetting. If your GBP, reviews, and website hold up against scrutiny, you make the shortlist. If it doesn't, you get cut before the consultation is ever booked.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with remodelers outside Siloam Springs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — I work with home service trades across Northwest Arkansas, including Rogers, Bentonville, Fayetteville, Springdale, and surrounding communities.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.localsearchally.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://www.localsearchally.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Siloam Springs",
        item: "https://www.localsearchally.com/service-areas/siloam-springs-ar",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Remodeling SEO",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiloamRemodelingClient auditUrl={auditUrl} />
    </>
  );
}

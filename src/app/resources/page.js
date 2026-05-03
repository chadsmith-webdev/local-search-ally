import ResourcesHero from "@/components/ResourcesHero";
import ResourcesFeatured from "@/components/ResourcesFeatured";
import ResourcesGrid from "@/components/ResourcesGrid";
import FinalCTASection from "@/components/FinalCTASection";

export const metadata = {
  title: "Free Resources for NWA Contractors | Local Search Ally",
  description:
    "Free guides and reports on local SEO for NWA home service trades. No email required. Download the Invisibility Report to see what's costing you calls on Google.",
  alternates: {
    canonical: "https://www.localsearchally.com/resources",
  },
  openGraph: {
    title: "Free Resources for NWA Contractors | Local Search Ally",
    description:
      "Free guides and reports based on real NWA contractor visibility audits. No email gate — just useful.",
    url: "https://www.localsearchally.com/resources",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Resources — Local Search Ally",
  description:
    "Free local SEO guides and reports for NWA home service trade owners.",
  url: "https://www.localsearchally.com/resources",
  publisher: {
    "@type": "Person",
    name: "Chad Smith",
    url: "https://www.localsearchally.com/about",
  },
  hasPart: [
    {
      "@type": "DigitalDocument",
      name: "The Invisibility Report: NWA Edition",
      description:
        "Anonymized visibility audits of NWA contractors, showing the three most common local SEO gaps and how to check for them.",
      url: "https://www.localsearchally.com/downloads/invisibility-report.pdf",
      encodingFormat: "application/pdf",
    },
    {
      "@type": "DigitalDocument",
      name: "NWA Contractor Local SEO Checklist",
      description:
        "A 20-point self-audit checklist covering GBP, website, citations, reviews, and content for NWA home service trade owners.",
      url: "https://www.localsearchally.com/downloads/local-seo-checklist.pdf",
      encodingFormat: "application/pdf",
    },
    {
      "@type": "DigitalDocument",
      name: "Google Business Profile Optimization Checklist",
      description:
        "A step-by-step GBP audit covering all seven sections: basic info, hours, services, photos, posts, reviews, and Q&A.",
      url: "https://www.localsearchally.com/downloads/gbp-optimization-checklist.pdf",
      encodingFormat: "application/pdf",
    },
    {
      "@type": "DigitalDocument",
      name: "5 Reasons Your Phone Isn't Ringing",
      description:
        "A diagnostic guide identifying the five most common local visibility gaps costing NWA contractors calls every day.",
      url: "https://www.localsearchally.com/downloads/5-reasons-phone-not-ringing.pdf",
      encodingFormat: "application/pdf",
    },
  ],
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ResourcesHero />
        <ResourcesFeatured />
        <ResourcesGrid />
        <FinalCTASection />
      </main>
    </>
  );
}

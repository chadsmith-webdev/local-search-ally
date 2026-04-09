import ResourcesHero from "@/components/ResourcesHero";
import ResourcesFeatured from "@/components/ResourcesFeatured";
import FinalCTASection from "@/components/FinalCTASection";

export const metadata = {
  title: "Free Resources for NWA Contractors | Local Search Ally",
  description:
    "Free guides and reports on local SEO for NWA home service trades. No email required. Download the Invisibility Report to see what's costing you calls on Google.",
  alternates: {
    canonical: "https://localsearchally.com/resources",
  },
  openGraph: {
    title: "Free Resources for NWA Contractors | Local Search Ally",
    description:
      "Free guides and reports based on real NWA contractor visibility audits. No email gate — just useful.",
    url: "https://localsearchally.com/resources",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Resources — Local Search Ally",
  description:
    "Free local SEO guides and reports for NWA home service trade owners.",
  url: "https://localsearchally.com/resources",
  publisher: {
    "@type": "Person",
    name: "Chad Smith",
    url: "https://localsearchally.com/about",
  },
  hasPart: [
    {
      "@type": "DigitalDocument",
      name: "The Invisibility Report: NWA Edition",
      description:
        "Anonymized visibility audits of NWA contractors, showing the three most common local SEO gaps and how to check for them.",
      url: "https://localsearchally.com/downloads/invisibility-report.pdf",
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
        <FinalCTASection />
      </main>
    </>
  );
}

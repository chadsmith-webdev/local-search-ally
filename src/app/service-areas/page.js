import ServiceAreasPageClient from "@/components/ServiceAreasPageClient";
import { serviceAreasLandingContent } from "@/content/serviceAreasLanding";

export const metadata = {
  title: serviceAreasLandingContent.metadata.title,
  description: serviceAreasLandingContent.metadata.description,
  alternates: {
    canonical: serviceAreasLandingContent.metadata.canonical,
  },
  openGraph: serviceAreasLandingContent.metadata.openGraph,
  twitter: {
    card: "summary_large_image",
    title: serviceAreasLandingContent.metadata.openGraph.title,
    description: serviceAreasLandingContent.metadata.openGraph.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.localsearchally.com/service-areas",
  name: "Service Areas | Local Search Ally",
  description: serviceAreasLandingContent.metadata.description,
  url: serviceAreasLandingContent.metadata.canonical,
  author: { "@id": "https://www.localsearchally.com/about#chad-smith" },
  publisher: { "@id": "https://www.localsearchally.com/#localbusiness" },
};

const breadcrumbSchema = {
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
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceAreasPageClient content={serviceAreasLandingContent} />
    </>
  );
}

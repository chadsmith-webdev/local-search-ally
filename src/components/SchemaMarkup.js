import { siteConfig } from "@/lib/metadata";

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Local Search Ally",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    telephone: "+14793808626",
    email: "contact@localsearchally.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Siloam Springs",
      addressRegion: "AR",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "14:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "State",
        name: "Arkansas",
      },
      {
        "@type": "AdministrativeArea",
        name: "United States",
      },
    ],
    serviceType: [
      "Local SEO",
      "Web Development",
      "Google Business Profile Optimization",
      "SEO Audits",
    ],
    priceRange: "$$",
    sameAs: [
      "https://calendly.com/smithchadlamont/30min",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
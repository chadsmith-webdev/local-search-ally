import { siteConfig } from "@/lib/metadata";
import { faqs } from "@/lib/faqs";

export default function SchemaMarkup() {
  const businessSchema = {
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
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "12:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "14:00", closes: "18:00" },
    ],
    areaServed: [
      { "@type": "City", name: "Siloam Springs", containedIn: "Arkansas" },
      { "@type": "City", name: "Bentonville", containedIn: "Arkansas" },
      { "@type": "City", name: "Rogers", containedIn: "Arkansas" },
      { "@type": "City", name: "Springdale", containedIn: "Arkansas" },
      { "@type": "City", name: "Fayetteville", containedIn: "Arkansas" },
      { "@type": "City", name: "Fort Smith", containedIn: "Arkansas" },
      { "@type": "State", name: "Arkansas" },
      { "@type": "State", name: "North Carolina" },
    ],
    serviceType: ["Local SEO", "Web Development", "Google Business Profile Optimization", "SEO Audits", "Reputation Building", "Content & Keywords"],
    priceRange: "$$",
    sameAs: ["https://calendly.com/smithchadlamont/30min"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
    { "@type": "ListItem", position: 3, name: "Portfolio", item: `${siteConfig.url}/portfolio` },
    { "@type": "ListItem", position: 4, name: "Blog", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 5, name: "About", item: `${siteConfig.url}/about` },
    { "@type": "ListItem", position: 6, name: "Contact", item: `${siteConfig.url}/contact` },
    { "@type": "ListItem", position: 7, name: "Service Areas", item: `${siteConfig.url}/locations` },
  ],
};

  return (
    <div style={{ display: "none" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
/>
    </div>
  );
}
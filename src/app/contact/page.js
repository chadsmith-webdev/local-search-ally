import ContactClient from "@/components/ContactClient.jsx";

export const metadata = {
  title: "Contact Chad Smith | Local Search Ally — Strategy Call & Audits",
  description:
    "Let's talk about your local SEO. Book a free strategy call or send a message to Chad Smith in Siloam Springs, AR. No pitch, no pressure.",
  alternates: {
    canonical: "https://www.localsearchally.com/contact",
  },
  openGraph: {
    title: "Contact Chad Smith | Local Search Ally",
    description:
      "One person in Siloam Springs helping NWA contractors stop being invisible online. No contracts. No black box marketing.",
    url: "https://www.localsearchally.com/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  dateModified: "2026-04-29",
  name: "Contact Local Search Ally",
  description:
    "Contact Chad Smith for Local SEO services in Northwest Arkansas.",
  url: "https://www.localsearchally.com/contact",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+14793808626",
    contactType: "customer service",
    email: "chad@localsearchally.com",
    areaServed: "Northwest Arkansas",
    availableLanguage: "en",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.localsearchally.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.localsearchally.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactClient />
    </>
  );
}

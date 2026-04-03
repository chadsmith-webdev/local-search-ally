import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact Chad Smith | Local Search Ally — Strategy Call & Audits",
  description:
    "Let's talk about your local SEO. Book a free strategy call or send a message to Chad Smith in Siloam Springs, AR. No pitch, no pressure.",
  openGraph: {
    title: "Contact Chad Smith | Local Search Ally",
    description:
      "One person in Siloam Springs helping NWA contractors stop being invisible online. No contracts. No black box marketing.",
    url: "https://localsearchally.com/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Local Search Ally",
  description:
    "Contact Chad Smith for Local SEO services in Northwest Arkansas.",
  url: "https://localsearchally.com/contact",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+14793808626",
    contactType: "customer service",
    email: "chad@localsearchally.com",
    areaServed: "Northwest Arkansas",
    availableLanguage: "en",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}

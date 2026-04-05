import CityHero from "@/components/CityHero";
import CityWhy from "@/components/CityWhy";
import CityLocalStats from "@/components/CityLocalStats";
import CityProcess from "@/components/CityProcess";
import CityFinal from "@/components/CityFinal";

export const metadata = {
  title: "Rogers Contractor SEO | Get Found on Google | Local Search Ally",
  description:
    "Local SEO for Rogers, AR contractors. Get ranked higher on Google Maps, dominate search results, and book more calls. No contracts. Results in 30 days.",
  openGraph: {
    title: "Rogers Contractor SEO | Get Found on Google",
    description:
      "Local SEO for Rogers, AR contractors. No contracts. Get ranked in the Map Pack.",
    url: "https://localsearchally.com/service-areas/rogers",
    type: "website",
  },
  alternates: {
    canonical: "https://localsearchally.com/service-areas/rogers",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Local Search Ally",
  description: "Local SEO for Rogers, AR contractors",
  telephone: "+14793808626",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rogers",
    addressRegion: "AR",
    postalCode: "72756",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Rogers, AR",
  },
  serviceType: ["Local SEO", "Web Design", "GBP Optimization"],
  url: "https://localsearchally.com",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long until I see results from local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some contractors see calls in week 2 of month 1 from fixing their Google Business Profile alone. Most see consistent volume (3–5 calls/month) by month 2. By month 3, you're typically in the Map Pack for priority keywords.",
      },
    },
    {
      "@type": "Question",
      name: "What if a competitor has been ranking for years?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO changes quickly. Dominance in the Map Pack isn't permanent. We've displaced competitors ranked #1 for 5+ years. Usually takes 2–3 months of consistent optimization (more reviews, better photos, more engagement).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need paid ads with local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Paid ads and local SEO are separate strategies. Local SEO—when done right—gives you free, repeatable calls. Paid ads cost money every month and stop when you stop paying. We focus on organic local search first.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already have a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good. We'll optimize it for local search. If it's not mobile-friendly or doesn't mention Rogers and your service areas, we fix that. You keep your existing website; we make it work for local search.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with other cities like Bentonville or Springdale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I serve all of Northwest Arkansas including Rogers, Bentonville, Fayetteville, Springdale, and surrounding areas. We recommend focusing on one city at a time. Get Rogers dialed in first, then expand.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't get calls after 3 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're not ranking in the Map Pack after 3 months, we keep optimizing free until you are. The only exception is if you don't follow our review system or stop updating your Google Business Profile.",
      },
    },
  ],
};

export default function RogersPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <CityHero
          city='Rogers'
          state='AR'
          population='67,000+'
          punchline="Invisible on Google? You're losing calls to contractors ranking above you."
        />
        <CityWhy city='Rogers' />
        <CityLocalStats city='Rogers' />
        <CityProcess />
        <CityFinal city='Rogers' ctaText='Get Your Free Rogers Audit' />
      </main>
    </>
  );
}

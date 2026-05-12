import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import FinalCTASection from "@/components/FinalCTASection";
// Legacy sections preserved in /components but removed from homepage


export const metadata = {
  title: "Local SEO for NWA Contractors | Local Search Ally",
  description:
    "NWA home service contractors are invisible in the Google Map Pack — and losing calls because of it. I fix the three root causes: incomplete GBP, inconsistent citations, and weak local signals. No contracts. Free audit.",
  alternates: {
    canonical: "https://www.localsearchally.com",
  },
  openGraph: {
    title: "Local SEO for NWA Contractors | Local Search Ally",
    description:
      "NWA home service contractors are invisible in the Google Map Pack — and losing calls because of it. I fix the three root causes: incomplete GBP, inconsistent citations, and weak local signals. No contracts. Free audit.",
    url: "https://www.localsearchally.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.localsearchally.com/#localbusiness",
  name: "Local Search Ally",
  dateModified: "2026-05-03",
  description:
    "Local SEO and web development for NWA home service trades — HVAC, plumbing, roofing, electrical, landscaping, and remodeling.",
  url: "https://www.localsearchally.com",
  telephone: "+14793808626",
  image: "https://www.localsearchally.com/icon.png",
  founder: { "@id": "https://www.localsearchally.com/about#chad-smith" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Siloam Springs",
    addressRegion: "AR",
    postalCode: "72761",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.18808",
    longitude: "-94.54064",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-12:00", "Su 14:00-18:00"],
  areaServed: [
    {
      "@type": "City",
      name: "Rogers",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Bentonville",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Fayetteville",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Springdale",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Siloam Springs",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    { "@type": "AdministrativeArea", name: "Northwest Arkansas" },
  ],
  knowsAbout: [
    "Local SEO",
    "Google Business Profile",
    "Web Development",
    "Contractor Marketing",
  ],
  sameAs: [
    "https://www.linkedin.com/in/chadsmith_localsearchally",
    "https://www.facebook.com/localsearchally",
    "https://www.youtube.com/@chadsmith_localsearchally",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "1",
    reviewCount: "1",
  },
  priceRange: "$$",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.localsearchally.com/about#chad-smith",
  name: "Chad Smith",
  jobTitle: "Local SEO Specialist",
  url: "https://www.localsearchally.com/about",
  telephone: "+14793808626",
  worksFor: {
    "@id": "https://www.localsearchally.com/#localbusiness",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Siloam Springs",
    addressRegion: "AR",
    addressCountry: "US",
  },
  knowsAbout: [
    "Local SEO",
    "Google Business Profile Optimization",
    "Citation Building",
    "Contractor Marketing",
    "Northwest Arkansas",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-05-03",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does my business need a Google Business Profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your GBP is your digital storefront on Google. Without it, you're invisible to nearly half your potential customers — the ones actively searching for a local service provider. It's the single highest-impact tool for local visibility, and it's free.",
      },
    },
    {
      "@type": "Question",
      name: "What is NAP consistency and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NAP stands for Name, Address, and Phone number. If your business information is listed differently across the web — even small differences like 'St.' vs. 'Street' — search engines lose confidence in your data and lower your rankings. Consistent listings tell Google you're a legitimate, active business.",
      },
    },
    {
      "@type": "Question",
      name: "I have good reviews. Why am I still not ranking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reviews are one signal, not the whole picture. Google also looks for engagement — responding to reviews, posting updates, keeping your profile active. An account with good reviews but no activity looks dormant to the algorithm. Active businesses respond. That signal matters.",
      },
    },
    {
      "@type": "Question",
      name: "How much does local SEO cost for a contractor in Northwest Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO at Local Search Ally starts at $497/month with no long-term contract. You pay month-to-month and can stop any time. There are no setup fees and no retainer lock-in. A free SEO audit is available before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to rank in the Google Map Pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most NWA contractors see measurable movement in the Map Pack within 60–90 days of consistent optimization. Timeline depends on current profile completeness, competition in your trade and city, and how quickly citations are cleaned up.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between local SEO and regular SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular SEO targets national or broad keyword rankings. Local SEO targets searches within a specific geography — 'HVAC repair Rogers AR' or 'plumber near me.' It prioritizes your Google Business Profile and Map Pack placement, not just website rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do local SEO myself or do I need help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can handle the basics — claiming your GBP and filling it out completely. But consistent citation building, profile activity, on-page optimization, and tracking take 5–10 hours a month to do properly. Most trade owners don't have that time.",
      },
    },
    {
      "@type": "Question",
      name: "What is a citation and why does it matter for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A citation is any online listing that shows your business name, address, and phone number. Directories like Yelp, Angi, and the BBB are examples. Consistent, accurate citations across the web build Google's confidence that your business is real and active.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my competitor rank above me even though I have more reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reviews are one of many Map Pack signals. Competitors often outrank businesses with more reviews because they have a more complete GBP, stronger citation consistency, more relevant categories selected, or more engagement on their profile.",
      },
    },
    {
      "@type": "Question",
      name: "What does Google Business Profile optimization actually involve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GBP optimization means completing every profile field, selecting the right primary and secondary categories, uploading photos regularly, posting weekly updates, responding to every review, and adding services with keyword-rich descriptions.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a website if I already have a Google Business Profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your GBP gets you into the Map Pack, but searchers click through to your website to decide whether to call. A slow, outdated, or vague website loses the conversion after local SEO wins the ranking. Both work together.",
      },
    },
    {
      "@type": "Question",
      name: "What trades do you work with in Northwest Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local Search Ally works with home service trades in NWA — HVAC, plumbing, roofing, electrical, landscaping, and remodeling. These trades share the same local search patterns and benefit most from Map Pack visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Local Search Ally located and what areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local Search Ally is based in Siloam Springs, AR. Chad Smith serves NWA home service trades across Rogers, Bentonville, Fayetteville, Springdale, Siloam Springs, Centerton, Bella Vista, Lowell, and Cave Springs.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my local SEO is actually working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should see movement in GBP insights — searches, views, and call clicks. Monthly reports from Local Search Ally show ranking positions, Google Business Profile activity, and actions taken. No black box, no jargon.",
      },
    },
    {
      "@type": "Question",
      name: "What is the first step to getting started with Local Search Ally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Run the free SEO audit at audit.localsearchally.com. It shows your current Map Pack visibility, GBP completeness, and top citation gaps — no email required, no sales call triggered automatically.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Google Map Pack and why do NWA contractors need to be in it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Google Map Pack is the block of three local business listings that appears at the top of Google search results for queries like 'HVAC repair Rogers AR' or 'plumber near me.' Research shows 42% of local search clicks go to these three listings. Contractors outside the Map Pack get almost no organic search traffic from Google, regardless of how good their reviews are.",
      },
    },
    {
      "@type": "Question",
      name: "How is Local Search Ally different from a digital marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local Search Ally is one person — Chad Smith — focused on one specialty: local SEO for NWA home service trades. There's no account manager, no generalist team, no PPC upsell. Every client gets direct access to Chad, a cell number that gets answered, and a monthly report written in plain English. No contracts, no setup fees, cancel anytime.",
      },
    },
    {
      "@type": "Question",
      name: "Is local SEO worth the investment for a small home service company in Northwest Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a trade business in NWA, local SEO is the highest-ROI marketing channel available. A single additional job per week from search — at average ticket prices for HVAC, plumbing, or roofing — covers the cost of local SEO many times over. Unlike paid ads, the results compound over time rather than stopping when the budget runs out.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI search tools like ChatGPT find my contracting business in Northwest Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI tools like ChatGPT and Perplexity pull from Google Business Profiles, your website, and trusted directories when answering local service questions. If your GBP is incomplete or your citations are inconsistent, you're likely invisible to both traditional Google search and AI-generated recommendations. The same foundational fixes — complete profile, accurate citations, clear service pages — improve visibility in both.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <FinalCTASection />
    </>
  );
}

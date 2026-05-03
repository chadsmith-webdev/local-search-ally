import ReputationHero from "@/components/ReputationHero";
import ReputationProblem from "@/components/ReputationComponents/Problem";
import ReputationSolution from "@/components/ReputationComponents/Solution";
import ReputationProcess from "@/components/ReputationComponents/Process";
import ReputationHowItWorks from "@/components/ReputationComponents/HowItWorks";
import ReputationProof from "@/components/ReputationComponents/Proof";
import ReputationFAQ from "@/components/ReputationComponents/FAQ";
import FinalCTA from "@/components/FinalCTASection";

export const metadata = {
  title: "Reputation Management for Contractors | NWA | Local Search Ally",
  description:
    "Build your online reputation with a proven review strategy. Increase positive reviews, manage responses, and build customer trust. For NWA contractors.",
  keywords:
    "reputation management, review management, online reviews, customer reviews, NWA contractor reviews",
  openGraph: {
    title: "Reputation Management for Contractors",
    description:
      "Reviews affect rankings and customer trust. I'll help you build a system that brings in positive reviews from happy customers.",
    url: "https://www.localsearchally.com/services/reputation-management",
    siteName: "Local Search Ally",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.localsearchally.com/services/reputation-management",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do reviews affect my Google rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google includes review quantity and rating as ranking factors. More positive reviews and a higher overall rating improve your visibility in the map pack. Reviews also influence customer trust — 46% of consumers read reviews before making a decision.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already have negative reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Negative reviews happen. I can't delete them (and I won't try illegally), but I can help you respond professionally, show customers you care about feedback, and build a strategy to generate positive reviews that outweigh the negative. One bad review among many positive ones isn't a problem.",
      },
    },
    {
      "@type": "Question",
      name: "Can you write fake reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Fake reviews are against Google's policies and they get removed. Plus, they're unethical. What I do is give you a system to ask happy customers to leave reviews — ethically and legally. You'll be amazed how many happy customers will leave a review if you ask.",
      },
    },
    {
      "@type": "Question",
      name: "How many reviews do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "More is better, but even 5-10 positive reviews make a difference. I focus on helping you build a consistent stream of reviews from real customers. The goal is quality over quantity.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reputation Management for Contractors",
  description:
    "Review management and reputation building for contractors. Includes review request strategy and response management.",
  areaServed: [
    "Rogers, AR",
    "Bentonville, AR",
    "Fayetteville, AR",
    "Springdale, AR",
    "Siloam Springs, AR",
  ],
  provider: {
    "@type": "LocalBusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
  },
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
      name: "Services",
      item: "https://www.localsearchally.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Reputation Management",
      item: "https://www.localsearchally.com/services/reputation-management",
    },
  ],
};

export default function ReputationPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ReputationHero />
      <ReputationProblem />
      <ReputationSolution />
      <ReputationProcess />
      <ReputationHowItWorks />
      <ReputationProof />
      <ReputationFAQ />
      <FinalCTA />
    </>
  );
}

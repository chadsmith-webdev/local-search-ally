import GraderClient from "./GraderClient";

export const metadata = {
  title: "Free Local SEO Grader for Contractors | Local Search Ally",
  description: "Answer 10 questions about your Google listing, website, and reviews. Get a score out of 100 and see the exact gaps costing you calls. No signup required.",
  alternates: {
    canonical: "https://localsearchally.com/grader",
  },
};

export default function GraderPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Local SEO Visibility Grader",
    "description": "A 60-second diagnostic tool for contractors to identify gaps in their local search visibility.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this actually free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. No credit card, no trial period, no account. You answer 10 questions and get your score. If you want the full written report emailed to you, that's also free — I just ask for your email address."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The grader runs entirely in your browser. Your answers and score aren't stored anywhere unless you choose to email yourself the report."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is this?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Accurate enough to find the real gaps. The grader doesn't crawl your site or pull live data from Google — it's based on your answers."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GraderClient />
    </>
  );
}

import { getAllPosts } from "@/lib/posts";
import HomeClient from "@/components/HomeClient";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/metadata";

export const metadata = {
  title: "Local Search Ally | Local SEO & Web Dev for NWA Contractors",
  description:
    "Local SEO and web development for NWA contractors. Get found on Google, get more calls, and win more jobs. Based in Siloam Springs, AR.",
};

export default function Home() {
  const posts = getAllPosts();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.schemaAnswer,
      },
    })),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient posts={posts} />
    </>
  );
}

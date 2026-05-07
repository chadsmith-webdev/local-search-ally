import { getAllPosts } from "@/lib/posts";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Local SEO Blog for NWA Contractors | Local Search Ally",
  description:
    "Practical local SEO guides written by Chad Smith — covering Google Business Profile optimization, Map Pack rankings, citation building, and review strategy for NWA home service trades. No theory, no fluff.",
  authors: [
    { name: "Chad Smith", url: "https://www.localsearchally.com/about" },
  ],
  alternates: {
    canonical: "https://www.localsearchally.com/blog",
  },
  openGraph: {
    title: "Local SEO Blog for NWA Contractors | Local Search Ally",
    description:
      "Practical local SEO guides for NWA home service trades. No fluff — just what actually moves the Map Pack needle for HVAC, plumbing, roofing, and electrical contractors.",
    url: "https://www.localsearchally.com/blog",
    siteName: "Local Search Ally",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Local SEO Blog for NWA Contractors | Local Search Ally",
    description:
      "Practical local SEO guides for NWA home service trades — HVAC, plumbing, roofing, electrical, and remodeling. Written by Chad Smith, Local Search Ally.",
    url: "https://www.localsearchally.com/blog",
    author: { "@id": "https://www.localsearchally.com/about#chad-smith" },
    publisher: { "@id": "https://www.localsearchally.com/#localbusiness" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.localsearchally.com/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  const breadcrumbJsonLd = {
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
        name: "Blog",
        item: "https://www.localsearchally.com/blog",
      },
    ],
  };

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

      <BlogClient posts={posts} />
    </>
  );
}

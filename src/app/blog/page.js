import { getAllPosts } from "@/lib/posts";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Local SEO Blog for NWA Contractors | Local Search Ally",
  description:
    "Practical local SEO guides written by Chad Smith — covering Google Business Profile optimization, Map Pack rankings, citation building, and review strategy for NWA home service trades. No theory, no fluff.",
  authors: [{ name: "Chad Smith", url: "https://www.localsearchally.com/about" }],
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Server-rendered editorial intro — visible to crawlers, not hidden in client bundle */}
      <div className="blog-intro-wrap">
        <div className="blog-intro-inner">
          <p className="blog-intro-label">All posts by Chad Smith, Founder — Local Search Ally</p>
          <h1 className="blog-intro-title">Local SEO Guides for NWA Contractors</h1>
          <p className="blog-intro-body">
            Most local SEO advice is written for national brands or e-commerce stores.
            This blog is different — every guide is written specifically for home service
            trade businesses in Northwest Arkansas: HVAC companies, plumbers, roofers,
            electricians, and remodelers trying to win more calls from Google.
          </p>
          <p className="blog-intro-body">
            You won&apos;t find generic tips here. I cover what actually moves the needle
            for Map Pack rankings in competitive NWA markets — Google Business Profile
            optimization, citation consistency, review velocity, and on-page signals
            that Google uses to decide who gets called and who gets skipped.
          </p>
          <p className="blog-intro-body">
            Each post is based on real audits and real results from working with NWA contractors.
            If you want to know where your business stands right now, run the{" "}
            <a href={process.env.NEXT_PUBLIC_AUDIT_URL}>free local SEO audit</a> — it takes
            90 seconds and requires no email to start.
          </p>
        </div>
      </div>

      <BlogClient posts={posts} />
    </>
  );
}

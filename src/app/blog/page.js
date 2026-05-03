import { getAllPosts } from "@/lib/posts";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | Local Search Ally",
  description: "Local SEO tips and contractor marketing strategies from Local Search Ally.",
  alternates: {
    canonical: "https://www.localsearchally.com/blog",
  },
  openGraph: {
    title: "Blog | Local Search Ally",
    description: "Local SEO tips and contractor marketing strategies from Local Search Ally.",
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
    name: "Blog | Local Search Ally",
    description: "Local SEO tips and contractor marketing strategies from Local Search Ally.",
    url: "https://www.localsearchally.com/blog",
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
      <BlogClient posts={posts} />
    </>
  );
}

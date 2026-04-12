import { getAllPosts } from "@/lib/posts";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | Local Search Ally",
  description: "Local SEO tips and contractor marketing strategies from Local Search Ally.",
  openGraph: {
    title: "Blog | Local Search Ally",
    description: "Local SEO tips and contractor marketing strategies from Local Search Ally.",
    url: "https://localsearchally.com/blog",
    siteName: "Local Search Ally",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}

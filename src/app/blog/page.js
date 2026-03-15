import { getAllPosts } from "@/lib/posts";
import BlogClient from "@/components/BlogClient";

export const metadata = {
  title: "Blog | Local Search Ally",
  description: "Local SEO tips, web development insights, and contractor marketing strategies.",
};

export default function Blog() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}
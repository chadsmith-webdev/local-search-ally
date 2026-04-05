import { getAllPosts } from "@/lib/posts";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | Local Search Ally",
  description: "Local SEO tips and contractor marketing strategies from Local Search Ally.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}

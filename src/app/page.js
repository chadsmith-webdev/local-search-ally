import { getAllPosts } from "@/lib/posts";
import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "Local Search Ally | Local SEO & Web Development for NWA Contractors",
  description: "Helping NWA contractors get found on Google. Local SEO, web development, and GBP optimization based in Siloam Springs, AR.",
};

export default function Home() {
  const posts = getAllPosts();
  return <HomeClient posts={posts} />;
}
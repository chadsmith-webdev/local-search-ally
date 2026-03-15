import { getAllPosts } from "@/lib/posts";
import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "Local Search Ally | Local SEO & Web Development for NWA Contractors",
  description: "Local SEO and web development for NWA contractors. We help you rank higher on Google, get more calls, and win more jobs. Based in Siloam Springs, AR.",
};

export default function Home() {
  const posts = getAllPosts();
  return <HomeClient posts={posts} />;
}
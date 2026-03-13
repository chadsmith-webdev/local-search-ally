import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Local Search Ally",
  description: "Local SEO tips, web development insights, and contractor marketing strategies.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1rem" }}>
          The Blog
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: "800", marginBottom: "1rem" }}>
          SEO Tips, Case Studies & More
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Practical advice for contractors who want to grow their online presence.
        </p>
      </div>

      {/* Post List */}
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
            <div style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--duke)",
              borderRadius: "10px",
              padding: "2rem",
              transition: "border-color 0.2s",
            }}>
              <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--text)" }}>
                {post.title}
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7, margin: "0 0 1rem" }}>
                {post.description}
              </p>
              <span style={{ color: "var(--carolina)", fontSize: "0.9rem", fontWeight: "bold" }}>
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
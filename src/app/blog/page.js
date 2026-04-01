import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog | Local Search Ally",
  description: "Local SEO tips and contractor marketing strategies from Local Search Ally.",
};

const C = {
  carolina: "#7bafd4",
  carolinaDim: "rgba(123,175,212,0.12)",
  muted: "#888888",
  border: "rgba(255,255,255,0.08)",
  surface: "#141414",
  surface2: "#1e1e1e",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(3rem, 8vw, 5rem) clamp(1.25rem, 4vw, 2rem)" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{
            fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em",
            textTransform: "uppercase", color: C.carolina, fontFamily: "var(--font-ui)",
            marginBottom: 10,
          }}>
            Local Search Ally
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em",
            color: "#f0f0f0", margin: "0 0 12px",
          }}>
            Blog
          </h1>
          <p style={{ color: C.muted, fontSize: "0.95rem", fontFamily: "var(--font-ui)", lineHeight: 1.6 }}>
            Local SEO tips and contractor marketing strategies.
          </p>
        </div>

        {/* Post list */}
        <style>{`
          .blog-card { background: #141414; border-radius: 8px; overflow: hidden; display: flex; border: 1px solid rgba(255,255,255,0.08); transition: border-color 0.15s, background 0.15s; text-decoration: none; }
          .blog-card:hover { border-color: rgba(123,175,212,0.2); background: #1e1e1e; }
        `}</style>
        <div style={{ display: "grid", gap: 12 }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <article style={{ display: "flex", width: "100%" }}>
                {post.image && (
                  <div style={{ width: 140, flexShrink: 0, overflow: "hidden" }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={280}
                      height={180}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                )}
                <div style={{ padding: "18px 20px", flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                    {post.tags?.slice(0, 2).map(tag => (
                      <span key={tag} style={{
                        fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.12em",
                        textTransform: "uppercase", color: C.carolina,
                        background: C.carolinaDim, borderRadius: 100,
                        padding: "3px 9px", fontFamily: "var(--font-ui)",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "1rem", lineHeight: 1.35, letterSpacing: "-0.01em",
                    color: "#f0f0f0", margin: "0 0 6px",
                  }}>
                    {post.title}
                  </h2>
                  <p style={{
                    color: C.muted, fontSize: "0.82rem", lineHeight: 1.5,
                    margin: "0 0 12px", fontFamily: "var(--font-ui)",
                    display: "-webkit-box", WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical", overflow: "hidden",
                  }}>
                    {post.description}
                  </p>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <span style={{ fontSize: "0.7rem", color: "#555", fontFamily: "var(--font-mono)" }}>
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </span>
                    <span style={{ fontSize: "0.7rem", color: "#555", fontFamily: "var(--font-mono)" }}>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}

        </div>

        {/* CTA */}
        <div style={{
          marginTop: 56, background: "#141414", borderRadius: 8,
          padding: "28px 24px", textAlign: "center",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <p style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "1.1rem", color: "#f0f0f0", marginBottom: 8,
          }}>
            Want to see how your business ranks?
          </p>
          <p style={{ color: C.muted, fontSize: "0.84rem", fontFamily: "var(--font-ui)", marginBottom: 18 }}>
            Run a free AI-powered local SEO audit — 90 seconds, no account needed.
          </p>
          <Link href="/audit" style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #7bafd4 0%, #4A6B8A 100%)",
            color: "#1e2a3a", fontWeight: 600, fontSize: "0.72rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "var(--font-mono)",
            padding: "11px 24px", borderRadius: 6, textDecoration: "none",
          }}>
            Run Free Audit →
          </Link>
        </div>
      </div>
    </div>
  );
}

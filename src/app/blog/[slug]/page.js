import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

const mdxComponents = {
  img: ({ src, alt }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={450}
      style={{ width: "100%", height: "auto", borderRadius: 8, margin: "2rem 0" }}
    />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { metadata } = getPostBySlug(slug);
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const { metadata, content } = getPostBySlug(slug);
  const readTime = Math.ceil(content.trim().split(/\s+/).length / 200);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.25rem, 4vw, 2rem)" }}>

        {/* Feature Image */}
        {metadata.image && (
          <div style={{ marginBottom: "2.5rem", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Image
              src={metadata.image}
              alt={metadata.title}
              width={1200}
              height={630}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        )}

        {/* Tags */}
        {metadata.tags?.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
            {metadata.tags.map(tag => (
              <span key={tag} style={{
                fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#7bafd4",
                background: "rgba(123,175,212,0.12)", borderRadius: 100,
                padding: "3px 10px", fontFamily: "var(--font-ui)",
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em",
          color: "#f0f0f0", margin: "0 0 14px",
        }}>
          {metadata.title}
        </h1>

        <p style={{ color: "#888", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 20px", fontFamily: "var(--font-ui)" }}>
          {metadata.description}
        </p>

        {/* Byline */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          paddingBottom: 24, marginBottom: 32,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden", border: "2px solid #7bafd4", flexShrink: 0 }}>
            <Image src="/images/chad.avif" alt="Chad Smith" width={36} height={36} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <p style={{ color: "#f0f0f0", fontWeight: 600, margin: 0, fontSize: "0.88rem", fontFamily: "var(--font-ui)" }}>Chad Smith</p>
            <p style={{ color: "#555", margin: 0, fontSize: "0.72rem", fontFamily: "var(--font-mono)" }}>
              {new Date(metadata.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              {" · "}
              {readTime} min read
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        {/* Author bio */}
        <div style={{
          marginTop: "3.5rem", padding: "24px",
          background: "#141414", borderRadius: 8,
          borderLeft: "3px solid #7bafd4",
          display: "grid", gridTemplateColumns: "64px 1fr", gap: 20,
        }}>
          <div style={{ borderRadius: "50%", overflow: "hidden", border: "2px solid #7bafd4" }}>
            <Image src="/images/chad.avif" alt="Chad Smith" width={64} height={64} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div>
            <p style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7bafd4", margin: "0 0 4px", fontFamily: "var(--font-ui)" }}>Written by</p>
            <p style={{ color: "#f0f0f0", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 6px", fontFamily: "var(--font-ui)" }}>Chad Smith</p>
            <p style={{ color: "#888", fontSize: "0.84rem", lineHeight: 1.7, margin: "0 0 12px", fontFamily: "var(--font-ui)" }}>
              Founder of Local Search Ally. Helping NWA contractors get found on Google. Based in Siloam Springs, AR.
            </p>
          </div>
        </div>

        {/* Nav */}
        <div style={{
          marginTop: "2.5rem", paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <Link href="/blog" style={{ color: "#888", textDecoration: "none", fontSize: "0.84rem", fontFamily: "var(--font-ui)" }}>
            ← Back to Blog
          </Link>
          <Link href="/audit" style={{
            background: "linear-gradient(135deg, #7bafd4 0%, #4A6B8A 100%)",
            color: "#1e2a3a", fontWeight: 600, fontSize: "0.7rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "var(--font-mono)",
            padding: "10px 20px", borderRadius: 6, textDecoration: "none",
          }}>
            Run Free Audit →
          </Link>
        </div>
      </div>
    </div>
  );
}

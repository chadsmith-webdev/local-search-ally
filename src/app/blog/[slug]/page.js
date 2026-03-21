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
      style={{ width: "100%", height: "auto", borderRadius: "8px", margin: "2rem 0" }}
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
    title: `${metadata.title} | Local Search Ally`,
    description: metadata.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const { metadata, content } = getPostBySlug(slug);

  return (
    <div style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem" }}>

      <style>{`
  @media (max-width: 768px) {
    .author-bio { grid-template-columns: 1fr !important; }
    .post-nav { flex-direction: column !important; align-items: flex-start !important; }
  }
`}</style>

      {/* Feature Image */}
      {metadata.image && (
        <div style={{ marginBottom: "3rem", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--duke)" }}>
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

      {/* Post Header */}
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
          {metadata.tags && metadata.tags.map((tag) => (
            <span key={tag} style={{
              backgroundColor: "rgba(1,33,105,0.4)",
              border: "1px solid var(--duke)",
              color: "var(--muted)",
              fontSize: "0.7rem",
              padding: "0.2rem 0.65rem",
              borderRadius: "100px",
            }}>
              {tag}
            </span>
          ))}
        </div>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: "800", lineHeight: 1.2, marginBottom: "1rem" }}>
          {metadata.title}
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          {metadata.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingBottom: "2rem", borderBottom: "1px solid var(--duke)" }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid var(--carolina)",
            flexShrink: 0,
          }}>
            <Image
              src="/images/chad.jpg"
              alt="Chad Smith"
              width={40}
              height={40}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
  <p style={{ color: "var(--text)", fontWeight: "600", margin: 0, fontSize: "0.9rem" }}>Chad Smith</p>
  <p style={{ color: "var(--muted)", margin: 0, fontSize: "0.8rem" }}>
    {new Date(metadata.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
    {" · "}
    {(() => {
      const words = content.trim().split(/\s+/).length;
      return `${Math.ceil(words / 200)} min read`;
    })()}
  </p>
</div>
        </div>
      </div>

      {/* Post Content */}
      <div className="prose">
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      {/* Author Bio */}
      <div className="author-bio" style={{
        marginTop: "4rem",
        backgroundColor: "var(--surface)",
        border: "1px solid var(--duke)",
        borderLeft: "4px solid var(--carolina)",
        borderRadius: "0 10px 10px 0",
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "80px 1fr",
        gap: "1.5rem",
        alignItems: "start",
      }}>
        <div style={{ borderRadius: "50%", overflow: "hidden", border: "2px solid var(--carolina)" }}>
          <Image
            src="/images/chad.avif"
            alt="Chad Smith"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <div>
          <p style={{ color: "var(--carolina)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", marginBottom: "0.4rem" }}>
            Written by
          </p>
          <p style={{ color: "var(--text)", fontWeight: "800", fontSize: "1.05rem", marginBottom: "0.5rem" }}>Chad Smith</p>
          <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Founder of Local Search Ally. 5+ years of hands-on local SEO experience, currently pursuing a Web Development degree. Based in Siloam Springs, AR — helping NWA contractors get found online.
          </p>
          <Link href="/about" style={{ color: "var(--carolina)", fontSize: "0.875rem", fontWeight: "bold", textDecoration: "none" }}>
            More about Chad →
          </Link>
        </div>
      </div>

      {/* Post Navigation */}
      <div className="post-nav" style={{
        marginTop: "3rem",
        paddingTop: "2rem",
        borderTop: "1px solid var(--duke)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <Link href="/blog" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Back to Blog
        </Link>
        <Link href="/contact" style={{
          backgroundColor: "var(--carolina)",
          color: "#000",
          padding: "0.75rem 1.5rem",
          borderRadius: "6px",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "0.875rem",
        }}>
          Work With Chad
        </Link>
      </div>
    </div>
  );
}
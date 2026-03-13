import Image from "next/image";
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
    <div style={{ maxWidth: "750px", margin: "0 auto", padding: "4rem 2rem" }}>

      {/* Feature Image */}
      {metadata.image && (
        <div style={{ marginBottom: "2.5rem", borderRadius: "10px", overflow: "hidden" }}>
          <Image
            src={metadata.image}
            alt={metadata.title}
            width={1200}
            height={630}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      )}

      {/* Post Header */}
      <div style={{ marginBottom: "3rem" }}>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>
          {new Date(metadata.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "800", lineHeight: 1.3, marginBottom: "1rem" }}>
          {metadata.title}
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
          {metadata.description}
        </p>
      </div>

      <hr style={{ borderColor: "var(--duke)", marginBottom: "3rem" }} />

      {/* Post Content */}
      <div className="prose">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  );
}
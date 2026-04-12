import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SITE_URL = "https://localsearchally.com";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function OGImage({ params }) {
  const { slug } = await params;
  const { metadata } = getPostBySlug(slug);

  const featureImage = metadata.image
    ? `${SITE_URL}${metadata.image}`
    : null;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Feature image */}
      {featureImage && (
        <img
          src={featureImage}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      {/* Dark gradient overlay — heavier at bottom for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.92) 75%, rgba(10,10,10,0.98) 100%)",
          display: "flex",
        }}
      />
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "8px",
          height: "100%",
          backgroundColor: "#7BAFD4",
          display: "flex",
        }}
      />
      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "#7BAFD4",
          display: "flex",
        }}
      />
      {/* Logo — top left */}
      <div
        style={{
          position: "absolute",
          top: "48px",
          left: "80px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "rgba(1,33,105,0.85)",
            borderRadius: "10px",
            display: "flex",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "27px",
              left: "22px",
              width: "4px",
              height: "11px",
              backgroundColor: "#f0f0f0",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "19px",
              height: "19px",
              borderRadius: "50%",
              backgroundColor: "#7BAFD4",
              top: "8px",
              left: "15px",
              display: "flex",
            }}
          />
        </div>
        <div style={{ display: "flex", color: "#f0f0f0", fontSize: "20px", fontWeight: "800" }}>
          Local Search{" "}
          <span style={{ color: "#7BAFD4", marginLeft: "6px" }}>Ally</span>
        </div>
      </div>
      {/* Blog badge — top right */}
      <div
        style={{
          position: "absolute",
          top: "52px",
          right: "80px",
          display: "flex",
          backgroundColor: "rgba(20,20,20,0.75)",
          border: "1px solid rgba(123,175,212,0.4)",
          color: "#7BAFD4",
          fontSize: "14px",
          fontWeight: "700",
          letterSpacing: "3px",
          padding: "8px 16px",
          borderRadius: "6px",
        }}
      >
        BLOG
      </div>
      {/* Post title — bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "72px",
          left: "80px",
          right: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#f0f0f0",
            fontSize: "48px",
            fontWeight: "800",
            lineHeight: 1.15,
          }}
        >
          {metadata.title}
        </div>
      </div>
    </div>,
    { ...size },
  );
}

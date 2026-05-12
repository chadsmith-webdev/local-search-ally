import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { loadFonts, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const SITE_URL = "https://www.localsearchally.com";
const CAROLINA = "#7BAFD4";
const SLATE = "#1a222e";
const TEXT = "#f8f9fa";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function OGImage({ params }) {
  const { slug } = await params;
  const { metadata } = getPostBySlug(slug);

  const featureImage = metadata.image ? `${SITE_URL}${metadata.image}` : null;
  const fonts = await loadFonts();
  const displayFont =
    fonts.length > 0 ? "'Bricolage Grotesque'" : "system-ui, sans-serif";
  const uiFont = fonts.length > 1 ? "'Space Grotesk'" : "system-ui, sans-serif";

  const imageOptions = { ...OG_SIZE };
  if (fonts.length > 0) imageOptions.fonts = fonts;

  // Shrink font size for long titles
  const titleFontSize =
    metadata.title && metadata.title.length > 80
      ? "36px"
      : metadata.title && metadata.title.length > 55
        ? "42px"
        : "48px";

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
      {/* Feature image background */}
      {featureImage && (
        <img
          src={featureImage}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Dark gradient overlay — heavier at bottom */}
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
          backgroundColor: CAROLINA,
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
          backgroundColor: CAROLINA,
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
              backgroundColor: TEXT,
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "19px",
              height: "19px",
              borderRadius: "50%",
              backgroundColor: CAROLINA,
              top: "8px",
              left: "15px",
              display: "flex",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            color: TEXT,
            fontFamily: displayFont,
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          Local Search
          <span style={{ color: CAROLINA, marginLeft: "6px" }}>Ally</span>
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
          color: CAROLINA,
          fontFamily: uiFont,
          fontSize: "14px",
          fontWeight: 600,
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
          left: "88px",
          right: "88px",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            color: TEXT,
            fontFamily: displayFont,
            fontSize: titleFontSize,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {metadata.title}
        </div>
      </div>
    </div>,
    imageOptions,
  );
}

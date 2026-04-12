import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Local Search Ally Blog — Local SEO tips for NWA contractors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(123,175,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(123,175,212,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          display: "flex",
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "rgba(1,33,105,0.4)",
          display: "flex",
        }}
      />
      {/* Left bar */}
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
      {/* Right bar */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "8px",
          height: "100%",
          backgroundColor: "#012169",
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
      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: "48px",
          left: "80px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            backgroundColor: "#012169",
            borderRadius: "12px",
            display: "flex",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "31px",
              left: "26px",
              width: "5px",
              height: "13px",
              backgroundColor: "#f0f0f0",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              backgroundColor: "#7BAFD4",
              top: "10px",
              left: "17px",
              display: "flex",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            color: "#f0f0f0",
            fontSize: "24px",
            fontWeight: "800",
          }}
        >
          Local Search{" "}
          <span style={{ color: "#7BAFD4", marginLeft: "8px" }}>Ally</span>
        </div>
      </div>
      {/* Blog badge */}
      <div
        style={{
          position: "absolute",
          top: "52px",
          right: "88px",
          display: "flex",
          backgroundColor: "#141414",
          border: "1px solid rgba(123,175,212,0.3)",
          color: "#7BAFD4",
          fontSize: "16px",
          fontWeight: "700",
          letterSpacing: "3px",
          padding: "10px 20px",
          borderRadius: "6px",
        }}
      >
        BLOG
      </div>
      {/* Eyebrow */}
      <div
        style={{
          position: "relative",
          display: "flex",
          color: "#7BAFD4",
          fontSize: "18px",
          fontWeight: "700",
          letterSpacing: "4px",
          marginBottom: "24px",
          marginTop: "32px",
        }}
      >
        LOCAL SEO EDUCATION • NWA CONTRACTORS
      </div>
      {/* Headline */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#f0f0f0",
            fontSize: "60px",
            fontWeight: "800",
            lineHeight: 1.1,
          }}
        >
          Practical tips for getting
        </div>
        <div
          style={{
            display: "flex",
            color: "#7BAFD4",
            fontSize: "60px",
            fontWeight: "800",
            lineHeight: 1.1,
          }}
        >
          found on Google.
        </div>
      </div>
      {/* Subtext */}
      <div
        style={{
          position: "relative",
          display: "flex",
          color: "#666666",
          fontSize: "22px",
        }}
      >
        No fluff. Written for home service trades in Northwest Arkansas.
      </div>
      {/* URL */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          right: "88px",
          display: "flex",
          color: "#444444",
          fontSize: "20px",
        }}
      >
        localsearchally.com/blog
      </div>
    </div>,
    { ...size },
  );
}

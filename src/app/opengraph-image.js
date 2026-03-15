import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Local Search Ally — Local SEO & Web Dev for NWA Contractors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(123,175,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(123,175,212,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          display: "flex",
        }} />
        {/* Glow */}
        <div style={{
          position: "absolute",
          top: "-200px",
          left: "300px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "rgba(1,33,105,0.5)",
          display: "flex",
        }} />
        {/* Left bar */}
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "8px",
          height: "100%",
          backgroundColor: "#7BAFD4",
          display: "flex",
        }} />
        {/* Right bar */}
        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "8px",
          height: "100%",
          backgroundColor: "#012169",
          display: "flex",
        }} />
        {/* Bottom bar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "#7BAFD4",
          display: "flex",
        }} />
        {/* Eyebrow */}
        <div style={{
          position: "relative",
          display: "flex",
          color: "#7BAFD4",
          fontSize: "18px",
          fontWeight: "700",
          letterSpacing: "4px",
          marginBottom: "32px",
        }}>
          LOCAL SEO & WEB DEVELOPMENT • SILOAM SPRINGS, AR
        </div>
        {/* Headline */}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          marginBottom: "32px",
        }}>
          <div style={{ display: "flex", color: "#f0f0f0", fontSize: "64px", fontWeight: "800", lineHeight: 1.1 }}>
            Your next customer just searched Google.
          </div>
          <div style={{ display: "flex", color: "#7BAFD4", fontSize: "64px", fontWeight: "800", lineHeight: 1.1 }}>
            They found your competitor.
          </div>
        </div>
        {/* Subtext */}
        <div style={{
          position: "relative",
          display: "flex",
          color: "#666666",
          fontSize: "24px",
        }}>
          Local Search Ally — helping NWA contractors get found online
        </div>
        {/* CTA pill */}
<div style={{
  position: "absolute",
  bottom: "48px",
  left: "80px",
  display: "flex",
  backgroundColor: "#7BAFD4",
  color: "#000000",
  fontSize: "18px",
  fontWeight: "700",
  padding: "12px 28px",
  borderRadius: "100px",
}}>
  Book a Free Consultation →
</div>
        {/* URL */}
        <div style={{
          position: "absolute",
          bottom: "48px",
          right: "88px",
          display: "flex",
          color: "#444444",
          fontSize: "20px",
        }}>
          localsearchally.com
        </div>
      </div>
    ),
    { ...size }
  );
}
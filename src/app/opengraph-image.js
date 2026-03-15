import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Local Search Ally";
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
        {/* Grid background */}
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
          left: "50%",
          width: "800px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1,33,105,0.6) 0%, transparent 70%)",
          transform: "translateX(-50%)",
          display: "flex",
        }} />
        {/* Left accent bar */}
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "8px",
          height: "100%",
          backgroundColor: "#7BAFD4",
          display: "flex",
        }} />
        {/* Right accent bar */}
        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "8px",
          height: "100%",
          backgroundColor: "#012169",
          display: "flex",
        }} />
        {/* Bottom accent bar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "#7BAFD4",
          opacity: 0.4,
          display: "flex",
        }} />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{
            color: "#7BAFD4",
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "4px",
            marginBottom: "32px",
            textTransform: "uppercase",
          }}>
            LOCAL SEO & WEB DEVELOPMENT • SILOAM SPRINGS, AR
          </div>
          <div style={{ color: "#f0f0f0", fontSize: "68px", fontWeight: "800", lineHeight: 1.1, marginBottom: "32px" }}>
            Your next customer just searched Google.{" "}
            <span style={{ color: "#7BAFD4" }}>They found your competitor.</span>
          </div>
          <div style={{ color: "#666666", fontSize: "24px", marginBottom: "0" }}>
            Local Search Ally — helping NWA contractors get found online
          </div>
        </div>

        {/* URL */}
        <div style={{
          position: "absolute",
          bottom: "48px",
          right: "88px",
          color: "#444444",
          fontSize: "20px",
          display: "flex",
        }}>
          localsearchally.com
        </div>
      </div>
    ),
    { ...size }
  );
}
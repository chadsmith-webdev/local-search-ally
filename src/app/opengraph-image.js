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
      }}>
        <div style={{ color: "#7BAFD4", fontSize: "24px", fontWeight: "bold", letterSpacing: "4px", marginBottom: "24px" }}>
          LOCAL SEARCH ALLY
        </div>
        <div style={{ color: "#f0f0f0", fontSize: "72px", fontWeight: "800", lineHeight: 1.1, marginBottom: "32px" }}>
          Get Found Where{" "}
          <span style={{ color: "#7BAFD4" }}>It Matters Most</span>
        </div>
        <div style={{ color: "#888888", fontSize: "28px" }}>
          Web Development + Local SEO for Contractors
        </div>
        <div style={{ position: "absolute", bottom: "60px", right: "80px", color: "#555555", fontSize: "22px" }}>
          localsearchally.com
        </div>
        <div style={{ position: "absolute", left: 0, top: 0, width: "8px", height: "100%", backgroundColor: "#7BAFD4" }} />
        <div style={{ position: "absolute", right: 0, top: 0, width: "8px", height: "100%", backgroundColor: "#012169" }} />
      </div>
    ),
    { ...size }
  );
}
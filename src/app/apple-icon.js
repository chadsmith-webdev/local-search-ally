import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#012169",
        borderRadius: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: "98px",
          left: "84px",
          width: "12px",
          height: "46px",
          backgroundColor: "#f0f0f0",
          display: "flex",
        }} />
        <div style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "#7BAFD4",
          top: "22px",
          left: "50px",
          display: "flex",
        }} />
      </div>
    ),
    { ...size }
  );
}
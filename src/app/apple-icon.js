import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#012169",
        borderRadius: "40px",
      }}>
        {/* Outer ring */}
        <div style={{
          position: "absolute",
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          border: "8px solid #7BAFD4",
          display: "flex",
        }} />
        {/* Inner ring */}
        <div style={{
          position: "absolute",
          width: "62px",
          height: "62px",
          borderRadius: "50%",
          border: "7px solid #7BAFD4",
          opacity: 0.5,
          display: "flex",
        }} />
        {/* Center dot */}
        <div style={{
          position: "absolute",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          backgroundColor: "#7BAFD4",
          display: "flex",
        }} />
        {/* Handle */}
        <div style={{
          position: "absolute",
          top: "106px",
          left: "106px",
          width: "46px",
          height: "10px",
          backgroundColor: "#7BAFD4",
          borderRadius: "5px",
          transform: "rotate(45deg)",
          display: "flex",
        }} />
      </div>
    ),
    { ...size }
  );
}
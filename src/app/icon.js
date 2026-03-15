import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#012169",
        borderRadius: "7px",
      }}>
        {/* Outer ring */}
        <div style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "1.5px solid #7BAFD4",
          display: "flex",
        }} />
        {/* Inner ring */}
        <div style={{
          position: "absolute",
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          border: "1.5px solid #7BAFD4",
          opacity: 0.5,
          display: "flex",
        }} />
        {/* Center dot */}
        <div style={{
          position: "absolute",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "#7BAFD4",
          display: "flex",
        }} />
        {/* Handle */}
        <div style={{
          position: "absolute",
          top: "19px",
          left: "19px",
          width: "8px",
          height: "2px",
          backgroundColor: "#7BAFD4",
          borderRadius: "2px",
          transform: "rotate(45deg)",
          display: "flex",
        }} />
      </div>
    ),
    { ...size }
  );
}
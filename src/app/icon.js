import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1a222e",
        borderRadius: "7px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: "17px",
          left: "14.5px",
          width: "3px",
          height: "8px",
          backgroundColor: "#f8f9fa",
          display: "flex",
        }} />
        <div style={{
          position: "absolute",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: "#7BAFD4",
          top: "4px",
          left: "9px",
          display: "flex",
        }} />
      </div>
    ),
    { ...size }
  );
}
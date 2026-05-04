/**
 * Shared helper for generating OG images via Next.js ImageResponse.
 * Loads brand fonts from Google Fonts at runtime (edge-cached).
 *
 * @param {Object} options
 * @param {string}   options.title      — Main headline (white)
 * @param {string}  [options.titleAlt]  — Optional second headline line (carolina blue)
 * @param {string}  [options.subtitle]  — Muted body text below the headline
 * @param {string}  [options.badge]     — Top-right badge label (e.g. "SERVICES")
 * @param {string}  [options.eyebrow]   — Small uppercase label above the headline
 * @param {string}  [options.cta]       — Bottom CTA pill text
 */

import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const CAROLINA = "#7BAFD4";
const SLATE = "#012169";
const BG = "#0a0a0a";
const TEXT = "#f0f0f0";
const MUTED = "#555555";

export async function loadFonts() {
  try {
    // IE6 UA — predates WOFF, so Google Fonts returns TTF which Satori supports
    const UA = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)";

    const [displayCss, uiCss] = await Promise.all([
      fetch(
        "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&display=swap",
        { headers: { "User-Agent": UA } },
      ).then((r) => r.text()),
      fetch(
        "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap",
        { headers: { "User-Agent": UA } },
      ).then((r) => r.text()),
    ]);

    // Get the last src url match — the Latin subset
    const displayUrls = [...displayCss.matchAll(/src:\s*url\(([^)]+)\)/g)];
    const uiUrls = [...uiCss.matchAll(/src:\s*url\(([^)]+)\)/g)];
    const displayUrl = displayUrls[displayUrls.length - 1]?.[1];
    const uiUrl = uiUrls[uiUrls.length - 1]?.[1];

    const [displayData, uiData] = await Promise.all([
      displayUrl ? fetch(displayUrl).then((r) => r.arrayBuffer()) : null,
      uiUrl ? fetch(uiUrl).then((r) => r.arrayBuffer()) : null,
    ]);

    const fonts = [];
    if (displayData)
      fonts.push({
        name: "Bricolage Grotesque",
        data: displayData,
        style: "normal",
        weight: 700,
      });
    if (uiData)
      fonts.push({
        name: "Space Grotesk",
        data: uiData,
        style: "normal",
        weight: 600,
      });

    return fonts;
  } catch {
    return [];
  }
}

export async function buildOGImage({
  title,
  titleAlt,
  subtitle,
  badge,
  eyebrow,
  cta,
}) {
  const fonts = await loadFonts();
  const displayFont =
    fonts.length > 0 ? "'Bricolage Grotesque'" : "system-ui, sans-serif";
  const uiFont = fonts.length > 1 ? "'Space Grotesk'" : "system-ui, sans-serif";

  const imageOptions = { ...OG_SIZE };
  if (fonts.length > 0) imageOptions.fonts = fonts;

  // Title font-size: shrink if the title is long
  const titleFontSize =
    !titleAlt && title && title.length > 60
      ? "44px"
      : title && title.length > 40
        ? "52px"
        : "60px";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: BG,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
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

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-180px",
          left: "280px",
          width: "580px",
          height: "580px",
          borderRadius: "50%",
          backgroundColor: "rgba(1,33,105,0.45)",
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

      {/* Right accent bar */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "8px",
          height: "100%",
          backgroundColor: SLATE,
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
        {/* Pin icon */}
        <div
          style={{
            width: "52px",
            height: "52px",
            backgroundColor: SLATE,
            borderRadius: "10px",
            display: "flex",
            position: "relative",
          }}
        >
          {/* Needle/stem */}
          <div
            style={{
              position: "absolute",
              top: "29px",
              left: "24px",
              width: "5px",
              height: "12px",
              backgroundColor: TEXT,
              display: "flex",
            }}
          />
          {/* Pin ball */}
          <div
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: CAROLINA,
              top: "10px",
              left: "16px",
              display: "flex",
            }}
          />
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            color: TEXT,
            fontFamily: displayFont,
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          Local Search
          <span style={{ color: CAROLINA, marginLeft: "7px" }}>Ally</span>
        </div>
      </div>

      {/* Badge — top right */}
      {badge && (
        <div
          style={{
            position: "absolute",
            top: "52px",
            right: "88px",
            display: "flex",
            backgroundColor: "#141414",
            border: "1px solid rgba(123,175,212,0.3)",
            color: CAROLINA,
            fontFamily: uiFont,
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "3px",
            padding: "10px 20px",
            borderRadius: "6px",
          }}
        >
          {badge}
        </div>
      )}

      {/* Eyebrow */}
      {eyebrow && (
        <div
          style={{
            position: "relative",
            display: "flex",
            color: CAROLINA,
            fontFamily: uiFont,
            fontSize: "17px",
            fontWeight: 600,
            letterSpacing: "4px",
            marginBottom: "20px",
            marginTop: "24px",
          }}
        >
          {eyebrow}
        </div>
      )}

      {/* Headline */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          marginBottom: subtitle ? "28px" : "0px",
          marginTop: eyebrow ? "0px" : "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: TEXT,
            fontFamily: displayFont,
            fontSize: titleFontSize,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>

        {titleAlt && (
          <div
            style={{
              display: "flex",
              color: CAROLINA,
              fontFamily: displayFont,
              fontSize: titleFontSize,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {titleAlt}
          </div>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div
          style={{
            position: "relative",
            display: "flex",
            color: MUTED,
            fontFamily: uiFont,
            fontSize: "22px",
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
      )}

      {/* CTA pill — bottom left */}
      {cta && (
        <div
          style={{
            position: "absolute",
            bottom: "44px",
            left: "80px",
            display: "flex",
            backgroundColor: CAROLINA,
            color: "#000000",
            fontFamily: uiFont,
            fontSize: "17px",
            fontWeight: 600,
            padding: "12px 26px",
            borderRadius: "100px",
          }}
        >
          {cta}
        </div>
      )}

      {/* Domain — bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          right: "88px",
          display: "flex",
          color: "#3a3a3a",
          fontFamily: uiFont,
          fontSize: "18px",
        }}
      >
        localsearchally.com
      </div>
    </div>,
    imageOptions,
  );
}

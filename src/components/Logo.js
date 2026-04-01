import Link from "next/link";

export default function Logo({ size = 28 }) {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
        <defs>
          <linearGradient id="logo-ng">
            <stop offset="0" stopColor="white" stopOpacity="0.5" />
            <stop offset="0.45" stopColor="white" stopOpacity="1" />
            <stop offset="1" stopColor="white" stopOpacity="0.35" />
          </linearGradient>
          <clipPath id="logo-bc">
            <circle cx="50" cy="33" r="20" />
          </clipPath>
        </defs>
        <polygon points="48,52 52,52 50,93" fill="url(#logo-ng)" />
        <circle cx="50" cy="33" r="20" fill="#7bafd4" />
        <g clipPath="url(#logo-bc)">
          <circle cx="46" cy="28" r="10" fill="white" opacity="0.88" />
          <circle cx="49.5" cy="30.5" r="10.1" fill="#7bafd4" />
        </g>
      </svg>
      <span style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, color: "#f0f0f0", letterSpacing: "-0.01em" }}>
        Local Search <span style={{ color: "#7bafd4" }}>Ally</span>
      </span>
    </Link>
  );
}

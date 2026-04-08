export default function WebDesignHeroSVG() {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{
        position: "absolute",
        left: "max(0px, 6vw)",
        bottom: "max(0px, 6vw)",
        width: "min(480px, 55vw)",
        height: "auto",
        opacity: 0.16,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {/* Browser chrome */}
      <rect x="10" y="10" width="500" height="360" rx="12" fill="#141414" stroke="#333" strokeWidth="1" />
      <rect x="10" y="10" width="500" height="36" rx="12" fill="#1e1e1e" />
      <rect x="10" y="34" width="500" height="12" fill="#1e1e1e" />
      {/* Traffic light dots */}
      <circle cx="32" cy="28" r="5" fill="#e05c5c" opacity="0.6" />
      <circle cx="50" cy="28" r="5" fill="#e5c07b" opacity="0.6" />
      <circle cx="68" cy="28" r="5" fill="#4aba7a" opacity="0.6" />
      {/* URL bar */}
      <rect x="110" y="20" width="280" height="16" rx="4" fill="#0a0a0a" />
      <text x="140" y="32" fill="#7bafd4" fontFamily="monospace" fontSize="9" opacity="0.8">localsearchally.com</text>

      {/* Page content mock */}
      {/* Nav bar */}
      <rect x="30" y="60" width="460" height="20" rx="3" fill="#1e1e1e" />
      <rect x="40" y="66" width="50" height="8" rx="2" fill="#7bafd4" opacity="0.5" />
      <rect x="380" y="66" width="30" height="8" rx="2" fill="#444" />
      <rect x="420" y="66" width="30" height="8" rx="2" fill="#444" />
      <rect x="460" y="66" width="20" height="8" rx="2" fill="#444" />

      {/* Hero section */}
      <rect x="30" y="90" width="460" height="120" rx="6" fill="#0d0d0d" />
      <rect x="50" y="110" width="180" height="14" rx="3" fill="#f0f0f0" opacity="0.25" />
      <rect x="50" y="130" width="240" height="8" rx="2" fill="#888" opacity="0.2" />
      <rect x="50" y="144" width="200" height="8" rx="2" fill="#888" opacity="0.15" />
      <rect x="50" y="164" width="100" height="24" rx="5" fill="#7bafd4" opacity="0.35" />
      {/* Hero image placeholder */}
      <rect x="320" y="100" width="150" height="100" rx="6" fill="#1e1e1e" />
      <circle cx="395" cy="140" r="16" stroke="#7bafd4" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M389 140l4 3 8-8" stroke="#7bafd4" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

      {/* Service cards */}
      <rect x="30" y="220" width="140" height="80" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
      <rect x="45" y="235" width="60" height="8" rx="2" fill="#f0f0f0" opacity="0.2" />
      <rect x="45" y="250" width="110" height="5" rx="1" fill="#888" opacity="0.12" />
      <rect x="45" y="260" width="90" height="5" rx="1" fill="#888" opacity="0.1" />
      <rect x="45" y="276" width="50" height="12" rx="3" fill="#7bafd4" opacity="0.2" />

      <rect x="185" y="220" width="140" height="80" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
      <rect x="200" y="235" width="60" height="8" rx="2" fill="#f0f0f0" opacity="0.2" />
      <rect x="200" y="250" width="110" height="5" rx="1" fill="#888" opacity="0.12" />
      <rect x="200" y="260" width="90" height="5" rx="1" fill="#888" opacity="0.1" />
      <rect x="200" y="276" width="50" height="12" rx="3" fill="#7bafd4" opacity="0.2" />

      <rect x="340" y="220" width="140" height="80" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
      <rect x="355" y="235" width="60" height="8" rx="2" fill="#f0f0f0" opacity="0.2" />
      <rect x="355" y="250" width="110" height="5" rx="1" fill="#888" opacity="0.12" />
      <rect x="355" y="260" width="90" height="5" rx="1" fill="#888" opacity="0.1" />
      <rect x="355" y="276" width="50" height="12" rx="3" fill="#7bafd4" opacity="0.2" />

      {/* Footer */}
      <rect x="30" y="316" width="460" height="36" rx="4" fill="#111" />
      <rect x="50" y="330" width="80" height="6" rx="1" fill="#888" opacity="0.12" />
      <rect x="390" y="330" width="80" height="6" rx="1" fill="#888" opacity="0.12" />
    </svg>
  );
}

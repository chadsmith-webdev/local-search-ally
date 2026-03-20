// Map pin silhouette with a diagonal slash — instantly reads as "not found."
export function IconInvisible({ className }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Pin body — Carolina blue duotone fill */}
      <path
        d="M24 4C15.16 4 10 11.16 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 11.16 32.84 4 24 4Z"
        fill="#7bafd4"
        fillOpacity="0.18"
        stroke="#7bafd4"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Inner circle — Navy accent depth */}
      <circle
        cx="24"
        cy="18"
        r="5"
        fill="#012169"
        fillOpacity="0.35"
        stroke="#012169"
        strokeWidth="1.2"
      />
      {/* Diagonal slash — communicates "not visible / not found" */}
      <line
        x1="9"
        y1="7"
        x2="39"
        y2="41"
        stroke="#7bafd4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Icon 2: Outdated or No Website ──────────────────────────────────────────
// Browser chrome with an ✕ in the content area — reads as "missing/broken site."
export function IconNoWebsite({ className }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Browser outer frame */}
      <rect
        x="4"
        y="7"
        width="40"
        height="30"
        rx="3"
        fill="#7bafd4"
        fillOpacity="0.15"
        stroke="#7bafd4"
        strokeWidth="1.5"
      />
      {/* Top bar divider */}
      <line x1="4" y1="16" x2="44" y2="16" stroke="#7bafd4" strokeWidth="1.5" />
      {/* Traffic-light dots — Navy accent */}
      <circle cx="11" cy="11.5" r="1.8" fill="#012169" fillOpacity="0.5" />
      <circle cx="17" cy="11.5" r="1.8" fill="#012169" fillOpacity="0.5" />
      <circle cx="23" cy="11.5" r="1.8" fill="#012169" fillOpacity="0.5" />
      {/* Address bar pill */}
      <rect
        x="27"
        y="9"
        width="14"
        height="5"
        rx="2.5"
        fill="#012169"
        fillOpacity="0.12"
        stroke="#012169"
        strokeOpacity="0.3"
        strokeWidth="0.8"
      />
      {/* ✕ in content area */}
      <line x1="15" y1="21" x2="33" y2="33" stroke="#7bafd4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="33" y1="21" x2="15" y2="33" stroke="#7bafd4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Icon 3: Relying on Word of Mouth ────────────────────────────────────────
// Two offset speech bubbles with tails pointing in opposite directions —
// person 1 (back, upper-right) and person 2 (front, lower-left) talking.
export function IconWordOfMouth({ className }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Back bubble — tail bottom-left, Carolina duotone */}
      <path
        d="M20 4 H39 Q43 4 43 8 V20 Q43 24 39 24 H26 L19 32 L20 24 Q16 24 16 20 V8 Q16 4 20 4 Z"
        fill="#7bafd4"
        fillOpacity="0.15"
        stroke="#7bafd4"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Front bubble — tail on right side, Navy accent */}
      <path
        d="M9 17 H28 Q32 17 32 21 V27 L38 30 L32 33 Q32 37 28 37 H9 Q5 37 5 33 V21 Q5 17 9 17 Z"
        fill="#012169"
        fillOpacity="0.22"
        stroke="#012169"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Typing dots inside front bubble */}
      <circle cx="13" cy="27" r="2" fill="#7bafd4" />
      <circle cx="20" cy="27" r="2" fill="#7bafd4" />
      <circle cx="27" cy="27" r="2" fill="#7bafd4" />
    </svg>
  );
}
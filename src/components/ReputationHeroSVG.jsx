// Decorative SVG accent for the Reputation hero — review card with star rating
export default function ReputationHeroSVG() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      width='340'
      height='340'
      viewBox='0 0 340 340'
      style={{
        position: "absolute",
        left: "max(0px, 8vw)",
        bottom: "max(0px, 8vw)",
        zIndex: 1,
        opacity: 0.32,
        pointerEvents: "none",
      }}
    >
      {/* Subtle grid */}
      <g stroke='#7bafd4' strokeWidth='0.5' opacity='0.18'>
        {Array.from({ length: 17 }).map((_, i) => (
          <g key={`grid-${i}`}>
            <line x1='0' y1={i * 20} x2='340' y2={i * 20} />
            <line y1='0' x1={i * 20} y2='340' x2={i * 20} />
          </g>
        ))}
      </g>

      {/* Review card outline */}
      <rect
        x='50'
        y='60'
        width='240'
        height='220'
        rx='10'
        fill='none'
        stroke='#7bafd4'
        strokeWidth='1.2'
        opacity='0.5'
      />

      {/* Card header */}
      <rect
        x='50'
        y='60'
        width='240'
        height='48'
        rx='10'
        fill='#7bafd4'
        opacity='0.08'
      />

      {/* Account-group icon (three people) */}
      <circle cx='84' cy='84' r='18' fill='#7bafd4' opacity='0.12' />
      <g transform='translate(62, 70) scale(1.8)' opacity='0.8'>
        <path
          fill='#7bafd4'
          d='M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z'
        />
      </g>

      {/* Reviewer name line */}
      <rect
        x='102'
        y='77'
        width='80'
        height='7'
        rx='3.5'
        fill='#7bafd4'
        opacity='0.35'
      />
      {/* Date line */}
      <rect
        x='102'
        y='89'
        width='50'
        height='5'
        rx='2.5'
        fill='#7bafd4'
        opacity='0.2'
      />

      {/* 5 star-in-circle row */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g
          key={`star-${i}`}
          transform={`translate(${60 + i * 26}, 126) scale(0.95)`}
          opacity='0.8'
        >
          <path
            fill='#7bafd4'
            d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M14.81,15.43L13.97,11.79L16.79,9.35L13.07,9.03L11.62,5.6L10.16,9.03L6.44,9.35L9.26,11.79L8.42,15.43L11.62,13.5L14.81,15.43Z'
          />
        </g>
      ))}

      {/* Review text lines */}
      <rect
        x='65'
        y='168'
        width='210'
        height='7'
        rx='3.5'
        fill='#7bafd4'
        opacity='0.22'
      />
      <rect
        x='65'
        y='181'
        width='190'
        height='7'
        rx='3.5'
        fill='#7bafd4'
        opacity='0.18'
      />
      <rect
        x='65'
        y='194'
        width='150'
        height='7'
        rx='3.5'
        fill='#7bafd4'
        opacity='0.14'
      />

      {/* Owner response badge */}
      <rect
        x='65'
        y='218'
        width='210'
        height='44'
        rx='6'
        fill='#7bafd4'
        opacity='0.06'
        stroke='#7bafd4'
        strokeWidth='0.8'
      />
      <rect
        x='76'
        y='229'
        width='55'
        height='6'
        rx='3'
        fill='#7bafd4'
        opacity='0.4'
      />
      <rect
        x='76'
        y='240'
        width='160'
        height='5'
        rx='2.5'
        fill='#7bafd4'
        opacity='0.18'
      />
      <rect
        x='76'
        y='250'
        width='120'
        height='5'
        rx='2.5'
        fill='#7bafd4'
        opacity='0.12'
      />
    </svg>
  );
}

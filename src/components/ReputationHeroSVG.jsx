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
        opacity: 0.18,
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

      {/* Avatar circle */}
      <circle
        cx='80'
        cy='84'
        r='14'
        fill='#7bafd4'
        opacity='0.12'
        stroke='#7bafd4'
        strokeWidth='1'
      />
      <circle cx='80' cy='80' r='5' fill='#7bafd4' opacity='0.35' />
      <path d='M68 94 q12-8 24 0' fill='#7bafd4' opacity='0.35' />

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

      {/* 5-star row */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={`star-${i}`}
          d={`M${70 + i * 24} 132 l3.5 7 7.5 1.1-5.5 5.3 1.3 7.5-6.8-3.5-6.8 3.5 1.3-7.5-5.5-5.3 7.5-1.1z`}
          fill='#7bafd4'
          opacity={i < 5 ? 0.5 : 0.15}
        />
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

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
      <g transform='translate(66, 70) scale(1.17)' opacity='0.4'>
        <path
          fill='#7bafd4'
          d='M12,19.2C9.5,19.2 7.29,17.92 6,15.98C6.03,13.99 10,12.9 12,12.9C13.99,12.9 17.97,13.99 18,15.98C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z'
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

      {/* 5-star row */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g
          key={`star-${i}`}
          transform={`translate(${62 + i * 24}, 128) scale(0.8)`}
          opacity={i < 5 ? 0.5 : 0.15}
        >
          <path
            fill='#7bafd4'
            d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
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

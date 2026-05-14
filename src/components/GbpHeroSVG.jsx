// Decorative SVG accent for the GBP hero — map listing card with star rating
export default function GbpHeroSVG() {
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

      {/* Map listing card outline */}
      <rect
        x='60'
        y='70'
        width='220'
        height='200'
        rx='10'
        fill='none'
        stroke='#7bafd4'
        strokeWidth='1.2'
        opacity='0.5'
      />

      {/* Card header bar */}
      <rect
        x='60'
        y='70'
        width='220'
        height='48'
        rx='10'
        fill='#7bafd4'
        opacity='0.08'
      />

      {/* Location pin in header */}
      <g transform='translate(106, 78) scale(0.9)' opacity='0.55'>
        <path
          fill='#7bafd4'
          d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
        />
      </g>

      {/* Business name line */}
      <rect
        x='132'
        y='86'
        width='100'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.35'
      />

      {/* Star rating row */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g
          key={`star-${i}`}
          transform={`translate(${75 + i * 22}, 142) scale(0.7)`}
          opacity={i < 4 ? 0.5 : 0.2}
        >
          <path
            fill='#7bafd4'
            d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
          />
        </g>
      ))}

      {/* Review count text bar */}
      <rect
        x='198'
        y='148'
        width='56'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.25'
      />

      {/* Info rows */}
      <rect
        x='80'
        y='182'
        width='14'
        height='8'
        rx='2'
        fill='#7bafd4'
        opacity='0.3'
      />
      <rect
        x='102'
        y='182'
        width='120'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.2'
      />

      <rect
        x='80'
        y='202'
        width='14'
        height='8'
        rx='2'
        fill='#7bafd4'
        opacity='0.3'
      />
      <rect
        x='102'
        y='202'
        width='88'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.2'
      />

      <rect
        x='80'
        y='222'
        width='14'
        height='8'
        rx='2'
        fill='#7bafd4'
        opacity='0.3'
      />
      <rect
        x='102'
        y='222'
        width='104'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.2'
      />

      {/* CTA button bar at bottom of card */}
      <rect
        x='80'
        y='246'
        width='180'
        height='10'
        rx='5'
        fill='#7bafd4'
        opacity='0.18'
      />
    </svg>
  );
}

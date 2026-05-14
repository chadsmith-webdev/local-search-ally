// Decorative SVG accent for the Local SEO hero — ranking card with GPS crosshair
export default function LocalSeoHeroSVG() {
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

      {/* Ranking card outline */}
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

      {/* Crosshairs-gps icon in header */}
      <g transform='translate(62, 70) scale(1.4)' opacity='0.85'>
        <path
          fill='#7bafd4'
          d='M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z'
        />
      </g>

      {/* Header label line */}
      <rect
        x='102'
        y='80'
        width='110'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.35'
      />
      {/* Header sub line */}
      <rect
        x='102'
        y='93'
        width='60'
        height='5'
        rx='2.5'
        fill='#7bafd4'
        opacity='0.22'
      />

      {/* Ranking rows — top 3 with position pills + result bars */}
      {[
        { y: 128, w: 180, pos: 1, fade: 0.85 },
        { y: 158, w: 160, pos: 2, fade: 0.65 },
        { y: 188, w: 140, pos: 3, fade: 0.5 },
      ].map((row) => (
        <g key={`rank-${row.pos}`}>
          <circle
            cx='75'
            cy={row.y + 9}
            r='10'
            fill='#7bafd4'
            opacity={row.fade}
          />
          <text
            x='75'
            y={row.y + 13}
            textAnchor='middle'
            fontFamily='monospace'
            fontSize='11'
            fontWeight='700'
            fill='#0a0a0a'
            opacity='0.9'
          >
            {row.pos}
          </text>
          <rect
            x='95'
            y={row.y + 2}
            width={row.w}
            height='7'
            rx='3.5'
            fill='#7bafd4'
            opacity={row.fade * 0.55}
          />
          <rect
            x='95'
            y={row.y + 13}
            width={row.w - 30}
            height='5'
            rx='2.5'
            fill='#7bafd4'
            opacity={row.fade * 0.35}
          />
        </g>
      ))}

      {/* Map pack badge */}
      <rect
        x='65'
        y='234'
        width='210'
        height='34'
        rx='6'
        fill='#7bafd4'
        opacity='0.06'
        stroke='#7bafd4'
        strokeWidth='0.8'
      />
      <rect
        x='76'
        y='244'
        width='75'
        height='6'
        rx='3'
        fill='#7bafd4'
        opacity='0.4'
      />
      <rect
        x='76'
        y='254'
        width='130'
        height='5'
        rx='2.5'
        fill='#7bafd4'
        opacity='0.18'
      />
    </svg>
  );
}

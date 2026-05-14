// Decorative SVG accent for the Web Design hero — page mock card with monitor icon
export default function WebDesignHeroSVG() {
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

      {/* Page card outline */}
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

      {/* Monitor-dashboard icon in header */}
      <g transform='translate(62, 70) scale(1.4)' opacity='0.85'>
        <path
          fill='#7bafd4'
          d='M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2M15,5V7H19V5M15,8V10H19V8M15,11V13H19V11M5,5V13H14V5H5Z'
        />
      </g>

      {/* Header title line */}
      <rect
        x='102'
        y='80'
        width='100'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.35'
      />
      {/* Header URL line */}
      <rect
        x='102'
        y='93'
        width='70'
        height='5'
        rx='2.5'
        fill='#7bafd4'
        opacity='0.22'
      />

      {/* Hero block in page body */}
      <rect
        x='65'
        y='124'
        width='130'
        height='10'
        rx='4'
        fill='#7bafd4'
        opacity='0.55'
      />
      <rect
        x='65'
        y='140'
        width='200'
        height='6'
        rx='3'
        fill='#7bafd4'
        opacity='0.25'
      />
      <rect
        x='65'
        y='151'
        width='170'
        height='6'
        rx='3'
        fill='#7bafd4'
        opacity='0.2'
      />
      {/* CTA pill */}
      <rect
        x='65'
        y='168'
        width='80'
        height='18'
        rx='4'
        fill='#7bafd4'
        opacity='0.45'
      />

      {/* Two-card grid below */}
      <rect
        x='65'
        y='198'
        width='100'
        height='70'
        rx='6'
        fill='#7bafd4'
        opacity='0.06'
        stroke='#7bafd4'
        strokeWidth='0.8'
      />
      <rect
        x='76'
        y='208'
        width='50'
        height='6'
        rx='3'
        fill='#7bafd4'
        opacity='0.4'
      />
      <rect
        x='76'
        y='220'
        width='75'
        height='4'
        rx='2'
        fill='#7bafd4'
        opacity='0.18'
      />
      <rect
        x='76'
        y='228'
        width='65'
        height='4'
        rx='2'
        fill='#7bafd4'
        opacity='0.14'
      />
      <rect
        x='76'
        y='248'
        width='40'
        height='10'
        rx='3'
        fill='#7bafd4'
        opacity='0.3'
      />

      <rect
        x='175'
        y='198'
        width='100'
        height='70'
        rx='6'
        fill='#7bafd4'
        opacity='0.06'
        stroke='#7bafd4'
        strokeWidth='0.8'
      />
      <rect
        x='186'
        y='208'
        width='50'
        height='6'
        rx='3'
        fill='#7bafd4'
        opacity='0.4'
      />
      <rect
        x='186'
        y='220'
        width='75'
        height='4'
        rx='2'
        fill='#7bafd4'
        opacity='0.18'
      />
      <rect
        x='186'
        y='228'
        width='65'
        height='4'
        rx='2'
        fill='#7bafd4'
        opacity='0.14'
      />
      <rect
        x='186'
        y='248'
        width='40'
        height='10'
        rx='3'
        fill='#7bafd4'
        opacity='0.3'
      />
    </svg>
  );
}

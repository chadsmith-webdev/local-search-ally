// Decorative SVG accent for the Citation Building hero — directory listings card
export default function CitationHeroSVG() {
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

      {/* Card outline */}
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

      {/* Web (globe) icon in header */}
      <g transform='translate(62, 70) scale(1.4)' opacity='0.85'>
        <path
          fill='#7bafd4'
          d='M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
        />
      </g>

      {/* Header title line */}
      <rect
        x='102'
        y='80'
        width='115'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.35'
      />
      {/* Header sub line */}
      <rect
        x='102'
        y='93'
        width='65'
        height='5'
        rx='2.5'
        fill='#7bafd4'
        opacity='0.22'
      />

      {/* Directory listing rows with check pills */}
      {[
        { y: 124, w: 175, fade: 0.85 },
        { y: 152, w: 155, fade: 0.75 },
        { y: 180, w: 165, fade: 0.65 },
        { y: 208, w: 140, fade: 0.55 },
      ].map((row, i) => (
        <g key={`dir-${i}`}>
          {/* Check pill */}
          <circle
            cx='73'
            cy={row.y + 9}
            r='9'
            fill='#7bafd4'
            opacity={row.fade * 0.5}
          />
          <g
            transform={`translate(${73 - 6}, ${row.y + 9 - 6}) scale(0.5)`}
            opacity='0.95'
          >
            <path
              fill='#0a0a0a'
              d='M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z'
            />
          </g>
          {/* Directory name bar */}
          <rect
            x='92'
            y={row.y + 2}
            width={row.w}
            height='7'
            rx='3.5'
            fill='#7bafd4'
            opacity={row.fade * 0.55}
          />
          {/* NAP sub bar */}
          <rect
            x='92'
            y={row.y + 13}
            width={row.w - 40}
            height='5'
            rx='2.5'
            fill='#7bafd4'
            opacity={row.fade * 0.3}
          />
        </g>
      ))}

      {/* Footer status badge */}
      <rect
        x='65'
        y='240'
        width='210'
        height='28'
        rx='6'
        fill='#7bafd4'
        opacity='0.06'
        stroke='#7bafd4'
        strokeWidth='0.8'
      />
      <circle cx='80' cy='254' r='4' fill='#7bafd4' opacity='0.55' />
      <rect
        x='92'
        y='250'
        width='90'
        height='5'
        rx='2.5'
        fill='#7bafd4'
        opacity='0.4'
      />
      <rect
        x='92'
        y='259'
        width='140'
        height='4'
        rx='2'
        fill='#7bafd4'
        opacity='0.18'
      />
    </svg>
  );
}

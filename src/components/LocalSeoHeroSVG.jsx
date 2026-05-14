// Decorative SVG accent for the hero section (location pin + grid)
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
      {/* Location pin */}
      <g>
        <ellipse
          cx='170'
          cy='120'
          rx='38'
          ry='38'
          fill='#7bafd4'
          opacity='0.13'
        />
        <ellipse
          cx='170'
          cy='120'
          rx='18'
          ry='18'
          fill='#7bafd4'
          opacity='0.22'
        />
        <g transform='translate(122, 76) scale(4)' opacity='0.32'>
          <path
            fill='#7bafd4'
            d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
          />
        </g>
      </g>
    </svg>
  );
}

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
        <path
          d='M170 80c-22 0-40 18-40 40 0 27 40 80 40 80s40-53 40-80c0-22-18-40-40-40zm0 54a14 14 0 1 1 0-28 14 14 0 0 1 0 28z'
          fill='#7bafd4'
          opacity='0.32'
        />
      </g>
    </svg>
  );
}

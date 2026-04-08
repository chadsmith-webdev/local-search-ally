// Decorative SVG accent for the citation hero — network/directory node theme
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

      {/* Directory network: central node + spokes */}
      <g>
        {/* Connection lines from center to outer nodes */}
        <line x1='170' y1='170' x2='80' y2='100' stroke='#7bafd4' strokeWidth='1' opacity='0.5' />
        <line x1='170' y1='170' x2='260' y2='100' stroke='#7bafd4' strokeWidth='1' opacity='0.5' />
        <line x1='170' y1='170' x2='60' y2='200' stroke='#7bafd4' strokeWidth='1' opacity='0.5' />
        <line x1='170' y1='170' x2='280' y2='210' stroke='#7bafd4' strokeWidth='1' opacity='0.5' />
        <line x1='170' y1='170' x2='150' y2='280' stroke='#7bafd4' strokeWidth='1' opacity='0.5' />

        {/* Outer directory nodes */}
        <circle cx='80' cy='100' r='16' fill='#7bafd4' opacity='0.2' />
        <circle cx='80' cy='100' r='7' fill='#7bafd4' opacity='0.4' />

        <circle cx='260' cy='100' r='16' fill='#7bafd4' opacity='0.2' />
        <circle cx='260' cy='100' r='7' fill='#7bafd4' opacity='0.4' />

        <circle cx='60' cy='200' r='13' fill='#7bafd4' opacity='0.18' />
        <circle cx='60' cy='200' r='6' fill='#7bafd4' opacity='0.35' />

        <circle cx='280' cy='210' r='13' fill='#7bafd4' opacity='0.18' />
        <circle cx='280' cy='210' r='6' fill='#7bafd4' opacity='0.35' />

        <circle cx='150' cy='280' r='11' fill='#7bafd4' opacity='0.15' />
        <circle cx='150' cy='280' r='5' fill='#7bafd4' opacity='0.3' />

        {/* Central hub */}
        <circle cx='170' cy='170' r='36' fill='#7bafd4' opacity='0.08' />
        <circle cx='170' cy='170' r='22' fill='#7bafd4' opacity='0.14' />
        <circle cx='170' cy='170' r='10' fill='#7bafd4' opacity='0.3' />
      </g>
    </svg>
  );
}

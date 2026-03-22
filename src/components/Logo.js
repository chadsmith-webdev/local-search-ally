export default function Logo({
  size = 36,
  showText = true,
  textSize = "1.2rem",
}) {
  const s = size;
  const rx = Math.round(s * 0.22);
  const cx = s * 0.5;
  const cy = s * 0.34;
  const r = s * 0.25;
  const stemX = s * 0.453;
  const stemW = s * 0.094;
  const stemY = s * 0.56;
  const stemH = s * 0.22;
  const tipY = s * 0.83;
  const tipW = s * 0.047;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        width={s}
        height={s}
      >
        <defs>
          <linearGradient
            id='needleGrad'
            x1='0'
            x2='1'
            gradientUnits='objectBoundingBox'
          >
            <stop offset='0' stopColor='white' stopOpacity='0.5' />
            <stop offset='0.45' stopColor='white' stopOpacity='1' />
            <stop offset='1' stopColor='white' stopOpacity='0.35' />
          </linearGradient>
          <clipPath id='ballClip'>
            <circle cx='50' cy='33' r='20' />
          </clipPath>
        </defs>

        {/* Needle: tapered triangle with slight gradient to suggest shine */}
        <polygon points='48,52 52,52 50,93' fill='url(#needleGrad)' />

        {/* Ball */}
        <circle cx='50' cy='33' r='20' fill='#7bafd4' />

        {/* Crescent highlight: white circle cut by a ball-colored circle */}
        <g clipPath='url(#ballClip)'>
          <circle cx='46' cy='28' r='10' fill='white' opacity='0.88' />
          <circle cx='49.5' cy='30.5' r='10.1' fill='#7bafd4' />
        </g>
      </svg>
      {showText && (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "800",
            fontSize: textSize,
            color: "#f0f0f0",
            lineHeight: 1,
          }}
        >
          Local Search <span style={{ color: "#7BAFD4" }}>Ally</span>
        </span>
      )}
    </div>
  );
}

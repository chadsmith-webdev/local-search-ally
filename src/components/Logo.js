export default function Logo({ size = 36, showText = true, textSize = "1.2rem" }) {
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
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
      <svg
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect x="0" y="0" width={s} height={s} rx={rx} fill="#012169" />
        <rect x={stemX} y={stemY} width={stemW} height={stemH} fill="#f0f0f0" />
        <polygon
          points={`${cx},${tipY} ${cx - tipW},${tipY - tipW * 2} ${cx + tipW},${tipY - tipW * 2}`}
          fill="#f0f0f0"
        />
        <circle cx={cx} cy={cy} r={r} fill="#7BAFD4" />
      </svg>
      {showText && (
        <span style={{
          fontFamily: "var(--font-display)",
          fontWeight: "800",
          fontSize: textSize,
          color: "#f0f0f0",
          lineHeight: 1,
        }}>
          Local Search <span style={{ color: "#7BAFD4" }}>Ally</span>
        </span>
      )}
    </div>
  );
}
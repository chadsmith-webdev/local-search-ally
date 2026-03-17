export default function Logo({ size = 36, showText = true, textSize = "1.2rem" }) {
  const icon = size;
  const rx = Math.round(icon * 0.22);
  const cx = Math.round(icon * 0.43);
  const cy = Math.round(icon * 0.43);
  const r1 = Math.round(icon * 0.31);
  const r2 = Math.round(icon * 0.17);
  const r3 = Math.round(icon * 0.06);
  const lx = Math.round(icon * 0.67);
  const ly = Math.round(icon * 0.67);
  const lx2 = Math.round(icon * 0.875);
  const ly2 = Math.round(icon * 0.875);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
      <svg
        width={icon}
        height={icon}
        viewBox={`0 0 ${icon} ${icon}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect x="0" y="0" width={icon} height={icon} rx={rx} fill="#012169" />
        <circle cx={cx} cy={cy} r={r1} fill="none" stroke="#7BAFD4" strokeWidth={Math.max(1.5, icon * 0.04)} />
        <circle cx={cx} cy={cy} r={r2} fill="none" stroke="#7BAFD4" strokeWidth={Math.max(1.5, icon * 0.035)} opacity="0.5" />
        <circle cx={cx} cy={cy} r={r3} fill="#7BAFD4" />
        <line x1={lx} y1={ly} x2={lx2} y2={ly2} stroke="#7BAFD4" strokeWidth={Math.max(2, icon * 0.055)} strokeLinecap="round" />
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
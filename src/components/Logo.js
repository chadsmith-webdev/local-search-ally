export default function Logo({
  size = 36,
  showText = true,
  textSize = "text-[1.2rem]",
}) {
  const s = size;

  return (
    <div className="flex items-center gap-[0.4rem]">
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        width={s}
        height={s}
        aria-hidden={!showText ? "false" : "true"}
        role="img"
      >
        <title>Local Search Ally Logo</title>
        <defs>
          <linearGradient
            id='needleGrad'
            x1='0'
            y1='0'
            x2='1'
            y2='1'
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

        {/* Needle */}
        <polygon points='48,52 52,52 50,93' fill='url(#needleGrad)' />

        {/* Ball */}
        <circle cx='50' cy='33' r='20' fill='#7bafd4' />

        {/* Crescent highlight */}
        <g clipPath='url(#ballClip)'>
          <circle cx='46' cy='28' r='10' fill='white' opacity='0.88' />
          <circle cx='49.5' cy='30.5' r='10.1' fill='#7bafd4' />
        </g>
      </svg>
      {showText && (
        <span
          className={`font-display font-extrabold text-[#f0f0f0] leading-none ${textSize}`}
        >
          Local Search <span className="text-[#7BAFD4]">Ally</span>
        </span>
      )}
    </div>
  );
}

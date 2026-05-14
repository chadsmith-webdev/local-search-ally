// Decorative SVG accent for the GBP hero — map listing card with star rating
export default function GbpHeroSVG() {
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

      {/* Map listing card outline */}
      <rect
        x='60'
        y='70'
        width='220'
        height='200'
        rx='10'
        fill='none'
        stroke='#7bafd4'
        strokeWidth='1.2'
        opacity='0.5'
      />

      {/* Card header bar */}
      <rect
        x='60'
        y='70'
        width='220'
        height='48'
        rx='10'
        fill='#7bafd4'
        opacity='0.08'
      />

      {/* Storefront icon in header */}
      <g transform='translate(72, 80) scale(1.4)' opacity='0.85'>
        <path
          fill='#7bafd4'
          d='M21.9,8.89L20.85,4.52C20.63,3.62 19.85,3 18.94,3H5.05C4.15,3 3.36,3.63 3.15,4.52L2.1,8.89C1.86,9.91 2.08,10.95 2.71,11.76C2.79,11.87 2.9,11.96 3,12.07V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12.07C21.1,11.97 21.21,11.87 21.29,11.77C21.92,10.96 22.15,9.91 21.9,8.89M18.91,4.99L19.96,9.36C20.06,9.78 19.97,10.19 19.71,10.52C19.57,10.7 19.27,11 18.77,11C18.16,11 17.63,10.51 17.56,9.85L16.98,5L18.91,4.99M13,5H14.96L15.5,9.52C15.55,9.91 15.42,10.31 15.16,10.6C14.93,10.86 14.6,11 14.17,11C13.47,11 12.88,10.39 12.88,9.64V5H13M9.36,9.85C9.3,10.55 8.84,11 8.27,11C7.83,11 7.5,10.86 7.27,10.6C7,10.31 6.88,9.91 6.93,9.52L7.47,5H9V9.65C9,9.72 9.36,9.85 9.36,9.85M4.04,9.36L5.05,5H6.95L6.4,9.84C6.34,10.5 5.84,11 5.23,11C4.73,11 4.43,10.7 4.3,10.52C4.04,10.2 3.94,9.78 4.04,9.36M5,19V12.97C5.08,12.98 5.16,13 5.23,13C6.1,13 6.89,12.64 7.47,12.05C8.07,12.65 8.87,13 9.78,13C10.65,13 11.43,12.64 12,12.07C12.58,12.64 13.37,13 14.26,13C15.1,13 15.9,12.65 16.5,12.05C17.08,12.64 17.87,13 18.74,13C18.82,13 18.9,12.98 18.97,12.97V19H5Z'
        />
      </g>

      {/* Business name line */}
      <rect
        x='132'
        y='86'
        width='100'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.35'
      />

      {/* Star-in-circle rating row */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g
          key={`star-${i}`}
          transform={`translate(${72 + i * 24}, 140) scale(0.85)`}
          opacity={i < 4 ? 0.8 : 0.3}
        >
          <path
            fill='#7bafd4'
            d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M14.81,15.43L13.97,11.79L16.79,9.35L13.07,9.03L11.62,5.6L10.16,9.03L6.44,9.35L9.26,11.79L8.42,15.43L11.62,13.5L14.81,15.43Z'
          />
        </g>
      ))}

      {/* Review count text bar */}
      <rect
        x='198'
        y='148'
        width='56'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.25'
      />

      {/* Info rows */}
      <rect
        x='80'
        y='182'
        width='14'
        height='8'
        rx='2'
        fill='#7bafd4'
        opacity='0.3'
      />
      <rect
        x='102'
        y='182'
        width='120'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.2'
      />

      <rect
        x='80'
        y='202'
        width='14'
        height='8'
        rx='2'
        fill='#7bafd4'
        opacity='0.3'
      />
      <rect
        x='102'
        y='202'
        width='88'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.2'
      />

      <rect
        x='80'
        y='222'
        width='14'
        height='8'
        rx='2'
        fill='#7bafd4'
        opacity='0.3'
      />
      <rect
        x='102'
        y='222'
        width='104'
        height='8'
        rx='4'
        fill='#7bafd4'
        opacity='0.2'
      />

      {/* CTA button bar at bottom of card */}
      <rect
        x='80'
        y='246'
        width='180'
        height='10'
        rx='5'
        fill='#7bafd4'
        opacity='0.18'
      />
    </svg>
  );
}

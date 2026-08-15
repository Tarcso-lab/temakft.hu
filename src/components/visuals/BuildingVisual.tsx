/**
 * Hero-illusztráció: egy épület sematikus metszete, amelyen a TEMA által
 * kezelt műszaki rétegek látszanak — erősáram, gyengeáram, hálózat és
 * automatizálás. Tisztán SVG, ezért éles marad minden felbontáson,
 * és nincs külső képfüggősége.
 */
export function BuildingVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 460"
      fill="none"
      className={className}
      role="img"
      aria-label="Épület sematikus metszete az erősáramú, gyengeáramú, hálózati és automatizálási rendszerekkel"
    >
      <defs>
        <linearGradient id="bv-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f2823" />
          <stop offset="100%" stopColor="#111714" />
        </linearGradient>
        <linearGradient id="bv-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a8e10c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a8e10c" stopOpacity="0" />
        </linearGradient>
        <filter id="bv-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* Háttérfény */}
      <ellipse cx="270" cy="230" rx="200" ry="180" fill="url(#bv-glow)" filter="url(#bv-soft)" />

      {/* Talaj */}
      <path d="M40 404h440" stroke="#2b352f" strokeWidth="2" />
      <path d="M70 418h380M110 432h300" stroke="#1f2823" strokeWidth="2" />

      {/* Épülettest — négy szint */}
      {[0, 1, 2, 3].map((i) => {
        const y = 92 + i * 78;
        return (
          <g key={i}>
            <rect
              x="118"
              y={y}
              width="284"
              height="70"
              rx="3"
              fill="url(#bv-floor)"
              stroke="#3d4a43"
              strokeWidth="1.5"
            />
            {/* Ablakok */}
            {[0, 1, 2, 3, 4].map((w) => (
              <rect
                key={w}
                x={136 + w * 53}
                y={y + 14}
                width="34"
                height="26"
                rx="2"
                fill={i === 1 && w === 2 ? "#a8e10c" : "#243029"}
                opacity={i === 1 && w === 2 ? 0.85 : 1}
              />
            ))}
            {/* Szintjelölő */}
            <circle cx="126" cy={y + 60} r="2" fill="#6d9407" />
          </g>
        );
      })}

      {/* Tető */}
      <path d="M104 92h312l-14-24H118l-14 24Z" fill="#1f2823" stroke="#3d4a43" strokeWidth="1.5" />

      {/* Függőleges gerinc — a strukturált hálózat nyomvonala */}
      <path
        d="M260 92v312"
        stroke="#a8e10c"
        strokeWidth="2"
        strokeDasharray="6 5"
        opacity="0.55"
      />

      {/* Rendszerpontok a gerincen */}
      {[130, 208, 286, 364].map((cy, i) => (
        <g key={cy}>
          <circle cx="260" cy={cy} r="5.5" fill="#0b100d" stroke="#a8e10c" strokeWidth="2" />
          <circle cx="260" cy={cy} r="5.5" fill="none" stroke="#a8e10c" strokeWidth="1.5" opacity="0.5">
            <animate
              attributeName="r"
              values="5.5;13;5.5"
              dur="3.2s"
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0;0.5"
              dur="3.2s"
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Elosztószekrény bal oldalon */}
      <rect x="52" y="286" width="46" height="72" rx="4" fill="#161d19" stroke="#3d4a43" strokeWidth="1.5" />
      <path d="M60 300h30M60 310h30M60 320h30M60 330h18" stroke="#6d9407" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M98 322h20" stroke="#a8e10c" strokeWidth="2" strokeDasharray="4 4" />

      {/* Kamera jobb felül */}
      <g transform="translate(418 120)">
        <rect x="0" y="0" width="34" height="18" rx="4" fill="#161d19" stroke="#3d4a43" strokeWidth="1.5" />
        <path d="M34 6l14-6v18l-14-6z" fill="#1f2823" stroke="#3d4a43" strokeWidth="1.5" />
        <circle cx="10" cy="9" r="3.5" fill="#a8e10c" />
        <path d="M0 9H-16" stroke="#a8e10c" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      </g>

      {/* Beléptető olvasó jobb alul */}
      <g transform="translate(420 300)">
        <rect x="0" y="0" width="26" height="38" rx="5" fill="#161d19" stroke="#3d4a43" strokeWidth="1.5" />
        <circle cx="13" cy="13" r="6" fill="none" stroke="#a8e10c" strokeWidth="2" />
        <path d="M8 27h10" stroke="#6d9407" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M0 19H-18" stroke="#a8e10c" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      </g>

      {/* Tetőn: automatizálási vezérlő */}
      <g transform="translate(240 46)">
        <rect x="0" y="0" width="40" height="22" rx="4" fill="#0b100d" stroke="#a8e10c" strokeWidth="1.8" />
        <path d="M8 11h6l3-5 4 10 3-5h8" stroke="#a8e10c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

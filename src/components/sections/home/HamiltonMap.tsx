/**
 * City of Hamilton silhouette — Flamborough township block, dense urban
 * waterfront band, Glanbrook wedge. Faint monochrome line work; the whole
 * city is always visible, never cropped.
 */
export function HamiltonMap({ className = "" }: { className?: string }) {
  const hair = "#c6bfae";
  const faint = "#a89e8a";
  const label = "var(--muted)";

  return (
    <svg
      viewBox="0 0 1600 900"
      className={`hmap ${className}`}
      role="img"
      aria-label="Faint outline map of the city of Hamilton, Ontario"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* city boundary */}
      <path
        d="M700,60 L1000,190 L940,250 L980,300 L1250,300 L1600,340 L1520,520 L1120,870 L780,730 L600,660 L420,570 L330,390 L470,180 Z"
        fill="none"
        stroke={faint}
        strokeWidth="2"
      />

      {/* Flamborough township divisions */}
      <g stroke={hair} strokeWidth="1.25">
        <line x1="560" y1="120" x2="480" y2="620" />
        <line x1="680" y1="90" x2="620" y2="660" />
        <line x1="800" y1="120" x2="770" y2="600" />
        <line x1="400" y1="330" x2="920" y2="240" />
        <line x1="370" y1="450" x2="900" y2="360" />
        <line x1="880" y1="160" x2="850" y2="560" />
      </g>

      {/* urban density hatch along the water */}
      <g stroke={hair} strokeWidth="1.25">
        <line x1="980" y1="305" x2="980" y2="395" />
        <line x1="1040" y1="305" x2="1040" y2="395" />
        <line x1="1100" y1="305" x2="1100" y2="395" />
        <line x1="1160" y1="305" x2="1160" y2="395" />
        <line x1="1220" y1="305" x2="1220" y2="395" />
        <line x1="1280" y1="308" x2="1280" y2="392" />
        <line x1="960" y1="325" x2="1300" y2="325" />
        <line x1="960" y1="350" x2="1300" y2="350" />
        <line x1="960" y1="375" x2="1300" y2="375" />
      </g>

      {/* Lake Ontario */}
      <path
        d="M1000,190 C1150,220 1380,260 1600,300"
        fill="none"
        stroke={faint}
        strokeWidth="1.75"
      />

      {/* Hamilton Harbour notch */}
      <path
        d="M980,300 C1030,268 1130,262 1180,293 C1202,330 1150,356 1090,351 C1030,346 990,330 980,300 Z"
        fill="none"
        stroke={faint}
        strokeWidth="1.75"
      />

      {/* Cootes Paradise */}
      <path
        d="M812,318 C848,300 898,304 918,330 C934,352 918,378 888,382 C856,386 818,372 810,348 C807,336 808,326 812,318 Z"
        fill="none"
        stroke={faint}
        strokeWidth="1.75"
      />

      {/* Niagara Escarpment */}
      <path
        d="M330,560 C560,538 760,522 980,512 C1180,502 1360,502 1500,522"
        fill="none"
        stroke={faint}
        strokeWidth="1.75"
      />

      {/* studio pin — downtown */}
      <g>
        <circle cx="1010" cy="362" r="15" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <circle cx="1010" cy="362" r="4.5" fill="var(--accent)" />
      </g>

      {/* whisper labels — desktop only, illegible when small */}
      <g fontFamily="var(--font-mono)" fill={label} opacity="0.75" letterSpacing="4" className="hidden lg:block">
        <text x="1400" y="272" fontSize="17">LAKE ONTARIO</text>
        <text x="1080" y="312" fontSize="14" textAnchor="middle">HAMILTON HARBOUR</text>
        <text x="700" y="348" fontSize="13">COOTES PARADISE</text>
        <text x="1240" y="556" fontSize="14">NIAGARA ESCARPMENT</text>
        <text x="1010" y="408" fontSize="15" textAnchor="middle">HAMILTON</text>
        <text x="640" y="260" fontSize="14">FLAMBOROUGH</text>
        <text x="905" y="205" fontSize="13">WATERDOWN</text>
        <text x="742" y="442" fontSize="13">DUNDAS</text>
        <text x="560" y="632" fontSize="13">ANCASTER</text>
        <text x="1050" y="748" fontSize="14">GLANBROOK</text>
        <text x="1360" y="442" fontSize="13">STONEY CREEK</text>
      </g>
    </svg>
  );
}

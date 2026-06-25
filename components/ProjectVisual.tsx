"use client";

interface ProjectVisualProps {
  id: string;
  className?: string;
}

const visuals: Record<string, () => React.JSX.Element> = {
  "stock-inventory": () => (
    <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Grid lines */}
      {[100, 200, 300, 400, 500].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="300" stroke="#E0DAD4" strokeWidth="0.5" />
      ))}
      {[60, 120, 180, 240].map((y) => (
        <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#E0DAD4" strokeWidth="0.5" />
      ))}
      {/* Header bar */}
      <rect x="24" y="20" width="180" height="32" rx="4" fill="#E0DAD4" />
      <rect x="216" y="20" width="80" height="32" rx="4" fill="#EDE8E3" />
      {/* Status dots + rows */}
      {[80, 110, 140, 170, 200].map((y, i) => (
        <g key={y}>
          <circle cx="44" cy={y} r="5" fill={i === 0 ? "#1A1A1A" : i === 2 ? "#6B6560" : "#E0DAD4"} />
          <rect x="60" y={y - 5} width={120 + (i % 3) * 30} height="10" rx="2" fill="#EDE8E3" />
          <rect x="300" y={y - 5} width={60 + (i % 2) * 20} height="10" rx="2" fill="#E0DAD4" />
          <rect x="450" y={y - 5} width="40" height="10" rx="2" fill={i === 0 ? "#1A1A1A" : "#EDE8E3"} />
        </g>
      ))}
      {/* Bottom summary boxes */}
      <rect x="24" y="240" width="120" height="40" rx="4" fill="#1A1A1A" />
      <rect x="156" y="240" width="120" height="40" rx="4" fill="#EDE8E3" />
      <rect x="288" y="240" width="120" height="40" rx="4" fill="#EDE8E3" />
      <rect x="24" y="252" width="40" height="8" rx="2" fill="#F5F0EB" />
      <rect x="156" y="252" width="60" height="8" rx="2" fill="#C4BDB8" />
    </svg>
  ),

  "design-system": () => (
    <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background grid */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={20 + i * 96} y="20" width="76" height="24" rx="12" fill={i % 3 === 0 ? "#1A1A1A" : i % 3 === 1 ? "#E0DAD4" : "#EDE8E3"} />
      ))}
      {/* Component blocks row 2 */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={20 + i * 196} y="64" width="176" height="60" rx="6" fill="#EDE8E3" stroke="#E0DAD4" strokeWidth="1" />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={36 + i * 196} y="80" width="80" height="8" rx="2" fill="#C4BDB8" />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={36 + i * 196} y="96" width="50" height="6" rx="2" fill="#E0DAD4" />
      ))}
      {/* Component row 3 */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={20 + i * 146} y="148" width="126" height="100" rx="6" fill="#EDE8E3" stroke="#E0DAD4" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={36 + i * 146} y="164" width="94" height="52" rx="3" fill="#E0DAD4" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={36 + i * 146} y="224" width="60" height="7" rx="2" fill="#C4BDB8" />
      ))}
    </svg>
  ),

  "task-allocation": () => (
    <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* 3 kanban columns */}
      {[0, 1, 2].map((col) => (
        <g key={col}>
          {/* Column header */}
          <rect x={20 + col * 196} y="16" width="176" height="28" rx="4" fill="#EDE8E3" />
          <rect x={36 + col * 196} y="24" width={60 + col * 10} height="10" rx="2" fill="#C4BDB8" />
          <circle cx={172 + col * 196} cy="30" r="8" fill={col === 0 ? "#1A1A1A" : "#E0DAD4"} />

          {/* Cards */}
          {[0, 1, col === 0 ? 2 : -1].filter((c) => c >= 0).map((card) => (
            <g key={card}>
              <rect
                x={20 + col * 196}
                y={60 + card * (col === 1 ? 90 : 80)}
                width="176"
                height={col === 1 ? 80 : 70}
                rx="4"
                fill="#F5F0EB"
                stroke="#E0DAD4"
                strokeWidth="1"
              />
              <rect x={36 + col * 196} y={72 + card * (col === 1 ? 90 : 80)} width="100" height="8" rx="2" fill="#1A1A1A" />
              <rect x={36 + col * 196} y={86 + card * (col === 1 ? 90 : 80)} width="120" height="6" rx="2" fill="#E0DAD4" />
              {/* Avatar circles */}
              <circle cx={36 + col * 196} cy={114 + card * (col === 1 ? 90 : 80)} r="8" fill="#E0DAD4" />
              <circle cx={50 + col * 196} cy={114 + card * (col === 1 ? 90 : 80)} r="8" fill="#C4BDB8" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  ),

  "staff-scheduling": () => (
    <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Day headers */}
      {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
        <g key={i}>
          <rect x={20 + i * 82} y="16" width="72" height="28" rx="3" fill={i === 0 ? "#1A1A1A" : "#EDE8E3"} />
          <text x={20 + i * 82 + 36} y="35" textAnchor="middle" fill={i === 0 ? "#F5F0EB" : "#6B6560"} fontSize="11" fontFamily="system-ui">{day}</text>
        </g>
      ))}
      {/* Calendar rows */}
      {[0, 1, 2, 3].map((row) => (
        <g key={row}>
          {[0, 1, 2, 3, 4, 5, 6].map((col) => {
            const hasMorning = (row + col) % 3 !== 2;
            const hasEvening = (row * col) % 3 === 0;
            return (
              <g key={col}>
                <rect x={20 + col * 82} y={56 + row * 58} width="72" height="52" rx="3" fill="#F5F0EB" stroke="#E0DAD4" strokeWidth="0.5" />
                {hasMorning && (
                  <rect x={26 + col * 82} y={62 + row * 58} width="60" height="16" rx="2" fill="#1A1A1A" opacity={col === 6 ? "0.2" : "0.85"} />
                )}
                {hasEvening && (
                  <rect x={26 + col * 82} y={84 + row * 58} width="60" height="14" rx="2" fill="#C4BDB8" />
                )}
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  ),
};

export default function ProjectVisual({ id, className = "" }: ProjectVisualProps) {
  const Visual = visuals[id];
  if (!Visual) return <div className={`bg-surface ${className}`} />;

  return (
    <div className={`bg-surface overflow-hidden ${className}`}>
      <Visual />
    </div>
  );
}

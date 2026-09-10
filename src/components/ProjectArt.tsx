import type { FeaturedProject } from "@/data/site";

export function ProjectArt({ project }: { project: FeaturedProject }) {
  return (
    <figure className="relative overflow-hidden border-[3px] border-double border-ink/25 bg-paper-2">
      <p className="running-head absolute top-3 left-4">Plate {project.plate}</p>
      <div className="flex min-h-[16rem] items-center justify-center px-6 pt-10 pb-16">
        {project.slug === "noforma" && <NoFormaArt />}
        {project.slug === "mentormesh" && <MeshArt />}
        {project.slug === "oasis" && <OasisArt />}
        {project.slug === "silence" && <SilenceArt />}
      </div>
      <span className="plate-gate">
        <span>{project.kicker}</span>
        <span>{project.gate}</span>
      </span>
    </figure>
  );
}

function NoFormaArt() {
  return (
    <svg viewBox="0 0 320 220" className="h-[70%] w-[80%]" aria-hidden>
      <rect x="70" y="28" width="180" height="140" rx="18" fill="none" stroke="#1c1610" strokeOpacity="0.45" />
      <circle cx="160" cy="88" r="28" fill="none" stroke="#7a2e2a" strokeWidth="1.4" />
      <path d="M118 148c12-22 72-22 84 0" fill="none" stroke="#1c1610" strokeOpacity="0.4" />
    </svg>
  );
}

function MeshArt() {
  const nodes = [
    [40, 110],
    [110, 48],
    [170, 130],
    [230, 60],
    [280, 150],
    [90, 170],
  ];
  return (
    <svg viewBox="0 0 320 220" className="h-[75%] w-[85%]" aria-hidden>
      {nodes.map(([x, y], i) =>
        nodes.slice(i + 1).map(([x2, y2], j) => (
          <line
            key={`${i}-${j}`}
            x1={x}
            y1={y}
            x2={x2}
            y2={y2}
            stroke="#1c1610"
            strokeOpacity="0.25"
          />
        )),
      )}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 7 : 4} fill={i === 2 ? "#7a2e2a" : "#1c1610"} />
      ))}
    </svg>
  );
}

function OasisArt() {
  return (
    <svg viewBox="0 0 320 220" className="h-[80%] w-[80%]" aria-hidden>
      {[28, 52, 76, 100].map((r) => (
        <circle
          key={r}
          cx="160"
          cy="110"
          r={r}
          fill="none"
          stroke="#1c1610"
          strokeOpacity={0.4 - r / 320}
        />
      ))}
      <circle cx="160" cy="110" r="6" fill="#7a2e2a" />
    </svg>
  );
}

function SilenceArt() {
  const bars = [18, 36, 22, 54, 28, 70, 34, 48, 20, 62, 26, 40];
  return (
    <svg viewBox="0 0 320 220" className="h-[70%] w-[80%]" aria-hidden>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 20}
          y={110 - h / 2}
          width="8"
          height={h}
          fill={i === 5 ? "#7a2e2a" : "#1c1610"}
          opacity={0.28 + (i % 3) * 0.1}
        />
      ))}
    </svg>
  );
}

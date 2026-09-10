import type { FeaturedProject } from "@/data/site";

const tones: Record<FeaturedProject["tone"], string> = {
  ember: "from-[#3a120c] via-[#1a0c0a] to-[#08070b]",
  gold: "from-[#2a2114] via-[#14110c] to-[#08070b]",
  bone: "from-[#2a2420] via-[#141210] to-[#08070b]",
  mute: "from-[#1a1c22] via-[#101218] to-[#08070b]",
};

export function ProjectArt({
  project,
}: {
  project: FeaturedProject;
}) {
  return (
    <div
      className={`relative flex h-full min-h-[18rem] items-center justify-center overflow-hidden bg-linear-to-br ${tones[project.tone]}`}
    >
      {project.slug === "noforma" && <NoFormaArt />}
      {project.slug === "mentormesh" && <MeshArt />}
      {project.slug === "oasis" && <OasisArt />}
      {project.slug === "silence" && <SilenceArt />}
      <span className="absolute right-5 bottom-4 font-mono text-[10px] tracking-[0.22em] text-bone/40 uppercase">
        {project.kicker}
      </span>
    </div>
  );
}

function NoFormaArt() {
  return (
    <svg viewBox="0 0 320 220" className="h-[70%] w-[80%] opacity-90" aria-hidden>
      <rect x="70" y="28" width="180" height="140" rx="18" fill="none" stroke="#ece6db" strokeOpacity="0.35" />
      <circle cx="160" cy="88" r="28" fill="none" stroke="#ff5a32" strokeWidth="1.4" />
      <path d="M118 148c12-22 72-22 84 0" fill="none" stroke="#ece6db" strokeOpacity="0.4" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="0"
          x2="320"
          y1={40 + i * 36}
          y2={40 + i * 36}
          stroke="#ece6db"
          strokeOpacity="0.08"
        />
      ))}
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
            stroke="#c4a574"
            strokeOpacity="0.28"
          />
        )),
      )}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 7 : 4} fill={i === 2 ? "#ff5a32" : "#c4a574"} />
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
          stroke="#ece6db"
          strokeOpacity={0.45 - r / 280}
        />
      ))}
      <circle cx="160" cy="110" r="6" fill="#ff5a32" />
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
          fill={i === 5 ? "#ff5a32" : "#ece6db"}
          opacity={0.35 + (i % 3) * 0.12}
        />
      ))}
    </svg>
  );
}

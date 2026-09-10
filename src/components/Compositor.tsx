"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

type Line = { kind: "cmd" | "out" | "note"; text: string };

const FORTUNES = site.fortunes;

function interpret(raw: string): { lines: Line[]; href?: string } {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return { lines: [] };

  if (cmd === "help") {
    return {
      lines: [
        { kind: "out", text: "whoami   ls   cat   open   fortune   ping   clear" },
        { kind: "note", text: "// type a chapter: open stories" },
      ],
    };
  }
  if (cmd === "whoami") {
    return {
      lines: [
        { kind: "out", text: site.name },
        { kind: "out", text: `${site.role.toLowerCase()} · ${site.company} · ${site.location}` },
      ],
    };
  }
  if (cmd === "ls" || cmd === "ls contents") {
    return {
      lines: [{ kind: "out", text: "preface  present  stories  citations  author  colophon" }],
    };
  }
  if (cmd === "pwd") {
    return { lines: [{ kind: "out", text: "/jaynu-press/working-copy" }] };
  }
  if (cmd === "fortune") {
    const pick = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
    return { lines: [{ kind: "note", text: pick }] };
  }
  if (cmd === "ping" || cmd === "mail") {
    return {
      lines: [{ kind: "out", text: site.email }],
      href: `mailto:${site.email}`,
    };
  }
  if (cmd.startsWith("open ") || cmd.startsWith("cat ") || cmd.startsWith("cd ")) {
    const arg = cmd.split(/\s+/)[1] ?? "";
    const map: Record<string, string> = {
      preface: "#preface",
      present: "#present",
      stories: "#stories",
      citations: "#citations",
      author: "#author",
      colophon: "#colophon",
      contents: "#contents",
      i: "#preface",
      ii: "#present",
      iii: "#stories",
      iv: "#citations",
      v: "#author",
      vi: "#colophon",
    };
    const href = map[arg];
    if (href) return { lines: [{ kind: "out", text: `opening ${arg}` }], href };
    return { lines: [{ kind: "out", text: `cat: ${arg}: no such signature` }] };
  }
  if (cmd === "clear") return { lines: [] };
  return { lines: [{ kind: "out", text: `command not found: ${cmd}  — try help` }] };
}

export function Compositor({
  boot,
  className = "",
}: {
  boot: Line[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const input = useRef<HTMLInputElement>(null);
  const [lines, setLines] = useState<Line[]>(reduce ? boot : []);
  const [ready, setReady] = useState(Boolean(reduce));
  const [value, setValue] = useState("");

  useEffect(() => {
    if (reduce) {
      setLines(boot);
      setReady(true);
      return;
    }
    setLines([]);
    setReady(false);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setLines(boot.slice(0, i));
      if (i >= boot.length) {
        window.clearInterval(id);
        setReady(true);
      }
    }, 280);
    return () => window.clearInterval(id);
  }, [reduce, boot]);

  const run = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    if (trimmed.toLowerCase() === "clear") {
      setLines([]);
      setValue("");
      return;
    }
    const result = interpret(trimmed);
    setLines((prev) => [
      ...prev,
      { kind: "cmd", text: trimmed },
      ...result.lines,
    ]);
    setValue("");
    if (result.href) {
      window.setTimeout(() => {
        if (result.href?.startsWith("mailto:")) window.location.href = result.href;
        else {
          const id = result.href!.replace(/^#/, "");
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
      }, 180);
    }
  };

  return (
    <div
      className={`press p-4 ${className}`}
      onClick={() => input.current?.focus()}
    >
      <p className="prompt mb-2 text-[10px] tracking-[0.18em] uppercase">jaynu press</p>
      <div className="max-h-56 space-y-1 overflow-y-auto pr-1">
        {lines.map((line, i) => (
          <p
            key={`${line.text}-${i}`}
            className={
              line.kind === "cmd"
                ? "prompt"
                : line.kind === "note"
                  ? "text-[#d4b48a] italic"
                  : "text-[#d7e0c8]"
            }
          >
            {line.kind === "cmd" ? `$ ${line.text}` : line.text}
          </p>
        ))}
      </div>
      {ready && (
        <form
          className="mt-3 flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            run(value);
          }}
        >
          <span className="prompt">$</span>
          <input
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label="Compositor command"
            className="press-input"
            placeholder="help"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="press-caret" aria-hidden>
            █
          </span>
        </form>
      )}
      <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[10px] tracking-wide text-[#d4b48a]/80 uppercase">
        {["whoami", "ls", "fortune", "open stories", "ping"].map((hint) => (
          <button
            key={hint}
            type="button"
            className="hover:text-[#f3ead8]"
            onClick={() => run(hint)}
          >
            {hint}
          </button>
        ))}
      </p>
    </div>
  );
}

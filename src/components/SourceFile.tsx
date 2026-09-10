"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { fadeUp, stagger, view } from "@/lib/motion";

const lines = [
  { n: "1", html: <>{"// working copy · do not bind"}</> },
  { n: "2", html: <>&nbsp;</> },
  { n: "3", html: <>
    <span className="kw">export const</span> engineer = {"{"}
  </> },
  { n: "4", html: <>
    {"  "}name: <span className="str">&quot;{site.name}&quot;</span>,
  </> },
  { n: "5", html: <>
    {"  "}role: <span className="str">&quot;{site.role}&quot;</span>,
  </> },
  { n: "6", html: <>
    {"  "}now: <span className="str">&quot;{site.company}&quot;</span>,
  </> },
  { n: "7", html: <>
    {"  "}shelf: <span className="str">&quot;{site.location}&quot;</span>,
  </> },
  { n: "8", html: <>{"}"}</> },
  { n: "9", html: <>&nbsp;</> },
  { n: "10", html: <>
    <span className="kw">export const</span> stack = [
  </> },
  { n: "11", html: <>
    {"  "}{site.stack.languages.map((s) => <span key={s}><span className="str">&quot;{s}&quot;</span>, </span>)}
  </> },
  { n: "12", html: <>
    {"  "}{site.stack.product.slice(0, 4).map((s) => <span key={s}><span className="str">&quot;{s}&quot;</span>, </span>)}
  </> },
  { n: "13", html: <>]
  </> },
];

export function SourceFile() {
  return (
    <motion.aside
      className="press overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={view}
      variants={stagger}
      aria-label="jayna.ts"
    >
      <div className="flex items-center justify-between border-b border-[#b08a4a]/35 px-4 py-2">
        <p className="prompt">jayna.ts</p>
        <p className="text-[10px] tracking-[0.16em] text-[#d4b48a] uppercase">unsaved</p>
      </div>
      <ol className="px-3 py-3 font-mono text-[11px] leading-[1.7] sm:text-[12px]">
        {lines.map((line) => (
          <motion.li key={line.n} className="flex gap-4" variants={fadeUp}>
            <span className="w-4 shrink-0 text-right text-[#d4b48a]/50">{line.n}</span>
            <span className="min-w-0 text-[#d7e0c8]">{line.html}</span>
          </motion.li>
        ))}
      </ol>
    </motion.aside>
  );
}

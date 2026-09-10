"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { fadeUp, stagger, view } from "@/lib/motion";

const log = [
  { hash: "a3f2c1", line: "feat(natwest): production software" },
  { hash: "9e1b0d", line: "feat(hcl): rpa + genai on nokia" },
  { hash: "4c80e2", line: "feat(mit): emergency-call systems" },
  { hash: "b17a09", line: "chore: still shipping on weekends" },
];

const chips = [
  ...site.stack.languages,
  ...site.stack.product,
  ...site.stack.other,
];

export function CompileLog() {
  return (
    <motion.div
      className="mt-10"
      initial="hidden"
      whileInView="show"
      viewport={view}
      variants={stagger}
    >
      <motion.p className="running-head mb-3" variants={fadeUp}>
        $ git log --oneline
      </motion.p>
      <ol className="press mb-8 px-4 py-3">
        {log.map((row) => (
          <motion.li key={row.hash} className="flex gap-3" variants={fadeUp}>
            <span className="prompt">{row.hash}</span>
            <span className="text-[#d7e0c8]">{row.line}</span>
          </motion.li>
        ))}
      </ol>

      <motion.p className="running-head mb-3" variants={fadeUp}>
        imports
      </motion.p>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <motion.span key={chip} className="chip" variants={fadeUp}>
            {chip}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

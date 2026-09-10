"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, view } from "@/lib/motion";

export function ChapterHead({
  roman,
  kicker,
  title,
  deck,
  epigraph,
}: {
  roman: string;
  kicker: string;
  title: string;
  deck?: string;
  epigraph?: string;
}) {
  return (
    <motion.header
      className="chapter-head"
      initial="hidden"
      whileInView="show"
      viewport={view}
      variants={stagger}
    >
      <motion.p className="chapter-num" aria-hidden variants={fadeUp}>
        {roman}
      </motion.p>
      <motion.div variants={fadeUp}>
        <p className="running-head">{kicker}</p>
        <h2 className="mt-3 font-display text-5xl italic tracking-tight sm:text-6xl">
          {title}
        </h2>
        {epigraph ? <p className="whisper mt-4 max-w-xl">{epigraph}</p> : null}
        {deck ? (
          <p className="mt-4 max-w-md text-sm leading-relaxed text-fade">{deck}</p>
        ) : null}
      </motion.div>
    </motion.header>
  );
}

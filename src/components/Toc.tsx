"use client";

import { motion } from "framer-motion";
import { Compositor } from "@/components/Compositor";
import { site } from "@/data/site";
import { fadeUp, stagger, view } from "@/lib/motion";

const boot = [
  { kind: "cmd" as const, text: "ls contents" },
  { kind: "out" as const, text: "preface  present  stories  citations  author  colophon" },
  { kind: "note" as const, text: site.epigraphs.hope },
];

export function Toc() {
  return (
    <section id="contents" className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-start lg:gap-16">
        <motion.div initial="hidden" whileInView="show" viewport={view} variants={stagger}>
          <motion.p className="running-head" variants={fadeUp}>
            Front matter
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-5xl italic tracking-tight sm:text-6xl"
            variants={fadeUp}
          >
            Contents
          </motion.h2>
          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-fade"
            variants={fadeUp}
          >
            {site.contentsNote}
          </motion.p>

          <ol className="mt-12">
            {site.chapters.map((row) => (
              <motion.li key={row.title} variants={fadeUp}>
                <a href={row.href} className="toc-row">
                  <span className="font-display text-3xl italic sm:text-4xl">{row.title}</span>
                  <span className="toc-leaders" aria-hidden />
                  <span className="running-head shrink-0">{row.roman}</span>
                </a>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        <div className="lg:sticky lg:top-28">
          <Compositor boot={boot} />
        </div>
      </div>
    </section>
  );
}

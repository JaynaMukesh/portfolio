"use client";

import { motion } from "framer-motion";
import { ChapterHead } from "@/components/ChapterHead";
import { site } from "@/data/site";
import { fadeUp, stagger, view } from "@/lib/motion";

export function Citations() {
  return (
    <section
      id="citations"
      className="border-y border-rule bg-paper-2/40 px-5 py-16 sm:px-8 lg:px-16 lg:py-24"
    >
      <ChapterHead
        roman="iv"
        kicker="Chapter iv"
        title="Citations"
        epigraph={site.epigraphs.citations}
        deck="Weekend work that got judged. A patent I still do a double take at. A paper from college."
      />

      <motion.ul
        className="divide-y divide-rule border-y border-rule"
        initial="hidden"
        whileInView="show"
        viewport={view}
        variants={stagger}
      >
        {site.wins.map((win) => (
          <motion.li key={`${win.project}-${win.year}`} variants={fadeUp}>
            <a
              href={win.href}
              target="_blank"
              rel="noreferrer"
              className="grid grid-cols-1 gap-2 py-7 md:grid-cols-[4.5rem_1.2fr_1fr_1fr_auto] md:items-baseline md:gap-6"
            >
              <span className="running-head text-ribbon">{win.year}</span>
              <div>
                <p className="font-display text-3xl">{win.project}</p>
                <p className="mt-1 running-head">{win.award}</p>
              </div>
              <p className="text-sm text-fade">{win.event}</p>
              <p className="text-sm leading-relaxed text-fade">{win.note}</p>
              <span className="running-head text-ribbon">open ://</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="mt-14 grid gap-6 lg:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={view}
        variants={stagger}
      >
        {site.records.map((rec) => (
          <motion.article
            key={rec.title}
            className="border border-rule bg-paper p-6"
            variants={fadeUp}
          >
            <p className="running-head text-ribbon">{rec.kind}</p>
            <h3 className="mt-3 font-display text-2xl leading-snug">
              {rec.href ? (
                <a href={rec.href} target="_blank" rel="noreferrer" className="ink-link">
                  {rec.title}
                </a>
              ) : (
                rec.title
              )}
            </h3>
            <p className="mt-4 running-head">{rec.meta}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

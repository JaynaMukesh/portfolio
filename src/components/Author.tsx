"use client";

import { motion } from "framer-motion";
import { ChapterHead } from "@/components/ChapterHead";
import { site } from "@/data/site";
import { fadeUp, stagger, view } from "@/lib/motion";

export function Author() {
  const first = site.author[0];

  return (
    <section id="author" className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <ChapterHead roman="v" kicker="Chapter v" title="About the author" epigraph={site.epigraphs.author} />

      <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial="hidden" whileInView="show" viewport={view} variants={stagger}>
          <motion.p className="text-lg leading-[1.7] text-ink" variants={fadeUp}>
            <span className="drop">{first[0]}</span>
            {first.slice(1)}
          </motion.p>
          {site.author.slice(1).map((p) => (
            <motion.p
              key={p}
              variants={fadeUp}
              className="mt-6 text-lg leading-[1.7] text-fade"
            >
              {p}
            </motion.p>
          ))}
          <motion.p
            className="mt-8 text-base italic leading-relaxed text-ink"
            variants={fadeUp}
          >
            {site.nightstand}
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={view} variants={stagger}>
          <motion.div className="border border-rule p-5" variants={fadeUp}>
            <p className="running-head">{site.education.period}</p>
            <p className="mt-2 font-display text-2xl">{site.education.school}</p>
            <p className="mt-1 text-sm text-fade">{site.education.degree}</p>
            <p className="mt-2 running-head text-ribbon">{site.education.note}</p>
          </motion.div>

          <motion.div className="mt-8" variants={fadeUp}>
            <p className="running-head">Index of tools</p>
            <p className="mt-3 font-mono text-[11px] leading-relaxed tracking-wide text-fade uppercase">
              {[...site.stack.languages, ...site.stack.product, ...site.stack.other].join(" · ")}
            </p>
          </motion.div>

          <motion.div className="mt-8" variants={fadeUp}>
            <p className="running-head">Languages spoken</p>
            <p className="mt-3 text-sm text-fade">{site.languages.join(" · ")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChapterHead } from "@/components/ChapterHead";
import { SourceFile } from "@/components/SourceFile";
import { site } from "@/data/site";
import { fadeUp, view } from "@/lib/motion";

export function Preface() {
  const first = site.preface[0];
  const rest = first.slice(1);

  return (
    <section id="preface" className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <ChapterHead roman="i" kicker="Chapter i" title="Preface" epigraph={site.epigraphs.preface} />
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(18rem,26rem)] lg:gap-14">
        <div>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={view}
            variants={fadeUp}
            className="text-lg leading-[1.7] text-ink"
          >
            <span className="drop">{first[0]}</span>
            {rest}
          </motion.p>
          {site.preface.slice(1).map((p) => (
            <motion.p
              key={p}
              initial="hidden"
              whileInView="show"
              viewport={view}
              variants={fadeUp}
              className="mt-6 text-lg leading-[1.7] text-fade"
            >
              {p}
            </motion.p>
          ))}
        </div>
        <SourceFile />
      </div>
    </section>
  );
}

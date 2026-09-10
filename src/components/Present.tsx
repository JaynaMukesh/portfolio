"use client";

import { motion } from "framer-motion";
import { ChapterHead } from "@/components/ChapterHead";
import { CompileLog } from "@/components/CompileLog";
import { site } from "@/data/site";
import { fadeUp, stagger, view } from "@/lib/motion";

export function Present() {
  return (
    <section
      id="present"
      className="border-y border-rule bg-paper-2/50 px-5 py-16 sm:px-8 lg:px-16 lg:py-24"
    >
      <div>
        <ChapterHead roman="ii" kicker="Chapter ii" title={site.present.title} epigraph={site.epigraphs.present} />

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            {site.present.body.map((p, i) => (
              <motion.p
                key={p}
                initial="hidden"
                whileInView="show"
                viewport={view}
                variants={fadeUp}
                className={`text-lg leading-[1.7] text-ink ${i === 0 ? "" : "mt-6 text-fade"}`}
              >
                {i === 0 ? (
                  <>
                    <span className="drop">{p[0]}</span>
                    {p.slice(1)}
                  </>
                ) : (
                  p
                )}
              </motion.p>
            ))}
            <CompileLog />
          </div>

          <motion.ol
            className="border-t border-rule"
            initial="hidden"
            whileInView="show"
            viewport={view}
            variants={stagger}
          >
            {site.experience.map((job) => (
              <motion.li key={job.org} className="border-b border-rule py-5" variants={fadeUp}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-2xl">{job.org}</p>
                  <p className="running-head">{job.period}</p>
                </div>
                <p className="mt-1 text-sm text-ribbon">{job.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-fade">{job.note}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

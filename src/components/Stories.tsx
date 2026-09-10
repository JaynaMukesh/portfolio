"use client";

import { motion } from "framer-motion";
import { ChapterHead } from "@/components/ChapterHead";
import { ProjectArt } from "@/components/ProjectArt";
import { site } from "@/data/site";
import { fadeUp, stagger, view } from "@/lib/motion";

export function Stories() {
  return (
    <section id="stories" className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <ChapterHead
        roman="iii"
        kicker="Chapter iii"
        title="Stories"
        epigraph={site.epigraphs.stories}
        deck="Four that had a night attached. The rest are in the appendix."
      />

      <ul className="flex flex-col gap-16 lg:gap-20">
        {site.featured.map((project, i) => (
          <motion.li
            key={project.slug}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 lg:grid-cols-2 lg:items-center"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={`block ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <ProjectArt project={project} />
            </a>
            <div>
              <p className="running-head">
                Plate {project.plate} · {project.year}
              </p>
              <h3 className="mt-2 font-display text-4xl tracking-tight">
                <a href={project.href} target="_blank" rel="noreferrer" className="ink-link ink-on">
                  {project.name}
                </a>
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink sm:text-lg">
                {project.blurb}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-fade">{project.detail}</p>
              <p className="mt-5 font-mono text-[10px] tracking-[0.14em] text-fade uppercase">
                {project.stack.join(" · ")}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="file-link mt-6"
              >
                {project.gate}
              </a>
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="mt-16 border-t border-rule pt-10"
        initial="hidden"
        whileInView="show"
        viewport={view}
        variants={stagger}
      >
        <motion.p className="running-head" variants={fadeUp}>
          Appendix
        </motion.p>
        <ul className="mt-6 divide-y divide-rule border-y border-rule">
          {site.more.map((item) => (
            <motion.li key={item.name} variants={fadeUp}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[6rem_minmax(0,0.8fr)_minmax(0,1.2fr)_auto] sm:items-baseline"
              >
                <span className="running-head">{item.year}</span>
                <span className="font-display text-2xl">{item.name}</span>
                <span className="text-sm text-fade">{item.blurb}</span>
                <span className="running-head text-ribbon">open ://</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

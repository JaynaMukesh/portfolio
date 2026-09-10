"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { ProjectArt } from "@/components/ProjectArt";

export function Work() {
  return (
    <section id="work" className="relative border-t border-line px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase">
            01 — Selected work
          </p>
          <h2 className="mt-3 font-display text-5xl italic tracking-tight text-bone sm:text-6xl md:text-7xl">
            Builds that had to land.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-mute">
          AI agents, chain-backed records, and products judged in a room — not a dump of everything I&apos;ve touched.
        </p>
      </div>

      <ul className="flex flex-col gap-16 lg:gap-24">
        {site.featured.map((project, i) => (
          <motion.li
            key={project.slug}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block h-full min-h-[18rem] overflow-hidden"
              >
                <ProjectArt project={project} />
              </a>
            </div>

            <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1 lg:pr-8" : "lg:pl-4"}`}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
                {project.num} / {project.year}
              </p>
              <h3 className="mt-3 font-display text-4xl tracking-tight text-bone sm:text-5xl">
                {project.name}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-mute sm:text-lg">
                {project.blurb}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/70">
                {project.detail}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
                {project.stack.map((tech) => (
                  <li key={tech} className="font-mono text-[10px] tracking-[0.16em] text-mute uppercase">
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="link-line mt-7 w-fit font-mono text-[11px] tracking-[0.2em] text-bone uppercase"
              >
                Open the work ↗
              </a>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="mt-24 border-t border-line pt-10">
        <p className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase">Also in the reel</p>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {site.more.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-1 gap-2 py-6 sm:grid-cols-[8rem_minmax(0,0.9fr)_minmax(0,1.3fr)] sm:items-baseline"
              >
                <span className="font-mono text-[11px] text-mute">{item.year}</span>
                <span className="font-display text-2xl text-bone transition-colors group-hover:text-spark">
                  {item.name}
                </span>
                <span className="text-sm text-mute sm:text-right">{item.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

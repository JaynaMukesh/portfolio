"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Studio() {
  return (
    <section id="studio" className="relative border-t border-line px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <p className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase">
        03 — Studio
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-5xl italic tracking-tight text-bone sm:text-6xl">
        Quiet craft. Loud nights.
      </h2>

      <div className="mt-14 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          {site.about.map((p) => (
            <motion.p
              key={p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
              className="mt-0 mb-6 max-w-2xl text-lg leading-relaxed text-mute first:mt-0 sm:text-xl"
            >
              {p}
            </motion.p>
          ))}

          <ul className="mt-10 space-y-3">
            {site.outreach.map((item) => (
              <li key={item} className="max-w-xl text-sm leading-relaxed text-mute">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
            Chapters
          </p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {site.experience.map((job) => (
              <li key={job.org} className="py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-2xl text-bone">{job.org}</p>
                  <p className="font-mono text-[10px] tracking-wider text-mute uppercase">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gold">{job.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-mute">{job.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 border border-line p-5">
            <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
              {site.education.period}
            </p>
            <p className="mt-2 font-display text-2xl text-bone">{site.education.school}</p>
            <p className="mt-1 text-sm text-mute">{site.education.degree}</p>
            <p className="mt-2 font-mono text-[11px] text-gold">{site.education.note}</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
        <Stack label="Languages" items={[...site.stack.languages]} />
        <Stack label="Product" items={[...site.stack.product]} />
        <Stack label="Also" items={[...site.stack.other]} />
      </div>
    </section>
  );
}

function Stack({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">{label}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border border-line px-3 py-1.5 font-mono text-[11px] tracking-wider text-bone/80 uppercase"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

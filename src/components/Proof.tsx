"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Proof() {
  return (
    <section id="proof" className="relative border-t border-line bg-studio px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase">
            02 — Proof
          </p>
          <h2 className="mt-3 font-display text-5xl italic tracking-tight text-bone sm:text-6xl md:text-7xl">
            Judged. Shipped. Won.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-mute">
          Four hackathon wins, a patent, an IEEE paper. The record when the clock is real.
        </p>
      </div>

      <ul className="divide-y divide-line border-y border-line">
        {site.wins.map((win, i) => (
          <motion.li
            key={`${win.project}-${win.year}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
          >
            <a
              href={win.href}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-1 gap-3 py-8 md:grid-cols-[5rem_1.1fr_1fr_1.3fr] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-sm text-gold">{win.year}</span>
              <div>
                <p className="font-display text-3xl tracking-tight text-bone transition-colors group-hover:text-spark">
                  {win.project}
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-mute uppercase">
                  {win.award}
                </p>
              </div>
              <p className="text-sm text-mute md:text-base">{win.event}</p>
              <p className="text-sm leading-relaxed text-mute md:text-right">{win.note}</p>
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {site.records.map((rec) => (
          <article
            key={rec.title}
            className="border border-line bg-void/50 p-6 sm:p-8"
          >
            <p className="font-mono text-[10px] tracking-[0.22em] text-spark uppercase">
              {rec.kind}
            </p>
            <h3 className="mt-3 font-display text-2xl leading-snug text-bone sm:text-3xl">
              {rec.href ? (
                <a href={rec.href} target="_blank" rel="noreferrer" className="link-line">
                  {rec.title}
                </a>
              ) : (
                rec.title
              )}
            </h3>
            <p className="mt-4 font-mono text-[11px] tracking-wide text-mute">{rec.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

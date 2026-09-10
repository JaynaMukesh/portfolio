"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const hold = reduce ? 0 : 0.15;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col px-5 pt-24 pb-8 sm:px-8 lg:px-12 lg:pt-28 lg:pb-10"
    >
      <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.65fr)] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: hold + 0.05, ease }}
            className="mb-6 font-mono text-[11px] tracking-[0.22em] text-mute uppercase"
          >
            {site.role} · {site.company} · {site.location}
          </motion.p>

          <h1 className="font-display leading-[0.82] font-medium tracking-[-0.03em] text-bone">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: hold, ease }}
                className="block italic text-[clamp(4.2rem,16vw,11rem)]"
              >
                {site.firstName}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: hold + 0.12, ease }}
                className="block text-[clamp(4.2rem,16vw,11rem)]"
              >
                {site.lastName}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: hold + 0.3, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-mute sm:text-xl"
          >
            {site.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: hold + 0.45, ease }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a href="#work" className="spark-btn">
              See the work
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#contact"
              className="link-line font-mono text-[11px] tracking-[0.2em] text-bone uppercase"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: hold + 0.2, ease }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:mb-4"
        >
          <div className="film-gate overflow-hidden bg-raised">
            <div className="relative aspect-[4/5]">
              <Image
                src={site.portrait}
                alt={`${site.name}, ${site.role} at ${site.company}`}
                fill
                priority
                sizes="(min-width: 1024px) 28vw, 80vw"
                className="portrait-grade object-cover object-[center_15%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-void/55 via-transparent to-void/10 mix-blend-multiply"
              />
            </div>
          </div>
          <p className="mt-3 flex justify-between font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
            <span>Still 01</span>
            <span>{new Date().getFullYear()}</span>
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: hold + 0.65, duration: 0.8 }}
        className="mt-8 flex items-end justify-between gap-4 border-t border-line pt-5 lg:mt-4"
      >
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {site.facts.map((f) => (
            <li key={f.label}>
              <p className="font-mono text-[10px] tracking-[0.18em] text-mute uppercase">
                {f.label}
              </p>
              <p className="font-display text-xl text-bone italic">{f.value}</p>
            </li>
          ))}
        </ul>
        <a
          href="#work"
          className="hidden font-mono text-[11px] tracking-[0.22em] text-mute uppercase link-line sm:inline"
        >
          Scroll
        </a>
      </motion.div>
    </section>
  );
}

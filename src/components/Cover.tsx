"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Compositor } from "@/components/Compositor";
import { site } from "@/data/site";
import { ease } from "@/lib/motion";

const boot = [
  { kind: "cmd" as const, text: "whoami" },
  { kind: "out" as const, text: "jayna mukesh" },
  { kind: "out" as const, text: "natwest · chennai · still reading" },
];

export function Cover() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col bg-cloth px-5 pt-24 pb-8 text-[#f3ead8] sm:px-8 lg:px-16 lg:pt-28"
    >
      <motion.p
        className="running-head text-[#d4b48a]"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease }}
      >
        {site.edition}
      </motion.p>

      <div className="mt-8 grid flex-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-16">
        <div>
          <p className="running-head text-[#d4b48a]">Title page</p>
          <h1 className="mt-4 font-display text-[clamp(2.9rem,10vw,7.5rem)] leading-[0.86] font-medium tracking-[-0.03em] text-[#f3ead8]">
            <motion.span
              className="block italic"
              initial={reduce ? false : { y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              {site.firstName}
            </motion.span>
            <motion.span
              className="mt-1 block"
              initial={reduce ? false : { y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
            >
              {site.lastName}
            </motion.span>
          </h1>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#d4b48a]/70"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
          />
          <motion.p
            className="mt-7 max-w-md font-serif text-lg leading-relaxed text-[#e6d7c0]"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
          >
            {site.coverLine}
          </motion.p>
          <p className="whisper mt-5 max-w-md text-[#d4b48a]">{site.epigraphs.cover}</p>
          <motion.div
            className="mt-10 flex flex-wrap gap-5"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42, ease }}
          >
            <a href="#contents" className="ribbon-btn">
              Open the book
            </a>
            <a href="#stories" className="ink-link running-head text-[#e6d7c0]">
              ls stories/
            </a>
            <a href="#colophon" className="ink-link running-head text-[#e6d7c0]">
              $ ping
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
          className="mx-auto w-full max-w-sm"
        >
          <p className="running-head mb-3 text-[#d4b48a]">Frontispiece</p>
          <div className="border border-[#d4b48a]/40 p-2">
            <div className="relative aspect-[4/5]">
              <Image
                src={site.portrait}
                alt={`${site.name}, ${site.role} at ${site.company}`}
                fill
                priority
                sizes="(min-width: 768px) 32vw, 80vw"
                className="object-cover object-[center_12%]"
              />
            </div>
          </div>
          <Compositor boot={boot} className="mt-4" />
        </motion.div>
      </div>

      <p className="running-head mt-10 text-center text-[#d4b48a] md:mt-8">
        {site.press} · {site.location}
      </p>
    </section>
  );
}

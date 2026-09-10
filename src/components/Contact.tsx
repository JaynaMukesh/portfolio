"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line px-5 pt-24 pb-8 sm:px-8 lg:px-12 lg:pt-32"
    >
      <p className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase">
        04 — Close
      </p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] italic tracking-tight text-bone sm:text-6xl md:text-7xl"
      >
        If the work resonates — write.
      </motion.h2>
      <p className="mt-6 max-w-lg text-lg text-mute">
        Roles, collaborations, or a sharp problem. I read everything.
      </p>

      <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
        <a href={`mailto:${site.email}`} className="spark-btn w-fit">
          {site.email}
        </a>
        <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="link-line w-fit font-mono text-[11px] tracking-[0.18em] uppercase">
          LinkedIn
        </a>
        <a href={site.links.github} target="_blank" rel="noreferrer" className="link-line w-fit font-mono text-[11px] tracking-[0.18em] uppercase">
          GitHub
        </a>
        <a href={site.links.x} target="_blank" rel="noreferrer" className="link-line w-fit font-mono text-[11px] tracking-[0.18em] uppercase">
          X
        </a>
        <a href={site.resumeUrl} className="link-line w-fit font-mono text-[11px] tracking-[0.18em] uppercase">
          Resume
        </a>
      </div>

      <footer className="mt-24 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] tracking-wider text-mute uppercase">
          © {new Date().getFullYear()} {site.name} · {site.brand.toLowerCase()}.me
        </p>
        <Clock />
      </footer>

      <p
        aria-hidden
        className="pointer-events-none absolute -right-4 -bottom-8 select-none font-display text-[clamp(5rem,22vw,14rem)] leading-none tracking-tighter text-bone/[0.04]"
      >
        {site.brand}
      </p>
    </section>
  );
}

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000 * 30);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="font-mono text-[11px] tracking-wider text-mute uppercase">
      Chennai {time || "—"}
    </p>
  );
}

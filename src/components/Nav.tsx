"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#proof", label: "Proof" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-void/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className="progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <div className="relative z-50 flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.28em] text-bone"
        >
          {site.brand}
          <span className="text-spark">·</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a href={site.resumeUrl} className="spark-btn !py-2">
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="font-mono text-[11px] tracking-[0.2em] text-bone uppercase md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-0 z-40 flex min-h-dvh flex-col gap-6 bg-[#08070b] px-6 pt-24 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl italic text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            onClick={() => setOpen(false)}
            className="mt-4 font-mono text-[11px] tracking-[0.2em] text-spark uppercase"
          >
            Resume PDF
          </a>
        </nav>
      )}
    </header>
  );
}

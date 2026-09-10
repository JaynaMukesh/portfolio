"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { useChapter } from "@/hooks/useChapter";

export function Contents() {
  const [open, setOpen] = useState(false);
  const chapter = useChapter();
  const onCloth = chapter === "cover" && !open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        onCloth ? "bg-transparent" : "bg-paper/90 backdrop-blur-sm"
      }`}
    >
      <div className="relative z-50 flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#top"
          className={`running-head ${onCloth ? "text-[#f3ead8]" : "text-ink"}`}
        >
          {site.press}
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {site.chapters.map((c) => (
            <a
              key={c.id}
              href={c.href}
              className={`running-head ink-link ${
                onCloth
                  ? "text-[#e6d7c0]"
                  : chapter === c.id
                    ? "text-ribbon"
                    : "text-ink"
              }`}
            >
              {c.roman}
            </a>
          ))}
          <a href="#colophon" className="ribbon-btn !py-2">
            $ ping
          </a>
        </nav>

        <button
          type="button"
          className={`running-head lg:hidden ${onCloth ? "text-[#f3ead8]" : "text-ink"}`}
          aria-expanded={open}
          aria-label={open ? "Close contents" : "Open contents"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Contents"}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-0 z-40 flex min-h-dvh flex-col gap-4 bg-[#f3ead8] px-6 pt-24 lg:hidden">
          <p className="running-head mb-2">Contents</p>
          {site.chapters.map((c) => (
            <a
              key={c.id}
              href={c.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
            >
              <span className="font-display text-3xl italic">{c.title}</span>
              <span className="running-head">{c.roman}</span>
            </a>
          ))}
          <a
            href="#colophon"
            onClick={() => setOpen(false)}
            className="mt-6 running-head text-ribbon"
          >
            $ ping
          </a>
        </nav>
      )}
    </header>
  );
}

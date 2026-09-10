"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { useChapter } from "@/hooks/useChapter";

const sessions: Record<string, string> = {
  contents: "$ compose — signatures i–vi",
  preface: "$ open preface.txt",
  present: "$ pwd /natwest/production",
  stories: "$ ls plates/  I  II  III  IV",
  citations: "$ grep -i win  ·  4 matches",
  author: "$ cat about.md  ·  still reading",
  colophon: "$ echo $EDITOR  ·  next.js",
};

const labels: Record<string, string> = {
  contents: "contents",
  preface: "preface",
  present: "ch. ii",
  stories: "ch. iii",
  citations: "ch. iv",
  author: "ch. v",
  colophon: "colophon",
};

export function Folio() {
  const chapter = useChapter();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.round((window.scrollY / max) * 24) + 1 : 1;
      setPage(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (chapter === "cover") return null;

  const line = sessions[chapter] ?? sessions.contents;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden px-8 pb-4 lg:block">
      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-6">
        <p className="folio">{site.name} · a working copy</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="folio text-ribbon"
          >
            {line}
          </motion.p>
        </AnimatePresence>
        <p className="folio text-right">
          {labels[chapter] ?? chapter} · {String(page).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}

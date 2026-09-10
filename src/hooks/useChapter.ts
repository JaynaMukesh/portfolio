"use client";

import { useEffect, useState } from "react";
import { site, type ChapterId } from "@/data/site";

const ids = ["top", "contents", ...site.chapters.map((c) => c.id)];

export function useChapter() {
  const [chapter, setChapter] = useState<ChapterId>("cover");

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id === "top") setChapter("cover");
        else if (id) setChapter(id as ChapterId);
      },
      { rootMargin: "-32% 0px -48% 0px", threshold: [0.15, 0.4] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return chapter;
}

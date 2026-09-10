"use client";

import { useEffect, useState } from "react";

export function Bookmark() {
  const [progress, setProgress] = useState(0.08);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? window.scrollY / max : 0;
      setProgress(0.08 + next * 0.42);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="bookmark hidden md:block"
      style={{ height: `${progress * 100}vh` }}
      aria-hidden
    />
  );
}

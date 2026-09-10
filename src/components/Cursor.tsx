"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(true);
  }, []);

  useEffect(() => {
    const el = ring.current;
    if (!on || !el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const over = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const hit = target?.closest("a, button");
      el.classList.toggle("is-hover", Boolean(hit));
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [on]);

  if (!on) return null;
  return <div ref={ring} className="cursor-ring" aria-hidden />;
}

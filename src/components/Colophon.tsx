"use client";

import { useEffect, useState } from "react";
import { ChapterHead } from "@/components/ChapterHead";
import { Compositor } from "@/components/Compositor";
import { site } from "@/data/site";

const boot = [
  { kind: "cmd" as const, text: "ping" },
  { kind: "out" as const, text: site.email },
];

export function Colophon() {
  return (
    <section
      id="colophon"
      className="border-t border-rule px-5 pt-16 pb-16 sm:px-8 lg:px-16 lg:pt-24"
    >
      <ChapterHead roman="vi" kicker="Back matter" title="Colophon" epigraph={site.epigraphs.colophon} />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-fade">
            Set in Cormorant and Source Serif. Built with Next.js, exported static.
            The compositor is a typesetter&apos;s joke — I compile for a living, just not with lead.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
            If you want to talk, write. Roles, a problem, a book you think I&apos;d like. I read it.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={`mailto:${site.email}`} className="ribbon-btn w-fit">
              $ ping
            </a>
            <a href={`mailto:${site.email}`} className="ink-link running-head">
              {site.email}
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="file-link">
              linkedin ://
            </a>
            <a href={site.links.github} target="_blank" rel="noreferrer" className="file-link">
              github ://
            </a>
            <a href={site.links.x} target="_blank" rel="noreferrer" className="file-link">
              x ://
            </a>
          </div>

          <div className="mt-16 max-w-xl border-t border-rule pt-8">
            <p className="running-head">Errata</p>
            <ul className="mt-4 space-y-3">
              {site.errata.map((item) => (
                <li key={item.page} className="text-sm leading-relaxed text-fade">
                  <span className="running-head mr-3 text-ribbon">p. {item.page}</span>
                  {item.note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Compositor boot={boot} />
      </div>

      <footer className="mt-20 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="folio">
          © {new Date().getFullYear()} {site.name} · printed for {site.url.replace("https://", "")}
        </p>
        <Clock />
      </footer>
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
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return <p className="folio">Chennai {time || "—"}</p>;
}

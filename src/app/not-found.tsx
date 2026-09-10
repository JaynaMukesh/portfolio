import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="running-head">Errata</p>
      <h1 className="mt-4 font-display text-5xl italic sm:text-7xl">
        This page was never bound.
      </h1>
      <Link href="/" className="ribbon-btn mt-10">
        Back to {site.press}
      </Link>
    </main>
  );
}

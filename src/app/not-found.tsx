import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase">404</p>
      <h1 className="mt-4 font-display text-5xl italic text-bone sm:text-7xl">
        Lost the frame.
      </h1>
      <Link href="/" className="spark-btn mt-10">
        Back to {site.brand}
      </Link>
    </main>
  );
}

import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Nav } from "@/components/Nav";
import { Proof } from "@/components/Proof";
import { Spotlight } from "@/components/Spotlight";
import { Studio } from "@/components/Studio";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <div className="vignette" aria-hidden />
      <Spotlight />
      <Cursor />
      <Intro />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Proof />
        <Studio />
        <Contact />
      </main>
    </>
  );
}

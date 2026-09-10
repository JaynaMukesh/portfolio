import { Author } from "@/components/Author";
import { Bookmark } from "@/components/Bookmark";
import { Citations } from "@/components/Citations";
import { Colophon } from "@/components/Colophon";
import { Contents } from "@/components/Contents";
import { Cover } from "@/components/Cover";
import { Cursor } from "@/components/Cursor";
import { Folio } from "@/components/Folio";
import { Preface } from "@/components/Preface";
import { Present } from "@/components/Present";
import { Stories } from "@/components/Stories";
import { Toc } from "@/components/Toc";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <div className="paper-grain" aria-hidden />
      <Cursor />
      <Bookmark />
      <Folio />
      <Contents />
      <main className="relative z-10">
        <Cover />
        <div className="endpaper">
          <p className="font-display text-xl tracking-normal italic sm:text-2xl">
            {site.epigraphs.contents}
          </p>
        </div>
        <Toc />
        <Preface />
        <Present />
        <Stories />
        <Citations />
        <Author />
        <Colophon />
      </main>
    </>
  );
}

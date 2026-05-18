import WorkCard from "@/components/WorkCard";
import TransitionLink from "@/components/TransitionLink";
import { works } from "@/data/works";

export const metadata = {
  title: "全部作品 | VISUAL STUDIO",
  description: "品牌视觉、AI 影像与电影化 campaign 作品列表。"
};

export default function WorkIndexPage() {
  return (
    <main className="min-h-screen bg-ink px-5 py-6 text-bone md:py-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between text-xs uppercase tracking-studio text-bone/45">
        <TransitionLink href="/" className="transition duration-500 hover:text-bone" data-cursor="button">
          返回首页
        </TransitionLink>
        <span>VISUAL STUDIO</span>
      </nav>

      <section className="mx-auto max-w-7xl py-16 md:py-24">
        <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-studio text-bone/42">全部作品 / All Works</p>
            <h1 className="font-display text-5xl uppercase leading-none md:text-8xl">Visual Archive</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-bone/58 md:text-base md:leading-8">
            品牌影片、AI 影像、视觉提案与 campaign 内容的完整作品索引。
          </p>
        </div>

        <div className="grid auto-rows-auto gap-7 md:grid-cols-2 xl:grid-cols-3">
          {works.map((work, index) => (
            <WorkCard key={work.slug} work={work} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

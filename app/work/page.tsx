import WorkCard from "@/components/WorkCard";
import TransitionLink from "@/components/TransitionLink";
import { works } from "@/data/works";

export const metadata = {
  title: "全部案例 | 创科视觉",
  description: "品牌视觉、品牌故事与整合传播案例列表。"
};

export default function WorkIndexPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-5 text-bone md:px-5 md:py-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-xs uppercase tracking-studio text-bone/45">
        <TransitionLink href="/" className="transition duration-500 hover:text-bone" data-cursor="button">
          返回首页
        </TransitionLink>
        <span>VISUAL STUDIO</span>
      </nav>

      <section className="mx-auto max-w-7xl py-12 md:py-24">
        <div className="mb-10 grid gap-6 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-studio text-bone/42">全部案例 / All Works</p>
            <h1 className="font-display text-5xl uppercase leading-none md:text-8xl">Visual Archive</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-bone/58 md:text-base md:leading-8">
            品牌影片、视觉提案与整合传播内容的完整案例索引。
          </p>
        </div>

        <div className="grid auto-rows-auto gap-5 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
          {works.map((work, index) => (
            <WorkCard key={work.slug} work={work} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

import DeckCard from "@/components/DeckCard";
import TransitionLink from "@/components/TransitionLink";
import { brandDecks } from "@/data/decks";

export const metadata = {
  title: "品牌全案 | VISUAL STUDIO",
  description: "品牌视觉全案、Campaign 提案与视觉系统 PDF 归档。"
};

export default function DecksPage() {
  return (
    <main className="min-h-screen bg-ink px-5 py-6 text-bone md:py-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between text-xs uppercase tracking-studio text-bone/45">
        <TransitionLink href="/" className="transition duration-500 hover:text-bone" data-cursor="button">
          返回首页
        </TransitionLink>
        <span>VISUAL STUDIO</span>
      </nav>

      <section className="mx-auto max-w-7xl py-16 md:py-24">
        <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-studio text-bone/42">品牌全案 / All Decks</p>
            <h1 className="font-display text-5xl uppercase leading-none md:text-8xl">Brand Archive</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-bone/58 md:text-base md:leading-8">
            品牌视觉全案、Campaign 提案与可落地传播视觉系统的 PDF 归档。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {brandDecks.map((deck, index) => (
            <DeckCard key={deck.slug} deck={deck} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

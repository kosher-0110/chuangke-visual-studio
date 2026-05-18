import DeckCard from "@/components/DeckCard";
import TransitionLink from "@/components/TransitionLink";
import { brandDecks } from "@/data/decks";

export const metadata = {
  title: "品牌提案归档 | 创科视觉",
  description: "品牌视觉全案、campaign 提案与可落地视觉系统 / Brand visual systems, campaign proposals & deliverable visual identities."
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
        <div className="mb-12 border-y border-line py-10 md:mb-16 md:py-14">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-studio text-bone/42">品牌全案 / BRAND DECKS</p>
              <h1 className="font-display text-[clamp(3.6rem,8vw,8.8rem)] leading-[0.9] text-bone">
                品牌提案归档
              </h1>
              <p className="mt-5 text-xs uppercase tracking-studio text-bone/34 md:text-sm">
                Brand Proposal Archive
              </p>
            </div>

            <div className="max-w-xl md:justify-self-end">
              <p className="text-xl leading-9 text-bone/78 md:text-2xl md:leading-10">
                品牌视觉全案、Campaign 提案与可落地视觉系统。
              </p>
              <p className="mt-5 text-sm uppercase leading-7 tracking-[0.08em] text-bone/38">
                Brand visual systems, campaign proposals and deliverable visual identities.
              </p>
            </div>
          </div>
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

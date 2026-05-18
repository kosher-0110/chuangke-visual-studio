import { notFound } from "next/navigation";
import { brandDecks } from "@/data/decks";
import TransitionLink from "@/components/TransitionLink";

type PageProps = { params: { slug: string } };

export function generateMetadata({ params }: PageProps) {
  const deck = brandDecks.find((d) => d.slug === params.slug);
  if (!deck) return { title: "方案未找到 | 创科视觉" };
  return { title: `${deck.title} | 创科视觉`, description: deck.summary };
}

export function generateStaticParams() {
  return brandDecks.map((d) => ({ slug: d.slug }));
}

export default function DeckViewerPage({ params }: PageProps) {
  const deck = brandDecks.find((d) => d.slug === params.slug);
  if (!deck) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-ink text-bone">
      <nav className="flex items-center justify-between px-5 py-4 text-xs uppercase tracking-studio text-bone/45 md:px-8 md:py-5">
        <TransitionLink href="/decks" className="transition duration-500 hover:text-bone" data-cursor="button">
          返回方案列表
        </TransitionLink>
        <div className="flex items-center gap-6">
          <span className="text-bone/32">{deck.category}</span>
          <span>创科视觉</span>
        </div>
      </nav>

      <div className="flex-1 px-2 py-4 md:px-8 md:py-6">
        <div className="mx-auto mb-6 max-w-5xl md:mb-8">
          <h1 className="font-display text-3xl uppercase leading-none text-bone md:text-5xl">{deck.title}</h1>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-bone/42">
            <span>{deck.pages} 页</span>
            <span>/</span>
            <span>{deck.industry}</span>
            <span>/</span>
            <span>{deck.year}</span>
          </div>
        </div>
        <iframe
          src={`/decks/${deck.slug}/brand-system.pdf#toolbar=0`}
          className="mx-auto block w-full max-w-5xl flex-1 border border-line"
          style={{ height: "calc(100vh - 12rem)" }}
          title={deck.title}
        />
      </div>
    </main>
  );
}

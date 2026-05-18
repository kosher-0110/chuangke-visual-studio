"use client";

import { motion } from "framer-motion";
import type { BrandDeck } from "@/data/decks";

import TransitionLink from "@/components/TransitionLink";

type DeckCardProps = {
  deck: BrandDeck;
  index: number;
};

export default function DeckCard({ deck, index }: DeckCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.85, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <TransitionLink href={`/decks/${deck.slug}`} className="block" data-cursor="view">
        <div className="border border-line bg-[#0b0b0a] p-4 transition duration-700 ease-cinematic group-hover:border-white/24 group-hover:bg-white/[0.025]">
          <div className="media-fallback relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#151513]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(242,240,234,0.06),transparent_18rem)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[clamp(1.5rem,4vw,3rem)] uppercase leading-none text-bone/12">{deck.category}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 ease-cinematic group-hover:opacity-100">
              <div className="absolute inset-y-[-20%] left-[-55%] w-[38%] rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-sm transition-transform duration-[1200ms] ease-cinematic group-hover:translate-x-[370%]" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.14em] text-bone/48">
              <span>品牌全案 / Brand Deck</span>
              <span>{deck.year}</span>
            </div>
          </div>

          <div className="pt-5">
            <div className="mb-4 flex flex-wrap gap-2 text-[0.62rem] uppercase tracking-[0.12em] text-bone/42">
              <span>{deck.pages} 页</span>
              <span>/</span>
              <span>{deck.industry}</span>
            </div>
            <p className="mb-3 text-[0.64rem] uppercase tracking-[0.14em] text-bone/38">{deck.category}</p>
            <h3 className="font-display text-2xl uppercase leading-[0.98] text-bone md:text-3xl">{deck.title}</h3>
            <p className="mt-4 line-clamp-2 max-w-md text-sm leading-6 text-bone/50">{deck.summary}</p>
            <div className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-studio text-bone/64">
              <span>查看方案 / View Deck</span>
              <span className="h-px w-8 bg-bone/30 transition duration-700 ease-cinematic group-hover:w-14" />
            </div>
          </div>
        </div>
      </TransitionLink>
    </motion.article>
  );
}

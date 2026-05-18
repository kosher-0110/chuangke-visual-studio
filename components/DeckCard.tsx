"use client";

import { motion } from "framer-motion";
import type { BrandDeck } from "@/data/decks";
import MediaImage from "@/components/MediaImage";

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
      <a href={deck.pdf} target="_blank" rel="noreferrer" className="block" data-cursor="view">
        <div className="relative overflow-hidden border border-line bg-[#0d0d0c] transition duration-700 ease-cinematic group-hover:border-white/24">
          <div className="media-fallback relative aspect-[4/5] overflow-hidden">
            <MediaImage
              src={deck.cover}
              alt={`${deck.title} cover`}
              className="h-full w-full object-cover opacity-68 grayscale transition duration-1000 ease-cinematic group-hover:scale-[1.03] group-hover:opacity-48"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/12" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 ease-cinematic group-hover:opacity-100">
              <div className="absolute inset-y-[-20%] left-[-55%] w-[38%] rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-sm transition-transform duration-[1200ms] ease-cinematic group-hover:translate-x-[370%]" />
            </div>
          </div>

          <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 text-[0.62rem] uppercase tracking-[0.14em] text-bone/46">
            <span>{deck.category}</span>
            <span>{deck.year}</span>
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <div className="mb-4 flex flex-wrap gap-2 text-[0.62rem] uppercase tracking-[0.12em] text-bone/45">
              <span>{deck.pages} 页</span>
              <span>/</span>
              <span>{deck.industry}</span>
            </div>
            <h3 className="font-display text-3xl uppercase leading-[0.96] text-bone md:text-4xl">{deck.title}</h3>
            <p className="mt-4 line-clamp-2 max-w-md text-sm leading-6 text-bone/52">{deck.summary}</p>
            <div className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-studio text-bone/66">
              <span>查看方案</span>
              <span className="h-px w-8 bg-bone/30 transition duration-700 ease-cinematic group-hover:w-14" />
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

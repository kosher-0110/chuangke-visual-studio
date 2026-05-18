"use client";

import { motion } from "framer-motion";
import DeckCard from "@/components/DeckCard";
import TransitionLink from "@/components/TransitionLink";
import { featuredDecks, brandDecks } from "@/data/decks";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] }
};

export default function BrandSystemsSection() {
  return (
    <section id="brand-systems" className="relative overflow-hidden border-y border-line bg-[#080807] px-5 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(242,240,234,0.055),transparent_26rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mb-12 grid gap-7 md:mb-14 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-studio text-bone/42">品牌全案 / BRAND SYSTEMS</p>
            <h2 className="font-display text-5xl uppercase leading-[0.88] text-bone md:text-7xl whitespace-nowrap">品牌提案与视觉系统</h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-bone/52 md:text-base md:leading-8">
            面向品牌发布、招商路演与长期视觉方向，提供完整的品牌提案与视觉系统方案。
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredDecks.map((deck, index) => (
            <DeckCard key={deck.slug} deck={deck} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <TransitionLink href="/decks" className="cinematic-button" data-cursor="button">
            查看全部方案 / View All Decks
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}

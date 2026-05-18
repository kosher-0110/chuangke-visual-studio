"use client";

import { motion } from "framer-motion";
import type { Work } from "@/data/works";
import { getBilibiliEmbed } from "@/data/works";
import TransitionLink from "@/components/TransitionLink";
import WorkAmbientLight from "@/components/WorkAmbientLight";

const fadeSection = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

export default function WorkContent({ work }: { work: Work }) {
  return (
    <main className="relative min-h-screen bg-ink px-4 py-5 text-bone md:px-5 md:py-8">
      <div className="hidden md:block">
        <WorkAmbientLight />
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-xs uppercase tracking-studio text-bone/45">
        <TransitionLink href="/#work" className="transition duration-500 hover:text-bone" data-cursor="button">
          返回作品
        </TransitionLink>
        <span>创科视觉</span>
      </nav>

      <motion.section {...fadeSection} className="mx-auto max-w-7xl pt-12 md:pt-24">
        <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-studio text-bone/42">{work.type}</p>
            <h1 className="font-display text-[clamp(2.8rem,16vw,5.5rem)] uppercase leading-[0.9] md:text-[clamp(3.2rem,9vw,9rem)] md:leading-[0.84]">{work.title}</h1>
          </div>
          <p className="max-w-xl text-base leading-8 text-bone/62 md:text-lg">{work.concept}</p>
        </div>

        <div className="media-fallback mt-8 aspect-video overflow-hidden border border-line bg-graphite md:mt-12">
          <iframe
            className="h-full w-full"
            src={getBilibiliEmbed(work.bvid)}
            title={work.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.section>

      <motion.section
        {...fadeSection}
        transition={{ ...fadeSection.transition, delay: 0.1 }}
        className="mx-auto grid max-w-7xl gap-8 border-b border-line py-12 md:grid-cols-3 md:py-24"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-studio text-bone/38">Role</p>
          <p className="text-lg leading-8 text-bone/72">{work.role}</p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-studio text-bone/38">Tools</p>
          <div className="flex flex-wrap gap-2">
            {work.tools.map((tool) => (
              <span key={tool} className="border border-line px-3 py-2 text-xs uppercase tracking-[0.08em] text-bone/64">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-studio text-bone/38">Year</p>
          <p className="text-lg text-bone/72">{work.year}</p>
        </div>
      </motion.section>

      <motion.section
        {...fadeSection}
        transition={{ ...fadeSection.transition, delay: 0.2 }}
        className="mx-auto max-w-7xl py-12 text-center md:py-24"
      >
        <TransitionLink href="/#work" className="cinematic-button w-full sm:w-auto" data-cursor="button">
          返回案例
        </TransitionLink>
      </motion.section>
    </main>
  );
}

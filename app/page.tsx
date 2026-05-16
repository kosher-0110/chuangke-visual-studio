"use client";

import { motion } from "framer-motion";
import AbstractLight from "@/components/AbstractLight";
import CinematicReel from "@/components/CinematicReel";
import HeroKineticTitle from "@/components/HeroKineticTitle";
import StatementBand from "@/components/StatementBand";
import StudioArtifact from "@/components/StudioArtifact";
import ToolMarquee from "@/components/ToolMarquee";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

const services = [
  "AI Brand Film",
  "TVC Visual Direction",
  "Campaign Concept",
  "Storyboard & Prompt Design",
  "AI Short Drama Poster",
  "Experimental Visuals"
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  return (
    <main className="bg-ink text-bone">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
        <AbstractLight />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.2)_38%,#050505_82%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          <p className="mb-8 text-xs uppercase tracking-studio text-bone/45">Brand Visual / AI Video Creator</p>
          <HeroKineticTitle />
          <p className="mt-8 text-xs uppercase tracking-studio text-bone/62 md:text-sm">
            AI Films · Brand Visuals · Cinematic Campaigns
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="cinematic-button bg-bone text-ink hover:text-bone" data-cursor="button">
              View Work
            </a>
            <a href="#contact" className="cinematic-button" data-cursor="button">
              Contact
            </a>
          </div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 h-14 w-px -translate-x-1/2 overflow-hidden bg-white/10">
          <div className="h-1/2 w-full animate-[pulse_2.8s_ease-in-out_infinite] bg-bone/55" />
        </div>
      </section>

      <CinematicReel works={works} />

      <section id="work" className="px-5 py-24 md:py-36">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-studio text-bone/42">Selected Works</p>
              <h2 className="font-display text-4xl uppercase leading-none md:text-6xl">Cinematic Image Systems</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-bone/58">
              Films, campaign visuals and AI-driven image worlds built for brands, stories and future-facing launches.
            </p>
          </motion.div>

          <div className="grid auto-rows-auto gap-7 md:grid-cols-2 xl:grid-cols-3">
            {works.map((work, index) => (
              <WorkCard key={work.slug} work={work} index={index} />
            ))}
          </div>
        </div>
      </section>

      <StatementBand />

      <StudioArtifact />

      <section className="border-y border-line px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-xs uppercase tracking-studio text-bone/42">Services</p>
            <h2 className="font-display text-4xl uppercase leading-none md:text-6xl">Visual Direction for AI Cinema</h2>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="border border-line px-5 py-6 text-sm uppercase tracking-[0.08em] text-bone/78"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ToolMarquee />

      <section className="px-5 py-24 md:py-36">
        <motion.div {...fadeUp} className="mx-auto max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-studio text-bone/42">About</p>
          <p className="font-display text-3xl uppercase leading-tight text-bone md:text-6xl">
            I create cinematic AI visuals for brands, campaigns and future-facing stories.
          </p>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-bone/58">
            我专注于用 AI 影像、品牌视觉和电影化叙事，为品牌打造高质感的视觉内容。
          </p>
        </motion.div>
      </section>

      <section id="contact" className="px-5 pb-12 md:pb-16">
        <motion.div
          {...fadeUp}
          className="mx-auto flex min-h-[28rem] max-w-7xl flex-col justify-between border border-line bg-white/[0.025] p-6 md:p-10"
        >
          <div className="flex items-center justify-between gap-6 text-xs uppercase tracking-studio text-bone/42">
            <span>Contact</span>
            <span>hello@zoor.studio</span>
          </div>
          <div className="mt-20 max-w-4xl">
            <h2 className="font-display text-4xl uppercase leading-none md:text-7xl">Start a Project</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-bone/58 md:text-lg">
              For brand films, AI visual campaigns, music videos and experimental storytelling.
            </p>
            <a href="mailto:hello@zoor.studio" className="cinematic-button mt-9 bg-bone text-ink hover:text-bone" data-cursor="button">
              Start a Project
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

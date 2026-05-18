"use client";

import { motion } from "framer-motion";
import { getVideoThumbnail, type Work } from "@/data/works";
import MediaImage from "@/components/MediaImage";

type CinematicReelProps = {
  works: Work[];
};

export default function CinematicReel({ works }: CinematicReelProps) {
  const reelWorks = [...works, ...works];

  return (
    <section className="relative overflow-hidden border-y border-line bg-[#070707] py-5 md:py-7" aria-label="Cinematic reel">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent md:w-48" />

      <motion.div
        className="flex w-max gap-4 px-4 md:gap-5 md:px-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      >
        {reelWorks.map((work, index) => (
          <div
            key={`${work.slug}-${index}`}
            className="media-fallback relative h-28 w-52 shrink-0 overflow-hidden border border-line bg-graphite md:h-40 md:w-80"
          >
            <MediaImage
              src={getVideoThumbnail(work.bvid)}
              alt={`${work.title} reel frame`}
              className="h-full w-full object-cover opacity-70 grayscale transition duration-1000 ease-cinematic hover:opacity-95 hover:grayscale-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-4 text-[0.62rem] uppercase tracking-[0.12em] text-bone/62">
              <span>{work.title}</span>
              <span>{work.year}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

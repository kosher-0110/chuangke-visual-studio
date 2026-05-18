"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import type { Work } from "@/data/works";
import { getVideoThumbnail } from "@/data/works";
import MediaImage from "@/components/MediaImage";
import TransitionLink from "@/components/TransitionLink";

type WorkCardProps = {
  work: Work;
  index: number;
};

export default function WorkCard({ work, index }: WorkCardProps) {
  const [finePointer, setFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 22 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const handleMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!finePointer) return;

    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  const poster = getVideoThumbnail(work.bvid);
  const layoutClass = {
    featured: "md:col-span-2",
    standard: "",
    tall: "md:row-span-2",
    wide: "md:col-span-2"
  }[work.layout];
  const aspectClass = {
    featured: "aspect-[4/5] md:aspect-[16/10]",
    standard: "aspect-[4/5] md:aspect-video",
    tall: "aspect-[4/5] md:aspect-[4/5]",
    wide: "aspect-[4/5] md:aspect-video"
  }[work.layout];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.9, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX: finePointer ? rotateX : 0, rotateY: finePointer ? rotateY : 0, transformStyle: "preserve-3d" }}
      onPointerMove={handleMove}
      onPointerLeave={resetTilt}
      className={`group ${layoutClass}`}
    >
      <TransitionLink href={`/work/${work.slug}`} className="block" data-cursor="view">
        <div className={`media-fallback relative overflow-hidden border border-line bg-graphite ${aspectClass}`}>
          <MediaImage
            src={poster}
            alt={`${work.title} poster`}
            className="h-full w-full object-cover opacity-85 transition duration-1000 ease-cinematic group-hover:scale-[1.035] group-hover:opacity-60"
            loading="lazy"
          />

          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 ease-cinematic group-hover:opacity-100">
            <div className="absolute inset-y-[-20%] left-[-55%] w-[42%] rotate-12 bg-gradient-to-r from-transparent via-white/28 to-transparent blur-sm transition-transform duration-[1200ms] ease-cinematic group-hover:translate-x-[360%]" />
            <div className="absolute inset-0 border border-white/0 transition duration-700 ease-cinematic group-hover:border-white/24" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-black/40 opacity-0 transition duration-700 ease-cinematic group-hover:opacity-100">
              <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
          <div className="absolute left-4 right-4 top-4 flex items-center justify-between text-[0.62rem] uppercase tracking-studio text-bone/55 md:left-5 md:right-5 md:top-5 md:text-[0.66rem]">
            <span>{work.type}</span>
            <span>{work.year}</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 translate-y-0 opacity-95 transition duration-700 ease-cinematic group-hover:translate-y-0 md:bottom-6 md:left-6 md:right-6 md:translate-y-2">
            <h3 className="font-display text-2xl uppercase leading-none text-bone md:text-4xl">{work.title}</h3>
            <p className="mt-3 line-clamp-2 max-w-sm text-sm leading-6 text-bone/58 md:line-clamp-none">{work.concept}</p>
            <p className="mt-4 hidden text-[0.64rem] uppercase tracking-[0.14em] text-bone/42 md:block">{work.atmosphere}</p>
          </div>
        </div>
      </TransitionLink>
    </motion.article>
  );
}

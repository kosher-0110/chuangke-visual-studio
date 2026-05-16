"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Work } from "@/data/works";
import { getYoutubeThumbnail } from "@/data/works";
import MediaImage from "@/components/MediaImage";

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

  const youtubePoster = getYoutubeThumbnail(work.youtubeId);
  const layoutClass = {
    featured: "md:col-span-2",
    standard: "",
    tall: "md:row-span-2",
    wide: "md:col-span-2"
  }[work.layout];
  const aspectClass = {
    featured: "aspect-[16/10]",
    standard: "aspect-[4/5] md:aspect-video",
    tall: "aspect-[4/5] md:aspect-[4/5]",
    wide: "aspect-video"
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
      <Link href={`/work/${work.slug}`} className="block">
        <div className={`media-fallback relative overflow-hidden border border-line bg-graphite ${aspectClass}`}>
          <MediaImage
            src={youtubePoster}
            alt={`${work.title} poster`}
            className="h-full w-full object-cover opacity-85 transition duration-1000 ease-cinematic group-hover:scale-[1.035] group-hover:opacity-60"
            loading="lazy"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-black/40 opacity-0 transition duration-700 ease-cinematic group-hover:opacity-100">
              <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-[0.66rem] uppercase tracking-studio text-bone/55">
            <span>{work.type}</span>
            <span>{work.year}</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 translate-y-2 opacity-95 transition duration-700 ease-cinematic group-hover:translate-y-0 md:bottom-6 md:left-6 md:right-6">
            <h3 className="font-display text-2xl uppercase leading-none text-bone md:text-4xl">{work.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-bone/58">{work.concept}</p>
            <p className="mt-5 text-[0.64rem] uppercase tracking-[0.14em] text-bone/42">{work.atmosphere}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

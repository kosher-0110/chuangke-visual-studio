"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StatementBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0.12, 0.72, 0.72, 0.12]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-line bg-bone py-16 text-ink md:py-24">
      <motion.p
        style={{ x, opacity }}
        className="whitespace-nowrap font-display text-[17vw] font-medium uppercase leading-none"
      >
        From Story to System
      </motion.p>
      <div className="mx-auto mt-8 grid max-w-7xl gap-6 px-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
        <p className="text-xs uppercase tracking-studio text-ink/45">品牌叙事 / BRAND NARRATIVE</p>
        <p className="max-w-3xl text-xl leading-9 text-ink/72 md:text-3xl md:leading-tight">
          为每一个品牌找到属于它的故事，并将故事转化为可传播的视觉语言。
        </p>
      </div>
    </section>
  );
}

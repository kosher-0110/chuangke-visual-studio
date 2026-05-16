"use client";

import { motion } from "framer-motion";

const tools = [
  "Runway",
  "Midjourney",
  "After Effects",
  "DaVinci Resolve",
  "ComfyUI",
  "Premiere Pro",
  "Cinema 4D",
  "Blender"
];

export default function ToolMarquee() {
  const items = [...tools, ...tools];

  return (
    <section className="relative overflow-hidden border-b border-line bg-[#070707] py-4 md:py-6">
      <motion.div
        className="flex w-max gap-8 px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {items.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="whitespace-nowrap text-xs uppercase tracking-[0.18em] text-bone/28"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

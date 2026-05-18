"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const titleLines = ["VISUAL", "STUDIO"];

export default function HeroKineticTitle() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 90, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 90, damping: 24 });
  const lightX = useSpring(useTransform(x, [-0.5, 0.5], [26, 74]), { stiffness: 70, damping: 26 });
  const lightY = useSpring(useTransform(y, [-0.5, 0.5], [34, 66]), { stiffness: 70, damping: 26 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="hero-kinetic-title relative mx-auto w-full max-w-5xl select-none"
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="pointer-events-none absolute inset-[-8%] z-20 mix-blend-screen"
        style={{
          background: useTransform([lightX, lightY], ([lx, ly]) => {
            return `radial-gradient(circle at ${lx}% ${ly}%, rgba(255,255,255,0.34), rgba(255,255,255,0.09) 18%, transparent 42%)`;
          })
        }}
      />

      <div className="pointer-events-none absolute inset-0 translate-x-[0.035em] translate-y-[0.045em] text-bone/[0.055] blur-[1px]">
        {titleLines.map((line) => (
          <div key={`shadow-${line}`} className="hero-title-line">
            {line}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 -translate-x-[0.025em] -translate-y-[0.035em] text-[#a9bbb7]/[0.08]">
        {titleLines.map((line) => (
          <div key={`cyan-${line}`} className="hero-title-line">
            {line}
          </div>
        ))}
      </div>

      <h1 className="hero-title-main relative z-10 font-display font-medium uppercase text-bone">
        {titleLines.map((line) => (
          <span key={line} className="hero-title-line">
            {line}
          </span>
        ))}
      </h1>
    </motion.div>
  );
}

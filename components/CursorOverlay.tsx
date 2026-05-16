"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorOverlay() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 160, damping: 22, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 160, damping: 22, mass: 0.4 });
  const ringX = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 });
  const ringY = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mx, my]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[99] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bone mix-blend-difference md:block"
        style={{ left: springX, top: springY }}
      />
      <motion.div
        className="pointer-events-none fixed z-[99] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/35 mix-blend-difference md:flex"
        style={{ left: ringX, top: ringY }}
      >
        <svg className="h-3 w-3 opacity-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>
    </>
  );
}

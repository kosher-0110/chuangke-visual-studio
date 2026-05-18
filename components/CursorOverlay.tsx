"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode = "default" | "button" | "view";

export default function CursorOverlay() {
  const [mode, setMode] = useState<CursorMode>("default");
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

      const target = e.target instanceof Element ? e.target.closest("[data-cursor]") : null;
      const nextMode = target?.getAttribute("data-cursor") as CursorMode | null;
      setMode(nextMode ?? "default");
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mx, my]);

  const ringSize = mode === "view" ? 76 : mode === "button" ? 42 : 36;
  const dotSize = mode === "view" ? 0 : 12;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[99] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bone mix-blend-difference md:block"
        animate={{ width: dotSize, height: dotSize, opacity: mode === "view" ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ left: springX, top: springY }}
      />
      <motion.div
        className="pointer-events-none fixed z-[99] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/35 text-[0.62rem] uppercase tracking-[0.16em] text-bone mix-blend-difference md:flex"
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: mode === "view" ? "rgba(242,240,234,0.82)" : "rgba(242,240,234,0.35)",
          backgroundColor: mode === "view" ? "rgba(242,240,234,0.08)" : "rgba(242,240,234,0)"
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ left: ringX, top: ringY }}
      >
        <motion.span animate={{ opacity: mode === "view" ? 1 : 0 }} transition={{ duration: 0.25 }}>
          查看
        </motion.span>
      </motion.div>
    </>
  );
}

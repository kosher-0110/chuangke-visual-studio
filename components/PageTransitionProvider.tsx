"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type TransitionCtx = {
  navigate: (href: string) => void;
};

const Ctx = createContext<TransitionCtx>({ navigate: () => {} });

export function useTransition() {
  return useContext(Ctx);
}

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const controls = useAnimationControls();
  const [active, setActive] = useState(false);

  // Reset curtain on browser back/forward
  useEffect(() => {
    const reset = () => {
      controls.set("hidden");
      setActive(false);
    };
    window.addEventListener("popstate", reset);
    return () => window.removeEventListener("popstate", reset);
  }, [controls]);

  const navigate = useCallback(
    async (href: string) => {
      if (active) return;
      setActive(true);
      controls.set("covered");
      router.push(href);
      setTimeout(() => {
        controls.start("exit").then(() => {
          controls.set("hidden");
          setActive(false);
        });
      }, 180);
    },
    [active, controls, router],
  );

  return (
    <Ctx.Provider value={{ navigate }}>
      {children}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[100] bg-[#030303]"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          covered: { opacity: 0.92 },
          exit: { opacity: 0 }
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />
    </Ctx.Provider>
  );
}

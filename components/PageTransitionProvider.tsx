"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useState } from "react";
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

  const navigate = useCallback(
    async (href: string) => {
      if (active) return;
      setActive(true);
      await controls.start("covered");
      router.push(href);
      window.setTimeout(() => {
        void controls.start("exit").then(() => {
          controls.set("hidden");
          setActive(false);
        });
      }, 120);
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
          covered: { opacity: 0.82 },
          exit: { opacity: 0 }
        }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,240,234,0.055),transparent_34rem)]" />
      </motion.div>
    </Ctx.Provider>
  );
}

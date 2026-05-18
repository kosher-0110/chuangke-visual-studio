"use client";

import { animate } from "framer-motion";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { ReactNode } from "react";
import TransitionPortal from "@/components/TransitionPortal";

type TransitionCtx = {
  navigate: (href: string) => void;
};

const Ctx = createContext<TransitionCtx>({ navigate: () => {} });

export function useTransition() {
  return useContext(Ctx);
}

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const progressRef = useRef(0);
  const [phase, setPhase] = useState<"idle" | "closing" | "opening">("idle");
  const pending = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string) => {
      if (phase !== "idle") return;
      pending.current = href;
      setPhase("closing");

      animate(0, 1, {
        duration: 0.65,
        ease: [0.32, 0, 0.67, 0],
        onUpdate: (v) => {
          progressRef.current = v;
        },
      }).then(() => {
        if (pending.current) {
          router.push(pending.current);
          pending.current = null;
        }
        setPhase("opening");
        animate(1, 0, {
          duration: 0.55,
          ease: [0.33, 1, 0.68, 1],
          onUpdate: (v) => {
            progressRef.current = v;
          },
        }).then(() => {
          setPhase("idle");
        });
      });
    },
    [phase, router],
  );

  return (
    <Ctx.Provider value={{ navigate }}>
      {children}
      {phase !== "idle" && <TransitionPortal progressRef={progressRef} />}
    </Ctx.Provider>
  );
}

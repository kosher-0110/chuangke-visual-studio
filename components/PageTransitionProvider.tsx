"use client";

import type { ReactNode } from "react";

export default function PageTransitionProvider({
  children
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}

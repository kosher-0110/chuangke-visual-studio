"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type TransitionLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  className?: string;
  "data-cursor"?: string;
};

export default function TransitionLink({
  children,
  ...props
}: TransitionLinkProps) {
  return <Link {...props}>{children}</Link>;
}

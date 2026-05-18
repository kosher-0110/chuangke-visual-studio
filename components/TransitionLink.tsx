"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useTransition } from "@/components/PageTransitionProvider";

type TransitionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
};

export default function TransitionLink({
  children,
  href,
  onClick,
  ...props
}: TransitionLinkProps) {
  const { navigate } = useTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === "_blank" ||
      href.startsWith("mailto:") ||
      /^https?:\/\//.test(href)
    ) {
      return;
    }

    if (href.includes("#")) {
      event.preventDefault();

      const [path, hash] = href.split("#");
      const targetPath = path || window.location.pathname;
      const currentPath = window.location.pathname;

      if (targetPath === currentPath) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      window.location.assign(href);
      return;
    }

    event.preventDefault();
    navigate(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}

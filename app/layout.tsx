import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorOverlay from "@/components/CursorOverlay";
import PageTransitionProvider from "@/components/PageTransitionProvider";

export const metadata: Metadata = {
  title: "VISUAL STUDIO",
  description: "AI 影像、品牌视觉与电影化 campaign 内容。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageTransitionProvider>
          <SmoothScroll />
          <CursorOverlay />
          {children}
          <div className="noise-overlay" aria-hidden="true" />
        </PageTransitionProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorOverlay from "@/components/CursorOverlay";
import PageTransitionProvider from "@/components/PageTransitionProvider";

export const metadata: Metadata = {
  title: "创科视觉 | 品牌全案与视觉系统",
  description: "福建创科文化传媒，专注品牌故事、品牌视觉与整合传播全案。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
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

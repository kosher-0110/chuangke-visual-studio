import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "ZOOR Visual Studio",
  description: "AI films, brand visuals, and cinematic campaigns."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

type MediaImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export default function MediaImage({ src, alt, className, loading = "lazy" }: MediaImageProps) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return <div className={className} aria-label={alt} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
      className={className}
      loading={loading}
      onError={() => setMissing(true)}
    />
  );
}

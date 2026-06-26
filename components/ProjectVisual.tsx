"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectVisualProps {
  id: string;
  className?: string;
}

export default function ProjectVisual({
  id,
  className = "",
}: ProjectVisualProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`bg-surface ${className}`} />;
  }

  return (
    <div className={`bg-surface overflow-hidden relative ${className}`}>
      <Image
        src={`/images/${id}.png`}
        alt={id}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

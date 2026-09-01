"use client";

import { useRef, useState, type ReactNode, type CSSProperties } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

const RESET_STYLE: CSSProperties = {
  transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
};

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>(RESET_STYLE);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(1200px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle(RESET_STYLE)}
      className={`[transform-style:preserve-3d] transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

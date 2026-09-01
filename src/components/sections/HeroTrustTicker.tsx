"use client";

import { useEffect, useState } from "react";
import { Star, PackageCheck, MapPinned, Award, type LucideIcon } from "lucide-react";

type Stat = { icon: LucideIcon; value: string; label: string };

const STATS: Stat[] = [
  { icon: Star, value: "4.9 / 5", label: "1,250+ Verified Reviews" },
  { icon: PackageCheck, value: "25K+", label: "Residential Moves Done" },
  { icon: MapPinned, value: "50+", label: "Cities Covered in India" },
  { icon: Award, value: "10+ Years", label: "Of Trusted Service" },
];

const INTERVAL_MS = 3200;

export default function HeroTrustTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % STATS.length);
        setVisible(true);
      }, 250);
      return () => clearTimeout(swap);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const { icon: Icon, value, label } = STATS[index];

  return (
    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 shadow-lg min-w-[210px]">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange/10 text-orange shrink-0">
        <Icon size={15} fill={Icon === Star ? "currentColor" : "none"} strokeWidth={2} />
      </span>
      <div
        className={`leading-tight transition-opacity duration-250 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="font-extrabold text-navy text-sm">{value}</p>
        <p className="text-text-secondary text-[11px] font-semibold">{label}</p>
      </div>
    </div>
  );
}

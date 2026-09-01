"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  { key: "warehouse", label: "Warehouse Storage", src: "/hero/warehouse.jpg" },
  { key: "road", label: "Nationwide Transport", src: "/hero/road.jpg" },
  { key: "city", label: "City-Wide Delivery", src: "/hero/city.jpg" },
  { key: "packing", label: "Careful Packing", src: "/hero/packing.jpg" },
];

const AUTOPLAY_MS = 5000;

export default function HeroBackgroundSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i: number) => setIndex(i);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map(({ key, label, src }, i) => (
        <div
          key={key}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={label}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover animate-kenburns"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-navy/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/55 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-navy/40" />

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous background"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-navy transition-colors"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next background"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-navy transition-colors"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-16 md:bottom-20 inset-x-0 z-10 flex items-center justify-center gap-2">
        {SLIDES.map(({ key, label }, i) => (
          <button
            key={key}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${label} background`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-orange" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

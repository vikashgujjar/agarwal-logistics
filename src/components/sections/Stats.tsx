"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Home,
  Building2,
  Award,
  MapPinned,
  ShieldCheck,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";

type Stat = { icon: LucideIcon; value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { icon: Home, value: 25, suffix: "K+", label: "Residential Moves" },
  { icon: Building2, value: 70, suffix: "K+", label: "Corporate Relocations" },
  { icon: Award, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: MapPinned, value: 50, suffix: "+", label: "Cities Covered" },
];

const TICKER_ITEMS = [
  "100% Insured Shipments",
  "On-Time Delivery",
  "GPS Tracked Fleet",
  "50+ Cities Covered",
  "10+ Years Trusted",
  "24/7 Support",
];

const DURATION_MS = 1700;

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  return (
    <section ref={sectionRef} className="relative bg-navy overflow-hidden">
      <Image
        src="/hero/road.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/85" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy via-navy/70 to-navy"
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 right-0 w-[30rem] h-[30rem] bg-orange/15 rounded-full blur-3xl"
      />

      <div className="relative pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-10 md:mb-14">
            <span className="h-[2px] w-6 bg-orange" />
            <span className="text-orange font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
              By The Numbers
            </span>
            <span className="h-[2px] w-6 bg-orange" />
          </div>

          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {STATS.map(({ icon: Icon, value, suffix, label }) => {
              const count = Math.round(value * progress);
              return (
                <div
                  key={label}
                  className="flex-1 text-center px-4 py-7 sm:py-0"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange/15 text-orange mb-3">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <p className="font-extrabold text-white text-4xl sm:text-6xl md:text-7xl leading-none tracking-tight tabular-nums">
                    {count}
                    <span className="text-orange">{suffix}</span>
                  </p>
                  <p className="mt-4 text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative bg-orange overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
              {TICKER_ITEMS.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm uppercase tracking-wide px-6"
                >
                  <CircleCheck size={14} strokeWidth={2.5} />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-navy/95 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange/15 text-orange shrink-0">
              <ShieldCheck size={18} strokeWidth={2} />
            </span>
            <p className="text-white text-sm font-semibold">
              Your Safety Is Our Priority — every move fully insured, start to finish.
            </p>
          </div>
          <Button href="/#quote" variant="primary" className="w-full sm:w-auto shrink-0">
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

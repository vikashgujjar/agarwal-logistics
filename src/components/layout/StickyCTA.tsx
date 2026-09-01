"use client";

import { useEffect, useState } from "react";
import { Phone, Zap } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 sm:right-5 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="tel:+919988245009"
        className="relative flex items-center gap-2 rounded-full bg-navy text-white pl-3 pr-4 sm:pl-4 sm:pr-5 py-3 shadow-xl shadow-navy/30 hover:bg-navy-light transition-colors"
      >
        <span className="absolute inset-0 rounded-full bg-navy animate-ping opacity-20" />
        <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white/15 shrink-0">
          <Phone size={14} strokeWidth={2.5} />
        </span>
        <span className="relative text-sm font-bold whitespace-nowrap">
          <span className="hidden sm:inline">Call +91 99882 45009</span>
          <span className="sm:hidden">Call Now</span>
        </span>
      </a>
      <a
        href="/#quote"
        className="flex items-center gap-2 rounded-full bg-orange text-white pl-3 pr-4 sm:pl-4 sm:pr-5 py-3 shadow-xl shadow-orange/30 hover:bg-orange-dark transition-colors"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 shrink-0">
          <Zap size={14} strokeWidth={2.5} fill="currentColor" />
        </span>
        <span className="text-sm font-bold whitespace-nowrap">Get Quote</span>
      </a>
    </div>
  );
}

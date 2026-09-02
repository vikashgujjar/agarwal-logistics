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
        aria-label="Call +91 99882 45009"
        className="relative flex items-center justify-center sm:justify-start gap-0 sm:gap-2 w-12 h-12 sm:w-auto sm:h-auto rounded-full bg-navy text-white sm:pl-4 sm:pr-5 sm:py-3 shadow-xl shadow-navy/30 hover:bg-navy-light transition-colors"
      >
        <span className="absolute inset-0 rounded-full bg-navy animate-ping opacity-20" />
        <span className="relative flex items-center justify-center w-7 h-7 rounded-full sm:bg-white/15 shrink-0">
          <Phone size={16} strokeWidth={2.5} className="sm:hidden" />
          <Phone size={14} strokeWidth={2.5} className="hidden sm:block" />
        </span>
        <span className="relative hidden sm:inline text-sm font-bold whitespace-nowrap">
          Call +91 99882 45009
        </span>
      </a>
      <a
        href="/#quote"
        aria-label="Get Free Quote"
        className="flex items-center justify-center sm:justify-start gap-0 sm:gap-2 w-12 h-12 sm:w-auto sm:h-auto rounded-full bg-orange text-white sm:pl-4 sm:pr-5 sm:py-3 shadow-xl shadow-orange/30 hover:bg-orange-dark transition-colors"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full sm:bg-white/20 shrink-0">
          <Zap size={16} strokeWidth={2.5} fill="currentColor" className="sm:hidden" />
          <Zap size={14} strokeWidth={2.5} fill="currentColor" className="hidden sm:block" />
        </span>
        <span className="hidden sm:inline text-sm font-bold whitespace-nowrap">Get Quote</span>
      </a>
    </div>
  );
}

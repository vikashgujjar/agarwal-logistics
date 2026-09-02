"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

const TESTIMONIALS = [
  {
    name: "Rohit Sharma",
    location: "Delhi to Bangalore",
    quote:
      "The team was punctual, careful with every item, and kept me updated throughout. Truly stress-free moving experience.",
  },
  {
    name: "Priya Nair",
    location: "Mumbai to Pune",
    quote:
      "Professional packing and zero damage. Their tracking feature gave me real peace of mind during the move.",
  },
  {
    name: "Amit Verma",
    location: "Office Relocation, Hyderabad",
    quote:
      "We relocated our entire office in a weekend with no downtime. Highly recommend Agarwal Logistics Packers.",
  },
  {
    name: "Kavya Reddy",
    location: "Chennai to Kolkata",
    quote:
      "Transparent pricing, no last-minute surprises. The crew was courteous and handled fragile items with great care.",
  },
];

const AUTOPLAY_MS = 5500;
const SWIPE_THRESHOLD = 50;

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="group relative h-full bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-2xl hover:shadow-navy/10 hover:border-orange/30 transition-all duration-300 overflow-hidden">
      <Quote
        aria-hidden="true"
        size={84}
        strokeWidth={0}
        fill="currentColor"
        className="absolute -top-2 -right-2 text-navy/[0.04] group-hover:text-orange/[0.1] transition-colors duration-300"
      />

      <div className="relative flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, si) => (
          <Star
            key={si}
            size={14}
            className="text-orange transition-transform duration-300 group-hover:scale-125"
            style={{ transitionDelay: `${si * 40}ms` }}
            fill="currentColor"
            strokeWidth={0}
          />
        ))}
      </div>

      <p className="relative text-navy text-sm leading-relaxed mb-6 px-4 sm:px-0">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="relative flex items-center gap-3">
        <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-navy to-navy-light text-white font-bold text-sm shrink-0 ring-2 ring-orange/20 group-hover:ring-orange/60 transition-all duration-300">
          {t.name.charAt(0)}
          <span className="absolute -bottom-1 -right-1 flex items-center justify-center w-4 h-4 rounded-full bg-orange text-white ring-2 ring-white">
            <BadgeCheck size={9} strokeWidth={2.5} />
          </span>
        </span>
        <div>
          <p className="font-bold text-navy text-sm">{t.name}</p>
          <p className="text-text-secondary text-xs">{t.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goTo = (i: number) => setIndex(i);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="relative bg-bg-light py-10 sm:py-16 md:py-24 overflow-hidden"
    >
      <Quote
        aria-hidden="true"
        size={220}
        strokeWidth={0}
        fill="currentColor"
        className="hidden lg:block absolute -top-6 -left-10 text-navy/[0.04] rotate-6 pointer-events-none"
      />
      <Quote
        aria-hidden="true"
        size={260}
        strokeWidth={0}
        fill="currentColor"
        className="hidden lg:block absolute -bottom-16 -right-14 text-orange/[0.05] -rotate-12 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -right-10 top-24 w-56 h-56 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-navy) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      <span
        aria-hidden="true"
        className="hidden lg:flex animate-float-slow absolute left-16 top-16 items-center justify-center w-11 h-11 rounded-full border-2 border-dashed border-orange/30 text-orange/40"
      >
        <Star size={16} fill="currentColor" strokeWidth={0} />
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          heading="What Our"
          highlight="Customers Say"
        />

        {/* sm and up: original static grid, unchanged */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-14">
          {TESTIMONIALS.map((t, i) => (
            <TiltCard key={t.name} className={i % 2 === 1 ? "lg:mt-8" : ""}>
              <TestimonialCard t={t} />
            </TiltCard>
          ))}
        </div>

        {/* mobile only: single-column sliding carousel */}
        <div
          className="sm:hidden relative mt-12 max-w-sm mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-1 py-1">
                  <TiltCard>
                    <TestimonialCard t={t} />
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white border border-border text-navy shadow-md hover:bg-navy hover:text-white hover:border-navy transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white border border-border text-navy shadow-md hover:bg-navy hover:text-white hover:border-navy transition-colors"
          >
            <ChevronRight size={16} />
          </button>

          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial from ${t.name}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-orange" : "w-1.5 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

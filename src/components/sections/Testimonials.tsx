import { Star, Quote, BadgeCheck, Users2, Headset, MapPinned } from "lucide-react";
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

const TRUST_STATS = [
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Users2, value: "10K+", label: "Happy Customers" },
  { icon: MapPinned, value: "50+", label: "Cities Served" },
  { icon: Headset, value: "24/7", label: "Customer Support" },
];

export default function Testimonials() {
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

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TiltCard key={t.name} className={i % 2 === 1 ? "lg:mt-8" : ""}>
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

                <p className="relative text-navy text-sm leading-relaxed mb-6">
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
            </TiltCard>
          ))}
        </div>

        {/* <div className="mt-16 lg:mt-20 relative rounded-2xl bg-gradient-to-br from-navy to-navy-light shadow-xl overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 1px, transparent 22px)",
            }}
          />
          <div className="relative grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/10 px-4 sm:px-6 py-7 sm:py-8 text-center">
            {TRUST_STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 px-2 py-4 sm:py-0"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-orange/15 text-orange">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <p className="font-extrabold text-white text-xl sm:text-2xl">
                  {value}
                </p>
                <p className="text-white/60 text-[11px] sm:text-xs font-semibold">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

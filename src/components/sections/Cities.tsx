import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const CITIES = [
  { city: "Chandigarh", note: "Headquarters" },
  { city: "Delhi NCR" },
  { city: "Mumbai" },
  { city: "Bangalore" },
  { city: "Kolkata" },
  { city: "Pune" },
  { city: "Hyderabad" },
  { city: "Chennai" },
];

export default function Cities() {
  return (
    <section id="cities" className="relative bg-bg-light py-10 sm:py-16 md:py-24">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -left-24 top-1/4 w-[26rem] h-[26rem] bg-linear-to-tr from-orange/8 via-navy/6 to-transparent rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Presence"
          heading="Serving Customers Across"
          highlight="India"
          description="With operations in 50+ cities, we're always close enough to help with your move."
        />

        <div className="mt-14 sm:mt-16 grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-16 items-start">
          {/* Stat showcase */}
          <div className="lg:sticky lg:top-28">
            <p className="font-extrabold text-navy leading-[0.85] text-[5.5rem] sm:text-[7rem] lg:text-[8rem]">
              50<span className="text-orange">+</span>
            </p>
            <span className="block w-16 h-px bg-linear-to-r from-orange to-orange/0 mb-4" />
            <p className="text-navy font-bold text-lg sm:text-xl mb-2">
              Cities Across India
            </p>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              From our headquarters in Chandigarh to metros and emerging cities
              nationwide, our network reaches wherever you&rsquo;re headed.
            </p>
          </div>

          {/* Elegant directory list */}
          <div className="border-t border-navy/10">
            {CITIES.map(({ city, note }, i) => (
              <div
                key={city}
                className="group relative flex items-center justify-between gap-4 py-4 sm:py-5 border-b border-navy/10 transition-colors duration-300 hover:bg-orange/3 px-1 sm:px-2 -mx-1 sm:-mx-2"
              >
                <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                  <span className="font-serif italic text-orange/50 text-sm sm:text-base tabular-nums shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-extrabold text-navy text-xl sm:text-2xl truncate transition-colors duration-300 group-hover:text-orange">
                    {city}
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-5 shrink-0">
                  {note && (
                    <span className="hidden sm:inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest text-orange border border-orange/30 rounded-full px-3 py-1">
                      {note}
                    </span>
                  )}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="text-navy/20 transition-all duration-300 group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between gap-4 py-4 sm:py-5 px-1 sm:px-2 -mx-1 sm:-mx-2">
              <span className="text-text-secondary text-sm font-semibold italic">
                &amp; 42 more cities across India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

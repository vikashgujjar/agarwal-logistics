import { MapPinned, Landmark, Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const CITIES = [
  "Chandigarh",
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Pune",
  "Hyderabad",
];

const RADIUS = 42;

const NODES = [
  ...CITIES.map((city, i) => {
    const angle = -Math.PI / 2 + i * ((2 * Math.PI) / (CITIES.length + 1));
    return {
      city,
      more: false,
      hq: i === 0,
      x: 50 + RADIUS * Math.cos(angle),
      y: 50 + RADIUS * Math.sin(angle),
    };
  }),
  (() => {
    const angle =
      -Math.PI / 2 + CITIES.length * ((2 * Math.PI) / (CITIES.length + 1));
    return {
      city: "+42 More",
      more: true,
      hq: false,
      x: 50 + RADIUS * Math.cos(angle),
      y: 50 + RADIUS * Math.sin(angle),
    };
  })(),
];

export default function Cities() {
  return (
    <section id="cities" className="relative bg-bg-light py-10 sm:py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -left-24 top-1/4 w-[26rem] h-[26rem] bg-gradient-to-tr from-orange/10 via-navy/8 to-transparent rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Presence"
          heading="Serving Customers Across"
          highlight="India"
          description="With operations in 50+ cities, we're always close enough to help with your move."
        />

        {/* Desktop: radial network map */}
        <div className="hidden lg:block relative mx-auto mt-16 aspect-square w-full max-w-[600px] contain-[paint]">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {NODES.map(({ city, x, y }) => (
              <line
                key={city}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="var(--color-navy)"
                strokeOpacity="0.18"
                strokeWidth="0.5"
                strokeDasharray="2.2 2.2"
                className="animate-dash-flow"
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-gradient-to-br from-navy to-navy-light shadow-2xl ring-8 ring-bg-light">
            <span className="absolute inset-0 rounded-full bg-orange/20 animate-ping [animation-duration:3s]" />
            <MapPinned className="relative text-orange" size={20} strokeWidth={2} />
            <p className="relative text-white font-extrabold text-2xl xl:text-[28px] leading-none mt-1.5">
              50+
            </p>
            <p className="relative text-white/70 text-[10px] font-bold uppercase tracking-wide mt-1">
              Cities Served
            </p>
          </div>

          {NODES.map(({ city, x, y, more, hq }) => (
            <div
              key={city}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span className="relative">
                <span
                  className={`flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-full shadow-md transition-all duration-300 group-hover:scale-110 ${
                    more
                      ? "bg-orange/10 border-2 border-dashed border-orange/50 text-orange group-hover:border-orange"
                      : hq
                      ? "bg-orange text-white"
                      : "bg-white border-2 border-border text-navy group-hover:border-orange group-hover:text-orange"
                  }`}
                >
                  {more ? (
                    <Plus size={20} strokeWidth={2.5} />
                  ) : (
                    <Landmark size={20} strokeWidth={1.75} />
                  )}
                </span>
                {hq && (
                  <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center px-1.5 h-4 rounded-full bg-navy text-white text-[8px] font-extrabold ring-2 ring-bg-light">
                    HQ
                  </span>
                )}
              </span>
              <span
                className={`rounded-full px-3 py-1 shadow-sm text-[11px] font-bold whitespace-nowrap ${
                  more ? "bg-orange/10 text-orange" : hq ? "bg-orange text-white" : "bg-white text-navy"
                }`}
              >
                {city}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile & tablet: city chip grid */}
        <div className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {NODES.map(({ city, more, hq }) => (
            <div
              key={city}
              className={`relative flex items-center gap-3 rounded-xl border p-4 shadow-sm ${
                more
                  ? "bg-orange/5 border-dashed border-orange/40"
                  : hq
                  ? "bg-orange/5 border-orange/30"
                  : "bg-white border-border"
              }`}
            >
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
                  more || hq ? "bg-orange/10 text-orange" : "bg-navy/5 text-navy"
                }`}
              >
                {more ? <Plus size={16} strokeWidth={2.5} /> : <Landmark size={16} strokeWidth={1.75} />}
              </span>
              <p className={`font-bold text-sm ${more || hq ? "text-orange" : "text-navy"}`}>
                {city}
              </p>
              {hq && (
                <span className="absolute top-2 right-2 flex items-center justify-center px-1.5 h-4 rounded-full bg-orange text-white text-[8px] font-extrabold">
                  HQ
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

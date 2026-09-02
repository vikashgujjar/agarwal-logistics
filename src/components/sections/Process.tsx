import {
  PhoneCall,
  ClipboardList,
  PackageOpen,
  Truck,
  PackageCheck,
  ShieldCheck,
  Package,
  MapPin,
  Flag,
  Home,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: PhoneCall,
    title: "Inquiry",
    desc: "You contact us and get a free quote.",
  },
  {
    icon: ClipboardList,
    title: "Survey & Plan",
    desc: "We create a customised moving plan.",
  },
  {
    icon: PackageOpen,
    title: "Packing",
    desc: "Belongings packed securely with quality materials.",
  },
  {
    icon: Truck,
    title: "Loading & Transport",
    desc: "Goods loaded safely and transported.",
  },
  {
    icon: PackageCheck,
    title: "Unloading & Unpacking",
    desc: "Items unpacked with care at your new place.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Delivery",
    desc: "Delivery completed, satisfaction guaranteed.",
  },
];

const WAYPOINTS = [
  { x: 4, y: 65 },
  { x: 20, y: 20 },
  { x: 38, y: 70 },
  { x: 58, y: 18 },
  { x: 78, y: 68 },
  { x: 96, y: 25 },
];

const ROAD_D =
  "M 4 65 Q 20 20 29 45 Q 38 70 48 44 Q 58 18 68 43 Q 78 68 87 46.5 Q 96 25 96 25";

export default function Process() {
  return (
    <section id="process" className="relative bg-bg-light py-10 sm:py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -right-24 top-10 w-[26rem] h-[26rem] bg-gradient-to-bl from-orange/12 via-navy/8 to-transparent rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -left-10 bottom-0 w-56 h-56 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-navy) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      <span
        aria-hidden="true"
        className="hidden lg:flex animate-float-slow absolute left-10 top-14 items-center justify-center w-12 h-12 rounded-2xl border-2 border-dashed border-orange/25 text-orange/40 rotate-12"
      >
        <Package size={20} strokeWidth={2} />
      </span>
      <span
        aria-hidden="true"
        className="hidden lg:flex animate-float-slow [animation-delay:1.2s] absolute right-14 top-24 items-center justify-center w-11 h-11 rounded-full border-2 border-dashed border-navy/20 text-navy/30"
      >
        <MapPin size={17} strokeWidth={2} />
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          heading="Moving Made Simple,"
          highlight="Handled with Care"
          description="From planning to safe delivery, we follow a streamlined process to ensure a smooth and stress-free moving experience."
        />

        {/* Desktop: animated journey map */}
        <div className="hidden lg:block relative mt-20 h-[380px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm"
          >
            <path
              d={ROAD_D}
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="2.6"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={ROAD_D}
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={ROAD_D}
              fill="none"
              stroke="var(--color-orange)"
              strokeWidth="0.7"
              strokeDasharray="2.5 2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="animate-dash-flow"
            />
          </svg>

          <span
            aria-hidden="true"
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white shadow-md ring-4 ring-bg-light"
            style={{ left: `${WAYPOINTS[0].x}%`, top: `${WAYPOINTS[0].y}%` }}
          >
            <Flag size={13} strokeWidth={2.25} />
          </span>
          <span
            aria-hidden="true"
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white shadow-md ring-4 ring-bg-light"
            style={{
              left: `${WAYPOINTS[WAYPOINTS.length - 1].x}%`,
              top: `${WAYPOINTS[WAYPOINTS.length - 1].y}%`,
            }}
          >
            <Home size={13} strokeWidth={2.25} />
          </span>

          <div
            aria-hidden="true"
            className="animate-truck-drive absolute -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <span className="absolute -inset-2.5 rounded-full bg-orange/25 animate-ping [animation-duration:2s]" />
            <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange to-orange-dark text-white shadow-xl ring-4 ring-white">
              <Truck size={18} strokeWidth={2.25} />
            </span>
          </div>

          {STEPS.map(({ icon: Icon, title, desc }, i) => {
            const wp = WAYPOINTS[i];
            const cardAbove = wp.y >= 50;
            return (
              <div key={title}>
                <div
                  className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-navy to-navy-light text-orange shadow-lg ring-4 ring-white transition-transform duration-300 hover:scale-110 animate-fade-in-up"
                  style={{ left: `${wp.x}%`, top: `${wp.y}%`, animationDelay: `${i * 100}ms` }}
                >
                  <Icon size={20} strokeWidth={1.9} />
                  <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-[22px] h-[22px] rounded-full bg-gradient-to-br from-orange to-orange-dark text-white text-[9px] font-extrabold ring-2 ring-white shadow">
                    {i + 1}
                  </span>
                </div>

                <div
                  className={`absolute z-10 -translate-x-1/2 w-40 text-center animate-fade-in-up ${
                    cardAbove ? "-translate-y-full" : ""
                  }`}
                  style={{
                    left: `${wp.x}%`,
                    top: `${cardAbove ? wp.y - 11 : wp.y + 11}%`,
                    animationDelay: `${i * 100 + 60}ms`,
                  }}
                >
                  <div className="bg-white rounded-xl border border-border shadow-md px-3.5 py-2.5">
                    <p className="font-bold text-navy text-xs leading-snug">{title}</p>
                    <p className="text-text-secondary text-[10px] leading-relaxed mt-0.5">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & tablet: left-rail timeline */}
        <div className="lg:hidden relative mt-14 pl-[68px]">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-orange/40 via-border to-transparent" />
          <div className="flex flex-col gap-7">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative">
                <span className="absolute -left-[56px] top-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-light text-orange ring-4 ring-bg-light shadow-md">
                  <Icon size={19} strokeWidth={1.9} />
                </span>
                <span className="absolute -left-[42px] -top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-orange to-orange-dark text-white text-[9px] font-extrabold ring-2 ring-bg-light shadow">
                  {i + 1}
                </span>
                <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                  <h3 className="font-bold text-navy text-sm mb-1">{title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

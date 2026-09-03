import {
  PhoneCall,
  ClipboardList,
  PackageOpen,
  Truck,
  PackageCheck,
  ShieldCheck,
  Package,
  MapPin,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: PhoneCall,
    title: "Inquiry",
    desc: "You contact us with your moving requirements and get a free quote.",
  },
  {
    icon: ClipboardList,
    title: "Survey & Plan",
    desc: "We understand your needs and create a customized moving plan.",
  },
  {
    icon: PackageOpen,
    title: "Packing",
    desc: "Our experts pack your belongings securely using high-quality materials.",
  },
  {
    icon: Truck,
    title: "Loading & Transport",
    desc: "We load your goods safely and transport them to your new location.",
  },
  {
    icon: PackageCheck,
    title: "Unloading & Unpacking",
    desc: "We unload and unpack your items with care at your new home or office.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Delivery",
    desc: "We ensure safe delivery and complete customer satisfaction.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-bg-light py-10 sm:py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -right-24 top-10 w-[26rem] h-[26rem] bg-linear-to-bl from-orange/12 via-navy/8 to-transparent rounded-full blur-3xl"
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

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Connecting wavy dashed line — desktop only */}
          <div className="hidden lg:block absolute -top-9 left-0 w-full h-16 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1200 65" fill="none" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M 60 18 C 140 18, 160 42, 200 42 C 240 42, 260 18, 300 18 C 340 18, 360 42, 400 42 C 440 42, 460 18, 500 18 C 540 18, 560 42, 600 42 C 640 42, 660 18, 700 18 C 740 18, 760 42, 800 42 C 840 42, 860 18, 900 18 C 940 18, 960 42, 1000 42 C 1040 42, 1060 18, 1100 18 L 1140 18"
                stroke="var(--color-orange)"
                strokeWidth="2"
                strokeDasharray="5 5"
                opacity="0.55"
              />
            </svg>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-9 sm:gap-x-5">
            {STEPS.map(({ icon: Icon, title, desc }, i) => {
              const bob = i % 2 === 1 ? "lg:-translate-y-2" : "lg:translate-y-1";
              const isLast = i === STEPS.length - 1;
              return (
                <div key={title} className="relative flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <span
                    className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-orange to-orange-dark text-white text-[11px] font-extrabold shadow-md ring-4 ring-bg-light mb-6 ${bob}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className={`hidden lg:flex absolute z-10 left-full top-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-5 h-5 rounded-full bg-white text-orange ring-2 ring-orange/30 shadow-sm ${bob}`}
                    >
                      <ArrowRight size={10} strokeWidth={2.75} />
                    </span>
                  )}

                  <div className="group relative w-full bg-white rounded-2xl border border-border shadow-md pt-9 pb-6 px-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-br from-orange to-orange-dark text-white shadow-lg ring-4 ring-bg-light transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="font-extrabold text-navy text-xs sm:text-sm leading-snug mt-4 mb-1.5">
                      {title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="block mx-auto w-6 h-0.5 rounded-full bg-orange mb-2.5"
                    />
                    <p className="text-text-secondary text-[10px] sm:text-[11px] leading-relaxed">{desc}</p>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 inset-x-0 h-2.5 bg-orange rounded-b-[20px] transition-[height] duration-300 [clip-path:ellipse(65%_100%_at_50%_100%)] group-hover:h-3.5"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

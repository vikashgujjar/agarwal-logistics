import Image from "next/image";
import {
  Home,
  Building2,
  Car,
  Bike,
  PackageOpen,
  Truck,
  Warehouse,
  Settings2,
  ArrowRight,
  PackageCheck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const SMALL_SERVICES = [
  {
    icon: Car,
    title: "Car Transportation",
    desc: "Insured vehicle transport, nationwide.",
    src: "/hero/road.jpg",
    alt: "Car being transported on a nationwide route",
  },
  {
    icon: Bike,
    title: "Bike Transportation",
    desc: "Safe, timely two-wheeler delivery.",
    src: "/hero/city.jpg",
    alt: "City-wide two-wheeler delivery",
  },
  {
    icon: PackageOpen,
    title: "Packing & Moving",
    desc: "Quality materials, zero damage.",
    src: "/hero/packing.jpg",
    alt: "Careful packing of belongings",
  },
  {
    icon: Truck,
    title: "Loading & Unloading",
    desc: "Trained crew, right equipment.",
    src: "/about/unloading-truck.jpg",
    alt: "Mover unloading furniture from a truck",
  },
  {
    icon: Warehouse,
    title: "Storage Services",
    desc: "Secure short & long-term space.",
    src: "/hero/warehouse.jpg",
    alt: "Secure warehouse storage facility",
  },
  {
    icon: Settings2,
    title: "Custom Relocation",
    desc: "Solutions built around your move.",
    src: "/about/boxes-window.jpg",
    alt: "Stacked moving boxes ready for a custom move",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-bg-light py-10 sm:py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -right-20 -bottom-20 w-[28rem] h-[28rem] bg-gradient-to-tl from-orange/15 via-navy/10 to-transparent rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -left-10 top-16 w-56 h-56 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-navy) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          heading="Our Best Moving"
          highlight="Services"
          description="Whatever you're moving — home, office or vehicle — we have a service built for it."
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[170px] lg:auto-rows-[190px] gap-4 sm:gap-5">
          {/* Hero tile: Home Relocation */}
          <div className="group relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/services/home-relocation.jpg"
              alt="Home relocation"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />

            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-2.5 bg-white rounded-full pl-2 pr-4 py-2 shadow-lg">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange/10 text-orange shrink-0">
                <PackageCheck size={15} strokeWidth={2.25} />
              </span>
              <div className="leading-tight">
                <p className="font-extrabold text-navy text-xs">25K+</p>
                <p className="text-text-secondary text-[10px] font-semibold">Homes Moved</p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-orange text-white mb-3 shadow-lg">
                <Home size={20} strokeWidth={2} />
              </span>
              <h3 className="font-extrabold text-white text-xl sm:text-2xl mb-1.5">
                Home Relocation
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-[85%] sm:max-w-xs mb-3">
                End-to-end residential moving handled with care, start to finish.
              </p>
              <a
                href="/#quote"
                className="inline-flex items-center gap-1.5 text-orange text-xs font-bold uppercase tracking-wide group-hover:gap-2.5 transition-all"
              >
                Get Free Quote <ArrowRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Wide tile: Office Relocation */}
          <div className="group relative col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/services/office-relocation.jpg"
              alt="Office relocation"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange text-white shrink-0 shadow-lg">
                  <Building2 size={18} strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-extrabold text-white text-sm sm:text-base leading-tight">
                    Office Relocation
                  </h3>
                  <p className="hidden sm:block text-white/75 text-xs mt-0.5 truncate">
                    Minimal downtime, back up fast.
                  </p>
                </div>
              </div>
              <a
                href="/#quote"
                aria-label="Learn more about office relocation"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 text-white shrink-0 group-hover:bg-orange transition-colors"
              >
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {SMALL_SERVICES.map(({ icon: Icon, title, desc, src, alt }) => (
            <div
              key={title}
              className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" />
              <span className="absolute top-3 left-3 flex items-center justify-center w-8 h-8 rounded-full bg-orange text-white shadow-lg">
                <Icon size={15} strokeWidth={2.25} />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                <h3 className="font-bold text-white text-xs sm:text-sm leading-snug">
                  {title}
                </h3>
                <p className="hidden sm:block text-white/70 text-[11px] mt-0.5 leading-snug">
                  {desc}
                </p>
              </div>

              <span className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-full bg-white/15 text-white opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <ArrowRight size={11} strokeWidth={2.5} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

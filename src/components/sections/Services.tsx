import { Home, Building2, Car, Navigation, PackageOpen, Warehouse, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    icon: Home,
    slug: "domestic-shifting",
    title: "Domestic Shifting",
    desc: "Safe and secure home shifting with door-to-door delivery service.",
  },
  {
    icon: Building2,
    slug: "corporate-relocation",
    title: "Corporate Relocation",
    desc: "Relocate your office quickly with minimal downtime and maximum care.",
  },
  {
    icon: Car,
    slug: "car-bike-transport",
    title: "Car & Bike Transport",
    desc: "Safe and reliable vehicle transportation across India in enclosed carriers.",
  },
  {
    icon: Navigation,
    slug: "local-shifting",
    title: "Local Shifting",
    desc: "Fast within-city moves for homes and offices, same-day service available.",
  },
  {
    icon: PackageOpen,
    slug: "packing-unpacking",
    title: "Packing & Unpacking",
    desc: "Professional packing and unpacking using high-quality materials.",
  },
  {
    icon: Warehouse,
    slug: "warehouse-storage",
    title: "Warehouse Storage",
    desc: "Secure and spacious storage solutions for short and long term.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-bg-light py-10 sm:py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -right-20 -bottom-20 w-[28rem] h-[28rem] bg-linear-to-tl from-orange/15 via-navy/10 to-transparent rounded-full blur-3xl"
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

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {SERVICES.map(({ icon: Icon, slug, title, desc }) => (
            <a
              key={slug}
              href={`/services/${slug}`}
              className="group relative bg-white rounded-0 border border-border p-7 sm:p-8 text-center overflow-hidden transition-all duration-300 "
            >
              <span
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-orange to-orange-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              />

              <span className="relative inline-flex items-center justify-center w-20 h-20 mb-5">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border-2 border-dashed border-orange/40 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                />
                <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.75} />
                </span>
              </span>

              <h3 className="font-extrabold text-navy text-base sm:text-lg mb-2 group-hover:text-orange transition-colors duration-300">
                {title}
              </h3>
              <span
                aria-hidden="true"
                className="block mx-auto w-8 h-0.5 bg-orange/30 group-hover:w-12 group-hover:bg-orange transition-all duration-300 mb-3"
              />
              <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>

              <span className="inline-flex items-center gap-1.5 text-orange text-xs font-bold uppercase tracking-wide mt-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Read More <ArrowRight size={13} strokeWidth={2.5} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

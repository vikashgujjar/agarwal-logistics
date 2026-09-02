import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
import { SERVICES_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services | Agarwal Logistics Packers",
  description:
    "Complete relocation services — domestic shifting, corporate relocation, vehicle transport, packing and warehouse storage across 50+ Indian cities.",
};

const TRUST = [
  { value: "10+", label: "Years Experience" },
  { value: "25K+", label: "Moves Completed" },
  { value: "50+", label: "Cities Covered" },
  { value: "99%", label: "Satisfaction Rate" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="6 Specialist Services"
        heading="Built for"
        highlight="Every Move."
        description="From a single room to a full corporate campus — Agarwal Logistics Packers covers every relocation need across 50+ Indian cities."
        image="/hero/warehouse.jpg"
        imageAlt="Agarwal Logistics Packers services"
      />

      {/* Trust strip */}
      <section className="py-6 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TRUST.map((t) => (
              <div key={t.label} className="text-center py-2">
                <p className="font-extrabold text-navy text-2xl sm:text-3xl leading-none">
                  {t.value}
                </p>
                <p className="text-text-secondary text-xs font-semibold mt-1.5">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-10 sm:py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            heading="Six Services,"
            highlight="One Trusted Partner."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, i) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-[190px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                  <span className="absolute top-4 left-4 bg-orange text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                  <span className="absolute bottom-3 right-4 font-black text-white/40 text-3xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6 bg-white">
                  <h3 className="font-extrabold text-navy text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {service.short}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-navy/80">
                        <BadgeCheck size={14} className="text-orange shrink-0 mt-0.5" strokeWidth={2} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-navy text-xs font-extrabold uppercase tracking-wider group-hover:text-orange transition-colors">
                      Explore Service
                    </span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <WhyChooseUs />
    </>
  );
}

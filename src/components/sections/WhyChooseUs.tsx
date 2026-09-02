import Image from "next/image";
import { CircleCheck, Star, Check, X, Trophy, Building2, Warehouse } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import TiltCard from "@/components/ui/TiltCard";

const COMPARISON = [
  { feature: "100% Insured Shipments", others: "Rarely offered" },
  { feature: "On-Time Delivery Guarantee", others: "Not guaranteed" },
  { feature: "Transparent, No Hidden Fees", others: "Fees vary" },
  { feature: "Real-Time GPS Tracking", others: "Rarely available" },
  { feature: "Damage-Free Packing Guarantee", others: "Not guaranteed" },
  { feature: "24/7 Dedicated Support", others: "Limited hours" },
];

const GRID_COLS = "grid-cols-[1.5fr_0.8fr_1fr]";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-10 sm:py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -left-24 top-1/3 w-[30rem] h-[30rem] bg-gradient-to-tr from-navy/10 via-orange/10 to-transparent rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -right-10 top-10 w-64 h-64 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-navy) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          heading="Why Agarwal Logistics Packers Is The"
          highlight="Right Choice"
          description="We combine experience, care and technology to give you a relocation experience you can trust. See exactly how we stack up."
        />

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <TiltCard>
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5]">
                <Image
                  src="/why-choose-us/warehouse-ops.jpg"
                  alt="Our modern warehouse and logistics operations"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-orange text-white mb-3 shadow-lg">
                    <Warehouse size={20} strokeWidth={2} />
                  </span>
                  <p className="text-white font-extrabold text-lg sm:text-xl leading-snug">
                    State-of-the-art warehousing
                  </p>
                  <p className="text-white/75 text-xs sm:text-sm mt-1">
                    Secure facilities across 50+ Indian cities
                  </p>
                </div>
              </div>
            </TiltCard>

            <div className="absolute -top-5 -right-3 sm:-right-6 bg-white rounded-xl shadow-xl border border-border px-5 py-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-orange/10 text-orange shrink-0">
                <CircleCheck size={20} strokeWidth={2.25} />
              </span>
              <div>
                <p className="font-extrabold text-navy text-lg leading-none">
                  99.6%
                </p>
                <p className="text-text-secondary text-xs font-semibold mt-1">
                  On-Time Delivery Rate
                </p>
              </div>
            </div>

            {/* <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-xl shadow-xl border border-border px-5 py-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-navy text-orange shrink-0">
                <Star size={18} fill="currentColor" strokeWidth={0} />
              </span>
              <div>
                <p className="font-extrabold text-navy text-lg leading-none">
                  4.9 / 5
                </p>
                <p className="text-text-secondary text-xs font-semibold mt-1">
                  Customer Rating
                </p>
              </div>
            </div> */}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-2 sm:-right-4 z-10 rotate-[6deg] bg-orange text-white text-[10px] font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-lg shadow-orange/30"
              >
                Most Trusted Choice
              </div>

              <div className="rounded-[1.75rem] bg-gradient-to-br from-navy to-navy-light p-1.5 shadow-2xl">
                <div className="bg-white rounded-[1.4rem] p-5 sm:p-7">
                  <div
                    className={`grid ${GRID_COLS} gap-2 sm:gap-4 items-end pb-4 mb-1 border-b-2 border-bg-light`}
                  >
                    <span />
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange text-white shadow-md shadow-orange/30">
                        <Trophy size={18} strokeWidth={2.25} />
                      </span>
                      <span className="text-navy font-extrabold text-[10px] sm:text-xs text-center leading-tight">
                        Agarwal Packers
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-light text-text-secondary">
                        <Building2 size={18} strokeWidth={2} />
                      </span>
                      <span className="text-text-secondary font-bold text-[10px] sm:text-xs text-center leading-tight">
                        Other Movers
                      </span>
                    </div>
                  </div>

                  <div className="divide-y divide-border/70">
                    {COMPARISON.map((row) => (
                      <div
                        key={row.feature}
                        className={`grid ${GRID_COLS} gap-2 sm:gap-4 items-center py-3.5`}
                      >
                        <p className="text-navy text-xs sm:text-sm font-bold leading-snug">
                          {row.feature}
                        </p>
                        <div className="flex justify-center">
                          <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange text-white shrink-0">
                            <Check size={14} strokeWidth={3} />
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1">
                          <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-bg-light text-text-secondary shrink-0">
                            <X size={13} strokeWidth={2.5} />
                          </span>
                          <span className="hidden sm:block text-text-secondary text-[10px] font-medium text-center leading-tight">
                            {row.others}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Button href="/#quote" variant="primary" className="mt-8">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

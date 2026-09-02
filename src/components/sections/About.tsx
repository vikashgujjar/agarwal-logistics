import Image from "next/image";
import {
  ShieldCheck,
  PackageCheck,
  UserCheck,
  Truck,
  Medal,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";

const FEATURES = [
  { icon: ShieldCheck, label: "Safe & Secure Transportation" },
  { icon: PackageCheck, label: "Quality Packing Materials" },
  { icon: UserCheck, label: "Trained & Verified Professionals" },
  { icon: Truck, label: "On-Time Delivery" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-bg-light py-10 sm:py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -right-24 -bottom-24 w-[34rem] h-[34rem] bg-gradient-to-br from-orange/25 via-navy/10 to-transparent rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -left-16 bottom-0 w-72 h-72 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-navy) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-2xl border border-border/60 p-6 sm:p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-orange" />
                <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                  About Us
                </span>
              </div>
              <h2 className="font-extrabold text-navy text-[28px] sm:text-3xl md:text-[36px] leading-tight mb-5">
                About{" "}
                <span className="text-orange">Agarwal Logistics Packers</span>
              </h2>

              <p className="text-text-secondary text-[15px] leading-relaxed">
                For over a decade, Agarwal Logistics Packers has been
                providing moving assistance for relocation processes across
                India. Our expertise includes household shifting, office
                relocation, packing and moving, vehicle transportation,
                loading and unloading and storage.
              </p>
              <p className="mt-4 text-text-secondary text-[15px] leading-relaxed">
                Completing a relocation is not an end goal for us — our
                concern is taking care of your goods and making the entire
                process easier for you, backed by 25K+ residential moves and
                70K+ corporate relocations.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {FEATURES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-orange/10 text-orange shrink-0">
                      <Icon size={19} strokeWidth={2} />
                    </span>
                    <span className="text-navy text-sm font-bold leading-snug pt-1.5">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <Button href="/#services" variant="primary" className="mt-9">
                More About Us
                <ArrowRight size={16} strokeWidth={2.5} />
              </Button>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-[380px] sm:h-[440px] lg:h-[480px]">
                <div className="row-span-2 relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/about/packing-home.jpg"
                    alt="Professional packing a moving box at home"
                    fill
                    sizes="(min-width: 1024px) 25vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/about/boxes-window.jpg"
                    alt="Stacked moving boxes ready for transit"
                    fill
                    sizes="(min-width: 1024px) 25vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/about/unloading-truck.jpg"
                      alt="Mover unloading furniture from a truck"
                      fill
                      sizes="(min-width: 1024px) 12vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/about/new-home-couple.jpg"
                      alt="Happy family settling into their new home"
                      fill
                      sizes="(min-width: 1024px) 12vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-2xl border-4 border-bg-light text-center">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-navy text-orange mb-1">
                  <Medal size={17} strokeWidth={2.25} />
                </span>
                <p className="font-extrabold text-navy text-base sm:text-lg leading-none">
                  10+ Years
                </p>
                <p className="text-text-secondary text-[10px] font-bold leading-tight px-3 mt-1">
                  Of Trust &amp; Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

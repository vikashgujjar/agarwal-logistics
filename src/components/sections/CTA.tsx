import { Phone, ArrowRight, ShieldCheck, Clock, Star, Headset, Truck } from "lucide-react";
import Button from "@/components/ui/Button";

const TRUST_CHIPS = [
  { icon: ShieldCheck, label: "100% Insured" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Star, label: "4.9/5 Rated" },
  { icon: Headset, label: "24/7 Support" },
];

export default function CTA() {
  return (
    <section id="contact" className="relative bg-navy py-10 md:py-14 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/4 w-80 h-80 bg-orange/25 rounded-full blur-3xl animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 right-1/4 w-72 h-72 bg-navy-light/70 rounded-full blur-3xl animate-float-slow [animation-delay:1.5s]"
      />
      <Truck
        aria-hidden="true"
        size={220}
        strokeWidth={0.6}
        className="hidden lg:block absolute -right-8 bottom-0 text-white/[0.04] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(#fff 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl px-6 sm:px-8 md:px-10 py-7 md:py-8 overflow-hidden">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent"
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange/15 text-orange text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full mb-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
                </span>
                Ready When You Are
              </span>

              <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-[28px] leading-tight">
                Still have questions? Talk to our{" "}
                <span className="text-orange">relocation expert</span>
              </h2>
              <p className="text-white/70 text-xs sm:text-sm mt-2 max-w-md">
                Get a free, no-obligation quote — our team responds within 30
                minutes.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2">
                {TRUST_CHIPS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-white/70 text-[11px] font-semibold"
                  >
                    <Icon size={13} className="text-orange" strokeWidth={2} />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              <Button href="tel:+919988245009" variant="primary">
                <Phone size={16} strokeWidth={2.5} /> +91 99882 45009
              </Button>
              <Button href="/#quote" variant="outline-light">
                Get Free Quote <ArrowRight size={15} strokeWidth={2.5} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

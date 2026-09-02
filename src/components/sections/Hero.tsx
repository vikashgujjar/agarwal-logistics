import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  Headset,
  Phone,
  PlayCircle,
  Star,
  Mail,
  MapPin,
  CalendarDays,
  PackageCheck,
  Users2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import TiltCard from "@/components/ui/TiltCard";
import HeroBackgroundSlider from "@/components/sections/HeroBackgroundSlider";
import HeroTrustTicker from "@/components/sections/HeroTrustTicker";

const TRUST_STRIP = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Every shipment covered" },
  { icon: Clock, title: "On-Time Delivery", desc: "Every move, on schedule" },
  { icon: BadgeCheck, title: "Govt. Verified", desc: "Licensed & certified" },
  { icon: Headset, title: "24/7 Support", desc: "Always here to help" },
];

const HERO_HIGHLIGHTS = [
  { icon: ShieldCheck, title: "Safe Transportation" },
  { icon: PackageCheck, title: "Secure Packing" },
  { icon: Users2, title: "Trained Professionals" },
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-bg-light">
      <div className="relative overflow-hidden bg-navy">
        <HeroBackgroundSlider />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
            <div className="min-w-0">
              <span className="animate-fade-in-up inline-flex items-center gap-2 bg-orange text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Safe &bull; Secure &bull; Reliable
              </span>

              <h1 className="animate-fade-in-up [animation-delay:100ms] text-white font-extrabold text-2xl sm:text-4xl md:text-[42px] leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-5">
                We Make Your Move{" "}
                <span className="text-shimmer">Simple, Safe</span> &amp;
                Stress-Free
              </h1>

              <p className="animate-fade-in-up [animation-delay:200ms] text-white/75 text-sm md:text-base leading-relaxed max-w-xl mb-7">
                From packing to delivery, Agarwal Logistics Packers provides
                end-to-end relocation solutions tailored to your needs —
                insured, tracked and handled with care.
              </p>

              <div className="animate-fade-in-up [animation-delay:300ms] flex flex-wrap gap-3 mb-7">
                {HERO_HIGHLIGHTS.map(({ icon: Icon, title }) => (
                  <div
                    key={title}
                    className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full pl-2 pr-4 py-2"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange text-white shrink-0">
                      <Icon size={12} strokeWidth={2.25} />
                    </span>
                    <span className="text-white text-xs font-semibold whitespace-nowrap">
                      {title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="animate-fade-in-up [animation-delay:400ms] flex flex-wrap items-center gap-4">
                <Button href="/#quote" variant="primary">
                  <Phone size={15} strokeWidth={2.5} />
                  Get Free Quote
                </Button>
                <Button href="/#process" variant="outline-light">
                  <PlayCircle size={15} strokeWidth={2.25} />
                  How We Work
                </Button>

                <HeroTrustTicker />
              </div>
            </div>

            <div className="animate-fade-in-up [animation-delay:150ms]">
            <TiltCard className="relative min-w-0">
              <div
                aria-hidden="true"
                className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-br from-orange/70 via-orange/25 to-transparent blur-2xl"
              />
              <div
                id="quote"
                className="relative min-w-0 bg-white rounded-2xl shadow-2xl ring-1 ring-white/10 overflow-hidden scroll-mt-24"
              >
                <div className="relative bg-gradient-to-r from-navy via-navy-light to-navy px-6 sm:px-8 py-3.5 text-center overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_3.5s_ease-in-out_infinite]"
                  />
                  <p className="relative text-white font-bold text-sm italic">
                    &ldquo;Your Move, Our Mission.&rdquo;{" "}
                    <Star
                      size={13}
                      className="inline text-orange -mt-0.5"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </p>
                </div>

              <div className="p-5 sm:p-7">
                <h2 className="font-extrabold text-navy text-lg mb-1">
                  Get a Free Moving Quote
                </h2>
                <p className="text-text-secondary text-xs mb-5">
                  Fill in your details, our team will call you within 30 minutes.
                </p>
                <form className="flex flex-col gap-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative min-w-0">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary">
                        <ShieldCheck size={14} />
                      </span>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-lg border border-border pl-10 pr-4 py-2.5 text-sm text-navy placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                      />
                    </div>
                    <div className="relative min-w-0">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary">
                        <Phone size={14} />
                      </span>
                      <input
                        type="tel"
                        placeholder="Mobile No."
                        className="w-full rounded-lg border border-border pl-10 pr-4 py-2.5 text-sm text-navy placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative min-w-0">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary">
                        <Mail size={14} />
                      </span>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-lg border border-border pl-10 pr-4 py-2.5 text-sm text-navy placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                      />
                    </div>
                    <div className="relative min-w-0">
                      <select
                        defaultValue=""
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                      >
                        <option value="" disabled>
                          Type of Move
                        </option>
                        <option>Home Relocation</option>
                        <option>Office Relocation</option>
                        <option>Vehicle Transportation</option>
                        <option>Domestic / International</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative min-w-0">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary">
                        <MapPin size={14} />
                      </span>
                      <input
                        type="text"
                        placeholder="Moving From"
                        className="w-full rounded-lg border border-border pl-10 pr-4 py-2.5 text-sm text-navy placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                      />
                    </div>
                    <div className="relative min-w-0">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary">
                        <MapPin size={14} />
                      </span>
                      <input
                        type="text"
                        placeholder="Moving To"
                        className="w-full rounded-lg border border-border pl-10 pr-4 py-2.5 text-sm text-navy placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary">
                      <CalendarDays size={14} />
                    </span>
                    <input
                      type="date"
                      aria-label="Moving Date"
                      className="w-full rounded-lg border border-border pl-10 pr-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full mt-1">
                    Get Free Quote &rarr;
                  </Button>

                  <p className="flex items-center justify-center gap-1.5 text-text-secondary text-xs font-medium">
                    <ShieldCheck size={13} className="text-orange" />
                    100% Privacy Guaranteed
                  </p>
                </form>
              </div>
            </div>
            </TiltCard>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-4 md:-mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 bg-white rounded-2xl shadow-xl border border-border divide-y sm:divide-y-0 sm:divide-x divide-border overflow-hidden relative z-10">
          {TRUST_STRIP.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3 px-5 py-6">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-orange/10 text-orange shrink-0">
                <Icon size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="font-bold text-navy text-sm">{title}</p>
                <p className="text-text-secondary text-xs mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

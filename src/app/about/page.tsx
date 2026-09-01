import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, ShieldCheck, UserCheck, Radar, BadgeCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AboutSection from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import TrustBadges from "@/components/sections/TrustBadges";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us | Agarwal Logistics Packers",
  description:
    "Agarwal Logistics Packers has been relocating homes and offices across India since 2015 — 25K+ residential moves, 70K+ corporate relocations, 50+ cities.",
};

const MILESTONES = [
  {
    year: "2015",
    title: "The Beginning",
    desc: "Founded in Chandigarh with a small fleet and one promise: treat every family's belongings like our own.",
  },
  {
    year: "2017",
    title: "First 5,000 Moves",
    desc: "Crossed our first major milestone and began expanding into neighbouring states.",
  },
  {
    year: "2019",
    title: "Pan-India Launch",
    desc: "Grew our network to 25+ cities and introduced GPS-tracked transport on every move.",
  },
  {
    year: "2021",
    title: "ISO 9001:2015 Certified",
    desc: "Achieved formal quality certification, validating the processes our customers already trusted.",
  },
  {
    year: "2023",
    title: "Corporate Division",
    desc: "Launched a dedicated corporate relocation team and crossed 70K+ corporate relocations.",
  },
  {
    year: "Today",
    title: "50+ Cities, 25K+ Homes",
    desc: "Now serving 50+ cities across India with 25K+ residential moves completed and counting.",
  },
];

const PILLARS = [
  {
    icon: Target,
    label: "Mission",
    heading: "Move Every Family with Care",
    text: "To make every relocation in India seamless, transparent and stress-free — from the first phone call to the last box placed.",
  },
  {
    icon: Eye,
    label: "Vision",
    heading: "India's Most Trusted Name",
    text: "To be present in every city and remembered by every family — the first name that comes to mind whenever India moves home.",
  },
  {
    icon: HeartHandshake,
    label: "Values",
    heading: "Integrity. Excellence. Care.",
    text: "Every quote is honest, every item is handled like our own, and every deadline is a promise — not a suggestion.",
  },
];

const PROMISES = [
  {
    icon: BadgeCheck,
    title: "Zero Hidden Charges",
    desc: "The quote we give is exactly what you pay. Every cost is itemised and explained before we begin.",
  },
  {
    icon: UserCheck,
    title: "Verified Crew Only",
    desc: "Every team member is background-checked and trained before their first independent move.",
  },
  {
    icon: ShieldCheck,
    title: "Full Transit Insurance",
    desc: "Every shipment is insured end-to-end. Claims are processed quickly, with no paperwork maze.",
  },
  {
    icon: Radar,
    title: "Real-Time Tracking",
    desc: "GPS tracking plus WhatsApp updates so you always know exactly where your belongings are.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="Our Story Since 2015"
        heading="Moving India's"
        highlight="Families Forward."
        description="For 10+ years, Agarwal Logistics Packers has been the trusted name behind 25K+ residential moves and 70K+ corporate relocations across 50+ Indian cities — built on honesty, care and a promise we never break."
        image="/about/new-home-couple.jpg"
        imageAlt="A family settling into their new home"
      />

      <AboutSection />

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 1px, transparent 22px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-orange" />
              <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                Our Journey
              </span>
              <span className="h-[2px] w-6 bg-orange" />
            </div>
            <h2 className="font-extrabold text-white text-[28px] sm:text-3xl md:text-[36px] leading-tight">
              10+ Years of <span className="text-orange">Building Trust.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className="relative rounded-2xl bg-white/5 border border-white/10 p-6 hover:-translate-y-1 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex items-center gap-2 text-orange text-[11px] font-extrabold uppercase tracking-[0.18em] mb-3">
                  <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                  {m.year}
                </div>
                <h3 className="font-bold text-white text-base mb-2">{m.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{m.desc}</p>
                <div className="absolute bottom-3 right-4 font-black text-white/[0.04] text-5xl leading-none pointer-events-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Drives Us"
            heading="Mission, Vision &"
            highlight="Values."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {PILLARS.map(({ icon: Icon, label, heading, text }) => (
              <div
                key={label}
                className="relative bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-dark via-orange to-amber-400"
                />
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-navy/5 text-navy mb-6 mt-2">
                  <Icon size={26} strokeWidth={1.75} />
                </span>
                <div className="text-orange text-[10px] font-extrabold uppercase tracking-[0.25em] mb-2">
                  {label}
                </div>
                <h3 className="font-extrabold text-navy text-lg mb-3 leading-tight">
                  {heading}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Stats />
      {/* Promises */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitments"
            heading="Four Promises"
            highlight="We Never Break."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROMISES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group bg-bg-light rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 text-orange mb-5 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <div className="text-orange text-[10px] font-extrabold uppercase tracking-[0.18em] mb-1">
                  Promise {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-navy text-sm mb-2">{title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <TrustBadges />
    </>
  );
}

"use client";

import { useState } from "react";
import {
  MapPin,
  CalendarCheck,
  PackageOpen,
  ShieldCheck,
  Radar,
  Calculator,
  Phone,
  Plus,
  X,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FAQS: { icon: LucideIcon; q: string; a: string }[] = [
  {
    icon: MapPin,
    q: "What areas do you provide moving services in?",
    a: "We are headquartered in Chandigarh and operate in 50+ cities across India, including Delhi NCR, Mumbai, Bangalore, Kolkata, Pune, Hyderabad and Chennai, with support for both local and long-distance moves.",
  },
  {
    icon: CalendarCheck,
    q: "How far in advance should I book my move?",
    a: "We recommend booking at least 5-7 days in advance for local moves and 2-3 weeks for long-distance or international relocations to secure your preferred date.",
  },
  {
    icon: PackageOpen,
    q: "Do you provide packing materials?",
    a: "Yes, we bring all necessary packing materials — boxes, bubble wrap, tape and protective covers — included in your quote.",
  },
  {
    icon: ShieldCheck,
    q: "Is my shipment insured during transit?",
    a: "Every move includes comprehensive transit insurance, covering your belongings against damage or loss from pickup to delivery.",
  },
  {
    icon: Radar,
    q: "Can I track my shipment in real time?",
    a: "Yes, our vehicles are GPS-enabled, so you can track your shipment's location throughout the journey.",
  },
  {
    icon: Calculator,
    q: "How is the moving cost calculated?",
    a: "Cost depends on distance, volume of goods, and services chosen. We provide a transparent, itemised quote before your move begins with no hidden charges.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-10 sm:py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute left-0 top-6 w-40 h-40 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(var(--color-orange) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          heading="Frequently Asked"
          highlight="Questions"
          description="Find answers to common questions about our moving and transportation services."
        />

        <div className="mt-12 sm:mt-14 grid sm:grid-cols-2 gap-5 sm:gap-6 items-start">
          {FAQS.map(({ icon: Icon, q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={q}
                className={`rounded-2xl h-full border-2 bg-white shadow-sm transition-colors duration-300 ${
                  isOpen ? "border-orange shadow-lg shadow-orange/10" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                >
                  <span
                    className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-orange text-white" : "bg-orange/10 text-orange"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <span
                    className={`flex-1 font-bold text-sm sm:text-[15px] leading-snug transition-colors duration-300 ${
                      isOpen ? "text-orange" : "text-navy"
                    }`}
                  >
                    {i + 1}. {q}
                  </span>
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-orange text-white" : "bg-bg-light text-navy/50"
                    }`}
                  >
                    {isOpen ? <X size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 pl-19 sm:pl-21 text-text-secondary text-sm leading-relaxed">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl bg-linear-to-r from-navy to-navy-light px-6 sm:px-10 py-7 sm:py-8 shadow-xl">
          <div className="text-center sm:text-left">
            <p className="font-extrabold text-white text-lg sm:text-xl mb-1">
              Still have questions?
            </p>
            <p className="text-white/70 text-sm">
              Our team is here to help with anything else you need to know.
            </p>
          </div>
          <a
            href="tel:+919988245009"
            className="inline-flex items-center gap-2.5 bg-orange hover:bg-orange-dark text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-orange/30 transition-colors shrink-0"
          >
            <Phone size={16} strokeWidth={2.25} />
            +91 99882 45009
          </a>
        </div>
      </div>
    </section>
  );
}

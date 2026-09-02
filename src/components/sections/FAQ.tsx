"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

const FAQS = [
  {
    q: "What areas do you provide moving services in?",
    a: "We are headquartered in Chandigarh and operate in 50+ cities across India, including Delhi NCR, Mumbai, Bangalore, Kolkata, Pune, Hyderabad and Chennai, with support for both local and long-distance moves.",
  },
  {
    q: "How far in advance should I book my move?",
    a: "We recommend booking at least 5-7 days in advance for local moves and 2-3 weeks for long-distance or international relocations to secure your preferred date.",
  },
  {
    q: "Do you provide packing materials?",
    a: "Yes, we bring all necessary packing materials — boxes, bubble wrap, tape and protective covers — included in your quote.",
  },
  {
    q: "Is my shipment insured during transit?",
    a: "Every move includes comprehensive transit insurance, covering your belongings against damage or loss from pickup to delivery.",
  },
  {
    q: "Can I track my shipment in real time?",
    a: "Yes, our vehicles are GPS-enabled, so you can track your shipment's location throughout the journey.",
  },
  {
    q: "How is the moving cost calculated?",
    a: "Cost depends on distance, volume of goods, and services chosen. We provide a transparent, itemised quote before your move begins with no hidden charges.",
  },
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQS[0].q);

  return (
    <section className="relative bg-white py-10 sm:py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-25 lg:self-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-orange" />
              <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                FAQs
              </span>
            </div>
            <h2 className="font-extrabold text-navy text-[28px] sm:text-3xl md:text-[38px] leading-tight">
              Frequently Asked <span className="text-orange">Questions</span>
            </h2>
            <p className="mt-4 text-text-secondary text-[15px] leading-relaxed max-w-sm">
              Can&rsquo;t find the answer you&rsquo;re looking for? Reach out
              to our team directly.
            </p>

            <div className="mt-8 flex items-center gap-4 bg-bg-light rounded-2xl border border-border p-5 max-w-sm">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-orange text-white shrink-0">
                <Phone size={18} strokeWidth={2.25} />
              </span>
              <div>
                <p className="font-bold text-navy text-sm">Call us anytime</p>
                <a
                  href="tel:+919988245009"
                  className="text-orange font-extrabold text-base hover:text-orange-dark transition-colors"
                >
                  +91 99882 45009
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-border shadow-xl divide-y divide-border overflow-hidden">
            {FAQS.map(({ q, a }, i) => {
              const isOpen = openQuestion === q;
              return (
                <div key={q} className="group relative">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-orange origin-center transition-transform duration-300 ${
                      isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? null : q)}
                    className="w-full flex items-start gap-4 sm:gap-5 px-6 sm:px-8 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold pt-1.5 shrink-0 transition-colors duration-300 ${
                        isOpen ? "text-orange" : "text-navy/25"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 font-bold text-base sm:text-lg leading-snug transition-colors duration-300 ${
                        isOpen ? "text-orange" : "text-navy"
                      }`}
                    >
                      {q}
                    </span>
                    <span
                      className={`shrink-0 text-2xl sm:text-3xl leading-none font-light transition-all duration-300 ${
                        isOpen ? "rotate-45 text-orange" : "text-navy/30"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 sm:px-8 pb-6 pl-[44px] sm:pl-[52px] text-text-secondary text-sm sm:text-[15px] leading-relaxed">
                        {a}
                      </p>
                    </div>
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

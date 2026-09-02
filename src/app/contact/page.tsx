import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import Cities from "@/components/sections/Cities";

export const metadata: Metadata = {
  title: "Contact Us | Agarwal Logistics Packers",
  description:
    "Get in touch with Agarwal Logistics Packers. Call or fill out our form for a free moving quote within 30 minutes.",
};

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99882 45009",
    sub: "Mon – Sun, 8 AM – 8 PM",
    href: "tel:+919988245009",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@agarwallogisticspackers.com",
    sub: "We reply within a few hours",
    href: "mailto:info@agarwallogisticspackers.com",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Plot No. 15, Transport Area",
    sub: "Sector 26, Chandigarh 160019",
    href: "#map",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat: 8 AM – 8 PM",
    sub: "Sunday: 9 AM – 5 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Response Within 30 Minutes"
        heading="Let's Plan"
        highlight="Your Move."
        description="Fill in the form or call us — our team will get back to you within 30 minutes with a personalised quote."
      />

      {/* Contact info cards */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex flex-col h-full px-6 py-7 rounded-2xl bg-bg-light border border-border hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 text-orange mb-5">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <div className="text-orange text-xs font-extrabold uppercase tracking-widest mb-2">
                    {item.label}
                  </div>
                  <div className="font-bold text-navy text-sm mb-1">{item.value}</div>
                  <div className="text-text-secondary text-xs">{item.sub}</div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href}>
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="py-10 sm:py-16 md:py-20 bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-orange" />
                <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                  Get a Free Quote
                </span>
              </div>
              <h2 className="font-extrabold text-navy text-2xl sm:text-3xl mb-7">
                Tell Us About Your Move
              </h2>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-xs font-bold uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-navy bg-white border border-border focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-xs font-bold uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-navy bg-white border border-border focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy text-xs font-bold uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-navy bg-white border border-border focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-xs font-bold uppercase tracking-wider mb-2">
                      Moving From *
                    </label>
                    <input
                      type="text"
                      placeholder="City / Pincode"
                      required
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-navy bg-white border border-border focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-xs font-bold uppercase tracking-wider mb-2">
                      Moving To *
                    </label>
                    <input
                      type="text"
                      placeholder="City / Pincode"
                      required
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-navy bg-white border border-border focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-xs font-bold uppercase tracking-wider mb-2">
                      Home Size
                    </label>
                    <select className="w-full px-4 py-3.5 rounded-xl text-sm text-navy bg-white border border-border focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange">
                      <option value="">Select size</option>
                      <option>1 BHK</option>
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                      <option>4 BHK+</option>
                      <option>Office / Commercial</option>
                      <option>Vehicle Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-navy text-xs font-bold uppercase tracking-wider mb-2">
                      Preferred Move Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-navy bg-white border border-border focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy text-xs font-bold uppercase tracking-wider mb-2">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Anything special about your move? (Piano, antiques, multiple stops, storage needed...)"
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-navy bg-white border border-border focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center">
                  Send Quote Request <ArrowRight size={16} strokeWidth={2.5} />
                </Button>

                <p className="text-text-secondary text-xs text-center">
                  We respond within 30 minutes during business hours. No spam, ever.
                </p>
              </form>
            </div>

            {/* Map + info */}
            <div className="space-y-6">
              <div
                id="map"
                className="rounded-2xl overflow-hidden border border-border h-[380px]"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Sector%2026%2C%20Chandigarh%20160019&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Agarwal Logistics Packers Head Office Location"
                />
              </div>

              <a
                href="tel:+919988245009"
                className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-navy hover:bg-navy-light transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange/15 text-orange shrink-0">
                  <Phone size={22} strokeWidth={2} />
                </span>
                <div>
                  <div className="font-bold text-white text-sm">Prefer to call?</div>
                  <div className="text-white/60 text-xs mt-0.5">
                    Speak to our relocation experts directly
                  </div>
                </div>
                <ArrowRight size={18} className="ml-auto text-white/60" strokeWidth={2.5} />
              </a>

              <div className="px-6 py-5 rounded-2xl bg-orange/5 border border-orange/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { val: "< 30 min", label: "Quote time" },
                    { val: "10+ yrs", label: "Experience" },
                    { val: "50+", label: "Cities" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-extrabold text-navy text-lg">{s.val}</div>
                      <div className="text-text-secondary text-[10px] font-bold uppercase tracking-wider mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cities />
    </>
  );
}

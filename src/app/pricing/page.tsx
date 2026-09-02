import type { Metadata } from "next";
import { FileCheck2, Radar, ShieldCheck, Headset } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Pricing | Agarwal Logistics Packers",
  description:
    "Transparent moving charges for home shifting, vehicle transport and warehouse storage across India. No hidden fees — get an exact quote in 30 minutes.",
};

const HOME_PRICING = [
  { distance: "Up to 50 km", bhk1: "₹4,000 – ₹8,000", bhk2: "₹7,000 – ₹12,000", bhk3: "₹10,000 – ₹16,000", bhk4: "₹14,000 – ₹20,000" },
  { distance: "50 – 300 km", bhk1: "₹8,000 – ₹15,000", bhk2: "₹12,000 – ₹20,000", bhk3: "₹16,000 – ₹28,000", bhk4: "₹22,000 – ₹38,000" },
  { distance: "300 – 700 km", bhk1: "₹12,000 – ₹20,000", bhk2: "₹18,000 – ₹30,000", bhk3: "₹22,000 – ₹38,000", bhk4: "₹32,000 – ₹52,000" },
  { distance: "700 – 1200 km", bhk1: "₹18,000 – ₹28,000", bhk2: "₹25,000 – ₹40,000", bhk3: "₹32,000 – ₹48,000", bhk4: "₹42,000 – ₹62,000" },
  { distance: "1200 km+", bhk1: "₹25,000 – ₹40,000", bhk2: "₹35,000 – ₹55,000", bhk3: "₹45,000 – ₹65,000", bhk4: "₹60,000 – ₹85,000" },
];

const VEHICLE_PRICING = [
  { route: "Up to 500 km", bike: "₹3,000 – ₹5,000", sedan: "₹6,000 – ₹10,000", suv: "₹8,000 – ₹13,000" },
  { route: "500 – 1200 km", bike: "₹5,000 – ₹8,000", sedan: "₹10,000 – ₹18,000", suv: "₹13,000 – ₹22,000" },
  { route: "1200 km+", bike: "₹8,000 – ₹12,000", sedan: "₹18,000 – ₹28,000", suv: "₹22,000 – ₹35,000" },
];

const STORAGE_PRICING = [
  { duration: "1 – 3 Months", rate: "₹1,500 – ₹2,500", note: "Per 100 sq ft / month" },
  { duration: "3 – 6 Months", rate: "₹1,200 – ₹2,000", note: "Per 100 sq ft / month" },
  { duration: "6 – 12 Months", rate: "₹1,000 – ₹1,800", note: "Per 100 sq ft / month" },
  { duration: "12+ Months", rate: "₹800 – ₹1,500", note: "Per 100 sq ft / month" },
];

const ADDONS = [
  { label: "Premium Packing (Full Home)", value: "₹2,500 – ₹12,000" },
  { label: "Unpacking Service", value: "₹1,500 – ₹6,000" },
  { label: "Furniture Disassembly & Assembly", value: "₹1,000 – ₹4,000" },
  { label: "Transit Insurance", value: "1.5% of declared value" },
  { label: "Piano / Antique Handling", value: "On request" },
  { label: "Air Cargo (urgent moves)", value: "On request" },
];

const INCLUDES = [
  { icon: FileCheck2, title: "GST Invoice", sub: "Full tax-compliant documentation" },
  { icon: ShieldCheck, title: "Transit Insurance", sub: "Optional but always available" },
  { icon: Radar, title: "GPS Tracking", sub: "Real-time vehicle updates" },
  { icon: Headset, title: "Dedicated Support", sub: "Single point of contact throughout" },
];

function PriceTable({
  head,
  rows,
}: {
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border shadow-lg">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy text-white">
            {head.map((h, i) => (
              <th
                key={h}
                className={`px-5 sm:px-6 py-4 font-bold whitespace-nowrap ${
                  i === 0 ? "text-left" : "text-center"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-t border-border hover:bg-orange/5 transition-colors ${
                ri % 2 === 0 ? "bg-white" : "bg-bg-light"
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 sm:px-6 py-4 whitespace-nowrap ${
                    ci === 0 ? "font-bold text-navy" : "text-center text-text-secondary"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        breadcrumb="Pricing"
        eyebrow="100% Transparent — Zero Hidden Charges"
        heading="Fair Prices."
        highlight="No Surprises."
        description="Our rates are calculated by distance, home size and services. Every quote is itemised — you know exactly what you're paying before we begin."
      />

      {/* Home shifting */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-orange" />
              <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                Home Shifting
              </span>
            </div>
            <h2 className="font-extrabold text-navy text-2xl sm:text-3xl">
              Home Moving Charges
            </h2>
            <p className="text-text-secondary text-sm mt-2 max-w-xl">
              Indicative price ranges based on distance and home size. Actual
              quote may vary based on items and floor access.
            </p>
          </div>
          <PriceTable
            head={["Distance", "1 BHK", "2 BHK", "3 BHK", "4 BHK+"]}
            rows={HOME_PRICING.map((r) => [r.distance, r.bhk1, r.bhk2, r.bhk3, r.bhk4])}
          />
          <p className="text-text-secondary/70 text-xs mt-3">
            * Excludes GST (18%), toll taxes and floor-access charges.
          </p>
        </div>
      </section>

      {/* Vehicle + storage */}
      <section className="py-10 sm:py-16 md:py-20 bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-orange" />
                <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                  Vehicle Transport
                </span>
              </div>
              <h2 className="font-extrabold text-navy text-xl sm:text-2xl mb-6">
                Car &amp; Bike Charges
              </h2>
              <PriceTable
                head={["Route", "Two-Wheeler", "Sedan", "SUV"]}
                rows={VEHICLE_PRICING.map((r) => [r.route, r.bike, r.sedan, r.suv])}
              />
              <p className="text-text-secondary/70 text-xs mt-3">
                * Enclosed carrier. Open carrier rates ~20% lower.
              </p>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-orange" />
                <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                  Warehouse Storage
                </span>
              </div>
              <h2 className="font-extrabold text-navy text-xl sm:text-2xl mb-6">
                Storage Rates
              </h2>
              <div className="space-y-3">
                {STORAGE_PRICING.map((item) => (
                  <div
                    key={item.duration}
                    className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white border border-border"
                  >
                    <div>
                      <div className="font-bold text-navy text-sm">{item.duration}</div>
                      <div className="text-text-secondary/70 text-xs mt-0.5">{item.note}</div>
                    </div>
                    <div className="font-extrabold text-orange text-base">{item.rate}</div>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary/70 text-xs mt-3">
                * Climate-controlled units available at a premium. Min 30-day booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-orange" />
              <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                Optional Add-Ons
              </span>
            </div>
            <h2 className="font-extrabold text-navy text-2xl sm:text-3xl">
              Additional Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDONS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-bg-light border border-border"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                  <span className="text-sm font-semibold text-navy/80">{item.label}</span>
                </div>
                <span className="text-navy text-sm font-extrabold whitespace-nowrap">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every move includes */}
      <section className="py-10 sm:py-14 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-extrabold text-white text-2xl sm:text-3xl mb-10">
            Every Move Includes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDES.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange/15 text-orange shrink-0">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div>
                  <p className="font-bold text-white text-sm">{title}</p>
                  <p className="text-white/50 text-[11px] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />

      <FAQ />
    </>
  );
}

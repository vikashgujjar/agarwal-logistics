import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const HIGHLIGHTS = [
  "10+ years of industry experience",
  "25K+ residential moves completed",
  "70K+ corporate relocations handled",
  "Pan-India network across 50+ cities",
  "Professional packing and handling",
  "24/7 support with real-time tracking",
];

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
        <div className="rounded-[1.75rem] bg-white border border-border shadow-xl shadow-navy/[0.06] p-6 sm:p-10 md:p-14">
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            heading="Why Choose"
            highlight="Agarwal Logistics Packers?"
          />

          <p className="mt-5 text-text-secondary text-sm sm:text-[15px] leading-relaxed max-w-3xl">
            Choosing a reliable packers and movers company isn&rsquo;t only
            about finding the lowest quotation. The experience, planning and
            understanding of how much responsibility comes with this kind of
            work matter just as much.
          </p>

          <h3 className="mt-8 sm:mt-10 font-extrabold text-navy text-lg sm:text-xl">
            With Agarwal Logistics Packers, you will receive:
          </h3>

          <div className="mt-5 sm:mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange text-white shrink-0">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-navy text-sm sm:text-[15px] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 sm:mt-10 text-text-secondary text-sm sm:text-[15px] leading-relaxed max-w-3xl">
            We value clear communication. Before your move, our team
            discusses your requirements &mdash; packing needs, transport
            logistics and any other factors that may influence your
            quotation &mdash; so there are no surprises on moving day.
          </p>
        </div>
      </div>
    </section>
  );
}

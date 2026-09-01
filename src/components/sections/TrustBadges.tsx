import { Medal, Star, Award, ShieldCheck, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

type Tone = "orange" | "navy";

const BADGES: { icon: LucideIcon; title: string; desc: string; tone: Tone }[] = [
  {
    icon: Medal,
    title: "ISO 9001:2015",
    desc: "Certificate No. 2713SAFV2021, for Courier Services, Packers & Movers, Transportation and Storage of Goods.",
    tone: "orange",
  },
  {
    icon: Star,
    title: "5 Star Ratings",
    desc: "We have been rated 5 stars by our valuable clients in multiple platforms like Google, Facebook etc.",
    tone: "orange",
  },
  {
    icon: Award,
    title: "Govt. Approved & Verified",
    desc: "Licensed, government registered, and verified packers and movers operating with complete legal compliance across India.",
    tone: "navy",
  },
  {
    icon: ShieldCheck,
    title: "100% Safe & Secure",
    desc: "We guarantee 100% safe, reliable and damage-free packing and transportation for all your household and vehicle relocations.",
    tone: "navy",
  },
];

const TONE_CLASSES: Record<Tone, string> = {
  orange: "bg-gradient-to-br from-orange to-orange-dark",
  navy: "bg-gradient-to-br from-navy to-navy-light",
};

export default function TrustBadges() {
  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -left-4 top-6 w-40 h-40 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-navy) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -right-10 bottom-4 w-56 h-56 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-navy) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Badges"
          heading="Trusted & Certified For Your"
          highlight="Peace of Mind"
          description="We are committed to providing reliable and quality moving services backed by certifications, ratings and years of experience."
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-x-0 lg:divide-x divide-border">
          {BADGES.map(({ icon: Icon, title, desc, tone }) => (
            <div key={title} className="text-center px-3 sm:px-5 lg:px-6">
              <span
                className={`relative mx-auto mb-5 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg ${TONE_CLASSES[tone]}`}
              >
                <span className="absolute inset-1.5 rounded-full border-2 border-white/30" />
                <Icon
                  size={34}
                  strokeWidth={1.5}
                  className="relative text-white drop-shadow-sm"
                />
              </span>
              <h3 className="font-extrabold text-navy text-sm sm:text-base leading-snug">
                {title}
              </h3>
              <span className="mx-auto mt-2 mb-3 block h-[2px] w-8 bg-orange" />
              <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed max-w-[220px] mx-auto">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

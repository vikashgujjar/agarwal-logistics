import Image from "next/image";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  breadcrumb: string;
  eyebrow: string;
  heading: string;
  highlight: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  compact?: boolean;
};

export default function PageHero({
  breadcrumb,
  eyebrow,
  heading,
  highlight,
  description,
  image,
  imageAlt = "",
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative bg-navy overflow-hidden ${
        compact ? "py-10 sm:py-16 md:py-20" : "py-12 sm:py-20 md:py-28"
      }`}
    >
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          quality={45}
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/92 to-navy/70" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -top-20 -right-20 w-96 h-96 bg-orange/15 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 sm:gap-2 text-white/40 text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <ChevronRight size={11} strokeWidth={2.5} className="shrink-0" />
          <span className="text-orange truncate">{breadcrumb}</span>
        </div>

        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-orange/15 border border-orange/35 text-orange text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
            </span>
            {eyebrow}
          </span>

          <h1 className="font-extrabold text-white leading-[1.15] sm:leading-[1.05] tracking-tight mb-3 sm:mb-4 text-2xl sm:text-4xl md:text-5xl">
            {heading} <span className="text-orange">{highlight}</span>
          </h1>

          {description && (
            <p className="text-white/70 text-xs sm:text-base leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CircleCheck,
  ClipboardList,
  ListChecks,
  Phone,
  ShieldCheck,
  Star,
  Users2,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { SERVICES_DATA, getServiceBySlug } from "@/lib/services-data";

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Agarwal Logistics Packers`,
    description: service.short,
  };
}

const STATS_ICONS = [Users2, Star, ShieldCheck, CircleCheck];

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 3);
  const statsBar = [
    { icon: Users2, value: "25K+", label: "Families Shifted" },
    { icon: Star, value: "10+", label: "Years Experience" },
    { icon: ShieldCheck, value: "4.9", label: "Customer Rating" },
    { icon: CircleCheck, value: "99%", label: "Safe Delivery" },
  ];

  return (
    <>
      <PageHero
        breadcrumb={service.title}
        eyebrow={service.tag}
        heading={service.title}
        highlight=""
        description={service.tagline}
        image={service.image}
        imageAlt={service.title}
      />

      {/* Stats bar */}
      <section className="py-5 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
            {statsBar.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 py-3 px-4 rounded-xl bg-bg-light border border-border"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange/10 text-orange shrink-0">
                  <stat.icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <p className="font-extrabold text-navy text-xl leading-none">
                    {stat.value}
                  </p>
                  <p className="text-text-secondary text-xs font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[2px] w-6 bg-orange" />
                  <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                    Professional Relocation
                  </span>
                </div>
                <h2 className="font-extrabold text-navy text-2xl sm:text-3xl leading-tight mb-4">
                  {service.title} <span className="text-orange">Services in India.</span>
                </h2>
                <div className="text-text-secondary text-[15px] leading-relaxed space-y-4">
                  {service.description.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {service.highlights.length > 0 && (
                <div>
                  <h3 className="font-extrabold text-navy text-lg mb-4">
                    Why Choose Us for {service.title}?
                  </h3>
                  <ul className="space-y-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-navy text-[15px]">
                        <Check size={18} className="text-orange shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="leading-relaxed text-text-secondary">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Includes checklist */}
              <div className="rounded-2xl bg-bg-light border border-border p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange/10 text-orange shrink-0">
                    <ListChecks size={18} strokeWidth={2} />
                  </span>
                  <h3 className="font-extrabold text-navy text-base">Everything Included</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {service.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CircleCheck size={16} className="text-orange shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </div>
                  ))}
                </div>
                <Button href="/#quote" variant="primary" className="w-full mt-7 justify-center">
                  Get a Free Quote for This Service <ArrowRight size={16} strokeWidth={2.5} />
                </Button>
              </div>

              <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-orange/5 border border-orange/20">
                <ClipboardList size={18} className="text-orange shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-sm text-navy/80 leading-relaxed">{service.pricingNote}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-5 lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden border border-border">
                <div className="px-5 py-4 bg-navy">
                  <h3 className="font-extrabold text-white text-sm uppercase tracking-widest">
                    All Services
                  </h3>
                </div>
                <div>
                  {SERVICES_DATA.map((s) => (
                    <a
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`flex items-center justify-between px-5 py-3.5 text-sm font-semibold border-b border-border last:border-b-0 transition-colors ${
                        s.slug === slug ? "bg-orange/5 text-orange" : "bg-white text-navy hover:bg-bg-light"
                      }`}
                    >
                      {s.title}
                      <ArrowRight size={14} className={s.slug === slug ? "text-orange" : "text-navy/30"} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border">
                <div className="px-5 py-4 bg-navy">
                  <h3 className="font-extrabold text-white text-sm uppercase tracking-widest">
                    Talk to Experts
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Need a custom shifting plan? Our experts are here to help you today.
                  </p>
                  <a
                    href="tel:+919988245009"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm bg-orange text-white hover:bg-orange-dark transition-colors"
                  >
                    <Phone size={16} strokeWidth={2.5} /> +91 99882 45009
                  </a>
                </div>
              </div>

              <div className="rounded-2xl p-5 bg-navy">
                <p className="text-white font-bold text-sm mb-1">Ready for a stress-free move?</p>
                <p className="text-white/55 text-xs mb-4">Get a free quote in 30 minutes.</p>
                <Button href="/#quote" variant="primary" className="w-full justify-center">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 sm:py-16 md:py-20 bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-orange" />
              <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                Why Choose This Service
              </span>
              <span className="h-[2px] w-6 bg-orange" />
            </div>
            <h2 className="font-extrabold text-navy text-2xl sm:text-3xl leading-tight">
              Six Reasons to <span className="text-orange">Trust Us.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((f, i) => (
              <div
                key={f.title}
                className="group bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 text-orange mb-5 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={22} strokeWidth={2} />
                </span>
                <div className="text-orange text-[10px] font-extrabold uppercase tracking-[0.18em] mb-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-navy text-sm mb-2">{f.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 sm:py-16 md:py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-orange" />
              <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                How It Works
              </span>
              <span className="h-[2px] w-6 bg-orange" />
            </div>
            <h2 className="font-extrabold text-white text-2xl sm:text-3xl leading-tight">
              Five Steps to a <span className="text-orange">Stress-Free Move.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:-translate-y-1 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-orange text-[11px] font-extrabold uppercase tracking-[0.2em] mb-3">
                  Step {step.step}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-orange" />
              <span className="text-orange font-bold text-xs tracking-[0.15em] uppercase">
                FAQs
              </span>
              <span className="h-[2px] w-6 bg-orange" />
            </div>
            <h2 className="font-extrabold text-navy text-2xl sm:text-3xl leading-tight">
              Common Questions <span className="text-orange">Answered.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-sm text-navy">
                  <span>{faq.q}</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange/10 text-orange shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <ArrowRight size={14} className="rotate-90" strokeWidth={2.5} />
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <div className="h-px bg-border mb-4" />
                  <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      {/* Other services */}
      <section className="py-10 sm:py-16 bg-bg-light border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-extrabold text-navy text-xl">Other Services</h3>
            <a
              href="/services"
              className="text-orange text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              View All <ArrowRight size={13} strokeWidth={2.5} />
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((other) => (
              <a
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group relative overflow-hidden rounded-2xl h-[180px]"
              >
                <Image
                  src={other.image}
                  alt={other.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-orange text-white mb-1.5">
                    {other.tag}
                  </span>
                  <p className="font-bold text-white text-sm">{other.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

import type { Metadata } from "next";
import { ChevronRight, FileStack, Home, Newspaper, Package, ScrollText } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sitemap | Agarwal Logistics Packers",
  description:
    "Full sitemap of Agarwal Logistics Packers — find every page on our website quickly.",
};

const SITEMAP = [
  {
    category: "Main Pages",
    icon: Home,
    links: [
      { label: "Home", href: "/", desc: "Welcome page — hero, services overview, testimonials & more" },
      { label: "About Us", href: "/about", desc: "Our story, mission and 10+ years of moving expertise" },
      { label: "Services", href: "/services", desc: "Overview of all six relocation services we offer" },
      { label: "Pricing", href: "/pricing", desc: "Transparent moving charges for home, vehicle & storage services" },
      { label: "Blog", href: "/blog", desc: "Expert moving tips, guides and cost breakdowns" },
      { label: "Contact Us", href: "/contact", desc: "Reach our team — form, map & branch offices" },
    ],
  },
  {
    category: "Our Services",
    icon: Package,
    links: [
      { label: "Domestic Shifting", href: "/services/domestic-shifting", desc: "Complete home relocation across India" },
      { label: "Corporate Relocation", href: "/services/corporate-relocation", desc: "Office moves with zero business downtime" },
      { label: "Car & Bike Transport", href: "/services/car-bike-transport", desc: "Door-to-door vehicle shipping in enclosed carriers" },
      { label: "Local Shifting", href: "/services/local-shifting", desc: "Fast within-city moves — same-day service available" },
      { label: "Packing & Unpacking", href: "/services/packing-unpacking", desc: "Expert packing using premium materials" },
      { label: "Warehouse Storage", href: "/services/warehouse-storage", desc: "Secure, climate-controlled storage solutions" },
    ],
  },
  {
    category: "Blog & Guides",
    icon: Newspaper,
    links: [
      { label: "Ultimate Packing Guide", href: "/blog/ultimate-packing-guide-home-shifting", desc: "Room-by-room packing strategy with checklist" },
      { label: "How to Choose Packers & Movers", href: "/blog/how-to-choose-best-packers-movers", desc: "Red flags and key questions to ask before hiring" },
      { label: "India Moving Cost Guide", href: "/blog/moving-cost-guide-india", desc: "Complete cost breakdown for interstate moves" },
      { label: "Office Relocation Checklist", href: "/blog/office-relocation-checklist-business", desc: "Corporate move playbook for zero downtime" },
      { label: "Car & Bike Transport Guide", href: "/blog/vehicle-transport-india-guide", desc: "Safety guide, documents needed, and cost table" },
      { label: "Warehouse Storage Guide", href: "/blog/warehouse-storage-guide-india", desc: "When to use storage and what to look for" },
    ],
  },
  {
    category: "Legal & Info",
    icon: ScrollText,
    links: [
      { label: "Privacy Policy", href: "/privacy-policy", desc: "How we collect, use and protect your personal data" },
      { label: "Terms of Service", href: "/terms-of-service", desc: "Your rights and obligations when using our services" },
      { label: "Sitemap", href: "/sitemap", desc: "Full directory of all pages on our website" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        breadcrumb="Sitemap"
        eyebrow="Site Directory"
        heading="Site"
        highlight="Map"
        description="A complete directory of every page on our website — find what you need quickly."
        compact
      />

      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {SITEMAP.map((group) => (
              <div key={group.category} className="rounded-3xl overflow-hidden border border-border">
                <div className="flex items-center gap-3 px-6 py-5 bg-navy">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange/15 text-orange shrink-0">
                    <group.icon size={16} strokeWidth={2} />
                  </span>
                  <h2 className="font-extrabold text-white text-sm uppercase tracking-wider">
                    {group.category}
                  </h2>
                </div>
                <div className="divide-y divide-border">
                  {group.links.map((link, i) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`group flex items-start gap-4 px-6 py-4 hover:bg-bg-light transition-colors duration-150 ${
                        i % 2 === 0 ? "bg-white" : "bg-bg-light/40"
                      }`}
                    >
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange/10 text-orange shrink-0 mt-0.5 group-hover:bg-orange group-hover:text-white transition-colors">
                        <ChevronRight size={14} strokeWidth={2.5} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-navy text-sm mb-0.5 group-hover:text-orange transition-colors">
                          {link.label}
                        </div>
                        <div className="text-text-secondary/70 text-xs leading-relaxed">
                          {link.desc}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-6 rounded-2xl bg-orange/5 border border-orange/20">
            <div>
              <p className="font-bold text-navy text-sm flex items-center gap-2">
                <FileStack size={16} className="text-orange" strokeWidth={2} />
                Can&apos;t find what you&apos;re looking for?
              </p>
              <p className="text-text-secondary text-xs mt-0.5">
                Our team is happy to help — get in touch directly.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/contact" variant="secondary">Contact Us</Button>
              <Button href="/#quote" variant="primary">Get Free Quote</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp, Truck } from "lucide-react";
import Logo from "@/components/ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Home Relocation", href: "/services/domestic-shifting" },
  { label: "Office Relocation", href: "/services/corporate-relocation" },
  { label: "Car & Bike Transport", href: "/services/car-bike-transport" },
  { label: "Local Shifting", href: "/services/local-shifting" },
  { label: "Packing & Unpacking", href: "/services/packing-unpacking" },
  { label: "Warehousing & Storage", href: "/services/warehouse-storage" },
];

const LOCATION_LINKS = [
  { label: "Chandigarh", href: "/locations/chandigarh" },
  { label: "Mohali", href: "/locations/mohali" },
  { label: "Panchkula", href: "/locations/panchkula" },
  { label: "Zirkpur", href: "/locations/zirkpur" },
];

const CITIES = [
  "Chandigarh",
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Pune",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Jaipur",
  "Lucknow",
  "Surat",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Coimbatore",
  "Kochi",
  "Visakhapatnam",
  "Noida",
  "Gurugram",
];

const SOCIALS = [
  { icon: FacebookIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: YoutubeIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="grid lg:grid-cols-[0.85fr_1.4fr]">
        {/* LEFT: navy brand panel */}
        <div className="relative bg-navy text-white/80 overflow-hidden px-5 sm:px-10 lg:px-12 py-10 sm:py-14">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute -top-20 -left-16 w-72 h-72 bg-orange/10 rounded-full blur-3xl"
          />
          <Truck
            aria-hidden="true"
            size={200}
            strokeWidth={0.6}
            className="hidden lg:block absolute -right-6 bottom-6 text-white/[0.04] pointer-events-none"
          />

          <div className="relative">
            <Logo size="sm" variant="dark" />
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              Safe, insured and reliable packing &amp; moving services across
              India for homes, offices and vehicles.
            </p>

            <div className="flex gap-3 mt-5 mb-9">
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-orange hover:border-orange transition-colors duration-300"
                  aria-label="Social link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <div className="relative rounded-2xl bg-gradient-to-br from-orange to-orange-dark p-5 shadow-2xl shadow-orange/25 max-w-sm">
              <span className="absolute -top-3 right-4 flex items-center gap-1.5 bg-navy text-white text-[9px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-lg">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                24/7 Available
              </span>

              <h3 className="text-white font-extrabold text-sm uppercase tracking-wide mb-4 pt-1">
                Contact Us
              </h3>

              <div className="flex flex-col gap-3.5">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white shrink-0">
                    <MapPin size={14} strokeWidth={2} />
                  </span>
                  <span className="text-white/90 text-sm pt-1.5">
                    Plot No. 15, Transport Area, Sector 26, Chandigarh 160019
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white shrink-0">
                    <Phone size={14} strokeWidth={2} />
                  </span>
                  <a
                    href="tel:+919988245009"
                    className="text-white font-bold text-sm hover:text-navy transition-colors"
                  >
                    +91 99882 45009
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white shrink-0">
                    <Mail size={14} strokeWidth={2} />
                  </span>
                  <a
                    href="mailto:info@agarwallogisticspackers.com"
                    className="text-white text-sm break-all hover:text-navy transition-colors"
                  >
                    info@agarwallogisticspackers.com
                  </a>
                </div>
              </div>

              <a
                href="tel:+919988245009"
                className="mt-5 flex items-center justify-center gap-2 w-full rounded-full bg-white text-orange font-bold text-sm py-2.5 hover:bg-navy hover:text-white transition-colors duration-300"
              >
                <Phone size={14} strokeWidth={2.5} /> Call Now
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: light nav panel */}
        <div className="relative bg-bg-light overflow-hidden px-5 sm:px-10 lg:px-12 py-10 sm:py-14">
          <Image
            src="/hero/city.jpg"
            alt=""
            fill
            quality={45}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-bg-light/93" />
          <div
            aria-hidden="true"
            className="hidden lg:block absolute -right-10 top-10 w-56 h-56 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-navy) 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
          />

          <div className="relative">
            <div className="pb-8 mb-8 border-b border-border">
              <p className="text-navy font-extrabold text-lg">
                Stay Updated With Our <span className="text-orange">Latest Offers</span>
              </p>
              <p className="text-text-secondary text-sm mt-1 mb-4">
                Subscribe for moving tips, offers and updates. No spam, ever.
              </p>
              <div className="flex gap-2 max-w-md">
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
                    <Mail size={15} />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-full bg-white border border-border pl-11 pr-4 py-3 text-sm text-navy placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange"
                  />
                </div>
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-orange text-white font-bold text-sm px-5 py-3 hover:bg-orange-dark transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h3 className="text-navy font-bold text-sm uppercase tracking-wide mb-5">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-3">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-text-secondary text-sm hover:text-orange transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-navy font-bold text-sm uppercase tracking-wide mb-5">
                  Our Services
                </h3>
                <ul className="flex flex-col gap-3">
                  {SERVICE_LINKS.map((service) => (
                    <li key={service.href}>
                      <a
                        href={service.href}
                        className="text-text-secondary text-sm hover:text-orange transition-colors"
                      >
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex items-center gap-2 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange/10 text-orange">
                  <MapPin size={14} strokeWidth={2} />
                </span>
                <h3 className="text-navy font-bold text-sm uppercase tracking-wide">
                  Cities We Serve
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {CITIES.map((city) => (
                  <a
                    key={city}
                    href="/#cities"
                    className="text-xs font-medium text-text-secondary bg-white border border-border rounded-full px-3.5 py-1.5 hover:bg-orange hover:text-white hover:border-orange transition-colors duration-200"
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-navy font-bold text-sm uppercase tracking-wide mb-4">
                Tricity Locations
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {LOCATION_LINKS.map((loc) => (
                  <a
                    key={loc.href}
                    href={loc.href}
                    className="text-xs font-medium text-orange bg-orange/5 border border-orange/20 rounded-full px-3.5 py-1.5 hover:bg-orange hover:text-white hover:border-orange transition-colors duration-200"
                  >
                    Packers &amp; Movers in {loc.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-navy border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} Agarwal Logistics Packers. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="/privacy-policy" className="text-white/60 text-xs hover:text-orange transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-white/60 text-xs hover:text-orange transition-colors">
              Terms &amp; Conditions
            </a>
            <a
              href="#"
              aria-label="Back to top"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-orange hover:border-orange hover:text-white transition-colors duration-300"
            >
              <ArrowUp size={15} strokeWidth={2.25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

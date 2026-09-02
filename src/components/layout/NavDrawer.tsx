"use client";

import { useEffect } from "react";
import { X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIALS = [
  { icon: FacebookIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: YoutubeIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
];

type NavDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function NavDrawer({ open, onClose }: NavDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-navy/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="flex items-center justify-between px-5 sm:px-6 h-16 sm:h-20 border-b border-border shrink-0">
          <Logo size="sm" variant="light" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-navy hover:border-orange hover:text-orange transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-4 border-b border-border text-navy font-bold text-lg hover:text-orange transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-orange text-xs font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </span>
                  <ArrowRight
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-6 border-t border-border bg-bg-light shrink-0">
          <div className="flex flex-col gap-3 mb-5">
            <a
              href="tel:+919988245009"
              className="flex items-center gap-3 text-navy font-semibold text-sm"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-orange/10 text-orange shrink-0">
                <Phone size={15} />
              </span>
              +91 99882 45009
            </a>
            <a
              href="mailto:info@agarwallogisticspackers.com"
              className="flex items-center gap-3 text-navy font-semibold text-sm"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-orange/10 text-orange shrink-0">
                <Mail size={15} />
              </span>
              info@agarwallogisticspackers.com
            </a>
            <span className="flex items-center gap-3 text-navy font-semibold text-sm">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-orange/10 text-orange shrink-0">
                <MapPin size={15} />
              </span>
              Chandigarh, India
            </span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            {SOCIALS.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                aria-label="Social link"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-navy text-white hover:bg-orange transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <Button href="/#quote" variant="primary" onClick={onClose} className="w-full">
            Get Free Quote
          </Button>
        </div>
      </aside>
    </>
  );
}

import { ShieldAlert, MapPinned, FileEdit, Headset, UserPlus, Star } from "lucide-react";

const LINKS = [
  { icon: ShieldAlert, label: "Beware of Fraudulent Movers", href: "/#faq" },
  { icon: MapPinned, label: "Branch Locator", href: "/#cities" },
  { icon: FileEdit, label: "Request A Quote", href: "/#quote" },
  { icon: Headset, label: "24/7 Helpline", href: "tel:+919988245009" },
  { icon: UserPlus, label: "Partner With Us", href: "/contact" },
];

export default function UtilityBar() {
  return (
    <div className="hidden lg:block bg-bg-light border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 text-xs">
          <div className="flex items-center divide-x divide-border">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-1.5 px-4 first:pl-0 font-semibold text-navy/70 hover:text-orange transition-colors"
              >
                <Icon size={13} className="text-orange" />
                {label}
              </a>
            ))}
          </div>

          <span className="flex items-center gap-1.5 rounded-full bg-orange/10 text-orange px-3 py-1.5 font-bold">
            <Star size={12} fill="currentColor" strokeWidth={0} />
            10+ Years Trusted Service
          </span>
        </div>
      </div>
    </div>
  );
}

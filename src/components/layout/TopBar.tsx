import { Mail, MapPin, Phone, Radar } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-xs">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@agarwallogisticspackers.com"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <Mail size={13} />
              info@agarwallogisticspackers.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={13} className="text-orange" />
              Head Office: Chandigarh, India
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/#cities"
              className="hidden lg:flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 font-semibold hover:border-orange hover:text-orange transition-colors"
            >
              <MapPin size={13} />
              Find Nearest Branch
            </a>
            <a
              href="tel:+919988245009"
              className="flex items-center gap-1.5 rounded-full bg-orange text-white px-3 py-1.5 font-bold shadow-[0_0_0_3px_rgba(255,120,0,0.18)]"
            >
              <Phone size={13} />
              +91 99882 45009
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

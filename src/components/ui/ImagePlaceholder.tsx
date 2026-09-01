import { LucideIcon } from "lucide-react";

type ImagePlaceholderProps = {
  icon: LucideIcon;
  label?: string;
  className?: string;
  tone?: "navy" | "light";
};

export default function ImagePlaceholder({
  icon: Icon,
  label,
  className = "",
  tone = "navy",
}: ImagePlaceholderProps) {
  const isNavy = tone === "navy";
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden ${
        isNavy
          ? "bg-gradient-to-br from-navy to-navy-light"
          : "bg-gradient-to-br from-bg-light to-white border border-border"
      } ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <span
        className={`relative flex items-center justify-center rounded-full ${
          isNavy ? "bg-white/10" : "bg-orange/10"
        } p-5`}
      >
        <Icon
          size={32}
          strokeWidth={1.75}
          className={isNavy ? "text-white/90" : "text-orange"}
        />
      </span>
      {label && (
        <span
          className={`relative text-xs font-semibold tracking-wide uppercase ${
            isNavy ? "text-white/70" : "text-text-secondary"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

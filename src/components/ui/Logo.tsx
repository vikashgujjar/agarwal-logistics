import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  sm: "h-7 sm:h-9",
  md: "h-9 sm:h-12 md:h-16",
  lg: "h-10 sm:h-14 md:h-16",
};

// Logo never renders taller than 64px (h-16) in CSS, so the intrinsic size
// passed to next/image only needs to cover that at up to 3x DPR — not the
// full 2172x724 source resolution, which forces a far larger optimized
// image than anything actually rendered.
const INTRINSIC_WIDTH = 240;
const INTRINSIC_HEIGHT = 80;

export default function Logo({
  size = "md",
  variant = "light",
  className = "",
  priority = false,
}: LogoProps) {
  const img = (
    <Image
      src="/logo.png"
      alt="Agarwal Logistics Packers"
      width={INTRINSIC_WIDTH}
      height={INTRINSIC_HEIGHT}
      priority={priority}
      className={`${sizeClasses[size]} w-auto object-contain`}
    />
  );

  if (variant === "dark") {
    return (
      <span
        className={`inline-flex items-center bg-white rounded-lg px-3 py-2 ${className}`}
      >
        {img}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{img}</span>;
}

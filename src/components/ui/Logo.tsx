import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
};

const sizeClasses = {
  sm: "h-9",
  md: "h-16",
  lg: "h-16",
};

export default function Logo({
  size = "md",
  variant = "light",
  className = "",
}: LogoProps) {
  const img = (
    <Image
      src="/logo.png"
      alt="Agarwal Logistics Packers"
      width={2172}
      height={724}
      priority
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

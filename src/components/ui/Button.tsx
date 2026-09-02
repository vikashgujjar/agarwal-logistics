import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 font-bold text-sm rounded-[9px] px-5 py-3 sm:px-6 sm:py-3.5 transition-all duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-dark shadow-sm hover:shadow-md",
  secondary: "bg-navy text-white hover:bg-navy-light shadow-sm hover:shadow-md",
  outline:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  "outline-light":
    "border-2 border-white text-white hover:bg-white hover:text-navy",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonAsButton | ButtonAsAnchor) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

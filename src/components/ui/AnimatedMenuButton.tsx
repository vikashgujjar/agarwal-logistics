type Props = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

export default function AnimatedMenuButton({ open, onClick, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={`flex items-center justify-center w-12 h-12 rounded-xl border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors shrink-0 ${className}`}
    >
      <span className="relative w-5 h-[14px] flex flex-col justify-between">
        <span
          className={`block h-0.5 w-full bg-current rounded-full transition-transform duration-300 origin-center ${
            open ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-current rounded-full transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-current rounded-full transition-transform duration-300 origin-center ${
            open ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}

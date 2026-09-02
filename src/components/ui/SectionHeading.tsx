type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  highlight: string;
  headingFirst?: boolean;
  align?: "left" | "center";
  light?: boolean;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  highlight,
  headingFirst = false,
  align = "center",
  light = false,
  description,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-2 mb-3 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-[2px] w-6 bg-orange" />
        <span className="text-orange font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
          {eyebrow}
        </span>
        <span className="h-[2px] w-6 bg-orange" />
      </div>
      <h2
        className={`font-extrabold text-navy ${
          light ? "text-white" : "text-navy"
        } text-2xl sm:text-3xl md:text-[40px] leading-tight`}
      >
        {headingFirst ? (
          <>
            <span className="text-orange">{highlight}</span> {heading}
          </>
        ) : (
          <>
            {heading} <span className="text-orange">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } text-[15px] leading-relaxed ${
            light ? "text-white/70" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

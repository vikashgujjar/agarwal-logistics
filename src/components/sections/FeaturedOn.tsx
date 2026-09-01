const PRESS = [
  "The Daily Herald",
  "Metro Business Times",
  "City Tribune",
  "The Weekly Post",
  "Nationwide News",
];

export default function FeaturedOn() {
  return (
    <section className="bg-white py-14 md:py-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-text-secondary text-xs font-bold uppercase tracking-[0.15em] mb-8">
          Featured On
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {PRESS.map((name) => (
            <span
              key={name}
              className="text-navy/40 font-extrabold text-lg sm:text-xl tracking-tight hover:text-navy transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

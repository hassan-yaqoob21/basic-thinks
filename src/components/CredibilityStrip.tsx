import { credibilityItems } from "@/data/company";

export function CredibilityStrip() {
  const items = [...credibilityItems, ...credibilityItems];

  return (
    <div
      className="marquee-wrap relative overflow-hidden border-y border-line bg-surface py-5"
      aria-label="What Basic Thinks builds"
    >
      <div className="flex w-max animate-marquee items-center gap-10 pr-10 sm:gap-14 sm:pr-14">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex shrink-0 items-center gap-10 sm:gap-14">
            <span className="flex items-center gap-4 text-sm font-semibold tracking-[0.25em] whitespace-nowrap text-ink/80">
              <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
              {item}
            </span>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

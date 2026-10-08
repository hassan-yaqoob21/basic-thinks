import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

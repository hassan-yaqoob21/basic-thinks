"use client";

import { ArrowUpRight } from "lucide-react";
import { webProjects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

function BrowserMock({
  project,
  reversed,
}: {
  project: (typeof webProjects)[number];
  reversed: boolean;
}) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-3xl border border-line bg-card transition-all duration-300 hover:border-accent/35 hover:shadow-[0_32px_80px_-36px_rgba(255,43,43,0.35)]",
        reversed && "lg:order-2",
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-elevated px-5 py-3.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
        </div>
        <div className="ml-2 flex-1 rounded-lg bg-void/80 px-3 py-1 font-mono text-[11px] text-muted/70">
          {project.id}.basicthinks.dev
        </div>
      </div>

      {/* Fake site UI */}
      <div
        className="relative aspect-[16/10] overflow-hidden p-6 sm:p-8"
        style={{
          background: `radial-gradient(circle at ${reversed ? "80% 20%" : "20% 20%"}, rgba(255,43,43,0.14) 0%, transparent 55%), linear-gradient(${reversed ? 210 : 150}deg, #111111 0%, #050505 75%)`,
        }}
      >
        <div className="grid-lines absolute inset-0 opacity-50" aria-hidden="true" />

        <div className="relative flex items-center justify-between">
          <span className="h-2.5 w-16 rounded-full bg-white/20" aria-hidden="true" />
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-2 w-8 rounded-full bg-white/10" />
            <span className="h-2 w-8 rounded-full bg-white/10" />
            <span className="h-2 w-8 rounded-full bg-accent/60" />
          </div>
        </div>

        <div className="relative mt-10 sm:mt-14">
          <p className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {project.mock.hero}
          </p>
          <div className="mt-4 max-w-sm space-y-2" aria-hidden="true">
            {Array.from({ length: project.mock.lines }).map((_, i) => (
              <span
                key={i}
                className="block h-2 rounded-full bg-white/10"
                style={{ width: `${88 - i * 14}%` }}
              />
            ))}
          </div>
          <div className="mt-6 flex gap-2.5">
            {project.mock.pills.map((pill, i) => (
              <span
                key={pill}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-xs font-semibold",
                  i === 0
                    ? "bg-accent text-white"
                    : "border border-line bg-card/80 text-muted",
                )}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute right-6 bottom-6 hidden gap-3 sm:flex" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-16 w-12 rounded-lg border border-line bg-card/70"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function WebShowcase() {
  return (
    <section id="web-showcase" className="section relative bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Web Development"
          title="Digital Experiences, Built Properly."
          description="Websites and products engineered for speed, clarity and conversion — not just content."
        />

        <div className="mt-14 space-y-6 lg:space-y-8">
          {webProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <div className="grid items-center gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
                <BrowserMock project={project} reversed={i % 2 === 1} />

                <div className={cn(i % 2 === 1 && "lg:order-1")}>
                  <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-line bg-card px-2.5 py-1.5 font-mono text-[11px] text-ink/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
                    aria-label={`View project: ${project.name}`}
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

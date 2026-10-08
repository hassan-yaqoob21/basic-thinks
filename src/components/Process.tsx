"use client";

import { processSteps } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Process"
          title="From Idea to Launch."
          description="A clear, focused process that turns conversations into finished work."
        />

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-16 hidden md:block">
          <div
            className="absolute top-[22px] right-0 left-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
            aria-hidden="true"
          />

          <ol className="relative grid grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <li className="group relative">
                  <div className="relative mb-7 flex h-11 w-11 items-center justify-center">
                    <span
                      className="absolute inset-0 rounded-full border border-line bg-void transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-[0_0_28px_-4px_rgba(255,43,43,0.7)]"
                      aria-hidden="true"
                    />
                    <span className="relative font-mono text-xs font-bold text-accent">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[240px] text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-12 md:hidden">
          <span
            className="absolute top-2 bottom-2 left-[21px] w-px bg-gradient-to-b from-accent/60 via-line to-transparent"
            aria-hidden="true"
          />
          <ol className="relative space-y-9">
            {processSteps.map((step) => (
              <li key={step.number} className="flex gap-5">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-void">
                  <span className="font-mono text-xs font-bold text-accent">
                    {step.number}
                  </span>
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

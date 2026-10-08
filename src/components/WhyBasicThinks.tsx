"use client";

import { whyPoints } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyBasicThinks() {
  return (
    <section id="why" className="section relative bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Basic Thinks?"
          description="A modern creative technology studio built around AI, craft and results."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point, i) => {
            const Icon = point.icon;

            return (
              <Reveal key={point.title} delay={i * 0.07}>
                <div className="group h-full rounded-3xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-elevated text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}

          {/* Decorative brand card fills the sixth slot */}
          <Reveal delay={0.42}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-card p-7">
              <p className="font-display text-xl leading-snug font-bold text-ink">
                Think.{" "}
                <span className="text-gradient-accent">Create.</span> Build.
              </p>
              <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                AI · Creativity · Technology
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="What We Create"
          description="From AI-generated content to production-ready websites, we turn ideas into digital experiences."
        />

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.number} delay={i * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_28px_70px_-30px_rgba(255,43,43,0.4)] sm:p-9">
                  <span
                    className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-accent via-accent/60 to-transparent transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(600px circle at 20% 0%, rgba(255,43,43,0.07), transparent 60%)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="font-mono text-xs tracking-[0.25em] text-accent">
                      SERVICE {service.number}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-elevated text-muted transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <ul className="relative mt-6 flex flex-wrap gap-2" aria-label={`${service.title} services`}>
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-xs font-medium text-ink/75 transition-colors duration-300 group-hover:border-line"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.href}
                    className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors duration-200 hover:text-accent"
                  >
                    {service.cta}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

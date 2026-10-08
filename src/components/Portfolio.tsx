"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { portfolioCategories, projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function Portfolio() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="work" className="section relative bg-surface">
      <div
        className="grid-lines absolute inset-0 opacity-40"
        style={{
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)",
        }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Featured Work"
          title="Work That Speaks"
          description="A selection of digital experiments, AI creations and web experiences from Basic Thinks."
        />

        <Reveal className="mt-10" delay={0.1}>
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={cn(
                  "shrink-0 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200",
                  active === category
                    ? "border-accent/60 bg-accent/10 text-accent shadow-[0_0_24px_-8px_rgba(255,43,43,0.5)]"
                    : "border-line bg-card text-muted hover:border-line hover:text-ink",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-line bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_28px_70px_-30px_rgba(255,43,43,0.35)]"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{ backgroundImage: project.gradient }}
                >
                  <div className="grid-lines absolute inset-0 opacity-50" aria-hidden="true" />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${project.accent}22, transparent 65%)`,
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display text-5xl font-bold tracking-tighter opacity-15 select-none"
                      aria-hidden="true"
                    >
                      {project.title
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 rounded-lg border border-white/10 bg-void/70 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-ink/90 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-elevated px-2 py-1 font-mono text-[11px] text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-xs text-muted/70">Basic Thinks</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-accent"
                      aria-label={`View project: ${project.title}`}
                    >
                      View Project
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

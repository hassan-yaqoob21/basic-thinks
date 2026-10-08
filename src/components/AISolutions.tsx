"use client";

import { Boxes, Bot, Workflow, Plug, Lightbulb, TerminalSquare } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const flowSteps = ["IDEA", "AI", "AUTOMATION", "OUTPUT"];

const examples = [
  { title: "Content workflows", icon: Workflow },
  { title: "AI assistants", icon: Bot },
  { title: "Automation", icon: Boxes },
  { title: "AI integrations", icon: Plug },
  { title: "Intelligent website features", icon: Lightbulb },
  { title: "Prompt systems", icon: TerminalSquare },
];

export function AISolutions() {
  return (
    <section id="ai-solutions" className="section relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(ellipse, rgba(229,9,20,0.12) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="AI Solutions"
          title="Put AI to Work."
          description="Don't just use AI to generate content. Use it to improve how you work."
          align="center"
        />

        {/* Workflow diagram */}
        <Reveal className="mt-16" delay={0.1}>
          <div
            className="mx-auto flex max-w-4xl flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-0"
            aria-label="Workflow: idea to AI to automation to output"
          >
            {flowSteps.map((step, i) => (
              <div key={step} className="flex flex-1 flex-col items-center lg:flex-row">
                <div className="w-full rounded-2xl border border-line bg-card px-5 py-6 text-center transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_-12px_rgba(255,43,43,0.5)] lg:max-w-[150px]">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
                    0{i + 1}
                  </span>
                  <p className="mt-2 font-display text-sm font-bold tracking-[0.15em] text-ink">
                    {step}
                  </p>
                </div>

                {i < flowSteps.length - 1 ? (
                  <div
                    className="relative mx-auto h-10 w-px overflow-hidden bg-gradient-to-b from-accent/70 to-accent/20 lg:mx-0 lg:h-px lg:w-full lg:bg-gradient-to-r"
                    aria-hidden="true"
                  >
                    <span className="animate-flow-dot absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(255,43,43,0.9)] lg:top-0" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Examples */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((example, i) => {
            const Icon = example.icon;

            return (
              <Reveal key={example.title} delay={i * 0.06}>
                <div className="group flex items-center gap-4 rounded-2xl border border-line bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/35 hover:bg-card">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-[0.95rem] font-medium text-ink/90">
                    {example.title}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

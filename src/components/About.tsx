"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socials } from "@/data/socials";

const links = [
  { label: "YouTube", href: socials.youtube },
  { label: "Instagram", href: socials.instagram },
  { label: "TikTok", href: socials.tiktok },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "GitHub", href: socials.github },
];

export function About() {
  return (
    <section id="about" className="section relative bg-surface">
      <div
        className="grid-lines absolute inset-0 opacity-40"
        style={{
          maskImage: "radial-gradient(ellipse 60% 50% at 80% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 80% 50%, black, transparent)",
        }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="About" title="What Is Basic Thinks?" />

            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  Basic Thinks is a creator-driven AI and technology brand focused
                  on turning ideas into useful, engaging and modern digital
                  experiences.
                </p>
                <p>
                  From AI-generated videos and creative content to websites and
                  AI-powered solutions, Basic Thinks combines creativity with
                  technology to help people and businesses build better things.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Brand spec panel */}
          <Reveal delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-card p-8">
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(229,9,20,0.25) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="font-mono text-[11px] tracking-[0.25em] text-accent uppercase">
                  Brand
                </p>
                <p className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
                  BASIC THINKS
                </p>
                <p className="mt-1.5 text-sm text-muted">
                  Think. Create. Build.
                </p>

                <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Focus</dt>
                    <dd className="text-right font-medium text-ink">
                      AI · Web · Creative
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">For</dt>
                    <dd className="text-right font-medium text-ink">
                      Creators & businesses
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Approach</dt>
                    <dd className="text-right font-medium text-ink">
                      AI-first, custom-built
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Deliverables</dt>
                    <dd className="text-right font-medium text-ink">
                      Polished. Intentional.
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["AI Video", "Web Development", "AI Solutions", "Creative"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-line bg-elevated px-2.5 py-1.5 text-[11px] font-medium text-ink/75"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Play } from "lucide-react";
import { videoProjects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VideoShowcase() {
  return (
    <section id="video-showcase" className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="AI Video"
          title="From Idea to Video."
          description="AI can turn a simple concept into a complete visual story."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {videoProjects.map((video, i) => (
            <Reveal key={video.id} delay={i * 0.07}>
              <article className="group relative">
                <a
                  href="#contact"
                  className="block focus-visible:outline-2"
                  aria-label={`Watch preview: ${video.title}`}
                >
                  <div
                    className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-line transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-accent/45 group-hover:shadow-[0_28px_70px_-30px_rgba(255,43,43,0.45)]"
                    style={{ backgroundImage: video.gradient }}
                  >
                    <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
                    <div className="noise absolute inset-0" aria-hidden="true" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-void/60 text-ink backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-accent/60 group-hover:bg-accent/20 group-hover:text-accent">
                        <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/70 to-transparent p-4 pt-12">
                      <p className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
                        {video.category}
                      </p>
                      <h3 className="mt-1 font-display text-base font-bold text-ink">
                        {video.title}
                      </h3>
                    </div>

                    <span className="absolute top-3 right-3 rounded-md bg-void/70 px-2 py-0.5 font-mono text-[11px] text-muted backdrop-blur-sm">
                      {video.duration}
                    </span>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10" delay={0.2}>
          <p className="text-center text-sm text-muted/80">
            Shorts · Reels · TikTok · Stories · Promos — built entirely with AI
            workflows.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import type { SocialIcon } from "@/components/ui/BrandIcons";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/ui/BrandIcons";
import { socials } from "@/data/socials";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SocialCard = {
  name: string;
  description: string;
  href: string;
  icon: SocialIcon;
};

const socialCards: SocialCard[] = [
  {
    name: "YouTube",
    description: "AI & technology content",
    href: socials.youtube,
    icon: YoutubeIcon,
  },
  {
    name: "Instagram",
    description: "AI creations & visual content",
    href: socials.instagram,
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    description: "Short-form AI content",
    href: socials.tiktok,
    icon: TikTokIcon,
  },
  {
    name: "LinkedIn",
    description: "Technology & professional work",
    href: socials.linkedin,
    icon: LinkedinIcon,
  },
];

export function Socials() {
  return (
    <section id="socials" className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Social"
          title="Follow Basic Thinks"
          description="More AI experiments, creative projects and technology content."
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialCards.map((card, i) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.name} delay={i * 0.07}>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_28px_70px_-30px_rgba(255,43,43,0.35)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-elevated text-muted transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {card.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{card.description}</p>
                  <span className="mt-auto flex items-center gap-1 pt-6 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                    Follow
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10" delay={0.2}>
          <div className="flex items-center justify-center gap-5">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import type { SocialIcon } from "@/components/ui/BrandIcons";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/ui/BrandIcons";
import { socials } from "@/data/socials";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const footerSocials: { label: string; href: string; icon: SocialIcon }[] = [
  { label: "YouTube", href: socials.youtube, icon: YoutubeIcon },
  { label: "Instagram", href: socials.instagram, icon: InstagramIcon },
  { label: "TikTok", href: socials.tiktok, icon: TikTokIcon },
  { label: "LinkedIn", href: socials.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: socials.github, icon: GithubIcon },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div>
            <p className="font-display text-sm font-bold tracking-[0.2em] text-ink">
              BASIC THINKS
            </p>
            <p className="mt-3 text-sm text-muted">{siteConfig.tagline}</p>
            <p className="mt-1.5 font-mono text-[11px] tracking-[0.2em] text-muted/70 uppercase">
              AI · Creativity · Technology
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block text-sm text-muted transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink/90 uppercase">
              Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-ink/90 uppercase">
              Social
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerSocials.map((social) => {
                const Icon = social.icon;

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-ink"
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 sm:flex-row">
          <p className="text-xs text-muted/80">
            © 2026 Basic Thinks. All rights reserved.
          </p>
          <p className="text-xs text-muted/60">Built with AI, creativity &amp; code.</p>
        </div>
      </div>
    </footer>
  );
}

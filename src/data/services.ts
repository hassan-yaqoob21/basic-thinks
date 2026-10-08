import {
  Clapperboard,
  Code2,
  Cpu,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  number: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: "01",
    title: "AI Video Generation",
    description:
      "Transform ideas into engaging AI-powered videos for YouTube, Instagram, TikTok and brands.",
    features: [
      "AI Shorts",
      "AI Reels",
      "AI TikTok videos",
      "AI storytelling",
      "AI animation",
      "AI characters",
      "AI voiceovers",
      "Promotional videos",
    ],
    cta: "Explore AI Video",
    href: "#video-showcase",
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Fast, modern and responsive websites designed to turn visitors into customers.",
    features: [
      "Landing pages",
      "Business websites",
      "Portfolio websites",
      "React applications",
      "Responsive websites",
      "UI implementation",
      "Website redesigns",
    ],
    cta: "Build a Website",
    href: "#web-showcase",
    icon: Code2,
  },
  {
    number: "03",
    title: "AI Solutions",
    description:
      "Practical AI systems that help creators and businesses create, automate and work smarter.",
    features: [
      "AI integrations",
      "AI workflows",
      "AI automation",
      "AI-powered features",
      "Prompt engineering",
      "AI tool implementation",
    ],
    cta: "Explore AI Solutions",
    href: "#ai-solutions",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Creative Content",
    description:
      "AI-assisted creative services designed to make your digital presence stand out.",
    features: [
      "YouTube thumbnails",
      "Social media creatives",
      "Video concepts",
      "Scripts",
      "Content ideas",
      "Visual concepts",
    ],
    cta: "Create Something",
    href: "#contact",
    icon: Palette,
  },
];

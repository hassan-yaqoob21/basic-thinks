import { Clapperboard, Code2, Cpu, Gem, Users, type LucideIcon } from "lucide-react";

export type WhyPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyPoints: WhyPoint[] = [
  {
    title: "AI First",
    description:
      "We use modern AI tools and workflows to accelerate creative and technical work.",
    icon: Cpu,
  },
  {
    title: "Creator Mindset",
    description:
      "We understand content, social platforms and what makes digital experiences engaging.",
    icon: Clapperboard,
  },
  {
    title: "Modern Technology",
    description:
      "We build with modern web technologies and development practices.",
    icon: Code2,
  },
  {
    title: "Custom Solutions",
    description: "No unnecessary one-size-fits-all packages.",
    icon: Users,
  },
  {
    title: "Built to Impress",
    description:
      "Every project should look polished, intentional and professional.",
    icon: Gem,
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us",
    description: "Share your idea, problem or project requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We define the approach, scope and deliverables.",
  },
  {
    number: "03",
    title: "Create",
    description: "Design, AI generation, development and refinement.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "You receive the final polished result.",
  },
];

export const credibilityItems = [
  "AI CONTENT",
  "WEB DEVELOPMENT",
  "AI SOLUTIONS",
  "CREATIVE TECHNOLOGY",
];

export type ProjectCategory = "AI Video" | "Web" | "Creative" | "AI";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tools: string[];
  gradient: string;
  accent: string;
};

export const portfolioCategories = [
  "All",
  "AI Video",
  "Web",
  "Creative",
  "AI",
] as const;

export const projects: Project[] = [
  {
    id: "neon-cities",
    title: "Neon Cities",
    category: "AI Video",
    description:
      "A cinematic AI short exploring imaginary futures of crowded neon metropolises.",
    tools: ["AI Video", "AI Voiceover", "Storytelling"],
    gradient:
      "radial-gradient(circle at 25% 15%, rgba(229, 9, 20, 0.55) 0%, transparent 55%), linear-gradient(155deg, #1a0808 0%, #050505 70%)",
    accent: "#ff2b2b",
  },
  {
    id: "commerce-core",
    title: "Commerce Core",
    category: "Web",
    description:
      "A high-conversion storefront experience built for speed and clarity.",
    tools: ["React", "Next.js", "Tailwind"],
    gradient:
      "radial-gradient(circle at 80% 20%, rgba(255, 43, 43, 0.35) 0%, transparent 50%), linear-gradient(200deg, #141414 0%, #050505 75%)",
    accent: "#ff6b6b",
  },
  {
    id: "prompt-engine",
    title: "Prompt Engine",
    category: "AI",
    description:
      "A reusable prompt system that turns rough ideas into consistent production output.",
    tools: ["Prompt Engineering", "AI Workflows"],
    gradient:
      "radial-gradient(circle at 30% 80%, rgba(229, 9, 20, 0.4) 0%, transparent 55%), linear-gradient(135deg, #101010 0%, #050505 70%)",
    accent: "#e50914",
  },
  {
    id: "creator-kit",
    title: "Creator Kit",
    category: "Creative",
    description:
      "Thumbnails, visual concepts and scripts engineered for social performance.",
    tools: ["Thumbnails", "Scripts", "Visual Concepts"],
    gradient:
      "radial-gradient(circle at 70% 70%, rgba(255, 43, 43, 0.3) 0%, transparent 50%), linear-gradient(160deg, #17110f 0%, #050505 75%)",
    accent: "#ff2b2b",
  },
  {
    id: "time-loops",
    title: "Time Loops",
    category: "AI Video",
    description:
      "A short-form AI storytelling series about impossible journeys through time.",
    tools: ["AI Animation", "AI Characters"],
    gradient:
      "radial-gradient(circle at 50% 0%, rgba(255, 43, 43, 0.5) 0%, transparent 55%), linear-gradient(180deg, #12060a 0%, #050505 70%)",
    accent: "#ff4747",
  },
  {
    id: "studio-os",
    title: "Studio OS",
    category: "AI",
    description:
      "An AI-powered content workflow that automates research, drafts and publishing.",
    tools: ["AI Automation", "Integrations"],
    gradient:
      "radial-gradient(circle at 20% 30%, rgba(229, 9, 20, 0.35) 0%, transparent 50%), linear-gradient(145deg, #0d0d12 0%, #050505 75%)",
    accent: "#e50914",
  },
  {
    id: "agency-one",
    title: "Agency One",
    category: "Web",
    description:
      "A bold agency site with cinematic motion and a crisp conversion path.",
    tools: ["React", "Next.js", "Motion"],
    gradient:
      "radial-gradient(circle at 75% 25%, rgba(255, 43, 43, 0.4) 0%, transparent 55%), linear-gradient(210deg, #151515 0%, #050505 70%)",
    accent: "#ff2b2b",
  },
  {
    id: "visual-lab",
    title: "Visual Lab",
    category: "Creative",
    description:
      "Experimental AI visuals and concepts built for brand campaigns.",
    tools: ["Visual Concepts", "AI Art Direction"],
    gradient:
      "radial-gradient(circle at 40% 60%, rgba(229, 9, 20, 0.45) 0%, transparent 55%), linear-gradient(170deg, #160b0b 0%, #050505 75%)",
    accent: "#ff5252",
  },
];

export type VideoProject = {
  id: string;
  title: string;
  category: string;
  duration: string;
  gradient: string;
};

export const videoProjects: VideoProject[] = [
  {
    id: "ai-story",
    title: "AI Story",
    category: "Storytelling",
    duration: "0:48",
    gradient:
      "radial-gradient(circle at 50% 20%, rgba(255, 43, 43, 0.55) 0%, transparent 55%), linear-gradient(180deg, #1a0a0a 0%, #050505 80%)",
  },
  {
    id: "time-travel",
    title: "Time Travel",
    category: "AI Experiment",
    duration: "1:02",
    gradient:
      "radial-gradient(circle at 30% 70%, rgba(229, 9, 20, 0.5) 0%, transparent 55%), linear-gradient(200deg, #101018 0%, #050505 80%)",
  },
  {
    id: "ai-experiment",
    title: "AI Experiment",
    category: "Experiment",
    duration: "0:36",
    gradient:
      "radial-gradient(circle at 70% 30%, rgba(255, 43, 43, 0.45) 0%, transparent 50%), linear-gradient(160deg, #141008 0%, #050505 80%)",
  },
  {
    id: "creative-short",
    title: "Creative Short",
    category: "Creative",
    duration: "0:54",
    gradient:
      "radial-gradient(circle at 40% 40%, rgba(229, 9, 20, 0.5) 0%, transparent 55%), linear-gradient(190deg, #0c0c0c 0%, #050505 80%)",
  },
  {
    id: "brand-film",
    title: "Brand Film",
    category: "Promo",
    duration: "1:15",
    gradient:
      "radial-gradient(circle at 60% 80%, rgba(255, 43, 43, 0.4) 0%, transparent 50%), linear-gradient(150deg, #180c10 0%, #050505 80%)",
  },
];

export type WebProject = {
  id: string;
  name: string;
  category: string;
  stack: string[];
  description: string;
  url: string;
  mock: {
    hero: string;
    lines: number;
    pills: string[];
  };
};

export const webProjects: WebProject[] = [
  {
    id: "nova-launch",
    name: "Nova Launch",
    category: "Web Development",
    stack: ["React", "Next.js", "Tailwind"],
    description:
      "A cinematic product launch site engineered for conversions with fast loads and bold motion.",
    url: "https://example.com",
    mock: {
      hero: "Launch faster.",
      lines: 3,
      pills: ["Get Started", "Learn more"],
    },
  },
  {
    id: "atelier-studio",
    name: "Atelier Studio",
    category: "Web Development",
    stack: ["React", "Next.js", "Motion"],
    description:
      "A premium portfolio experience for a design studio with editorial typography and smooth transitions.",
    url: "https://example.com",
    mock: {
      hero: "Design with intent.",
      lines: 4,
      pills: ["View work"],
    },
  },
  {
    id: "pulse-analytics",
    name: "Pulse Analytics",
    category: "Web Development",
    stack: ["React", "Next.js", "Tailwind"],
    description:
      "A clean analytics dashboard landing page that turns complex data into a clear story.",
    url: "https://example.com",
    mock: {
      hero: "See the signal.",
      lines: 3,
      pills: ["Start free", "Docs"],
    },
  },
];

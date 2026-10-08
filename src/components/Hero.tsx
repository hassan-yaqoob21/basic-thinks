"use client";

import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useEffect, useRef } from "react";

const words = ["Think.", "Create.", "Build."];

type Fragment = {
  text: string;
  top: string;
  left?: string;
  right?: string;
  delay: number;
};

const floatFragments: Fragment[] = [
  { text: "const idea = await generate();", top: "18%", left: "6%", delay: 0 },
  { text: "render(<Story />)", top: "64%", left: "10%", delay: 1.2 },
  { text: "deploy: edge", top: "28%", right: "7%", delay: 0.6 },
  { text: "prompt → pixels", top: "72%", right: "9%", delay: 1.8 },
];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    };

    let particles: Particle[] = [];

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -0.05 - Math.random() * 0.14,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.5 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 43, 43, ${p.a})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-void" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-[58%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(229,9,20,0.22) 0%, rgba(229,9,20,0.06) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="noise absolute inset-0" aria-hidden="true" />
      <ParticleField />

      {/* Floating code fragments */}
      {floatFragments.map((fragment) => (
        <motion.span
          key={fragment.text}
          className="pointer-events-none absolute hidden rounded-lg border border-line bg-card/70 px-3 py-1.5 font-mono text-[11px] text-muted/70 backdrop-blur-sm lg:block"
          style={{
            top: fragment.top,
            left: fragment.left,
            right: fragment.right,
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 1, delay: fragment.delay },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: fragment.delay,
            },
          }}
          aria-hidden="true"
        >
          {fragment.text}
        </motion.span>
      ))}

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-card/60 px-4 py-1.5 text-[11px] font-semibold tracking-[0.3em] text-muted backdrop-blur-sm sm:text-xs"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            AI · CREATIVITY · TECHNOLOGY
          </motion.p>

          <h1 className="font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.95] font-bold tracking-tight text-ink">
            <span className="sr-only">Think. Create. Build.</span>
            {words.map((word, i) => (
              <motion.span
                key={word}
                className={`inline-block ${i === 1 ? "text-gradient-accent" : ""}`}
                aria-hidden="true"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
                {i < words.length - 1 ? <span>&nbsp;</span> : null}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            We create AI-powered content, modern websites and intelligent digital
            solutions for creators and businesses.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#work" className="btn-secondary w-full sm:w-auto">
              Explore Our Work
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] text-muted/60 uppercase">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-accent/70 to-transparent" />
      </div>
    </section>
  );
}

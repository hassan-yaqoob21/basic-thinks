"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, input, select, textarea, [role='button']";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch) return;

    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let raf = 0;
    let expanded = false;

    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${expanded ? 2.4 : 1})`;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${expanded ? 1.35 : 1})`;

      raf = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      const overInteractive = (e.target as HTMLElement | null)?.closest?.(
        INTERACTIVE_SELECTOR,
      );
      expanded = Boolean(overInteractive);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] hidden md:block">
      <div
        ref={glowRef}
        className="fixed top-0 left-0 h-72 w-72 rounded-full opacity-60 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(255,43,43,0.16) 0%, rgba(255,43,43,0.04) 45%, transparent 70%)",
          transition: "opacity 0.3s ease",
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-accent"
        style={{
          boxShadow: "0 0 12px rgba(255,43,43,0.8)",
          transition: "transform 0.2s ease",
        }}
      />
    </div>
  );
}

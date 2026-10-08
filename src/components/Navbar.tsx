"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-void/85 backdrop-blur-xl"
          : "border-b border-transparent bg-void/20 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 font-display text-sm font-bold tracking-[0.2em] text-ink"
          aria-label="Basic Thinks — back to top"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,43,43,0.8)]"
            aria-hidden="true"
          />
          BASIC THINKS
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:bg-white/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-card text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="border-t border-line bg-void/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              className="container-x flex flex-col gap-1 py-5"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-lg font-medium text-ink transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-primary mt-4 w-full"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

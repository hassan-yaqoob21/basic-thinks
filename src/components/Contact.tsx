"use client";

import { AnimatePresence, motion } from "motion/react";
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  submitContactRequest,
  type ContactResult,
} from "@/lib/actions/contact";
import { siteConfig } from "@/lib/site";

const serviceOptions = [
  "AI Video",
  "Web Development",
  "AI Solution",
  "Creative Content",
  "Other",
];

const budgetOptions = [
  "Under $100",
  "$100–$300",
  "$300–$500",
  "$500+",
  "Not sure yet",
];

const inputClasses =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-accent/60 focus:outline-none disabled:opacity-60";

type Status =
  | { phase: "idle" }
  | { phase: "sending" }
  | { phase: "sent" }
  | { phase: "mailto"; mailto: string }
  | { phase: "error"; message: string };

export function Contact() {
  const [status, setStatus] = useState<Status>({ phase: "idle" });

  const sending = status.phase === "sending";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    setStatus({ phase: "sending" });

    try {
      const result: ContactResult = await submitContactRequest({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        service: String(data.get("service") ?? ""),
        budget: String(data.get("budget") ?? ""),
        details: String(data.get("details") ?? ""),
      });

      if (!result.ok) {
        setStatus({ phase: "error", message: result.error });
        return;
      }

      if (result.mode === "mailto") {
        window.location.href = result.mailto;
        setStatus({ phase: "mailto", mailto: result.mailto });
        form.reset();
        return;
      }

      setStatus({ phase: "sent" });
      form.reset();
    } catch {
      setStatus({
        phase: "error",
        message:
          "Something went wrong. Please try again, or email us directly.",
      });
    }
  };

  const reset = () => setStatus({ phase: "idle" });

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/3 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(229,9,20,0.28) 0%, rgba(229,9,20,0.08) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-50"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent)",
        }}
        aria-hidden="true"
      />
      <div className="noise absolute inset-0" aria-hidden="true" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-accent uppercase">
            Start a Project
          </p>
          <h2 className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.98] font-bold tracking-tight text-ink">
            Have an idea?
          </h2>
          <p className="mt-5 text-xl text-muted sm:text-2xl">
            Let&apos;s turn it into something real.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a href="#project-form" className="btn-primary w-full sm:w-auto">
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-secondary w-full sm:w-auto"
            >
              Contact Basic Thinks
            </a>
          </div>

          <p className="mt-8 text-xs font-medium tracking-[0.18em] text-muted/70 uppercase">
            AI Video · Web Development · AI Solutions · Creative
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-2xl" delay={0.1}>
          <div className="rounded-3xl border border-line bg-card/90 p-6 backdrop-blur-sm sm:p-9">
            <AnimatePresence mode="wait">
              {status.phase === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center py-10 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                    Request sent.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                    We&apos;ve received your project details and will get back
                    to you within 1–2 business days.
                  </p>
                  <button type="button" onClick={reset} className="btn-secondary mt-8">
                    Send another request
                  </button>
                </motion.div>
              ) : status.phase === "mailto" ? (
                <motion.div
                  key="mailto"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center py-10 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-elevated text-accent">
                    <Mail className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                    One last step
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                    Your email app should have opened with your project details
                    prefilled. Press send there and we&apos;ll reply within
                    1–2 business days.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                    <a href={status.mailto} className="btn-primary">
                      Open email again
                    </a>
                    <button type="button" onClick={reset} className="btn-secondary">
                      Start over
                    </button>
                  </div>
                  <p className="mt-5 text-xs text-muted/70">
                    Or email us directly at{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-ink underline-offset-4 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  id="project-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                  noValidate={false}
                >
                  {status.phase === "error" ? (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3.5 text-sm text-ink"
                    >
                      <AlertTriangle
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{status.message}</span>
                    </div>
                  ) : null}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-ink"
                      >
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={sending}
                        autoComplete="name"
                        placeholder="Your name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-ink"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={sending}
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-ink"
                      >
                        What do you need? <span className="text-accent">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        disabled={sending}
                        defaultValue=""
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium text-ink"
                      >
                        Budget <span className="text-muted">(optional)</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        disabled={sending}
                        defaultValue=""
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="details"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      Project details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={5}
                      disabled={sending}
                      placeholder="Tell us about your idea, goals and timeline…"
                      className={`${inputClasses} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                    aria-busy={sending}
                  >
                    {sending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Project Request
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted/70">
                    We typically reply within 1–2 business days.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

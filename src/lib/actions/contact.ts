"use server";

import { siteConfig } from "@/lib/site";

export type ContactPayload = {
  name: string;
  email: string;
  service: string;
  details: string;
  budget?: string;
};

export type ContactResult =
  | { ok: true; mode: "api" }
  | { ok: true; mode: "mailto"; mailto: string }
  | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactRequest(
  payload: ContactPayload,
): Promise<ContactResult> {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const service = payload.service.trim();
  const details = payload.details.trim();
  const budget = payload.budget?.trim() || "Not specified";

  if (!name || !EMAIL_PATTERN.test(email) || !service || !details) {
    return {
      ok: false,
      error: "Please fill in all required fields with valid information.",
    };
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, service, budget, details }),
      });

      if (!response.ok) {
        return {
          ok: false,
          error: `The form service responded with status ${response.status}. Please try again, or email us directly.`,
        };
      }

      return { ok: true, mode: "api" };
    } catch {
      return {
        ok: false,
        error:
          "Something went wrong while sending. Please check your connection and try again, or email us directly.",
      };
    }
  }

  // No backend configured yet: prepare a prefilled email the visitor sends themselves.
  const subject = `Project request — ${service} — ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Budget: ${budget}`,
    "",
    "Project details:",
    details,
  ].join("\n");

  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  return { ok: true, mode: "mailto", mailto };
}

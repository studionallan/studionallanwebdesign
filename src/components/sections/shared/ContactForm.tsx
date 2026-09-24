"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const field =
  "w-full border border-rule-strong bg-paper px-5 py-4 text-[1.05rem] text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-accent focus:outline-none";

const label = "t-eyebrow mb-2.5 block text-muted";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Delivers to the studio inbox via FormSubmit AJAX — no redirect, no backend.
 * NOTE: FormSubmit emails a one-time activation link on the very first
 * submission. Open it from the inbox once and delivery runs from then on.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    // Capture synchronously — React nulls e.currentTarget after an await,
    // which used to throw here and falsely show the error state on success.
    const form = e.currentTarget;
    setStatus("sending");

    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const business = String(data.get("business") || "");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${site.enquiryTo}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            business,
            email: String(data.get("email") || ""),
            phone: String(data.get("phone") || ""),
            message: String(data.get("message") || ""),
            _subject: `Website enquiry — ${name}${business ? ` (${business})` : ""}`,
            _template: "table",
            _captcha: "false",
            _honey: "",
          }),
        }
      );
      if (!res.ok) throw new Error("submit failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Your name
          </label>
          <input id="cf-name" name="name" required autoComplete="name" placeholder="Jane Smith" className={field} />
        </div>
        <div>
          <label htmlFor="cf-business" className={label}>
            Business
          </label>
          <input id="cf-business" name="business" required autoComplete="organization" placeholder="Smith & Co." className={field} />
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className={label}>
            Email
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="jane@smithandco.ca" className={field} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>
            Phone <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="(905) 555-0100" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={label}>
          What do you do, and what do you need?
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your business and your current website, in your own words."
          className={`${field} resize-y`}
        />
      </div>

      {/* honeypot — invisible to humans, catches bots */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
        defaultValue=""
      />

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="group inline-flex items-center justify-between gap-10 bg-ink px-7 py-5 text-cream transition-colors duration-300 hover:bg-accent disabled:cursor-default disabled:opacity-60"
        >
          <span className="t-eyebrow">
            {status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Send enquiry"}
          </span>
          <span
            aria-hidden
            className="grid size-8 place-items-center border border-current opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M1 11 11 1M11 1H3M11 1v8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
        </button>
        {status === "sent" && (
          <p className="max-w-xs text-sm leading-relaxed text-ink-2" role="status">
            Thanks — your enquiry is on its way. We&apos;ll be in touch shortly.
          </p>
        )}
        {status === "error" && (
          <p className="max-w-xs text-sm leading-relaxed text-accent-deep" role="alert">
            Something didn&apos;t go through. Please call or text us instead —
            it&apos;s faster anyway.
          </p>
        )}
      </div>
    </form>
  );
}

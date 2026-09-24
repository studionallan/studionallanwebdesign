import { site } from "@/lib/site";

export function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function SmsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function WhatsappIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9 9.5c.5 2.5 2.5 4.5 5 5l1.5-1.5 2 2c-.5 1.5-1.5 2-3 1.5-3-1-6-4-7-7-.5-1.5 0-2.5 1.5-3l2 2L9 9.5z" strokeWidth="1.4" />
    </svg>
  );
}

/**
 * Icon-only contact button. The address itself lives in the href —
 * nothing scannable on screen. Labels stay generic for screen readers.
 * Renders a span (no href) when nested inside another link.
 */
export function IconButton({
  href,
  label,
  children,
  dark = false,
  accent = false,
  className = "",
}: {
  href?: string;
  label?: string;
  children: React.ReactNode;
  dark?: boolean;
  accent?: boolean;
  className?: string;
}) {
  const skin = accent
    ? dark
      ? "border-accent-bright/60 text-accent-bright hover:bg-accent-bright hover:border-accent-bright hover:text-ink-deep"
      : "border-accent/50 text-accent hover:bg-accent hover:border-accent hover:text-cream"
    : dark
      ? "border-line-dark text-cream-dim hover:border-cream hover:text-cream"
      : "border-rule-strong text-ink hover:bg-ink hover:text-cream hover:border-ink";
  const cls = `grid size-11 shrink-0 place-items-center border transition-colors duration-300 ${skin} ${className}`;
  if (href) {
    return (
      <a href={href} aria-label={label} title={label} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <span aria-hidden className={cls}>
      {children}
    </span>
  );
}

export function telHref() {
  return `tel:${site.phone.replace(/[^+\d]/g, "")}`;
}

export function smsHref() {
  return `sms:${site.phone.replace(/[^+\d]/g, "")}`;
}

export function waHref() {
  return `https://wa.me/${site.phone.replace(/\D/g, "")}`;
}

export function mailHref() {
  return `mailto:${site.email}`;
}

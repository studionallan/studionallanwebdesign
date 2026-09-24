import Link from "next/link";

/**
 * Single primary action across the site. Links to /contact.
 * No competing links, no pricing, no funnel.
 */
export function CTA({
  label = "Book a call",
  href = "/contact",
  variant = "dark",
  className = "",
}: {
  label?: string;
  href?: string;
  variant?: "dark" | "light";
  className?: string;
}) {
  const skin =
    variant === "dark"
      ? "bg-ink text-cream hover:bg-accent"
      : "bg-cream text-ink hover:bg-accent-bright hover:text-ink-deep";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-between gap-10 ${skin} px-7 py-5 transition-colors duration-300 ${className}`}
    >
      <span className="t-eyebrow">{label}</span>
      <span
        aria-hidden
        className="grid size-8 place-items-center border border-current opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M1 11 11 1M11 1H3M11 1v8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </span>
    </Link>
  );
}

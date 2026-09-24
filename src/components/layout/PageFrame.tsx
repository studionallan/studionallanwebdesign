import { site } from "@/lib/site";

/**
 * Fixed hairline frame inset from the viewport edge (desktop only).
 * Exposes the page structure the way brutalism tends to. Pointer-events off.
 */
export function PageFrame() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] hidden border border-rule lg:block"
        style={{ margin: 14 }}
      />
      {/* vertical geo reading, xl only */}
      <div
        aria-hidden
        className="pointer-events-none fixed left-7 top-1/2 z-[60] hidden -translate-y-1/2 xl:block"
      >
        <span
          className="t-eyebrow block text-muted/70"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "0.625rem",
            letterSpacing: "0.28em",
          }}
        >
          {`${site.geo.latitude.toFixed(4)}° N`} &nbsp;/&nbsp;{" "}
          {`${Math.abs(site.geo.longitude).toFixed(4)}° W`} · Hamilton
        </span>
      </div>
    </>
  );
}

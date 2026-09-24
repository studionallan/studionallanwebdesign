import Link from "next/link";
import { serviceLinks, site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { IconButton, PhoneIcon, SmsIcon, WhatsappIcon, smsHref, telHref, waHref } from "@/components/sections/shared/ContactIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="chapter-dark relative overflow-clip">
      <div className="shell pt-20 sm:pt-28">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 sm:pb-20 lg:grid-cols-12 lg:gap-8">
          <Reveal variant="up" className="lg:col-span-4">
            <p className="t-eyebrow text-cream-faint">Studio Nallan Web Design</p>
            <p className="t-lede mt-5 max-w-xs text-cream">
              The best website your business will ever have.
            </p>
          </Reveal>

          <nav aria-label="Services" className="lg:col-span-3 lg:col-start-6">
            <p className="t-eyebrow text-cream-faint">Services</p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="link-plain text-[1.05rem] text-cream-dim transition-colors hover:text-cream"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="t-eyebrow text-cream-faint">Contact</p>
            <div className="mt-5 flex gap-3">
              <IconButton href={telHref()} label={`Call ${site.name}`} dark accent>
                <PhoneIcon size={16} />
              </IconButton>
              <IconButton href={smsHref()} label={`Text ${site.name}`} dark accent>
                <SmsIcon size={16} />
              </IconButton>
              <IconButton href={waHref()} label={`WhatsApp ${site.name}`} dark accent>
                <WhatsappIcon size={16} />
              </IconButton>
            </div>
            <ul className="mt-6 space-y-3">
              {site.social.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="link-plain text-[1.05rem] text-cream-dim transition-colors hover:text-cream"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-line-dark py-6 sm:flex-row sm:items-center">
          <div>
            <p className="t-eyebrow text-cream-faint">{site.areasServedPhrase}</p>
            <p
              className="mt-2 text-cream-faint/60"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.08em" }}
            >
              {site.streetAddress}, {site.city}, {site.regionCode} {site.postalCode}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/articles/"
              className="link-plain t-eyebrow text-cream-faint transition-colors hover:text-cream"
            >
              Articles
            </Link>
            <p className="t-eyebrow text-cream-faint/60">
              © {year} {site.name}
            </p>
          </div>
        </div>

        {/* Giant wordmark */}
        <div aria-hidden className="select-none pb-2">
          <Reveal variant="fade">
            <p
              className="whitespace-nowrap text-center font-extrabold uppercase leading-[0.85] tracking-[-0.04em] text-cream/[0.13]"
              style={{ fontSize: "clamp(1.75rem, 5.6vw, 5rem)" }}
            >
              Studio Nallan Web Design
            </p>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}

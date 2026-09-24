"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { IconButton, PhoneIcon, SmsIcon, WhatsappIcon, smsHref, telHref, waHref } from "@/components/sections/shared/ContactIcons";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-xl">
      <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3 sm:h-[4.25rem] sm:flex-nowrap sm:py-0">
        <Link href="/" className="group order-1 flex min-w-0 items-center gap-3" aria-label={`${site.name} — home`}>
          <span
            aria-hidden
            className="size-3 shrink-0 bg-accent transition-transform duration-500 group-hover:rotate-45"
          />
          <span className="t-nav truncate text-ink" style={{ letterSpacing: "0.14em" }}>{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="order-3 w-full sm:order-2 sm:w-auto">
          <ul className="flex items-center gap-6 sm:gap-10">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="link-plain t-nav inline-flex items-center gap-2.5 py-1.5 transition-colors duration-300 hover:text-ink"
                    style={{ color: active ? "var(--ink)" : "var(--muted)" }}
                  >
                    <span
                      aria-hidden
                      className="size-1.5 bg-accent transition-opacity duration-300"
                      style={{ opacity: active ? 1 : 0 }}
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="order-2 hidden items-center gap-3 sm:order-3 md:flex">
          <IconButton href={telHref()} label={`Call ${site.name}`} accent>
            <PhoneIcon size={15} />
          </IconButton>
          <IconButton href={smsHref()} label={`Text ${site.name}`} accent>
            <SmsIcon size={15} />
          </IconButton>
          <IconButton href={waHref()} label={`WhatsApp ${site.name}`} accent>
            <WhatsappIcon size={15} />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { business } from "@/lib/business";
import { CallButton } from "./CallButton";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" />
            Serving Sarasota, Bradenton, Venice &amp; surrounding areas
          </span>
          <span>Licensed &amp; insured · {business.yearsExperience} years experience</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            Tad Dailey Painting
          </span>
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Sarasota, Florida
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary font-semibold" }}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallButton className="hidden sm:inline-flex" size="sm" label="Call Now" />
          <a
            href={business.phoneHref}
            aria-label={`Call ${business.phone}`}
            className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground sm:hidden"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card lg:hidden" aria-label="Mobile">
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

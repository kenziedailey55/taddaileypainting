import { Link } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { business } from "@/lib/business";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="mt-4 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold">{business.name}</p>
          <p className="mt-3 text-sm text-primary-foreground/80">
            Family-owned painting contractor serving Sarasota County for {business.yearsExperience}{" "}
            years. Licensed &amp; insured.
          </p>
          <a
            href={business.phoneHref}
            className="mt-5 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight"
          >
            <Phone className="size-6" aria-hidden="true" />
            {business.phone}
          </a>
          <p className="mt-1 text-sm text-primary-foreground/80">
            Free estimates by phone &amp; in-person visit
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Service Area</h2>
          <p className="mt-4 flex gap-2 text-sm text-primary-foreground/85">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{business.serviceArea.join(" · ")} and surrounding communities</span>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {business.hours}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${business.email}`} className="hover:underline">
                {business.email}
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Send a message
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} {business.name}. Residential &amp; light-commercial painting
          in Sarasota, FL.
        </p>
      </div>
    </footer>
  );
}

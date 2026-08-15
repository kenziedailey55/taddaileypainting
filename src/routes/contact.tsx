import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { business } from "@/lib/business";
import { services } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tad Dailey Painting | Sarasota FL Painters" },
      {
        name: "description",
        content:
          "Call Tad Dailey Painting in Sarasota, FL for a free painting estimate. Serving Sarasota, Bradenton, Venice, Osprey, Lakewood Ranch and nearby areas.",
      },
      { property: "og:title", content: "Contact Tad Dailey Painting — Sarasota, FL" },
      {
        property: "og:description",
        content:
          "Phone estimates and in-person visits across Sarasota County. Call for a free estimate.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/80">
            Free estimates
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">The fastest way to reach us is a call</h1>
          <a
            href={business.phoneHref}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-display text-2xl font-semibold text-accent-foreground sm:text-3xl"
          >
            <Phone className="size-7" aria-hidden="true" />
            {business.phone}
          </a>
          <p className="mt-4 text-primary-foreground/85">{business.hours}</p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">Prefer to write?</h2>
            <p className="mt-3 text-muted-foreground">
              Send a few details and we'll call you back to set up an in-person estimate. We don't
              quote prices by email — every project gets looked at first.
            </p>

            {sent ? (
              <div
                role="status"
                className="mt-8 rounded-xl border border-border bg-card p-7 shadow-soft"
              >
                <h3 className="text-xl">Thanks — message noted.</h3>
                <p className="mt-2 text-muted-foreground">
                  For anything time-sensitive, give us a call at{" "}
                  <a href={business.phoneHref} className="font-semibold text-primary">
                    {business.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    Name
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-base font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    Phone
                    <input
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-base font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </label>
                </div>
                <label className="block text-sm font-medium">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-base font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </label>
                <label className="block text-sm font-medium">
                  What can we help with?
                  <select
                    name="service"
                    className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-base font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {services.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                    <option>Something else</option>
                  </select>
                </label>
                <label className="block text-sm font-medium">
                  Project details
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-base font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-10"
                >
                  Request a callback
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <ul className="space-y-4 rounded-2xl border border-border bg-card p-7 shadow-soft">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <a href={business.phoneHref} className="font-semibold text-primary">
                  {business.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                {business.hours}
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  Based in Sarasota, FL — serving {business.serviceArea.join(", ")} and nearby
                  communities.
                </span>
              </li>
            </ul>

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <h2 className="border-b border-border bg-card px-6 py-4 text-lg">Service area</h2>
              <iframe
                title="Map of the Sarasota, Florida service area"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-82.72%2C27.09%2C-82.28%2C27.51&layer=mapnik&marker=27.3364%2C-82.5307"
                loading="lazy"
                className="h-80 w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

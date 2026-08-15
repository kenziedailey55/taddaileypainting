import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services } from "@/lib/services";
import { CallBanner } from "@/components/CallBanner";
import { CallButton } from "@/components/CallButton";
import { ServiceIcon } from "@/components/ServiceIcon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Painting Services in Sarasota FL | Interior, Exterior, Epoxy" },
      {
        name: "description",
        content:
          "Interior and exterior painting, wood staining, epoxy floor coatings, cabinet refinishing and pressure washing in Sarasota, FL. See what's included in each service.",
      },
      { property: "og:title", content: "Painting Services in Sarasota, FL" },
      {
        property: "og:description",
        content:
          "Interior & exterior painting, staining, epoxy flooring, cabinet refinishing and pressure washing across Sarasota County.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Services</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Painting &amp; coatings for Gulf Coast homes</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Residential and light-commercial work in Sarasota, Bradenton, Venice and the surrounding
            communities. Pricing is always given after a phone call and an in-person look — never a
            guess from a web form.
          </p>
          <CallButton className="mt-8" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-28 border-b border-border py-14 last:border-0 md:py-20"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <ServiceIcon icon={s.icon} className="size-6" />
                </span>
                <h2 className="mt-5 text-3xl">{s.title}</h2>
                <p className="mt-3 text-lg text-muted-foreground">{s.blurb}</p>
                <ul className="mt-6 space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <CallButton className="mt-8" size="sm" label="Call for a Free Estimate" />
              </div>
              <img
                src={s.image}
                alt={`${s.title} project by Tad Dailey Painting in Sarasota, FL`}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
              />
            </div>
          </section>
        ))}
      </div>

      <CallBanner heading="Not sure which service you need?" body="Describe what you're looking at and we'll tell you straight — including when a wash and a touch-up beats a full repaint." />
    </>
  );
}

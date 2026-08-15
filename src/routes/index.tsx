import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Star, Clock, ThumbsUp, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-exterior.jpg";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { CallButton } from "@/components/CallButton";
import { CallBanner } from "@/components/CallBanner";
import { ServiceIcon } from "@/components/ServiceIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Painting Contractor in Sarasota, FL | Tad Dailey Painting" },
      {
        name: "description",
        content:
          "Family-owned Sarasota painting contractor with 15+ years of experience. Interior & exterior painting, cabinets, epoxy floors, staining and pressure washing. Call for a free estimate.",
      },
      { property: "og:title", content: "Painting Contractor in Sarasota, FL | Tad Dailey Painting" },
      {
        property: "og:description",
        content:
          "Interior & exterior painting, cabinet refinishing, epoxy flooring and pressure washing in Sarasota, FL. 15+ years experience. Free estimates by phone.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HousePainter",
          name: business.name,
          telephone: business.phone,
          email: business.email,
          areaServed: business.serviceArea.map((c) => ({
            "@type": "City",
            name: `${c}, FL`,
          })),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Sarasota",
            addressRegion: "FL",
            addressCountry: "US",
          },
          description:
            "Residential and light-commercial painting contractor serving Sarasota, FL with 15+ years of experience.",
        }),
      },
    ],
  }),
  component: Home,
});

const trust = [
  { icon: Clock, title: `${business.yearsExperience} years`, body: "Painting Sarasota homes" },
  { icon: ShieldCheck, title: "Licensed & insured", body: "Fully covered crews" },
  { icon: Star, title: "5-star reviews", body: "Neighbors who refer us" },
  { icon: ThumbsUp, title: "Family-owned", body: "Tad is on every job" },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Painter finishing the exterior trim of a Sarasota, Florida home at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80 sm:bg-gradient-to-r sm:from-foreground/85 sm:via-foreground/60 sm:to-foreground/20" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <div className="max-w-2xl text-background">
            <p className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur">
              Sarasota, FL · {business.yearsExperience} years experience
            </p>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Painting done right the first time.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-background/90 sm:text-xl">
              Family-owned, detail-obsessed painters for homes and small commercial spaces across
              Sarasota and the surrounding Gulf Coast. Every estimate starts with a phone call and an
              in-person look at your project.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton size="lg" showNumber={false} />
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-background sm:text-3xl"
              >
                <Phone className="size-6" aria-hidden="true" />
                {business.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-background/80">
              Free estimates · Licensed &amp; insured · No pushy sales, no online guesswork
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 lg:grid-cols-4">
          {trust.map((t) => (
            <li key={t.title} className="flex items-start gap-3">
              <t.icon className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-semibold leading-tight">{t.title}</p>
                <p className="text-sm text-muted-foreground">{t.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              What we do
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Six services, one careful crew</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From a single accent wall to a full exterior repaint or a garage floor coating, we
              prep thoroughly, protect your property and leave the site clean every evening.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li
                key={s.slug}
                className="group rounded-xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <ServiceIcon icon={s.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  What's included
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl">How a project with us works</h2>
            <ol className="mt-8 space-y-6">
              {[
                {
                  t: "You call, we listen",
                  d: "Tell us what you're painting and when you'd like it done. No forms, no price calculators — a real conversation.",
                },
                {
                  t: "We visit and measure",
                  d: "We walk the project with you, check surfaces and prep needs, then put an honest written estimate in your hands.",
                },
                {
                  t: "We paint, you inspect",
                  d: "Careful masking, quality coatings, tidy job site — and a final walkthrough before we call it done.",
                },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg">{step.t}</h3>
                    <p className="mt-1 text-muted-foreground">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <figure className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="flex gap-1 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 font-display text-xl leading-relaxed">
              “Tad repainted the whole exterior of our house in Palmer Ranch. Straight lines, no
              overspray on the pavers, and he actually answers the phone. We've since had him do our
              cabinets.”
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground">
              Karen M. — Sarasota, FL
            </figcaption>
            <Link
              to="/reviews"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Read more reviews
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </figure>
        </div>
      </section>

      <CallBanner />
    </>
  );
}

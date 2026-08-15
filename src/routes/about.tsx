import { createFileRoute } from "@tanstack/react-router";
import { Brush, HandHeart, Ruler, CalendarClock } from "lucide-react";
import interiorImg from "@/assets/interior.jpg";
import { business } from "@/lib/business";
import { CallBanner } from "@/components/CallBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tad Dailey Painting | 15+ Years in Sarasota, FL" },
      {
        name: "description",
        content:
          "Tad Dailey Painting is a family-owned Sarasota painting company with 15+ years of experience in residential and light-commercial painting, staining and coatings.",
      },
      { property: "og:title", content: "About Tad Dailey Painting — 15+ Years in Sarasota" },
      {
        property: "og:description",
        content:
          "Family-owned, locally rooted, and on the job ourselves. 15+ years of painting Sarasota homes and small commercial spaces.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Brush,
    title: "Craftsmanship",
    body: "Prep is most of the job. Sanding, caulking, priming and clean cut lines are what make a paint job last in Florida sun and humidity.",
  },
  {
    icon: CalendarClock,
    title: "Reliability",
    body: "We show up when we say we will, keep you posted on the schedule, and finish before starting the next project.",
  },
  {
    icon: Ruler,
    title: "Attention to detail",
    body: "Hardware labeled, pavers covered, edges crisp, and a walkthrough at the end so nothing gets missed.",
  },
  {
    icon: HandHeart,
    title: "Neighborly service",
    body: "Family-owned and local. Most of our work comes from repeat customers and their referrals — we intend to keep it that way.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              About us
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl">
              {business.yearsExperience} years of painting Sarasota, one home at a time
            </h1>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Tad Dailey Painting, LLC is a family-owned painting company based right here in
                Sarasota. Tad started painting more than fifteen years ago and still walks every
                estimate and every final inspection himself.
              </p>
              <p>
                In that time we've learned exactly what Gulf Coast weather does to a finish — the
                sun that chalks a south-facing wall, the salt air on Siesta and Longboat, the summer
                storms that find every unsealed gap. So we spend the time on washing, patching and
                priming that a lot of crews skip, and we use coatings rated for this climate.
              </p>
              <p>
                We work on single rooms, whole-house interiors and exteriors, cabinets, decks,
                epoxy floors and small commercial spaces — offices, salons, rentals and shops. Every
                price comes from a real conversation and a real visit, not an online calculator.
              </p>
            </div>
          </div>
          <img
            src={interiorImg}
            alt="Freshly painted bright living room interior in a Sarasota home"
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
          />
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl sm:text-4xl">What we stand on</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v.title} className="rounded-xl border border-border bg-card p-7 shadow-soft">
                <v.icon className="size-7 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-xl">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 rounded-xl border border-border bg-card p-6 text-muted-foreground shadow-soft">
            <strong className="text-foreground">Licensed &amp; insured.</strong> We carry liability
            coverage and workers' compensation for every crew member on your property, and we're
            happy to provide certificates on request.
          </p>
        </div>
      </section>

      <CallBanner heading="Talk to Tad directly" body="Call and you'll reach the person who will actually be looking at your project — usually the same day." />
    </>
  );
}

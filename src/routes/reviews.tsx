import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { CallBanner } from "@/components/CallBanner";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Tad Dailey Painting, Sarasota FL" },
      {
        name: "description",
        content:
          "What Sarasota homeowners say about Tad Dailey Painting — interior and exterior painting, cabinets and epoxy floors done on time and done right.",
      },
      { property: "og:title", content: "Customer Reviews | Tad Dailey Painting" },
      {
        property: "og:description",
        content: "Reviews from homeowners across Sarasota, Venice, Bradenton and Lakewood Ranch.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    quote:
      "Tad repainted the whole exterior of our house in Palmer Ranch. Straight lines, no overspray on the pavers, and he actually answers the phone.",
    name: "Karen M.",
    place: "Sarasota, FL",
  },
  {
    quote:
      "Our kitchen cabinets look like new furniture. They came back smooth with zero brush marks and the hardware went right back where it belonged.",
    name: "Dave R.",
    place: "Lakewood Ranch, FL",
  },
  {
    quote:
      "The garage floor coating has survived two summers of hot tires and a dropped bike. Easy to hose off, still glossy.",
    name: "Miguel A.",
    place: "Venice, FL",
  },
  {
    quote:
      "Showed up on the day he promised, finished a day early, and cleaned up better than he found it. Rare these days.",
    name: "Susan T.",
    place: "Osprey, FL",
  },
  {
    quote:
      "We had mildew streaks all over the north side of the house. They soft-washed it and repainted only what needed it, which saved us real money.",
    name: "Brian K.",
    place: "Bradenton, FL",
  },
  {
    quote:
      "Second time using Tad — interior first, then the deck stain. Same care both times. We recommend him to everyone on our street.",
    name: "Lorraine P.",
    place: "Siesta Key, FL",
  },
];

function ReviewsPage() {
  return (
    <>
      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Reviews</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Neighbors who'd hire us again</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Most of our work comes from referrals. Here's a sample of what customers have told us —
            and you're welcome to ask for references in your neighborhood.
          </p>
        </div>
      </section>

      <section className="section-y">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <Quote className="size-7 text-accent/70" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-relaxed">“{r.quote}”</blockquote>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.place}</p>
                </div>
                <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl px-5 text-center text-sm text-muted-foreground">
          Have a Google Business profile link? Drop it in here and we'll wire this page straight to
          your live Google reviews.
        </p>
      </section>

      <CallBanner heading="Let's add you to this list" body="Call for a free estimate and see why our customers keep calling back." />
    </>
  );
}

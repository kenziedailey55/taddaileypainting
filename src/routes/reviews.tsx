import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote, ExternalLink } from "lucide-react";
import { CallBanner } from "@/components/CallBanner";
import { business } from "@/lib/business";
import { reviews, reviewStats } from "@/lib/reviews";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.state,
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(reviewStats.average),
    reviewCount: String(reviewStats.count),
    bestRating: "5",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewBody: r.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
    },
  })),
};

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Google Reviews | Tad Dailey Painting, Sarasota FL" },
      {
        name: "description",
        content:
          "Read Google reviews for Tad Dailey Painting — Sarasota interior and exterior painting, cabinet refinishing, epoxy floors and pressure washing rated 5 stars by local homeowners.",
      },
      { property: "og:title", content: "Google Reviews | Tad Dailey Painting" },
      {
        property: "og:description",
        content:
          "5-star reviews from homeowners across Sarasota, Venice, Bradenton and Lakewood Ranch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: ReviewsPage,
});

function Stars({ rating, className = "size-4" }: { rating: number; className?: string }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < rating ? "fill-current" : "opacity-30"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

const dateFmt = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });

function ReviewsPage() {
  return (
    <>
      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Reviews</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Neighbors who'd hire us again</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Most of our work comes from referrals and Google. Here's what customers across Sarasota
            County have said — and you're welcome to ask for references in your neighborhood.
          </p>
        </div>
      </section>

      <section className="pt-12 md:pt-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-7 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div>
                <p className="text-5xl leading-none font-semibold">{reviewStats.average}</p>
                <Stars rating={Math.round(reviewStats.average)} className="mt-2 size-5" />
              </div>
              <div className="border-l border-border pl-5">
                <p className="font-semibold">Google rating</p>
                <p className="text-sm text-muted-foreground">
                  Based on {reviewStats.count} customer reviews
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={business.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Read reviews on Google
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
              <a
                href={business.googleWriteReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Leave a review
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <li
              key={r.name + r.date}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex items-start justify-between gap-3">
                <Quote className="size-7 text-accent/70" aria-hidden="true" />
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {r.source}
                </span>
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed">“{r.quote}”</blockquote>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {[r.place, dateFmt.format(new Date(r.date))].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <Stars rating={r.rating} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CallBanner
        heading="Let's add you to this list"
        body="Call for a free estimate and see why our customers keep calling back."
      />
    </>
  );
}

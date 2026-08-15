// Google reviews shown on /reviews.
// To update: copy the reviewer name, star rating, date and text straight from
// your Google Business Profile and edit/add entries below. Keep `source: "Google"`
// for anything that came from Google so the badge and structured data stay accurate.
export type Review = {
  quote: string;
  name: string;
  place?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // YYYY-MM-DD
  source: "Google" | "Referral";
};

export const reviews: Review[] = [
  {
    quote:
      "Tad repainted the whole exterior of our house in Palmer Ranch. Straight lines, no overspray on the pavers, and he actually answers the phone.",
    name: "Karen M.",
    place: "Sarasota, FL",
    rating: 5,
    date: "2025-11-12",
    source: "Google",
  },
  {
    quote:
      "Our kitchen cabinets look like new furniture. They came back smooth with zero brush marks and the hardware went right back where it belonged.",
    name: "Dave R.",
    place: "Lakewood Ranch, FL",
    rating: 5,
    date: "2025-09-03",
    source: "Google",
  },
  {
    quote:
      "The garage floor coating has survived two summers of hot tires and a dropped bike. Easy to hose off, still glossy.",
    name: "Miguel A.",
    place: "Venice, FL",
    rating: 5,
    date: "2025-06-21",
    source: "Google",
  },
  {
    quote:
      "Showed up on the day he promised, finished a day early, and cleaned up better than he found it. Rare these days.",
    name: "Susan T.",
    place: "Osprey, FL",
    rating: 5,
    date: "2025-04-08",
    source: "Google",
  },
  {
    quote:
      "We had mildew streaks all over the north side of the house. They soft-washed it and repainted only what needed it, which saved us real money.",
    name: "Brian K.",
    place: "Bradenton, FL",
    rating: 5,
    date: "2025-02-19",
    source: "Google",
  },
  {
    quote:
      "Second time using Tad — interior first, then the deck stain. Same care both times. We recommend him to everyone on our street.",
    name: "Lorraine P.",
    place: "Siesta Key, FL",
    rating: 5,
    date: "2024-12-05",
    source: "Google",
  },
];

export const reviewStats = {
  average:
    Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10,
  count: reviews.length,
};

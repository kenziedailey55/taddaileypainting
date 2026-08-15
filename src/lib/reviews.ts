// Google reviews shown on /reviews.
// To update: copy the reviewer name, star rating, date and text straight from
// your Google Business Profile and edit/add entries below. Keep `source: "Google"`
// for anything that came from Google so the badge and structured data stay accurate.
export type Review = {
  quote: string;
  name: string;
  place?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // YYYY
  source: "Google" | "Referral";
};

export const reviews: Review[] = 
  {
    quote:
      "Tad worked with Abide Designs to completely refresh an entire orthodontist office in Lakewood Ranch. The punctuality and professionalism of both him and his team is not to be overlooked. We will definitely do other projects with Tad and his crew in the future and will continue to recommend them for future projects in our area.:)",
    name: "Kati Ramage.",
    place: "Lakewood Ranch, FL",
    rating: 5,
    date: "2022",
    source: "Google",
  },
  {
    quote:
      "Tad Dailey Painting just finished the exterior of my home and their attention to detail was incredible. We have one more job to finish and that is staining the wood on the porch. He is being very diligent and making sure he knows exactly what type of wood it is so he can treat and stain it properly. I will recommend them again and again!.",
    name: "Mary Pat Radford.",
    place: "Sarasota, FL",
    rating: 5,
    date: "2024",
    source: "Google",
  },;

export const reviewStats = {
  average:
    Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10,
  count: reviews.length,
};

import { createFileRoute } from "@tanstack/react-router";
import interiorImg from "@/assets/interior.jpg";
import heroImg from "@/assets/hero-exterior.jpg";
import epoxyImg from "@/assets/epoxy.jpg";
import cabinetsImg from "@/assets/cabinets.jpg";
import stainingImg from "@/assets/staining.jpg";
import washingImg from "@/assets/pressure-washing.jpg";
import { CallBanner } from "@/components/CallBanner";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Painting Project Gallery | Tad Dailey Painting Sarasota" },
      {
        name: "description",
        content:
          "Before-and-after photos of interior and exterior painting, cabinet refinishing, epoxy garage floors, staining and pressure washing projects in Sarasota, FL.",
      },
      { property: "og:title", content: "Project Gallery | Tad Dailey Painting" },
      {
        property: "og:description",
        content:
          "Before-and-after painting, cabinet, epoxy and pressure washing projects around Sarasota, Florida.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const projects = [
  {
    title: "Exterior repaint — Palmer Ranch",
    detail: "Chalked stucco washed, patched and finished in two coats of elastomeric.",
    image: heroImg,
  },
  {
    title: "Whole-home interior — Lakewood Ranch",
    detail: "Walls, ceilings and trim in a warm off-white with satin enamel doors.",
    image: interiorImg,
  },
  {
    title: "Epoxy garage floor — Venice",
    detail: "Ground, crack-filled and coated with a full flake broadcast system.",
    image: epoxyImg,
  },
  {
    title: "Cabinet refinishing — Siesta Key",
    detail: "Oak cabinets degreased, bond-primed and sprayed in cabinet enamel.",
    image: cabinetsImg,
  },
  {
    title: "Deck &amp; pergola staining — Osprey",
    detail: "Sanded, brightened and sealed with a UV-resistant penetrating stain.",
    image: stainingImg,
  },
  {
    title: "Driveway pressure washing — Bradenton",
    detail: "Years of algae removed from concrete and pavers with a surface cleaner.",
    image: washingImg,
  },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Gallery</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Before &amp; after around Sarasota</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A look at recent projects. Slide your eye from left to right on each card: the left panel
            is where we started, the right is the finished work.
          </p>
          <p className="mt-4 rounded-lg border border-dashed border-border bg-card p-4 text-sm text-muted-foreground">
            Placeholder photos for now — swap in your own project photos by replacing the image files
            in <code>src/assets</code> and updating the captions on this page.
          </p>
        </div>
      </section>

      <section className="section-y">
        <ul className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="grid grid-cols-2 gap-px bg-border">
                <figure className="relative">
                  <img
                    src={p.image}
                    alt={`${p.title} before work began`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover opacity-70 saturate-50 contrast-75"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-foreground/75 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative">
                  <img
                    src={p.image}
                    alt={`${p.title} after completion`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                    After
                  </figcaption>
                </figure>
              </div>
              <div className="p-6">
                <h2 className="text-xl">{p.title.replace("&amp;", "&")}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CallBanner heading="Want your project to look like this?" body="Call and we'll set up a time to come see the space in person." />
    </>
  );
}

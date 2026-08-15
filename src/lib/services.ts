import interiorImg from "@/assets/interior.jpg";
import heroImg from "@/assets/hero-exterior.jpg";
import epoxyImg from "@/assets/epoxy.jpg";
import cabinetsImg from "@/assets/cabinets.jpg";
import stainingImg from "@/assets/staining.jpg";
import washingImg from "@/assets/pressure-washing.jpg";

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  includes: string[];
  image: string;
  icon: "roller" | "home" | "wood" | "epoxy" | "cabinet" | "spray";
};

export const services: Service[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    blurb:
      "Walls, ceilings, trim and doors finished clean and straight, with your home protected from the first drop cloth to the final walkthrough.",
    includes: [
      "Furniture moved and covered, floors masked",
      "Patching, caulking and spot priming",
      "Two finish coats of premium low-VOC paint",
      "Daily cleanup and a punch-list walkthrough",
    ],
    image: interiorImg,
    icon: "roller",
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    blurb:
      "Stucco, block, siding, soffits and trim coated to stand up to Gulf Coast sun, salt air and summer storms.",
    includes: [
      "Pressure wash and mildew treatment",
      "Crack repair, caulking and masonry primer",
      "Elastomeric or 100% acrylic finish coats",
      "Windows, pavers and landscaping masked off",
    ],
    image: heroImg,
    icon: "home",
  },
  {
    slug: "wood-staining",
    title: "Wood Staining",
    blurb:
      "Decks, docks, pergolas, fences and front doors brought back to life with stains and sealers built for Florida humidity.",
    includes: [
      "Sanding, cleaning and brightening",
      "Color sampling on your actual wood",
      "Penetrating stain plus UV-resistant sealer",
      "Maintenance guidance for the seasons ahead",
    ],
    image: stainingImg,
    icon: "wood",
  },
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring & Coatings",
    blurb:
      "Garage, lanai, warehouse and shop floors coated in a seamless, easy-to-clean finish that shrugs off hot tires and spills.",
    includes: [
      "Diamond grinding and crack repair",
      "Full-broadcast flake or solid color systems",
      "Polyaspartic topcoat for UV and chemical resistance",
      "Clear return-to-service timeline",
    ],
    image: epoxyImg,
    icon: "epoxy",
  },
  {
    slug: "cabinet-refinishing",
    title: "Cabinet Painting & Refinishing",
    blurb:
      "A new kitchen look without a remodel — doors sprayed to a smooth factory-style finish in the color you choose.",
    includes: [
      "Degrease, sand and bond-prime every surface",
      "Doors and drawers sprayed off-site or in a dust barrier",
      "Durable cabinet-grade enamel",
      "Hardware removed, labeled and reinstalled",
    ],
    image: cabinetsImg,
    icon: "cabinet",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    blurb:
      "Driveways, pavers, walkways, pool decks and house exteriors cleaned of the mildew and algae our climate loves.",
    includes: [
      "Soft wash for painted and delicate surfaces",
      "Surface cleaning for concrete and pavers",
      "Roof, gutter and soffit cleaning",
      "Plant-safe detergents and full rinse-down",
    ],
    image: washingImg,
    icon: "spray",
  },
];

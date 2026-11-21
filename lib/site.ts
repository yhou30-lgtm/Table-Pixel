// All editable content lives here. Change text, prices or packages in this one file.

export const SITE = {
  name: "Table & Pixel",
  tagline: "Restaurant website studio",
  description:
    "Table & Pixel builds beautiful, modern websites for independent restaurants in the United States, so customers can discover, explore and visit them.",
  // Set this to your real domain before launch. Used for SEO tags and the sitemap.
  url: "https://tableandpixel.example",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
];

export type Pkg = {
  id: string;
  name: string;
  price: number;
  blurb: string;
  featured?: boolean;
  includes: string[];
};

// NOTE: package contents are a first draft. Confirm every line before launch.
export const PACKAGES: Pkg[] = [
  {
    id: "starter",
    name: "Starter",
    price: 299,
    blurb: "A single, polished page with everything a hungry visitor needs.",
    includes: [
      "One-page responsive website",
      "Hours, address and map",
      "Menu section (text or PDF link)",
      "Contact and reservation links",
      "Basic search engine setup",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 399,
    blurb: "A complete site for restaurants that want to tell their story.",
    featured: true,
    includes: [
      "Up to 5 pages (Home, Menu, About, Gallery, Contact)",
      "Designed menu page",
      "Photo gallery",
      "Online ordering or reservation link",
      "Search engine setup for every page",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 499,
    blurb: "A richer site with extra pages and more design attention.",
    includes: [
      "Up to 8 pages",
      "Everything in Professional",
      "Events or private dining page",
      "Custom page layouts and subtle animations",
      "Google Business Profile guidance",
    ],
  },
];

// NOTE: add-on prices are placeholders. Confirm before launch.
export const ADDONS = [
  { name: "Extra page", price: "$50 per page", note: "Beyond the pages included in your package." },
  { name: "Copywriting", price: "$100", note: "We write the text for your pages from a short interview." },
  { name: "Menu updates", price: "$25 per update", note: "Changes to dishes or prices after launch." },
  { name: "Monthly care plan", price: "$29 per month", note: "Small text and photo changes, kept up to date." },
];

export const PRICING_NOTES = [
  "Domain name and hosting are paid to the provider and are not included in the package price.",
  "Photography is not included. You can supply your own photos, or we can work with what you have.",
  "Prices are in US dollars.",
];

export const SERVICES = [
  {
    title: "Design",
    text: "A site that looks like your restaurant feels: your food, your room, your people, set in clean typography and generous space.",
  },
  {
    title: "Menus that read well",
    text: "Menus shown as real text, not a squinting PDF on a phone, so they are easy to read and easy for search engines to find.",
  },
  {
    title: "Built for phones",
    text: "Most people look up a restaurant on their phone. Every site is designed for the small screen first.",
  },
  {
    title: "Found on search",
    text: "Clear page titles, descriptions and structure so people searching for a place to eat can find you.",
  },
];

export type Concept = {
  slug: string;
  name: string;
  kind: string;
  blurb: string;
  palette: { bg: string; ink: string; accent: string; tile: string[] };
  headline: string;
  serif?: boolean;
  notes: string[];
};

// These are fictional concept projects, not real client work.
export const CONCEPTS: Concept[] = [
  {
    slug: "osteria-alba",
    name: "Osteria Alba",
    kind: "Modern Italian restaurant",
    blurb:
      "A warm, editorial layout for a fictional trattoria: a seasonal menu front and center, and a reservation button always within reach.",
    palette: { bg: "#F1E8DA", ink: "#2A1F1A", accent: "#8A3B2C", tile: ["#C9A88A", "#8A3B2C", "#D9C4A5"] },
    headline: "Handmade pasta, slow evenings.",
    notes: ["Seasonal menu page", "Reservation call to action", "Warm terracotta palette"],
  },
  {
    slug: "mizu-kitchen",
    name: "Mizu Kitchen",
    kind: "Contemporary Japanese restaurant",
    blurb:
      "A quiet, spacious design for a fictional omakase counter: restrained type, deep colors and one clear way to book a seat.",
    palette: { bg: "#17191A", ink: "#EDEBE4", accent: "#A9AE92", tile: ["#2A2F2E", "#3D4540", "#566057"] },
    headline: "Twelve seats. One menu.",
    notes: ["Dark, minimal layout", "Tasting menu page", "Booking-first navigation"],
  },
  {
    slug: "little-oak-cafe",
    name: "Little Oak Café",
    kind: "Independent neighborhood café",
    blurb:
      "A friendly, bright site for a fictional corner café: opening hours up top, a simple menu and a gallery of the daily bakes.",
    palette: { bg: "#FBF8F1", ink: "#2E2A24", accent: "#777C60", tile: ["#E7DFC9", "#C8CBB1", "#D8B98F"] },
    headline: "Coffee, bread, and a good seat.",
    notes: ["Hours and location up top", "Simple menu", "Daily bakes gallery"],
  },
];

// Contact form. Leave FORM_ENDPOINT empty until you connect a form service (see README).
export const FORM_ENDPOINT = "";

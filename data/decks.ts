export type BrandDeck = {
  title: string;
  slug: string;
  category: string;
  year: string;
  pages: number;
  industry: string;
  summary: string;
  cover: string;
  pdf: string;
};

const deckPath = (slug: string) => `/decks/${slug}`;

export const brandDecks: BrandDeck[] = [
  {
    title: "Future Medicine Brand System",
    slug: "future-medicine",
    category: "Brand Campaign Deck",
    year: "2026",
    pages: 42,
    industry: "Biotech",
    summary: "A complete campaign visual system for a future-facing medical brand.",
    cover: `${deckPath("future-medicine")}/cover.jpg`,
    pdf: `${deckPath("future-medicine")}/brand-system.pdf`
  },
  {
    title: "White Lab Visual Proposal",
    slug: "white-lab",
    category: "Visual Identity Proposal",
    year: "2026",
    pages: 36,
    industry: "Life Science",
    summary: "A clinical visual language deck built around precision, trust and cinematic restraint.",
    cover: `${deckPath("white-lab")}/cover.jpg`,
    pdf: `${deckPath("white-lab")}/brand-system.pdf`
  },
  {
    title: "Mirror Portal Campaign Bible",
    slug: "mirror-portal",
    category: "Campaign Worldbuilding",
    year: "2026",
    pages: 48,
    industry: "Entertainment",
    summary: "A narrative-driven image system for short film posters, key visuals and social launch assets.",
    cover: `${deckPath("mirror-portal")}/cover.jpg`,
    pdf: `${deckPath("mirror-portal")}/brand-system.pdf`
  }
];

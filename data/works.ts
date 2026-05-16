export type Work = {
  title: string;
  type: string;
  year: string;
  slug: string;
  concept: string;
  role: string;
  tools: string[];
  youtubeId: string;
  atmosphere: string;
  layout: "featured" | "standard" | "tall" | "wide";
};

export function getYoutubeThumbnail(youtubeId: string, quality: "default" | "mq" | "hq" | "maxres" = "maxres") {
  return `https://img.youtube.com/vi/${youtubeId}/${quality}default.jpg`;
}

export function getYoutubeEmbed(youtubeId: string) {
  return `https://www.youtube.com/embed/${youtubeId}`;
}

export const works: Work[] = [
  {
    title: "Molecular Light",
    type: "AI Brand Film",
    year: "2026",
    slug: "molecular-light",
    concept: "A luminous brand film imagining biotech matter as living cinematic architecture.",
    role: "Creative direction, AI visual development, cinematic edit, prompt system design",
    tools: ["Runway", "Midjourney", "After Effects", "DaVinci Resolve"],
    youtubeId: "YOUR_VIDEO_ID",
    atmosphere: "Biotech / luminous / controlled",
    layout: "featured"
  },
  {
    title: "White Lab",
    type: "Biotech TVC",
    year: "2026",
    slug: "white-lab",
    concept: "Clinical purity translated into quiet cinematic tension and premium product light.",
    role: "Visual direction, AI scene development, campaign mood system",
    tools: ["Runway", "Midjourney", "After Effects"],
    youtubeId: "YOUR_VIDEO_ID",
    atmosphere: "White space / precision / sterile calm",
    layout: "standard"
  },
  {
    title: "Particle Memory",
    type: "Experimental Visual",
    year: "2026",
    slug: "particle-memory",
    concept: "An abstract memory field rendered through tactile light, dust, and image decay.",
    role: "Concept, AI visual research, motion treatment",
    tools: ["Runway", "ComfyUI", "DaVinci Resolve"],
    youtubeId: "YOUR_VIDEO_ID",
    atmosphere: "Texture / memory / image decay",
    layout: "standard"
  },
  {
    title: "Digital Insect",
    type: "AI Visual Study",
    year: "2026",
    slug: "digital-insect",
    concept: "A macro visual study where synthetic biology meets product-grade cinematic detail.",
    role: "AI look development, prompt design, motion exploration",
    tools: ["Midjourney", "Runway", "After Effects"],
    youtubeId: "YOUR_VIDEO_ID",
    atmosphere: "Macro / synthetic biology / detail",
    layout: "tall"
  },
  {
    title: "Future Medicine",
    type: "Campaign Film",
    year: "2026",
    slug: "future-medicine",
    concept: "A future-facing campaign film shaped around medical trust, human scale, and precision.",
    role: "Campaign concept, visual direction, AI film pipeline",
    tools: ["Runway", "Midjourney", "After Effects", "DaVinci Resolve"],
    youtubeId: "YOUR_VIDEO_ID",
    atmosphere: "Human trust / future medicine / clarity",
    layout: "wide"
  },
  {
    title: "Mirror Portal",
    type: "AI Short Film",
    year: "2026",
    slug: "mirror-portal",
    concept: "A surreal short film about identity, reflection, and passage through a visual threshold.",
    role: "Film concept, storyboard, AI video direction, edit",
    tools: ["Runway", "Midjourney", "Premiere Pro", "DaVinci Resolve"],
    youtubeId: "YOUR_VIDEO_ID",
    atmosphere: "Surreal / reflective / threshold",
    layout: "standard"
  }
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}

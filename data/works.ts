export type Work = {
  title: string;
  type: string;
  year: string;
  slug: string;
  concept: string;
  role: string;
  tools: string[];
  bvid: string;
  atmosphere: string;
  layout: "featured" | "standard" | "tall" | "wide";
};

export function getBilibiliEmbed(bvid: string) {
  return `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&autoplay=0`;
}

export function getVideoThumbnail(bvid: string) {
  if (!bvid) return "";
  return "";
}

export const works: Work[] = [
  {
    title: "公司宣传片",
    type: "品牌影片",
    year: "2025",
    slug: "company-reel",
    concept: "福建创科文化传媒品牌宣传片，展示品牌视觉系统与创意能力。",
    role: "创意方向、AI 视觉开发、剪辑",
    tools: ["After Effects", "DaVinci Resolve", "Midjourney"],
    bvid: "BV1mCLc6dEpk",
    atmosphere: "品牌 / 专业 / 视觉",
    layout: "featured"
  },
  {
    title: "AI 创意动画",
    type: "AI 动态视觉",
    year: "2025",
    slug: "ai-creative",
    concept: "AI 驱动的创意动画短片，探索视觉叙事与动态设计。",
    role: "AI 视觉开发、动画设计、创意方向",
    tools: ["Runway", "Midjourney", "After Effects"],
    bvid: "BV1mCLc6dEVm",
    atmosphere: "创意 / AI / 动态",
    layout: "standard"
  },
  {
    title: "品牌 LOGO AI 动态",
    type: "品牌视觉",
    year: "2025",
    slug: "logo-ai-motion",
    concept: "品牌 LOGO 的 AI 动态效果设计，赋予静态标识生命力。",
    role: "AI 动态设计、品牌视觉、动画",
    tools: ["Runway", "After Effects"],
    bvid: "BV1TCLc6oEBj",
    atmosphere: "品牌 / 动态 / 标识",
    layout: "standard"
  },
  {
    title: "Hotel Promotional Video",
    type: "商业宣传片",
    year: "2025",
    slug: "hotel-promo",
    concept: "酒店品牌宣传视频，以电影化画面呈现空间与氛围。",
    role: "视觉方向、剪辑、调色",
    tools: ["DaVinci Resolve", "After Effects"],
    bvid: "BV1MCLc6oEc7",
    atmosphere: "商业 / 空间 / 质感",
    layout: "tall"
  },
  {
    title: "创意视频",
    type: "创意短片",
    year: "2025",
    slug: "creative-video",
    concept: "实验性创意短片，融合动态设计与视觉特效。",
    role: "概念、视觉开发、动态设计",
    tools: ["Runway", "After Effects", "ComfyUI"],
    bvid: "BV1MCLc6oEg4",
    atmosphere: "实验 / 创意 / 视觉",
    layout: "wide"
  },
  {
    title: "Artist Videos",
    type: "艺人视觉",
    year: "2025",
    slug: "artist-videos",
    concept: "艺人视觉视频，打造具有辨识度的视觉风格。",
    role: "视觉方向、调色、剪辑",
    tools: ["DaVinci Resolve", "Premiere Pro", "After Effects"],
    bvid: "BV1mCLc6dEpZ",
    atmosphere: "艺人 / 视觉 / 风格",
    layout: "standard"
  }
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}

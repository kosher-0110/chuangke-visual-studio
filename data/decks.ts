export type BrandDeck = {
  title: string;
  slug: string;
  category: string;
  year: string;
  pages: number;
  industry: string;
  summary: string;
  pdf: string;
  featured: boolean;
};

const deckPath = (slug: string) => `/decks/${slug}`;

export const brandDecks: BrandDeck[] = [
  {
    title: "ALL 夜乐园",
    slug: "all-yele",
    category: "品牌全案",
    year: "2025",
    pages: 40,
    industry: "娱乐 / 夜经济",
    summary: "夜乐园品牌视觉系统，涵盖 LOGO、色彩体系与空间导视。",
    pdf: `${deckPath("all-yele")}/brand-system.pdf`,
    featured: true
  },
  {
    title: "Golden Face",
    slug: "golden-face",
    category: "品牌全案",
    year: "2025",
    pages: 35,
    industry: "消费品牌",
    summary: "Golden Face 品牌提案与视觉系统，从主视觉到传播物料完整落地。",
    pdf: `${deckPath("golden-face")}/brand-system.pdf`,
    featured: true
  },
  {
    title: "莫对月",
    slug: "moduiyue",
    category: "品牌全案",
    year: "2025",
    pages: 25,
    industry: "文化 / 生活方式",
    summary: "莫对月品牌视觉提案，以东方美学构建品牌叙事与视觉系统。",
    pdf: `${deckPath("moduiyue")}/brand-system.pdf`,
    featured: true
  },
  {
    title: "MAKE CLUB",
    slug: "make-club",
    category: "品牌全案",
    year: "2025",
    pages: 20,
    industry: "消费空间",
    summary: "MAKE CLUB 品牌项目书，品牌定位、视觉系统与空间体验方案。",
    pdf: `${deckPath("make-club")}/brand-system.pdf`,
    featured: false
  },
  {
    title: "彼岸码头 LOGO",
    slug: "bian-matou",
    category: "品牌视觉",
    year: "2025",
    pages: 8,
    industry: "餐饮",
    summary: "彼岸码头品牌 LOGO 设计与基础视觉识别规范。",
    pdf: `${deckPath("bian-matou")}/brand-system.pdf`,
    featured: false
  },
  {
    title: "坪山仓库酒馆大排档",
    slug: "pingshan-cangku",
    category: "品牌视觉",
    year: "2025",
    pages: 15,
    industry: "餐饮 / 酒馆",
    summary: "坪山仓库酒馆大排档 LOGO 设计与品牌视觉识别系统。",
    pdf: `${deckPath("pingshan-cangku")}/brand-system.pdf`,
    featured: false
  },
  {
    title: "热血工匠",
    slug: "rexue-gongjiang",
    category: "品牌全案",
    year: "2025",
    pages: 15,
    industry: "消费品牌",
    summary: "热血工匠品牌项目书，品牌策略与视觉系统完整方案。",
    pdf: `${deckPath("rexue-gongjiang")}/brand-system.pdf`,
    featured: false
  },
  {
    title: "中洲岛 · 汇福城",
    slug: "zhongzhoudao",
    category: "品牌全案",
    year: "2025",
    pages: 30,
    industry: "商业地产",
    summary: "中洲岛·汇福城品牌视觉全案，商业综合体品牌系统建设。",
    pdf: `${deckPath("zhongzhoudao")}/brand-system.pdf`,
    featured: false
  }
];

export const featuredDecks = brandDecks.filter((d) => d.featured);

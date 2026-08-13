export type Resource = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
};

export const resources: Resource[] = [
  {
    title: "When Should You See a Fertility Specialist?",
    slug: "when-to-see-a-fertility-specialist",
    category: "Fertility Basics",
    excerpt: "A practical guide to timing your first fertility consultation.",
    readTime: "5 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/Vpr5dhHLUquV3fweJNOH/image.png",
  },
  {
    title: "IUI vs IVF: Understanding the Difference",
    slug: "iui-vs-ivf",
    category: "IVF",
    excerpt: "How these two treatments differ, and when each may be considered.",
    readTime: "6 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/SgvBPTR0wwyzdgHuP01M/image.png",
  },
  {
    title: "Understanding ICSI, PICSI and IMSI",
    slug: "understanding-icsi-picsi-imsi",
    category: "Advanced Fertility",
    excerpt: "A plain-English look at advanced sperm-selection techniques.",
    readTime: "7 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/W2QGom6BC4lFmZOELh3z/image.png",
  },
  {
    title: "What Is Endometrial Receptivity Analysis (ERA)?",
    slug: "what-is-era",
    category: "Advanced Fertility",
    excerpt: "How ERA testing helps identify the right day for embryo transfer.",
    readTime: "5 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/Fx4YQhE80rS4W8lIG2s3/image.png",
  },
  {
    title: "PCOS and Fertility: What to Know",
    slug: "pcos-and-fertility",
    category: "PCOS / PCOD",
    excerpt: "How PCOS can affect fertility, and what evaluation looks like.",
    readTime: "6 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/bl5s2DYkMAT8G4d5hYrv/image.png",
  },
  {
    title: "Understanding Male Infertility",
    slug: "understanding-male-infertility",
    category: "Male Fertility",
    excerpt: "Common causes of male-factor infertility and how they're evaluated.",
    readTime: "6 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/CnbWOuAFfpA81VGuL9N1/image.png",
  },
];

export const resourceCategories = [
  "Fertility Basics",
  "IVF",
  "IUI",
  "Infertility",
  "Male Fertility",
  "Women's Health",
  "PCOS / PCOD",
  "Pregnancy",
  "Advanced Fertility",
  "Treatment Guides",
  "Case Studies",
];
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  author: string;
  authorImage?: string;
  date: string;
  featured?: boolean;
  tags?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "When Should You See a Fertility Specialist?",
    slug: "when-to-see-a-fertility-specialist",
    category: "Fertility Basics",
    excerpt: "A practical guide to timing your first fertility consultation. Learn the key signs and when to seek help.",
    readTime: "5 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/Vpr5dhHLUquV3fweJNOH/image.png",
    author: "Dr. Mandavi Rai",
    date: "March 15, 2024",
    featured: true,
    tags: ["Fertility", "Consultation", "Timing"]
  },
  {
    id: "2",
    title: "IUI vs IVF: Understanding the Difference",
    slug: "iui-vs-ivf",
    category: "IVF",
    excerpt: "How these two treatments differ, and when each may be considered. A comprehensive comparison guide.",
    readTime: "6 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/SgvBPTR0wwyzdgHuP01M/image.png",
    author: "Dr. Mandavi Rai",
    date: "March 12, 2024",
    featured: true,
    tags: ["IUI", "IVF", "Treatment Options"]
  },
  {
    id: "3",
    title: "Understanding ICSI, PICSI and IMSI",
    slug: "understanding-icsi-picsi-imsi",
    category: "Advanced Fertility",
    excerpt: "A plain-English look at advanced sperm-selection techniques and how they improve success rates.",
    readTime: "7 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/W2QGom6BC4lFmZOELh3z/image.png",
    author: "Dr. Mandavi Rai",
    date: "March 10, 2024",
    tags: ["ICSI", "PICSI", "IMSI", "Advanced Techniques"]
  },
  {
    id: "4",
    title: "What Is Endometrial Receptivity Analysis (ERA)?",
    slug: "what-is-era",
    category: "Advanced Fertility",
    excerpt: "How ERA testing helps identify the right day for embryo transfer, maximizing success chances.",
    readTime: "5 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/Fx4YQhE80rS4W8lIG2s3/image.png",
    author: "Dr. Mandavi Rai",
    date: "March 8, 2024",
    tags: ["ERA", "Embryo Transfer", "Advanced Testing"]
  },
  {
    id: "5",
    title: "PCOS and Fertility: What to Know",
    slug: "pcos-and-fertility",
    category: "PCOS / PCOD",
    excerpt: "How PCOS can affect fertility, and what evaluation and treatment options look like.",
    readTime: "6 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/bl5s2DYkMAT8G4d5hYrv/image.png",
    author: "Dr. Mandavi Rai",
    date: "March 5, 2024",
    tags: ["PCOS", "PCOD", "Women's Health"]
  },
  {
    id: "6",
    title: "Understanding Male Infertility",
    slug: "understanding-male-infertility",
    category: "Male Fertility",
    excerpt: "Common causes of male-factor infertility and how they're evaluated and treated.",
    readTime: "6 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/CnbWOuAFfpA81VGuL9N1/image.png",
    author: "Dr. Mandavi Rai",
    date: "March 3, 2024",
    tags: ["Male Infertility", "Sperm Health", "Evaluation"]
  },
  {
    id: "7",
    title: "5 Lifestyle Changes That Can Boost Fertility",
    slug: "lifestyle-changes-boost-fertility",
    category: "Fertility Basics",
    excerpt: "Simple lifestyle modifications that can positively impact your fertility journey.",
    readTime: "4 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/Vpr5dhHLUquV3fweJNOH/image.png",
    author: "Dr. Mandavi Rai",
    date: "February 28, 2024",
    tags: ["Lifestyle", "Wellness", "Natural Fertility"]
  },
  {
    id: "8",
    title: "Understanding IVF Success Rates",
    slug: "understanding-ivf-success-rates",
    category: "IVF",
    excerpt: "What factors influence IVF success and how to interpret success rate statistics.",
    readTime: "8 min read",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/SgvBPTR0wwyzdgHuP01M/image.png",
    author: "Dr. Mandavi Rai",
    date: "February 25, 2024",
    tags: ["IVF", "Success Rates", "Statistics"]
  },
];

export const blogCategories = [
  "All",
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

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getRecentPosts = () => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const getPostsByCategory = (category: string) => blogPosts.filter(post => post.category === category);
export const getRelatedPosts = (currentSlug: string, category: string, limit: number = 3) => {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
};
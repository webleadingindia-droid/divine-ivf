import type { MetadataRoute } from "next";

// ============ SITE CONFIG ============
// NOTE: keep this in sync with SITE_URL in app/sitemap.ts and
// app/service-area/sitemap.ts
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://divine-ivf.vercel.app";

const API_URL = "https://ivfapi.webleadingindia.com/api/blogs";

// ============ TYPES ============
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  short_description: string;
  created_at: string;
  updated_at?: string;
}

interface BlogListResponse {
  status: boolean;
  message: string;
  data: BlogPost[];
}

// ============ HELPERS ============
async function fetchAllBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(API_URL, {
      // Sitemap doesn't need to be as fresh as the pages themselves —
      // revalidate hourly instead of every 60s to avoid hammering the API.
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const json: BlogListResponse = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
    return [];
  }
}

// ============ SITEMAP ============
// This file lives INSIDE app/blog/, so Next.js serves it at
// https://yourdomain.com/blog/sitemap.xml — a dedicated sitemap
// scoped to just the blog section, separate from the site-wide
// app/sitemap.ts and the app/service-area/sitemap.ts.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchAllBlogs();

  const routes: MetadataRoute.Sitemap = [
    // The section's own index page
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Every /blog/{slug} post from the API
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updated_at
        ? new Date(post.updated_at)
        : post.created_at
        ? new Date(post.created_at)
        : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return routes;
}

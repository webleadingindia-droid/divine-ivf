import type { MetadataRoute } from "next";

// ============ SITE CONFIG ============
// NOTE: keep this in sync with SITE_URL in
// app/service-area/[slug]/page.tsx and app/sitemap.ts
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://divine-ivf.vercel.app";

const API_BASE = "https://ivfapi.webleadingindia.com/api/internal-pages";

// ============ TYPES ============
interface InternalPage {
  id: number;
  title: string;
  slug: string;
  image: string;
  short_description: string | null;
  created_at?: string;
  updated_at?: string;
}

interface Pagination {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}

interface InternalPagesResponse {
  status: boolean;
  message: string;
  data: InternalPage[];
  pagination?: Pagination;
}

// ============ HELPERS ============
/** Fetch every internal page from the API, following pagination if needed. */
async function fetchAllInternalPages(): Promise<InternalPage[]> {
  let allPages: InternalPage[] = [];

  try {
    const firstRes = await fetch(`${API_BASE}?page=1&per_page=1000`, {
      // Sitemap doesn't need to be as fresh as the pages themselves —
      // revalidate hourly instead of every 60s to avoid hammering the API.
      next: { revalidate: 3600 },
    });

    if (!firstRes.ok) return [];

    const firstJson: InternalPagesResponse = await firstRes.json();
    allPages = firstJson.data || [];

    const lastPage = firstJson.pagination?.last_page || 1;
    if (lastPage > 1) {
      const requests = [];
      for (let p = 2; p <= lastPage; p++) {
        requests.push(
          fetch(`${API_BASE}?page=${p}&per_page=1000`, {
            next: { revalidate: 3600 },
          }).then((r) => (r.ok ? r.json() : null))
        );
      }
      const results = await Promise.all(requests);
      for (const r of results) {
        if (r && r.data) allPages = allPages.concat(r.data);
      }
    }
  } catch (error) {
    console.error(
      "Error fetching internal pages for service-area sitemap:",
      error
    );
  }

  return allPages;
}

// ============ SITEMAP ============
// This file lives INSIDE app/service-area/, so Next.js serves it at
// https://yourdomain.com/service-area/sitemap.xml — a dedicated sitemap
// scoped to just this section (the location pages), separate from the
// site-wide app/sitemap.ts.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await fetchAllInternalPages();

  const routes: MetadataRoute.Sitemap = [
    // The section's own index page
    {
      url: `${SITE_URL}/service-area`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Every /service-area/{slug} page from the API
    ...pages.map((page) => ({
      url: `${SITE_URL}/service-area/${page.slug}`,
      lastModified: page.updated_at
        ? new Date(page.updated_at)
        : page.created_at
        ? new Date(page.created_at)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  return routes;
}

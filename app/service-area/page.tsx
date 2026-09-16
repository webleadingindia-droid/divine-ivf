import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/service-area" },
  title: "Service Areas | IVF Locations | Divine IVF",
  description:
    "Find our IVF and fertility services across multiple locations. Expert treatments available in your area.",
};

export const revalidate = 60;

// ============ TYPES ============
interface InternalPage {
  id: number;
  title: string;
  slug: string;
  image: string;
  short_description: string | null;
}

interface Pagination {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  from: number;
  to: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

interface InternalPagesResponse {
  status: boolean;
  message: string;
  data: InternalPage[];
  pagination: Pagination;
}

// ============ HELPERS ============
function extractLocation(title: string): string {
  const match = title.match(/\bin\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

function extractService(title: string): string {
  const match = title.match(/^(.+?)\s+in\s+/i);
  return match ? match[1].trim() : title;
}

/** Normalize a location string for reliable comparisons (trim + collapse spaces + lowercase) */
function normalizeLoc(loc: string): string {
  return loc.trim().toLowerCase().replace(/\s+/g, " ");
}

/** Group a list of unique locations alphabetically by first letter, e.g. { A: [...], B: [...] } */
function groupLocationsAlphabetically(
  locs: string[]
): Record<string, string[]> {
  const sorted = [...locs].sort((a, b) => a.localeCompare(b));
  const groups: Record<string, string[]> = {};
  for (const loc of sorted) {
    const first = loc.trim().charAt(0).toUpperCase();
    const letter = /[A-Z]/.test(first) ? first : "#";
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(loc);
  }
  return groups;
}

/**
 * Smart page numbers with dots
 * Example: [1, "...", 4, 5, 6, "...", 318]
 */
function getPageNumbers(
  currentPage: number,
  lastPage: number
): (number | "...")[] {
  const pages: (number | "...")[] = [];
  const delta = 1;

  if (lastPage <= 7) {
    for (let i = 1; i <= lastPage; i++) pages.push(i);
  } else {
    pages.push(1);

    if (currentPage > delta + 2) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - delta);
    const end = Math.min(lastPage - 1, currentPage + delta);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < lastPage - delta - 1) {
      pages.push("...");
    }

    pages.push(lastPage);
  }

  return pages;
}

// ============ PAGE PROPS ============
type SearchParams = Promise<{
  page?: string;
  search?: string;
  location?: string;
}>;

interface PageProps {
  searchParams: SearchParams;
}

const PER_PAGE = 9;
const QUICK_CHIPS_COUNT = 10;

// ============ MAIN PAGE ============
export default async function ServiceAreaPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;

  // Read search params
  const currentPage = Math.max(
    1,
    parseInt(resolvedSearchParams?.page || "1", 10) || 1
  );
  const searchQuery = (resolvedSearchParams?.search || "").trim().toLowerCase();
  const locationFilter = (resolvedSearchParams?.location || "").trim();
  const normalizedLocationFilter = normalizeLoc(locationFilter);

  // Fetch a large batch so we can search/filter/paginate on server
  let allPages: InternalPage[] = [];

  try {
    // First fetch page 1 to know total
    const firstRes = await fetch(
      `https://ivfapi.webleadingindia.com/api/internal-pages?page=1&per_page=1000`,
      { next: { revalidate: 60 } }
    );

    if (firstRes.ok) {
      const firstJson: InternalPagesResponse = await firstRes.json();
      allPages = firstJson.data || [];

      // If API returns paginated data and total > fetched, fetch remaining pages
      const lastPageFromApi = firstJson.pagination?.last_page || 1;
      if (lastPageFromApi > 1) {
        const remainingRequests = [];
        for (let p = 2; p <= lastPageFromApi; p++) {
          remainingRequests.push(
            fetch(
              `https://ivfapi.webleadingindia.com/api/internal-pages?page=${p}&per_page=1000`,
              { next: { revalidate: 60 } }
            ).then((r) => (r.ok ? r.json() : null))
          );
        }
        const results = await Promise.all(remainingRequests);
        for (const r of results) {
          if (r && r.data) {
            allPages = allPages.concat(r.data);
          }
        }
      }
    }
  } catch (error) {
    console.error("Error fetching service areas:", error);
  }

  // ============ APPLY FILTERS ============
  let filteredPages = allPages;

  // Location filter (normalized comparison — trims spaces, case-insensitive)
  if (normalizedLocationFilter) {
    filteredPages = filteredPages.filter((p) => {
      const loc = normalizeLoc(extractLocation(p.title));
      return loc === normalizedLocationFilter;
    });
  }

  // Search filter — searches title, slug, description, location, service
  if (searchQuery) {
    filteredPages = filteredPages.filter((p) => {
      const title = (p.title || "").toLowerCase();
      const slug = (p.slug || "").toLowerCase().replace(/-/g, " ");
      const desc = (p.short_description || "").toLowerCase();
      const loc = extractLocation(p.title).toLowerCase();
      const service = extractService(p.title).toLowerCase();

      return (
        title.includes(searchQuery) ||
        slug.includes(searchQuery) ||
        desc.includes(searchQuery) ||
        loc.includes(searchQuery) ||
        service.includes(searchQuery)
      );
    });
  }

  // ============ PAGINATION (on filtered data) ============
  const totalFiltered = filteredPages.length;
  const lastPage = Math.max(1, Math.ceil(totalFiltered / PER_PAGE));
  const safePage = Math.min(currentPage, lastPage);

  const startIndex = (safePage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const pagesToShow = filteredPages.slice(startIndex, endIndex);

  const fromCount = totalFiltered === 0 ? 0 : startIndex + 1;
  const toCount = Math.min(endIndex, totalFiltered);

  // Unique locations (from all pages, so chips/list remain stable regardless of filters)
  const locations = Array.from(
    new Set(
      allPages
        .map((p) => extractLocation(p.title))
        .filter(Boolean)
        .map((l) => l.trim())
    )
  ).sort((a, b) => a.localeCompare(b));

  const quickChips = locations.slice(0, QUICK_CHIPS_COUNT);
  const extraChips = locations.slice(QUICK_CHIPS_COUNT);
  const groupedLocations = groupLocationsAlphabetically(locations);

  const pageNumbers = getPageNumbers(safePage, lastPage);

  // Build URL preserving search & location
  const buildPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", resolvedSearchParams?.search || "");
    if (locationFilter) params.set("location", locationFilter);
    if (pageNum > 1) params.set("page", String(pageNum));
    const qs = params.toString();
    return qs ? `/service-area?${qs}` : "/service-area";
  };

  // Build location chip URL
  const buildLocationUrl = (loc: string) => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", resolvedSearchParams?.search || "");
    if (loc) params.set("location", loc);
    const qs = params.toString();
    return qs ? `/service-area?${qs}` : "/service-area";
  };

  const hasActiveFilters = !!searchQuery || !!locationFilter;

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 py-16 md:py-20 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Service Area" }]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Service Areas
              </span>
            </h1>

            <p className="mt-3 text-base text-ink-500 leading-relaxed max-w-2xl">
              Expert IVF and fertility treatments available across multiple
              locations. Find the best services near you.
            </p>
          </div>

          {/* Search Form */}
          <form
            action="/service-area"
            method="GET"
            className="mt-6 max-w-2xl flex flex-col sm:flex-row gap-3"
          >
            {/* Preserve location filter on search */}
            {locationFilter && (
              <input type="hidden" name="location" value={locationFilter} />
            )}

            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
              <input
                type="text"
                name="search"
                defaultValue={resolvedSearchParams?.search || ""}
                placeholder="Search location or service..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-rose-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all shadow-sm text-sm"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >
              Search
            </button>

            {hasActiveFilters && (
              <Link
                href="/service-area"
                className="inline-flex items-center justify-center gap-1 px-5 py-3 rounded-xl border border-rose-200 text-ink-600 text-sm font-medium hover:bg-rose-50 transition-all"
              >
                <X className="h-4 w-4" />
                Clear
              </Link>
            )}
          </form>

          {/* Quick Location Chips */}
          {locations.length > 0 && (
            <div className="mt-4 flex flex-wrap items-start gap-2 max-w-4xl">
              <Link
                href={
                  searchQuery
                    ? `/service-area?search=${encodeURIComponent(
                        resolvedSearchParams?.search || ""
                      )}`
                    : "/service-area"
                }
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  !locationFilter
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm"
                    : "bg-white/70 border border-rose-200 text-ink-600 hover:bg-rose-50 hover:border-rose-300"
                }`}
              >
                All Locations
              </Link>

              {quickChips.map((loc) => (
                <Link
                  key={loc}
                  href={buildLocationUrl(loc)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all capitalize ${
                    normalizedLocationFilter === normalizeLoc(loc)
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm"
                      : "bg-white/70 border border-rose-200 text-ink-600 hover:bg-rose-50 hover:border-rose-300"
                  }`}
                >
                  {loc}
                </Link>
              ))}

              {/* "+N more" dropdown — pure HTML, no JS needed, shows every remaining location */}
              {extraChips.length > 0 && (
                <details className="relative group/details">
                  <summary className="list-none cursor-pointer inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-medium bg-white/70 border border-rose-200 text-ink-600 hover:bg-rose-50 hover:border-rose-300 transition-all select-none">
                    +{extraChips.length} more
                    <ChevronDown className="h-3 w-3 transition-transform group-open/details:rotate-180" />
                  </summary>
                  <div className="absolute z-20 mt-2 left-0 w-72 max-h-80 overflow-y-auto p-3 bg-white rounded-xl shadow-xl border border-rose-100 grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {extraChips.map((loc) => (
                      <Link
                        key={loc}
                        href={buildLocationUrl(loc)}
                        className={`text-xs capitalize truncate hover:text-rose-600 transition-colors ${
                          normalizedLocationFilter === normalizeLoc(loc)
                            ? "text-rose-600 font-semibold"
                            : "text-ink-600"
                        }`}
                      >
                        {loc}
                      </Link>
                    ))}
                  </div>
                </details>
              )}

              {locations.length > 0 && (
                <a
                  href="#all-locations"
                  className="rounded-full px-4 py-1.5 text-xs font-medium text-rose-600 hover:underline self-center"
                >
                  View all {locations.length} areas ↓
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ============ SERVICE AREA GRID ============ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <p className="text-sm text-ink-500">
              Showing{" "}
              <span className="font-semibold text-ink-900">
                {fromCount}-{toCount}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-ink-900">
                {totalFiltered}
              </span>{" "}
              {locationFilter ? "locations" : "results"}
              {searchQuery && (
                <span className="text-ink-400">
                  {" "}
                  for &ldquo;{resolvedSearchParams?.search}&rdquo;
                </span>
              )}
              {locationFilter && (
                <span className="text-ink-400">
                  {" "}
                  in <span className="capitalize">{locationFilter}</span>
                </span>
              )}
            </p>
            <p className="text-sm text-ink-400">
              Page{" "}
              <span className="font-semibold text-ink-600">{safePage}</span> of{" "}
              <span className="font-semibold text-ink-600">{lastPage}</span>
            </p>
          </div>

          {pagesToShow.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ink-400 mb-3">
                {hasActiveFilters
                  ? "No service areas match your search."
                  : "No service areas available."}
              </p>
              {hasActiveFilters && (
                <Link
                  href="/service-area"
                  className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium shadow-sm"
                >
                  Clear filters
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pagesToShow.map((page) => {
                const location = extractLocation(page.title);
                return (
                  <Link
                    key={page.id}
                    href={`/service-area/${page.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-rose-50"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={page.image}
                        alt={page.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      {location && (
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-white bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                            <MapPin className="h-3 w-3" />
                            {location}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-ink-900 group-hover:text-rose-600 transition-colors line-clamp-2 text-base mb-1.5 capitalize">
                        {page.title}
                      </h3>
                      {page.short_description && (
                        <p className="text-sm text-ink-400 line-clamp-2 mb-3">
                          {page.short_description}
                        </p>
                      )}
                      <div className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 group-hover:gap-2 transition-all pt-3 border-t border-rose-50 w-full">
                        View Details
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* ============ PAGINATION ============ */}
          {lastPage > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
              {/* Prev Button */}
              {safePage > 1 ? (
                <Link
                  href={buildPageUrl(safePage - 1)}
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm text-ink-600 border border-rose-200 rounded-lg hover:bg-rose-50 hover:border-rose-300 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 px-4 py-2 text-sm text-ink-300 border border-rose-100 rounded-lg cursor-not-allowed">
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </span>
              )}

              {/* Page Numbers with Dots */}
              {pageNumbers.map((pageNum, idx) =>
                pageNum === "..." ? (
                  <span
                    key={`dots-${idx}`}
                    className="px-3 py-2 text-sm text-ink-400 select-none"
                  >
                    ...
                  </span>
                ) : pageNum === safePage ? (
                  <span
                    key={pageNum}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg shadow-sm font-semibold cursor-default"
                  >
                    {pageNum}
                  </span>
                ) : (
                  <Link
                    key={pageNum}
                    href={buildPageUrl(pageNum)}
                    className="px-4 py-2 text-sm text-ink-600 hover:bg-rose-50 rounded-lg transition-colors border border-rose-100 hover:border-rose-300"
                  >
                    {pageNum}
                  </Link>
                )
              )}

              {/* Next Button */}
              {safePage < lastPage ? (
                <Link
                  href={buildPageUrl(safePage + 1)}
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm text-ink-600 border border-rose-200 rounded-lg hover:bg-rose-50 hover:border-rose-300 transition-colors"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 px-4 py-2 text-sm text-ink-300 border border-rose-100 rounded-lg cursor-not-allowed">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ============ ALL LOCATIONS — GROUPED A-Z ============ */}
      {locations.length > 0 && (
        <section
          id="all-locations"
          className="py-12 md:py-16 bg-rose-50/40 border-t border-rose-100 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-ink-900">
                  Explore All Service Areas
                </h2>
                <p className="text-sm text-ink-500 mt-1">
                  Browse every location we serve, organized A-Z.
                </p>
              </div>
              <span className="text-sm font-medium text-ink-500 bg-white px-3 py-1.5 rounded-full border border-rose-100">
                {locations.length} locations
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8">
              {Object.entries(groupedLocations).map(([letter, locs]) => (
                <div key={letter}>
                  <div className="text-xs font-bold text-rose-500 mb-2 tracking-wide">
                    {letter}
                  </div>
                  <ul className="space-y-1.5">
                    {locs.map((loc) => (
                      <li key={loc}>
                        <Link
                          href={buildLocationUrl(loc)}
                          className={`text-sm capitalize hover:text-rose-600 transition-colors ${
                            normalizedLocationFilter === normalizeLoc(loc)
                              ? "text-rose-600 font-semibold"
                              : "text-ink-600"
                          }`}
                        >
                          {loc}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationBanner />
    </>
  );
}
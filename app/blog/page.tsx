import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, User, Calendar, Search, ChevronDown } from "lucide-react";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Fertility Blog | Expert Insights & Tips | Divine IVF",
  description:
    "Expert fertility blog covering IVF, IUI, PCOS, male infertility, and more. Get insights from Dr. Mandavi Rai at Divine IVF.",
};

export const revalidate = 60;

// Types
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  short_description: string;
  created_at: string;
}

interface BlogListResponse {
  status: boolean;
  message: string;
  data: BlogPost[];
}

// Date formatter
function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

const POSTS_PER_PAGE = 6;

interface BlogPageProps {
  searchParams: Promise<{ page?: string; search?: string; category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  let allPosts: BlogPost[] = [];

  try {
    const res = await fetch("https://ivfapi.webleadingindia.com/api/blogs", {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const json: BlogListResponse = await res.json();
      allPosts = json.data || [];
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  // Unique categories
  const categories = [
    "All",
    ...Array.from(new Set(allPosts.map((p) => p.category).filter(Boolean))),
  ];

  // Read search params
  const resolvedSearchParams = await searchParams;
  const searchQuery = (resolvedSearchParams?.search || "").trim().toLowerCase();
  const selectedCategory = resolvedSearchParams?.category || "";

  // Apply search + category filter
  let filteredPosts = allPosts;

  if (searchQuery) {
    filteredPosts = filteredPosts.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const desc = post.short_description?.toLowerCase() || "";
      const cat = post.category?.toLowerCase() || "";
      return (
        title.includes(searchQuery) ||
        desc.includes(searchQuery) ||
        cat.includes(searchQuery)
      );
    });
  }

  if (selectedCategory) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  // Pagination logic (based on filtered posts)
  const currentPage = Math.max(1, Number(resolvedSearchParams?.page) || 1);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);

  const startIndex = (safePage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Build query string helper (preserves search & category on pagination)
  const buildQuery = (page: number) => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (selectedCategory) params.set("category", selectedCategory);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (safePage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (safePage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(safePage - 1);
        pages.push(safePage);
        pages.push(safePage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 py-16 md:py-20 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
              Fertility{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>

            <p className="mt-3 text-base text-ink-500 leading-relaxed max-w-2xl">
              Expert advice, treatment guides, and fertility insights from Dr.
              Mandavi Rai to help you on your journey to parenthood.
            </p>
          </div>

          {/* Search & Category Filter (GET form) */}
          <form
            action="/blog"
            method="GET"
            className="mt-6 flex flex-col sm:flex-row gap-3 max-w-3xl"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
              <input
                type="text"
                name="search"
                defaultValue={resolvedSearchParams?.search || ""}
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-rose-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all shadow-sm text-sm"
              />
            </div>

            <div className="relative">
              <select
                name="category"
                defaultValue={selectedCategory}
                className="appearance-none w-full sm:w-auto pl-4 pr-10 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all shadow-sm text-sm text-ink-600 cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >
              Search
            </button>

            {(searchQuery || selectedCategory) && (
              <Link
                href="/blog"
                className="px-6 py-3 rounded-xl border border-rose-200 text-ink-600 text-sm font-medium hover:bg-rose-50 transition-all text-center"
              >
                Clear
              </Link>
            )}
          </form>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-ink-500">
              Showing{" "}
              <span className="font-semibold text-ink-900">
                {paginatedPosts.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-ink-900">
                {filteredPosts.length}
              </span>{" "}
              articles
              {searchQuery && (
                <span className="text-ink-400">
                  {" "}
                  for &ldquo;{resolvedSearchParams?.search}&rdquo;
                </span>
              )}
              {selectedCategory && (
                <span className="text-ink-400">
                  {" "}
                  in <span className="capitalize">{selectedCategory}</span>
                </span>
              )}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-ink-400">Sort by:</span>
              <select className="text-xs border-0 bg-transparent text-ink-600 font-medium focus:outline-none cursor-pointer">
                <option>Latest</option>
                <option>Oldest</option>
                <option>Popular</option>
              </select>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ink-400 mb-3">
                {searchQuery || selectedCategory
                  ? "No articles match your search."
                  : "No blog posts available."}
              </p>
              {(searchQuery || selectedCategory) && (
                <Link
                  href="/blog"
                  className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium shadow-sm"
                >
                  Clear filters
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-rose-50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-rose-600 bg-rose-50 px-3 py-1 rounded-full capitalize">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-ink-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        3 min read
                      </span>
                    </div>
                    <h3 className="font-semibold text-ink-900 group-hover:text-rose-600 transition-colors line-clamp-2 text-base mb-1.5">
                      {post.title}
                    </h3>
                    <p className="text-sm text-ink-400 line-clamp-2 mb-3">
                      {post.short_description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-ink-400 pt-3 border-t border-rose-50">
                      <span className="flex items-center gap-1.5">
                        <User className="h-3 w-3" />
                        Dr. Mandavi Rai
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.created_at)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
              {/* Previous Button */}
              {safePage > 1 ? (
                <Link
                  href={buildQuery(safePage - 1)}
                  className="px-4 py-2 text-sm text-ink-600 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  Previous
                </Link>
              ) : (
                <span className="px-4 py-2 text-sm text-ink-300 border border-rose-100 rounded-lg cursor-not-allowed">
                  Previous
                </span>
              )}

              {/* Page Numbers */}
              {getPageNumbers().map((page, index) =>
                typeof page === "number" ? (
                  <Link
                    key={index}
                    href={buildQuery(page)}
                    className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                      page === safePage
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm"
                        : "text-ink-600 border border-rose-200 hover:bg-rose-50"
                    }`}
                  >
                    {page}
                  </Link>
                ) : (
                  <span
                    key={index}
                    className="px-2 py-2 text-sm text-ink-400 select-none"
                  >
                    {page}
                  </span>
                )
              )}

              {/* Next Button */}
              {safePage < totalPages ? (
                <Link
                  href={buildQuery(safePage + 1)}
                  className="px-4 py-2 text-sm text-ink-600 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  Next
                </Link>
              ) : (
                <span className="px-4 py-2 text-sm text-ink-300 border border-rose-100 rounded-lg cursor-not-allowed">
                  Next
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
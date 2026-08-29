import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User, Calendar, Search, BookOpen, Filter, ChevronDown } from "lucide-react";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";
import { blogPosts, blogCategories } from "@/data/blog";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Fertility Blog | Expert Insights & Tips | Divine IVF",
  description: "Expert fertility blog covering IVF, IUI, PCOS, male infertility, and more. Get insights from Dr. Mandavi Rai at Divine IVF.",
};

export default function BlogPage() {
  const allPosts = blogPosts;

  return (
    <>
      {/* Simple Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 py-16 md:py-20 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" }, 
              { label: "Blog" }
            ]} 
          />
          
          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
              Fertility{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>
            
            <p className="mt-3 text-base text-ink-500 leading-relaxed max-w-2xl">
              Expert advice, treatment guides, and fertility insights from Dr. Mandavi Rai 
              to help you on your journey to parenthood.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-3xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-rose-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all shadow-sm text-sm"
              />
            </div>
            <div className="relative">
              <select className="appearance-none w-full sm:w-auto pl-4 pr-10 py-3 bg-white border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all shadow-sm text-sm text-ink-600 cursor-pointer">
                <option value="">All Categories</option>
                {blogCategories.slice(1).map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" />
            </div>
          </div>

          {/* Category Chips */}
          <div className="mt-4 flex flex-wrap gap-2 max-w-3xl">
            <button className="rounded-full px-4 py-1.5 text-xs font-medium bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm">
              All
            </button>
            {blogCategories.slice(1, 7).map((category) => (
              <button
                key={category}
                className="rounded-full px-4 py-1.5 text-xs font-medium bg-white/70 border border-rose-200 text-ink-600 hover:bg-rose-50 hover:border-rose-300 transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-ink-500">
              Showing <span className="font-semibold text-ink-900">{allPosts.length}</span> articles
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
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
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {post.featured && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-medium px-2.5 py-1 rounded-full shadow-sm">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-ink-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-ink-900 group-hover:text-rose-600 transition-colors line-clamp-2 text-base mb-1.5">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-400 line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-ink-400 pt-3 border-t border-rose-50">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <button className="px-4 py-2 text-sm text-ink-400 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 text-sm bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg shadow-sm">
              1
            </button>
            <button className="px-4 py-2 text-sm text-ink-600 hover:bg-rose-50 rounded-lg transition-colors">
              2
            </button>
            <button className="px-4 py-2 text-sm text-ink-600 hover:bg-rose-50 rounded-lg transition-colors">
              3
            </button>
            <button className="px-4 py-2 text-sm text-ink-400 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
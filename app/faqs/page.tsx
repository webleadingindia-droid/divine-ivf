"use client";

import { useState } from "react";
import { faqCategories } from "@/data/faqs";
import { 
  ChevronDown, MessageCircle, HelpCircle, 
  Search, Sparkles, ArrowRight, X,
  Heart, TrendingUp, DollarSign, Calendar, Shield
} from "lucide-react";
import Link from "next/link";

export default function FaqsPage() {
  const [openTab, setOpenTab] = useState(faqCategories[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const active = faqCategories.find((c) => c.category === openTab)!;

  // Filter questions based on search
  const filteredItems = active.items.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get category icon
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
      "General": Heart,
      "Cost & Insurance": DollarSign,
      "Success Rates": TrendingUp,
      "Preparing for IVF": Calendar,
      "Post-IVF Care": Shield,
    };
    return icons[category] || HelpCircle;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50/30 py-12 md:py-16 lg:py-20">
      {/* Modern Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/20 to-pink-200/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoNHY0aC00em0wIDB2LTRoLTR2NGg0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Modern Minimal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-medium shadow-lg shadow-rose-200/50 mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FAQ</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Got{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              questions?
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-500">
              We`ve got answers.
            </span>
          </h1>

          <p className="text-sm text-slate-500 mt-4 max-w-md mx-auto leading-relaxed">
            Browse through our comprehensive FAQ or search for what you`re looking for.
          </p>
        </div>

        {/* Search Bar - Modern */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400 group-focus-within:text-rose-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-3.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400 transition-all shadow-sm hover:shadow-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs - Modern Pill Style */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((c) => {
            const Icon = getCategoryIcon(c.category);
            const isActive = openTab === c.category;
            const count = c.items.length;
            
            return (
              <button
                key={c.category}
                onClick={() => {
                  setOpenTab(c.category);
                  setOpenIndex(null);
                  setSearchQuery("");
                }}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-200/50 scale-105"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-rose-300 hover:shadow-md hover:scale-105"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-rose-500"}`} />
                <span>{c.category}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive 
                    ? "bg-white/20 text-white" 
                    : "bg-slate-100 text-slate-500 group-hover:bg-rose-100 group-hover:text-rose-600"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className="text-center mb-4">
            <p className="text-sm text-slate-500">
              Found <span className="font-semibold text-rose-600">{filteredItems.length}</span>{" "}
              {filteredItems.length === 1 ? "result" : "results"} for "{searchQuery}"
            </p>
          </div>
        )}

        {/* FAQ Items - Modern Cards */}
        <div className="flex flex-col gap-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, i) => {
              const globalIndex = active.items.findIndex((q) => q.question === item.question);
              const isOpen = openIndex === globalIndex;

              return (
                <div
                  key={item.question}
                  className={`group rounded-2xl bg-white/80 backdrop-blur-sm border transition-all duration-300 ${
                    isOpen
                      ? "border-rose-200 shadow-xl shadow-rose-100/30 bg-white"
                      : "border-slate-200/60 shadow-sm hover:shadow-md hover:border-rose-200/60 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <span className={`hidden sm:flex w-7 h-7 rounded-full items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md shadow-rose-200"
                          : "bg-slate-100 text-slate-500 group-hover:bg-rose-100 group-hover:text-rose-600"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                        isOpen ? "text-rose-700" : "text-slate-800 group-hover:text-rose-700"
                      }`}>
                        {item.question}
                      </span>
                    </div>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-rose-100 text-rose-600 rotate-180"
                          : "bg-slate-50 text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100">
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-10 rounded-full bg-gradient-to-b from-rose-400 to-pink-400 flex-shrink-0" />
                        <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/60">
              <div className="inline-flex p-4 rounded-full bg-rose-50 text-rose-400 mb-4">
                <HelpCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">No results found</h3>
              <p className="text-sm text-slate-500 mt-1">
                Try adjusting your search term or browse by category.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm text-rose-600 font-medium hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions? - Modern Card */}
        <div className="mt-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-white border border-slate-200 rounded-3xl p-8 md:p-10 text-center shadow-sm">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-medium shadow-lg shadow-rose-200/50 mb-4">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Still have questions?</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
              We`re here to help you
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              Can`t find what you`re looking for? Reach out to our team for personalized assistance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium rounded-full shadow-lg shadow-rose-200/50 hover:shadow-xl hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+917678451808"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-700 font-medium rounded-full border border-slate-200 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 transition-all duration-300"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Back Link - Minimal */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-rose-600 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
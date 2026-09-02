"use client";

import { useState } from "react";
import { faqCategories } from "@/data/faqs";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronDown, HelpCircle, Sparkles, Heart, MessageCircle, Baby, Flower2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Faq() {
  const [openTab, setOpenTab] = useState(faqCategories[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(null); // 🔴 Auto-off: No question open by default
  const active = faqCategories.find((c) => c.category === openTab)!;

  // Limit to first 4 questions per category
  const displayItems = active.items.slice(0, 4);
  const hasMore = active.items.length > 4;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      {/* Smooth Light Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-200/30 to-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-200/30 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-3xl" />
        
        {/* Decorative Floating Icons - Very Light */}
        <div className="absolute top-20 right-10 opacity-5 animate-float-slow">
          <Baby className="h-32 w-32 text-rose-400" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 animate-float-medium">
          <Flower2 className="h-28 w-28 text-rose-300" />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-5 animate-float-slow">
          <Heart className="h-24 w-24 text-rose-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side - FAQ Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
                <MessageCircle className="h-3.5 w-3.5" />
                <span>FAQs</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 leading-[1.15]">
                Common{' '}
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
                  questions
                </span>
              </h2>
              
              <p className="text-sm text-ink-500 mt-3 max-w-md">
                Find answers to frequently asked questions about IVF and fertility
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {faqCategories.map((c) => (
                <button
                  key={c.category}
                  onClick={() => {
                    setOpenTab(c.category);
                    setOpenIndex(null); // 🔴 Reset to closed when changing tabs
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    openTab === c.category
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-200"
                      : "bg-white border border-rose-100/50 text-ink-600 hover:border-rose-300 hover:shadow-md"
                  }`}
                >
                  {c.category}
                </button>
              ))}
            </div>

            {/* FAQ Items - Limited to 4 */}
            <div className="flex flex-col gap-2.5">
              {displayItems.map((item, i) => (
                <div
                  key={item.question}
                  className={`group rounded-xl bg-white border transition-all duration-300 ${
                    openIndex === i
                      ? "border-rose-200 shadow-xl shadow-rose-100/50"
                      : "border-rose-100/50 shadow-sm hover:shadow-md hover:border-rose-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-3.5 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <span className="hidden sm:flex w-6 h-6 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600 text-xs font-bold items-center justify-center flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm md:text-base font-semibold text-ink-900 group-hover:text-rose-600 transition-colors">
                        {item.question}
                      </span>
                    </div>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-rose-600 transition-all duration-300 ${
                        openIndex === i ? "bg-rose-100 text-rose-500 rotate-180" : "bg-rose-50"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-4 pt-1 border-t border-rose-100/30">
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-rose-400 to-pink-400 flex-shrink-0" />
                        <p className="text-sm text-ink-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔴 CTA Button - View All FAQs */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-ink-400">
                <span className="w-1 h-1 rounded-full bg-rose-300" />
                <span>{active.items.length} questions available</span>
                {hasMore && (
                  <span className="text-rose-400 font-medium">
                    +{active.items.length - 4} more
                  </span>
                )}
              </div>
              
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:scale-105 transition-all duration-300 group"
              >
                <span>View All FAQs</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Side - Image & Info */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <Image
                src="https://zemyaivf.com/wp-content/uploads/2025/12/7d67a4dc-ceef-43a5-b5b6-4b9d2dc8f888.jpeg"
                alt="Happy family with baby - IVF success"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Content on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Baby className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white drop-shadow-lg">
                      IVF Success Stories
                    </p>
                    <p className="text-xs text-white/80 drop-shadow-lg">
                      5,000+ families trusted us
                    </p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-rose-600 shadow-lg">
                ⭐ 4.9 Rating
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-rose-600 shadow-lg">
                🏥 IVF Specialist
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-rose-100/50">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-rose-600">500+</p>
                  <p className="text-[10px] text-ink-400">IVF Cycles</p>
                </div>
                <div className="w-px h-10 bg-rose-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-rose-600">94%</p>
                  <p className="text-[10px] text-ink-400">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(244, 63, 94, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
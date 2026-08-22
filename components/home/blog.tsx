import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User, Calendar, BookOpen, Sparkles } from "lucide-react";

import { blogPosts } from "@/data/blog";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function Blog() {
  // Get latest 3 blog posts
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-white via-rose-50/20 to-white py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Latest Articles</span>
            </div>

            <h2 className="text-3xl md:text-[2.8rem] leading-tight text-ink-900">
              Fertility Blog &amp;{" "}
              <span className="font-serif italic text-rose-600">
                Expert Insights
              </span>
            </h2>

            <p className="text-ink-400 mt-3 max-w-xl text-sm md:text-base">
              Stay informed with expert articles, treatment guides, and fertility tips 
              from Dr. Mandavi Rai.
            </p>
          </div>

          <Button href="/blog" variant="secondary" className="shrink-0">
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[1.75rem] bg-white border border-bloom-border hover:shadow-lift hover:border-rose-200 transition-all flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-bloom-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Featured Badge */}
                {post.featured && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-medium px-2.5 py-1 rounded-full shadow-lg">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-rose-600">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-ink-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-ink-900 mb-2 leading-snug group-hover:text-rose-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-ink-400 leading-relaxed mb-4 flex-1 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-ink-400 pt-3 border-t border-bloom-border">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                  
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>

                  <ArrowRight className="h-4 w-4 text-rose-600 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
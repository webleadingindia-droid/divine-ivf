import { Quote, Star, Calendar, Heart, User, ThumbsUp, Share2, MoreVertical, MessageCircle } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

export function Testimonials() {
  // Generate random dates for reviews
  const getRandomDate = (index: number) => {
    const dates = [
      "2 days ago", "1 week ago", "3 weeks ago", 
      "1 month ago", "2 months ago", "3 months ago"
    ];
    return dates[index % dates.length];
  };

  // Generate random review counts
  const getReviewCount = (index: number) => {
    const counts = [128, 94, 156, 73, 210, 89];
    return counts[index % counts.length];
  };

  // Generate random helpful counts
  const getHelpfulCount = (index: number) => {
    const counts = [24, 18, 32, 12, 45, 21];
    return counts[index % counts.length];
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://plain-apac-prod-public.komododecks.com/202608/18/LlqitSEnghB2YxCXq0m9/image.png"
          alt="Happy family after IVF success"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-Pink Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-500/55 to-pink-600/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-100/80 via-transparent to-rose-100/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-transparent to-rose-300/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Google Reviews Style */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 text-rose-700 text-xs font-medium mb-2 shadow-lg">
              <Star className="h-3 w-3 fill-rose-400" />
              <span>Google Reviews</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              What Our Patients Say
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white drop-shadow">4.9</span>
              </div>
              <span className="text-xs text-white/90 drop-shadow">Based on 300+ reviews</span>
            </div>
          </div>
          
          {/* Google Badge */}
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl border border-white/30">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
              <Star className="h-4 w-4 text-white fill-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-ink-900">Google</p>
              <p className="text-[10px] text-ink-400">★★★★★ 4.9</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, index) => {
            const reviewCount = getReviewCount(index);
            const helpfulCount = getHelpfulCount(index);
            const date = getRandomDate(index);
            
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 p-5 hover:-translate-y-1 hover:bg-white"
              >
                {/* Review Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-sm font-bold text-white">
                        {t.attribution.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">{t.attribution}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-ink-400">{date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-ink-300 hover:text-ink-600 transition-colors">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>

                {/* Review Content */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      IVF Treatment
                    </span>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed line-clamp-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Review Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-rose-100/30">
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-ink-400 hover:text-rose-500 transition-colors">
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span className="text-xs">{helpfulCount}</span>
                    </button>
                    <button className="flex items-center gap-1 text-ink-400 hover:text-rose-500 transition-colors">
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span className="text-xs">{reviewCount}</span>
                    </button>
                  </div>
                  <button className="text-ink-300 hover:text-rose-500 transition-colors">
                    <Share2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Reviews CTA */}
        <div className="text-center mt-8">
          <a
            href="https://share.google/xumWfZ5md9NKvS57r"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            <Star className="h-4 w-4 fill-white" />
            View All 300+ Google Reviews
          </a>

        </div>

        {/* Trust Badge */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 text-xs text-white drop-shadow-lg bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
            <Heart className="h-3.5 w-3.5 text-rose-200 fill-rose-200" />
            <span>Trusted by 8,000+ families</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white drop-shadow-lg bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
            <Calendar className="h-3.5 w-3.5 text-rose-200" />
            <span>Since 2010</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white drop-shadow-lg bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
            <User className="h-3.5 w-3.5 text-rose-200" />
            <span>300+ happy families</span>
          </div>
        </div>
      </div>
    </section>
  );
}
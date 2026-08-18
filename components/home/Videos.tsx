"use client"
import { PlayCircle, Heart, Sparkles, Youtube, Clock, Users, ArrowRight, Calendar } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Videos() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-rose-50/10 to-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-50/10 rounded-full blur-3xl" />
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-10 opacity-5 animate-float-slow">
          <Youtube className="h-32 w-32 text-rose-400" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 animate-float-medium">
          <Heart className="h-28 w-28 text-rose-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
            <Youtube className="h-3.5 w-3.5" />
            <span>Videos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 leading-[1.15]">
            Fertility guidance with{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
              Dr. Mandavi Rai
            </span>
          </h2>
          
          <p className="text-sm text-ink-400 mt-3 max-w-md mx-auto">
            Expert advice on IVF, fertility and reproductive health
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-8">
          {/* Main Video */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-900/90 to-pink-900/90 group">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/656mql4eLTw"
                title="Fertility guidance with Dr. Mandavi Rai"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <PlayCircle className="h-5 w-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white drop-shadow-lg">
                    Featured Video
                  </p>
                  <p className="text-xs text-white/80 drop-shadow-lg">
                    Dr. Mandavi Rai explains IVF process
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video List */}
          <div className="space-y-4">
            {/* Video Card 1 */}
            <div className="group bg-white rounded-2xl p-4 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="relative w-28 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-rose-100 to-pink-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-8 w-8 text-rose-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/60 rounded text-[8px] text-white">
                    5:30
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                    Understanding IVF: Step by Step Guide
                  </h3>
                  <p className="text-xs text-ink-400 mt-1">Dr. Mandavi Rai</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-[10px] text-ink-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      1.2K views
                    </span>
                    <span className="text-[10px] text-ink-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      2 weeks ago
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="group bg-white rounded-2xl p-4 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="relative w-28 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-rose-100 to-pink-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-8 w-8 text-rose-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/60 rounded text-[8px] text-white">
                    4:15
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                    Fertility Evaluation: What to Expect
                  </h3>
                  <p className="text-xs text-ink-400 mt-1">Dr. Mandavi Rai</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-[10px] text-ink-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      856 views
                    </span>
                    <span className="text-[10px] text-ink-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      1 month ago
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="group bg-white rounded-2xl p-4 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="relative w-28 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-rose-100 to-pink-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-8 w-8 text-rose-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/60 rounded text-[8px] text-white">
                    6:20
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                    Male Fertility: Common Causes & Solutions
                  </h3>
                  <p className="text-xs text-ink-400 mt-1">Dr. Mandavi Rai</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-[10px] text-ink-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      2.1K views
                    </span>
                    <span className="text-[10px] text-ink-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      3 weeks ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Stats */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-100/50">
            <Youtube className="h-4 w-4 text-rose-500" />
            <span className="text-xs text-ink-600">Subscribe to our channel</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-100/50">
            <Users className="h-4 w-4 text-rose-500" />
            <span className="text-xs text-ink-600">2.5K+ subscribers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-100/50">
            <Clock className="h-4 w-4 text-rose-500" />
            <span className="text-xs text-ink-600">15+ videos</span>
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
      `}</style>
    </section>
  );
}
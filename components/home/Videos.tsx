"use client"
import { PlayCircle, Heart, Sparkles, Youtube, Clock, Users, ArrowRight, Calendar, Instagram } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

// 👉 Har video ke liye apni YouTube Video ID yahan daalein
// (YouTube URL me "watch?v=" ke baad wala part, jaise "656mql4eLTw")
const featuredVideo = {
  id: "656mql4eLTw",
  title: "Dr. Mandavi Rai explains IVF process",
};

const sideVideos = [
  {
    id: "656mql4eLTw", // TODO: replace with real video ID
    title: "Understanding IVF: Step by Step Guide",
    duration: "5:30",
    views: "1.2K views",
    posted: "2 weeks ago",
  },
  {
    id: "csHAq5p_UJA", // TODO: replace with real video ID
    title: "Causes of Male & Female Infertility",
    duration: "5:00",
    views: "844 views",
    posted: "1 year ago",
  },
  {
    id: "eXqpPwITLKA", // TODO: replace with real video ID
    title: "IVF Success Story with Dr. Mandavi Rai",
    duration: "1:18",
    views: "242 views",
    posted: "1 year ago",
  },
];

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
                src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <PlayCircle className="h-5 w-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white drop-shadow-lg">
                    Featured Video
                  </p>
                  <p className="text-xs text-white/80 drop-shadow-lg">
                    {featuredVideo.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video List */}
          <div className="space-y-4 lg:max-h-[560px] lg:overflow-y-auto lg:pr-1">
            {sideVideos.map((video, index) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-4 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
              >
                <div className="relative w-28 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-rose-100 to-pink-100">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <PlayCircle className="h-8 w-8 text-white drop-shadow group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/60 rounded text-[8px] text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-ink-400 mt-1">Dr. Mandavi Rai</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-[10px] text-ink-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.views}
                    </span>
                    <span className="text-[10px] text-ink-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {video.posted}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTAs - YouTube Channel & Instagram */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="https://www.youtube.com/@drmandavirai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold shadow-lg shadow-rose-200 hover:shadow-rose-300 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Youtube className="h-4 w-4" />
            Watch All Videos
            <ArrowRight className="h-4 w-4" />
          </a>
          
          <a
            href="https://www.instagram.com/dr.mandavirai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-sm font-semibold shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
            <ArrowRight className="h-4 w-4" />
          </a>
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
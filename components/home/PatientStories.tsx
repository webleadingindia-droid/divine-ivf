"use client"
import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { patientdata, getVideoPath, getThumbnailPath } from "@/data/patient-stories-data";

export function PatientStories() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [erroredIds, setErroredIds] = useState<Set<string>>(new Set());
  const [isClient, setIsClient] = useState(false);

  // Fix: Only render video elements on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Cleanup videos on unmount
  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          video.pause();
          video.src = "";
          video.load();
        }
      });
    };
  }, []);

  // Memoize video paths to prevent re-renders
  const videoPaths = useMemo(() => {
    const paths: Record<string, string> = {};
    patientdata.forEach((t) => {
      paths[t.id] = getVideoPath(t.videoId);
    });
    return paths;
  }, []);

  const thumbnailPaths = useMemo(() => {
    const paths: Record<string, string> = {};
    patientdata.forEach((t) => {
      paths[t.id] = t.thumbnail || getThumbnailPath(t.videoId);
    });
    return paths;
  }, []);

  const handleCardClick = (id: string) => {
    if (erroredIds.has(id)) return;

    const video = videoRefs.current[id];
    if (!video) return;

    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([key, vid]) => {
      if (key !== id && vid && !vid.paused) {
        vid.pause();
      }
    });

    if (playingId === id) {
      video.pause();
    } else {
      if (video.ended) {
        video.currentTime = 0;
      }
      video.play().catch(() => {
        setErroredIds((prev) => new Set(prev).add(id));
        setPlayingId(null);
      });
    }
  };

  const handleVideoPlay = (id: string) => {
    setPlayingId(id);
  };

  const handleVideoPause = (id: string) => {
    setPlayingId((cur) => (cur === id ? null : cur));
  };

  const handleVideoEnded = (id: string) => {
    setPlayingId((cur) => (cur === id ? null : cur));
  };

  const handleVideoError = (id: string) => {
    setErroredIds((prev) => new Set(prev).add(id));
    setPlayingId((cur) => (cur === id ? null : cur));
  };

  const scrollByCards = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : 280;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="relative pt-20 pb-8 md:py-20 overflow-hidden bg-gradient-to-b from-white via-rose-50/20 to-white">
      <div className="pointer-events-none absolute -top-24 left-[-10%] w-[480px] h-[480px] rounded-full bg-rose-100/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] w-96 h-96 rounded-full bg-pink-100/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
              <Play className="h-3 w-3 fill-current" />
              <span>Patient Stories</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 leading-[1.15]">
              Real Stories, Real Hope:{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
                Journeys to Parenthood
              </span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollByCards(-1)}
              aria-label="Previous testimonial"
              className="h-11 w-11 rounded-full border border-rose-200 bg-white text-rose-600 flex items-center justify-center hover:bg-rose-50 hover:border-rose-300 transition-colors shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              aria-label="Next testimonial"
              className="h-11 w-11 rounded-full border border-rose-200 bg-white text-rose-600 flex items-center justify-center hover:bg-rose-50 hover:border-rose-300 transition-colors shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scroller */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 z-10" />

          <div
            ref={scrollerRef}
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-2 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {patientdata.map((t) => {
              const isPlaying = playingId === t.id;
              const hasErrored = erroredIds.has(t.id);
              
              // FIX: Use memoized paths
              const videoPath = videoPaths[t.id];
              const thumbnailPath = thumbnailPaths[t.id];

              return (
                <div
                  key={t.id}
                  data-card
                  className="testimonial-card-wrap group relative shrink-0 w-[72%] xs:w-[250px] sm:w-[260px] lg:w-[240px] snap-center"
                >
                  <div className="water-glow" aria-hidden="true" />

                  <div className="relative rounded-[1.5rem] overflow-hidden bg-white shadow-lg group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
                    <div
                      className="video-thumb relative aspect-[9/16] bg-ink-900 overflow-hidden cursor-pointer"
                      onClick={() => handleCardClick(t.id)}
                    >
                      {/* FIX: Only render video on client side */}
                      {isClient && (
                        <video
                          ref={(el) => {
                            videoRefs.current[t.id] = el;
                          }}
                          src={videoPath}
                          poster={thumbnailPath}
                          playsInline
                          muted={false}
                          className="absolute inset-0 h-full w-full object-cover"
                          onPlay={() => handleVideoPlay(t.id)}
                          onPause={() => handleVideoPause(t.id)}
                          onEnded={() => handleVideoEnded(t.id)}
                          onError={() => handleVideoError(t.id)}
                          preload="metadata"
                        />
                      )}

                      {/* LOCAL THUMBNAIL IMAGE - Always visible when not playing */}
                      {!isPlaying && !hasErrored && (
                        <>
                          <Image
                            src={thumbnailPath}
                            alt={`${t.name}'s testimonial`}
                            fill
                            unoptimized
                            sizes="(max-width: 640px) 72vw, 260px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/15 to-black/10" />
                        </>
                      )}

                      {/* Error Fallback */}
                      {hasErrored && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white bg-black/60">
                          <span className="relative h-14 w-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                            <ExternalLink className="h-5 w-5" />
                          </span>
                          <span className="relative text-xs font-medium">
                            Video unavailable
                          </span>
                        </div>
                      )}

                      {/* Play/Pause Overlay */}
                      {!hasErrored && (
                        <div
                          className={`play-overlay absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
                            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                          }`}
                        >
                          <span className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-pink-500 group-hover:border-transparent transition-all duration-300">
                            {isPlaying ? (
                              <Pause className="h-5 w-5 text-white fill-white" />
                            ) : (
                              <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                            )}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <Link
            href="/patient-stories"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Play className="h-4 w-4 fill-current" />
            Watch All Patient Stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .testimonial-card-wrap {
          padding: 5px;
          border: 2px solid #7e4a53;
          border-radius: 30px;
          background: #c0788438;
        }
        .water-glow {
          position: absolute;
          inset: 0;
          border-radius: 1.75rem;
          background: linear-gradient(
            120deg,
            #fda4af 0%,
            #f9a8d4 25%,
            #fecdd3 50%,
            #f472b6 75%,
            #fda4af 100%
          );
          background-size: 300% 300%;
          filter: blur(14px);
          opacity: 0.45;
          z-index: 0;
          animation: water-shift 7s ease-in-out infinite;
          transition: opacity 0.4s ease, filter 0.4s ease;
        }
        .testimonial-card-wrap:hover .water-glow {
          opacity: 0.75;
          filter: blur(18px);
        }
        .testimonial-card-wrap > div:last-child {
          position: relative;
          z-index: 1;
        }

        @keyframes water-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .water-glow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
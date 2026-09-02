// components/sections/Introduction.tsx
"use client";

import Image from "next/image";
import { Heart, Shield, Sparkles, ArrowRight, Play, Star, Award, Calendar, Users, Pause, X, ChevronRight, Quote, SkipForward, SkipBack } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Introduction() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const videoSrc = "/videos/clinic-intro.mp4";
  const posterImage = "https://plain-apac-prod-public.komododecks.com/202608/13/mBr4bMEVS9BL6objOuAb/image.webp";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration && isFinite(video.duration)) {
        const progressPercent = (video.currentTime / video.duration) * 100;
        setProgress(progressPercent);
        setCurrentTime(video.currentTime);
        setDuration(video.duration);
      }
    };

    const handleLoadedMetadata = () => {
      if (isFinite(video.duration)) {
        setDuration(video.duration);
      }
    };

    // Also try to catch duration whenever it changes (some browsers fire this instead of loadedmetadata reliably)
    const handleDurationChange = () => {
      if (isFinite(video.duration)) {
        setDuration(video.duration);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('durationchange', handleDurationChange);
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('durationchange', handleDurationChange);
    };
  }, [showVideo]); // re-attach when video element mounts (showVideo toggled)

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.log('Playback error:', error));
      }
    }, 100);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowVideo(false);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // FIX: use the live video element's duration (DOM truth) instead of
  // relying on the `duration` state, which may still be 0 when the user
  // clicks skip (state hasn't synced yet). This was the root cause of the
  // video jumping back to 0 on skip forward.
  const handleSkipForward = () => {
    const video = videoRef.current;
    if (!video) return;
    const dur = isFinite(video.duration) && video.duration > 0 ? video.duration : Infinity;
    const newTime = Math.min(video.currentTime + 15, dur);
    video.currentTime = newTime;
    setCurrentTime(newTime);
    if (isFinite(dur)) {
      setProgress((newTime / dur) * 100);
      setDuration(dur);
    }
  };

  const handleSkipBackward = () => {
    const video = videoRef.current;
    if (!video) return;
    const newTime = Math.max(video.currentTime - 15, 0);
    video.currentTime = newTime;
    setCurrentTime(newTime);
    const dur = isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
    if (dur > 0) {
      setProgress((newTime / dur) * 100);
      setDuration(dur);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !progressRef.current) return;
    const dur = isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
    if (dur <= 0) return; // metadata not loaded yet, ignore click
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, x / width));
    const newTime = percentage * dur;
    video.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(percentage * 100);
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-rose-50/10 to-rose-50/30 py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-rose-100/30 to-rose-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-tr from-rose-100/20 to-rose-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-r from-rose-50/10 to-transparent rounded-full blur-2xl"></div>

        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e11d48 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-page relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center px-4 sm:px-6 lg:px-8">
        {/* Left - Video Section */}
        <div
          className="relative order-2 lg:order-1 group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative aspect-[4/3] sm:aspect-[4/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/20 bg-ink-900">

            {!showVideo ? (
              <>
                <Image
                  src={posterImage}
                  alt="Divine IVF Clinic Video"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 to-transparent"></div>

                {/* Play Button - Mobile Friendly */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center group/btn"
                >
                  <span className="absolute h-16 w-16 sm:h-20 sm:w-24 rounded-full bg-white/20 animate-ping opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                  <span className="relative h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-gradient-to-br group-hover/btn:from-rose-500 group-hover/btn:to-pink-500 group-hover/btn:border-transparent">
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white fill-white ml-0.5 sm:ml-1" />
                  </span>
                </button>

                {/* Floating Badges - Mobile Responsive */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-1.5 sm:gap-2 z-10">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-xl border border-white/50 animate-float">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-ink-900">4.8</span>
                      <span className="text-[8px] sm:text-xs text-ink-400">(500+)</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-xl border border-white/50">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 text-rose-500" />
                      <span className="text-[9px] sm:text-xs font-semibold text-ink-900">Top Rated Clinic</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  playsInline
                  autoPlay
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    setIsPlaying(false);
                    setProgress(0);
                    setCurrentTime(0);
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                    }
                  }}
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all hover:scale-110 z-20"
                >
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>

                {/* Custom Controls - Always visible with hover for opacity */}
                <div className={`absolute bottom-0 left-0 right-0 z-20 transition-opacity duration-300 ${
                  isHovering || !isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  {/* Progress Bar */}
                  <div className="px-3 sm:px-4 pb-1">
                    <div
                      ref={progressRef}
                      className="relative w-full h-2 bg-white/20 rounded-full cursor-pointer group/progress"
                      onClick={handleProgressClick}
                    >
                      <div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-rose-400 to-pink-400 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity"
                        style={{ left: `calc(${progress}% - 6px)` }}
                      />
                    </div>
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center gap-1.5 sm:gap-3">
                      {/* Skip Backward */}
                      <button
                        onClick={handleSkipBackward}
                        className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
                        title="Skip backward 15 seconds"
                      >
                        <SkipBack className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="absolute -bottom-1 -right-1 text-[7px] sm:text-[8px] font-bold bg-black/60 rounded-full px-1">15</span>
                      </button>

                      {/* Play/Pause */}
                      <button
                        onClick={togglePlay}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
                        ) : (
                          <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-white ml-0.5" />
                        )}
                      </button>

                      {/* Skip Forward */}
                      <button
                        onClick={handleSkipForward}
                        className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
                        title="Skip forward 15 seconds"
                      >
                        <SkipForward className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="absolute -bottom-1 -right-1 text-[7px] sm:text-[8px] font-bold bg-black/60 rounded-full px-1">15</span>
                      </button>
                    </div>

                    {/* Time Display */}
                    <div className="text-white/80 text-[10px] sm:text-xs font-mono">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 border-2 border-rose-200/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-rose-200/20 rounded-full blur-xl"></div>
        </div>

        {/* Right - Updated Content Section */}
        <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-rose-50/80 backdrop-blur-sm border border-rose-200/50 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 shadow-sm">
            <Heart className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500 fill-rose-500/30 animate-pulse" />
            <span className="text-[9px] sm:text-[11px] font-semibold text-rose-600 tracking-wider uppercase">About Divine IVF</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.3rem] leading-[1.1] text-ink-900">
            Built on Experience.{" "}
            <span className="block sm:inline font-serif italic text-rose-600">
              Shaped by Every Patient Journey.
            </span>
          </h2>

          {/* Subtitle with Quote Icon */}
          <div className="flex items-start gap-2 sm:gap-3 bg-rose-50/50 rounded-xl p-2 sm:p-2 border-l-4 border-rose-400">
            <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-rose-400 flex-shrink-0 mt-0.5" />
            <p className="text-[14px] sm:text-[14px] font-medium text-ink-700 italic">
              Because no two fertility journeys are the same.
            </p>
          </div>

          {/* Main Description */}
          <div className="space-y-3 sm:space-y-4 text-ink-600 leading-relaxed">
            <p className="text-[13px] sm:text-[15px]">
              At Divine IVF, we understand that behind every consultation is a story — the hope, the questions, the waiting, and the desire to finally understand what comes next.
            </p>

            <p className="text-[13px] sm:text-[15px]">
              Divine IVF is the outcome of Dr. Mandavi Rai`s years of experience caring for patients with diverse fertility needs and challenges. Over time, these experiences have shaped an approach to fertility care that is thoughtful, individualised and grounded in sound clinical judgement.
            </p>
          </div>

          {/* Stats Grid - Updated with new data */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2">
            <div className="group bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <div className="p-1 sm:p-1.5 rounded-lg bg-rose-50 group-hover:bg-rose-100 transition-colors">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-rose-500" />
                </div>
              </div>
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-rose-600 group-hover:scale-105 transition-transform">15+</p>
              <p className="text-[7px] sm:text-[8px] md:text-[10px] text-ink-500 mt-0.5 sm:mt-1 font-medium leading-tight">Fertility & IVF Experience</p>
            </div>

            <div className="group bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <div className="p-1 sm:p-1.5 rounded-lg bg-rose-50 group-hover:bg-rose-100 transition-colors">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 text-rose-500" />
                </div>
              </div>
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-rose-600 group-hover:scale-105 transition-transform">3000+</p>
              <p className="text-[7px] sm:text-[8px] md:text-[10px] text-ink-500 mt-0.5 sm:mt-1 font-medium leading-tight">Parenthood Journeys</p>
            </div>

            <div className="group bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <div className="p-1 sm:p-1.5 rounded-lg bg-rose-50 group-hover:bg-rose-100 transition-colors">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-rose-500" />
                </div>
              </div>
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-rose-600 group-hover:scale-105 transition-transform">4.8★</p>
              <p className="text-[7px] sm:text-[8px] md:text-[10px] text-ink-500 mt-0.5 sm:mt-1 font-medium leading-tight">Patient Rating</p>
            </div>
          </div>

          {/* CTA Section - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="/about"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Discover Divine IVF
              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/consultation"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm text-rose-500 bg-white/60 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-rose-200 hover:border-rose-400 transition-all hover:bg-rose-50/80"
            >
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Book Consultation
              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
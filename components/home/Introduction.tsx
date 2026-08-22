// components/sections/Introduction.tsx
"use client";

import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heart, Shield, Sparkles, ArrowRight, Play, Star, Award, Calendar, Users, Pause, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Introduction() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Replace with your local video path
  const videoSrc = "/videos/clinic-intro.mp4";
  const posterImage = "https://plain-apac-prod-public.komododecks.com/202608/13/mBr4bMEVS9BL6objOuAb/image.webp";

  // Track video progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const handlePlay = () => {
    setShowVideo(true);
    // Small delay to ensure video element is mounted
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Playback error:', error);
          });
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

  return (
    <section className="relative bg-gradient-to-br from-white via-rose-50/5 to-rose-50/20 py-20 md:py-20 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-rose-100/20 to-rose-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose-100/10 to-rose-200/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-rose-50/5 to-transparent rounded-full blur-2xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e11d48 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-page relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left - Video Section */}
        <div className="relative order-2 lg:order-1 group">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/20 bg-ink-900">
            
            {!showVideo ? (
              // Thumbnail with Play Button
              <>
                <Image
                  src={posterImage}
                  alt="Divine IVF Clinic Video"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 to-transparent"></div>

                {/* Play Button */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center group/btn"
                >
                  <span className="absolute h-24 w-24 rounded-full bg-white/20 animate-ping opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                  <span className="relative h-20 w-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-gradient-to-br group-hover/btn:from-rose-500 group-hover/btn:to-pink-500 group-hover/btn:border-transparent">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </span>
                </button>

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl border border-white/50 animate-float">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-ink-900">4.9</span>
                      <span className="text-xs text-ink-400">(300+)</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl border border-white/50">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-rose-500" />
                      <span className="text-xs font-semibold text-ink-900">Top Rated Clinic</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Local Video Player
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full"
                  playsInline
                  autoPlay
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    setIsPlaying(false);
                    setProgress(0);
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                    }
                  }}
                />
                
                {/* Custom Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Play/Pause Button - Shows on hover */}
                <button
                  onClick={togglePlay}
                  className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all hover:scale-110 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 fill-white" />
                  ) : (
                    <Play className="h-5 w-5 fill-white ml-0.5" />
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all hover:scale-110 z-20"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
                  <div
                    className="h-full bg-gradient-to-r from-rose-400 to-pink-400 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-rose-200/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-rose-200/20 rounded-full blur-xl"></div>
        </div>

        {/* Right - Content Section */}
        <div className="order-1 lg:order-2 space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-rose-50/80 backdrop-blur-sm border border-rose-200/50 rounded-full px-4 py-1.5 shadow-sm">
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500/30 animate-pulse" />
            <span className="text-[11px] font-semibold text-rose-600 tracking-wider uppercase">About Divine IVF</span>
          </div>
          
          <h2 className="text-4xl md:text-[2.3rem] leading-[1.1] text-ink-900">
            Advanced Fertility Care.{" "}
            <span className="relative font-serif italic text-rose-600">
              Personalised for Your Parenthood Journey.
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-rose-300 to-rose-500 rounded-full"></span>
              <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full animate-pulse-slow"></span>
            </span>
          </h2>
          
          <div className="space-y-4 text-ink-500 leading-relaxed">
            <p className="text-[15px]">
              Divine IVF is dedicated to helping couples move closer to parenthood with personalised fertility care, advanced IVF treatments and compassionate guidance.
            </p>
            
            <p className="text-[15px]">
              Led by Dr. Mandavi Rai, every journey begins with understanding your fertility needs and creating the right treatment path — from fertility evaluation and IUI to IVF, ICSI and advanced reproductive care.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-rose-50 group-hover:bg-rose-100 transition-colors">
                  <Calendar className="h-4 w-4 text-rose-500" />
                </div>
              </div>
              <p className="font-serif italic text-3xl text-rose-600 group-hover:scale-105 transition-transform">10+ Years</p>
              <p className="text-[10px] text-ink-500 mt-1 font-medium">IVF & Fertility Expertise</p>
            </div>
            
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-rose-50 group-hover:bg-rose-100 transition-colors">
                  <Users className="h-4 w-4 text-rose-500" />
                </div>
              </div>
              <p className="font-serif italic text-3xl text-rose-600 group-hover:scale-105 transition-transform">1000+</p>
              <p className="text-[10px] text-ink-500 mt-1 font-medium">Parenthood Journeys Supported</p>
            </div>

            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-rose-50 group-hover:bg-rose-100 transition-colors">
                  <Heart className="h-4 w-4 text-rose-500" />
                </div>
              </div>
              <p className="font-serif italic text-3xl text-rose-600 group-hover:scale-105 transition-transform">98%</p>
              <p className="text-[10px] text-ink-500 mt-1 font-medium">Patient Satisfaction</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/about"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold text-sm shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <Sparkles className="h-4 w-4" />
              Explore Divine IVF
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-2 text-sm text-ink-400 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-100/50">
              <Shield className="h-4 w-4 text-rose-400" />
              <span>100% Confidential</span>
            </div>
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
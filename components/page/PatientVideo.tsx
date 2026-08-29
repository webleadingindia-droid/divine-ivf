"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

interface PatientVideoProps {
  videoId: string;
  name: string;
  treatment: string;
  location: string;
  thumbnailPath: string;
}

export function PatientVideo({ videoId, name, thumbnailPath }: PatientVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {
        // Handle autoplay restriction
      });
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  return (
    <div 
      className="relative w-full h-full cursor-pointer group"
      onClick={togglePlay}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isClient && (
        <video
          ref={videoRef}
          src={`/videos/reviews/${videoId}.mp4`}
          poster={thumbnailPath}
          playsInline
          muted={false}
          className="w-full h-full object-cover"
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          preload="metadata"
        />
      )}

      {/* Play/Pause Overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-pink-500 group-hover:border-transparent transition-all duration-300 transform group-hover:scale-110">
          {isPlaying ? (
            <Pause className="h-7 w-7 text-white fill-white" />
          ) : (
            <Play className="h-7 w-7 text-white fill-white ml-1" />
          )}
        </div>
      </div>

    </div>
  );
}
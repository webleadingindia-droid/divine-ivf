"use client"
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Camera, ArrowRight } from "lucide-react";

// Placeholder imagery — replace with real clinic photography before launch.
const images = [
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/KRcG7smtahfq6fGxmU7l/image.webp", alt: "Clinic waiting area" },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/2H3dM9zeubWw6ORVUYMY/image.webp", alt: "Consultation room" },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/J2l5Zskar7c6qhYlNq4B/image.webp", alt: "Clinic reception" },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/01cWnsENvI7stQNt9iIu/image.webp", alt: "Medical equipment" },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/N2uY2EqWGc7MAZjsQnBH/image.webp", alt: "Clinical corridor" },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/Fjwy4vn5ZRwAtHW5IPdy/image.webp", alt: "Clinical corridor" },
];

export function Gallery() {
  const displayImages = images;

  return (
    <section className="relative py-20 md:py-20 overflow-hidden">
      {/* Background image — real clinic/IVF photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://plain-apac-prod-public.komododecks.com/202608/18/371TPzgCoiXsPADSIDEv/image.png"
          alt=""
          fill
          priority={false}
          className="object-cover"
          sizes="100vw"
        />
        {/* Pink theme overlay so the section still reads as this site's palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-rose-100/50 to-white/95" />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-pink-500/10" />
      </div>

      {/* Single soft wash behind the header */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-rose-100/25 blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] w-96 h-96 rounded-full bg-pink-100/20 blur-3xl z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
            <Camera className="h-3.5 w-3.5" />
            <span>Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 leading-[1.15]">
            Step inside{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
              Divine IVF
            </span>
          </h2>

          <p className="text-sm text-ink-400 mt-3 max-w-md mx-auto">
            Real corners of the clinic — the waiting rooms, consultation
            spaces and quiet moments where every journey begins.
          </p>
        </div>

        {/* Polaroid Row */}
        <div className="polaroid-row flex flex-wrap items-center justify-center gap-x-8 gap-y-14 sm:gap-x-6">
          {displayImages.map((img) => (
            <div
              key={img.alt}
              className="polaroid group relative bg-white p-3 pb-9 mx-auto sm:mx-0 w-64 sm:w-60 rounded-sm"
            >
              <span className="tape" aria-hidden="true" />
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, 260px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <p className="caption mt-4 text-center text-[1.35rem] leading-none text-rose-700">
                {img.alt}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap");
      `}</style>

      <style jsx>{`
        .caption {
          font-family: "Caveat", cursive;
        }

        .tape {
          position: absolute;
          top: -14px;
          left: 50%;
          width: 68px;
          height: 22px;
          transform: translateX(-50%) rotate(-4deg);
          background: repeating-linear-gradient(
            45deg,
            rgba(244, 63, 94, 0.35),
            rgba(244, 63, 94, 0.35) 6px,
            rgba(244, 63, 94, 0.18) 6px,
            rgba(244, 63, 94, 0.18) 12px
          );
          box-shadow: 0 2px 4px rgba(190, 24, 93, 0.12);
        }

        .polaroid {
          box-shadow: 0 18px 38px -16px rgba(190, 24, 93, 0.25);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .polaroid-row > div:nth-child(1) {
          transform: rotate(-4deg) translateY(14px);
        }
        .polaroid-row > div:nth-child(2) {
          transform: rotate(3deg) translateY(-10px);
        }
        .polaroid-row > div:nth-child(3) {
          transform: rotate(-2deg) translateY(10px);
        }
        .polaroid-row > div:nth-child(4) {
          transform: rotate(2deg) translateY(-6px);
        }
        .polaroid-row > div:nth-child(5) {
          transform: rotate(-3deg) translateY(12px);
        }
        .polaroid-row > div:nth-child(6) {
          transform: rotate(4deg) translateY(-8px);
        }
        .polaroid-row > div:hover {
          transform: rotate(0deg) translateY(-8px) scale(1.03);
          box-shadow: 0 26px 50px -16px rgba(190, 24, 93, 0.35);
          z-index: 10;
        }

        .ticket-btn {
          position: relative;
        }
        .ticket-btn::before,
        .ticket-btn::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 14px;
          height: 14px;
          background: white;
          border-radius: 50%;
          transform: translateY(-50%);
        }
        .ticket-btn::before {
          left: -7px;
        }
        .ticket-btn::after {
          right: -7px;
        }

        @media (max-width: 639px) {
          .polaroid-row > div {
            transform: rotate(0deg) translateY(0);
          }
          .polaroid-row > div:hover {
            transform: translateY(-4px) scale(1.02);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .polaroid,
          .polaroid img,
          .ticket-btn {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

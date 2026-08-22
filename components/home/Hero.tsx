"use client"
import Image from "next/image";
import { CalendarHeart, Phone, MapPin, Sparkles } from "lucide-react";
import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { BloomMotif } from "@/components/ui/BloomMotif";
import { useState, useEffect } from "react";

const trustPoints = [
  "IVF & advanced fertility treatments",
  "Personalised Fertility Care",
];

// Background images for hero slider with responsive sources
const heroImages = [
  {
    alt: "Happy couple at fertility clinic",
    images: {
      mobile: "https://plain-apac-prod-public.komododecks.com/202608/18/01rqpt3qDsWvbVJgBpka/image.jpg",
      tablet: "https://plain-apac-prod-public.komododecks.com/202608/18/01rqpt3qDsWvbVJgBpka/image.jpg",
      desktop: "https://plain-apac-prod-public.komododecks.com/202608/18/TaGIv0LnILUd2ouSqju2/image.png",
      large: "https://plain-apac-prod-public.komododecks.com/202608/18/TaGIv0LnILUd2ouSqju2/image.png",
    }
  },
  {
    alt: "Doctor consulting with a couple about fertility care",
    images: {
      mobile: "https://plain-apac-prod-public.komododecks.com/202608/19/StaV2t00157EGwz7SzE7/image.png",
      tablet: "https://plain-apac-prod-public.komododecks.com/202608/19/StaV2t00157EGwz7SzE7/image.png",
      desktop: "https://plain-apac-prod-public.komododecks.com/202608/19/tiDoC8roOqSE9CjLREFq/image.png",
      large: "https://plain-apac-prod-public.komododecks.com/202608/19/tiDoC8roOqSE9CjLREFq/image.png",
    }
  },
  {
    alt: "IVF laboratory and medical professionals",
    images: {
      mobile: "https://plain-apac-prod-public.komododecks.com/202608/18/xV5JDkRAIrrdz6ll9vIC/image.jpg",
      tablet: "https://plain-apac-prod-public.komododecks.com/202608/18/xV5JDkRAIrrdz6ll9vIC/image.jpg",
      desktop: "https://plain-apac-prod-public.komododecks.com/202608/18/OXq6ChgNsdQRTSmz77tc/image.png",
      large: "https://plain-apac-prod-public.komododecks.com/202608/18/OXq6ChgNsdQRTSmz77tc/image.png",
    }
  },
  {
    alt: "Fertility clinic consultation room",
    images: {
      mobile: "https://plain-apac-prod-public.komododecks.com/202608/18/e8Txo2bfDUbSHqHxcCAx/image.jpg",
      tablet: "https://plain-apac-prod-public.komododecks.com/202608/18/e8Txo2bfDUbSHqHxcCAx/image.jpg",
      desktop: "https://plain-apac-prod-public.komododecks.com/202608/18/dqmHEqBm0heFtUivEdWL/image.png",
      large: "https://plain-apac-prod-public.komododecks.com/202608/18/dqmHEqBm0heFtUivEdWL/image.png",
    }
  },
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image Slider - Full screen background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Responsive picture element for all screen sizes */}
            <picture className="block w-full h-full">
              {/* Mobile - upto 480px */}
              <source
                media="(max-width: 480px)"
                srcSet={image.images.mobile}
                type="image/webp"
              />
              {/* Tablet - 481px to 768px */}
              <source
                media="(max-width: 768px)"
                srcSet={image.images.tablet}
                type="image/webp"
              />
              {/* Desktop - 769px to 1280px */}
              <source
                media="(max-width: 1280px)"
                srcSet={image.images.desktop}
                type="image/webp"
              />
              {/* Large Desktop - 1281px and above */}
              <source
                media="(min-width: 1281px)"
                srcSet={image.images.large}
                type="image/webp"
              />
              {/* Fallback img with srcset for all sizes */}
              <img
                src={image.images.large}
                srcSet={`
                  ${image.images.mobile} 480w,
                  ${image.images.tablet} 768w,
                  ${image.images.desktop} 1280w,
                  ${image.images.large} 1920w
                `}
                sizes="100vw"
                width={1920}
                height={768}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
                decoding="async"
              />
            </picture>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
          );
        }}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 md:p-3 transition-all hover:scale-110 focus:outline-none border border-white/30"
        aria-label="Previous image"
      >
        <svg
          className="h-4 w-4 md:h-6 md:w-6 text-white drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
          );
        }}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 md:p-3 transition-all hover:scale-110 focus:outline-none border border-white/30"
        aria-label="Next image"
      >
        <svg
          className="h-4 w-4 md:h-6 md:w-6 text-white drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Content Overlay - Mobile mein text chota aur upar */}
      <div className="relative z-10 h-full flex items-start pt-8 sm:pt-12 md:pt-16 lg:pt-24">
        <div className="container-page w-full px-4 sm:px-6 md:px-8">
          <div className="max-w-2xl">
            {/* Left Content - Mobile mein chota text */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-xs md:text-sm font-medium mb-3 md:mb-6">
                <Sparkles className="h-2.5 w-2.5 md:h-3.5 md:w-3.5" />
                Divine IVF, Sector 76, Noida
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-[1.2] sm:leading-[1.15] md:leading-[1.08] text-white mb-3 md:mb-6 drop-shadow-lg">
                Your Dream of Parenthood{" "}
                <span className="font-serif italic text-rose-200">
                  Starts With the Right Care.
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mb-5 md:mb-8 leading-relaxed drop-shadow-md">
                Personalised fertility care, advanced IVF treatments, and expert guidance by Dr. Mandavi Rai.
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-10">
                <Button href="/consultation" icon={false} className="shadow-lg text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3.5">
                  <CalendarHeart className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Book Consultation
                </Button>
                <a
                  href={clinic.phoneHref}
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/30 transition-all shadow-lg"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rose-200" /> Call {clinic.phone}
                </a>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-lg">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/90 drop-shadow-md">
                    <span className="mt-1 h-1 w-1 sm:mt-1.5 sm:h-1.5 sm:w-1.5 rounded-full bg-rose-300 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
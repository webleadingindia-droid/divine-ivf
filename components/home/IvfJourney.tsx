"use client"
import Image from "next/image";
import { ivfJourneySteps } from "@/data/journey";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heart, Baby, Sparkles, ArrowRight, Calendar, Clock, CheckCircle, Route } from "lucide-react";

export function IvfJourney() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-rose-50/10 to-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-50/10 rounded-full blur-3xl" />
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-10 opacity-5 animate-float-slow">
          <Route className="h-32 w-32 text-rose-400" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 animate-float-medium">
          <Baby className="h-24 w-24 text-rose-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] group">
              <Image
                src="https://plain-apac-prod-public.komododecks.com/202608/13/vB4bkpkeyKSLF2CDhGNt/image.webp"
                alt="Embryology laboratory work as part of the IVF process"
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-rose-600 shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  Step-by-Step IVF Process
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-rose-100/50 hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink-900">4-6 Weeks</p>
                  <p className="text-[10px] text-ink-400">Typical IVF cycle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
              <Route className="h-3.5 w-3.5" />
              <span>IVF, Step by Step</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 leading-[1.15] mb-6">
              Understanding your{' '}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
                IVF journey
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-ink-500 leading-relaxed mb-6">
              Every IVF journey is unique. Here's what you can expect at each step
              of the process with our expert team by your side.
            </p>

            {/* Steps Grid - Modern Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ivfJourneySteps.map((step, i) => (
                <div
                  key={step.title}
                  className="group bg-white rounded-2xl p-4 border border-rose-100/50 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    {/* Step Number */}
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xs font-bold text-white">{i + 1}</span>
                      </div>
                      {/* Connecting Line */}
                      {i < ivfJourneySteps.length - 1 && (
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-rose-200 hidden sm:block" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-ink-400 leading-relaxed mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
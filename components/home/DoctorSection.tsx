"use client"
import Image from "next/image";
import { GraduationCap, Heart, Award, Stethoscope, Calendar, Star, Quote, Sparkles, Baby, Flower2 } from "lucide-react";
import { doctor } from "@/data/doctor";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function DoctorSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50/50 to-amber-50/30" />
      
      {/* Floating IVF Icons Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 animate-float-slow">
          <Baby className="h-20 w-20 text-rose-400" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float-medium">
          <Heart className="h-16 w-16 text-rose-300" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float-fast">
          <Flower2 className="h-24 w-24 text-rose-200" />
        </div>
        <div className="absolute top-1/2 left-10 animate-float-slow">
          <Sparkles className="h-12 w-12 text-amber-300" />
        </div>
        <div className="absolute bottom-40 right-10 animate-float-medium">
          <Award className="h-14 w-14 text-rose-300" />
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-rose-200/30 to-pink-200/20 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/20 to-rose-200/30 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/10 rounded-full blur-3xl" />

      <div className="container-page px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header with IVF Badge */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/80 backdrop-blur-sm border border-rose-200/50 text-rose-700 text-sm font-medium mb-4">
            <Heart className="h-4 w-4 fill-rose-400" />
            <span>IVF &amp; Fertility Specialist</span>
          </div>
          <h2 className="text-3xl md:text-[2.8rem] leading-tight text-ink-900">
            Meet <span className="font-serif italic bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">{doctor.name}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="h-0.5 w-8 bg-rose-300/50" />
            <span className="text-sm text-ink-400">13+ Years of Excellence in Fertility Care</span>
            <span className="h-0.5 w-8 bg-rose-300/50" />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.2fr_0.9fr] gap-6 items-stretch">
          {/* Doctor Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[480px] group">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/uDJ20RmMzJIItIpPZ2iH/image.webp"
              alt="Dr. Mandavi Rai, Gynecologist & IVF Specialist"
              fill
              sizes="(max-width: 1024px) 90vw, 360px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Floating Badge on Image */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-rose-600 shadow-lg">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                4.9 (200+ Reviews)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600/95 backdrop-blur-sm rounded-full text-xs font-semibold text-white shadow-lg">
                <Baby className="h-3.5 w-3.5" />
                500+ IVF Success Stories
              </span>
            </div>
          </div>

          {/* Doctor Info Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col justify-center border border-white/50">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-semibold text-rose-600">{doctor.role}</span>
              <span className="h-1 w-1 rounded-full bg-rose-300" />
              <span className="text-xs font-medium text-ink-400">Senior IVF Consultant</span>
            </div>
            <h3 className="font-serif italic text-2xl md:text-3xl text-ink-900 mb-4">
              {doctor.name}
            </h3>
            <div className="space-y-3">
              {doctor.bio.map((p, index) => (
                <p key={index} className="text-sm md:text-base text-ink-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-rose-100/50">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-ink-400">Rating</p>
                  <p className="text-sm font-semibold text-ink-700">4.9/5</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-rose-500" />
                </div>
                <div>
                  <p className="text-xs text-ink-400">Experience</p>
                  <p className="text-sm font-semibold text-ink-700">13+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Baby className="h-4 w-4 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs text-ink-400">Success Rate</p>
                  <p className="text-sm font-semibold text-ink-700">94%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Approach & Credentials */}
          <div className="relative rounded-3xl bg-gradient-to-br from-rose-600 via-rose-500 to-pink-600 text-white p-8 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="h-5 w-5 text-white/70" />
                <p className="font-serif italic text-xl">Her Philosophy</p>
              </div>
              <p className="text-sm leading-relaxed text-white/95 mb-6">
                {doctor.philosophy}
              </p>
              <div className="space-y-2 mb-2">
                <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">Credentials</p>
              </div>
              <ul className="space-y-3">
                {doctor.credentials.map((c, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10">
                    <GraduationCap className="h-4 w-4 mt-0.5 shrink-0 text-rose-200" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <Button 
              href="/doctor/dr-mandavi-rai" 
              variant="secondary" 
              className="mt-8 bg-white hover:bg-white/95 text-rose-700 border-0 justify-center shadow-xl hover:shadow-2xl transition-all group relative z-10"
            >
              <Stethoscope className="h-4 w-4 group-hover:rotate-12 transition-transform" /> 
              Know More About Dr. Mandavi Rai
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {/* Doctor Image - Top */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[320px] w-full group">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/uDJ20RmMzJIItIpPZ2iH/image.webp"
              alt="Dr. Mandavi Rai, Gynecologist & IVF Specialist"
              fill
              sizes="100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-rose-600 shadow-lg">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                4.9 (200+ Reviews)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600/95 backdrop-blur-sm rounded-full text-xs font-semibold text-white shadow-lg">
                <Baby className="h-3.5 w-3.5" />
                500+ IVF Success
              </span>
            </div>
          </div>

          {/* Doctor Info - Middle */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-white/50">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-semibold text-rose-600">{doctor.role}</span>
              <span className="h-1 w-1 rounded-full bg-rose-300" />
              <span className="text-xs font-medium text-ink-400">IVF Specialist</span>
            </div>
            <h3 className="font-serif italic text-2xl text-ink-900 mb-3">
              {doctor.name}
            </h3>
            <div className="space-y-2.5">
              {doctor.bio.map((p, index) => (
                <p key={index} className="text-sm text-ink-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-rose-100/50">
              <div className="text-center">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
                  <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                </div>
                <p className="text-[10px] text-ink-400 mt-1">Rating</p>
                <p className="text-xs font-semibold text-ink-700">4.9/5</p>
              </div>
              <div className="text-center">
                <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center mx-auto">
                  <Calendar className="h-3.5 w-3.5 text-rose-500" />
                </div>
                <p className="text-[10px] text-ink-400 mt-1">Experience</p>
                <p className="text-xs font-semibold text-ink-700">13+ Yrs</p>
              </div>
              <div className="text-center">
                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                  <Baby className="h-3.5 w-3.5 text-emerald-500" />
                </div>
                <p className="text-[10px] text-ink-400 mt-1">Success</p>
                <p className="text-xs font-semibold text-ink-700">94%</p>
              </div>
            </div>
          </div>

          {/* Approach & Credentials - Bottom */}
          <div className="relative rounded-3xl bg-gradient-to-br from-rose-600 via-rose-500 to-pink-600 text-white p-6 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Quote className="h-4 w-4 text-white/70" />
                <p className="font-serif italic text-lg">Her Philosophy</p>
              </div>
              <p className="text-sm leading-relaxed text-white/95 mb-4">
                {doctor.philosophy}
              </p>
              <ul className="space-y-2.5 mb-4">
                {doctor.credentials.map((c, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10">
                    <GraduationCap className="h-4 w-4 mt-0.5 shrink-0 text-rose-200" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <Button 
              href="/doctor/dr-mandavi-rai" 
              variant="secondary" 
              className="w-full bg-white hover:bg-white/95 text-rose-700 border-0 justify-center shadow-xl hover:shadow-2xl transition-all group relative z-10"
            >
              <Stethoscope className="h-4 w-4 group-hover:rotate-12 transition-transform" /> 
              Know More
            </Button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(8deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
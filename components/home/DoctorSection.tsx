"use client"
import Image from "next/image";
import { 
  GraduationCap, Heart, Award, Stethoscope, Calendar, Star, 
  Quote, Baby, Users, Target, CheckCircle, ArrowRight, 
  Phone, Mail, MapPin, Clock, Sparkles, Shield, TrendingUp,
  BadgeCheck, Microscope, Syringe
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export function DoctorSection() {
  return (
    <ScrollAnimation direction="left" delay={0.1}>
      <section className="relative py-10 md:py-14 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-white to-pink-50/60" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #e11d48 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />

        {/* Floating Elements - Reduced & Refined */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-5 left-5 md:top-10 md:left-10 opacity-10 animate-float-slow">
            <Heart className="h-12 w-12 md:h-16 md:w-16 text-rose-500" />
          </div>
          <div className="absolute bottom-10 right-5 md:bottom-16 md:right-16 opacity-10 animate-float-medium">
            <Baby className="h-10 w-10 md:h-14 md:w-14 text-rose-400" />
          </div>
          <div className="absolute top-1/2 left-1/4 opacity-8 animate-float-fast hidden md:block">
            <Sparkles className="h-12 w-12 text-amber-400" />
          </div>
          <div className="absolute bottom-1/3 right-10 opacity-8 animate-float-slow hidden lg:block">
            <Award className="h-10 w-10 text-rose-300" />
          </div>
        </div>

        <div className="container-page px-4 sm:px-6 relative z-10">
          
          {/* Section Header - Modern Minimal */}
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 backdrop-blur-sm border border-rose-200/30 text-rose-600 text-xs font-medium tracking-wide mb-3">
              <Heart className="h-3.5 w-3.5" />
              <span>Leading Fertility &amp; IVF Specialist</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
              Dr. <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Mandavi Rai</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-rose-300" />
              <span className="text-xs text-ink-400">Fertility journey is more than a number</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-rose-300" />
            </div>
          </div>

          {/* Main Grid - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 md:gap-8">
            
            {/* ===== LEFT COLUMN ===== */}
            <div className="space-y-4">
              
              {/* Doctor Image Card - Modern Design */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm border border-white/50 group">
                <div className="relative h-[250px] sm:h-[280px] md:h-[400px]">
                  <Image
                    src="https://plain-apac-prod-public.komododecks.com/202608/22/yXZ3mTF4xafiMFQ1J05J/image.jpg"
                    alt="Dr. Mandavi Rai - Fertility & IVF Specialist"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 360px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Rating Badges - Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-semibold text-rose-600 shadow-lg">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      4.9 (200+ Reviews)
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-600/95 backdrop-blur-sm rounded-full text-[10px] font-semibold text-white shadow-lg">
                      <BadgeCheck className="h-3 w-3" />
                      500+ IVF Success
                    </span>
                  </div>

                  {/* Experience Badges - Top */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-lg border border-white/50">
                      <p className="text-xs font-bold text-ink-900">13+ Years</p>
                      <p className="text-[8px] uppercase tracking-wider text-ink-400">Experience</p>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-lg border border-white/50">
                      <p className="text-xs font-bold text-emerald-600">94%</p>
                      <p className="text-[8px] uppercase tracking-wider text-ink-400">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy Card - Modern Gradient */}
              <div className="relative bg-gradient-to-br from-rose-600 via-rose-500 to-pink-600 rounded-2xl p-4 md:p-5 text-white shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="h-3.5 w-3.5 text-white/60" />
                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">Her Philosophy</span>
                  </div>
                  
                  <p className="text-sm md:text-base font-serif italic text-white leading-relaxed mb-2.5">
                    &ldquo;There is no one-size-fits-all path to parenthood.&rdquo;
                  </p>
                  
                  <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                    {['Your history', 'Your body', 'Your journey'].map((text, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/10">
                        <p className="text-[10px] text-white/80">{text}</p>
                        <p className="text-[10px] font-medium text-white">is different</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs text-white/90 font-medium">
                    So your treatment should be too.
                  </p>
                </div>
              </div>

            </div>

            {/* ===== RIGHT COLUMN ===== */}
            <div className="space-y-4">
              
              {/* About Section - Clean Design */}
              <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-rose-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1 rounded-lg bg-rose-100">
                    <Quote className="h-3.5 w-3.5 text-rose-500" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-600">About Dr. Mandavi Rai</span>
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-ink-900 mb-3 leading-snug">
                  Because your fertility journey is more than a number.
                </h3>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50/80 rounded-xl p-2.5 text-center border border-rose-100/30">
                    <Heart className="h-4 w-4 text-rose-400 mx-auto mb-1" />
                    <p className="text-[10px] text-ink-600 leading-tight">Behind every AMH report is a woman</p>
                  </div>
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50/80 rounded-xl p-2.5 text-center border border-rose-100/30">
                    <Users className="h-4 w-4 text-rose-400 mx-auto mb-1" />
                    <p className="text-[10px] text-ink-600 leading-tight">Behind every semen analysis is a couple</p>
                  </div>
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50/80 rounded-xl p-2.5 text-center border border-rose-100/30">
                    <Baby className="h-4 w-4 text-rose-400 mx-auto mb-1" />
                    <p className="text-[10px] text-ink-600 leading-tight">Behind every IVF cycle is a dream</p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-ink-600 leading-relaxed">
                  <span className="font-semibold text-ink-800">Dr. Mandavi Rai</span> is a trusted Fertility &amp; IVF Specialist in Noida and Delhi NCR with extensive experience in fertility and assisted reproductive medicine. She has walked alongside couples through the most hopeful—and difficult—chapters of their lives.
                </p>
              </div>

              {/* Credentials & Approach - Modern Grid */}
              <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-rose-50/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Credentials */}
                  <div>
                    <h4 className="text-xs font-bold text-ink-900 mb-2.5 flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-rose-100">
                        <GraduationCap className="h-3.5 w-3.5 text-rose-500" />
                      </div>
                      Credentials
                    </h4>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-xs text-ink-600 bg-rose-50/30 rounded-lg px-3 py-2 border border-rose-100/20">
                        <GraduationCap className="h-3.5 w-3.5 mt-0.5 shrink-0 text-rose-400" />
                        <span>MBBS, MD (Obstetrics &amp; Gyn)</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-ink-600 bg-rose-50/30 rounded-lg px-3 py-2 border border-rose-100/20">
                        <BadgeCheck className="h-3.5 w-3.5 mt-0.5 shrink-0 text-rose-400" />
                        <span>Fellowship in Reproductive Medicine</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-ink-600 bg-rose-50/30 rounded-lg px-3 py-2 border border-rose-100/20">
                        <Shield className="h-3.5 w-3.5 mt-0.5 shrink-0 text-rose-400" />
                        <span>Ex-Centre Head, Indira IVF Noida</span>
                      </li>
                    </ul>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="text-xs font-bold text-ink-900 mb-2.5 flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-rose-100">
                        <Target className="h-3.5 w-3.5 text-rose-500" />
                      </div>
                      Approach
                    </h4>
                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 text-xs text-ink-600 bg-rose-50/30 rounded-lg px-3 py-2 border border-rose-100/20">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>Personalised Care</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs text-ink-600 bg-rose-50/30 rounded-lg px-3 py-2 border border-rose-100/20">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>Evidence Based Treatment</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs text-ink-600 bg-rose-50/30 rounded-lg px-3 py-2 border border-rose-100/20">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>Compassionate Guidance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* At Divine Message */}
                <div className="mt-3 pt-3 border-t border-rose-100/30">
                  <p className="text-xs md:text-sm text-ink-500 leading-relaxed flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5">✦</span>
                    At Divine, Dr. Mandavi combines clinical experience with personalised, compassionate care—helping couples understand their options and move forward with confidence.
                  </p>
                </div>
              </div>

              {/* CTA Button - Modern */}
              <div className="flex justify-center">
                <Button 
                  href="/doctor/dr-mandavi-rai" 
                  variant="secondary"
                  className="group w-full sm:w-auto bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 shadow-lg hover:shadow-xl transition-all px-6 py-3 text-sm font-semibold rounded-xl hover:scale-[1.02]"
                >
                  <Stethoscope className="h-4 w-4 group-hover:rotate-12 transition-transform" /> 
                  Know More About Dr. Mandavi Rai
                  <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(4deg); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(-4deg); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-6px) rotate(6deg); }
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
        `}</style>
      </section>
    </ScrollAnimation>
  );
}
"use client";

import Image from "next/image";
import { Heart, Award, TrendingUp, CheckCircle, Sparkles, Baby, Star, Users, ArrowUpRight } from "lucide-react";

export function SuccessRate() {
  const ageData = [
    { age: "Age Under 30", rate: 78, color: "#F472B6", icon: Star, patients: "2.8K", label: "High" },
    { age: "Age 30 – 35", rate: 67, color: "#EC4899", icon: Heart, patients: "3.2K", label: "Good" },
    { age: "Age 35 – 40", rate: 58, color: "#DB2777", icon: Sparkles, patients: "2.1K", label: "Moderate" },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://plain-apac-prod-public.komododecks.com/202608/18/jX1Cea6TjOmOdLLrUuTs/image.png"
          alt="IVF Success Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-400/70 via-pink-100/70 to-pink-400/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50/30 to-pink-50/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-rose-200/50 text-rose-700 text-xs font-medium mb-3 shadow-sm">
            <Baby className="h-3.5 w-3.5" />
            <span>Our Success Rate</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">
            Success Rate{' '}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              You Can Trust
            </span>
          </h2>
          
          <p className="text-sm text-ink-500 mt-2">
            Transparent success rates across age groups
          </p>
        </div>

        {/* Age Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {ageData.map((item) => {
            const Icon = item.icon;
            
            return (
              <div
                key={item.age}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-rose-100/50 p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex items-center gap-4">
                  {/* Progress Circle */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="#f3f4f6"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke={item.color}
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 32}
                        strokeDashoffset={2 * Math.PI * 32 * (1 - item.rate / 100)}
                        className="transition-all duration-1000"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-ink-900 leading-none">{item.rate}%</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div 
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: `${item.color}15` }}
                      >
                        <Icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-sm font-semibold text-ink-900">{item.age}</h3>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-ink-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {item.patients}
                      </span>
                      <span className="w-px h-3 bg-rose-200" />
                      <span 
                        className="font-medium px-2 py-0.5 rounded-full text-[10px]"
                        style={{ 
                          background: `${item.color}15`,
                          color: item.color 
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-rose-100/50 shadow-lg hover:shadow-xl transition-all hover:bg-white">
            <p className="text-xs text-ink-500">Total Patients</p>
            <p className="text-2xl md:text-3xl font-bold text-ink-900 mt-1">8.1K+</p>
            <p className="text-[10px] text-emerald-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> 12.5% growth
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-4 text-white shadow-lg backdrop-blur-sm">
            <p className="text-xs opacity-90">Overall Success</p>
            <p className="text-2xl md:text-3xl font-bold mt-1">67.7%</p>
            <p className="text-[10px] opacity-75">Average across ages</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-rose-100/50 shadow-lg hover:shadow-xl transition-all hover:bg-white">
            <p className="text-xs text-ink-500">Success Trend</p>
            <p className="text-2xl md:text-3xl font-bold text-emerald-600 mt-1">+8.2%</p>
            <p className="text-[10px] text-ink-400">vs previous year</p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="bg-gradient-to-r from-rose-50/90 to-pink-50/90 backdrop-blur-sm rounded-2xl p-4 border border-rose-100/50 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-rose-600">92%+</p>
                <p className="text-sm font-semibold text-ink-800">Patient Satisfaction</p>
                <p className="text-xs text-ink-500">5,000+ reviews</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-rose-100/50 shadow-lg flex items-center justify-between hover:shadow-xl transition-all hover:bg-white">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-pink-300 border-2 border-white flex items-center justify-center text-white font-bold text-[8px]">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-800">8,000+ Families</p>
                <p className="text-xs text-ink-500">Trusted worldwide</p>
              </div>
            </div>
            <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-rose-100/50">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            <span className="text-sm text-ink-600 font-medium">
              Thousands of dreams fulfilled with science, care and compassion
            </span>
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
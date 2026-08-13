"use client";

import { Heart, Award, TrendingUp, CheckCircle, Sparkles, Baby, Star, ArrowUpRight, Calendar, Users, Activity } from "lucide-react";

export function SuccessRate() {
  const ageData = [
    { age: "Under 30 Years", rate: 78, color: "#F472B6", icon: Star, patients: 2840, success: "High" },
    { age: "30 – 35 Years", rate: 67, color: "#EC4899", icon: Heart, patients: 3200, success: "Good" },
    { age: "35 – 40 Years", rate: 58, color: "#DB2777", icon: Sparkles, patients: 2100, success: "Moderate" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-pink-100">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center">
              <Baby className="w-4 h-4 text-white" />
            </div>
            <span className="text-pink-600 font-bold tracking-widest text-sm uppercase">
              Our Success Story
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Success Rate 
            <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              {" "}You Can Trust
            </span>
          </h2>
          
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our results reflect our commitment to advanced technology, expertise, and compassionate care.
          </p>
        </div>

        {/* New Format: Radial Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {ageData.map((item, index) => {
            const Icon = item.icon;
            const circumference = 2 * Math.PI * 60;
            const strokeDashoffset = circumference - (item.rate / 100) * circumference;
            
            return (
              <div
                key={item.age}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-pink-100 hover:border-pink-300"
              >
                {/* Card Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold opacity-5 text-gray-900">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="flex flex-col items-center">
                  {/* Circular Progress */}
                  <div className="relative w-40 h-40 mb-6">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#f3f4f6"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke={item.color}
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-1000"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">{item.rate}%</span>
                      <span className="text-xs text-gray-500">Success Rate</span>
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 mb-3 shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                      border: `2px solid ${item.color}40`
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.age}</h3>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{item.patients}+ Patients</span>
                  </div>

                  <div className="mt-4 w-full">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Success Rate</span>
                      <span className="font-semibold" style={{ color: item.color }}>{item.success}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${item.rate}%`,
                          background: `linear-gradient(90deg, ${item.color}66, ${item.color})`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Grid - New Format */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Total Success Rate */}
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Overall Success</p>
                <p className="text-3xl font-bold mt-1">67.7%</p>
                <p className="text-xs opacity-75 mt-1">Average across all ages</p>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          {/* Total Patients */}
          <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Patients</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">8,140</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> 12.5% growth
                </p>
              </div>
              <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-pink-500" />
              </div>
            </div>
          </div>

          {/* Success Rate Trend */}
          <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Success Trend</p>
                <p className="text-3xl font-bold text-green-600 mt-1">+8.2%</p>
                <p className="text-xs text-gray-500 mt-1">vs previous year</p>
              </div>
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center">
                <Activity className="w-7 h-7 text-green-500" />
              </div>
            </div>
          </div>

          {/* Active Treatments */}
          <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Treatments</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">342</p>
                <p className="text-xs text-gray-500 mt-1">Currently ongoing</p>
              </div>
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown - New Format */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-pink-100 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Age-wise Success Breakdown
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ageData.map((item) => (
              <div key={item.age} className="bg-gray-50 rounded-2xl p-6 hover:bg-pink-50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{item.age}</p>
                    <p className="text-2xl font-bold text-gray-900">{item.rate}%</p>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${item.color}20` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Success Rate</span>
                    <span className="font-semibold" style={{ color: item.color }}>{item.rate}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${item.rate}%`,
                        background: `linear-gradient(90deg, ${item.color}66, ${item.color})`
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>Patients: {item.patients}</span>
                    <span>Status: {item.success}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Satisfaction & Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Satisfaction */}
          <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-pink-50 rounded-2xl p-8 border border-pink-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-300 rounded-full filter blur-2xl opacity-20"></div>
            <div className="relative flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-600">92%+</p>
                <p className="text-lg font-semibold text-gray-800">Patient Satisfaction</p>
                <p className="text-sm text-gray-600">Based on 5,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-white rounded-2xl p-8 border border-pink-100 shadow-lg flex items-center justify-center gap-4 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-gray-800">Trusted by 8,000+</p>
                <p className="text-sm text-gray-500">Families worldwide</p>
              </div>
            </div>
            <CheckCircle className="w-8 h-8 text-pink-500 flex-shrink-0" />
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-pink-100">
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
            <span className="text-gray-700 font-medium">
              Thousands of dreams fulfilled with science, care and compassion.
            </span>
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
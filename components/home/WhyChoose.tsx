"use client"
import { UserRound, ClipboardList, Users2, FlaskConical, MessagesSquare, Heart, Baby, Sparkles, Shield, Star, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  { 
    icon: UserRound, 
    title: "Doctor-Led Care", 
    text: "Every plan is shaped directly by Dr. Mandavi Rai, not a rotating team.",
    color: "rose",
    gradient: "from-rose-500 to-pink-500"
  },
  { 
    icon: ClipboardList, 
    title: "Individualised Evaluation", 
    text: "Investigations tailored to your history, not a one-size protocol.",
    color: "purple",
    gradient: "from-purple-500 to-violet-500"
  },
  { 
    icon: Users2, 
    title: "Male + Female Assessment", 
    text: "Fertility is evaluated for both partners, together.",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: FlaskConical, 
    title: "Advanced Reproductive Options", 
    text: "From IUI to ICSI, PICSI, IMSI, ERA and genetic testing.",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500"
  },
  { 
    icon: MessagesSquare, 
    title: "Clear Communication", 
    text: "Every step explained in plain language, with room for questions.",
    color: "amber",
    gradient: "from-amber-500 to-orange-500"
  },
];

const colorVariants = {
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
    hover: "hover:border-rose-300 hover:shadow-rose-100",
    gradient: "from-rose-500 to-pink-500"
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
    hover: "hover:border-purple-300 hover:shadow-purple-100",
    gradient: "from-purple-500 to-violet-500"
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    hover: "hover:border-blue-300 hover:shadow-blue-100",
    gradient: "from-blue-500 to-cyan-500"
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    hover: "hover:border-emerald-300 hover:shadow-emerald-100",
    gradient: "from-emerald-500 to-teal-500"
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    hover: "hover:border-amber-300 hover:shadow-amber-100",
    gradient: "from-amber-500 to-orange-500"
  }
};

export function WhyChoose() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Hearts */}
        <div className="absolute top-10 right-20 opacity-10 animate-float-slow">
          <Heart className="h-32 w-32 text-rose-400" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-float-medium">
          <Baby className="h-24 w-24 text-rose-300" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Sparkles className="h-48 w-48 text-rose-200" />
        </div>
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-50/30 rounded-full blur-3xl" />
      </div>

      <div className="container-page px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/80 backdrop-blur-sm border border-rose-200/50 text-rose-700 text-sm font-medium mb-4">
            <Star className="h-4 w-4 fill-rose-400" />
            <span>Why Divine IVF</span>
          </div>
          <h2 className="text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Built around{' '}
            <span className="font-serif italic bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              how you're actually cared for
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-rose-300" />
            <span className="text-sm text-ink-400">Comprehensive Fertility Care</span>
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-rose-300" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {reasons.map(({ icon: Icon, title, text, color }, index) => {
            const colors = colorVariants[color as keyof typeof colorVariants];
            return (
              <div
                key={title}
                className={`group relative rounded-2xl border ${colors.border} ${colors.bg} p-6 md:p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${colors.hover} overflow-hidden`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Card Number */}
                <div className="absolute top-3 right-3 text-4xl font-bold text-ink-900/5 group-hover:text-ink-900/10 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText} mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-sm font-semibold text-ink-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-ink-500 leading-relaxed">
                    {text}
                  </p>
                </div>

                {/* Decorative Dot */}
                <div className={`absolute bottom-4 right-4 h-2 w-2 rounded-full ${colors.iconBg} opacity-50 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-rose-200/50 shadow-lg">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span className="text-xs text-ink-600">100% Transparent Care</span>
            </div>
            <span className="h-4 w-px bg-rose-200" />
            <div className="flex items-center gap-2">
              <Baby className="h-4 w-4 text-rose-500" />
              <span className="text-xs text-ink-600">500+ Happy Families</span>
            </div>
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
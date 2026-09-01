"use client"
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, Baby, Sparkles, ArrowRight, Calendar, 
  Clock, CheckCircle, Route, Calculator, CalendarDays,
  Activity, Target, Scale, AlertCircle
} from "lucide-react";

export function IvfJourney() {
  const calculators = [
    {
      icon: Calendar,
      title: "Ovulation Calculator",
      description: "Find your most fertile days",
      link: "/calculators",
      color: "rose"
    },
    {
      icon: CalendarDays,
      title: "Period Calculator",
      description: "Predict your next period",
      link: "/calculators",
      color: "pink"
    },
    {
      icon: Baby,
      title: "Due Date Calculator",
      description: "Estimate your due date",
      link: "/calculators",
      color: "purple"
    },
    {
      icon: Activity,
      title: "IVF Success Calculator",
      description: "Estimate your IVF chances",
      link: "/calculators",
      color: "rose"
    },
    {
      icon: Target,
      title: "Fertility Score Calculator",
      description: "Evaluate your fertility health",
      link: "/calculators",
      color: "teal"
    },
    {
      icon: Scale,
      title: "BMI Calculator",
      description: "Check your BMI impact",
      link: "/calculators",
      color: "indigo"
    },
    {
      icon: AlertCircle,
      title: "PCOS Risk Calculator",
      description: "Assess your PCOS risk",
      link: "/calculators",
      color: "amber"
    }
  ];

  const steps = [
    { icon: CheckCircle, text: "Enter Details" },
    { icon: Calculator, text: "Calculate" },
    { icon: Sparkles, text: "Get Results" },
    { icon: ArrowRight, text: "Take Action" }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-rose-50/10 to-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-50/10 rounded-full blur-3xl" />
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-10 opacity-5 animate-float-slow">
          <Calculator className="h-32 w-32 text-rose-400" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 animate-float-medium">
          <Heart className="h-24 w-24 text-rose-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
            <Calculator className="h-3.5 w-3.5" />
            <span>Fertility Calculators</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 leading-[1.15] mb-4">
            Understand Your{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
              Fertility Better
            </span>
          </h2>

          <p className="text-sm md:text-base text-ink-500 leading-relaxed max-w-2xl mx-auto">
            Track, calculate, and plan your path to parenthood with our easy-to-use calculators.
          </p>
 
        </div>

        {/* Calculators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <Link
                key={calc.title}
                href={calc.link}
                className="group bg-white rounded-2xl p-5 border border-rose-100/50 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-${calc.color}-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 text-${calc.color}-500`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-xs text-ink-400 mt-0.5">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-rose-500 text-xs font-medium mt-2 group-hover:gap-2 transition-all">
                      Calculate Now
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div className="mt-6">
          <Link
              href="/calculators"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calculator className="h-4 w-4" />
              View All Calculators
              <ArrowRight className="h-4 w-4" />
            </Link>
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
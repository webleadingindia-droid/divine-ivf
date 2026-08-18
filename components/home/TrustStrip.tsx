"use client"
import { HeartPulse, Microscope, UserRound, Stethoscope, Baby } from "lucide-react";

const categories = [
  { icon: HeartPulse, label: "IVF & Fertility" },
  { icon: Microscope, label: "Advanced Care" },
  { icon: UserRound, label: "Male Fertility" },
  { icon: Stethoscope, label: "Women's Health" },
  { icon: Baby, label: "Pregnancy Care" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-6 md:-mt-10">
      <div className="container-page px-3 sm:px-4 md:px-6">
        <div className="rounded-xl md:rounded-2xl lg:rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-bloom-border/50 overflow-hidden">
          
          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid md:grid-cols-5 divide-x divide-bloom-border/50">
            {categories.map(({ icon: Icon, label }) => (
              <div 
                key={label} 
                className="flex flex-col items-center text-center gap-2.5 px-4 py-6 hover:bg-bloom-50/50 transition-colors duration-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-600 border border-rose-100">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-ink-700 leading-snug">{label}</span>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Single Row Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto overflow-y-hidden py-3 px-2 scrollbar-hide">
            <div className="flex gap-2.5 min-w-max">
              {categories.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex-shrink-0 flex flex-col items-center text-center gap-1.5 px-4 py-3 min-w-[90px] rounded-xl bg-gradient-to-b from-rose-50/80 to-white border border-rose-100/50 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-medium text-ink-700 leading-tight whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
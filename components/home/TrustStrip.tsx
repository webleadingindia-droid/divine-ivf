import { HeartPulse, Microscope, UserRound, Stethoscope, Baby } from "lucide-react";

const categories = [
  { icon: HeartPulse, label: "IVF & Fertility" },
  { icon: Microscope, label: "Advanced Reproductive Care" },
  { icon: UserRound, label: "Male Fertility" },
  { icon: Stethoscope, label: "Women's Health" },
  { icon: Baby, label: "Pregnancy Care" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-8 md:-mt-10">
      <div className="container-page">
        <div className="rounded-2xl md:rounded-[2rem] bg-white shadow-lift border border-bloom-border grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-bloom-border">
          {categories.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2.5 px-4 py-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bloom-100 text-rose-600">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs md:text-sm font-medium text-ink-600 leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

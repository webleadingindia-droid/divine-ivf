import { fertilityJourneySteps } from "@/data/journey";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FertilityJourney() {
  return (
    <section className="bg-bloom-100 py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">The Fertility Journey</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Six stages, <span className="font-serif italic text-rose-600">one continuous thread</span>
          </h2>
        </div>

        {/* Desktop: horizontal timeline along the signature bloom line */}
        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-5 h-px bg-rose-400/40" aria-hidden="true" />
          <div className="grid grid-cols-6 gap-4">
            {fertilityJourneySteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="relative z-10 mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-rose-500 text-rose-600 text-sm font-semibold shadow-soft">
                  {i + 1}
                </div>
                <h3 className="text-center text-sm font-semibold text-ink-900 mb-2">{step.title}</h3>
                <p className="text-center text-xs text-ink-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-rose-400/40" aria-hidden="true" />
          <div className="flex flex-col gap-8">
            {fertilityJourneySteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="absolute -left-8 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-rose-500 text-rose-600 text-xs font-semibold shadow-soft">
                  {i + 1}
                </div>
                <h3 className="text-sm font-semibold text-ink-900 mb-1.5">{step.title}</h3>
                <p className="text-xs text-ink-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ivfJourneySteps } from "@/data/journey";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function IvfJourney() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card">
              <Image
                src="https://plain-apac-prod-public.komododecks.com/202608/13/vB4bkpkeyKSLF2CDhGNt/image.webp"
                alt="Embryology laboratory work as part of the IVF process"
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel>IVF, Step by Step</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900 mb-8">
              Understanding your{" "}
              <span className="font-serif italic text-rose-600">IVF journey</span>
            </h2>

            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {ivfJourneySteps.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-bloom-100 text-rose-600 text-xs font-semibold mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{step.title}</p>
                    <p className="text-xs text-ink-400 leading-relaxed mt-0.5">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

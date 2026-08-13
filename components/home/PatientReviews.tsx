import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PatientReviews() {
  return (
    <section className="bg-bloom-100 py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="justify-center">Patient Experiences</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Experiences shared by{" "}
            <span className="font-serif italic text-rose-600">patients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:overflow-visible overflow-x-auto md:pb-0 pb-2 snap-x">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[85vw] md:w-auto rounded-[1.75rem] bg-white border border-bloom-border shadow-card p-7"
            >
              <Quote className="h-6 w-6 text-rose-300 mb-4" />
              <p className="text-sm text-ink-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-ink-900">{t.attribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

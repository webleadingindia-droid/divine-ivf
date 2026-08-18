import { CalendarHeart, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

export function ConsultationBanner({ heading }: { heading?: React.ReactNode }) {
  return (
    <section className="bg-rose-gradient py-16 md:py-20">
      <div className="container-page text-center max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-white mb-5">
          {heading ?? (
            <>
              Talk to <span className="font-serif italic">Dr. Mandavi Rai</span> about your options
            </>
          )}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/consultation"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-rose-600 shadow-lift hover:-translate-y-0.5 transition-transform"
          >
            <CalendarHeart className="h-4 w-4" /> Book Consultation
          </a>
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4" /> Call {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

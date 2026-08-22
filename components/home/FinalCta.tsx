import { CalendarHeart, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { BloomMotif } from "@/components/ui/BloomMotif";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-rose-gradient py-20 md:py-24">
      <BloomMotif
        className="absolute -bottom-16 -right-16 h-80 w-80 opacity-20"
        strokeColor="#FFFFFF"
      />
      <div className="container-page relative text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl leading-tight text-white mb-6">
          Your next step can start with{" "}
          <span className="font-serif italic">a conversation</span>.
        </h2>
        <p className="text-white/85 mb-9 leading-relaxed">
          Reach out to Divine Ivf in Sector 76, Noida, and
          take the first step toward a clear, personalised plan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/consultation"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-rose-600 shadow-lift hover:-translate-y-0.5 transition-transform"
          >
            <CalendarHeart className="h-4 w-4" /> Book Consultation
          </a>
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4" /> Call {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

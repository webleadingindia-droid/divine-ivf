import Image from "next/image";
import { CalendarHeart, Phone, MapPin, Sparkles } from "lucide-react";
import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { BloomMotif } from "@/components/ui/BloomMotif";

const trustPoints = [
  "Personalised fertility evaluation",
  "IVF & advanced fertility treatments",
  "Male & female fertility assessment",
  "Women's health & pregnancy care",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bloom-gradient">
      <BloomMotif
        className="absolute -top-10 -left-16 h-72 w-72 opacity-40 hidden md:block"
        strokeColor="#B83E6B"
      />
      <div className="container-page relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center py-16 md:py-24">
        <div className="animate-fade-up">
          <span className="section-label mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Divine Women &amp; IVF Clinic, Sector 76, Noida
          </span>
          <h1 className="text-4xl md:text-6xl leading-[1.08] text-ink-900 mb-6">
            Trying to conceive?{" "}
            <span className="font-serif italic text-rose-600">
              Let&apos;s find the right next step
            </span>{" "}
            — together.
          </h1>
          <p className="text-base md:text-lg text-ink-400 max-w-xl mb-8 leading-relaxed">
            Personalised fertility evaluation, IVF and reproductive care with
            Dr. Mandavi Rai — built around your history, not a standard protocol.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button href="/consultation" icon={false}>
              <CalendarHeart className="h-4 w-4" /> Book Consultation
            </Button>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-bloom-border bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink-900 hover:border-rose-400 transition-colors"
            >
              <Phone className="h-4 w-4 text-rose-600" /> Call {clinic.phone}
            </a>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-ink-600">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[3rem] rounded-tr-[6rem] shadow-lift">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/yyj21dCsGfBfY6wBiNbA/image.webp"
              alt="Doctor consulting with a couple about fertility care"
              fill
              sizes="(max-width: 768px) 90vw, 480px"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-6 -left-4 md:-left-10 rounded-2xl bg-white shadow-lift px-5 py-4 flex items-center gap-3 max-w-[240px]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bloom-100 text-rose-600">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-ink-400">Visit the clinic</p>
              <p className="text-sm font-semibold text-ink-900">{clinic.addressShort}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

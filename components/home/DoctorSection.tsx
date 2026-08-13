import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { doctor } from "@/data/doctor";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function DoctorSection() {
  return (
    <section className="bg-bloom-50 py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="justify-center">Your Fertility Specialist</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Meet <span className="font-serif italic text-rose-600">{doctor.name}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr_0.9fr] gap-8 items-stretch">
          <div className="relative rounded-[2rem] overflow-hidden shadow-card min-h-[340px] lg:min-h-0">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/uDJ20RmMzJIItIpPZ2iH/image.webp"
              alt="Dr. Mandavi Rai, Gynecologist & IVF Specialist"
              fill
              sizes="(max-width: 1024px) 90vw, 360px"
              className="object-cover"
            />
          </div>

          <div className="bg-white rounded-[2rem] shadow-card p-8 md:p-10 flex flex-col justify-center">
            <p className="text-sm font-semibold text-rose-600 mb-1">{doctor.role}</p>
            <h3 className="font-serif italic text-2xl text-ink-900 mb-4">{doctor.name}</h3>
            {doctor.bio.map((p) => (
              <p key={p} className="text-ink-400 leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          <div className="rounded-[2rem] bg-rose-gradient text-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="font-serif italic text-xl mb-5">Her approach</p>
              <p className="text-sm leading-relaxed text-white/90 mb-6">{doctor.philosophy}</p>
              <ul className="space-y-3">
                {doctor.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-white/90">
                    <GraduationCap className="h-4 w-4 mt-0.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <Button href="/doctor/dr-mandavi-rai" variant="secondary" className="mt-8 bg-white/95 border-0 justify-center">
              Meet Dr. Mandavi Rai
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

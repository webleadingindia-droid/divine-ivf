"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { advancedIvfTreatments } from "@/data/journey";
import { SectionLabel } from "@/components/ui/SectionLabel";

const visual = "https://plain-apac-prod-public.komododecks.com/202608/13/3yREaJKga7KST2faAmIT/image.webp";

export function AdvancedIvf() {
  const [active, setActive] = useState(advancedIvfTreatments[0].key);
  const current = advancedIvfTreatments.find((t) => t.key === active)!;

  return (
    <section className="bg-bloom-100 py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="justify-center">Advanced IVF</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Precision techniques,{" "}
            <span className="font-serif italic text-rose-600">explained clearly</span>
          </h2>
        </div>

        {/* Desktop: three-column interactive layout */}
        <div className="hidden md:grid grid-cols-[220px_1fr_320px] gap-8 bg-white rounded-[2rem] shadow-card p-3">
          <div className="flex flex-col py-4">
            {advancedIvfTreatments.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`text-left rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === t.key ? "bg-rose-600 text-white" : "text-ink-600 hover:bg-bloom-50"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-center py-8 pr-4">
            <h3 className="font-serif italic text-2xl text-ink-900 mb-4">{current.name}</h3>
            <p className="text-ink-400 leading-relaxed mb-6">{current.description}</p>
            <Link href={current.href} className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600">
              Learn more about {current.name} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative rounded-r-[1.75rem] overflow-hidden">
            <Image src={visual} alt={`Laboratory work related to ${current.name}`} fill className="object-cover" sizes="320px" />
          </div>
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden flex flex-col divide-y divide-bloom-border bg-white rounded-2xl shadow-card overflow-hidden">
          {advancedIvfTreatments.map((t) => (
            <details key={t.key} className="group px-5 py-4">
              <summary className="flex items-center justify-between text-sm font-semibold text-ink-900 cursor-pointer list-none">
                {t.name}
                <span className="text-rose-600 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
              </summary>
              <p className="text-sm text-ink-400 leading-relaxed mt-3">{t.description}</p>
              <Link href={t.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 mt-3">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { careExplorerOptions } from "@/data/journey";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CareExplorer() {
  const [active, setActive] = useState(careExplorerOptions[0].key);
  const current = careExplorerOptions.find((o) => o.key === active)!;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel className="justify-center">Care Explorer</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Where are you in your{" "}
            <span className="font-serif italic text-rose-600">journey?</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {careExplorerOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActive(option.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium border transition-all ${
                active === option.key
                  ? "bg-rose-600 border-rose-600 text-white shadow-soft"
                  : "bg-bloom-50 border-bloom-border text-ink-600 hover:border-rose-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="rounded-[2rem] bg-bloom-50 border border-bloom-border p-8 md:p-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-ink-900 leading-relaxed mb-6">{current.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {current.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-rose-600 border border-bloom-border hover:border-rose-400 transition-colors"
              >
                {link.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

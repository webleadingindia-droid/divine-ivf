"use client";

import { useState } from "react";
import { faqCategories } from "@/data/faqs";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Faq() {
  const [openTab, setOpenTab] = useState(faqCategories[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const active = faqCategories.find((c) => c.category === openTab)!;

  return (
    <section className="bg-bloom-100 py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel className="justify-center">FAQs</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Common <span className="font-serif italic text-rose-600">questions</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {faqCategories.map((c) => (
            <button
              key={c.category}
              onClick={() => {
                setOpenTab(c.category);
                setOpenIndex(0);
              }}
              className={`rounded-full px-4 py-2 text-xs md:text-sm font-medium border transition-all ${
                openTab === c.category
                  ? "bg-rose-600 border-rose-600 text-white"
                  : "bg-white border-bloom-border text-ink-600 hover:border-rose-300"
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {active.items.map((item, i) => (
            <div key={item.question} className="rounded-2xl bg-white border border-bloom-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm md:text-base font-semibold text-ink-900">{item.question}</span>
                <span
                  className={`shrink-0 text-rose-600 text-xl leading-none transition-transform ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <p className="px-6 pb-5 text-sm text-ink-400 leading-relaxed">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

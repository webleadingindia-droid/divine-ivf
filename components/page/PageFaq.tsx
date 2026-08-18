"use client";

import { useState } from "react";

type Item = { question: string; answer: string };

export function PageFaq({ items, title = "Frequently asked questions" }: { items: Item[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl text-ink-900 mb-8">{title}</h2>
          <div className="flex flex-col gap-3">
            {items.map((item, i) => (
              <div key={item.question} className="rounded-2xl bg-bloom-50 border border-bloom-border overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm md:text-base font-semibold text-ink-900">{item.question}</span>
                  <span className={`shrink-0 text-rose-600 text-xl leading-none transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {open === i && <p className="px-6 pb-5 text-sm text-ink-400 leading-relaxed">{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-rose-100 border border-rose-100 rounded-2xl bg-white overflow-hidden">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-rose-50/40 transition-colors"
            >
              <span className="text-sm font-semibold text-ink-900">{faq.question}</span>
              <ChevronDown
                className={`h-4 w-4 text-rose-500 shrink-0 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm text-ink-500 leading-relaxed px-5 pb-5">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

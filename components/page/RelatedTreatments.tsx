import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Related = { name: string; href: string; blurb: string };

export function RelatedTreatments({ items }: { items: Related[] }) {
  return (
    <section className="bg-bloom-100 py-14 md:py-20">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl text-ink-900 mb-8">Related treatments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl bg-white border border-bloom-border p-6 hover:shadow-lift hover:border-rose-200 transition-all"
            >
              <h3 className="text-sm font-semibold text-ink-900 mb-2">{item.name}</h3>
              <p className="text-xs text-ink-400 leading-relaxed mb-4">{item.blurb}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

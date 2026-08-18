import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { resources } from "@/data/resources";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function Resources() {
  return (
    <section className="bg-bloom-50 py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Knowledge Hub</SectionLabel>

            <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
              Fertility knowledge &amp;{" "}
              <span className="font-serif italic text-rose-600">
                insights
              </span>
            </h2>
          </div>

          <Button href="/resources" variant="secondary">
            View all resources
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.slice(0, 3).map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group overflow-hidden rounded-[1.75rem] bg-white border border-bloom-border hover:shadow-lift hover:border-rose-200 transition-all flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-bloom-100">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-rose-600 mb-3">
                  {r.category}
                </span>

                <h3 className="text-base font-semibold text-ink-900 mb-2 leading-snug">
                  {r.title}
                </h3>

                <p className="text-sm text-ink-400 leading-relaxed mb-5 flex-1">
                  {r.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-ink-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {r.readTime}
                  </span>

                  <ArrowRight className="h-4 w-4 text-rose-600 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

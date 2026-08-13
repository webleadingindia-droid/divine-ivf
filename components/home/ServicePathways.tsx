import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceGroups } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServicePathways() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="justify-center">
            Care Pathways
          </SectionLabel>

          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Every service, organised{" "}
            <span className="font-serif italic text-rose-600">
              around your care
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceGroups.map((group) => (
            <Link
              key={group.key}
              href={group.href}
              className="group overflow-hidden rounded-[1.75rem] bg-bloom-50 border border-bloom-border hover:bg-white hover:shadow-lift hover:border-rose-200 transition-all"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-lg font-semibold text-ink-900 mb-2">
                  {group.title}
                </h3>

                <p className="text-sm text-ink-400 leading-relaxed mb-5">
                  {group.summary}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {group.services.slice(0, 3).map((service) => (
                    <li
                      key={service.slug}
                      className="text-xs text-ink-600 flex items-center gap-2"
                    >
                      <span className="h-1 w-1 rounded-full bg-rose-400" />
                      {service.name}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
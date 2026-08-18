import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-xs text-ink-400">
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-rose-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-600 font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}

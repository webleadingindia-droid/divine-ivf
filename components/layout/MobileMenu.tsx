"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { clinic } from "@/data/clinic";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-ink-900/30 h-[800px]" onClick={onClose} />
      <div className="absolute right-0 top-0 w-[86%] h-[800px] max-w-sm bg-cream overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-bloom-border">
          <span className="font-serif italic text-lg text-ink-900">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/ogk7ZQX5gBWM2RUIIFMd/image.png"
              alt="Embryology laboratory work as part of the IVF process"
              width={100}
              height={100}
            />
          </span>
          <button onClick={onClose} aria-label="Close menu" className="p-2">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4">
          {primaryNav.map((item) => (
            <div key={item.label} className="border-b border-bloom-border/70 last:border-0">
              <button
                className="w-full flex items-center justify-between py-3.5 text-left text-sm font-semibold text-ink-900"
                onClick={() =>
                  item.children
                    ? setExpanded(expanded === item.label ? null : item.label)
                    : onClose()
                }
              >
                <Link href={item.href} onClick={onClose}>
                  {item.label}
                </Link>
                {item.children && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setExpanded(expanded === item.label ? null : item.label);
                    }}
                  />
                )}
              </button>
              {item.children && expanded === item.label && (
                <div className="pb-3 pl-3 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-bloom-100"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-5">
          <a
            href={clinic.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full bg-rose-600 py-3 text-sm font-semibold text-white mb-3"
          >
            <Phone className="h-4 w-4" /> Call {clinic.phone}
          </a>
          <Link
            href="/consultation"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-full border border-rose-400 py-3 text-sm font-semibold text-rose-600"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

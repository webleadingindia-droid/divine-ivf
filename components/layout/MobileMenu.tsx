"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, Star } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { clinic } from "@/data/clinic";

// Small inline Google "G" logo (multi-color), no extra asset needed
function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.02v5.84h7.73c4.51-4.18 7.09-10.36 7.09-17.33z"
        fill="#4285F4"
      />
      <path
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6.84c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.9H2.51v6.22C6.44 42.62 14.62 48 24 48z"
        fill="#34A853"
      />
      <path
        d="M10.53 28.75c-.48-1.45-.76-3-.76-4.75s.28-3.3.76-4.75v-6.22H2.51A23.99 23.99 0 000 24c0 3.9.93 7.6 2.51 10.97l8.02-6.22z"
        fill="#FBBC05"
      />
      <path
        d="M24 9.52c3.53 0 6.7 1.21 9.19 3.6l6.85-6.85C35.93 2.31 30.47 0 24 0 14.62 0 6.44 5.38 2.51 13.03l8.02 6.22c1.9-5.68 7.21-9.73 13.47-9.73z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Redesigned mobile Google review card
function GoogleReviewCard() {
  return (
    <div className="mx-5 mt-4 flex items-center gap-3 rounded-2xl border border-bloom-border bg-white px-4 py-3 shadow-soft">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bloom-50">
        <GoogleG className="h-5 w-5" />
      </div>
      <div className="flex-1 leading-tight">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-ink-900">4.9</span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        <div className="text-xs font-medium text-ink-500 mt-0.5">
          Rated by 300+ Couples on Google
        </div>
      </div>
    </div>
  );
}

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

        <GoogleReviewCard />

      </div>
    </div>
  );
}
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone, Menu, Star } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { clinic } from "@/data/clinic";
import { BloomMotif } from "@/components/ui/BloomMotif";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { TopBar } from "@/components/layout/TopBar";

// Small inline Google "G" logo (multi-color), no extra asset needed
function GoogleG({ className = "h-3.5 w-3.5" }: { className?: string }) {
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

// Compact pill-shaped Google review badge
function GoogleReviewBadge() {
  return (
    <div className="hidden xl:inline-flex items-center gap-1.5 rounded-full bg-bloom-50/80 border border-bloom-border px-3 py-1.5">
      <GoogleG className="h-3.5 w-3.5 shrink-0" />
      <Star className="h-3 w-3 fill-amber-400 text-amber-400 shrink-0" />
      <span className="text-xs font-semibold text-ink-900 whitespace-nowrap">4.9</span>
      <span className="text-xs text-ink-400 whitespace-nowrap">· 300+ reviews</span>
    </div>
  );
}

export function Header() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenKey(label);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenKey(null), 120);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* 👇 TopBar — Header ke andar, sticky wrapper ke andar */}
      <TopBar />

      {/* Navbar */}
      <div className="bg-cream/90 backdrop-blur-md border-b border-bloom-border">
        <div className="container-page flex items-center justify-between py-3.5">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/ogk7ZQX5gBWM2RUIIFMd/image.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" onMouseLeave={handleLeave}>
            {primaryNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleEnter(item.label)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium text-ink-600 hover:text-rose-600 hover:bg-bloom-100/70 transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {item.children && openKey === item.label && (
                  <div className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-bloom-border bg-white shadow-lift p-6 grid grid-cols-2 gap-x-8 gap-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-xl px-3 py-2.5 hover:bg-bloom-50 transition-colors"
                        >
                          <div className="text-sm font-semibold text-ink-900">{child.label}</div>
                          {child.description && (
                            <div className="text-xs text-ink-400 mt-0.5">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <GoogleReviewBadge />
            <Link
              href="/consultation"
              className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-rose-500 hover:shadow-lift transition-all"
            >
              Book Consultation
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-ink-900"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
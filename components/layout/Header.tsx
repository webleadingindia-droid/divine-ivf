"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone, Menu } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { clinic } from "@/data/clinic";
import { BloomMotif } from "@/components/ui/BloomMotif";
import { MobileMenu } from "@/components/layout/MobileMenu";

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
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-bloom-border">
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

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

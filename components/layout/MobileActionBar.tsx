// components/layout/MobileActionBar.tsx (Pill Design)
"use client";

import Link from "next/link";
import { Phone, CalendarHeart, MessageCircle } from "lucide-react";
import { clinic } from "@/data/clinic";

export function MobileActionBar() {
  const whatsappNumber = clinic.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
      <div className="flex justify-center pb-3 px-3">
        <div className="bg-white/90 backdrop-blur-2xl rounded-full border border-white/30 shadow-2xl shadow-black/10 px-2.5 py-1.5 flex items-center justify-between gap-1 max-w-md w-full">
          {/* Call */}
          <a
            href={clinic.phoneHref}
            className="group flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-rose-50/80 transition-all duration-300 active:scale-95"
          >
            <div className="p-0.5 rounded-full bg-gradient-to-br from-rose-100 to-rose-50">
              <Phone className="h-3.5 w-3.5 text-rose-500" />
            </div>
            <span className="text-[10px] font-medium text-gray-600 group-hover:text-rose-600 transition-colors">Call</span>
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200/50"></div>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-emerald-50/80 transition-all duration-300 active:scale-95"
          >
            <div className="p-0.5 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50">
              <MessageCircle className="h-3.5 w-3.5 text-emerald-500" />
            </div>
            <span className="text-[10px] font-medium text-gray-600 group-hover:text-emerald-600 transition-colors">WhatsApp</span>
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200/50"></div>

          {/* Book Now */}
          <Link
            href="/consultation"
            className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 active:scale-95 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <CalendarHeart className="h-3.5 w-3.5 text-white" />
            <span className="text-[10px] font-bold text-white tracking-wide">Book Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
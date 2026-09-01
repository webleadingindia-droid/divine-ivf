// components/layout/MobileActionBar.tsx (Clean Modern Premium)
"use client";

import Link from "next/link";
import { Phone, CalendarHeart, MessageCircle, ChevronRight } from "lucide-react";
import { clinic } from "@/data/clinic";

export function MobileActionBar() {
  const whatsappNumber = clinic.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
      <div className="flex justify-center pb-5 px-4">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/5 px-1.5 py-1.5 flex items-center gap-1 max-w-sm w-full">
          
          {/* Call Button */}
          <a
            href={clinic.phoneHref}
            className="group flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-95 flex-1"
          >
            <Phone className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
            <span className="text-[11px] font-medium text-gray-500 group-hover:text-blue-600 transition-colors">Call</span>
          </a>

          {/* Divider */}
          <div className="w-px h-7 bg-gray-100"></div>

          {/* WhatsApp Button - Subtle Highlight */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 transition-all duration-200 active:scale-95 flex-[1.3]"
          >
            <div className="p-1 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
              <MessageCircle className="h-4 w-4 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-emerald-700 group-hover:text-emerald-800 transition-colors">WhatsApp</span>
              <span className="text-[8px] font-medium text-emerald-500 bg-emerald-100 px-1.5 py-0.5 rounded-full">Chat</span>
            </div>
          </a>

          {/* Divider */}
          <div className="w-px h-7 bg-gray-100"></div>

          {/* Book Now Button */}
          <Link
            href="/consultation"
            className="group flex items-center gap-1.5 px-3 py-2.5 rounded-xl hover:bg-rose-50/80 transition-all duration-200 active:scale-95 flex-1"
          >
            <CalendarHeart className="h-4 w-4 text-gray-400 group-hover:text-rose-500 transition-colors" />
            <span className="text-[11px] font-medium text-gray-500 group-hover:text-rose-600 transition-colors">Book</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
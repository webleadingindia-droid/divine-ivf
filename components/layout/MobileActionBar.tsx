import Link from "next/link";
import { Phone, CalendarHeart } from "lucide-react";
import { clinic } from "@/data/clinic";

export function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-bloom-border bg-white/95 backdrop-blur-md">
      <div className="grid grid-cols-2">
        <a
          href={clinic.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-rose-600 border-r border-bloom-border"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <Link
          href="/consultation"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-rose-600"
        >
          <CalendarHeart className="h-4 w-4" /> Book Consultation
        </Link>
      </div>
    </div>
  );
}

import { MapPin, Phone, Mail } from "lucide-react";
import { clinic } from "@/data/clinic";

export function TopBar() {
  return (
    <div className="hidden md:block bg-rose-600 text-white">
      <div className="container-page flex items-center justify-between py-2 text-xs tracking-wide">
        <div className="flex items-center gap-6">
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity"
          >
            <MapPin className="h-3.5 w-3.5" />
            {clinic.addressLines}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href={clinic.phoneHref} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            {clinic.phone}
          </a>
          <a href={clinic.emailHref} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <Mail className="h-3.5 w-3.5" />
            {clinic.email}
          </a>
        </div>
      </div>
    </div>
  );
}

// components/layout/TopBar.tsx
import { MapPin, Phone, Mail, MessageCircle, Clock, Award, ChevronRight } from "lucide-react";
import { clinic } from "@/data/clinic";

export function TopBar() {
  // WhatsApp number (same as phone or separate)
  const whatsappNumber = clinic.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="hidden md:block bg-gradient-to-r from-rose-700 via-rose-600 to-rose-500 text-white border-b border-white/10">
      <div className="container-page flex items-center justify-between py-2.5 text-xs">
        {/* Left Section - Address with Icon */}
        <div className="flex items-center gap-6">
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 opacity-90 hover:opacity-100 transition-all duration-200"
          >
            <span className="p-0.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <MapPin className="h-3.5 w-3.5" />
            </span>
            <span className="font-medium">{clinic.addressLines}</span>
            <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
          </a>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex items-center gap-4">
          {/* Working Hours Badge */}
          <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5" />
            <span className="font-medium">Mon-Sat 9AM-7PM</span>
          </div>

          <div className="h-5 w-px bg-white/20"></div>

          {/* Phone */}
          <a
            href={clinic.phoneHref}
            className="group flex items-center gap-2 opacity-90 hover:opacity-100 transition-all duration-200"
          >
            <span className="p-0.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <span className="font-medium">{clinic.phone}</span>
          </a>

          <div className="h-5 w-px bg-white/20"></div>

          {/* Email */}
          <a
            href={clinic.emailHref}
            className="group flex items-center gap-2 opacity-90 hover:opacity-100 transition-all duration-200"
          >
            <span className="p-0.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <Mail className="h-3.5 w-3.5" />
            </span>
            <span className="font-medium hidden xl:inline">{clinic.email}</span>
          </a>

          <div className="h-5 w-px bg-white/20"></div>

          {/* WhatsApp - New! */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-1 bg-green-500/20 hover:bg-green-500/30 rounded-full transition-all duration-200 border border-green-400/30 hover:border-green-400/50"
          >
            <MessageCircle className="h-3.5 w-3.5 text-green-300 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-green-100">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
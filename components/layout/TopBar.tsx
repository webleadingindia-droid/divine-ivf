// components/layout/TopBar.tsx
import { MapPin, Phone, Mail, ChevronRight, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { clinic } from "@/data/clinic";

export function TopBar() {
  // WhatsApp number (same as phone or separate)
  const whatsappNumber = clinic.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  // 👇 Apne actual social URLs yahan daalo (ya clinic data se lo)
  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/dr.mandavirai/", icon: Instagram },
    { label: "Facebook",  href: "https://www.facebook.com/drmandavirai",  icon: Facebook },
    { label: "YouTube",   href: "https://www.youtube.com/@drmandavirai",  icon: Youtube },
    { label: "Twitter",   href: "https://x.com/DrMandavi_rai",   icon: Twitter },
  ];

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

        {/* Right Section - Contact Info + Social */}
        <div className="flex items-center gap-4">
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

          {/* Social Media Icons */}
          <div className="flex items-center gap-1.5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 transition-all duration-200 hover:scale-110"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
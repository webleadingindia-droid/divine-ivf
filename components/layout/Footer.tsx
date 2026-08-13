import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { clinic } from "@/data/clinic";
import Image from "next/image";
import { BloomMotif } from "@/components/ui/BloomMotif";

const columns = [
  {
    title: "Fertility Care",
    links: [
      { label: "IVF", href: "/ivf" },
      { label: "IUI", href: "/iui" },
      { label: "Fertility Investigation", href: "/fertility-investigation" },
      { label: "Egg Donor IVF", href: "/egg-donor" },
    ],
  },
  {
    title: "Advanced IVF",
    links: [
      { label: "ICSI", href: "/ivf/icsi" },
      { label: "PICSI", href: "/ivf/picsi" },
      { label: "IMSI", href: "/ivf/imsi" },
      { label: "ERA", href: "/ivf/era" },
      { label: "Genetic Testing", href: "/ivf/genetic-testing" },
    ],
  },
  {
    title: "Women's & Pregnancy Care",
    links: [
      { label: "Gynecology", href: "/gynecology" },
      { label: "Hysteroscopy", href: "/hysteroscopy" },
      { label: "Laparoscopy", href: "/laparoscopy" },
      { label: "Obstetric Ultrasound", href: "/obstetric-ultrasound" },
      { label: "Delivery Care", href: "/normal-delivery" },
    ],
  },
  {
    title: "Clinic",
    links: [
      { label: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai" },
      { label: "Resources", href: "/resources" },
      { label: "Patient Stories", href: "/patient-stories" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-bloom-50 border-t border-bloom-border pb-16 lg:pb-0">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_repeat(4,1fr)] gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="https://plain-apac-prod-public.komododecks.com/202608/13/ogk7ZQX5gBWM2RUIIFMd/image.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              Personalised fertility, gynaecological and pregnancy care with
              Dr. Mandavi Rai in Sector 76, Noida.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-bloom-border text-rose-600"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink-900 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-400 hover:text-rose-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-bloom-border grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-ink-400">
          <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-rose-600">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{clinic.addressLines.join(" ")}</span>
          </a>
          <a href={clinic.phoneHref} className="flex items-center gap-2 hover:text-rose-600">
            <Phone className="h-4 w-4 shrink-0" /> {clinic.phone}
          </a>
          <a href={clinic.emailHref} className="flex items-center gap-2 hover:text-rose-600">
            <Mail className="h-4 w-4 shrink-0" /> {clinic.email}
          </a>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <p>&copy; {new Date().getFullYear()} Divine Women &amp; IVF Clinic. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-rose-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-rose-600">Terms</Link>
            <Link href="/medical-disclaimer" className="hover:text-rose-600">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

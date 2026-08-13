import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { clinic } from "@/data/clinic";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.divinewomenivfclinic.com"),
  title: {
    default: "Divine Women & IVF Clinic | Dr. Mandavi Rai, Noida",
    template: "%s | Divine Women & IVF Clinic",
  },
  description:
    "Personalised fertility evaluation, IVF, IUI and women's healthcare with Dr. Mandavi Rai at Divine Women & IVF Clinic, Sector 76, Noida.",
  openGraph: {
    title: "Divine Women & IVF Clinic | Dr. Mandavi Rai, Noida",
    description:
      "Personalised fertility evaluation, IVF, IUI and women's healthcare with Dr. Mandavi Rai in Sector 76, Noida.",
    url: "https://www.divinewomenivfclinic.com",
    siteName: "Divine Women & IVF Clinic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Women & IVF Clinic | Dr. Mandavi Rai, Noida",
    description:
      "Personalised fertility evaluation, IVF, IUI and women's healthcare in Sector 76, Noida.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  medicalSpecialty: ["Gynecology", "Reproductive Medicine"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop Number 13, First Floor, Street 76 Market, Sector 76",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  telephone: clinic.phone,
  email: clinic.email,
  url: "https://www.divinewomenivfclinic.com",
  hasMap: clinic.mapsUrl,
  physician: {
    "@type": "Physician",
    name: "Dr. Mandavi Rai",
    medicalSpecialty: "Gynecology, Reproductive Medicine",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us | Divine IVF - Fertility Clinic in Noida",
  description: "Contact Divine IVF in Sector 76, Noida. Get in touch for IVF, IUI, fertility treatments. Call +91 7678451808 or visit our clinic.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
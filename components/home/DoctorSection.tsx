"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Quote,
  ArrowUpRight,
  Ear,
  ClipboardList,
  Target,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  FlaskConical,
  TrendingUp,
  Users,
  Stethoscope,
  Activity,
  Microscope,
  BadgeCheck,
} from "lucide-react";

const approach = [
  {
    number: "01",
    icon: Ear,
    title: "We Listen First",
    description: "Your story comes first. We take time to understand your history, concerns and previous experiences.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Individualised Evaluation",
    description: "Investigations tailored to your history, not a one-size-fits-all protocol.",
  },
  {
    number: "03",
    icon: Target,
    title: "Experience That Guides",
    description: "Years of treating diverse fertility journeys help us make thoughtful, evidence-based decisions.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Treat the Person, Not Just the Diagnosis",
    description: "Because fertility is never just a report. We look at the whole picture.",
  },
];

const expertise = [
  { icon: Stethoscope, label: "Infertility & IVF" },
  { icon: Activity, label: "Recurrent IVF Failure" },
  { icon: Microscope, label: "Minimal Stimulation Protocols" },
];

// Real qualifications, chronological
const education = [
  "MBBS — Bharati Vidyapeeth University, Pune (2005)",
  "M.S. OBGY — MGM Institute of Health Sciences, Mumbai (2013)",
  "Diploma in Ultrasound — Randhawa Institute, Delhi (2015)",
  "M.MAS, Minimal Access Surgery — Gold Medalist, World Laparoscopy Hospital (2016)",
  "Fellowship, Reproductive Medicine — CREST, NUHS, Singapore (2017–18)",
  "PG Diploma, Hospital & Health Management — IGNOU (2020)",
  "PG Diploma, Sexual & Reproductive Medicine — Univ. of South Wales, UK (2020)",
];

// Condensed one-line summary of her real work history, most recent first
const experienceHighlights = [
  "Center Head & Senior Consultant, IVF — Indira IVF, Noida",
  "Senior Consultant, IVF — Indira IVF, Raj Nagar, Ghaziabad (~200% growth in ET cases)",
  "Senior Consultant, IVF — Indira IVF, Patel Nagar, New Delhi (50,000+ IVF cycles milestone)",
  "Senior Resident — ESIC Hospital & Medical College, Faridabad",
  "Senior Resident — Lady Hardinge Medical College, New Delhi",
  "Senior Resident — Max Super Speciality Hospital, Saket, Delhi",
  "Junior Resident — Safdarjung Hospital, New Delhi",
];

const trust = [
  { icon: HeartHandshake, label: "Personalized care" },
  { icon: FlaskConical, label: "Advanced IVF lab" },
  { icon: TrendingUp, label: "High success rate" },
  { icon: Users, label: "End-to-end support" },
];

export function DoctorSection() {
  return (
    <section className="relative py-10 md:py-14 bg-gradient-to-b from-rose-50/60 via-white to-white">
      <div className="container-page px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">

        {/* ===== Header ===== */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">
            Dr. <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Mandavi Rai</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-500 mt-1.5">
            Best IVF &amp; Gynaecologist Doctor in Noida
          </p>
        </div>

        {/* ===== Photo (overlaid quote) | About + Approach ===== */}
        {/* Grid's default stretch behaviour makes the photo match the
            right column's natural height exactly — no leftover gap either way. */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-10">
          {/* Left column — photo card */}
          <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-rose-900/10 ring-1 ring-white/60 min-h-[440px] lg:min-h-0 lg:h-full">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/22/yXZ3mTF4xafiMFQ1J05J/image.jpg"
              alt="Dr. Mandavi Rai - Fertility & IVF Specialist"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10" />

            {/* Experience badge */}
            <div className="absolute top-4 left-4 right-4">
              <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-full pl-2 pr-4 py-1 shadow-lg">
                <span className="h-7 w-7 rounded-full bg-rose-50 flex items-center justify-center">
                  <Sparkles className="h-2.5 w-2.5 text-rose-500" />
                </span>
                <span className="text-xs font-semibold text-ink-900 leading-none">
                  15+ Yrs Experience
                </span>
              </div>
            </div>

            {/* Quote card — overlaid on the image */}
            <div className="absolute left-4 right-4 bottom-4">
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl px-5 py-4 shadow-xl">
                <Quote className="h-3 w-3 text-rose-400 mb-1.5" fill="currentColor" strokeWidth={0} />
                <p className="text-[12px] italic text-ink-700 leading-relaxed">
                  There is no one-size-fits-all path to parenthood. My role is to
                  understand, guide and support you with the right care, at the right
                  time.
                </p>
                <p className="text-xs font-semibold text-rose-600 mt-2">— Dr. Mandavi Rai</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-rose-600 text-xs font-bold tracking-wide mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              ABOUT DR. MANDAVI RAI
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 leading-tight mb-3">
              Gynaecologist &amp; IVF Doctor
              <span className="block font-serif italic text-ink-400 text-lg sm:text-xl font-medium mt-0.5">
                Professional Journey
              </span>
            </h3>

            <p className="text-sm text-ink-600 leading-relaxed mb-2">
              Dr. Mandavi Rai is an IVF fertility specialist in Noida with a vision to
              improve the reproductive outcomes of childless couples and individuals.
              She has been on this journey for over 15 years, with 10 years of focused
              experience in infertility.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed mb-5">
              After her MBBS from Pune and M.S. in Obstetrics &amp; Gynaecology from
              Mumbai, she pursued a fellowship in Reproductive Medicine from NUS
              Singapore. Over the years, she has come to understand the pain and
              anguish of people who are unable to conceive naturally — while embracing
              the evolving, ever more accessible science of assisted reproduction.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {expertise.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 bg-white border border-rose-100 rounded-full pl-2.5 pr-3.5 py-1.5 text-xs font-medium text-ink-700 shadow-sm"
                >
                  <item.icon className="h-3.5 w-3.5 text-rose-500" />
                  {item.label}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-rose-500 text-xs font-bold tracking-wide mb-3">
              <HeartHandshake className="h-3.5 w-3.5" />
              THE DIVINE APPROACH
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
              {approach.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.number}
                    className="group relative rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-rose-50/40 px-4 py-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-rose-200 transition-all duration-300"
                  >
                    <span className="absolute top-3 right-3.5 text-[11px] font-bold text-rose-300/80 tracking-wider">
                      {item.number}
                    </span>
                    <span className="inline-flex h-9 w-9 rounded-xl items-center justify-center bg-gradient-to-br from-rose-500 to-pink-500 shadow-sm shadow-rose-300/50 mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <p className="text-xs font-semibold text-ink-900 leading-snug mb-1">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-ink-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== Credentials card ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 mt-7 bg-white rounded-3xl border border-rose-100 shadow-sm px-6 sm:px-8 py-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-6 w-6 rounded-lg bg-rose-50 flex items-center justify-center">
                <GraduationCap className="h-3.5 w-3.5 text-rose-500" />
              </span>
              <h4 className="text-[11px] font-bold text-rose-600 tracking-wide">
                EDUCATION &amp; CREDENTIALS
              </h4>
            </div>
            <ul className="space-y-2">
              {education.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-ink-600 leading-snug">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-300 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1.5 mt-3 bg-rose-50 rounded-full px-3 py-1.5 text-[10px] font-medium text-rose-600 border border-rose-100">
              <BadgeCheck className="h-3 w-3" />
              FICOG — Fellow, Indian College of Obstetricians &amp; Gynecologists
            </span>
          </div>

          <div className="sm:border-l sm:border-rose-100 sm:pl-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-6 w-6 rounded-lg bg-rose-50 flex items-center justify-center">
                <Briefcase className="h-3.5 w-3.5 text-rose-500" />
              </span>
              <h4 className="text-[11px] font-bold text-rose-600 tracking-wide">
                EXPERIENCE HIGHLIGHTS
              </h4>
            </div>
            <ul className="space-y-2">
              {experienceHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-ink-600 leading-snug">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== CTA banner ===== */}
        <div className="relative overflow-hidden bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl px-6 sm:px-9 py-7 mt-6 shadow-xl shadow-rose-500/20">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col gap-6">
            <div>
              <p className="text-lg sm:text-xl font-bold text-white">Ready to take the first step?</p>
              <p className="text-xs sm:text-sm text-rose-100/90 mt-1 max-w-md">
                Book your consultation with Dr. Mandavi Rai and start your journey to parenthood.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {trust.map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <item.icon className="h-3.5 w-3.5 text-white/80" />
                    <span className="text-[11px] font-medium text-white/90 whitespace-nowrap">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 sm:ml-auto">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-1.5 bg-white text-rose-600 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/doctor/dr-mandavi-rai"
                  className="inline-flex items-center justify-center gap-1.5 border border-white/40 text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  View Full Profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
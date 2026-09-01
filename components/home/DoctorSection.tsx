"use client";

import Image from "next/image";
import {
  Heart,
  ArrowRight,
  BadgeCheck,
  Quote,
  ExternalLink,
  Sparkles,
  Syringe,
  Activity,
  Microscope,
  Stethoscope,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Baby,
  Users,
  HeartHandshake,
  FlaskConical,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const expertise = [
  { icon: Syringe, label: "Infertility & IVF" },
  { icon: Activity, label: "Recurrent IVF Failure" },
  { icon: TrendingUp, label: "Minimal Stimulation Protocols" },
  { icon: Microscope, label: "Hysteroscopy" },
  { icon: Stethoscope, label: "Laparoscopic Surgery" },
];

const philosophyTags = ["Your history is different", "Your body is different", "Your journey is different"];

const aboutPoints = [
  { icon: Heart, text: "Behind every AMH report is a woman" },
  { icon: Users, text: "Behind every semen analysis is a couple" },
  { icon: Baby, text: "Behind every IVF cycle is a dream" },
];

// Chronological — earliest first
const education = [
  { year: "2005", label: "MBBS", detail: "Bharati Vidyapeeth University, Pune" },
  { year: "2013", label: "M.S. OBGY", detail: "MGM Institute of Health Sciences, Mumbai" },
  { year: "2015", label: "Diploma in Ultrasound", detail: "Randhawa Institute of Ultrasound Training, Delhi" },
  { year: "2016", label: "M.MAS — Gold Medalist", detail: "Minimal Access Surgery, World Laparoscopy Hospital, Gurgaon" },
  { year: "2017–19", label: "Fellowship, Reproductive Medicine", detail: "CREST, National University Health System, Singapore" },
  { year: "2020", label: "PG Diploma, Hospital & Health Management", detail: "IGNOU, New Delhi" },
  { year: "2020", label: "PG Diploma, Sexual Health & Reproductive Medicine", detail: "University of South Wales, UK" },
];

const experience = [
  {
    role: "Center Head & Senior Consultant — IVF Specialist",
    place: "Indira IVF, Noida",
    detail: "Currently leads the Noida center.",
  },
  {
    role: "Senior Consultant — IVF Specialist",
    place: "Indira IVF, Raj Nagar, Ghaziabad",
    detail: "Drove about 200% growth in embryo transfer cases and set up formal tie-ups with other OPD centres.",
  },
  {
    role: "Senior Consultant — IVF Specialist",
    place: "Indira IVF, Patel Nagar, New Delhi",
    detail: "Contributed to the organization reaching 50,000 successful IVF cycles; chosen to lead the Noida centre.",
  },
  {
    role: "Senior Resident",
    place: "ESIC Hospital & Medical College, Faridabad",
    detail: "Extensive medico-legal experience and surgeries on complicated cases.",
  },
  {
    role: "Senior Resident",
    place: "Lady Hardinge Medical College, New Delhi",
    detail: "Treated high-risk pregnancies with life-threatening complications; gained hospital administration experience.",
  },
  {
    role: "Senior Resident",
    place: "Max Super Speciality Hospital, Saket, Delhi",
    detail: "Corporate hospital patient-care experience with exposure to complex cases.",
  },
  {
    role: "Junior Resident",
    place: "Safdarjung Hospital, New Delhi",
    detail: "Extensive normal deliveries, medico-legal cases and clinical complications.",
  },
];

const trust = [
  { icon: HeartHandshake, label: "Personalized care" },
  { icon: FlaskConical, label: "Advanced IVF lab" },
  { icon: TrendingUp, label: "High success rate" },
  { icon: Users, label: "End-to-end support" },
];

export function DoctorSection() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-rose-50 via-pink-50/50 to-white">
      <div className="container-page px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">

        {/* ===== Hero: framed photo + flowing intro (no box around text) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start mb-8">
          {/* Photo */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl bg-rose-200/60 hidden sm:block" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] lg:h-[320px]">
              <Image
                src="https://plain-apac-prod-public.komododecks.com/202608/22/yXZ3mTF4xafiMFQ1J05J/image.jpg"
                alt="Dr. Mandavi Rai - Fertility & IVF Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <div className="bg-white/90 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-lg">
                  <p className="text-xs font-bold text-rose-700">15+ Years</p>
                  <p className="text-[8px] uppercase tracking-widest text-ink-400">Experience</p>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-lg">
                  <p className="text-xs font-bold text-emerald-600">10+ Years</p>
                  <p className="text-[8px] uppercase tracking-widest text-ink-400">Infertility Focus</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 rounded-full text-xs font-semibold text-white shadow-lg">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Reproductive Medicine Specialist
                </span>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div>
            <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Meet your fertility specialist
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-ink-900 leading-[1.1]">
              Dr. <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Mandavi Rai</span>
            </h2>

            <p className="text-base text-ink-600 font-medium mt-3">
              Best IVF &amp; Fertility Doctor in Noida
            </p>

            <p className="text-sm sm:text-base text-ink-600 leading-relaxed mt-3 max-w-xl">
              An IVF fertility specialist in Noida with a vision to improve the
              reproductive outcomes of childless couples and individuals. Over 15 years
              on this journey, with 10 years focused on infertility — after her MD in
              Obstetrics &amp; Gynaecology from Mumbai and a fellowship in Reproductive
              Medicine from NUS Singapore.
            </p>

            {/* Expertise — inline row with dividers, not pills in a box */}
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 mt-4 pt-4 border-t border-rose-100">
              {expertise.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-rose-500" />
                  <span className="text-xs font-medium text-ink-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Philosophy — full width band, the one bold moment ===== */}
        <div className="relative bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl px-8 sm:px-14 py-7 sm:py-8 mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <Quote className="relative h-6 w-6 text-white/50 mx-auto mb-2" />
          <p className="relative text-lg sm:text-xl font-serif italic text-white leading-snug text-center max-w-2xl mx-auto">
            &ldquo;There is no one-size-fits-all path to parenthood.&rdquo;
          </p>
          <div className="relative flex flex-wrap justify-center gap-2 mt-4">
            {philosophyTags.map((text, i) => (
              <span
                key={i}
                className="bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs text-white border border-white/20"
              >
                {text}
              </span>
            ))}
          </div>
          <p className="relative text-sm text-white/90 font-semibold text-center mt-3">
            So your treatment should be too.
          </p>
        </div>

        {/* ===== About — flowing, not boxed ===== */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-ink-900 mb-4">
            A IVF &amp; Fertility Doctor&apos;s journey
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-10">
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              Over the years, Dr. Rai has developed a deep understanding of the pain
              and anguish of people who are unable to conceive naturally, while
              embracing the evolving science of reproduction and assisted fertility
              care — bringing compassionate, evidence-based treatment to every
              patient&apos;s day-to-day experience.
            </p>
            <div className="space-y-2.5">
              {aboutPoints.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <item.icon className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-ink-700 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Two timelines: Education + Experience ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-4 w-4 text-rose-500" />
              <h4 className="text-xs font-bold text-rose-600 tracking-wide">
                EDUCATION &amp; CREDENTIALS
              </h4>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-rose-200" />
              <div className="space-y-3.5">
                {education.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-6 top-1 h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <p className="text-[11px] font-semibold text-rose-500 mb-0.5">{item.year}</p>
                    <p className="text-sm font-semibold text-ink-800">{item.label}</p>
                    <p className="text-xs text-ink-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 mt-3 bg-rose-50 rounded-full px-3.5 py-1.5 text-[11px] font-medium text-rose-600 border border-rose-100">
              <BadgeCheck className="h-3.5 w-3.5" />
              FICOG — Fellow of the Indian College of Obstetricians and Gynecologists
            </span>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-4 w-4 text-rose-500" />
              <h4 className="text-xs font-bold text-rose-600 tracking-wide">
                EXPERIENCE HIGHLIGHTS
              </h4>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-rose-200" />
              <div className="space-y-3.5">
                {experience.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-6 top-1 h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <p className="text-sm font-semibold text-ink-800">{item.role}</p>
                    <p className="text-xs text-rose-500 font-medium">{item.place}</p>
                    <p className="text-xs text-ink-500 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== CTA banner with trust stats folded in ===== */}
        <div className="bg-rose-600 rounded-2xl px-7 sm:px-10 py-6 sm:py-7 shadow-lg shadow-rose-500/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-5">
            <div>
              <p className="text-2xl font-bold text-white flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Ready to take the first step?
              </p>
              <p className="text-sm text-rose-100 mt-1.5">
                Book your consultation with Dr. Mandavi Rai and start your journey to parenthood.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                href="/consultation"
                className=" hover:bg-rose-50 text-rose-600 rounded-xl px-6 py-2.5 text-sm font-semibold"
              >
                Book Consultation
              </Button>
              <Button
                href="/doctor/dr-mandavi-rai"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 rounded-xl px-6 py-2.5 text-sm font-medium"
              >
                View Full Profile
                <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/20">
            {trust.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-white/80 shrink-0" />
                <span className="text-xs font-medium text-white/90">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import {
  GraduationCap,
  Heart,
  Award,
  Stethoscope,
  Calendar,
  Star,
  Quote,
  Baby,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Shield,
  TrendingUp,
  BadgeCheck,
  Microscope,
  Syringe,
  FileText,
  Briefcase,
  BookOpen,
  Globe,
  Building2,
  Sparkle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DoctorSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Modern Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 via-white to-pink-50/30" />
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Geometric Accents */}
      <div className="absolute top-1/4 left-8 w-8 h-8 border border-rose-200/40 rotate-45 pointer-events-none" />
      <div className="absolute bottom-1/4 right-8 w-12 h-12 border border-pink-200/30 rotate-12 pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full border border-rose-100/20 pointer-events-none" />

      <div className="container-page px-4 sm:px-6 relative z-10">
        {/* Section Header - Minimal & Sophisticated */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-rose-100/40 shadow-sm text-rose-600 text-xs font-medium tracking-wide mb-5">
            <Heart className="h-3.5 w-3.5" />
            <span>Meet Your Fertility Specialist</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 leading-[1.1]">
            Dr. <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Mandavi Rai</span>
          </h2>
          
          <p className="text-base md:text-lg text-ink-500 mt-3 max-w-2xl mx-auto font-light tracking-wide">
            Best IVF &amp; Gynaecologist Doctor in Noida
          </p>
        </div>

        {/* Main Grid - Clean Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-14">
          {/* ===== LEFT COLUMN ===== */}
          <div className="space-y-6">
            {/* Doctor Image Card - Modern Glassmorphism */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm border border-white/50 group">
              <div className="relative h-[340px] sm:h-[400px] md:h-[480px]">
                <Image
                  src="https://plain-apac-prod-public.komododecks.com/202608/22/yXZ3mTF4xafiMFQ1J05J/image.jpg"
                  alt="Dr. Mandavi Rai - Fertility & IVF Specialist"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 400px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Top Badges - Minimal */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-white/30">
                    <p className="text-xs font-bold text-ink-900">15+ Years</p>
                    <p className="text-[8px] uppercase tracking-widest text-ink-400">Experience</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-white/30">
                    <p className="text-xs font-bold text-emerald-600">10+ Years</p>
                    <p className="text-[8px] uppercase tracking-widest text-ink-400">Infertility Experience</p>
                  </div>
                </div>

                {/* Bottom Badges - Modern Pill */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-semibold text-rose-600 shadow-lg border border-white/30">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    Reproductive Medicine Specialist
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/90 backdrop-blur-md rounded-full text-[10px] font-semibold text-white shadow-lg">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    15+ Years of Clinical Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Areas of Expertise - Minimal Grid */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-5 md:p-6 border border-rose-50/50 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-xl bg-rose-50">
                  <Target className="h-4 w-4 text-rose-500" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-rose-500">
                  Areas of Expertise
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Syringe, label: "Infertility & IVF" },
                  { icon: Shield, label: "Recurrent IVF Failure" },
                  { icon: TrendingUp, label: "Minimal Stimulation Protocols" },
                  { icon: Microscope, label: "Hysteroscopy" },
                  { icon: Stethoscope, label: "Laparoscopic Surgery" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-rose-50/30 rounded-full px-3.5 py-1.5 border border-rose-100/20"
                  >
                    <item.icon className="h-3 w-3 text-rose-400 shrink-0" />
                    <span className="text-[11px] text-ink-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Card - Premium Gradient with Glass */}
            <div className="relative bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl p-6 md:p-7 text-white shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="h-4 w-4 text-white/60" />
                  <span className="text-[10px] font-medium uppercase tracking-widest text-white/70">
                    Her Philosophy
                  </span>
                </div>

                <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-5">
                  &ldquo;There is no one-size-fits-all path to parenthood.&rdquo;
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["Your history", "Your body", "Your journey"].map((text, i) => (
                    <span
                      key={i}
                      className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs text-white/90 border border-white/10"
                    >
                      {text} is different
                    </span>
                  ))}
                </div>

                <p className="text-sm text-white/90 font-medium tracking-wide">
                  So your treatment should be too.
                </p>
              </div>
            </div>

            {/* CTA Section - Clean & Modern */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-between bg-gradient-to-r from-rose-50/80 to-pink-50/80 backdrop-blur-sm rounded-3xl p-5 md:p-6 border border-rose-100/40 shadow-lg">
              <div>
                <p className="text-sm font-bold text-ink-900">Ready to take the first step?</p>
                <p className="text-xs text-ink-500">Book your consultation today.</p>
              </div>
              <Button
                href="/doctor/dr-mandavi-rai"
                variant="secondary"
                className="group bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 shadow-lg hover:shadow-xl transition-all px-7 py-3 text-sm font-semibold rounded-2xl hover:scale-[1.02] whitespace-nowrap"
              >
                <Stethoscope className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Know More
                <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="space-y-6">
            {/* About Section - Minimal */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-7 border border-rose-50/50 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-xl bg-rose-50">
                  <Quote className="h-4 w-4 text-rose-500" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-rose-500">
                  About Dr. Mandavi Rai
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-ink-900 mb-4 leading-snug">
                Gynecologist &amp; IVF Doctor (Professional Journey)
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50/80 rounded-2xl p-3.5 text-center border border-rose-100/30">
                  <Heart className="h-5 w-5 text-rose-400 mx-auto mb-1.5" />
                  <p className="text-[10px] text-ink-600 leading-tight">
                    Behind every AMH report is a woman
                  </p>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50/80 rounded-2xl p-3.5 text-center border border-rose-100/30">
                  <Users className="h-5 w-5 text-rose-400 mx-auto mb-1.5" />
                  <p className="text-[10px] text-ink-600 leading-tight">
                    Behind every semen analysis is a couple
                  </p>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50/80 rounded-2xl p-3.5 text-center border border-rose-100/30">
                  <Baby className="h-5 w-5 text-rose-400 mx-auto mb-1.5" />
                  <p className="text-[10px] text-ink-600 leading-tight">
                    Behind every IVF cycle is a dream
                  </p>
                </div>
              </div>

              <p className="text-sm text-ink-600 leading-relaxed">
                <span className="font-semibold text-ink-800">Dr. Mandavi Rai</span> is an
                IVF fertility specialist in Noida with a vision to improve the reproductive outcomes
                of childless couples or individuals. She has been on this journey for over 15 years
                and has 10 years of experience in infertility. After completing her MD in Obstetrics
                and Gynaecology from Mumbai, she pursued a fellowship in Reproductive Medicine from
                NUS Singapore. Over the years, she has developed a deep understanding of the pain and
                anguish of people who are unable to conceive naturally, while embracing the evolving
                science of reproduction and assisted fertility care.
              </p>
            </div>

            {/* Education & Credentials - Minimal Scroll */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-7 border border-rose-50/50 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-xl bg-rose-50">
                  <GraduationCap className="h-4 w-4 text-rose-500" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-rose-500">
                  Education &amp; Credentials
                </span>
              </div>

              <div className="space-y-1.5 max-h-[200px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-rose-200 scrollbar-track-transparent">
                {[
                  "Diploma in Ultrasound – Randhawa Institute of Ultrasound Training, Delhi (2015)",
                  "Masters in Minimal Access Surgery (M.MAS) – Gold Medalist, World Laparoscopy Hospital, Gurgaon (2016)",
                  "Fellowship in Reproductive Medicine – CREST, National University Health System, Singapore (2017–2018 / 2019)",
                  "Post-Graduation Diploma in Hospital and Health Management – IGNOU, New Delhi (2020)",
                  "M.S. OBGY – MGM Institute of Health Sciences, Mumbai (2013)",
                  "MBBS – Bharati Vidyapeeth University, Pune (2005)",
                  "Post Graduate Diploma in Sexual Health and Reproductive Medicine – University of South Wales, UK (2020)",
                  "FICOG – Fellow of the Indian College of Obstetricians and Gynecologists",
                ].map((cred, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-[11px] text-ink-600 bg-rose-50/20 rounded-xl px-3.5 py-2 border border-rose-100/10"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 mt-0.5 shrink-0 text-rose-400" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Highlights - Minimal Scroll */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-7 border border-rose-50/50 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-xl bg-rose-50">
                  <Briefcase className="h-4 w-4 text-rose-500" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-rose-500">
                  Experience Highlights
                </span>
              </div>

              <div className="space-y-1.5 max-h-[200px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-rose-200 scrollbar-track-transparent">
                {[
                  "Center Head and Senior Consultant & IVF Specialist – Indira IVF, Noida Center",
                  "Senior Consultant & IVF Specialist – Indira IVF, Raj Nagar, Ghaziabad; achieved about 200% growth in embryo transfer cases and institutionalized formal tie-ups with other OPD centres",
                  "Senior Consultant & IVF Specialist – Indira IVF, Patel Nagar, New Delhi; contributed to the organization reaching 50,000 successful IVF cycles and was chosen to lead the Noida centre",
                  "Senior Resident – ESIC Hospital & Medical College, Faridabad; extensive medico-legal experience and numerous surgeries on complicated cases",
                  "Senior Resident – Lady Hardinge Medical College, New Delhi; treated high-risk pregnancies with life-threatening complications and gained hospital administration experience",
                  "Senior Resident – Max Super Speciality Hospital, Saket, Delhi; corporate hospital patient-care experience and exposure to complex cases",
                  "Junior Resident – Safdarjung Hospital, New Delhi; extensive normal deliveries, medico-legal cases and clinical complications",
                ].map((exp, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-[11px] text-ink-600 bg-rose-50/20 rounded-xl px-3.5 py-2 border border-rose-100/10"
                  >
                    <Building2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-rose-400" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
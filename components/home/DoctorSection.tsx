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
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DoctorSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-white">
      {/* Premium Background with Soft Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-white to-pink-50/40" />

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #e11d48 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 opacity-10">
          <Heart className="h-16 w-16 text-rose-500" />
        </div>
        <div className="absolute bottom-16 right-16 opacity-10">
          <Baby className="h-14 w-14 text-rose-400" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-5 hidden lg:block">
          <Sparkles className="h-20 w-20 text-amber-400" />
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-5 hidden lg:block">
          <Award className="h-16 w-16 text-rose-300" />
        </div>
      </div>

      <div className="container-page px-4 sm:px-6 relative z-10">
        {/* Section Header - Refined */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 backdrop-blur-sm border border-rose-200/30 text-rose-600 text-xs font-medium tracking-wide mb-4">
            <Heart className="h-3.5 w-3.5" />
            <span>Meet Your Fertility Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 leading-tight">
            Dr. <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Mandavi Rai</span>
          </h2>
          <p className="text-sm md:text-base text-ink-500 mt-2 max-w-2xl mx-auto">
            Consultant Gynaecologist &amp; Infertility Specialist (IVF)
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300" />
            <span className="text-xs text-ink-400 font-medium">
              Compassionate, evidence-based fertility care
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300" />
          </div>
        </div>

        {/* Main Grid - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10">
          {/* ===== LEFT COLUMN ===== */}
          <div className="space-y-6">
            {/* Doctor Image Card - Premium Design */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-white/50 group">
              <div className="relative h-[320px] sm:h-[380px] md:h-[440px]">
                <Image
                  src="https://plain-apac-prod-public.komododecks.com/202608/22/yXZ3mTF4xafiMFQ1J05J/image.jpg"
                  alt="Dr. Mandavi Rai - Fertility & IVF Specialist"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 400px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/50">
                    <p className="text-xs font-bold text-ink-900">15+ Years</p>
                    <p className="text-[8px] uppercase tracking-wider text-ink-400">Experience</p>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/50">
                    <p className="text-xs font-bold text-emerald-600">94%</p>
                    <p className="text-[8px] uppercase tracking-wider text-ink-400">Success Rate</p>
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-semibold text-rose-600 shadow-lg">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    4.9 (300+ Reviews)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600/95 backdrop-blur-sm rounded-full text-[10px] font-semibold text-white shadow-lg">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    500+ IVF Success
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/95 backdrop-blur-sm rounded-full text-[10px] font-semibold text-white shadow-lg">
                    <Shield className="h-3.5 w-3.5" />
                    Medical Council Registered
                  </span>
                </div>
              </div>
            </div>

            {/* Areas of Expertise - New Section */}
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-rose-50/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-rose-100">
                  <Target className="h-4 w-4 text-rose-500" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-600">
                  Areas of Expertise
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Syringe, label: "Infertility & IVF" },
                  { icon: Shield, label: "Recurrent IVF Failure" },
                  { icon: TrendingUp, label: "Minimal Stimulation Protocols" },
                  { icon: Microscope, label: "Hysteroscopy (Diagnostic & Therapeutic)" },
                  { icon: Stethoscope, label: "Minimal Access (Laparoscopic) Surgery" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-rose-50/30 rounded-lg px-3 py-2 border border-rose-100/20"
                  >
                    <item.icon className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="text-[11px] text-ink-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Council Registration */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-5 border border-rose-50/50 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-rose-50">
                  <BadgeCheck className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink-900">Medical Council Registered</p>
                  <p className="text-[10px] text-ink-400">Delhi Medical Council - Reg. No. 8303</p>
                  <p className="text-[10px] text-ink-400">Haryana Medical Council - Reg. No. 15315</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-rose-400" />
                <span className="text-xs text-ink-600">Internationally Trained</span>
              </div>
            </div>

            {/* Philosophy Card - Premium */}
            <div className="relative bg-gradient-to-br from-rose-600 via-rose-500 to-pink-600 rounded-2xl p-5 md:p-6 text-white shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Quote className="h-4 w-4 text-white/60" />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                    Her Philosophy
                  </span>
                </div>

                <p className="text-base md:text-lg font-serif italic text-white leading-relaxed mb-4">
                  &ldquo;There is no one-size-fits-all path to parenthood.&rdquo;
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {["Your history", "Your body", "Your journey"].map((text, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 text-center border border-white/10"
                    >
                      <p className="text-[10px] text-white/80">{text}</p>
                      <p className="text-[10px] font-medium text-white">is different</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-white/90 font-medium">
                  So your treatment should be too.
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="space-y-5">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-rose-50/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-rose-100">
                  <Quote className="h-4 w-4 text-rose-500" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-600">
                  About Dr. Mandavi Rai
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-ink-900 mb-3 leading-snug">
                Because your fertility journey is more than a number.
              </h3>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50/80 rounded-xl p-3 text-center border border-rose-100/30">
                  <Heart className="h-5 w-5 text-rose-400 mx-auto mb-1" />
                  <p className="text-[10px] text-ink-600 leading-tight">
                    Behind every AMH report is a woman
                  </p>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50/80 rounded-xl p-3 text-center border border-rose-100/30">
                  <Users className="h-5 w-5 text-rose-400 mx-auto mb-1" />
                  <p className="text-[10px] text-ink-600 leading-tight">
                    Behind every semen analysis is a couple
                  </p>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50/80 rounded-xl p-3 text-center border border-rose-100/30">
                  <Baby className="h-5 w-5 text-rose-400 mx-auto mb-1" />
                  <p className="text-[10px] text-ink-600 leading-tight">
                    Behind every IVF cycle is a dream
                  </p>
                </div>
              </div>

              <p className="text-sm text-ink-600 leading-relaxed">
                <span className="font-semibold text-ink-800">Dr. Mandavi Rai</span> is a
                trusted Fertility &amp; IVF Specialist in Noida and Delhi NCR with extensive
                experience in fertility and assisted reproductive medicine. She has walked
                alongside couples through the most hopeful—and difficult—chapters of their
                lives.
              </p>
            </div> 

            {/* Education & Credentials - New Section */}
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-rose-50/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-rose-100">
                  <GraduationCap className="h-4 w-4 text-rose-500" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-600">
                  Education &amp; Credentials
                </span>
              </div>

              <div className="space-y-1.5 max-h-[180px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-rose-200 scrollbar-track-transparent">
                {[
                  "PG Executive Program in Hospital Management – IIM Kashipur & Max Healthcare (2024–2025)",
                  "Fellowship in Reproductive Medicine – CIMAR, Kochi (2017–2018)",
                  "DMRE (Diploma in Reproductive Medicine & Embryology) – International School of Medicine, Germany (2016)",
                  "Fellowship in Assisted Reproduction Technique (FART) – World Laparoscopy Hospital, New Delhi (2018)",
                  "Basic Training in Robotic Surgery, DMAS & FMAS – World Laparoscopy Hospital, New Delhi (2018)",
                  "DMAS & FMAS (Minimal Access Surgery) – World Laparoscopy Hospital, New Delhi (2018)",
                  "ICOG Certified Fellowship in Endoscopy – Manchanda's Endoscopic Center, New Delhi (2018)",
                  "Diploma in Obstetrics & Gynaecology – HIHT University, Dehradun (2012–2014)",
                  "MBBS – HIHT University, Dehradun (2008–2011)",
                ].map((cred, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-[11px] text-ink-600 bg-rose-50/20 rounded-lg px-3 py-1.5 border border-rose-100/10"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 mt-0.5 shrink-0 text-rose-400" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Highlights - New Section */}
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-rose-50/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-rose-100">
                  <Briefcase className="h-4 w-4 text-rose-500" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-600">
                  Experience Highlights
                </span>
              </div>

              <div className="space-y-1.5 max-h-[200px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-rose-200 scrollbar-track-transparent">
                {[
                  "Senior Consultant – IVF & Reproductive Medicine – Cloudnine Hospital, Gurugram (Jul 2023–Present)",
                  "Visiting Consultant – Infertility – Motherhood Hospital, Gurugram (2025–Present)",
                  "Chief Consultant & Centre Head – IVF & Wings IVF & Orthus Health, New Delhi (Jul 2022–Jul 2023)",
                  "Consultant – IVF Specialist – Milan Fertility Centre, Delhi & Gurugram (Jan 2021–Jul 2022)",
                  "Director & Consultant – IVF & Gynaecology – The Fertility (Own Practice), Gurugram (Jul 2020–Present)",
                  "Consultant – IVF Specialist – W Pratishka Hospital, Gurugram (Jan 2020–Dec 2020)",
                  "Visiting Consultant – Infertility & Gynaecology – Max Hospital, Gurugram (Apr 2019–Present)",
                  "Consultant-IVF Specialist – Myra IVF Center, Gurugram (June 2019-Aug 2019)",
                ].map((exp, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-[11px] text-ink-600 bg-rose-50/20 rounded-lg px-3 py-1.5 border border-rose-100/10"
                  >
                    <Building2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-rose-400" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-between bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-4 md:p-5 border border-rose-100/50">
              <div>
                <p className="text-sm font-bold text-ink-900">Ready to take the first step?</p>
                <p className="text-xs text-ink-500">
                  Book your consultation and start your journey to parenthood.
                </p>
              </div>
              <Button
                href="/doctor/dr-mandavi-rai"
                variant="secondary"
                className="group bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 shadow-lg hover:shadow-xl transition-all px-6 py-2.5 text-sm font-semibold rounded-xl hover:scale-[1.02] whitespace-nowrap"
              >
                <Stethoscope className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Know More
                <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
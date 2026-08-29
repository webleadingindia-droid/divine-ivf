// app/doctor/dr-mandavi-rai/page.tsx
"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Heart, 
  Stethoscope, 
  Calendar, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Microscope,
  Baby,
  Sparkles,
  Shield,
  Star,
  Quote,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  BadgeCheck,
  Building2,
  UserRound,
  Activity
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Data
const doctorData = {
  name: "Dr. Mandavi Rai",
  role: "Gynecologist & IVF Specialist",
  experience: "15+ Years",
  patients: "5000+",
  successRate: "98%",
  rating: "4.9",
  reviews: "300+",
  qualifications: [
    { degree: "MBBS", institution: "Himalayan Institute of Medical Sciences, Dehradun" },
    { degree: "Diploma in Obstetrics & Gynaecology (DGO)", institution: "Himalayan Institute of Medical Sciences, Dehradun" },
    { degree: "Fellowship in Reproductive Medicine", institution: "CIMAR, Kochi" },
    { degree: "Diploma in Reproductive Medicine & Embryology (D.M.R.E.)", institution: "International School of Medicine, Kiel, Germany" },
    { degree: "Fellowship in Assisted Reproductive Technology (FART)", institution: "World Laparoscopy Hospital, New Delhi" },
    { degree: "FMAS & DMAS", institution: "World Laparoscopy Hospital, New Delhi" },
    { degree: "PGEPHM", institution: "IIM Kashipur in collaboration with Max Healthcare" },
  ],
  expertise: [
    { icon: Microscope, label: "IVF (In Vitro Fertilization)", color: "from-rose-500 to-pink-500" },
    { icon: Baby, label: "ICSI Treatment", color: "from-blue-500 to-cyan-500" },
    { icon: Heart, label: "Recurrent Implantation Failure", color: "from-purple-500 to-pink-500" },
    { icon: Stethoscope, label: "PCOS & Ovulation Disorders", color: "from-emerald-500 to-teal-500" },
    { icon: Calendar, label: "Low Ovarian Reserve", color: "from-amber-500 to-orange-500" },
    { icon: Shield, label: "Hysteroscopy & Fertility Procedures", color: "from-indigo-500 to-purple-500" },
  ],
  bio: [
    "Dr. Mandavi Rai is one of Delhi NCR's most trusted Gynecologist & IVF Specialists, dedicated to helping couples achieve their dream of parenthood. With more than 15 years of experience in Obstetrics, Gynaecology, and Reproductive Medicine, she combines advanced fertility treatments with evidence-based care and a compassionate approach.",
    "Her expertise includes IVF, ICSI, IUI, recurrent implantation failure, and complex infertility cases, ensuring every patient receives a personalized treatment plan. She believes infertility treatment should focus not only on medical success but also on providing emotional support throughout the journey.",
  ],
  philosophy: "Every fertility journey is unique. Dr. Mandavi Rai believes in understanding each patient's medical history, lifestyle, and reproductive goals before creating a customized treatment plan. From diagnosis to successful pregnancy, patients receive complete transparency, emotional support, and the latest evidence-based fertility care.",
  memberships: [
    "Indian Society for Assisted Reproduction (ISAR)",
    "Federation of Obstetric & Gynaecological Societies of India",
    "Indian Medical Association (IMA)",
    "European Society of Human Reproduction & Embryology",
  ],
  experienceTimeline: [
    { year: "2014 – 2015", title: "Senior Resident - Swami Dayanand Government Hospital, Delhi" },
    { year: "2015", title: "Senior Resident - Batra Hospital & Medical Research Centre, Delhi" },
    { year: "2016 - 2020", title: "Advanced Training in Laparoscopy, Endoscopy & ART" },
    { year: "2020 - Present", title: "Founder & Consultant Fertility Specialist - Divine IVF" },
  ],
  clinic: {
    name: "Divine Ivf",
    address: "Sector 76, Noida, Uttar Pradesh 201301",
    phone: "+91 95600 26697",
    email: "info@divineivf.com",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  }
};

export default function DoctorPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeTab, setActiveTab] = useState('about');

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-white via-rose-50/30 to-rose-100/30 py-16 md:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-100/40 to-rose-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-100/30 to-pink-100/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-rose-50/10 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="container-page relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-rose-50/90 backdrop-blur-sm border border-rose-200/50 rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                <span className="text-[11px] font-semibold text-rose-600 tracking-wider uppercase">{doctorData.role}</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-bold text-ink-900">
                Dr. <span className="font-serif italic text-transparent bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text">{doctorData.name}</span>
              </h1>
              
              {/* Description */}
              <p className="text-base text-ink-500 leading-relaxed max-w-lg">
                {doctorData.bio[0]}
              </p>

              {/* Stats - Premium Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-rose-100/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-rose-200">
                  <p className="font-serif italic text-2xl text-rose-600 group-hover:scale-105 transition-transform">{doctorData.experience}</p>
                  <p className="text-[10px] text-ink-500 font-medium">Experience</p>
                </div>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-rose-100/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-rose-200">
                  <p className="font-serif italic text-2xl text-rose-600 group-hover:scale-105 transition-transform">{doctorData.patients}</p>
                  <p className="text-[10px] text-ink-500 font-medium">Happy Patients</p>
                </div>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-rose-100/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-rose-200">
                  <p className="font-serif italic text-2xl text-rose-600 group-hover:scale-105 transition-transform">{doctorData.successRate}</p>
                  <p className="text-[10px] text-ink-500 font-medium">Success Rate</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/consultation"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold text-sm shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <Sparkles className="h-4 w-4" />
                  Book Consultation
                </Link>
                <a
                  href={doctorData.clinic.phone}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-rose-200 bg-white/50 text-rose-600 font-semibold text-sm hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right - Doctor Image with Premium Effects */}
            <div className="relative">
              <div className="relative aspect-[5/5] rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/20">
                {/* Image */}
                <Image
                  src="https://plain-apac-prod-public.komododecks.com/202608/13/uDJ20RmMzJIItIpPZ2iH/image.webp"
                  alt={doctorData.name}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 to-transparent"></div>

                {/* Premium Floating Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-white/50 flex items-center gap-2 animate-float">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-ink-900">{doctorData.rating}</span>
                    <span className="text-xs text-ink-400">({doctorData.reviews})</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4 text-rose-500" />
                      <span className="text-xs font-semibold text-ink-900">Verified Specialist</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-amber-500" />
                      <span className="text-xs font-semibold text-ink-900">Top Rated</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-rose-200/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-rose-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Details Section - Premium Tabs */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-rose-100/50 mb-10">
            {[
              { id: 'about', label: 'About Doctor' },
              { id: 'qualifications', label: 'Qualifications' },
              { id: 'expertise', label: 'Expertise' },
              { id: 'experience', label: 'Experience' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-rose-500 text-rose-600'
                    : 'border-transparent text-ink-400 hover:text-ink-600 hover:border-rose-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-14">
            {/* Main Content */}
            <div className="space-y-8">
              {activeTab === 'about' && (
                <>
                  <div>
                    <h2 className="text-2xl md:text-3xl text-ink-900 mb-6">About {doctorData.name}</h2>
                    {doctorData.bio.map((p, i) => (
                      <p key={i} className="text-ink-400 leading-relaxed mb-4">{p}</p>
                    ))}
                  </div>

                  {/* Philosophy */}
                  <div className="relative bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-100/30 rounded-full blur-2xl"></div>
                    <Quote className="h-5 w-5 text-rose-400 mb-3 relative z-10" />
                    <p className="text-sm text-ink-600 leading-relaxed relative z-10 italic">
                      {doctorData.philosophy}
                    </p>
                  </div>

                  {/* Memberships */}
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900 mb-4">Memberships & Affiliations</h3>
                    <div className="flex flex-wrap gap-2">
                      {doctorData.memberships.map((m) => (
                        <span key={m} className="px-3 py-1.5 bg-rose-50/80 border border-rose-100 rounded-full text-xs text-rose-600 font-medium hover:bg-rose-100 transition-colors">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'qualifications' && (
                <div>
                  <h2 className="text-2xl md:text-3xl text-ink-900 mb-6">Qualifications</h2>
                  <div className="space-y-4">
                    {doctorData.qualifications.map((q, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-rose-50/30 rounded-xl border border-rose-100/30 hover:border-rose-200 transition-all hover:shadow-md">
                        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                          <GraduationCap className="h-4 w-4 text-rose-500" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-ink-900">{q.degree}</p>
                          <p className="text-xs text-ink-400">{q.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'expertise' && (
                <div>
                  <h2 className="text-2xl md:text-3xl text-ink-900 mb-6">Areas of Expertise</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {doctorData.expertise.map((item) => (
                      <div 
                        key={item.label}
                        className="group bg-white rounded-xl p-5 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                      >
                        <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 group-hover:scale-110 transition-transform mb-3`}>
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-ink-900">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div>
                  <h2 className="text-2xl md:text-3xl text-ink-900 mb-6">Experience Timeline</h2>
                  <div className="space-y-6">
                    {doctorData.experienceTimeline.map((exp, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-rose-500 border-4 border-rose-100"></div>
                          {i < doctorData.experienceTimeline.length - 1 && (
                            <div className="w-px h-full bg-gradient-to-b from-rose-300 to-transparent"></div>
                          )}
                        </div>
                        <div className="pb-6">
                          <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">{exp.year}</span>
                          <p className="text-sm text-ink-600 mt-1">{exp.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Clinic Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900">{doctorData.clinic.name}</h3>
                    <p className="text-[10px] text-ink-400">Clinic Location</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-ink-600">
                    <MapPin className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
                    <span>{doctorData.clinic.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ink-600">
                    <Phone className="h-4 w-4 text-rose-500 shrink-0" />
                    <a href={`tel:${doctorData.clinic.phone}`} className="hover:text-rose-600 transition-colors">
                      {doctorData.clinic.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ink-600">
                    <Mail className="h-4 w-4 text-rose-500 shrink-0" />
                    <a href={`mailto:${doctorData.clinic.email}`} className="hover:text-rose-600 transition-colors">
                      {doctorData.clinic.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ink-600">
                    <Clock className="h-4 w-4 text-rose-500 shrink-0" />
                    {doctorData.clinic.hours}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-rose-100/50">
                  <Link
                    href="/consultation"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="relative bg-gradient-to-r from-rose-600 to-pink-600 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="container-page relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book a consultation with{" "}
            <span className="font-serif italic text-rose-200">Dr. Mandavi Rai</span>
          </h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Start your journey to parenthood with personalized fertility care and advanced treatments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/consultation"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-rose-600 font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <Sparkles className="h-4 w-4" />
              Book Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={doctorData.clinic.phone}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}
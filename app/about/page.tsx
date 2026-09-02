// app/about/page.tsx
"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Star, 
  Award, 
  Calendar, 
  Users,
  Stethoscope,
  Microscope,
  Baby,
  CheckCircle,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Quote,
  GraduationCap,
  BadgeCheck,
  ChevronRight,
  Play,
  Pause,
  X,
  ExternalLink,
  Activity,
  UserRound,
  Pill,
  Ambulance,
  ClipboardCheck,
  Flower2,
  Sparkle,
  Syringe,
  Target,
  TrendingUp,
  FileText,
  BookOpen,
  Globe
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeTab, setActiveTab] = useState('overview');

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

  const clinicStats = [
    { number: "15+", label: "Fertility & IVF Experience", icon: Award },
    { number: "3000+", label: "Parenthood Journeys", icon: Users },
    { number: "4.8★", label: "Patient Rating", icon: Star },
    { number: "22+", label: "Fertility Services", icon: Stethoscope },
  ];

  const coreValues = [
    { icon: Heart, label: "Compassionate Care", desc: "Every patient receives emotional support throughout their fertility journey" },
    { icon: Shield, label: "Evidence-Based", desc: "Treatments backed by the latest medical research and clinical evidence" },
    { icon: Sparkles, label: "Personalized Approach", desc: "Treatment plans tailored to your unique medical history and reproductive goals" },
    { icon: Users, label: "Doctor-Led Practice", desc: "Single point of contact from start to finish with complete continuity of care" },
  ];

  const facilities = [
    { icon: Microscope, label: "Advanced Embryology Lab", desc: "State-of-the-art IVF laboratory with cutting-edge technology" },
    { icon: Activity, label: "Modern Operation Theatre", desc: "Fully equipped surgical facilities for gynecological procedures" },
    { icon: ClipboardCheck, label: "Digital Health Records", desc: "Secure electronic medical records for seamless patient care" },
    { icon: Flower2, label: "Comfortable Consultation", desc: "Warm, welcoming consultation rooms designed for patient comfort" },
  ];

  const serviceGroups = [
    { key: 'fertility', title: 'Fertility Evaluation', summary: 'Comprehensive fertility assessment and diagnosis' },
    { key: 'ivf', title: 'IVF & ART Treatments', summary: 'Advanced IVF, ICSI, and assisted reproduction' },
    { key: 'gynecology', title: 'Gynaecology Services', summary: 'Complete women\'s health and gynecological care' },
    { key: 'pregnancy', title: 'Pregnancy Care', summary: 'Comprehensive care from conception to delivery' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-rose-50/30 to-rose-100/30 py-16 md:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-100/40 to-rose-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-100/30 to-pink-100/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-page relative px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-5 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-rose-50/90 backdrop-blur-sm border border-rose-200/50 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                <span className="text-[9px] sm:text-[11px] font-semibold text-rose-600 tracking-wider uppercase">About Divine IVF</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] font-bold text-ink-900">
                Care built around{" "}
                <span className="font-serif italic text-transparent bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text">understanding first</span>
              </h1>
              
              <p className="text-sm sm:text-base text-ink-500 leading-relaxed max-w-lg">
                At Divine IVF, we bring fertility evaluation, advanced IVF, gynaecology, and pregnancy care together under one doctor-led practice in Sector 76, Noida. Our focus is on providing expert, personalized care that makes your journey toward parenthood more informed, comfortable, and reassuring.
              </p>
              
              <p className="text-sm sm:text-base text-ink-500 leading-relaxed max-w-lg">
                From your first fertility consultation to IVF and pregnancy care, Divine IVF stays with you at every step. Expert care, personal attention, and a journey designed around you.
              </p>

              {/* Stats - Updated */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                {clinicStats.map((stat) => (
                  <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <stat.icon className="h-4 w-4 md:h-5 md:w-5 text-rose-500 mb-0.5 md:mb-1" />
                    <p className="font-serif italic text-lg md:text-xl text-rose-600">{stat.number}</p>
                    <p className="text-[7px] sm:text-[8px] md:text-[9px] text-ink-500 font-medium leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                <Link
                  href="/consultation"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Book Consultation
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full border-2 border-rose-200 bg-white/50 text-rose-600 font-semibold text-xs sm:text-sm hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right - Video/Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/20 bg-ink-900">
                {!showVideo ? (
                  <>
                    <Image
                      src="https://plain-apac-prod-public.komododecks.com/202608/13/mBr4bMEVS9BL6objOuAb/image.webp"
                      alt="Divine IVF consultation space"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Play Button */}
                    <button
                      onClick={handlePlay}
                      className="absolute inset-0 flex items-center justify-center group/btn"
                    >
                      <span className="absolute h-16 w-16 sm:h-20 sm:w-24 rounded-full bg-white/20 animate-ping opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                      <span className="relative h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-gradient-to-br group-hover/btn:from-rose-500 group-hover/btn:to-pink-500 group-hover/btn:border-transparent">
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white fill-white ml-0.5 sm:ml-1" />
                      </span>
                    </button>

                    {/* Badges */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl border border-white/50 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rose-500" />
                          <span className="text-[10px] sm:text-xs font-semibold text-ink-900">Trusted Clinic</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-[10px] sm:text-xs font-bold text-ink-900">4.8</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      src="/videos/clinic-intro.mp4"
                      className="w-full h-full object-cover"
                      playsInline
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                    
                    <button
                      onClick={togglePlay}
                      className="absolute bottom-4 right-4 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all hover:scale-110 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
                      ) : (
                        <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-white ml-0.5" />
                      )}
                    </button>

                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.pause();
                          videoRef.current.currentTime = 0;
                        }
                        setShowVideo(false);
                        setIsPlaying(false);
                      }}
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all hover:scale-110 z-20"
                    >
                      <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Tabs - Updated Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-page px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-1 sm:gap-2 border-b border-rose-100/50 mb-8 md:mb-10 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'approach', label: 'Our Approach' },
              { id: 'values', label: 'Core Values' },
              { id: 'facilities', label: 'Facilities' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 md:gap-12 lg:gap-14">
            <div className="space-y-6 md:space-y-8">
              {activeTab === 'overview' && (
                <>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-ink-900 mb-3 md:mb-4">
                      Built on Experience. Shaped by Every Patient Journey.
                    </h2>
                    
                    {/* Subtitle with Quote */}
                    <div className="flex items-start gap-2 sm:gap-3 bg-rose-50/50 rounded-xl p-3 sm:p-4 mb-4 md:mb-6 border-l-4 border-rose-400">
                      <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base font-medium text-ink-700 italic">
                        Because no two fertility journeys are the same.
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-ink-500 leading-relaxed mb-3 md:mb-4">
                      At Divine IVF, we understand that behind every consultation is a story — the hope, the questions, the waiting, and the desire to finally understand what comes next.
                    </p>
                    
                    <p className="text-sm sm:text-base text-ink-500 leading-relaxed mb-3 md:mb-4">
                      Divine IVF is the outcome of Dr. Mandavi Rai's years of experience caring for patients with diverse fertility needs and challenges. Over time, these experiences have shaped an approach to fertility care that is thoughtful, individualised and grounded in sound clinical judgement.
                    </p>
                    
                    <p className="text-sm sm:text-base text-ink-500 leading-relaxed mb-3 md:mb-4">
                      Rather than following a one-size-fits-all pathway, we begin by understanding the person behind the diagnosis — evaluating each couple carefully and choosing the treatment approach that is appropriate for their individual needs.
                    </p>
                    
                    <p className="text-sm sm:text-base text-ink-500 leading-relaxed">
                      From fertility evaluation and ovulation management to IUI, IVF, ICSI and advanced reproductive procedures, Divine IVF brings together experience, evidence-based care and personal attention — so that every patient feels heard, informed and cared for through their journey.
                    </p>
                  </div>

                  {/* Philosophy Quote */}
                  <div className="relative bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-4 sm:p-6 border border-rose-100/50 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-100/30 rounded-full blur-2xl"></div>
                    <Quote className="h-5 w-5 text-rose-400 mb-3 relative z-10" />
                    <p className="text-sm sm:text-base text-ink-600 leading-relaxed relative z-10 italic">
                      Every consultation starts the same way: understanding your history before recommending anything. Not every patient needs IVF immediately — some respond to simpler treatment, others benefit from advanced techniques from the outset. Getting that judgement right, early, is central to how we work.
                    </p>
                    <div className="mt-4 flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                        <UserRound className="h-5 w-5 text-rose-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink-900">Dr. Mandavi Rai</p>
                        <p className="text-xs text-ink-400">Founder &amp; IVF Specialist</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Groups */}
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900 mb-3 md:mb-4">Our Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {serviceGroups.map((g) => (
                        <div key={g.key} className="bg-rose-50/30 rounded-xl p-3 sm:p-4 border border-rose-100/30 hover:border-rose-200 transition-all hover:shadow-md">
                          <p className="text-xs sm:text-sm font-semibold text-ink-900">{g.title}</p>
                          <p className="text-[10px] sm:text-xs text-ink-400 mt-0.5 sm:mt-1">{g.summary}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'approach' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-ink-900 mb-3 md:mb-4">Our Approach to Care</h2>
                  
                  <p className="text-sm sm:text-base text-ink-500 leading-relaxed mb-4 md:mb-6">
                    Dr. Mandavi Rai believes there is no one-size-fits-all path to parenthood. Every patient's history, body, and journey is different, so their treatment should be too. Here's how we make that happen:
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-rose-50/30 rounded-xl border border-rose-100/30 hover:border-rose-200 transition-all">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                        <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rose-500" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-ink-900">Patient-Centered Care</p>
                        <p className="text-[10px] sm:text-xs text-ink-400">Every treatment plan is tailored to your unique medical history, lifestyle and reproductive goals. Behind every AMH report is a woman, behind every semen analysis is a couple, and behind every IVF cycle is a dream.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-rose-50/30 rounded-xl border border-rose-100/30 hover:border-rose-200 transition-all">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                        <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rose-500" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-ink-900">Evidence-Based Medicine</p>
                        <p className="text-[10px] sm:text-xs text-ink-400">All treatments are backed by the latest medical research and clinical evidence. Dr. Rai has published numerous scientific papers in national and international journals.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-rose-50/30 rounded-xl border border-rose-100/30 hover:border-rose-200 transition-all">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rose-500" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-ink-900">Transparent Communication</p>
                        <p className="text-[10px] sm:text-xs text-ink-400">Complete transparency at every step — from diagnosis to treatment and beyond. Patients receive result-oriented counseling and are fully informed about their options.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-rose-50/30 rounded-xl border border-rose-100/30 hover:border-rose-200 transition-all">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                        <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rose-500" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-ink-900">Continuity of Care</p>
                        <p className="text-[10px] sm:text-xs text-ink-400">Fertility, gynaecology and pregnancy care under one practice — no need for separate providers. Dr. Rai provides a single point of contact from start to finish.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-ink-900 mb-3 md:mb-4">Our Core Values</h2>
                  <p className="text-sm sm:text-base text-ink-500 leading-relaxed mb-4 md:mb-6">
                    Guided by the expertise and vision of Dr. Mandavi Rai, these values form the foundation of everything we do at Divine IVF.
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {coreValues.map((value) => (
                      <div key={value.label} className="group bg-white rounded-xl p-4 sm:p-5 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-rose-50 group-hover:bg-rose-100 transition-colors flex items-center justify-center shrink-0">
                            <value.icon className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-semibold text-ink-900">{value.label}</p>
                            <p className="text-[10px] sm:text-xs text-ink-400 mt-0.5 sm:mt-1">{value.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'facilities' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-ink-900 mb-3 md:mb-4">Our Facilities</h2>
                  <p className="text-sm sm:text-base text-ink-500 leading-relaxed mb-4 md:mb-6">
                    Our clinic is equipped with state-of-the-art facilities to provide the highest standard of fertility care under one roof.
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {facilities.map((facility) => (
                      <div key={facility.label} className="group bg-white rounded-xl p-4 sm:p-5 border border-rose-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-rose-50 group-hover:bg-rose-100 transition-colors flex items-center justify-center shrink-0">
                            <facility.icon className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-semibold text-ink-900">{facility.label}</p>
                            <p className="text-[10px] sm:text-xs text-ink-400 mt-0.5 sm:mt-1">{facility.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-4 sm:p-6 border border-rose-100/50 sticky top-24">
                <h3 className="text-sm font-semibold text-ink-900 mb-3 sm:mb-4">Clinic Information</h3>
                
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-ink-600">
                    <Building2 className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Divine IVF</p>
                      <p className="text-[10px] sm:text-xs text-ink-400">Sector 76, Noida, UP 201301</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-ink-600">
                    <Phone className="h-4 w-4 text-rose-500 shrink-0" />
                    <a href="tel:+919560026697" className="hover:text-rose-600 transition-colors">
                      +91 95600 26697
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-ink-600">
                    <Mail className="h-4 w-4 text-rose-500 shrink-0" />
                    <a href="mailto:info@divineivf.com" className="hover:text-rose-600 transition-colors">
                      info@divineivf.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-ink-600">
                    <Clock className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-rose-100/50">
                  <Link
                    href="/consultation"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Book Consultation
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-rose-100/50 shadow-sm">
                <h3 className="text-sm font-semibold text-ink-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <Sparkle className="h-4 w-4 text-rose-500" />
                  Why Choose Divine IVF
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-center gap-2 text-[10px] sm:text-xs text-ink-600">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500" />
                    Doctor-led care from start to finish
                  </li>
                  <li className="flex items-center gap-2 text-[10px] sm:text-xs text-ink-600">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500" />
                    15+ years of clinical experience
                  </li>
                  <li className="flex items-center gap-2 text-[10px] sm:text-xs text-ink-600">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500" />
                    Advanced IVF & fertility treatments
                  </li>
                  <li className="flex items-center gap-2 text-[10px] sm:text-xs text-ink-600">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500" />
                    Compassionate, personalized approach
                  </li>
                  <li className="flex items-center gap-2 text-[10px] sm:text-xs text-ink-600">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500" />
                    Transparent communication
                  </li>
                  <li className="flex items-center gap-2 text-[10px] sm:text-xs text-ink-600">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500" />
                    High success rates in ART procedures
                  </li>
                  <li className="flex items-center gap-2 text-[10px] sm:text-xs text-ink-600">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500" />
                    Continuity of care under one roof
                  </li>
                </ul>
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
        <div className="container-page relative text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sm sm:text-base text-rose-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Book a consultation with Dr. Mandavi Rai and take the first step towards parenthood with compassionate, expert care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/consultation"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-rose-600 font-semibold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
            >
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Book Consultation
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              View All Services
              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
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
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ConsultationForm } from "@/components/page/ConsultationForm";
import { clinic } from "@/data/clinic";
import { 
  Phone, Mail, MapPin, Clock, Shield, 
  Heart, Sparkles, Calendar, Users, 
  Award, CheckCircle, ArrowRight, 
  Star, MessageCircle, Stethoscope,
  Baby, Flower2
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/consultation" },
  title: "Book an IVF Consultation | Divine IVF - Fertility Specialist Noida",
  description: "Book a consultation with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida. Expert fertility care, IVF, IUI, and advanced reproductive treatments.",
};

export default function ConsultationPage() {
  const features = [
    { icon: Shield, text: "100% Confidential Consultation" },
    { icon: Users, text: "8000+ Happy Families" },
    { icon: Award, text: "15+ Years Experience" },
    { icon: Clock, text: "Same Day Response" },
  ];

  const steps = [
    { number: "01", title: "Share Your Details", description: "Fill in your basic information and preferred contact method." },
    { number: "02", title: "Get a Call Back", description: "Our team will reach out within 24 hours to understand your needs." },
    { number: "03", title: "Book Your Visit", description: "Schedule an in-person consultation with Dr. Mandavi Rai." },
  ];

  return (
    <>
      {/* Hero Section - Premium */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 py-16 md:py-24 lg:py-28 border-b border-rose-100">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/10 to-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-100/10 rounded-full blur-3xl" />
        
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-10 left-10">
            <Baby className="h-16 w-16 text-rose-400" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Heart className="h-16 w-16 text-rose-400" />
          </div>
          <div className="absolute top-1/2 left-1/4">
            <Flower2 className="h-12 w-12 text-rose-300" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" }, 
              { label: "Consultation" }
            ]} 
          />
          
          <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-medium shadow-lg shadow-rose-200 mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Book Your IVF Consultation</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-ink-900 leading-tight">
                Start with a{" "}
                <span className="font-serif italic bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  conversation
                </span>
              </h1>
              
              <p className="mt-4 text-base md:text-lg text-ink-500 leading-relaxed max-w-md">
                Take the first step towards parenthood. Share your situation and our 
                fertility experts will guide you with compassionate, personalised care.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-rose-100/50 shadow-sm">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-ink-700">4.9/5</span>
                  <span className="text-[10px] text-ink-400">(300+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-rose-100/50 shadow-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-medium text-ink-700">94% Success Rate</span>
                </div>
              </div>

              {/* Contact Info - Enhanced */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-4 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100/50 hover:shadow-md transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md flex-shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-ink-400 uppercase tracking-wider">Call Us Directly</p>
                    <a href={clinic.phoneHref} className="text-sm font-semibold text-ink-900 hover:text-rose-600 transition-colors">
                      {clinic.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100/50 hover:shadow-md transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md flex-shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-ink-400 uppercase tracking-wider">Email Us</p>
                    <a href={clinic.emailHref} className="text-sm font-semibold text-ink-900 hover:text-rose-600 transition-colors">
                      {clinic.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100/50 hover:shadow-md transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-ink-400 uppercase tracking-wider">Visit Our Clinic</p>
                    <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink-900 hover:text-rose-600 transition-colors">
                      {clinic.addressLines.join(" ")}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917678451808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-green-500/10 border border-green-200 text-green-700 text-sm font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all group"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat with us on WhatsApp</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right - Form Card */}
            <div className="relative">
              {/* Decorative Gradient behind form */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-bl from-rose-400/20 to-pink-400/20 rounded-full blur-2xl" />
              
              <div className="relative rounded-3xl bg-white shadow-2xl border border-rose-100/50 p-6 md:p-8 lg:p-10">
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg shadow-rose-200">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink-900">Book Your Consultation</h3>
                    <p className="text-xs text-ink-400">Fill in the details and we`ll reach out</p>
                  </div>
                </div>

                <ConsultationForm />

                {/* Trust Badge below form */}
                <div className="mt-4 pt-4 border-t border-rose-100/50">
                  <div className="flex items-center justify-center gap-4 text-[10px] text-ink-400">
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-rose-400" />
                      Confidential
                    </span>
                    <span className="w-px h-4 bg-rose-200" />
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-rose-400" />
                      Same Day Response
                    </span>
                    <span className="w-px h-4 bg-rose-200" />
                    <span className="flex items-center gap-1">
                      <Stethoscope className="h-3 w-3 text-rose-400" />
                      Expert Care
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white border-b border-rose-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-rose-50/50 to-pink-50/30 rounded-xl border border-rose-100/30">
                  <div className="p-2 rounded-lg bg-rose-100/50">
                    <Icon className="h-4 w-4 text-rose-500" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-ink-700">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-rose-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-600 text-xs font-medium tracking-wide mb-3">
              <Heart className="h-3.5 w-3.5" />
              <span>Simple Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
              How It <span className="text-rose-600">Works</span>
            </h2>
            <p className="text-ink-400 text-sm mt-2">
              Three simple steps to start your fertility journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative p-6 bg-white rounded-2xl shadow-lg border border-rose-100/50 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-3xl font-bold text-rose-500/20 group-hover:text-rose-500 transition-colors">
                      {step.number}
                    </div>
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-rose-200 to-transparent -translate-y-1/2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900 mb-1">{step.title}</h3>
                    <p className="text-xs text-ink-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-rose-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/90 mt-2 text-sm">
            Book a consultation today and take the first step towards parenthood
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="#consultation-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Calendar className="h-4 w-4" />
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+917678451808"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call +91 7678451808
            </a>
          </div>
          <p className="text-white/70 text-xs mt-4 flex items-center justify-center gap-2">
            <Shield className="h-3 w-3" />
            Your information is kept confidential
          </p>
        </div>
      </section>
    </>
  );
}
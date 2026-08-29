import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, Phone, Mail, Clock, Calendar, User, 
  MessageCircle, ArrowRight, Send, CheckCircle,
  Home, Building, Navigation, Heart, Shield,
  Award, Users, Star, Sparkles, ExternalLink
} from "lucide-react";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us | Divine IVF - Fertility Clinic in Noida",
  description: "Contact Divine IVF in Sector 76, Noida. Get in touch for IVF, IUI, fertility treatments. Call +91 7678451808 or visit our clinic.",
};

export default function ContactPage() {
  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const features = [
    { icon: Heart, text: "Patient-Centered Care" },
    { icon: Shield, text: "95% Success Rate" },
    { icon: Award, text: "10+ Years Experience" },
    { icon: Users, text: "8000+ Happy Families" },
  ];

  return (
    <>
      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 py-12 md:py-16 lg:py-20 border-b border-rose-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" }, 
              { label: "Contact" }
            ]} 
          />
          
          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-medium shadow-lg shadow-rose-200 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
              Reach{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
                Divine IVF
              </span>
            </h1>
            
            <p className="mt-4 text-lg text-ink-500 leading-relaxed max-w-2xl">
              We`re here to help you on your fertility journey. Call, email, or visit 
              our clinic — our team is ready to assist you with compassion and expertise.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <div className="flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-sm border border-rose-100">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-md">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-400">Response Time</p>
                  <p className="text-sm font-semibold text-ink-900">Within 24 Hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-sm border border-rose-100">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-md">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-400">Happy Patients</p>
                  <p className="text-sm font-semibold text-ink-900">8,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details - Full Width */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <SectionLabel>Contact Information</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mt-4 mb-6">
                Let`s Start Your{" "}
                <span className="text-rose-600">Journey</span>
              </h2>
              <p className="text-ink-400 leading-relaxed mb-8 max-w-md">
                Reach out to us through any of the following channels. We`re here 
                to answer your questions and guide you through every step.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-5 p-5 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100 hover:shadow-md transition-all group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md shadow-rose-200 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors">
                      Address
                    </p>
                    <p className="text-sm text-ink-500 leading-relaxed">
                      {clinic.addressLines.join(" ")}
                    </p>
                    <a 
                      href={clinic.mapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 hover:text-rose-700 mt-1"
                    >
                      Open in Google Maps
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 p-5 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100 hover:shadow-md transition-all group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md shadow-rose-200 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors">
                      Phone
                    </p>
                    <a 
                      href={clinic.phoneHref} 
                      className="text-sm text-ink-500 hover:text-rose-600 transition-colors block"
                    >
                      {clinic.phone}
                    </a>
                    <div className="flex items-center gap-2 mt-1">
                      <a 
                        href={clinic.phoneHref}
                        className="inline-flex items-center gap-1 text-xs bg-rose-100 text-rose-600 px-3 py-1 rounded-full hover:bg-rose-200 transition-colors"
                      >
                        Call Now
                      </a>
                      <a 
                        href="https://wa.me/917678451808"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
                      >
                        <MessageCircle className="h-3 w-3" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 p-5 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100 hover:shadow-md transition-all group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md shadow-rose-200 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors">
                      Email
                    </p>
                    <a 
                      href={clinic.emailHref} 
                      className="text-sm text-ink-500 hover:text-rose-600 transition-colors block"
                    >
                      {clinic.email}
                    </a>
                    <p className="text-xs text-ink-400 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-8 p-6 bg-white rounded-2xl border border-rose-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-md shadow-rose-200">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-ink-900">Working Hours</h3>
                </div>
                <div className="space-y-2">
                  {workingHours.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm border-b border-rose-50 pb-2 last:border-0 last:pb-0">
                      <span className="text-ink-600">{item.day}</span>
                      <span className={`font-medium ${item.hours === "Closed" ? "text-rose-500" : "text-ink-800"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Map & Features */}
            <div className="space-y-8">
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-rose-100">
                <iframe
                  title="Divine IVF Location"
                  className="h-full w-full min-h-[420px] md:min-h-[480px]"
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Divine%20Women%20%26%20IVF%20Clinic%2C%20Sector%2076%2C%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              {/* Quick Contact Form - Simplified */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100">
                <h3 className="text-lg font-bold text-ink-900 mb-4 flex items-center gap-2">
                  <Send className="h-5 w-5 text-rose-500" />
                  Quick Message
                </h3>
                <form className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
                  />
                  <textarea
                    placeholder="Your Message..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm resize-none"
                  />
                  <button className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-rose-100 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="h-8 w-8 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-rose-500" />
                      </div>
                      <span className="text-xs font-medium text-ink-700">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Get in Touch */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-rose-500 to-pink-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-4">
            <Heart className="h-3.5 w-3.5" />
            <span>Start Your Journey Today</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Take the First Step?
          </h2>
          
          <p className="text-white/90 mt-4 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Mandavi Rai and begin your fertility journey 
            with compassionate, expert care.
          </p>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-rose-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+917678451808"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-white/80">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Confidential Consultation
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Expert Guidance
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Personalized Care
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { 
  MapPin, Phone, Mail, Clock, Calendar, User, 
  MessageCircle, ArrowRight, Send, CheckCircle, AlertCircle,
  Home, Building, Navigation, Heart, Shield,
  Award, Users, Star, Sparkles, ExternalLink
} from "lucide-react";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { clinic } from "@/data/clinic";

// ---------- Helper: Device / Browser / Location info ----------
async function collectVisitorInfo() {
  const ua = navigator.userAgent;

  const detectBrowser = () => {
    if (ua.includes("Edg/")) return "Microsoft Edge";
    if (ua.includes("OPR/") || ua.includes("Opera")) return "Opera";
    if (ua.includes("Chrome/") && !ua.includes("Edg/")) return "Chrome";
    if (ua.includes("Safari/") && !ua.includes("Chrome/")) return "Safari";
    if (ua.includes("Firefox/")) return "Firefox";
    return "Unknown";
  };

  const detectOS = () => {
    if (ua.includes("Windows NT 10")) return "Windows 10/11";
    if (ua.includes("Windows")) return "Windows";
    if (ua.includes("Android")) return "Android";
    if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
    if (ua.includes("Mac OS X")) return "macOS";
    if (ua.includes("Linux")) return "Linux";
    return "Unknown";
  };

  const detectDevice = () => {
    if (/Mobi|Android|iPhone/i.test(ua)) return "Mobile";
    if (/iPad|Tablet/i.test(ua)) return "Tablet";
    return "Desktop";
  };

  const screenInfo = `${window.screen.width}x${window.screen.height} (viewport: ${window.innerWidth}x${window.innerHeight})`;
  const pixelRatio = window.devicePixelRatio || 1;
  const colorDepth = window.screen.colorDepth;

  const language = navigator.language || "Unknown";
  const languages = (navigator.languages || []).join(", ");
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";
  const timezoneOffset = new Date().getTimezoneOffset();

  const navAny = navigator as any;
  const connection =
    navAny.connection?.effectiveType ||
    navAny.mozConnection?.effectiveType ||
    navAny.webkitConnection?.effectiveType ||
    "Unknown";

  const referrer = document.referrer || "Direct";
  const currentUrl = window.location.href;
  const pagePath = window.location.pathname;

  let batteryInfo = "Not supported";
  try {
    const b = await navAny.getBattery?.();
    if (b) {
      batteryInfo = `${Math.round(b.level * 100)}% ${b.charging ? "(charging)" : ""}`;
    }
  } catch {
    /* ignore */
  }

  let ip = "Unknown";
  let city = "Unknown";
  let region = "Unknown";
  let country = "Unknown";
  let countryCode = "Unknown";
  let isp = "Unknown";
  let lat = "Unknown";
  let lon = "Unknown";

  try {
    const res = await fetch("https://ipapi.co/json/");
    if (res.ok) {
      const data = await res.json();
      ip = data.ip || "Unknown";
      city = data.city || "Unknown";
      region = data.region || "Unknown";
      country = data.country_name || "Unknown";
      countryCode = data.country_code || "Unknown";
      isp = data.org || "Unknown";
      lat = data.latitude ?? "Unknown";
      lon = data.longitude ?? "Unknown";
    }
  } catch {
    try {
      const r = await fetch("https://api.ipify.org?format=json");
      const d = await r.json();
      ip = d.ip || "Unknown";
    } catch {
      /* ignore */
    }
  }

  return {
    ip, city, region, country, countryCode, isp, lat, lon,
    browser: detectBrowser(),
    os: detectOS(),
    deviceType: detectDevice(),
    userAgent: ua,
    screen: screenInfo,
    pixelRatio: String(pixelRatio),
    colorDepth: String(colorDepth),
    language, languages, timezone,
    timezoneOffset: String(timezoneOffset),
    connection, referrer, currentUrl, pagePath,
    battery: batteryInfo,
  };
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Phone state — full number with country code
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [localNumber, setLocalNumber] = useState("");

  const handlePhoneChange = (
    fullNumber: string,
    code: string,
    local: string
  ) => {
    setPhone(fullNumber);
    setCountryCode(code);
    setLocalNumber(local);
  };

  const workingHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "Online Appointment" },
  ];

  const features = [
    { icon: Heart, text: "Patient-Centered Care" },
    { icon: Shield, text: "95% Success Rate" },
    { icon: Award, text: "15+ Years Experience" },
    { icon: Users, text: "3000+ Happy Families" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Only phone needs manual validation (controlled component)
    if (!localNumber.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("from_name") as string;
    const email = formData.get("from_email") as string;
    const originalMessage = formData.get("message") as string;

    // 👇 Collect IP / Location / Device info
    const info = await collectVisitorInfo();

    // Visitor report
    const visitorReport = `

----------------------------------------
📊 VISITOR INFORMATION
----------------------------------------
🌐 IP Address:      ${info.ip}
📍 City:            ${info.city}
🗺️  Region:          ${info.region}
🌍 Country:         ${info.country} (${info.countryCode})
🏢 ISP:             ${info.isp}
📌 Coordinates:     ${info.lat}, ${info.lon}

💻 Device Type:     ${info.deviceType}
🖥️  OS:              ${info.os}
🧭 Browser:         ${info.browser}
📱 Screen:          ${info.screen}
🔍 Pixel Ratio:     ${info.pixelRatio}
🎨 Color Depth:     ${info.colorDepth} bit

🗣️  Language:        ${info.language}
🌐 All Languages:   ${info.languages}
⏰ Timezone:        ${info.timezone} (UTC offset: ${info.timezoneOffset} min)
📶 Connection:      ${info.connection}
🔋 Battery:         ${info.battery}

🔗 Referrer:        ${info.referrer}
📄 Page URL:        ${info.currentUrl}
📁 Page Path:       ${info.pagePath}

🖥️  User Agent:
${info.userAgent}
----------------------------------------
    `.trim();

    const combinedMessage = `
Country Code: ${countryCode}
Local Number: ${localNumber}

Message: ${originalMessage || "None"}

${visitorReport}
    `.trim();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!,
        {
          // Form fields
          from_name: name,
          from_email: email,
          phone: phone,
          country_code: countryCode,
          local_number: localNumber,
          message: combinedMessage,

          // Dedicated visitor fields
          visitor_ip: info.ip,
          visitor_city: info.city,
          visitor_region: info.region,
          visitor_country: info.country,
          visitor_country_code: info.countryCode,
          visitor_isp: info.isp,
          visitor_lat: info.lat,
          visitor_lon: info.lon,
          visitor_device: info.deviceType,
          visitor_os: info.os,
          visitor_browser: info.browser,
          visitor_screen: info.screen,
          visitor_language: info.language,
          visitor_timezone: info.timezone,
          visitor_connection: info.connection,
          visitor_battery: info.battery,
          visitor_referrer: info.referrer,
          visitor_page_url: info.currentUrl,
          visitor_user_agent: info.userAgent,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      form.reset();
      setPhone("");
      setCountryCode("+91");
      setLocalNumber("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

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
                  <p className="text-sm font-semibold text-ink-900">3,000+</p>
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
                        Connect on WhatsApp
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

              {/* Quick Contact Form */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100">
                <h3 className="text-lg font-bold text-ink-900 mb-4 flex items-center gap-2">
                  <Send className="h-5 w-5 text-rose-500" />
                  Quick Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Name — MANDATORY */}
                    <div className="relative">
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2.5 pr-7 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-500 text-sm font-bold pointer-events-none">
                        *
                      </span>
                    </div>

                    {/* Email — MANDATORY */}
                    <div className="relative">
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2.5 pr-7 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-500 text-sm font-bold pointer-events-none">
                        *
                      </span>
                    </div>
                  </div>

                  {/* Phone with Country Code — MANDATORY */}
                  <div className="relative">
                    <PhoneInput
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="98765 43210"
                      required
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-500 text-base font-bold pointer-events-none z-20">
                      *
                    </span>
                  </div>

                  {/* Message — MANDATORY (as per original) */}
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Your Message..."
                      rows={3}
                      required
                      className="w-full px-4 py-2.5 pr-7 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm resize-none"
                    />
                    <span className="absolute right-3 top-2 text-rose-500 text-sm font-bold pointer-events-none">
                      *
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <p className="flex items-center gap-1.5 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      Message sent successfully! You&apos;ll also receive a confirmation email shortly.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="flex items-center gap-1.5 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {!localNumber.trim()
                        ? "Please enter your phone number."
                        : "Something went wrong. Please try again or call us directly."}
                    </p>
                  )}
                </form>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-rose-100">
                <iframe
                  title="Divine IVF Location"
                  className="h-full w-full min-h-[320px] md:min-h-[280px]"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0475375523174!2d77.3829702!3d28.568335200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f4d1b2a95%3A0x7b2022187b5e7b96!2sDr.%20Mandavi%20Rai-%20Divine%20Women%20%26%20IVF%20Clinic%20%7C%20Top%20IVF%20Doctor%20in%20Noida%20%7C%20Best%20Gynecologist%20in%20Noida%20%7C%20Best%20Laparoscopic%20Surgeon!5e0!3m2!1sen!2sin!4v1789023422411!5m2!1sen!2sin"
                />
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
              href="/consultation"
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
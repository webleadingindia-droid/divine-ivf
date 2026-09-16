"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { PhoneInput } from "@/components/ui/PhoneInput";

// ---------- Helper: Device / Browser / Location info ----------
async function collectVisitorInfo() {
  const ua = navigator.userAgent;

  // Browser detection
  const detectBrowser = () => {
    if (ua.includes("Edg/")) return "Microsoft Edge";
    if (ua.includes("OPR/") || ua.includes("Opera")) return "Opera";
    if (ua.includes("Chrome/") && !ua.includes("Edg/")) return "Chrome";
    if (ua.includes("Safari/") && !ua.includes("Chrome/")) return "Safari";
    if (ua.includes("Firefox/")) return "Firefox";
    return "Unknown";
  };

  // OS detection
  const detectOS = () => {
    if (ua.includes("Windows NT 10")) return "Windows 10/11";
    if (ua.includes("Windows")) return "Windows";
    if (ua.includes("Android")) return "Android";
    if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
    if (ua.includes("Mac OS X")) return "macOS";
    if (ua.includes("Linux")) return "Linux";
    return "Unknown";
  };

  // Device type
  const detectDevice = () => {
    if (/Mobi|Android|iPhone/i.test(ua)) return "Mobile";
    if (/iPad|Tablet/i.test(ua)) return "Tablet";
    return "Desktop";
  };

  // Screen + viewport
  const screenInfo = `${window.screen.width}x${window.screen.height} (viewport: ${window.innerWidth}x${window.innerHeight})`;
  const pixelRatio = window.devicePixelRatio || 1;
  const colorDepth = window.screen.colorDepth;

  // Language / Timezone
  const language = navigator.language || "Unknown";
  const languages = (navigator.languages || []).join(", ");
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";
  const timezoneOffset = new Date().getTimezoneOffset();

  // Connection
  const navAny = navigator as any;
  const connection =
    navAny.connection?.effectiveType ||
    navAny.mozConnection?.effectiveType ||
    navAny.webkitConnection?.effectiveType ||
    "Unknown";

  // Referrer / Page
  const referrer = document.referrer || "Direct";
  const currentUrl = window.location.href;
  const pagePath = window.location.pathname;

  // Battery (optional, may not be supported)
  let batteryInfo = "Not supported";
  try {
    const b = await navAny.getBattery?.();
    if (b) {
      batteryInfo = `${Math.round(b.level * 100)}% ${b.charging ? "(charging)" : ""}`;
    }
  } catch {
    /* ignore */
  }

  // IP + Geolocation (via ipapi.co — free, no key needed)
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
    /* fallback: try ipify for IP only */
    try {
      const r = await fetch("https://api.ipify.org?format=json");
      const d = await r.json();
      ip = d.ip || "Unknown";
    } catch {
      /* ignore */
    }
  }

  return {
    ip,
    city,
    region,
    country,
    countryCode,
    isp,
    lat,
    lon,
    browser: detectBrowser(),
    os: detectOS(),
    deviceType: detectDevice(),
    userAgent: ua,
    screen: screenInfo,
    pixelRatio: String(pixelRatio),
    colorDepth: String(colorDepth),
    language,
    languages,
    timezone,
    timezoneOffset: String(timezoneOffset),
    connection,
    referrer,
    currentUrl,
    pagePath,
    battery: batteryInfo,
  };
}

export function ConsultationForm() {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("from_name") as string;
    const email = formData.get("from_email") as string;
    const treatment = formData.get("treatment") as string;
    const preferredDate = formData.get("preferred_date") as string;
    const originalMessage = formData.get("message") as string;

    // Only phone needs manual validation (controlled component)
    if (!localNumber.trim()) {
      setStatus("error");
      return;
    }

    // 👇 Collect IP / Location / Device info
    const info = await collectVisitorInfo();

    // Full visitor report appended to the message
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
Treatment Interested In: ${treatment || "Not specified"}
Preferred Date: ${preferredDate || "Not specified"}
Country Code: ${countryCode}
Local Number: ${localNumber}

Additional Message: ${originalMessage || "None"}

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

          // 👇 Dedicated visitor fields (use in EmailJS template if you want)
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
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Name — MANDATORY */}
      <div className="relative">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2.5 pr-8 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-500 text-base font-bold pointer-events-none">
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
          className="w-full px-4 py-2.5 pr-8 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-500 text-base font-bold pointer-events-none">
          *
        </span>
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

      {/* Treatment — OPTIONAL */}
      <select
        name="treatment"
        className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
      >
        <option value="">Select Treatment Interested In (optional)</option>
        <option value="IVF">IVF</option>
        <option value="IUI">IUI</option>
        <option value="Fertility Consultation">Fertility Consultation</option>
        <option value="Laparoscopic Surgery">Laparoscopic Surgery</option>
        <option value="Other">Other</option>
      </select>

      {/* Preferred Date — OPTIONAL */}
      <input
        type="date"
        name="preferred_date"
        className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
      />

      {/* Message — OPTIONAL */}
      <textarea
        name="message"
        placeholder="Tell us about your concern... (optional)"
        rows={3}
        className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm resize-none"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            Book Consultation
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-1.5 text-sm text-green-600">
          <CheckCircle className="h-4 w-4" />
          Request sent successfully! You&apos;ll also receive a confirmation email shortly.
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
  );
}
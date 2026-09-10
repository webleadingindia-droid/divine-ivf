"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("from_name") as string;
    const email = formData.get("from_email") as string;
    const phone = formData.get("phone") as string;
    const treatment = formData.get("treatment") as string;
    const preferredDate = formData.get("preferred_date") as string;
    const originalMessage = formData.get("message") as string;

    // Extra fields ko message ke andar merge kar do
    const combinedMessage = `
Treatment Interested In: ${treatment || "Not specified"}
Preferred Date: ${preferredDate || "Not specified"}

Additional Message: ${originalMessage || "None"}
    `.trim();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          phone: phone,
          message: combinedMessage,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
      />

      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
      />

      <select
        name="treatment"
        required
        className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
      >
        <option value="">Select Treatment Interested In</option>
        <option value="IVF">IVF</option>
        <option value="IUI">IUI</option>
        <option value="Fertility Consultation">Fertility Consultation</option>
        <option value="Laparoscopic Surgery">Laparoscopic Surgery</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="date"
        name="preferred_date"
        className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
      />

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
          Request sent successfully! You'll also receive a confirmation email shortly.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-1.5 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
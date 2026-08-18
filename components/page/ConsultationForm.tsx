"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { clinic } from "@/data/clinic";

// STATIC SITE — FRONTEND-ONLY FORM.
// There is no backend, database or API route in this project, so this form
// does not send data anywhere. On submit we simply show a confirmation
// message directing the person to call/email/WhatsApp directly.
//
// To wire this up for real in the future, replace handleSubmit with either:
//   1) a fetch() call to a form service (e.g. Formspree, Getform, Basin), or
//   2) a Next.js Server Action / API route once the project has a backend, or
//   3) a `mailto:` link build from the field values as a lightweight fallback.

const reasons = [
  "Fertility Investigation",
  "IVF",
  "IUI",
  "Advanced IVF (ICSI / PICSI / IMSI / ERA)",
  "Male Fertility",
  "Gynecology",
  "Pregnancy Care",
  "Other",
];

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend is connected — see comment above. We only update local UI state.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-10">
        <CheckCircle2 className="h-12 w-12 text-rose-600 mb-4" />
        <h3 className="text-lg font-semibold text-ink-900 mb-2">Thank you</h3>
        <p className="text-sm text-ink-400 leading-relaxed max-w-sm">
          This form isn&apos;t connected to a booking system yet. Please call{" "}
          <a href={clinic.phoneHref} className="text-rose-600 font-semibold">{clinic.phone}</a> or
          email{" "}
          <a href={clinic.emailHref} className="text-rose-600 font-semibold">{clinic.email}</a>{" "}
          directly, and mention the details you entered.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink-900 mb-2">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-bloom-border bg-bloom-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400/70 focus:border-rose-400 focus:bg-white outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink-900 mb-2">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border border-bloom-border bg-bloom-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400/70 focus:border-rose-400 focus:bg-white outline-none transition-colors"
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-900 mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-bloom-border bg-bloom-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400/70 focus:border-rose-400 focus:bg-white outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-ink-900 mb-2">Reason for consultation</label>
        <select
          id="reason"
          name="reason"
          required
          defaultValue=""
          className="w-full rounded-xl border border-bloom-border bg-bloom-50 px-4 py-3 text-sm text-ink-900 focus:border-rose-400 focus:bg-white outline-none transition-colors"
        >
          <option value="" disabled>Select a reason</option>
          {reasons.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-ink-900 mb-2">Preferred contact method</legend>
        <div className="flex gap-6">
          {["Phone Call", "WhatsApp", "Email"].map((method, i) => (
            <label key={method} className="flex items-center gap-2 text-sm text-ink-600">
              <input type="radio" name="contactMethod" value={method} defaultChecked={i === 0} className="accent-rose-600" />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-900 mb-2">Message (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-bloom-border bg-bloom-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400/70 focus:border-rose-400 focus:bg-white outline-none transition-colors resize-none"
          placeholder="Anything you'd like Dr. Rai to know beforehand"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-rose-500 hover:shadow-lift transition-all"
      >
        Request Consultation
      </button>
      <p className="text-xs text-ink-400 text-center">
        This form does not submit to a live booking system yet — you&apos;ll see a
        confirmation with direct contact details after submitting.
      </p>
    </form>
  );
}

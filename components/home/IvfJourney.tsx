"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Users,
  ClipboardList,
  Syringe,
  Monitor,
  CircleDot,
  TestTube,
  Flower2,
  HeartPulse,
  Pill,
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Star,
} from "lucide-react";

export function IvfJourney() {
  const steps = [
    {
      number: "01",
      icon: Users,
      title: "Consultation",
      description: "Discussing your history and setting expectations together.",
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Fertility Assessment",
      description: "Investigations for both partners to guide the plan.",
    },
    {
      number: "03",
      icon: Syringe,
      title: "Ovarian Stimulation",
      description: "Medication protocol to support egg development.",
    },
    {
      number: "04",
      icon: Monitor,
      title: "Monitoring",
      description: "Ultrasound and hormone tracking through stimulation.",
    },
    {
      number: "05",
      icon: CircleDot,
      title: "Egg Retrieval",
      description: "A short procedure to collect eggs once ready.",
    },
    {
      number: "06",
      icon: TestTube,
      title: "Fertilisation",
      description: "Eggs and sperm are combined in the lab, including ICSI where needed.",
    },
    {
      number: "07",
      icon: Flower2,
      title: "Embryo Development",
      description: "Embryos are cultured and monitored in the laboratory.",
    },
    {
      number: "08",
      icon: HeartPulse,
      title: "Embryo Transfer",
      description: "The chosen embryo is placed in the uterus.",
    },
    {
      number: "09",
      icon: Pill,
      title: "Pregnancy Test",
      description: "A blood test confirms the outcome of the cycle.",
    },
  ];

  const rowOne = steps.slice(0, 5);
  const rowTwo = steps.slice(5, 9);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-rose-50/20 to-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-50/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Step-by-Step IVF Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-ink-900 leading-[1.15] mb-4">
            Every IVF journey is unique.{' '}
            <span className="block sm:inline font-serif italic bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Here`s what you can expect
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left - Clinic Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[427px] rounded-3xl overflow-hidden shadow-xl shadow-rose-900/10">
              <Image
                src="https://plain-apac-prod-public.komododecks.com/202609/02/5DzFTjp7mgDvRzCy8I5K/image.webp"
                alt="Divine Women & Fertility clinic reception"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/10" />

              {/* Step-by-step badge */}
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full pl-3 pr-4 py-2 shadow-lg">
                  <Sparkles className="h-4 w-4 text-rose-500" />
                  <span className="text-xs font-semibold text-ink-900">Step-by-Step IVF Process</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Steps */}
          <div>
            {/* Row 1 */}
            <div className="relative mb-6">
              <div
                className="hidden sm:block absolute top-6 left-[10%] right-[10%] border-t-2 border-dashed border-rose-200"
                aria-hidden="true"
              />
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {rowOne.map((step) => (
                  <StepCard key={step.number} step={step} />
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative">
              <div
                className="hidden sm:block absolute top-6 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-rose-200"
                aria-hidden="true"
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {rowTwo.map((step) => (
                  <StepCard key={step.number} step={step} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 md:mt-14 rounded-3xl bg-gradient-to-r from-rose-50 via-pink-50/70 to-rose-50 border border-rose-100 px-6 sm:px-8 py-6 flex flex-col md:flex-row items-center gap-6">
          <div className="h-14 w-14 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <ClipboardCheck className="h-6 w-6 text-rose-500" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-ink-600">Ready to take the first step?</p>
            <p className="text-xl sm:text-2xl font-serif italic text-rose-700 mt-0.5">
              Assess your fertility score
            </p>
            <p className="text-xs sm:text-sm text-ink-500 mt-1">
              A quick assessment to help you understand your fertility better.
            </p>
          </div>

          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold shadow-lg shadow-rose-200 hover:shadow-rose-300 transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
          >
            Assess your fertility score
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="hidden md:block w-px h-10 bg-rose-200 flex-shrink-0" />

          <div className="flex items-center gap-2 flex-shrink-0">
            <ShieldCheck className="h-5 w-5 text-rose-400" />
            <span className="text-xs text-ink-500 leading-tight">
              100% Confidential
              <br />
              Your data is safe with us
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
}: {
  step: { number: string; icon: React.ElementType; title: string; description: string };
}) {
  const Icon = step.icon;
  return (
    <div className="relative bg-white rounded-2xl border border-rose-100/60 shadow-sm hover:shadow-lg hover:border-rose-200 transition-all duration-300 hover:-translate-y-1 px-4 pt-4 pb-5 text-center">
      <div className="relative flex justify-center mb-3">
        <span className="h-12 w-12 rounded-2xl bg-rose-50 flex items-center justify-center">
          <Icon className="h-5 w-5 text-rose-500" />
        </span>
        <span className="absolute -top-2 -right-1 h-6 w-6 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm shadow-rose-300 ring-2 ring-white">
          {step.number}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-ink-900 mb-1">{step.title}</h3>
      <p className="text-xs text-ink-500 leading-relaxed">{step.description}</p>
    </div>
  );
}
"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PatientStories } from "@/components/home/PatientStories";
import { Introduction } from "@/components/home/Introduction";
import { DoctorSection } from "@/components/home/DoctorSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { SuccessRate } from "@/components/home/SuccessRate";
import { IvfJourney } from "@/components/home/IvfJourney";
import { FertilityScience } from "@/components/home/FertilityScience";
import { Testimonials } from "@/components/home/Testimonials";
import { ServicePathways } from "@/components/home/ServicePathways";
import { Gallery } from "@/components/home/Gallery";
import { Videos } from "@/components/home/Videos";
import { Blog } from "@/components/home/Blog";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <ScrollAnimation delay={0.1}>
        <TrustStrip />
      </ScrollAnimation>

      <ScrollAnimation delay={0.15}>
        <PatientStories />
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <Introduction />
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <DoctorSection />
      </ScrollAnimation>

      <ScrollAnimation delay={0.15}>
        <WhyChoose />
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <SuccessRate />
      </ScrollAnimation>

      <ScrollAnimation delay={0.15}>
        <IvfJourney />
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <FertilityScience />
      </ScrollAnimation>

      <ScrollAnimation delay={0.15}>
        <Testimonials />
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <ServicePathways />
      </ScrollAnimation>

      <ScrollAnimation delay={0.15}>
        <Gallery />
      </ScrollAnimation>

      <ScrollAnimation delay={0.15}>
        <Videos />
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <Blog />
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <Faq />
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <FinalCta />
      </ScrollAnimation>
    </>
  );
}
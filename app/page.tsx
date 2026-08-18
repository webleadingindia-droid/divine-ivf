import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Introduction } from "@/components/home/Introduction";
import { DoctorSection } from "@/components/home/DoctorSection";
import { CareExplorer } from "@/components/home/CareExplorer";
import { FertilityJourney } from "@/components/home/FertilityJourney";
import { IvfJourney } from "@/components/home/IvfJourney";
import { AdvancedIvf } from "@/components/home/AdvancedIvf";
import { FertilityScience } from "@/components/home/FertilityScience";
import { SuccessRate } from "@/components/home/SuccessRate";
import { PatientReviews } from "@/components/home/PatientReviews";
import { ServicePathways } from "@/components/home/ServicePathways";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Gallery } from "@/components/home/Gallery";
import { Videos } from "@/components/home/Videos";
import { Resources } from "@/components/home/Resources";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Introduction />
      <DoctorSection />
      <WhyChoose />
      <SuccessRate />
      <IvfJourney />
      <FertilityScience />
      <PatientReviews />
      <ServicePathways />
      <Gallery />
      <Videos />
      <Faq />
      <Resources />
      <FinalCta />
    </>
  );
}

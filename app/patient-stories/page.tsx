import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeartHandshake, ArrowRight, Play, Calendar, MapPin, User } from "lucide-react";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";
import { patientdata, getVideoPath, getThumbnailPath } from "@/data/patient-stories-data";
import { PatientVideo } from "@/components/page/PatientVideo";

export const metadata: Metadata = {
  alternates: { canonical: "/patient-stories" },
  title: "Patient Stories | Divine IVF",
  description: "Real patient stories from Divine IVF, Sector 76, Noida. Watch video testimonials from our happy patients.",
};

export default function PatientStoriesPage() {
  // Show ALL videos - no slicing
  const allStories = patientdata;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 py-16 md:py-24 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" }, 
              { label: "Patient Stories" }
            ]} 
          />
          
          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
              <Play className="h-3 w-3 fill-current" />
              <span>Real Stories, Real Hope</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
              Stories of Hope,{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
                Shared with Consent
              </span>
            </h1>
            
            <p className="mt-4 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Watch and read real stories from patients who trusted us with their fertility journey. 
              Every story shared here is with explicit consent from the patients involved.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                  <span className="text-rose-600 text-sm font-bold">{patientdata.length}+</span>
                </span>
                <span className="text-sm text-ink-600">Patient Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                  <span className="text-rose-600 text-sm font-bold">95%</span>
                </span>
                <span className="text-sm text-ink-600">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Stories Grid - ALL VIDEOS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
              All Patient Stories ({allStories.length})
            </h2>
            <p className="text-ink-500 mt-2 max-w-2xl">
              Click on any video to hear directly from our patients about their journey with Divine IVF.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {allStories.map((story) => (
              <div 
                key={story.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-rose-50"
              >
                {/* Video Card */}
                <div className="relative aspect-[9/16] bg-ink-900 overflow-hidden">
                  <PatientVideo 
                    videoId={story.videoId}
                    name={story.name}
                    location={story.location}
                    treatment={story.treatment}
                    thumbnailPath={getThumbnailPath(story.videoId)}
                  />
                </div>

              </div>
            ))}
          </div>

          {/* View All CTA - Now redirects to same page or testimonials */}
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch More Patient Stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Share Stories */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-rose-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
              <HeartHandshake className="h-3 w-3" />
              <span>Why We Share</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
              Every Story is a Gift of Hope
            </h2>
            
            <p className="mt-4 text-ink-500 leading-relaxed">
              We share these stories with the explicit consent of our patients 
              to inspire others on their fertility journey. Each story is a 
              testament to the power of hope, expert care, and unwavering support.
            </p>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
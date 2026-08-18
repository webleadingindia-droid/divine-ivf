import { PageHero } from "@/components/page/PageHero";
import { ContentSection } from "@/components/page/ContentSection";
import { StepList } from "@/components/page/StepList";
import { TwoColumnList } from "@/components/page/TwoColumnList";
import { RelatedTreatments } from "@/components/page/RelatedTreatments";
import { PageFaq } from "@/components/page/PageFaq";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";
import type { Crumb } from "@/components/page/Breadcrumb";

type Step = { title: string; description: string };
type Faq = { question: string; answer: string };
type Related = { name: string; href: string; blurb: string };

export type TreatmentData = {
  crumbs: Crumb[];
  eyebrow: string;
  titlePlain: string;
  titleAccent: string; // rendered in italic rose serif
  intro: string;
  heroImage: string;
  heroAlt: string;
  whatItIs: string[];
  whoNeedsIt: string[];
  preparation?: string[]; // optional — rendered between whoNeedsIt and howItWorks
  howItWorks: Step[];
  whatToExpect: string;
  benefits: string[];
  considerations: string[];
  related: Related[];
  faqs: Faq[];
};

// Shared archetype for straightforward procedure/therapy pages — used for
// the remaining treatment pages so each stays consistent without being
// hand-built from scratch. Journey-, embryology- and editorial-style pages
// (IVF, ICSI, Gynecology) keep their own bespoke layouts.
export function TreatmentTemplate(data: TreatmentData) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        crumbs={data.crumbs}
        eyebrow={data.eyebrow}
        title={
          <>
            {data.titlePlain} <span className="font-serif italic text-rose-600">{data.titleAccent}</span>
          </>
        }
        intro={data.intro}
        image={data.heroImage}
        imageAlt={data.heroAlt}
      />

      <ContentSection title="What it is">
        {data.whatItIs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </ContentSection>

      <ContentSection title="Who may need it" tone="blush">
        <ul className="list-disc pl-5 space-y-2">
          {data.whoNeedsIt.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ContentSection>

      {data.preparation && data.preparation.length > 0 && (
        <ContentSection title="Preparing for it">
          {data.preparation.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </ContentSection>
      )}

      <StepList steps={data.howItWorks} tone="pink" />

      <ContentSection title="What to expect">
        <p>{data.whatToExpect}</p>
      </ContentSection>

      <TwoColumnList benefits={data.benefits} considerations={data.considerations} />

      <RelatedTreatments items={data.related} />

      <PageFaq items={data.faqs} />

      <ConsultationBanner />
    </>
  );
}

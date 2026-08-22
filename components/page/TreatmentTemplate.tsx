// components/page/TreatmentTemplate.tsx
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Check,
  Info,
  Sparkles,
  Phone,
  ArrowRight,
  Users,
  Stethoscope,
  Calendar,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { clinic } from "@/data/clinic";
import { FAQAccordion } from "@/components/page/FAQAccordion";

const SITE_URL = "https://www.divineivf.com";

type Crumb = { label: string; href?: string };
type ProcessStep = { title: string; description: string };
type RelatedService = { name: string; href: string; blurb: string };
type FAQ = { question: string; answer: string };
type ExternalResource = { label: string; source: string; href: string };

type TreatmentTemplateProps = {
  crumbs: Crumb[];
  eyebrow: string;
  titlePlain: string;
  titleAccent: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  whatItIs: string[];
  whoNeedsIt: string[];
  preparation: string[];
  howItWorks: ProcessStep[];
  whatToExpect: string;
  benefits: string[];
  considerations: string[];
  related: RelatedService[];
  faqs: FAQ[];
  externalResources?: ExternalResource[];
  children?: React.ReactNode;
};

export function TreatmentTemplate({
  crumbs,
  eyebrow,
  titlePlain,
  titleAccent,
  intro,
  heroImage,
  heroAlt,
  secondaryImage,
  secondaryImageAlt,
  whatItIs,
  whoNeedsIt,
  preparation,
  howItWorks,
  whatToExpect,
  benefits,
  considerations,
  related,
  faqs,
  externalResources = [],
  children,
}: TreatmentTemplateProps) {
  const pageTitle = `${titlePlain} ${titleAccent}`;
  const canonicalPath = crumbs[crumbs.length - 1]?.href ?? "";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };

  const medicalPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: pageTitle,
    description: intro,
    url: `${SITE_URL}${canonicalPath}`,
    lastReviewed: new Date().toISOString().split("T")[0],
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Mandavi Rai",
      url: `${SITE_URL}/doctor/dr-mandavi-rai`,
    },
    about: {
      "@type": "MedicalProcedure",
      name: pageTitle,
    },
  };

  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalPageSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-rose-100/60 bg-white">
        <div className="container-page py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-400">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 text-rose-300" />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-rose-600 transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink-600 font-medium">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-white py-14 md:py-20 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[480px] h-[480px] bg-rose-50 rounded-full blur-3xl opacity-70" />

        <div className="container-page relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200/60 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span className="text-[11px] font-semibold text-rose-600 tracking-wider uppercase">
                  {eyebrow}
                </span>
              </div>

              <h1 className="text-3xl md:text-[2.75rem] leading-[1.12] font-bold text-ink-900 mb-5">
                {titlePlain}{" "}
                <span className="font-serif italic text-transparent bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text">
                  {titleAccent}
                </span>
              </h1>

              <p className="text-base text-ink-500 leading-relaxed max-w-xl mb-8">{intro}</p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <Sparkles className="h-4 w-4" />
                  Book Consultation
                </Link>
                <a
                  href={clinic.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-rose-200 text-rose-700 font-semibold text-sm hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  Call {clinic.phone}
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src={heroImage}
                alt={heroAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 8:4 Grid */}
      <div className="container-page grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 py-14 md:py-20">
        {/* Left Column - 8/12 (2fr) */}
        <div className="space-y-14">
          {/* What it is */}
          <section>
            <h2 className="text-2xl md:text-3xl text-ink-900 mb-5">
              What is {titlePlain.replace(/:$/, "")}?
            </h2>
            <div className="space-y-4">
              {whatItIs.map((p, i) => (
                <p
                  key={i}
                  className="text-ink-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
          </section>

          {/* How it works */}
          <section>
            <h2 className="text-2xl md:text-3xl text-ink-900 mb-6">How it works</h2>
            <div>
              {howItWorks.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white text-xs font-mono font-semibold flex items-center justify-center shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {i < howItWorks.length - 1 && <div className="w-px flex-1 bg-rose-100 my-1" />}
                  </div>
                  <div className="pb-7 -mt-0.5">
                    <p className="text-sm font-semibold text-ink-900 mb-1">{step.title}</p>
                    <p
                      className="text-sm text-ink-500 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits vs considerations */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-rose-100 p-6">
              <h3 className="text-sm font-semibold text-ink-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-rose-600" />
                </span>
                Benefits
              </h3>
              <ul className="space-y-2.5">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-ink-600"
                    dangerouslySetInnerHTML={{ __html: b }}
                  />
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-rose-100 p-6">
              <h3 className="text-sm font-semibold text-ink-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-ink-50 flex items-center justify-center">
                  <Info className="h-3.5 w-3.5 text-ink-500" />
                </span>
                Things to know
              </h3>
              <ul className="space-y-2.5">
                {considerations.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-ink-600"
                    dangerouslySetInnerHTML={{ __html: c }}
                  />
                ))}
              </ul>
            </div>
          </section>

          {/* Preparation */}
          <section>
            <h2 className="text-2xl md:text-3xl text-ink-900 mb-5">Getting ready</h2>
            <div className="space-y-4">
              {preparation.map((p, i) => (
                <p
                  key={i}
                  className="text-ink-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
          </section>

          {/* What to expect */}
          <section className="relative bg-white rounded-2xl border border-rose-100 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-rose-400 to-pink-500" />
            <div className="pl-7 pr-6 py-6">
              <h3 className="text-sm font-semibold text-ink-900 mb-2">What to expect</h3>
              <p className="text-sm text-ink-600 leading-relaxed">{whatToExpect}</p>
            </div>
          </section>

          {/* Children content */}
          {children && (
            <section className="space-y-4">
              <div className="prose prose-rose max-w-none text-ink-500 leading-relaxed">
                {children}
              </div>
            </section>
          )}

          {/* External Resources */}
          {externalResources.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl text-ink-900 mb-5">Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {externalResources.map((resource) => (
                  <a
                    key={resource.href}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-xl p-4 border border-rose-100/50 hover:border-rose-200 hover:shadow-md transition-all duration-300"
                  >
                    <p className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors">
                      {resource.label}
                    </p>
                    <p className="text-xs text-ink-400 mt-0.5">{resource.source}</p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          {faqs.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl text-ink-900 mb-6">Common questions</h2>
              <FAQAccordion faqs={faqs} />
            </section>
          )}
        </div>

        {/* Right Column - 4/12 (1fr) */}
        <aside className="space-y-6">
          {/* Quick Contact Card */}
          <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl p-6 text-white shadow-lg shadow-rose-500/20 sticky top-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Quick Contact</h3>
                <p className="text-xs text-rose-100">Book your consultation</p>
              </div>
            </div>

            <Link
              href="/consultation"
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-full bg-white text-rose-600 font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>

            <a
              href={clinic.phoneHref}
              className="flex items-center justify-center gap-2 w-full mt-3 px-4 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
            >
              <Phone className="h-3.5 w-3.5" />
              Call {clinic.phone}
            </a>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center gap-2 text-xs text-rose-100">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>Sector 76, Noida</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-rose-100 mt-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Who This Is For - Redesigned */}
          <div className="bg-white rounded-2xl p-6 border border-rose-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                <Users className="h-4 w-4 text-rose-600" />
              </div>
              <h3 className="text-sm font-semibold text-ink-900">Who should consider this?</h3>
            </div>
            <div className="space-y-3">
              {whoNeedsIt.slice(0, 4).map((w, index) => (
                <div
                  key={w}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-rose-50/50 to-pink-50/30 hover:from-rose-100/50 hover:to-pink-100/30 transition-all duration-300 group cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-rose-200/50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose-300/50 transition-colors">
                    <span className="text-[10px] font-bold text-rose-700">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p
                    className="text-sm text-ink-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: w }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Related Services */}
          {related.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-rose-100">
              <h3 className="text-sm font-semibold text-ink-900 mb-4 flex items-center gap-2">
                <Star className="h-4 w-4 text-rose-600" />
                Related Services
              </h3>
              <div className="space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group block rounded-xl px-3.5 py-3 hover:bg-rose-50/60 transition-colors border border-transparent hover:border-rose-100"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-ink-900 group-hover:text-rose-600 transition-colors">
                        {r.name}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-rose-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-ink-400 mt-0.5">{r.blurb}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Trust Badge */}
          <div className="bg-white rounded-2xl p-5 border border-rose-100 text-center">
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">15+</div>
                <div className="text-[10px] text-ink-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="w-px bg-rose-100" />
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">5000+</div>
                <div className="text-[10px] text-ink-400 uppercase tracking-wider">Happy Families</div>
              </div>
              <div className="w-px bg-rose-100" />
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">98%</div>
                <div className="text-[10px] text-ink-400 uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Consultation banner */}
      <section className="relative bg-gradient-to-r from-rose-600 to-pink-600 py-14 md:py-18 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container-page relative text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to talk to <span className="font-serif italic text-rose-200">Dr. Mandavi Rai</span>?
          </h2>
          <p className="text-rose-100 mb-7 max-w-xl mx-auto text-sm">
            Bring your questions, your history, and your pace — we'll build the next step together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-600 font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <Sparkles className="h-4 w-4" />
              Book Consultation
            </Link>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              Call {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
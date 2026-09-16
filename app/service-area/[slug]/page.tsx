import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";
import {
  MapPin,
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  Heart,
  Phone,
  Mail,
  MessageCircle,
  Stethoscope,
  Syringe,
  Pill,
  Baby,
  Calendar as CalendarIcon,
  Shield,
  Award,
  ChevronRight,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

type Params = { slug: string };

// ============ SITE CONFIG ============
// NOTE: update these to match your real domain / clinic details.
// They're used to fill the JSON-LD + microdata below.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.divineivf.com";
const CLINIC_PHONE = "+91-7678451808";
const CLINIC_LOGO = `${SITE_URL}/logo.png`;
const CLINIC_GEO = { latitude: "28.6139", longitude: "77.2090" }; // Delhi/NCR default

// ============ TYPES ============
interface InternalPage {
  id: number;
  title: string;
  slug: string;
  image: string;
  short_description: string | null;
}

interface SingleInternalPage {
  id: number;
  title: string;
  slug: string;
  image: string;
  short_description: string | null;
  description: string[] | string;
  location: string;
  title_meta_keyword: string;
  title_specialities: string;
  meta_tags: string | null;
  script_schema: string | null;
  created_at: string;
}

interface SingleInternalPageResponse {
  status: boolean;
  message: string;
  data: SingleInternalPage;
}

interface InternalPagesResponse {
  status: boolean;
  message: string;
  data: InternalPage[];
  pagination?: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

/**
 * fetch with a couple of retries + a short backoff.
 *
 * Why this matters: on Vercel, the very first request to a
 * /service-area/[slug] page that wasn't pre-rendered at build time
 * (e.g. because generateStaticParams didn't cover every page, or a
 * new page was added after the last build) gets rendered on-demand.
 * If that single fetch to the API has a transient hiccup — a cold
 * start, a slow response, a momentary network blip — the page falls
 * straight through to notFound(), and Next then caches that 404 for
 * `revalidate` seconds. That's exactly why a reload "fixes" it: the
 * next request just happens to succeed. Retrying a couple of times
 * before giving up removes almost all of that flakiness.
 */
async function fetchWithRetry(
  url: string,
  init: RequestInit & { next?: { revalidate?: number } },
  retries = 2,
  delayMs = 400
): Promise<Response | null> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, init);
      // Only retry on server-side failures — a genuine 404 from the
      // API shouldn't be retried, it just means the slug doesn't exist.
      if (res.ok || res.status < 500 || attempt === retries) return res;
    } catch (error) {
      if (attempt === retries) {
        console.error(`fetchWithRetry failed for ${url}:`, error);
        return null;
      }
    }
    await new Promise((resolve) =>
      setTimeout(resolve, delayMs * (attempt + 1))
    );
  }
  return null;
}

// ============ HELPERS ============
function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

function calculateReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function getDescriptionHtml(description: string[] | string): string {
  if (Array.isArray(description)) return description.join("");
  return description || "";
}

/** Resolve the keyword/location pair used across meta, schema & microdata */
function getSeoTerms(post: SingleInternalPage) {
  const keyword = post.title_meta_keyword || post.title;
  const location = post.location;
  const canonicalPath = `/service-area/${post.slug}`;
  return { keyword, location, canonicalPath };
}

/** Builds the three JSON-LD schemas (MedicalClinic, FAQPage, BreadcrumbList) for a page */
function buildSchemas(post: SingleInternalPage) {
  const { keyword, location, canonicalPath } = getSeoTerms(post);
  const pageUrl = `${SITE_URL}${canonicalPath}`;

  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${keyword} IVF & Fertility Clinic in ${location}`,
    url: pageUrl,
    logo: CLINIC_LOGO,
    image: post.image,
    description: `IVF and fertility care in ${location} with personalized fertility evaluation, assisted reproductive treatment and reproductive healthcare services.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_GEO.latitude,
      longitude: CLINIC_GEO.longitude,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CLINIC_PHONE,
      contactType: "customer service",
    },
    medicalSpecialty: "Reproductive Endocrinology",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IVF & Fertility Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: keyword,
            description:
              "Fertility evaluation and personalized reproductive healthcare based on individual clinical needs.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${keyword} in ${location}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${keyword} refers to fertility or reproductive healthcare available in ${location}. The appropriate treatment depends on factors such as age, medical history, fertility evaluation and the underlying cause of infertility.`,
        },
      },
      {
        "@type": "Question",
        name: `Who may need fertility treatment in ${location}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Individuals or couples experiencing difficulty conceiving may benefit from a fertility evaluation. A fertility specialist can recommend appropriate investigations and treatment options based on individual circumstances.",
        },
      },
      {
        "@type": "Question",
        name: `How much does ${keyword} cost in ${location}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost varies depending on the treatment plan, investigations, medicines, procedures and individual clinical requirements. A consultation can help determine the appropriate treatment and associated costs.",
        },
      },
      {
        "@type": "Question",
        name: `How can I book a fertility consultation in ${location}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact the fertility clinic to schedule a consultation. The specialist can review your medical history, discuss your fertility concerns and recommend the next appropriate steps.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Area",
        item: `${SITE_URL}/service-area`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${keyword} in ${location}`,
        item: pageUrl,
      },
    ],
  };

  return { medicalClinicSchema, faqSchema, breadcrumbSchema };
}

// ============ STATIC PARAMS ============
// Pre-renders every /service-area/[slug] page at build time.
// IMPORTANT: this must fetch every page via pagination (per_page=1000,
// looping through last_page) — without it, the API's default page size
// silently returns only a fraction of all slugs, and every page outside
// that list has to be rendered on-demand on its first real visit
// instead of being served instantly from the pre-built cache.
export async function generateStaticParams() {
  try {
    let allPages: InternalPage[] = [];

    const firstRes = await fetchWithRetry(
      "https://ivfapi.webleadingindia.com/api/internal-pages?page=1&per_page=1000",
      { next: { revalidate: 3600 } }
    );
    if (!firstRes || !firstRes.ok) return [];

    const firstJson: InternalPagesResponse = await firstRes.json();
    allPages = firstJson.data || [];

    const lastPage = firstJson.pagination?.last_page || 1;
    if (lastPage > 1) {
      const requests = [];
      for (let p = 2; p <= lastPage; p++) {
        requests.push(
          fetchWithRetry(
            `https://ivfapi.webleadingindia.com/api/internal-pages?page=${p}&per_page=1000`,
            { next: { revalidate: 3600 } }
          ).then((r) => (r && r.ok ? r.json() : null))
        );
      }
      const results = await Promise.all(requests);
      for (const r of results) {
        if (r && r.data) allPages = allPages.concat(r.data);
      }
    }

    return allPages.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error("Error in generateStaticParams for service-area:", error);
    return [];
  }
}

// Pages not covered by generateStaticParams (e.g. added after the last
// build) are still rendered on-demand and cached — they just aren't
// pre-built. Keeping this explicit documents that intent.
export const dynamicParams = true;

// ============ METADATA ============
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  try {
    const res = await fetchWithRetry(
      `https://ivfapi.webleadingindia.com/api/internal-pages/${params.slug}`,
      { next: { revalidate: 60 } }
    );
    if (!res || !res.ok) return {};

    const json: SingleInternalPageResponse = await res.json();
    const post = json.data;
    if (!post) return {};

    const { keyword, location, canonicalPath } = getSeoTerms(post);
    const pageTitle = `${keyword} in ${location} | IVF & Fertility Clinic`;
    const pageDescription =
      post.short_description ||
      `Looking for ${keyword} in ${location}? Explore personalized fertility care, IVF treatment, fertility evaluation and reproductive health services from experienced fertility specialists. Book a consultation.`;

    return {
      title: pageTitle,
      description: pageDescription,
      keywords: [
        `${keyword} in ${location}`,
        `IVF clinic in ${location}`,
        `fertility clinic in ${location}`,
        `fertility specialist ${location}`,
        `IVF treatment ${location}`,
        "infertility treatment",
        "fertility treatment",
        "IVF specialist",
        "reproductive medicine",
        "fertility doctor",
      ],
      authors: [{ name: `${location} IVF & Fertility Clinic` }],
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      },
      alternates: { canonical: canonicalPath },
      openGraph: {
        type: "website",
        title: pageTitle,
        description: `Personalized fertility care, IVF treatment and reproductive health services in ${location}. Consult experienced fertility specialists and explore treatment options based on your individual needs.`,
        url: canonicalPath,
        siteName: `${location} IVF & Fertility Clinic`,
        images: [post.image],
      },
      twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: `Explore personalized ${keyword} and fertility care in ${location} with experienced fertility specialists and modern reproductive healthcare services.`,
        images: [post.image],
      },
      // Geo tags — Next's Metadata type has no first-class field for these,
      // so they go through `other` and render as plain <meta> tags in <head>.
      other: {
        "geo.region": "IN",
        "geo.placename": location,
        "geo.position": `${CLINIC_GEO.latitude};${CLINIC_GEO.longitude}`,
        ICBM: `${CLINIC_GEO.latitude}, ${CLINIC_GEO.longitude}`,
      },
    };
  } catch {
    return {};
  }
}

export const revalidate = 60;

// ============ MAIN PAGE ============
export default async function ServiceAreaDetailPage({
  params,
}: {
  params: Params;
}) {
  let post: SingleInternalPage | null = null;
  try {
    const res = await fetchWithRetry(
      `https://ivfapi.webleadingindia.com/api/internal-pages/${params.slug}`,
      { next: { revalidate: 60 } }
    );
    if (res && res.ok) {
      const json: SingleInternalPageResponse = await res.json();
      post = json.data;
    }
  } catch (error) {
    console.error("Error fetching service area:", error);
  }

  if (!post) notFound();

  // Related pages
  let allPages: InternalPage[] = [];
  try {
    const res = await fetchWithRetry(
      "https://ivfapi.webleadingindia.com/api/internal-pages?per_page=1000",
      { next: { revalidate: 60 } }
    );
    if (res && res.ok) {
      const json: InternalPagesResponse = await res.json();
      allPages = json.data || [];
    }
  } catch (error) {
    console.error("Error fetching related pages:", error);
  }

  const relatedPages = allPages
    .filter(
      (p) =>
        p.slug !== post!.slug &&
        p.title.toLowerCase().includes(post!.location.toLowerCase())
    )
    .slice(0, 3);

  const descriptionHtml = getDescriptionHtml(post.description);
  const readTime = calculateReadTime(descriptionHtml);
  const { keyword: seoKeyword, location: seoLocation } = getSeoTerms(post);
  const { medicalClinicSchema, faqSchema, breadcrumbSchema } =
    buildSchemas(post);

  const services = [
    { name: "IVF Treatment", icon: Syringe, href: "/services/ivf", color: "rose" },
    { name: "IUI Treatment", icon: Stethoscope, href: "/services/iui", color: "pink" },
    { name: "ICSI Treatment", icon: Baby, href: "/services/icsi", color: "purple" },
    { name: "Egg Donation", icon: Pill, href: "/services/egg-donation", color: "rose" },
    { name: "Fertility Evaluation", icon: CalendarIcon, href: "/services/fertility-evaluation", color: "pink" },
    { name: "Pregnancy Care", icon: Shield, href: "/services/pregnancy-care", color: "purple" },
  ];

  return (
    <>
      {/* ============ STRUCTURED DATA (JSON-LD) ============
          MedicalClinic + FAQPage + BreadcrumbList, built dynamically
          from this page's title_meta_keyword / location / slug.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalClinicSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ============ MICRODATA (itemscope) — for AI/SEO parsers ============
          Mirrors the visible content below in schema.org microdata form.
          Visually hidden (sr-only) since the same info is already shown
          on the page; meta[itemprop] is valid microdata content anywhere,
          not just <head>.
      */}
      <div
        itemScope
        itemType="https://schema.org/MedicalClinic"
        className="sr-only"
        aria-hidden="true"
      >
        <meta
          itemProp="name"
          content={`${seoKeyword} IVF & Fertility Clinic in ${seoLocation}`}
        />
        <meta
          itemProp="description"
          content={`IVF and fertility care in ${seoLocation} including fertility evaluation, assisted reproductive treatment and personalized reproductive healthcare.`}
        />
        <meta itemProp="telephone" content={CLINIC_PHONE} />
        <meta itemProp="image" content={post.image} />

        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <meta itemProp="addressLocality" content={seoLocation} />
          <meta itemProp="addressCountry" content="IN" />
        </div>

        <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
          <meta itemProp="latitude" content={CLINIC_GEO.latitude} />
          <meta itemProp="longitude" content={CLINIC_GEO.longitude} />
        </div>

        <div
          itemProp="openingHoursSpecification"
          itemScope
          itemType="https://schema.org/OpeningHoursSpecification"
        >
          <meta
            itemProp="dayOfWeek"
            content="Monday Tuesday Wednesday Thursday Friday Saturday"
          />
          <meta itemProp="opens" content="09:00" />
          <meta itemProp="closes" content="19:00" />
        </div>

        <meta itemProp="medicalSpecialty" content="Reproductive Endocrinology" />

        <div
          itemProp="availableService"
          itemScope
          itemType="https://schema.org/MedicalProcedure"
        >
          <meta itemProp="name" content={seoKeyword} />
          <meta
            itemProp="description"
            content="Personalized fertility and reproductive healthcare services for individuals and couples seeking fertility evaluation and treatment."
          />
        </div>
      </div>

      {/* ============================================================
          CUSTOM CSS FOR DYNAMIC HTML CONTENT
          API se jo raw HTML aata hai usko yahan design kiya gaya hai
      ============================================================ */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* ---------- Base Content Wrapper ---------- */
            .service-content {
              color: #4b5563;
              line-height: 1.75;
              font-size: 1rem;
              word-wrap: break-word;
            }

            /* ---------- H1 (hide first, since page already has H1) ---------- */
            .service-content h1 {
              font-size: 1.75rem;
              font-weight: 700;
              color: #111827;
              margin: 2rem 0 1rem;
              line-height: 1.3;
            }

            /* ---------- H2 - Section Headings with Rose Accent ---------- */
            .service-content h2 {
              position: relative;
              font-size: 1.5rem;
              font-weight: 700;
              color: #111827;
              margin: 2.5rem 0 1.25rem;
              line-height: 1.35;
              padding: 0.75rem 1rem 0.75rem 1.25rem;
              background: linear-gradient(90deg, #fff1f2 0%, #fdf2f8 50%, transparent 100%);
              border-left: 5px solid #f43f5e;
              border-radius: 0 12px 12px 0;
            }
            .service-content h2 span {
              color: #e11d48;
              font-weight: 800;
            }

            /* ---------- H3 - Sub Headings ---------- */
            .service-content h3 {
              font-size: 1.2rem;
              font-weight: 600;
              color: #1f2937;
              margin: 1.75rem 0 0.75rem;
              line-height: 1.4;
            }

            /* H3 with quotes = testimonial style */
            .service-content h3:first-letter:is(“) {
              color: #be123c;
            }

            /* ---------- Paragraphs ---------- */
            .service-content p {
              margin: 1rem 0;
              color: #4b5563;
              line-height: 1.75;
            }

            /* First paragraph after H1 = Lead style */
            .service-content > p:first-of-type,
            .service-content > main > p:first-of-type {
              font-size: 1.1rem;
              color: #374151;
              font-weight: 500;
              line-height: 1.7;
              padding: 1.25rem 1.5rem;
              background: linear-gradient(135deg, #fff1f2 0%, #fdf2f8 100%);
              border-radius: 14px;
              border-left: 5px solid #f43f5e;
              box-shadow: 0 2px 12px rgba(244, 63, 94, 0.06);
            }

            /* Strong = dark bold */
            .service-content strong {
              color: #111827;
              font-weight: 700;
            }

            /* itemprop spans (SEO keywords) - auto highlight */
            .service-content span[itemprop] {
              color: #e11d48;
              font-weight: 700;
            }

            /* Arrow paragraphs (👉 ...) */
            .service-content p:has(👉) {
              background: linear-gradient(135deg, #fff1f2 0%, #fdf2f8 100%);
              border: 2px dashed #fda4af;
              border-radius: 14px;
              padding: 1rem 1.25rem;
              color: #be123c;
              font-weight: 600;
              text-align: center;
              margin: 1.5rem 0;
            }

            /* Checkmark paragraphs (✔ ...) */
            .service-content p:has(✔) {
              background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
              border-left: 5px solid #10b981;
              border-radius: 0 14px 14px 0;
              padding: 0.875rem 1.25rem;
              color: #065f46;
              font-weight: 500;
              margin: 0.75rem 0;
            }

            /* ---------- Lists (UL) ---------- */
            .service-content ul {
              margin: 1.25rem 0;
              padding-left: 0;
              list-style: none;
            }

            .service-content ul li {
              position: relative;
              padding: 0.75rem 1rem 0.75rem 2.75rem;
              margin-bottom: 0.5rem;
              background: linear-gradient(135deg, #fff1f2 0%, #fdf2f8 100%);
              border-radius: 12px;
              border: 1px solid #fecdd3;
              color: #374151;
              font-size: 0.95rem;
              line-height: 1.6;
              transition: all 0.2s ease;
            }

            .service-content ul li:hover {
              transform: translateX(4px);
              border-color: #fda4af;
              box-shadow: 0 4px 12px rgba(244, 63, 94, 0.1);
            }

            .service-content ul li::before {
              content: "✓";
              position: absolute;
              left: 0.75rem;
              top: 50%;
              transform: translateY(-50%);
              width: 1.5rem;
              height: 1.5rem;
              background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.75rem;
              font-weight: 700;
              box-shadow: 0 2px 6px rgba(244, 63, 94, 0.3);
            }

            /* ---------- Lists (OL) with counter ---------- */
            .service-content ol {
              margin: 1.25rem 0;
              padding-left: 0;
              list-style: none;
              counter-reset: step-counter;
            }

            .service-content ol li {
              position: relative;
              counter-increment: step-counter;
              padding: 0.9rem 1rem 0.9rem 3.25rem;
              margin-bottom: 0.6rem;
              background: linear-gradient(135deg, #fff1f2 0%, #fdf2f8 100%);
              border-radius: 12px;
              border: 1px solid #fecdd3;
              color: #374151;
              font-size: 0.95rem;
              line-height: 1.6;
              transition: all 0.2s ease;
            }

            .service-content ol li:hover {
              transform: translateX(4px);
              border-color: #fda4af;
              box-shadow: 0 4px 12px rgba(244, 63, 94, 0.1);
            }

            .service-content ol li::before {
              content: counter(step-counter);
              position: absolute;
              left: 0.75rem;
              top: 50%;
              transform: translateY(-50%);
              width: 1.75rem;
              height: 1.75rem;
              background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.85rem;
              font-weight: 700;
              box-shadow: 0 2px 8px rgba(244, 63, 94, 0.35);
            }

            /* ---------- Horizontal Rule (Divider) ---------- */
            .service-content hr {
              border: none;
              height: 1px;
              background: linear-gradient(90deg, transparent 0%, #fecdd3 50%, transparent 100%);
              margin: 2.5rem 0;
            }

            /* ---------- Blockquote ---------- */
            .service-content blockquote {
              margin: 1.5rem 0;
              padding: 1.25rem 1.5rem;
              border-left: 5px solid #f43f5e;
              background: linear-gradient(135deg, #fff1f2 0%, #fdf2f8 100%);
              border-radius: 0 14px 14px 0;
              font-style: italic;
              color: #831843;
              font-size: 1.05rem;
              box-shadow: 0 2px 12px rgba(244, 63, 94, 0.06);
            }

            /* ---------- Links ---------- */
            .service-content a {
              color: #e11d48;
              text-decoration: underline;
              text-decoration-color: #fda4af;
              text-underline-offset: 3px;
              transition: all 0.2s;
              font-weight: 500;
            }

            .service-content a:hover {
              color: #be123c;
              text-decoration-color: #f43f5e;
            }

            /* ---------- Images ---------- */
            .service-content img {
              border-radius: 14px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
              margin: 1.5rem 0;
              max-width: 100%;
              height: auto;
            }

            /* ---------- Tables ---------- */
            .service-content table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0;
              margin: 1.5rem 0;
              border-radius: 14px;
              overflow: hidden;
              box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
            }

            .service-content th {
              background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
              color: white;
              padding: 0.875rem 1rem;
              text-align: left;
              font-weight: 600;
            }

            .service-content td {
              padding: 0.875rem 1rem;
              border-bottom: 1px solid #fecdd3;
              background: white;
            }

            .service-content tr:last-child td {
              border-bottom: none;
            }

            /* ---------- Highlight Box (API ka custom class) ---------- */
            .service-content .highlight-box {
              background: linear-gradient(135deg, #fff1f2 0%, #fdf2f8 100%);
              border-left: 5px solid #f43f5e;
              border-radius: 0 14px 14px 0;
              padding: 1.25rem 1.5rem;
              margin: 1.5rem 0;
              box-shadow: 0 2px 12px rgba(244, 63, 94, 0.08);
            }

            .service-content .highlight-box h4 {
              color: #be123c;
              font-weight: 700;
              font-size: 1.05rem;
              margin: 0 0 0.5rem;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            }

            .service-content .highlight-box p {
              margin: 0;
              color: #4b5563;
              font-size: 0.95rem;
            }

            /* ---------- Main wrapper reset ---------- */
            .service-content main {
              display: block;
            }

            /* ---------- FAQ Questions (Q.) ---------- */
            .service-content p:has(strong:first-child) {
              margin-top: 1.25rem;
            }

            /* ---------- Mobile Responsive ---------- */
            @media (max-width: 768px) {
              .service-content h2 {
                font-size: 1.25rem;
                padding: 0.625rem 0.875rem;
              }
              .service-content h3 {
                font-size: 1.05rem;
              }
              .service-content > p:first-of-type {
                font-size: 1rem;
                padding: 1rem 1.125rem;
              }
              .service-content ul li,
              .service-content ol li {
                font-size: 0.9rem;
                padding-left: 2.5rem;
              }
            }
          `,
        }}
      />

      {/* ============ HERO SECTION ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 py-12 md:py-16 border-b border-rose-100">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Service Area", href: "/service-area" },
              { label: post.title },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                <MapPin className="h-3 w-3" />
                {post.location}
              </span>
              {post.title_meta_keyword && (
                <span className="text-xs font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full capitalize">
                  {post.title_meta_keyword}
                </span>
              )}
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 leading-tight capitalize">
              {post.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-ink-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.created_at)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* ---------- LEFT: CONTENT ---------- */}
            <div className="flex-1 min-w-0">
              {/* Featured Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                />
              </div>

              {/* Share Bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-100">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full hover:bg-rose-50 transition-colors text-ink-400 hover:text-rose-600">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-rose-50 transition-colors text-ink-400 hover:text-rose-600">
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-rose-50 transition-colors text-ink-400 hover:text-rose-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                <span className="text-xs text-ink-400">{readTime}</span>
              </div>

              {/* ===== DYNAMIC HTML CONTENT (Beautifully Styled) ===== */}
              <article
                className="service-content"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />

              {/* Quick Action CTA */}
              <div className="mt-10 p-6 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl text-white shadow-xl shadow-rose-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Ready to Book Your Consultation?
                    </h3>
                    <p className="text-white/90 text-sm">
                      Get expert care in {post.location} today
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <a
                      href="tel:+917678451808"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-rose-600 text-sm font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                    <Link
                      href="/book-appointment"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold rounded-xl hover:bg-white/30 transition-all"
                    >
                      Book
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 pt-6 border-t border-rose-100 flex flex-wrap justify-between gap-4">
                <Link
                  href="/service-area"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-ink-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Service Areas
                </Link>
                <Link
                  href="/service-area"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                >
                  All Locations
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Related */}
              {relatedPages.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-ink-900 mb-6">
                    More Services in {post.location}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPages.map((related) => (
                      <Link
                        key={related.id}
                        href={`/service-area/${related.slug}`}
                        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-rose-50"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-[10px] font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                            <MapPin className="h-2.5 w-2.5" />
                            {post.location}
                          </span>
                          <h4 className="font-semibold text-ink-900 group-hover:text-rose-600 transition-colors mt-1 text-sm line-clamp-2 capitalize">
                            {related.title}
                          </h4>
                          <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-rose-600 group-hover:gap-2 transition-all">
                            Read More
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ---------- RIGHT: SIDEBAR ---------- */}
            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0 space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl shadow-rose-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Need Help in {post.location}?
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Connect with us instantly. We&apos;re here to help you.
                </p>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/917678451808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all rounded-xl px-4 py-3 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">WhatsApp</p>
                      <p className="text-xs text-white/70">Chat with us</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="tel:+917678451808"
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all rounded-xl px-4 py-3 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Call Us</p>
                      <p className="text-xs text-white/70">+91 7678451808</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="mailto:divineivf003@gmail.com"
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all rounded-xl px-4 py-3 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Email Us</p>
                      <p className="text-xs text-white/70">
                        divineivf003@gmail.com
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Book Consultation */}
              <div className="bg-white rounded-2xl p-6 border border-rose-100 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-ink-900">Book Consultation</h3>
                </div>
                <p className="text-sm text-ink-500 mb-4">
                  Schedule a consultation at {post.location}.
                </p>
                <Link
                  href="/book-appointment"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Services */}
              <div className="bg-white rounded-2xl p-6 border border-rose-100 shadow-md">
                <h3 className="font-bold text-ink-900 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-rose-500" />
                  Our Services
                </h3>
                <div className="space-y-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const colorClasses = {
                      rose: "bg-rose-50 text-rose-600 hover:bg-rose-100",
                      pink: "bg-pink-50 text-pink-600 hover:bg-pink-100",
                      purple: "bg-purple-50 text-purple-600 hover:bg-purple-100",
                    };
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                          colorClasses[
                            service.color as keyof typeof colorClasses
                          ]
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-medium flex-1">
                          {service.name}
                        </span>
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Why Choose */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                <h3 className="font-bold text-ink-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-rose-500" />
                  Why Divine IVF?
                </h3>
                <ul className="space-y-2 text-sm text-ink-600">
                  {[
                    "95% success rate",
                    "Advanced technology",
                    "Personalized care",
                    "Experienced team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
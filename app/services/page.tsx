import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";
import { 
  Baby, Syringe, Dna, Snowflake, Heart, 
  Stethoscope, Microscope, Users, Activity,
  ShieldCheck, ArrowRight, CheckCircle2,
  FlaskConical, ClipboardCheck, Droplet, Beaker,
  Sparkles, HeartPulse, ScanLine, Scissors, TestTube,
  LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Our Services | Divine IVF - Fertility Clinic in Noida",
  description: "Explore the complete range of fertility services at Divine IVF, Sector 76, Noida — IVF, IUI, ICSI, egg freezing, male infertility treatment, and more.",
};

type Service = {
  icon: LucideIcon;
  title: string;
  description?: string;
  href: string;
};

type ServiceGroup = {
  label: string;
  description: string;
  services: Service[];
};

const serviceGroups: ServiceGroup[] = [
  {
    label: "Fertility Care",
    description: "Diagnosis, treatment, and advanced IVF techniques to help you conceive",
    services: [
      {
        icon: Microscope,
        title: "Fertility Investigation",
        description: "Understanding what's happening — complete diagnostic workup including hormonal tests, ultrasound, and semen analysis.",
        href: "/fertility-investigation-in-noida",
      },
      {
        icon: Baby,
        title: "IVF",
        description: "In Vitro Fertilization — advanced treatment with high success rates using state-of-the-art lab facilities.",
        href: "/ivf",
      },
      {
        icon: Syringe,
        title: "IUI",
        description: "Intrauterine Insemination — a simpler, less invasive treatment to improve chances of conception.",
        href: "/iui-treatment-in-noida",
      },
      {
        icon: Heart,
        title: "Egg Donor IVF",
        description: "Donor egg pathways for patients facing diminished ovarian reserve or genetic concerns.",
        href: "/egg-donor-ivf-in-noida",
      },
      {
        icon: Users,
        title: "Male Infertility",
        description: "Comprehensive evaluation and treatment for male fertility factors.",
        href: "/male-infertility-treatment-in-noida",
      },
      {
        icon: TestTube,
        title: "Sperm Retrieval Techniques",
        description: "Advanced surgical sperm retrieval options for male infertility cases.",
        href: "/sperm-retrieval-in-noida",
      },
      {
        icon: Dna,
        title: "ICSI",
        description: "Intracytoplasmic Sperm Injection — a specialized IVF technique injecting a single sperm directly into the egg.",
        href: "/ivf/icsi-treatment-in-noida",
      },
      {
        icon: FlaskConical,
        title: "PICSI",
        description: "Physiological ICSI — a refined sperm selection method for improved fertilization outcomes.",
        href: "/ivf/picsi-treatment-in-noida",
      },
      {
        icon: Microscope,
        title: "IMSI",
        description: "Intracytoplasmic Morphologically Selected Sperm Injection for high-magnification sperm selection.",
        href: "/ivf/imsi-treatment-in-noida",
      },
      {
        icon: ClipboardCheck,
        title: "ERA",
        description: "Endometrial Receptivity Analysis to identify the ideal window for embryo transfer.",
        href: "/ivf/era-test-in-noida",
      },
      {
        icon: ShieldCheck,
        title: "Genetic Testing of Embryos",
        description: "Preimplantation genetic screening of embryos before transfer, improving pregnancy outcomes.",
        href: "/ivf/genetic-testing-in-ivf-noida",
      },
      {
        icon: Droplet,
        title: "Embryo Glue",
        description: "A specialized transfer medium that helps improve embryo implantation rates.",
        href: "/ivf/embryo-glue-in-noida",
      },
      {
        icon: Beaker,
        title: "Intralipid Therapy",
        description: "Immune-modulating therapy to support implantation in select fertility cases.",
        href: "/ivf/intralipid-therapy-in-noida",
      },
      {
        icon: Activity,
        title: "LIT — Lymphocyte Immunization Therapy",
        description: "Immunotherapy option for patients with recurrent implantation failure or pregnancy loss.",
        href: "/ivf/lymphocyte-immunization-therapy-in-noida",
      },
    ],
  },
  {
    label: "Women's Health",
    description: "Gynecological care and minimally invasive procedures supporting fertility and wellbeing",
    services: [
      {
        icon: Stethoscope,
        title: "Gynecology",
        description: "Comprehensive gynecological care for women at every stage of life.",
        href: "/gynaecological-care-in-noida",
      },
      {
        icon: Activity,
        title: "Hysteroscopy",
        description: "Diagnostic and operative hysteroscopy to identify and treat uterine abnormalities.",
        href: "/hysteroscopy-in-noida",
      },
      {
        icon: Scissors,
        title: "Laparoscopy",
        description: "Minimally invasive procedures for fibroids, endometriosis, ovarian cysts, and more.",
        href: "/laparoscopy-in-noida",
      },
      {
        icon: Sparkles,
        title: "PRP for Fertility",
        description: "Platelet-Rich Plasma therapy to support ovarian and endometrial health.",
        href: "/prp-for-fertility-in-noida",
      },
      {
        icon: HeartPulse,
        title: "LIT — Ovary & Uterus",
        description: "Targeted lymphocyte immunization therapy supporting ovarian and uterine health.",
        href: "/lit-therapy-ovary-uterus-in-noida",
      },
    ],
  },
  {
    label: "Pregnancy Care",
    description: "Complete support through pregnancy, delivery, and beyond",
    services: [
      {
        icon: ScanLine,
        title: "Obstetric Ultrasound",
        description: "Detailed prenatal ultrasound scans to monitor your baby's growth and wellbeing.",
        href: "/obstetric-ultrasound",
      },
      {
        icon: Baby,
        title: "Normal Vaginal Delivery",
        description: "Supported, safe delivery care with experienced obstetric specialists.",
        href: "/normal-vaginal-delivery-in-noida",
      },
      {
        icon: Stethoscope,
        title: "Cesarean Delivery",
        description: "Expert surgical delivery care when a cesarean is the safest option for mother and baby.",
        href: "/cesarean-delivery-in-noida",
      },
    ],
  },
];

const whyChooseUs = [
  "15+ Years of Clinical Experience",
  "3,000+ Successful Deliveries",
  "94% Success Rate",
  "Advanced IVF Lab & Technology",
  "Personalized Treatment Plans",
  "Transparent Pricing, No Hidden Costs",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Our Services"
        title={<>Complete fertility care, <span className="font-serif italic text-rose-600">tailored to you</span></>}
        intro="From the first consultation to advanced reproductive treatments, Divine IVF offers a full range of fertility services under one roof — led by Dr. Mandavi Rai and her expert team."
        image="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Fertility clinic services"
      />

      {/* Services Grid — grouped by category */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-600 text-xs font-medium tracking-wide mb-3">
              <Heart className="h-3.5 w-3.5" />
              <span>What We Offer</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
              Our <span className="text-rose-600">Fertility Services</span>
            </h2>
            <p className="text-ink-400 text-sm mt-2">
              Every treatment backed by advanced technology and compassionate, expert care
            </p>
          </div>

          <div className="space-y-16">
            {serviceGroups.map((group) => (
              <div key={group.label}>
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-ink-900">
                    {group.label}
                  </h3>
                  <p className="text-ink-400 text-sm mt-1">{group.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={index}
                        href={service.href}
                        className="group flex flex-col p-6 bg-gradient-to-br from-rose-50/50 to-pink-50/30 rounded-2xl border border-rose-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md shadow-rose-200 mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="font-semibold text-ink-900 mb-2 group-hover:text-rose-600 transition-colors">
                          {service.title}
                        </h4>
                        {service.description && (
                          <p className="text-sm text-ink-500 leading-relaxed flex-1">
                            {service.description}
                          </p>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 mt-4 group-hover:gap-2 transition-all">
                          Learn More
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-rose-50/30 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
              Why Choose <span className="text-rose-600">Divine IVF</span>
            </h2>
            <p className="text-ink-400 text-sm mt-2">
              Trusted by thousands of families for compassionate, expert fertility care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whyChooseUs.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-rose-100/50 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-rose-500 flex-shrink-0" />
                <span className="text-sm font-medium text-ink-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
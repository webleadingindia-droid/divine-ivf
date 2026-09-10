// app/egg-donor-ivf-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/egg-donor-ivf-in-noida" },
  title: "Egg Donor IVF in Noida | Donor Egg IVF Treatment | Divine IVF",
  description:
    "Explore Egg Donor IVF in Noida at Divine IVF for low ovarian reserve, premature ovarian insufficiency and selected IVF cases. Consult Dr. Mandavi Rai.",
  robots: { index: true, follow: true },
  keywords:
    "Egg Donor IVF in Noida, Donor Egg IVF in Noida, Donor Egg IVF Treatment in Noida, Egg Donation IVF in Noida, Donor Egg Treatment in Noida, Donor Egg IVF Centre in Noida, Egg Donor IVF Centre in Noida, Donor Egg IVF Clinic in Noida, Egg Donor IVF Specialist in Noida, Donor Egg IVF Doctor in Noida, Egg Donor IVF Cost in Noida, Donor Egg IVF Cost in Noida, Egg Donation IVF Cost in Noida, IVF With Donor Eggs in Noida, Donor Egg IVF for Low AMH, Donor Egg IVF for Low Ovarian Reserve, Donor Egg IVF for Premature Ovarian Failure, Donor Egg IVF for Advanced Maternal Age, IVF Treatment in Noida, ICSI Treatment in Noida, Fertility Clinic in Noida, Fertility Specialist in Noida",
  openGraph: {
    title: "Egg Donor IVF in Noida | Donor Egg IVF Treatment | Divine IVF",
    description:
      "Explore Egg Donor IVF in Noida at Divine IVF for low ovarian reserve, premature ovarian insufficiency and selected IVF cases with personalised fertility guidance.",
    url: "https://www.divineivf.com/egg-donor-ivf-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/08/esqtLBrHCRxDno0idSap/image.png",
        width: 1200,
        height: 630,
        alt: "Egg donor IVF consultation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function EggDonorIVFPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf-treatment-in-noida" },
        { label: "Egg Donor IVF in Noida" },
      ]}
      eyebrow="Fertility Care · Third-Party Reproduction · Noida"
      // ========== H1 ==========
      titlePlain="Egg Donor IVF in Noida"
      titleAccent="Personalised donor egg IVF treatment for selected women and couples"
      // =========================
      intro="For some women, pregnancy with their own eggs may become difficult because of significantly reduced ovarian reserve, age-related decline in egg quality, premature ovarian insufficiency, certain genetic conditions, or repeated unsuccessful IVF treatment. In such cases, Egg Donor IVF in Noida may be discussed as a fertility treatment option after a detailed medical evaluation."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/08/esqtLBrHCRxDno0idSap/image.png"
      heroAlt="Egg donor IVF consultation with Dr. Mandavi Rai at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Supportive fertility consultation for donor egg IVF at Divine IVF, Noida"
      whatItIs={[
        "Egg Donor IVF, also known as Donor Egg IVF, is a type of IVF treatment in which eggs obtained from an eligible donor are fertilised with sperm in an embryology laboratory. The resulting embryo may then be transferred into the recipient woman's uterus.",
        "The treatment may involve fertility consultation, recipient medical evaluation, donor egg arrangement through legally permitted channels, sperm preparation, fertilisation through IVF or ICSI, embryo culture, preparation of the recipient's endometrium, embryo transfer, and pregnancy testing.",
        "Egg donor IVF should only be undertaken after informed counselling and according to applicable Indian ART regulations. At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility assessment and donor egg IVF treatment planning in accordance with applicable medical and legal requirements.",
      ]}
      whoNeedsIt={[
        "Very low ovarian reserve — women with significantly reduced ovarian reserve who produce very few eggs despite ovarian stimulation",
        "Premature ovarian insufficiency — women with ovarian function decline earlier than expected, with irregular or absent periods and low ovarian reserve",
        "Age-related decline in egg quality — for patients with markedly reduced reproductive potential using their own eggs",
        "Repeated IVF failure with poor egg or embryo quality — previous IVF cycles with very few eggs, poor fertilisation, poor embryo development, or no transferable embryos",
        "Genetic conditions — women with certain inherited genetic conditions may explore donor eggs as one reproductive option",
        "Previous ovarian surgery or treatment — women with reduced ovarian function after ovarian surgery, chemotherapy, radiation treatment, or other medical conditions",
      ]}
      preparation={[
        "Before considering donor egg IVF, Dr. Rai reviews your complete fertility history and evaluation results to confirm this pathway is appropriate for your situation. This includes assessing your uterine health through ultrasound and hysteroscopy to ensure it can support a pregnancy.",
        "The recipient may undergo tests to assess whether pregnancy and embryo transfer are medically appropriate. These can include pelvic ultrasound, uterine evaluation, endometrial assessment, blood tests, thyroid testing where needed, general health evaluation, and additional tests depending on age and medical history.",
        "If sperm from the male partner is being used, evaluation may include semen analysis, sperm concentration, motility, morphology, and additional tests when clinically indicated.",
        "The preparation process involves several important steps: selecting a donor (known or anonymous), coordinating with the donor's cycle, preparing your uterus with hormonal medication, and synchronising the donor's egg retrieval with your uterine preparation.",
        "Genetic counselling is an essential part of the process. Dr. Rai works with genetic counsellors who can help you understand the implications of donor egg IVF, including any genetic screening of the donor and the embryo.",
      ]}
      howItWorks={[
        { title: "Step 1 – Fertility Consultation", description: "The process begins with a detailed fertility assessment. Dr. Mandavi Rai reviews female age, AMH, antral follicle count, menstrual history, previous IVF cycles, previous egg retrieval results, embryo development history, pregnancy history, medical conditions, and genetic history." },
        { title: "Step 2 – Counselling", description: "Donor egg IVF is an important medical and personal decision. Counselling may cover why donor eggs are being recommended, alternative fertility options, expected treatment process, legal requirements, donor-related regulations, embryo transfer, pregnancy-related considerations, and emotional implications." },
        { title: "Step 3 – Recipient Evaluation", description: "The recipient may undergo tests to assess whether pregnancy and embryo transfer are medically appropriate including pelvic ultrasound, uterine evaluation, endometrial assessment, blood tests, thyroid testing, and general health evaluation." },
        { title: "Step 4 – Male Partner Evaluation", description: "If sperm from the male partner is being used, evaluation may include semen analysis, sperm concentration, motility, morphology, and additional tests when clinically indicated." },
        { title: "Step 5 – Donor Egg Coordination", description: "Eligible donor eggs are arranged through the appropriate regulated ART pathway. Donor screening and legal compliance are managed according to the applicable ART framework." },
        { title: "Step 6 – Fertilisation", description: "Donor eggs are fertilised using sperm from the intended male partner or another legally permitted source. Fertilisation may involve conventional IVF or ICSI depending on sperm parameters." },
        { title: "Step 7 – Embryo Culture", description: "After fertilisation, embryos are cultured in the embryology laboratory. Embryologists monitor their development over the following days. Not every egg will fertilise and not every embryo will continue developing." },
        { title: "Step 8 – Recipient Endometrial Preparation", description: "The recipient's uterine lining is prepared for embryo transfer. This may involve hormonal medicines. Ultrasound may be used to monitor endometrial thickness, endometrial development, and timing of transfer." },
        { title: "Step 9 – Embryo Transfer", description: "A suitable embryo may be transferred into the recipient's uterus through a thin catheter. The procedure is generally brief and usually does not require anaesthesia." },
        { title: "Step 10 – Pregnancy Test", description: "A pregnancy blood test is performed after embryo transfer according to the fertility specialist's recommended timeline." },
      ]}
      whatToExpect="The donor egg IVF process typically takes longer to coordinate than standard IVF due to the donor selection and synchronisation steps. Your experience of the transfer and pregnancy test will be similar to a standard IVF cycle. The recipient generally does not undergo ovarian stimulation for egg production because donor eggs are used. Treatment instead focuses on preparing the uterus for embryo transfer. Dr. Rai and her team will be with you throughout, explaining each step and answering any questions."
      benefits={[
        "Offers a realistic chance of pregnancy when your own eggs are unlikely to result in a viable pregnancy",
        "Provides the experience of pregnancy, childbirth, and a maternal bond with your child",
        "Uses young, healthy donor eggs with excellent quality, significantly improving success rates",
        "Allows you to carry the pregnancy and experience childbirth, even when using donor eggs",
        "Can be combined with your partner's sperm for a genetic connection to one parent",
        "Offers a pathway to parenthood for same-sex male couples using a gestational carrier",
        "Reduces the risk of passing on certain genetic conditions to your child",
      ]}
      considerations={[
        "The child will be genetically related to the egg donor and the sperm source, not to the intended mother (if using a donor egg and partner sperm)",
        "Involves complex emotional, ethical, and legal considerations that deserve careful thought and time",
        "Requires careful donor selection and coordination, which can take time",
        "Involves legal agreements and counselling (particularly with known donors)",
        "May involve additional costs beyond standard IVF for donor compensation, coordination, and legal fees",
        "The decision is deeply personal and should be made at your own pace, without pressure",
        "Not all patients are emotionally prepared for donor egg IVF — counselling is strongly recommended",
        "Some patients may need multiple attempts or a gestational carrier if uterine issues exist",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The fertility treatment within which donor eggs are used — from fertilisation to embryo transfer." },
        { name: "ICSI Treatment", href: "/icsi-treatment-in-noida", blurb: "Often used with donor eggs for male-factor infertility cases." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The comprehensive evaluation that helps determine if donor egg IVF is appropriate." },
        { name: "Low AMH / Ovarian Reserve", href: "/low-amh-treatment", blurb: "Evaluation of ovarian reserve that may lead to considering donor eggs." },
        { name: "Genetic Testing / PGT", href: "/genetic-testing-in-ivf-noida", blurb: "Screening embryos created with donor eggs for chromosomal health." },
        { name: "Embryo Transfer", href: "/embryo-transfer", blurb: "The process of transferring donor egg embryos into the uterus." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your fertility specialist at Divine IVF, Noida." },
      ]}
      externalResources={[
        {
          label: "Donor Eggs: Information for Patients",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/donor-eggs-information-for-patients/",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
        {
          label: "Indian Society for Assisted Reproduction",
          source: "ISAR",
          href: "https://www.isarindia.com/",
        },
      ]}
      faqs={[
        {
          question: "What is Egg Donor IVF?",
          answer:
            "Egg Donor IVF is an IVF treatment in which eggs from an eligible donor are fertilised in a laboratory and a resulting embryo is transferred into the recipient's uterus.",
        },
        {
          question: "Who may need donor eggs?",
          answer:
            "Donor eggs may be considered in women with very low ovarian reserve, premature ovarian insufficiency, significantly reduced egg quality, certain genetic concerns or repeated unsuccessful IVF treatment.",
        },
        {
          question: "Is egg donation legal in India?",
          answer:
            "Egg donation is permitted within the regulated ART framework and must comply with the Assisted Reproductive Technology (Regulation) Act and related requirements.",
        },
        {
          question: "Can I choose my own egg donor?",
          answer:
            "Donor arrangements must follow Indian ART regulations. Patients should not independently recruit or arrange donors outside the legally permitted system.",
        },
        {
          question: "Is the egg donor's identity revealed?",
          answer:
            "Donor confidentiality and record-keeping are governed by applicable ART regulations.",
        },
        {
          question: "Will I be genetically related to the baby?",
          answer:
            "The genetic material from the egg comes from the donor. The recipient carries the pregnancy but does not provide the egg's nuclear genetic material.",
        },
        {
          question: "Does donor egg IVF require ovarian stimulation for the recipient?",
          answer:
            "The recipient generally does not undergo ovarian stimulation for egg production because donor eggs are used. Treatment instead focuses on preparing the uterus for embryo transfer.",
        },
        {
          question: "Is ICSI required with donor eggs?",
          answer:
            "Not always. The choice between conventional IVF and ICSI depends on sperm quality and other clinical factors.",
        },
        {
          question: "Can genetic testing be done on donor egg embryos?",
          answer:
            "PGT may be considered in selected cases where there is an appropriate medical or genetic indication.",
        },
        {
          question: "Does donor egg IVF guarantee pregnancy?",
          answer:
            "No. Donor egg IVF cannot guarantee implantation, pregnancy or live birth.",
        },
        {
          question: "What is the age limit for ART treatment in India?",
          answer:
            "ART treatment eligibility is regulated by law. The ART Act specifies age ranges for women and men receiving ART services.",
        },
        {
          question: "How much does Egg Donor IVF cost in Noida?",
          answer:
            "The cost depends on recipient evaluation, donor-related ART bank processes, IVF or ICSI, laboratory charges, medicines, embryo transfer and any additional procedures required.",
        },
        {
          question: "Where can I discuss Egg Donor IVF in Noida?",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for fertility evaluation and personalised donor egg IVF treatment planning.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Egg Donor IVF in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Personalised donor egg IVF treatment for selected women and couples at Divine IVF, Sector 76, Noida.
        </p>
        {/* ============================================= */}

        {/* Clinic Info & CTA */}
        <div className="bg-gradient-to-r from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-ink-600 text-sm">
                📍 Sector 76, Noida, Uttar Pradesh
              </p>
              <p className="text-ink-600 text-sm">
                📞 Call: <a href="tel:+917678451808" className="text-rose-600 font-semibold hover:underline">+91 7678451808</a>
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-rose-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-rose-700 transition-colors text-center whitespace-nowrap"
            >
              Book Egg Donor IVF Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal assessment for egg donor IVF evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for uterine evaluation before egg donor IVF at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Egg Donor IVF Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Egg Donor IVF?</h2>
          <p className="text-ink-600">
            <strong>Egg Donor IVF</strong>, also known as <strong>Donor Egg IVF</strong>, is a type of IVF treatment in which eggs obtained from an eligible donor are fertilised with sperm in an embryology laboratory.
          </p>
          <p className="text-ink-600 mt-2">
            The resulting embryo may then be transferred into the recipient woman`s uterus.
          </p>
          <p className="text-ink-600 mt-2">
            The treatment may involve:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-3 list-disc list-inside text-sm text-ink-600">
            <li>Fertility consultation</li>
            <li>Recipient medical evaluation</li>
            <li>Donor egg arrangement through legally permitted channels</li>
            <li>Sperm preparation</li>
            <li>Fertilisation through IVF or ICSI</li>
            <li>Embryo culture</li>
            <li>Preparation of the recipient`s endometrium</li>
            <li>Embryo transfer</li>
            <li>Pregnancy testing</li>
          </ul>
          <p className="text-ink-600 text-sm mt-3 font-semibold">Egg donor IVF should only be undertaken after informed counselling and according to applicable Indian ART regulations.</p>
        </div>

        {/* Who May Consider Egg Donor IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Consider Egg Donor IVF?</h2>
          <p className="text-ink-600 text-sm">Egg donor IVF may be discussed in selected fertility situations.</p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900">Very Low Ovarian Reserve</h3>
              <p className="text-ink-600 text-sm">Women with significantly reduced ovarian reserve may produce very few eggs despite ovarian stimulation. In such cases, donor eggs may be discussed when treatment with the patient`s own eggs has a low expected response.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Premature Ovarian Insufficiency</h3>
              <p className="text-ink-600 text-sm">Premature ovarian insufficiency occurs when ovarian function declines earlier than expected. Women with this condition may have irregular periods, absent periods, low ovarian reserve, and difficulty producing eggs. Egg donor IVF may be one reproductive option.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Age-Related Decline in Egg Quality</h3>
              <p className="text-ink-600 text-sm">Female fertility declines with age, mainly because of changes in egg quantity and quality. For some patients with markedly reduced reproductive potential using their own eggs, donor egg IVF may be discussed after appropriate counselling.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Repeated IVF Failure With Poor Egg or Embryo Quality</h3>
              <p className="text-ink-600 text-sm">If previous IVF cycles repeatedly result in very few eggs, poor fertilisation, poor embryo development, or no transferable embryos, the fertility specialist may assess whether egg quality could be an important factor. Donor egg IVF may then be considered in selected patients.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Genetic Conditions</h3>
              <p className="text-ink-600 text-sm">Women with certain inherited genetic conditions may explore donor eggs as one reproductive option. Whether donor eggs, <Link href="/genetic-testing-in-ivf-noida" className="text-rose-600 font-semibold hover:underline">PGT</Link>, or another option is more appropriate depends on the specific genetic condition and counselling.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Previous Ovarian Surgery or Treatment</h3>
              <p className="text-ink-600 text-sm">Some women may have reduced ovarian function after ovarian surgery, chemotherapy, radiation treatment, or other medical conditions. Egg donor IVF may be discussed if ovarian function is significantly impaired.</p>
            </div>
          </div>
        </div>

        {/* Egg Donor IVF and Indian ART Regulations */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Egg Donor IVF and Indian ART Regulations</h2>
          <p className="text-ink-600 text-sm">Egg donation in India is regulated under the Assisted Reproductive Technology (Regulation) Act, 2021 and related rules.</p>
          <p className="text-ink-600 text-sm mt-2">Clinics and ART banks must follow legal requirements relating to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Donor eligibility
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Donor screening
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Written informed consent
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Donor protection
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Record keeping
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Confidentiality
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              ART clinic and bank registration
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Medical counselling
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The law also provides for insurance coverage for the oocyte donor and requires written informed consent before ART treatment is performed. Treatment should therefore only be undertaken through legally compliant ART services.</p>
        </div>

        {/* Donor Information */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Understanding Egg Donor Options</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Who Can Be an Egg Donor in India?</h3>
              <p className="text-ink-600 text-sm">Under the ART regulatory framework, donor eligibility is subject to legal requirements. The ART Act specifies criteria relating to the donor`s age, reproductive history and permitted frequency of oocyte donation. Patients should not independently arrange or recruit donors outside the permitted ART system. The fertility clinic and registered ART bank are responsible for ensuring that donor-related requirements are followed.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Can a Relative Donate Eggs?</h3>
              <p className="text-ink-600 text-sm">Egg donation in India must comply with the ART regulatory framework. Patients should not assume that a relative, friend or personally selected individual can automatically act as an egg donor. The appropriate donor arrangement should be confirmed through the treating ART clinic and registered ART bank in accordance with current law.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Is the Egg Donor`s Identity Disclosed?</h3>
              <p className="text-ink-600 text-sm">Donor information is subject to confidentiality and legal record-keeping requirements. The donor and recipient should not attempt to independently exchange identities outside the permitted framework. Relevant records must be maintained as required by law while preserving confidentiality.</p>
            </div>
          </div>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Donor egg preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Egg donor IVF consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/esqtLBrHCRxDno0idSap/image.png"
              alt="Family building discussion for egg donor IVF at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Egg Donor IVF vs Other Options */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Egg Donor IVF vs Other Options</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Egg Donor IVF vs IVF With Own Eggs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-ink-50/50 rounded-xl p-3">
                  <h4 className="font-bold text-sm text-ink-900">IVF With Own Eggs</h4>
                  <p className="text-xs text-ink-600 mt-1">The patient`s ovaries are stimulated and her own eggs are retrieved. Treatment outcome depends on female age, ovarian reserve, egg quality, and ovarian response.</p>
                </div>
                <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
                  <h4 className="font-bold text-sm text-ink-900">Egg Donor IVF</h4>
                  <p className="text-xs text-ink-600 mt-1">Eggs from an eligible donor are used instead. The recipient does not undergo ovarian stimulation or egg retrieval for producing those donor eggs. Her treatment mainly focuses on preparing the uterus for embryo transfer.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Egg Donor IVF vs Embryo Donation</h3>
              <p className="text-ink-600 text-sm">These are different fertility options. In Egg Donor IVF, a donor egg is fertilised with sperm according to the treatment plan. In Embryo Donation, a donated embryo is used. The legal, genetic and treatment considerations differ, so counselling is important before choosing either option.</p>
            </div>
          </div>
        </div>

        {/* Fresh vs Frozen Donor Eggs */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Fresh Donor Eggs vs Frozen Donor Eggs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h4 className="font-bold text-sm text-ink-900">Fresh Donor Egg Cycle</h4>
              <p className="text-xs text-ink-600 mt-1">Egg retrieval and recipient treatment are coordinated within a planned treatment cycle.</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-rose-200 shadow-sm">
              <h4 className="font-bold text-sm text-ink-900">Frozen Donor Eggs</h4>
              <p className="text-xs text-ink-600 mt-1">Where available and legally permitted, previously cryopreserved donor eggs may be used according to the treatment plan.</p>
            </div>
          </div>
          <p className="text-xs text-ink-500 mt-3">The appropriate approach depends on medical and laboratory considerations.</p>
        </div>

        {/* Does Egg Donor IVF Guarantee Pregnancy */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Does Egg Donor IVF Guarantee Pregnancy?</h2>
          <p className="text-ink-600 text-sm font-semibold">No.</p>
          <p className="text-ink-600 text-sm mt-2">Egg donor IVF can be an effective fertility option for selected patients, but it cannot guarantee:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fertilisation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo development
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Implantation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pregnancy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Prevention of miscarriage
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Live birth
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Treatment outcomes depend on multiple factors.</p>
        </div>

        {/* Factors That May Affect Egg Donor IVF Success */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Factors That May Affect Egg Donor IVF Success</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Embryo Development</strong> — Not every fertilised egg develops into a transferable embryo
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Sperm Quality</strong> — Sperm-related factors can influence fertilisation and embryo development
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Uterine Health</strong> — Fibroids, polyps, adhesions or other uterine factors may affect implantation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Endometrial Preparation</strong> — The uterine lining needs to be appropriately prepared before transfer
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>General Medical Health</strong> — Certain medical conditions may affect pregnancy or treatment planning
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Embryology Factors</strong> — Laboratory fertilisation and embryo culture also influence treatment outcomes
            </div>
          </div>
        </div>

        {/* Is the Recipient Genetically Related to the Baby */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Is the Recipient Genetically Related to the Baby?
          </h3>
          <p className="text-ink-600 text-sm">In egg donor IVF, the genetic contribution from the egg comes from the donor. If sperm from the recipient`s male partner is used, the baby may have a genetic relationship to the male partner.</p>
          <p className="text-ink-600 text-sm mt-2">The woman carrying the pregnancy provides the uterine environment but does not contribute the egg`s nuclear genetic material.</p>
          <p className="text-sm text-ink-500 mt-2">Patients should discuss the genetic implications carefully before treatment.</p>
        </div>

        {/* Is Egg Donor IVF Safe */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Is Egg Donor IVF Safe?</h2>
          <p className="text-ink-600 text-sm">Egg donor IVF is an established assisted reproductive treatment, but it has potential medical and emotional considerations.</p>
          <p className="text-ink-600 text-sm mt-2">Recipient-related risks may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Medication-related side effects
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo-transfer risks
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Multiple pregnancy if more than one embryo is transferred
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Ectopic pregnancy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Miscarriage
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pregnancy-related medical complications
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Pregnancy risk also depends on the recipient`s age and general health.</p>
        </div>

        {/* Egg Donor IVF Cost */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Egg Donor IVF Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The cost of Egg Donor IVF in Noida varies according to the treatment plan and legally permitted donor pathway. The overall cost may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Recipient investigations
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Male fertility tests
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Donor-related ART bank charges
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IVF laboratory procedures
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              ICSI if required
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo culture
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Endometrial preparation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo transfer
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Medicines
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo freezing if needed
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Frozen embryo transfer
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Additional genetic tests when indicated
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Because donor egg IVF includes regulated donor-related processes, the total cost can differ significantly between cases. Patients should request a clear written breakdown before starting treatment.</p>
        </div>

        {/* Questions to Ask */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Questions to Ask Before Starting Egg Donor IVF</h2>
          <p className="text-ink-600 text-sm">Before beginning treatment, consider asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why are donor eggs recommended in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Can I still attempt IVF using my own eggs?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What alternatives are available?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How are donor eggs legally arranged?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What donor screening is performed?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What is included in the treatment cost?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will I need ICSI?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How is the recipient`s uterus prepared?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How many embryos are likely to be transferred?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will additional embryos be frozen?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Are there any pregnancy-related risks for me?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What happens if the first embryo transfer is unsuccessful?
            </div>
          </div>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Egg Donor IVF in Noida?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Fertility Assessment</strong> — Donor egg treatment is considered only after reviewing the patient`s ovarian reserve, age, reproductive history and previous fertility treatment.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility Care Under Dr. Mandavi Rai</strong> — Treatment planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evaluation of Both Partners</strong> — Female and male fertility factors are considered when planning treatment.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF and ICSI Treatment Options</strong> — Depending on clinical needs, fertilisation can involve conventional IVF or ICSI.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Legally Compliant Donor Treatment Planning</strong> — Donor-related treatment should be coordinated according to applicable Indian ART regulations.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Divine IVF is located in Sector 76, Noida, making fertility consultation accessible to patients from Noida and nearby areas.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book an Egg Donor IVF Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If low ovarian reserve, premature ovarian insufficiency, age-related fertility decline or repeated unsuccessful IVF treatment has led you to consider donor eggs, a detailed consultation can help you understand your options.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility assessment and donor egg IVF treatment planning according to your medical needs and applicable ART regulations.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Egg Donor IVF Consultation
            </Link>
            <a
              href="tel:+917678451808"
              className="bg-rose-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-rose-400 transition-colors border border-white/20"
            >
              Call +91 7678451808
            </a>
          </div>
          <p className="text-rose-200 text-sm mt-4">
            Divine IVF · Sector 76, Noida, Uttar Pradesh
          </p>
        </div>
      </div>
    </TreatmentTemplate>
  );
}
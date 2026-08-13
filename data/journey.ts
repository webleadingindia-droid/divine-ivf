export const careExplorerOptions = [
  {
    key: "trying",
    label: "Trying to Conceive",
    description: "You've been trying for a while and want clarity on what's next.",
    links: [
      { label: "Fertility Investigation", href: "/fertility-investigation" },
      { label: "IUI", href: "/iui" },
    ],
  },
  {
    key: "ivf",
    label: "Considering IVF",
    description: "You're exploring whether IVF is the right path for you.",
    links: [
      { label: "IVF Overview", href: "/ivf" },
      { label: "The IVF Journey", href: "/ivf" },
    ],
  },
  {
    key: "previous",
    label: "Previous Treatment",
    description: "A past cycle didn't work and you want a fresh evaluation.",
    links: [
      { label: "ERA Testing", href: "/ivf/era" },
      { label: "Genetic Testing of Embryos", href: "/ivf/genetic-testing" },
    ],
  },
  {
    key: "male",
    label: "Male Fertility Concern",
    description: "You or your partner have questions about male fertility.",
    links: [
      { label: "Male Infertility", href: "/male-infertility" },
      { label: "Sperm Retrieval", href: "/sperm-retrieval" },
    ],
  },
  {
    key: "womens-health",
    label: "Women's Health",
    description: "General gynaecological care, not necessarily fertility-related.",
    links: [
      { label: "Gynecology", href: "/gynecology" },
      { label: "Hysteroscopy", href: "/hysteroscopy" },
    ],
  },
  {
    key: "pregnancy",
    label: "Pregnancy Care",
    description: "You're expecting and looking for ongoing obstetric care.",
    links: [
      { label: "Obstetric Ultrasound", href: "/obstetric-ultrasound" },
      { label: "Delivery Care", href: "/normal-delivery" },
    ],
  },
  {
    key: "advanced",
    label: "Advanced IVF",
    description: "You've been advised towards ICSI, PICSI, IMSI or similar.",
    links: [
      { label: "ICSI", href: "/ivf/icsi" },
      { label: "PICSI", href: "/ivf/picsi" },
    ],
  },
];

export const fertilityJourneySteps = [
  { title: "Understand", description: "A conversation about your history, concerns and goals." },
  { title: "Evaluate", description: "Focused investigations for both partners where relevant." },
  { title: "Plan", description: "A treatment pathway built around what your evaluation shows." },
  { title: "Treat", description: "IVF, IUI or the recommended procedure, explained step by step." },
  { title: "Monitor", description: "Close monitoring through stimulation, transfer and beyond." },
  { title: "Support", description: "Guidance that continues through pregnancy or the next step." },
];

export const ivfJourneySteps = [
  { title: "Consultation", description: "Discussing your history and setting expectations together." },
  { title: "Fertility Assessment", description: "Investigations for both partners to guide the plan." },
  { title: "Ovarian Stimulation", description: "Medication protocol to support egg development." },
  { title: "Monitoring", description: "Ultrasound and hormone tracking through stimulation." },
  { title: "Egg Retrieval", description: "A short procedure to collect eggs once ready." },
  { title: "Fertilisation", description: "Eggs and sperm are combined in the lab, including ICSI where needed." },
  { title: "Embryo Development", description: "Embryos are cultured and monitored in the laboratory." },
  { title: "Embryo Transfer", description: "The chosen embryo is placed in the uterus." },
  { title: "Pregnancy Test", description: "A blood test confirms the outcome of the cycle." },
];

export const advancedIvfTreatments = [
  {
    key: "icsi",
    name: "ICSI",
    href: "/ivf/icsi",
    description: "A single, carefully selected sperm is injected directly into a mature egg — often recommended for male-factor infertility or previous fertilisation difficulty.",
  },
  {
    key: "picsi",
    name: "PICSI",
    href: "/ivf/picsi",
    description: "Sperm are selected based on their ability to bind to hyaluronan, mirroring a natural selection process before ICSI.",
  },
  {
    key: "imsi",
    name: "IMSI",
    href: "/ivf/imsi",
    description: "Sperm are examined under very high magnification, allowing finer assessment of structure before selection.",
  },
  {
    key: "era",
    name: "ERA",
    href: "/ivf/era",
    description: "Endometrial Receptivity Analysis identifies the window in which the uterine lining is most receptive to an embryo.",
  },
  {
    key: "genetic-testing",
    name: "Genetic Testing",
    href: "/ivf/genetic-testing",
    description: "Embryos can be screened prior to transfer, in appropriate cases, as part of the overall treatment plan.",
  },
  {
    key: "embryo-glue",
    name: "Embryo Glue",
    href: "/ivf/embryo-glue",
    description: "A specialised transfer medium sometimes used to support the embryo during transfer.",
  },
  {
    key: "intralipid",
    name: "Intralipid",
    href: "/ivf/intralipid",
    description: "An adjunct therapy considered in select cases as part of an individualised plan.",
  },
  {
    key: "lit",
    name: "LIT",
    href: "/ivf/lit",
    description: "Lymphocyte Immunization Therapy, an immunological approach used in specific clinical situations.",
  },
];

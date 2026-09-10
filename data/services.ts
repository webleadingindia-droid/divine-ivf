// All 22 required client services, grouped for the homepage
// "Service Pathways" and "Care Explorer" sections.

export type Service = {
  name: string;
  slug: string;
  blurb: string;
  image: string;
};

export type ServiceGroup = {
  key: string;
  title: string;
  summary: string;
  href: string;
  image: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    key: "ivf",
    title: "IVF",
    summary:
      "In vitro fertilisation, from stimulation to embryo transfer.",
    href: "/ivf",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/qxen2CpjXXILWh06j3MJ/image.png",
    services: [
      {
        name: "IVF – In Vitro Fertilization",
        slug: "/ivf",
        blurb:
          "Fertilisation outside the body with embryo transfer.",
        image: "/images/services/ivf.webp",
      },
      {
        name: "Genetic Testing of Embryos",
        slug: "/ivf/genetic-testing-in-ivf-noida",
        blurb: "Screening embryos before transfer.",
        image: "/images/services/genetic-testing.webp",
      },
      {
        name: "Embryo Glue",
        slug: "/ivf/embryo-glue-in-noida",
        blurb:
          "A transfer medium used to support implantation.",
        image: "/images/services/embryo-glue.webp",
      },
      {
        name: "Intralipid Therapy",
        slug: "/ivf/intralipid-therapy-in-noida",
        blurb:
          "Adjunct therapy used in select IVF cases.",
        image: "/images/services/intralipid.webp",
      },
    ],
  },

  {
    key: "iui",
    title: "IUI",
    summary:
      "Intrauterine insemination for suitable fertility profiles.",
    href: "/iui-treatment-in-noida",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/arY0WOWmod0Lhqs0pu5w/image.png",
    services: [
      {
        name: "IUI – Intrauterine Insemination",
        slug: "/iui-treatment-in-noida",
        blurb:
          "A less invasive first-line fertility treatment.",
        image: "/images/services/iui.webp",
      },
    ],
  },

  {
    key: "evaluation",
    title: "Fertility Evaluation",
    summary:
      "Investigations that build an accurate picture before treatment.",
    href: "/fertility-investigation-in-noida",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/KRwOHEDRytVWYlh09WKi/image.png",
    services: [
      {
        name: "Fertility Investigation",
        slug: "/fertility-investigation-in-noida",
        blurb:
          "A structured evaluation of fertility health.",
        image: "/images/services/fertility-investigation.webp",
      },
      {
        name: "ERA – Endometrial Receptivity Analysis",
        slug: "/ivf/era-test-in-noida",
        blurb:
          "Assessing the ideal window for embryo transfer.",
        image: "/images/services/era.webp",
      },
    ],
  },

  {
    key: "advanced-ivf",
    title: "Advanced IVF",
    summary:
      "Precision embryology techniques for complex cases.",
    href: "/ivf/icsi-treatment-in-noida",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/Z8w4fTdWdvVhaZgITJNb/image.png",
    services: [
      {
        name: "ICSI",
        slug: "/ivf/icsi-treatment-in-noida",
        blurb:
          "A single sperm is injected directly into an egg.",
        image: "/images/services/icsi.webp",
      },
      {
        name: "PICSI",
        slug: "/ivf/picsi-treatment-in-noida",
        blurb:
          "Sperm selection guided by natural binding behaviour.",
        image: "/images/services/picsi.webp",
      },
      {
        name: "IMSI",
        slug: "/ivf/imsi-treatment-in-noida",
        blurb:
          "High-magnification sperm selection for ICSI.",
        image: "/images/services/imsi.webp",
      },
      {
        name: "LIT – Lymphocyte Immunization Therapy",
        slug: "/ivf/lymphocyte-immunization-therapy-in-noida",
        blurb:
          "An immunological therapy used in specific cases.",
        image: "/images/services/lit.webp",
      },
    ],
  },

  {
    key: "male-fertility",
    title: "Male Fertility",
    summary:
      "Evaluation and treatment for male-factor infertility.",
    href: "/male-infertility-treatment-in-noida",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/T7TGuwojZL5OkHIzK3jL/image.png",
    services: [
      {
        name: "Male Infertility",
        slug: "/male-infertility-treatment-in-noida",
        blurb:
          "Assessment and management of male fertility factors.",
        image: "/images/services/male-infertility.webp",
      },
      {
        name: "Sperm Retrieval Techniques",
        slug: "/sperm-retrieval-in-noida",
        blurb:
          "Surgical retrieval for use in assisted conception.",
        image: "/images/services/sperm-retrieval.webp",
      },
    ],
  },

  {
    key: "womens-health",
    title: "Women's Health",
    summary:
      "Gynaecological care beyond fertility treatment.",
    href: "/gynaecological-care-in-noida",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/M2Wz5h2rNTI5ZhbggW2N/image.png",
    services: [
      {
        name: "Gynecology",
        slug: "/gynaecological-care-in-noida",
        blurb:
          "General and specialised gynaecological care.",
        image: "/images/services/gynecology.webp",
      },
    ],
  },

  {
    key: "reproductive-procedures",
    title: "Reproductive Procedures",
    summary:
      "Diagnostic and therapeutic procedures for reproductive health.",
    href: "/hysteroscopy-in-noida",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/rlfq3MkDixixV9KpGlKc/image.png",
    services: [
      {
        name: "Hysteroscopy",
        slug: "/hysteroscopy-in-noida",
        blurb:
          "Examining and treating the inside of the uterus.",
        image: "/images/services/hysteroscopy.webp",
      },
      {
        name: "Laparoscopy",
        slug: "/laparoscopy-in-noida",
        blurb:
          "Minimally invasive assessment of the pelvis.",
        image: "/images/services/laparoscopy.webp",
      },
      {
        name: "PRP – Platelet Rich Plasma",
        slug: "/prp-for-fertility-in-noida",
        blurb:
          "PRP-related care used in select fertility cases.",
        image: "/images/services/prp.webp",
      },
      {
        name: "LIT Therapy – Ovary & Uterus",
        slug: "/lit-therapy-ovary-uterus-in-noida",
        blurb:
          "Targeted LIT applications for ovarian and uterine care.",
        image: "/images/services/lit-therapy.webp",
      },
      {
        name: "Egg Donor / Donor Egg IVF",
        slug: "/egg-donor-ivf-in-noida",
        blurb:
          "A donor egg pathway to parenthood.",
        image: "/images/services/egg-donor.webp",
      },
    ],
  },

  {
    key: "pregnancy-care",
    title: "Pregnancy Care",
    summary:
      "Care through pregnancy, labour and delivery.",
    href: "/pregnancy-care",
    image: "https://plain-apac-prod-public.komododecks.com/202608/13/VN3EVQsQpFdZcxxh9MGv/image.png",
    services: [
      {
        name: "Obstetric Ultrasound",
        slug: "/obstetric-ultrasound",
        blurb:
          "Monitoring your baby's growth and wellbeing.",
        image: "/images/services/obstetric-ultrasound.webp",
      },
      {
        name: "Normal Vaginal Delivery",
        slug: "/normal-vaginal-delivery-in-noida",
        blurb:
          "Supported, physiological delivery care.",
        image: "/images/services/normal-delivery.webp",
      },
      {
        name: "Cesarean Delivery",
        slug: "/cesarean-delivery-in-noida",
        blurb:
          "Planned and emergency caesarean care.",
        image: "/images/services/cesarean-delivery.webp",
      },
    ],
  },
];

// Flat list, used for the mega menu / sitemap where needed
export const allServices: Service[] =
  serviceGroups.flatMap((group) => group.services);
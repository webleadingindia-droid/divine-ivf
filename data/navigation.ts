export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const primaryNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Dr. Mandavi Rai",
        href: "/doctor/dr-mandavi-rai",
        description: "Meet your fertility specialist",
      },
      {
        label: "Clinic Approach",
        href: "/about",
        description: "How we plan personalised care",
      },
    ],
  },

  {
    label: "Fertility Care",
    href: "/services",
    children: [
      {
        label: "Fertility Investigation",
        href: "/fertility-investigation-in-noida",
        description: "Understanding what's happening",
      },
      {
        label: "IVF",
        href: "/ivf",
        description: "In Vitro Fertilization",
      },
      {
        label: "IUI",
        href: "/iui-treatment-in-noida",
        description: "Intrauterine Insemination",
      },
      {
        label: "Egg Donor IVF",
        href: "/egg-donor-ivf-in-noida",
        description: "Donor egg pathways",
      },
      {
        label: "Male Infertility",
        href: "/male-infertility-treatment-in-noida",
      },
      {
        label: "Sperm Retrieval Techniques",
        href: "/sperm-retrieval-in-noida",
      },

      // Advanced IVF
      {
        label: "ICSI",
        href: "/ivf/icsi-treatment-in-noida",
      },
      {
        label: "PICSI",
        href: "/ivf/picsi-treatment-in-noida",
      },
      {
        label: "IMSI",
        href: "/ivf/imsi-treatment-in-noida",
      },
      {
        label: "ERA",
        href: "/ivf/era-test-in-noida",
        description: "Endometrial Receptivity Analysis",
      },
      {
        label: "Genetic Testing of Embryos",
        href: "/ivf/genetic-testing-in-ivf-noida",
      },
      {
        label: "Embryo Glue",
        href: "/ivf/embryo-glue-in-noida",
      },
      {
        label: "Intralipid Therapy",
        href: "/ivf/intralipid-therapy-in-noida",
      },
      {
        label: "LIT — Lymphocyte Immunization Therapy",
        href: "/ivf/lymphocyte-immunization-therapy-in-noida",
      },
    ],
  },

  {
    label: "Women's Health",
    href: "/services",
    children: [
      {
        label: "Gynecology",
        href: "/gynaecological-care-in-noida",
      },
      {
        label: "Hysteroscopy",
        href: "/hysteroscopy-in-noida",
      },
      {
        label: "Laparoscopy",
        href: "/laparoscopy-in-noida",
      },
      {
        label: "PRP for Fertility",
        href: "/prp-for-fertility-in-noida",
      },
      {
        label: "LIT — Ovary & Uterus",
        href: "/lit-therapy-ovary-uterus-in-noida",
      },
    ],
  },

  {
    label: "Pregnancy Care",
    href: "/services",
    children: [
      {
        label: "Obstetric Ultrasound",
        href: "/obstetric-ultrasound",
      },
      {
        label: "Normal Vaginal Delivery",
        href: "/normal-vaginal-delivery-in-noida",
      },
      {
        label: "Cesarean Delivery",
        href: "/cesarean-delivery-in-noida",
      },
    ],
  },

  {
    label: "Resources",
    href: "/blog",
    children: [
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Patient Stories",
        href: "/patient-stories",
      },
      {
        label: "Testimonials",
        href: "/testimonials",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },
      {
        label: "Videos",
        href: "/videos",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];
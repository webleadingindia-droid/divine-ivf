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
    href: "/fertility",
    children: [
      {
        label: "Fertility Investigation",
        href: "/fertility-investigation",
        description: "Understanding what's happening",
      },
      {
        label: "IVF",
        href: "/ivf",
        description: "In Vitro Fertilization",
      },
      {
        label: "IUI",
        href: "/iui",
        description: "Intrauterine Insemination",
      },
      {
        label: "Egg Donor IVF",
        href: "/egg-donor",
        description: "Donor egg pathways",
      },
      {
        label: "Male Infertility",
        href: "/male-infertility",
      },
      {
        label: "Sperm Retrieval Techniques",
        href: "/sperm-retrieval",
      },

      // Advanced IVF
      {
        label: "ICSI",
        href: "/ivf/icsi",
      },
      {
        label: "PICSI",
        href: "/ivf/picsi",
      },
      {
        label: "IMSI",
        href: "/ivf/imsi",
      },
      {
        label: "ERA",
        href: "/ivf/era",
        description: "Endometrial Receptivity Analysis",
      },
      {
        label: "Genetic Testing of Embryos",
        href: "/ivf/genetic-testing",
      },
      {
        label: "Embryo Glue",
        href: "/ivf/embryo-glue",
      },
      {
        label: "Intralipid Therapy",
        href: "/ivf/intralipid",
      },
      {
        label: "LIT — Lymphocyte Immunization Therapy",
        href: "/ivf/lit",
      },
    ],
  },

  {
    label: "Women's Health",
    href: "/gynecology",
    children: [
      {
        label: "Gynecology",
        href: "/gynecology",
      },
      {
        label: "Hysteroscopy",
        href: "/hysteroscopy",
      },
      {
        label: "Laparoscopy",
        href: "/laparoscopy",
      },
      {
        label: "PRP for Fertility",
        href: "/prp",
      },
      {
        label: "LIT — Ovary & Uterus",
        href: "/lit-therapy",
      },
    ],
  },

  {
    label: "Pregnancy Care",
    href: "/pregnancy-care",
    children: [
      {
        label: "Obstetric Ultrasound",
        href: "/obstetric-ultrasound",
      },
      {
        label: "Normal Vaginal Delivery",
        href: "/normal-delivery",
      },
      {
        label: "Cesarean Delivery",
        href: "/cesarean-delivery",
      },
    ],
  },

  {
    label: "Resources",
    href: "/resources",
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
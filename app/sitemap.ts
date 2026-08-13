import type { MetadataRoute } from "next";

const paths = [
  "/", "/about", "/doctor/dr-mandavi-rai", "/fertility", "/fertility-investigation",
  "/ivf", "/iui", "/ivf/icsi", "/ivf/picsi", "/ivf/imsi", "/ivf/era",
  "/ivf/genetic-testing", "/ivf/embryo-glue", "/ivf/intralipid", "/ivf/lit",
  "/male-infertility", "/sperm-retrieval", "/hysteroscopy", "/laparoscopy",
  "/prp", "/gynecology", "/egg-donor", "/pregnancy-care", "/obstetric-ultrasound",
  "/normal-delivery", "/cesarean-delivery", "/patient-stories", "/testimonials",
  "/gallery", "/videos", "/resources", "/consultation", "/contact",
  "/privacy-policy", "/terms", "/medical-disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.divinewomenivfclinic.com";
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

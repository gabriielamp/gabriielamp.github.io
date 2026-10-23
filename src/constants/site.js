export const siteConfig = {
  name: "Gabriela Morón",
  legalName: "Gabriela Morón Pereira",
  titleTemplate: "%s | Gabriela Morón",
  defaultTitle: "Gabriela Morón | Frontend Developer & UX/UI Designer",
  defaultDescription:
    "Portfolio de Gabriela Morón, Frontend Developer y diseñadora UX/UI en Bolivia. Conoce sus proyectos, experiencia y habilidades.",
  url: (import.meta.env.VITE_SITE_URL || "https://gabriielamp.github.io").replace(/\/$/, ""),
  locale: "es_BO",
  language: "es-BO",
  themeColor: "#2262EA",
  image: "/og.png",
  personId: "#gabriela-moron",
  websiteId: "#website",
  serviceId: "#desarrollo-web",
  email: "itsgabi.dev@gmail.com",
  phone: "+59174579402",
  location: {
    city: "Santa Cruz de la Sierra",
    country: "Bolivia",
  },
  sameAs: [
    "https://github.com/gabriielamp",
    "https://www.linkedin.com/in/gabriela-moron4537/",
    "https://www.instagram.com/itsgabi.dev/",
    "https://dribbble.com/Gmoron4537",
  ],
};

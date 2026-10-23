import imgMalaEvents from "../assets/images/mockups/MalaEvents.webp";
import imgRugimosDesktop from "../assets/images/mockups/rugimos-desktop.png";
import imgKumyyDesktop from "../assets/images/mockups/kumyy-desktop.png";
import imgLegalFlow from "../assets/images/mockups/legalflow.webp";
import imgLegalFlowDesktop from "../assets/images/mockups/legal-desktop.png";
import imgSinganiSanPedro from "../assets/images/mockups/SinganiSanPedro.webp";
import imgTuProveedor from "../assets/images/mockups/TuProveedor.png";
import imgTuProveedorDesktop from "../assets/images/mockups/tuproveedor-desktop.png";

const portfolioOrder = [2, 1, 5, 4, 3, 6];

export const portfolioProjects = [
  {
    id: 1,
    slug: "mala-events",
    href: "https://malaevents.com/",
    image: imgMalaEvents,
    alt: "Sitio web de Mala Events presentado en una laptop",
    category: "Sitio web corporativo",
    title: "Mala Events",
    description:
      "Sitio corporativo creado para presentar servicios y producciones de eventos con una propuesta visual elegante.",
    participation: "Desarrollo e implementación del sitio web.",
    collaboration: "Plasti Studio.",
    role: "Desarrollo web",
    status: "Publicado",
    tags: ["Wordpress", "UX/UI", "Diseño responsive"],
  },
  {
    id: 2,
    slug: "fundacion-rugimos",
    href: "https://rugimos.com/",
    image: imgRugimosDesktop,
    imageDesktop: imgRugimosDesktop,
    alt: "Sitio web de Fundación Rugimos presentado en una laptop",
    category: "Sitio web corporativo",
    title: "Fundación Rugimos",
    description:
      "Plataforma de donaciones diseñada para comunicar la causa y facilitar aportes únicos y recurrentes.",
    participation: "Desarrollo web e integración de pagos.",
    collaboration: "Plasti Studio.",
    role: "Desarrollo web",
    status: "Publicado",
    tags: ["WordPress", "UX/UI", "Integración de pagos"],
  },
  {
    id: 3,
    slug: "kumyy",
    href: "https://kumyy.com/",
    image: imgKumyyDesktop,
    imageDesktop: imgKumyyDesktop,
    alt: "Plataforma Kumyy presentada en una laptop",
    category: "Marketplace de reservas",
    title: "Kumyy.com",
    description:
      "Plataforma para descubrir, publicar y reservar alojamientos, espacios y experiencias en Bolivia.",
    participation: "Desarrollo e implementación de funcionalidades web.",
    role: "Desarrollo web",
    status: "Publicado",
    tags: ["WordPress", "UX/UI", "Reservas online"],
  },
  {
    id: 4,
    slug: "legalflow",
    href: "https://legalflow.cl/",
    image: imgLegalFlow,
    imageDesktop: imgLegalFlowDesktop,
    alt: "Landing page de LegalFlow presentada en una tablet",
    category: "Landing page",
    title: "LegalFlow",
    description:
      "Landing page para presentar una plataforma de gestión de oficinas y casos legales.",
    participation: "Desarrollo e implementación de la landing page.",
    collaboration: "Syncra.",
    role: "Desarrollo web",
    status: "Publicado",
    tags: ["Wordpress","UX/UI", "Diseño responsive"],
  },
  {
    id: 5,
    slug: "singani-san-pedro",
    href: "https://singanisanpedro.com",
    image: imgSinganiSanPedro,
    alt: "Tienda online de Singani San Pedro presentada en una laptop",
    category: "E-commerce",
    title: "Singani San Pedro",
    description:
      "Tienda online que comunica la esencia, historia y tradición de la marca.",
    participation: "Desarrollo e implementación del e-commerce.",
    role: "Desarrollo web",
    status: "Publicado",
    tags: ["WordPress", "Identidad de marca", "Diseño responsive"],
  },
  {
    id: 6,
    slug: "tuproveedor",
    href: null,
    image: imgTuProveedor,
    imageDesktop: imgTuProveedorDesktop,
    alt: "Tienda online TuProveedor presentada en una laptop",
    category: "Web Design",
    title: "TuProveedor",
    description:
      "Tienda online con catálogo organizado por categorías para facilitar la compra de productos de consumo diario.",
    participation: "Desarrollo e implementación del e-commerce.",
    role: "Desarrollo web",
    status: "Sin enlace público",
    tags: ["UX/UI", "Catálogo online", "Figma"],
  },
].sort(
  (projectA, projectB) =>
    portfolioOrder.indexOf(projectA.id) - portfolioOrder.indexOf(projectB.id),
);

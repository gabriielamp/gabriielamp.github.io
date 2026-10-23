import webdesign from "../assets/images/servicios/webdesign.webp";
import landing from "../assets/images/servicios/landing.webp";
import ecommerce from "../assets/images/servicios/ecommerce.webp";
import mantenimiento from "../assets/images/servicios/mantenimiento.webp";
import booking from "../assets/images/servicios/booking.webp";
import website from "../assets/images/servicios/website.webp";

export const servicesData = [
  {
    id: 1,
    title: "LANDING PAGE",
    img: landing,
    bullets: [
      "Diseño páginas con una ",
      { b: "jerarquía clara" },
      ", contenido bien organizado y una experiencia enfocada en un ",
      { b: "objetivo concreto." },
    ],
  },
  {
    id: 2,
    title: "E-COMMERCE",
    img: ecommerce,
    bullets: [
      "Implemento ",
      { b: "tiendas online" },
      " con catálogos, navegación, pagos y recorridos de compra pensados para ser ",
      { b: "simples y confiables." },
    ],
  },
  {
    id: 3,
    title: "BOOKING ONLINE",
    img: booking,
    bullets: [
      "Desarrollo experiencias de ",
      { b: "búsqueda y reserva" },
      " para alojamientos, espacios, tours y servicios, integrando disponibilidad y ",
      { b: "pagos online." },
    ],
  },
  {
    id: 4,
    title: "SITIO WEB CORPORATIVO",
    img: website,
    bullets: [
      "Construyo sitios que presentan la ",
      { b: "identidad y el contenido" },
      " de una organización mediante estructuras ",
      { b: "claras, ágiles y responsive." },
    ],
  },
  {
    id: 5,
    title: "SOPORTE TÉCNICO WEB",
    img: mantenimiento,
    bullets: [
      "Realizo ",
      { b: "mantenimiento, actualizaciones y mejoras" },
      " para conservar sitios estables, seguros y con una buena ",
      { b: "experiencia de uso." },
    ],
  },
  {
    id: 6,
    title: "DISEÑO UX / UI",
    img: webdesign,
    bullets: [
      "Diseño interfaces a partir de ",
      { b: "necesidades reales" },
      ", trabajando arquitectura, flujos y componentes para lograr productos ",
      { b: "coherentes y fáciles de usar." },
    ],
  },
];

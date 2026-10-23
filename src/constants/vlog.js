import webDesignImage from "../assets/images/blog/image 3.png";
import ecommerceImage from "../assets/images/blog/image 5.png";
import profileImage from "../assets/images/blog/image 4.png";

export const vlogArticles = [
  {
    id: 1,
    slug: "senales-web-necesita-rediseno",
    category: "Diseño web",
    date: "18 ago 2026",
    title: "7 señales de que tu web necesita un rediseño",
    excerpt:
      "Una guía directa para reconocer cuándo tu sitio dejó de comunicar, convertir o acompañar bien a tu marca.",
    content: [
      "Una web no necesita rediseñarse solo porque se ve antigua. El punto real es si todavía ayuda a vender, explicar y generar confianza.",
      "Si tus usuarios no encuentran rápido lo que buscan, si el sitio carga lento o si el mensaje ya no representa a tu marca, probablemente es momento de replantear la experiencia.",
      "Un buen rediseño ordena contenido, mejora navegación y convierte cada sección en una decisión más clara para quien visita la página.",
    ],
    image: webDesignImage,
    imageAlt: "Ilustración de una persona diseñando una interfaz web",
  },
  {
    id: 2,
    slug: "convertir-visitas-clientes-experiencia",
    category: "E-commerce",
    date: "9 ago 2026",
    title: "Cómo convertir visitas en clientes con una mejor experiencia",
    excerpt:
      "Ideas prácticas para reducir fricción, ordenar la compra y hacer que una tienda online se sienta más confiable.",
    content: [
      "Convertir más no siempre significa agregar más elementos. Muchas veces significa quitar dudas, reducir pasos y hacer que cada acción sea obvia.",
      "Una tienda online necesita jerarquía visual, información suficiente, llamados a la acción claros y señales de confianza en los momentos correctos.",
      "La experiencia mejora cuando el usuario entiende qué compra, por qué le conviene y cómo avanzar sin fricción.",
    ],
    image: ecommerceImage,
    imageAlt: "Ilustración de una tienda online y un carrito de compras",
  },
  {
    id: 3,
    slug: "definir-antes-crear-sitio-web",
    category: "Q&A",
    date: "28 jul 2026",
    title: "Lo que debes definir antes de crear tu sitio web",
    excerpt:
      "Una lista simple de decisiones clave para empezar tu proyecto con foco, alcance claro y menos vueltas.",
    content: [
      "Antes de diseñar o desarrollar, conviene tener claro para quién es el sitio, qué acción principal debe impulsar y qué contenido necesita sostener esa decisión.",
      "También es importante definir referencias, tono de marca, funcionalidades, presupuesto y prioridades para separar lo esencial de lo decorativo.",
      "Cuando esas decisiones están claras, el proceso avanza con menos retrabajo y el resultado final comunica mejor.",
    ],
    image: profileImage,
    imageAlt: "Gabriela Morón, diseñadora y desarrolladora web",
  },
];

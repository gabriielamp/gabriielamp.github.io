import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, CodeXml, Earth, MessageCircle } from "lucide-react";
import heroCollage from "../assets/images/ilustraciones/hero-web-collage.webp";
import ClientesCarousel from "./ClientesCarousel";

const whatsappUrl =
  "https://wa.me/59174579402?text=Hola%20Gabi%2C%20vi%20tu%20portfolio%20y%20quiero%20una%20web.&utm_source=portfolio&utm_medium=whatsapp&utm_campaign=hero";

const highlights = [
  { label: "+3 años de experiencia", icon: BadgeCheck },
  { label: "UX/UI + desarrollo", icon: CodeXml },
  { label: "Trabajo remoto", icon: Earth },
];

const titleLines = [
  ["Sitios", "web", "que", "convierten"],
  ["y", "se", "ven", "increíbles"],
];

const titleVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.15, staggerChildren: 0.1 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: "0.8em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative -mt-[76px] flex min-h-screen flex-col overflow-hidden bg-white pt-[76px]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-28 -top-24 h-[420px] w-[420px] rounded-full bg-[#2262EA]/10 blur-[110px]" />
        <div className="absolute -bottom-32 -right-24 h-[380px] w-[380px] rounded-full bg-[#78A7FF]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center text-center">
          <motion.h1
            id="hero-title"
            className="max-w-[1100px] font-poppins text-[42px] font-bold leading-[1.02] tracking-[-0.045em] text-[#0E1B4D] sm:text-[52px] lg:text-[64px]"
            variants={titleVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
          >
            {titleLines.map((line, lineIndex) => (
              <span
                key={line.join("-")}
                className="flex flex-wrap justify-center gap-x-[0.24em] overflow-hidden"
              >
                {line.map((word) => (
                  <motion.span
                    key={word}
                    className={`inline-block ${word === "convierten" ? "text-[#2262EA]" : ""}`}
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
                {lineIndex < titleLines.length - 1 && <span className="sr-only"> </span>}
              </span>
            ))}
          </motion.h1>

          <p className="mt-7 max-w-3xl font-poppins text-[15px] font-medium leading-relaxed text-[#173A70] sm:text-base md:text-lg">
            Creo landing pages, sitios corporativos y tiendas online rápidas,
            claras y fáciles de usar para empresas de Bolivia y Latinoamérica.
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
            <a
              href="#trabajos"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2262EA] px-8 py-3 font-poppins text-sm font-semibold text-white shadow-[0_14px_30px_rgba(34,98,234,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#1C4FC4] hover:text-white hover:shadow-[0_18px_35px_rgba(34,98,234,0.30)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2262EA]/25"
            >
              Ver proyectos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cuéntame tu proyecto por WhatsApp; se abre en una pestaña nueva"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#2262EA]/35 bg-white px-8 py-3 font-poppins text-sm font-semibold text-[#1249BD] transition duration-300 hover:-translate-y-1 hover:border-[#2262EA] hover:bg-[#F5F8FF] hover:text-[#1249BD] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2262EA]/20"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Cuéntame tu proyecto
            </a>
          </div>

          <ul
            aria-label="Aspectos destacados"
            className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-poppins text-xs font-semibold text-[#173A70] sm:text-sm"
          >
            {highlights.map(({ label, icon: Icon }, index) => (
              <li key={label} className="flex items-center gap-4">
                {index > 0 && (
                  <span className="h-1 w-1 rounded-full bg-[#7AA4FF]" aria-hidden="true" />
                )}
                <span className="flex items-center gap-2.5">
                  <Icon
                    className="h-5 w-5 shrink-0 text-[#2262EA] sm:h-[22px] sm:w-[22px]"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </span>
              </li>
            ))}
          </ul>

          <motion.img
            src={heroCollage}
            alt=""
            width="1800"
            height="600"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            aria-hidden="true"
            className="pointer-events-none mt-8 w-[calc(100vw-24px)] max-w-[1180px] select-none sm:mt-10"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <ClientesCarousel variant="heroBlue" />
    </section>
  );
}

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  FaDribbble,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/images/icons/Logo-full.svg";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#acerca", label: "Acerca de mí" },
  { href: "#soluciones", label: "Servicios" },
  { href: "#trabajos", label: "Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#preguntas", label: "FAQ" },
];

const socialLinkClass =
  "group flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#2262EA] hover:bg-[#2262EA] hover:text-white hover:shadow-[0_10px_24px_rgba(34,98,234,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7EA2FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0";
const socialIconClass = "h-4 w-4 transition-transform duration-300 group-hover:scale-110";

export default function Footer() {
  const footerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0.35, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [96, 0]);

  return (
    <footer
      ref={footerRef}
      id="contacto"
      className="relative z-0 h-[100svh] min-h-[560px] bg-[#F0F3FF] font-poppins"
      style={{ clipPath: "inset(0)" }}
    >
      <motion.div
        className="fixed inset-x-0 bottom-0 flex h-[100svh] min-h-[560px] items-center rounded-t-[48px] bg-black px-6 py-8 text-white sm:rounded-t-[80px] md:px-12 md:py-12"
        style={shouldReduceMotion ? undefined : { opacity, y }}
      >
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78A7FF]">Contacto</p>
          <img
            src={Logo}
            alt="Logo Gabriela"
            className="mb-6 w-[180px] sm:mb-8 sm:w-[220px]"
            loading="lazy"
          />
          <h2 className="mt-3 max-w-2xl font-passionate text-3xl md:text-3xl">
            Convirtamos tu idea en una experiencia digital
          </h2>
          <p className="mb-7 mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:mb-10 md:text-base">
            Cuéntame qué necesita tu marca y conversemos sobre el alcance,
            objetivos y próximos pasos de tu proyecto web.
          </p>

          <ul className="mb-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white sm:text-base md:mb-10 md:gap-x-10">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="text-white transition hover:text-[#a1a1a1]">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mb-8 flex justify-center gap-4 md:mb-12">
            <a
              href="https://www.linkedin.com/in/gabriela-moron4537/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Gabriela Morón en LinkedIn"
              className={socialLinkClass}
            >
              <FaLinkedinIn className={socialIconClass} aria-hidden="true" />
            </a>
            <a
              href="mailto:itsgabi.dev@gmail.com"
              aria-label="Enviar un correo a Gabriela Morón"
              className={socialLinkClass}
            >
              <FaEnvelope className={socialIconClass} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/itsgabi.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Gabriela Morón en Instagram"
              className={socialLinkClass}
            >
              <FaInstagram className={socialIconClass} aria-hidden="true" />
            </a>
            <a
              href="https://dribbble.com/Gmoron4537"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Gabriela Morón en Dribbble"
              className={socialLinkClass}
            >
              <FaDribbble className={socialIconClass} aria-hidden="true" />
            </a>
          </div>

          <div className="w-full max-w-2xl border-t border-white/30 pt-5">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Derechos reservados | Diseño y Desarrollo por Gabriela Morón.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

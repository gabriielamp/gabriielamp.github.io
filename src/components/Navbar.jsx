import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  CircleQuestionMark,
  House,
  LayoutGrid,
  Menu,
  MessageSquareQuote,
  Settings2,
  UserRound,
  X,
} from "lucide-react";
import logoMark from "../assets/images/icons/LOGO.svg";
import logoFull from "../assets/images/icons/Logo-Vec.svg";

const links = [
  { href: "#inicio", label: "Inicio", icon: House },
  { href: "#acerca", label: "Acerca de mí", icon: UserRound },
  { href: "#soluciones", label: "Servicios", icon: Settings2 },
  { href: "#trabajos", label: "Proyectos", icon: LayoutGrid },
  { href: "#testimonios", label: "Testimonios", icon: MessageSquareQuote },
  { href: "#preguntas", label: "FAQ", icon: CircleQuestionMark },
];

export default function Navbar() {
  const [active, setActive] = useState("#inicio");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setActive(window.location.hash || "#inicio");
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean);

    const pickActive = () => {
      const viewportCenter = window.innerHeight / 2;
      let current = sections[0]?.id || "inicio";
      let bestDelta = Infinity;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const delta = Math.abs(rect.top - viewportCenter);
        if (rect.top <= viewportCenter && rect.bottom >= 0 && delta < bestDelta) {
          bestDelta = delta;
          current = section.id;
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = sections.at(-1)?.id || current;
      }

      setActive(`#${current}`);
    };

    pickActive();
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        pickActive();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", pickActive);
    window.addEventListener("popstate", pickActive);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", pickActive);
      window.removeEventListener("popstate", pickActive);
    };
  }, []);

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const handleNavClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  const linkBase =
    "relative inline-flex items-center gap-2 px-2 py-2 text-sm transition-colors hover:text-blue-600";

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <nav
        aria-label="Navegación principal"
        className="relative mx-auto flex w-full items-center justify-between rounded-full border border-slate-300/80 bg-white/85 px-4 py-2.5 font-poppins shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-5 lg:w-fit lg:max-w-[calc(100vw-2rem)] lg:justify-start lg:gap-8 xl:gap-12"
      >
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <div className="hidden h-10 w-10 place-items-center lg:grid xl:hidden">
            <img src={logoMark} alt="Logo Gabriela" className="h-full w-full object-contain" draggable="false" />
          </div>
          <div className="hidden h-10 w-35 place-items-center xl:grid">
            <img src={logoFull} alt="Logo Gabriela" className="h-full w-auto object-contain" draggable="false" />
          </div>
          <div className="grid h-10 w-36 place-items-center overflow-hidden lg:hidden sm:w-40">
            <img
              src={logoFull}
              alt="Logo Gabriela (versión móvil)"
              className="h-full w-full object-contain"
              draggable="false"
            />
          </div>
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white p-0 text-gray-800 shadow-sm transition active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30 lg:hidden"
          aria-label="Abrir menú"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <Menu className="h-6 w-6 text-gray-700" strokeWidth={2.2} />
        </button>

        <ul className="hidden items-center gap-2 text-stone-900 lg:flex xl:gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleNavClick(href)}
                aria-current={active === href ? "page" : undefined}
                className={`${linkBase} ${active === href ? "text-blue-600" : "text-[#282828]"}`}
              >
                <Icon className="h-[17px] w-[17px] shrink-0" strokeWidth={1.9} aria-hidden="true" />
                {label}
                <span
                  className={`absolute left-1/2 -bottom-1 h-[3px] -translate-x-1/2 rounded-full bg-blue-600/90 transition-all ${
                    active === href ? "w-6" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {mounted &&
        createPortal(
          <>
            <div
              className={`fixed inset-0 z-[9998] bg-black/40 transition-opacity duration-200 lg:hidden ${
                open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <aside
              id="mobile-menu"
              className={`fixed top-0 right-0 z-[9999] h-dvh w-80 max-w-[85vw] bg-white font-poppins shadow-2xl transition-transform duration-300 lg:hidden ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex justify-end border-b px-4 py-3">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white p-0 text-gray-800 shadow-sm transition active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <X className="h-6 w-6 text-gray-700" strokeWidth={2.2} />
                </button>
              </div>
              <nav className="px-4 py-4">
                <ul className="space-y-1">
                  {links.map(({ href, label, icon: Icon }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[16px] ${
                          active === href
                            ? "bg-blue-50 text-blue-600"
                            : "text-[#282828] hover:bg-gray-50"
                        }`}
                        onClick={() => handleNavClick(href)}
                      >
                        <Icon className="h-5 w-5 shrink-0" strokeWidth={1.9} aria-hidden="true" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="absolute right-0 bottom-0 left-0 border-t px-4 py-3 text-xs text-gray-500">
                © {new Date().getFullYear()} Gabriela Morón
              </div>
            </aside>
          </>,
          document.body,
        )}
    </header>
  );
}

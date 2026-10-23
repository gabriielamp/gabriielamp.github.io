// src/components/WhatsAppFab.jsx
import { useEffect, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFab({
  phone = "59174579402",                 // <-- cámbialo por tu número
  message = "Hola, me gustaría más información 👋",
  position = "br",                       // br | bl | tr | tl
  showAfter = 0,                         // px de scroll antes de mostrar (0 = siempre visible)
  utm = "utm_source=portfolio&utm_medium=whatsapp_fab",
}) {
  const [visible, setVisible] = useState(showAfter === 0);

  useEffect(() => {
    if (showAfter === 0) return;
    const onScroll = () => setVisible(window.scrollY >= showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const posClass = useMemo(() => {
    const base = "fixed z-30";
    const map = {
      br: `${base} right-5 bottom-[calc(20px+env(safe-area-inset-bottom))] sm:right-6 sm:bottom-6`,
      bl: `${base} left-5 bottom-[calc(20px+env(safe-area-inset-bottom))] sm:left-6 sm:bottom-6`,
      tr: `${base} right-4 top-4 sm:right-6 sm:top-6`,
      tl: `${base} left-4 top-4 sm:left-6 sm:top-6`,
    };
    return map[position] || map.br;
  }, [position]);

  const href = useMemo(() => {
    const txt = encodeURIComponent(message);
    const hasQuery = utm ? `?text=${txt}&${utm}` : `?text=${txt}`;
    return `https://wa.me/${phone}${hasQuery}`;
  }, [phone, message, utm]);

  if (!visible) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className={`${posClass} group`}
    >
      {/* Badge opcional (online) */}
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white shadow" />

      {/* Botón */}
      <div className="flex items-center gap-0 overflow-hidden rounded-full shadow-xl ring-1 ring-black/5 backdrop-blur
                      bg-emerald-500 hover:bg-emerald-600 transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
        <div className="p-3">
          <FaWhatsapp className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        {/* Etiqueta que se expande al hover y al entrar en la seccion portfolio */}
        <div
          className="hidden max-w-0 overflow-hidden transition-[max-width] duration-500 ease-out group-hover:max-w-[220px] lg:block"
        >
          <span
            className="block translate-x-2 scale-95 whitespace-nowrap pr-4 font-medium text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
          >
            ¡Escríbeme por WhatsApp!
          </span>
        </div>
      </div>

    </a>
  );
}

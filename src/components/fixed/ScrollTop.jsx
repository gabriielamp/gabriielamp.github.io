import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función scroll arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        aria-label="Volver al inicio"
        className="fixed bottom-[calc(80px+env(safe-area-inset-bottom))] right-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-brand-blue p-0 text-white shadow-lg transition duration-300 hover:bg-brand-blueDark hover:text-white sm:bottom-6 sm:left-6 sm:right-auto"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
}

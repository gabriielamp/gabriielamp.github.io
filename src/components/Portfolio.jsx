import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { portfolioProjects } from "../constants/portfolio";

const imageVariants = {
  enter: { opacity: 0, x: 28, scale: 0.985 },
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -24,
    scale: 0.99,
    transition: { duration: 0.22, ease: "easeOut" },
  },
};

const controlClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DCE8FD] bg-[#F7F9FE] p-0 text-slate-500 transition hover:border-[#C7D9FA] hover:bg-[#E8F0FD] hover:text-[#2262EA] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2262EA]/20";

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const project = portfolioProjects[selectedIndex];

  const previous = useCallback(() => {
    setSelectedIndex((current) =>
      current === 0 ? portfolioProjects.length - 1 : current - 1,
    );
  }, []);

  const next = useCallback(() => {
    setSelectedIndex((current) => (current + 1) % portfolioProjects.length);
  }, []);

  useEffect(() => {
    if (paused || shouldReduceMotion) return undefined;
    const interval = window.setInterval(next, 7000);
    return () => window.clearInterval(interval);
  }, [paused, shouldReduceMotion, next]);

  return (
    <section
      id="trabajos"
      aria-labelledby="trabajos-title"
      className="relative bg-white py-12 lg:py-16"
    >
      <div
        className="mx-auto max-w-[1280px] px-5 font-poppins sm:px-8 lg:px-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
      >
        <motion.div
          className="mb-10 text-center lg:mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2262EA]">Proyectos</p>
          <h2
            id="trabajos-title"
            className="mt-2 font-passionate text-3xl font-bold tracking-[-0.025em] text-[#0F1F4B] sm:text-[40px]"
          >
            Trabajos más recientes
          </h2>
        </motion.div>

        <div className="grid items-center gap-8 bg-white lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
          <div className="relative flex min-h-[280px] cursor-grab touch-pan-y items-center justify-center overflow-hidden bg-white active:cursor-grabbing sm:min-h-[360px] lg:min-h-[440px]" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.picture
                key={project.id}
                className="relative z-10 flex h-full w-full items-center justify-center"
                variants={shouldReduceMotion ? undefined : imageVariants}
                initial={shouldReduceMotion ? { opacity: 0 } : "enter"}
                animate={shouldReduceMotion ? { opacity: 1 } : "center"}
                exit={shouldReduceMotion ? { opacity: 0 } : "exit"}
                drag={shouldReduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) next();
                  if (info.offset.x > 60) previous();
                }}
              >
                {project.imageDesktop && (
                  <source media="(min-width: 1024px)" srcSet={project.imageDesktop} />
                )}
                <img
                  src={project.image}
                  alt={project.alt}
                  className="max-h-[340px] max-w-full select-none object-contain drop-shadow-[0_18px_22px_rgba(15,31,75,0.15)] sm:max-h-[390px] lg:max-h-[430px]"
                  loading={selectedIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable="false"
                />
              </motion.picture>
            </AnimatePresence>
          </div>

          <div className="flex flex-col py-2 lg:py-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={project.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -7 }}
                transition={{ duration: 0.28 }}
                className="flex h-full flex-col"
              >
                <h3 className="text-[26px] font-bold tracking-[-0.02em] text-[#0F1F4B] sm:text-[30px]">
                  {project.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5A6A8A] sm:text-base">
                  {project.description}
                </p>

                <dl className="mt-7 grid grid-cols-1 gap-5 border-y border-[#DCE5F2] py-5 sm:grid-cols-3 sm:gap-0">
                  <div className="min-w-0">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8B9BB6]">Tipo</dt>
                    <dd className="mt-1.5 break-words text-[13px] font-semibold leading-snug text-[#0F1F4B]">
                      {project.category}
                    </dd>
                  </div>
                  <div className="min-w-0 sm:border-l sm:border-[#DCE5F2] sm:pl-5">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8B9BB6]">Rol</dt>
                    <dd className="mt-1.5 break-words text-[13px] font-semibold leading-snug text-[#0F1F4B]">
                      {project.role}
                    </dd>
                  </div>
                  <div className="min-w-0 sm:border-l sm:border-[#DCE5F2] sm:pl-5">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8B9BB6]">Estado</dt>
                    <dd className="mt-1.5 text-[13px] font-semibold leading-snug text-[#0F1F4B]">
                      <span
                        className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${
                          project.href ? "bg-emerald-500" : "bg-slate-400"
                        }`}
                        aria-hidden="true"
                      />
                      {project.status}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías y servicios">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[#BFD2F7] bg-white px-3.5 py-1.5 text-xs font-medium text-[#2262EA]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#2262EA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1A50CC] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2262EA]/20"
                      aria-label={`Ver ${project.title}; se abre en una pestaña nueva`}
                    >
                      Ver proyecto
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-500">
                      Sin enlace público
                    </span>
                  )}

                  <div className="flex items-center gap-2" aria-label="Controles del slider">
                    <button type="button" onClick={previous} className={controlClass} aria-label="Mostrar proyecto anterior">
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span className="min-w-[48px] text-center text-xs font-medium text-[#9AAABF]">
                      <strong className="text-[#0F1F4B]">{String(selectedIndex + 1).padStart(2, "0")}</strong>{" "}
                      / {String(portfolioProjects.length).padStart(2, "0")}
                    </span>
                    <button type="button" onClick={next} className={controlClass} aria-label="Mostrar proyecto siguiente">
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {project.collaboration && (
                  <p className="mt-3 text-xs text-[#9AAABF]">
                    En colaboración con{" "}
                    <strong className="font-medium text-[#5A6A8A]">{project.collaboration}</strong>
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

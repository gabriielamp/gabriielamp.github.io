import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";

const experience = [
  {
    period: "Diciembre 2025 — Febrero 2026",
    role: "Frontend Developer",
    company: "AXENTIS",
  },
  {
    period: "Abril 2024 — Diciembre 2025",
    role: "Frontend Developer",
    company: "RIA Ventures",
    location: "Santa Cruz, Bolivia",
  },
  {
    period: "Diciembre 2021 — Junio 2022",
    role: "Desarrolladora Web",
    company: "Foco Azul",
    location: "Santa Cruz, Bolivia",
  },
];

const education = [
  {
    period: "Febrero 2018 — Julio 2023",
    title: "Ingeniería de Sistemas",
    institution: "Universidad de Aquino Bolivia",
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion
    ? undefined
    : { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="bg-brand-soft px-5 py-12 font-poppins sm:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          className="mb-10 text-left"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
            Trayectoria
          </motion.p>
          <motion.h2
            id="experiencia-title"
            className="mt-2 font-passionate text-3xl font-bold text-brand-navy sm:text-[40px]"
          >
            Experiencia y formación
          </motion.h2>
          <motion.p className="mt-4 max-w-2xl text-sm leading-7 text-brand-muted sm:text-base">
            Mi recorrido combina desarrollo de software, diseño de interfaces y
            aprendizaje continuo aplicado a proyectos reales.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.article
            className="rounded-brand border border-brand-line bg-white p-6 shadow-brand sm:p-8"
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue text-white">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-brand-navy">Experiencia</h3>
            </div>

            <div className="relative space-y-8 pl-7 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-brand-blue/20">
              {experience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="relative">
                  <span className="absolute -left-7 top-1.5 h-3 w-3 rounded-full bg-brand-blue ring-4 ring-brand-blue/10" />
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
                    {item.period}
                  </p>
                  <h4 className="mt-2 text-lg font-bold text-brand-navy">
                    {item.role}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-brand-muted">
                    {item.company}
                  </p>
                  {item.location && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-brand-muted/80">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.location}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="self-start rounded-brand border border-brand-line bg-white p-6 shadow-brand sm:p-8"
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue text-white">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-brand-navy">Formación</h3>
            </div>

            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-brand-line bg-brand-soft p-5"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                    {item.period}
                  </p>
                  <h4 className="mt-2 font-bold text-brand-navy">{item.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-brand-muted">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

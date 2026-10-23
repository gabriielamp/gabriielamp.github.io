import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const questions = [
  {
    question: "¿Qué tipo de proyectos web desarrollas?",
    answer:
      "Desarrollo landing pages, sitios web corporativos, tiendas online, sistemas de reservas y experiencias digitales con enfoque UX/UI.",
  },
  {
    question: "¿Con qué tecnologías trabajas?",
    answer:
      "Trabajo principalmente con WordPress, React, JavaScript, PHP, Laravel, HTML, CSS, Tailwind y Figma, eligiendo la tecnología según los objetivos del proyecto.",
  },
  {
    question: "¿También ofreces mantenimiento web?",
    answer:
      "Sí. Puedo encargarme de actualizaciones, monitoreo, copias de seguridad y soporte técnico para mantener el sitio seguro, estable y rápido.",
  },
  {
    question: "¿Cómo comenzamos un proyecto?",
    answer:
      "Primero conversamos sobre tu marca, objetivos y necesidades. Después definimos alcance, prioridades y una propuesta de trabajo clara antes de iniciar el diseño o desarrollo.",
  },
  {
    question: "¿Puedes trabajar con clientes fuera de Bolivia?",
    answer:
      "Sí. Trabajo desde Bolivia y puedo colaborar de manera remota con marcas, empresas y equipos de otros países.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-title"
      className="bg-white px-6 py-12 font-poppins lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#2262EA]">
            Preguntas frecuentes
          </span>
          <h2
            id="preguntas-title"
            className="mt-2 font-passionate text-3xl font-bold text-[#0E1B3D] md:text-4xl"
          >
            Respuestas antes de comenzar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5E6C8F] md:text-base">
            Una guía rápida sobre mis servicios, tecnologías y forma de trabajo.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const questionId = `pregunta-${index + 1}`;
            const answerId = `respuesta-${index + 1}`;

            return (
              <motion.article
                key={question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`overflow-hidden rounded-2xl border bg-[#F1F5FD] transition-colors duration-300 ${
                  isOpen
                    ? "border-[#AFCFFF]"
                    : "border-[#C9DDFB] hover:border-[#AFCFFF]"
                }`}
              >
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                    className="flex w-full items-center justify-between gap-5 rounded-none border-0 bg-transparent px-6 py-5 text-left text-base font-semibold leading-snug text-black transition-colors hover:border-transparent hover:bg-transparent hover:text-[#0E1B3D] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2262EA]/35 sm:text-lg"
                  >
                    <span>{question}</span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DCEAFF] text-[#2262EA]"
                      aria-hidden="true"
                    >
                      <Plus
                        className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pr-16 text-sm font-medium leading-[1.65] text-[#2b2b2b] sm:text-[15px]">
                      {answer}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

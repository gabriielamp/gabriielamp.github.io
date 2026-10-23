import { motion } from "framer-motion";
import { servicesData } from "../constants/services";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const serviceVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function RichText({ parts }) {
  return (
    <p className="leading-relaxed text-slate-600">
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <strong key={index} className="font-semibold text-slate-900">
            {part.b}
          </strong>
        ),
      )}
    </p>
  );
}

export default function SolutionsGrid() {
  return (
    <section
      id="soluciones"
      aria-labelledby="soluciones-title"
      className="relative isolate scroll-mt-24 bg-[#1E56F0]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(255,255,255,0.05)_1px)] [background-size:18px_18px]" />
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-[#7ea2ff]/20 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.7fr)] lg:items-start lg:gap-14 lg:px-12 lg:py-16 xl:gap-20 xl:px-10">
        <motion.div
          className="text-white lg:sticky lg:top-28 lg:py-8"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="inline-block font-figtree text-xs font-bold tracking-[0.2em] sm:text-sm">
            SERVICIOS
          </span>
          <h2
            id="soluciones-title"
            className="mt-3 max-w-md font-poppins text-4xl font-bold leading-[0.95] sm:text-5xl lg:text-5xl"
          >
            Soluciones para tu marca
          </h2>
          <p className="mt-7 max-w-md font-poppins text-sm leading-relaxed text-white/90 sm:text-base">
            <strong className="font-semibold text-white">
              Especialista en WordPress, diseño responsivo y experiencia de usuario,
            </strong>{" "}
            con un enfoque en soluciones innovadoras para potenciar la presencia digital de empresas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {servicesData.map((service) => (
            <motion.article
              key={service.id}
              variants={serviceVariants}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative flex min-h-[340px] flex-col overflow-hidden rounded-[24px] border border-white/60 bg-white/95 p-6 shadow-[0_12px_30px_rgba(10,31,93,0.16)] backdrop-blur-sm sm:p-7"
              aria-label={service.title}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-70" />
              <div className="relative z-10 flex h-full flex-col">
                <motion.img
                  variants={imageVariants}
                  src={service.img}
                  alt=""
                  className="mx-auto h-32 w-32 object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.10)] sm:h-36 sm:w-36"
                  loading="lazy"
                />
                <h3 className="mt-5 font-poppins text-base font-bold uppercase leading-snug tracking-wide text-[#1E56F0] sm:text-lg">
                  {service.title}
                </h3>
                <div className="mt-3 font-poppins text-sm sm:text-[15px]">
                  <RichText parts={service.bullets} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

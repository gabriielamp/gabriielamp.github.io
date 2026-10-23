import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Análisis",
    desc: "Iniciamos con una reunión para entender tus objetivos y definir la dirección del proyecto.",
    icon: "🤝",
  },
  {
    id: "02",
    title: "Diseño",
    desc: "Transformo ideas en una propuesta visual atractiva y alineada con tu marca.",
    icon: "💡",
  },
  {
    id: "03",
    title: "Desarrollo",
    desc: "Construyo el sitio con código limpio, optimizado y completamente responsivo.",
    icon: "💻",
  },
  {
    id: "04",
    title: "Entrega",
    desc: "Realizo pruebas, ajustes y optimización final antes del lanzamiento.",
    icon: "🚀",
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WorkProcess() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-white py-12 font-poppins lg:py-16">
      <div className="pointer-events-none absolute -top-16 left-0 h-64 w-64 rounded-full bg-[#2262EA]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#8fb0ff]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="inline-block font-poppins text-sm font-bold uppercase tracking-[0.18em] text-[#2262EA]">
            Flujo de Trabajo
          </span>
          <h2 className="mt-2 font-passionate text-3xl font-bold text-black md:text-4xl">
            Mi proceso de Trabajo
          </h2>
        </motion.div>

        <motion.div
          className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative flex flex-col items-center rounded-[28px] border border-[#2262EA]/10 bg-white/90 px-5 py-8 text-center shadow-[0_10px_35px_rgba(34,98,234,0.06)] backdrop-blur-sm hover:shadow-[0_18px_45px_rgba(34,98,234,0.14)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/70 via-transparent to-transparent opacity-80" />
              <motion.div
                whileHover={{ rotate: -4, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#2262EA] text-3xl font-bold shadow-[0_10px_25px_rgba(34,98,234,0.30)]"
              >
                <span className="drop-shadow-sm">{step.icon}</span>
                <span className="absolute -right-0 -bottom-3 rounded-full border border-gray-100 bg-white px-2 py-1 text-xs font-bold text-black shadow-sm">
                  {step.id}
                </span>
              </motion.div>
              <h3 className="relative z-10 mt-6 text-lg font-semibold text-black">{step.title}</h3>
              <p className="relative z-10 mt-2 max-w-[220px] text-sm leading-relaxed text-[#716E81]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

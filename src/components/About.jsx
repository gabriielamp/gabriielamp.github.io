import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CodeXml, Database, Wrench } from "lucide-react";

import profileImg from "../assets/images/fotos/profile2.png";
import htmlImg from "../assets/images/skills/html-logo.png";
import cssImg from "../assets/images/skills/css-logo.png";
import javascriptImg from "../assets/images/skills/js-logo.png";
import phpImg from "../assets/images/skills/php-logo.png";
import csharpImg from "../assets/images/skills/csharp-logo.png";
import reactImg from "../assets/images/skills/react-logo.png";
import codeIgniterImg from "../assets/images/skills/codeigniter-logo.png";
import bootstrapImg from "../assets/images/skills/boostrap-logo.png";
import tailwindImg from "../assets/images/skills/tailwind-logo.png";
import wordpressImg from "../assets/images/skills/wordpress-logo.png";
import githubImg from "../assets/images/skills/github-logo.png";
import gitImg from "../assets/images/skills/git.png";
import phpMyAdminImg from "../assets/images/skills/phpmyadmin-logo.png";
import figmaImg from "../assets/images/skills/figma-logo.png";
import photoshopImg from "../assets/images/skills/adobe-photoshop-logo.svg";
import illustratorImg from "../assets/images/skills/illustrator-logo.svg";
import laravelImg from "../assets/images/skills/laravel.png";
import mysqlImg from "../assets/images/skills/mysql.png";
import canvaImg from "../assets/images/skills/canva.png";

const experienceData = [
  {
    date: "Feb 2026 – Actualidad",
    role: "Desarrolladora Web Freelance",
    type: "Freelancer",
    company: "Independiente",
  },
  {
    date: "Dic 2025 – Ene 2026",
    role: "Desarrollador Front-end",
    type: "Freelancer",
    company: "AXENTIS Technology",
  },
  {
    date: "Nov 2023 – Dic 2025",
    role: "Desarrollador Front-end",
    type: "Full Time",
    company: "RIA Ventures",
  },
  {
    date: "Ago 2021 – Jun 2022",
    role: "Desarrollador Web con WordPress",
    type: "Full Time",
    company: "Agencia de Desarrollo web Foco Azul",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: CodeXml,
    gridClass: "grid-cols-3",
    skills: [
      { name: "HTML", img: htmlImg },
      { name: "CSS", img: cssImg },
      { name: "JavaScript", img: javascriptImg },
      { name: "React", img: reactImg },
      { name: "Tailwind", img: tailwindImg },
      { name: "Bootstrap", img: bootstrapImg },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    gridClass: "grid-cols-3",
    skills: [
      { name: "PHP", img: phpImg },
      { name: "Laravel", img: laravelImg },
      { name: "C#", img: csharpImg },
      { name: "CodeIgniter", img: codeIgniterImg },
      { name: "MySQL", img: mysqlImg },
      { name: "PhpMyAdmin", img: phpMyAdminImg },
    ],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    gridClass: "grid-cols-3 sm:grid-cols-4",
    skills: [
      { name: "Git", img: gitImg },
      { name: "GitHub", img: githubImg },
      { name: "Figma", img: figmaImg },
      { name: "WordPress", img: wordpressImg },
      { name: "Photoshop", img: photoshopImg },
      { name: "Illustrator", img: illustratorImg },
      { name: "Canva", img: canvaImg },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const softScale = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const [activeTab, setActiveTab] = useState("experiencia");
  const tabs = [
    { id: "experiencia", label: "Experiencia" },
    { id: "habilidades", label: "Habilidades" },
  ];

  const panelClass = useMemo(
    () =>
      [
        "mt-2 w-full rounded-[28px] border border-white/70 bg-white/90 p-6 text-left shadow-[0_10px_40px_rgba(34,98,234,0.08)] backdrop-blur-sm",
        activeTab === "experiencia"
          ? "max-h-[65vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-[#2262EA] md:max-h-[70vh]"
          : "",
        "transition-all duration-300",
      ].join(" "),
    [activeTab],
  );

  return (
    <section
      id="acerca"
      aria-labelledby="acerca-title"
      className="relative mx-auto w-full max-w-[1500px] px-4 py-12 font-poppins text-neutral-900 sm:px-6 lg:px-8 lg:py-16"
    >
      <motion.div
        className="mx-auto mb-10 flex max-w-6xl flex-col items-center justify-center gap-10 md:mb-4 md:flex-row"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={softScale} className="flex justify-center md:justify-start">
          <div className="relative h-56 w-56 overflow-hidden sm:h-72 sm:w-72 md:h-[315px] md:w-[315px]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/35 via-transparent to-transparent" />
            <img
              src={profileImg}
              alt="Gabriela Morón, desarrolladora web y diseñadora UX/UI"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerStagger}
          className="mx-auto max-w-xl text-center md:mx-0 md:text-left"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center text-[#2262EA] md:items-start">
            <span className="inline-block font-figtree text-xs font-bold uppercase tracking-[0.18em] sm:text-sm">
              Acerca de mí
            </span>
            <h2
              id="acerca-title"
              className="mt-2 px-0 py-2 font-passionate text-2xl leading-tight text-[#0E1B3D] sm:px-0 sm:text-3xl md:text-4xl"
            >
              Hola, Soy Gabriela 👋
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="mb-5 mt-4 text-sm leading-relaxed sm:mb-6 sm:text-base">
            Desarrolladora web con más de <strong>3 años de experiencia</strong> en creación de sitios
            atractivos y funcionales.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm leading-relaxed sm:text-base">
            Especialista en WordPress, diseño responsivo y experiencia de usuario, con un enfoque en
            soluciones innovadoras para potenciar la presencia digital de empresas.
            <span className="ml-1">🚀</span>
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="mx-auto grid max-w-6xl items-start font-poppins md:grid-cols-1">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-4 flex flex-wrap justify-center gap-2"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-full border-b-2 px-6 py-2 text-sm font-medium transition-all md:text-base ${
                activeTab === tab.id
                  ? "border-[#2262EA] bg-[#2262EA] font-semibold text-white shadow-[0_8px_24px_rgba(34,98,234,0.25)]"
                  : "border-[#9D9D9D] bg-[#EFEFEF] text-[#5f5f5f] hover:text-[#2262EA]"
              }`}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-[#2262EA]"
                  style={{ zIndex: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <div className={panelClass}>
          <AnimatePresence mode="wait">
            {activeTab === "experiencia" ? (
              <motion.div
                key="experiencia"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="w-full">
                  <div className="hidden grid-cols-12 gap-6 pb-4 text-sm font-semibold text-neutral-500 md:grid">
                    <span className="col-span-3">Período</span>
                    <span className="col-span-4">Cargo</span>
                    <span className="col-span-2">Modalidad</span>
                    <span className="col-span-3">Empresa</span>
                  </div>
                  <motion.div variants={containerStagger} initial="hidden" animate="visible">
                    {experienceData.map((item) => (
                      <motion.div
                        key={`${item.date}-${item.company}`}
                        variants={fadeUp}
                        whileHover={{ x: 4 }}
                        className="border-t border-neutral-300 py-6 transition-all sm:py-7 md:grid md:grid-cols-12 md:items-start md:gap-6"
                      >
                        <div className="md:col-span-3">
                          <p className="mb-1 text-xs uppercase tracking-wider text-neutral-500 md:hidden">Período</p>
                          <p className="text-sm sm:text-base">{item.date}</p>
                        </div>
                        <div className="mt-4 md:col-span-4 md:mt-0">
                          <p className="mb-1 text-xs uppercase tracking-wider text-neutral-500 md:hidden">Cargo</p>
                          <p className="text-sm font-medium sm:text-base">{item.role}</p>
                        </div>
                        <div className="mt-4 md:col-span-2 md:mt-0">
                          <p className="mb-1 text-xs uppercase tracking-wider text-neutral-500 md:hidden">Modalidad</p>
                          <p className="text-sm text-neutral-600 sm:text-base">{item.type}</p>
                        </div>
                        <div className="mt-4 md:col-span-3 md:mt-0">
                          <p className="mb-1 text-xs uppercase tracking-wider text-neutral-500 md:hidden">Empresa</p>
                          <p className="text-sm sm:text-base">{item.company}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="habilidades"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <motion.div
                  variants={containerStagger}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7"
                >
                  {skillGroups.map((group) => {
                    const GroupIcon = group.icon;
                    return (
                      <motion.section
                        key={group.title}
                        variants={softScale}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        className={`rounded-[24px] border border-[#2262EA]/15 bg-gradient-to-br from-white to-[#F4F7FF] p-6 shadow-[0_10px_30px_rgba(34,98,234,0.08)] sm:p-7 ${
                          group.title === "Herramientas" ? "md:col-span-2 xl:col-span-1" : ""
                        }`}
                        aria-labelledby={`skill-group-${group.title.toLowerCase()}`}
                      >
                        <div className="mb-6 flex items-center gap-3 text-[#2262EA]">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#2262EA]/10">
                            <GroupIcon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                          </span>
                          <h3 id={`skill-group-${group.title.toLowerCase()}`} className="text-lg font-bold sm:text-xl">
                            {group.title}
                          </h3>
                        </div>
                        <div className={`grid ${group.gridClass} gap-x-4 gap-y-7 text-center`} role="list">
                          {group.skills.map((skill) => (
                            <motion.div
                              key={skill.name}
                              className="flex min-w-0 flex-col items-center"
                              whileHover={{ y: -4, scale: 1.04 }}
                              transition={{ type: "spring", stiffness: 260, damping: 18 }}
                              role="listitem"
                            >
                              <div className="grid h-14 w-14 place-items-center sm:h-16 sm:w-16">
                                <img
                                  src={skill.img}
                                  alt=""
                                  className="max-h-12 max-w-12 object-contain sm:max-h-14 sm:max-w-14"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                              <span className="mt-2 max-w-full whitespace-nowrap text-[10px] font-medium leading-tight text-neutral-700 sm:text-xs">
                                {skill.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.section>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

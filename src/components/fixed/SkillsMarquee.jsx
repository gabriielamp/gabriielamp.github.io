import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const lines = [
  { text: "DISEÑO WEB · UX / UI", reverse: false },
  { text: "DESARROLLO · E-COMMERCE", reverse: true },
];

function ScrollTextLine({ text, reverse, progress, reduceMotion }) {
  const forwardX = useTransform(progress, [0, 1], ["-5%", "-25%"]);
  const reverseX = useTransform(progress, [0, 1], ["-25%", "-5%"]);
  const x = reverse ? reverseX : forwardX;

  return (
    <div
      className="overflow-hidden py-1 sm:py-2"
      role="text"
      aria-label={text}
    >
      <motion.div
        className="flex w-max items-center whitespace-nowrap font-insaniburger text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[0.86] tracking-wide will-change-transform"
        style={reduceMotion ? undefined : { x }}
        aria-hidden="true"
      >
        {Array.from({ length: 10 }, (_, index) => (
          <span
            key={`${text}-${index}`}
            className={
              index % 2 === 0
                ? "mx-[0.12em] text-white"
                : "scroll-text-outline mx-[0.12em]"
            }
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsMarquee() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="scroll-skills-title"
      className="relative overflow-hidden bg-[#1E56F0] py-12 sm:py-14 lg:py-16"
    >
      <h2 id="scroll-skills-title" className="sr-only">
        Servicios de diseño y desarrollo web
      </h2>

      <div className="flex flex-col gap-2 sm:gap-3">
        {lines.map((line) => (
          <ScrollTextLine
            key={line.text}
            {...line}
            progress={scrollYProgress}
            reduceMotion={shouldReduceMotion}
          />
        ))}
      </div>
    </section>
  );
}

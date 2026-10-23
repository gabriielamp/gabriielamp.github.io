import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clientsLogos } from "../constants/clients";

const DEFAULT_VISIBLE_LOGOS = 4;
const ROTATION_INTERVAL = 3200;
const LOGO_TRANSITION = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1],
};

export default function ClientesCarousel({ variant = "section" }) {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isHeroVariant = variant === "hero";
  const isHeroBlueVariant = variant === "heroBlue";
  const isStandaloneBlue = variant === "standaloneBlue";
  const isEmbeddedVariant = isHeroVariant || isHeroBlueVariant;
  const visibleCount = isStandaloneBlue ? clientsLogos.length : DEFAULT_VISIBLE_LOGOS;
  const Wrapper = isEmbeddedVariant ? "aside" : "section";
  const Heading = isEmbeddedVariant ? "p" : "h2";

  useEffect(() => {
    if (
      shouldReduceMotion ||
      isStandaloneBlue ||
      isPaused ||
      clientsLogos.length < 2
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setRotation((currentRotation) => currentRotation + 1);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [isPaused, isStandaloneBlue, shouldReduceMotion]);

  const visibleLogos = Array.from(
    { length: Math.min(visibleCount, clientsLogos.length) },
    (_, slotIndex) => clientsLogos[(rotation + slotIndex) % clientsLogos.length],
  );

  return (
    <Wrapper
      className={
        isHeroVariant
          ? "relative z-10 mx-auto mb-8 w-11/12 max-w-6xl rounded-brand border border-brand-line bg-white py-4 shadow-brand sm:mb-10 sm:py-5"
          : isHeroBlueVariant
            ? "relative z-10 w-full bg-brand-blue py-6 text-white sm:py-5"
          : isStandaloneBlue
            ? "relative overflow-hidden bg-brand-blue py-10 text-white sm:py-12"
            : "bg-brand-soft py-12 text-center lg:py-14"
      }
      aria-labelledby="clientes-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        className={
          isHeroVariant
            ? "mx-auto flex w-full flex-col items-center gap-2 px-5 sm:px-8"
            : isHeroBlueVariant
              ? "mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 sm:gap-3 lg:flex-row lg:gap-10"
            : isStandaloneBlue
              ? "relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-5 sm:px-8 lg:px-10"
              : "mx-auto flex w-full max-w-6xl flex-col items-center px-6"
        }
      >
        <Heading
          id="clientes-title"
          className={
            isHeroVariant
              ? "font-poppins text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue sm:text-xs"
              : isHeroBlueVariant
                ? "max-w-[230px] shrink-0 text-center font-poppins text-xs font-bold uppercase leading-snug tracking-[0.16em] text-white lg:max-w-[190px] lg:text-left lg:text-[11px]"
              : isStandaloneBlue
                ? "text-center font-poppins text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm"
                : "font-poppins text-xs font-bold uppercase tracking-[0.18em] text-brand-blue"
          }
        >
          Empresas que confiaron en mi trabajo
        </Heading>

        <div
          className={
            isHeroVariant
              ? "w-full min-w-0"
              : isHeroBlueVariant
                ? "w-full min-w-0 flex-1"
              : isStandaloneBlue
                ? "mt-7 w-full"
                : "mt-4 w-full max-w-[1040px]"
          }
        >
          <div
            className={`relative w-full overflow-hidden ${
              isStandaloneBlue
                ? "h-[246px] sm:h-[164px] lg:h-[76px]"
                : isHeroBlueVariant
                ? "h-[72px] sm:h-[64px]"
                : isHeroVariant
                  ? "h-[64px]"
                  : "h-[76px]"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                isStandaloneBlue
                  ? "flex flex-wrap items-stretch justify-center"
                  : `grid grid-cols-2 place-items-center sm:grid-cols-4 ${
                      isEmbeddedVariant ? "gap-x-0" : "gap-x-4 md:gap-x-10"
                    }`
              }`}
            >
              {visibleLogos.map((logo, slotIndex) => (
                <div
                  key={slotIndex}
                  className={`relative items-center justify-center ${
                    isStandaloneBlue
                      ? "flex h-1/3 basis-1/2 sm:h-1/2 sm:basis-1/3 lg:h-full lg:basis-1/5"
                      : slotIndex > 1
                        ? "mx-auto hidden h-full w-full max-w-[220px] sm:flex"
                        : "mx-auto flex h-full w-full max-w-[220px]"
                  } ${
                    (isEmbeddedVariant || isStandaloneBlue) && slotIndex > 0
                      ? isHeroBlueVariant
                        ? "sm:border-l sm:border-white/25"
                        : isStandaloneBlue
                          ? "lg:border-l lg:border-white/25"
                        : "border-l border-brand-blue/10"
                      : ""
                  }`}
                >
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={logo.id}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 12 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: -12 }
                      }
                      transition={{
                        ...LOGO_TRANSITION,
                        delay: shouldReduceMotion ? 0 : slotIndex * 0.12,
                      }}
                    >
                      <span
                        className={`flex w-full items-center justify-center ${
                          isEmbeddedVariant ? "h-12 md:h-14" : "h-14 md:h-16"
                        }`}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          loading="lazy"
                          style={
                            isHeroVariant
                              ? {
                                  filter:
                                    "brightness(0) saturate(100%) invert(35%) sepia(92%) saturate(2930%) hue-rotate(216deg) brightness(96%) contrast(90%)",
                                }
                              : isHeroBlueVariant || isStandaloneBlue
                                ? {
                                    filter:
                                      "brightness(0) saturate(100%) invert(100%)",
                                  }
                                : undefined
                          }
                          className={`max-w-full object-contain transition-opacity ${logo.mobileClassName || ""} ${
                            isHeroVariant
                              ? "max-h-8 opacity-90 md:max-h-11"
                              : isHeroBlueVariant || isStandaloneBlue
                                ? "max-h-10 opacity-95 sm:max-h-8 md:max-h-11"
                                : "max-h-10 grayscale brightness-0 opacity-80 md:max-h-11"
                          }`}
                        />
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export const editorialMotion = {
  ease: [0.22, 1, 0.36, 1],
  duration: 0.62,
  viewport: { once: true, amount: 0.24 },
};

export const editorialRevealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: editorialMotion.duration,
      ease: editorialMotion.ease,
    },
  },
};

export const editorialStaggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const editorialStickerVariants = {
  hidden: { opacity: 0, rotate: -4, y: 16, scale: 0.94 },
  visible: {
    opacity: 1,
    rotate: -2,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.52,
      ease: editorialMotion.ease,
    },
  },
};

export const editorialImageVariants = {
  hidden: { opacity: 0, clipPath: "inset(8% 8% 8% 8%)", y: 24 },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: {
      duration: 0.72,
      ease: editorialMotion.ease,
    },
  },
};

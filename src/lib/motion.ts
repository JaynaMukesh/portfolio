export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export const lift = {
  hidden: { y: 16 },
  show: {
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const view = { once: true, amount: 0.35 } as const;

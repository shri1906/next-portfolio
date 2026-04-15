// src/lib/animations.ts
import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const slideInFromLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideInFromRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideInFromTopVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideInFromBottomVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  show: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const bounceInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export const pulseVariants: Variants = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const floatVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const shimmerVariants: Variants = {
  animate: {
    backgroundPosition: ['200% center', '-200% center'],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

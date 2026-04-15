// src/components/ui/Card.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'elevated' | 'glass';
  hover?: 'lift' | 'glow' | 'scale' | 'none';
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      hover = 'lift',
      interactive = false,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default:
        'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800',
      outline:
        'bg-transparent border-2 border-slate-300 dark:border-slate-700',
      elevated:
        'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-lg',
      glass:
        'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/20 dark:border-slate-800/20',
    };

    const hoverEffects = {
      lift: 'hover:shadow-xl dark:hover:shadow-xl hover:-translate-y-2',
      glow: 'hover:shadow-glow dark:hover:shadow-dark-glow hover:border-cyan-500 dark:hover:border-cyan-500',
      scale: 'hover:scale-105',
      none: '',
    };

    const cardClasses = cn(
      'rounded-2xl transition-all duration-300 p-6',
      variants[variant],
      interactive && hoverEffects[hover],
      className
    );

    const Component = interactive ? motion.div : 'div';

    return (
      <Component
        ref={ref}
        whileHover={interactive ? { y: hover === 'lift' ? -8 : undefined } : {}}
        className={cardClasses}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

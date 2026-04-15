// src/components/ui/Badge.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      outline = false,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: outline
        ? 'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700/40'
        : 'bg-cyan-500 text-white',
      secondary: outline
        ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700/40'
        : 'bg-blue-500 text-white',
      success: outline
        ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700/40'
        : 'bg-green-500 text-white',
      warning: outline
        ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-700/40'
        : 'bg-yellow-500 text-white',
      error: outline
        ? 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700/40'
        : 'bg-red-500 text-white',
      info: outline
        ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700/40'
        : 'bg-purple-500 text-white',
    };

    const sizes = {
      sm: 'px-2 py-1 text-xs font-medium rounded',
      md: 'px-3 py-1.5 text-sm font-semibold rounded-lg',
      lg: 'px-4 py-2 text-base font-bold rounded-lg',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 transition-colors duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

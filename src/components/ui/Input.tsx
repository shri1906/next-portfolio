// src/components/ui/Input.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'outline' | 'filled';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, error, icon, variant = 'default', ...props },
    ref
  ) => {
    const variants = {
      default:
        'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400',
      outline:
        'bg-transparent border-2 border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400',
      filled:
        'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:bg-slate-50 dark:focus:bg-slate-900',
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-600">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-3 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed',
              variants[variant],
              icon && 'pl-10',
              error && 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500',
              className
            )}
            {...props}
          />
        </div>

        {error && (
          <p className="mt-2 text-sm font-medium text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

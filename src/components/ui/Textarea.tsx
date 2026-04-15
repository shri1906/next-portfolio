// src/components/ui/Textarea.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/cn';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'outline' | 'filled';
  maxLength?: number;
  showCount?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      variant = 'default',
      maxLength,
      showCount = false,
      ...props
    },
    ref
  ) => {
    const [count, setCount] = React.useState(0);

    const variants = {
      default:
        'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400',
      outline:
        'bg-transparent border-2 border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400',
      filled:
        'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:bg-slate-50 dark:focus:bg-slate-900',
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setCount(e.target.value.length);
      props.onChange?.(e);
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          maxLength={maxLength}
          className={cn(
            'w-full px-4 py-3 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed resize-none',
            variants[variant],
            error &&
              'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500',
            className
          )}
          onChange={handleChange}
          {...props}
        />

        <div className="flex items-center justify-between mt-2">
          {error && (
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              {error}
            </p>
          )}

          {showCount && maxLength && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {count} / {maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

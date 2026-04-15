import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

type CardProps = React.ComponentProps<typeof motion.div> & {
  hover?: 'lift' | 'none';
  interactive?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = 'lift', interactive = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={interactive ? { y: hover === 'lift' ? -8 : 0 } : {}}
        className={cn(
          'rounded-xl border p-6 transition-all',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
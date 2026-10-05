import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
  ...props
}) => {
  // Use motion.create if available or fallback to motion[tag]
  // Framer Motion 11+ has motion.create(Component)
  const MotionComponent = React.useMemo(() => {
    if (typeof (motion as unknown as { create?: (tag: string) => typeof motion.div }).create === 'function') {
      return (motion as unknown as { create: (tag: string) => typeof motion.div }).create(as);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (motion as any)[as] || motion.div;
  }, [as]);

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  withContainer?: boolean;
  animated?: boolean;
}

export function Section({ 
  children, 
  className = '', 
  id, 
  withContainer = true,
  animated = true 
}: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = withContainer ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  ) : children;

  if (animated) {
    return (
      <motion.section
        ref={ref}
        id={id}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {content}
      </motion.section>
    );
  }

  return (
    <section id={id} className={className}>
      {content}
    </section>
  );
}
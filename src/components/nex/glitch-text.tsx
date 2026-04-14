'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export function GlitchText({
  children,
  className = '',
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  const text = typeof children === 'string' ? children : '';

  if (!text) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={`relative inline-block ${hover ? 'hover-glitch' : ''} ${className}`}
      data-text={text}
      whileHover={hover ? { scale: 1.02 } : undefined}
    >
      {text}
    </motion.span>
  );
}

export function SectionReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

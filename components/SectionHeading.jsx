'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
  theme = 'light',
  action,
}) {
  const isCentered = align === 'center';
  const isDark = theme === 'dark';

  return (
    <motion.div
      className={`mb-12 flex flex-col gap-6 md:mb-16 ${
        isCentered ? 'items-center text-center' : 'items-start'
      } lg:flex-row lg:items-end lg:justify-between ${isCentered ? 'lg:text-center' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={isCentered ? 'max-w-3xl' : 'max-w-4xl'}>
        {eyebrow && (
          <p className={`eyebrow mb-4 ${isDark ? 'text-white/50' : 'text-brand-blue'}`}>
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-heading text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl ${
            isDark ? 'text-brand-white' : 'text-brand-ink'
          }`}
        >
          {title}
        </h2>
      </div>
      {text && (
        <p
          className={`max-w-xl text-base leading-8 ${
            isDark ? 'text-white/66' : 'text-brand-ink/66'
          } ${isCentered ? 'lg:mx-auto' : ''}`}
        >
          {text}
        </p>
      )}
      {action && <div className="shrink-0">{action}</div>}
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '@/data/process';

export default function ProcessTimeline({ compact = false }) {
  return (
    <div
      className={`grid gap-3 ${
        compact
          ? 'md:grid-cols-2 xl:grid-cols-5'
          : 'md:grid-cols-2 lg:grid-cols-5'
      }`}
    >
      {processSteps.map((step, index) => (
        <motion.div
          key={step}
          className="group relative border border-brand-ink/12 bg-white/55 p-5 transition duration-500 hover:border-brand-blue hover:bg-white"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-heading text-xs font-semibold text-brand-blue">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-5 min-h-12 font-heading text-xl font-light leading-tight text-brand-ink">
            {step}
          </h3>
          {index < processSteps.length - 1 && (
            <ArrowRight
              className="absolute right-4 top-5 hidden h-4 w-4 text-brand-ink/28 transition group-hover:translate-x-1 group-hover:text-brand-blue lg:block"
              aria-hidden="true"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

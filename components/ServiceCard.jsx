'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service, index = 0, theme = 'dark' }) {
  const isDark = theme === 'dark';

  return (
    <motion.article
      className={`group flex min-h-[340px] flex-col justify-between border p-7 transition duration-500 ease-premium ${
        isDark
          ? 'border-white/12 bg-white/[0.035] hover:border-white/34 hover:bg-white/[0.07]'
          : 'border-brand-ink/12 bg-white/50 hover:border-brand-ink/28 hover:bg-white'
      }`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <div>
        <div className="flex items-start justify-between gap-6">
          <span
            className={`font-heading text-sm font-semibold ${
              isDark ? 'text-white/38' : 'text-brand-ink/38'
            }`}
          >
            {service.number}
          </span>
          <span
            className={`grid h-11 w-11 place-items-center border transition duration-500 ${
              isDark
                ? 'border-white/16 text-brand-blue group-hover:border-brand-blue'
                : 'border-brand-ink/12 text-brand-blue group-hover:border-brand-blue'
            }`}
          >
            <ServiceIcon name={service.icon} />
          </span>
        </div>
        <h3
          className={`mt-8 font-heading text-2xl font-light leading-tight ${
            isDark ? 'text-brand-white' : 'text-brand-ink'
          }`}
        >
          {service.title}
        </h3>
        <p className={`mt-5 leading-7 ${isDark ? 'text-white/58' : 'text-brand-ink/62'}`}>
          {service.summary}
        </p>
      </div>
      <Link
        href={`/services#${service.slug}`}
        className={`mt-8 inline-flex items-center gap-3 text-sm font-semibold ${
          isDark ? 'text-white' : 'text-brand-ink'
        }`}
        aria-label={`View ${service.title} service details`}
      >
        View service
        <ArrowRight
          className="h-4 w-4 transition duration-500 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </motion.article>
  );
}

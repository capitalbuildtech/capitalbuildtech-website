'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function LargeTypography() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-24%']);

  return (
    <section ref={ref} className="overflow-hidden bg-brand-deep py-24 text-brand-white md:py-32">
      <div className="mb-10 border-y border-white/10 py-6">
        <motion.p
          style={{ x }}
          className="whitespace-nowrap font-heading text-[18vw] font-light uppercase leading-none text-outline md:text-[11vw]"
        >
          Built with Precision | Designed to Last | Built with Precision | Designed to Last
        </motion.p>
      </div>
      <div className="container-outer grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <p className="eyebrow text-white/42">Integrated Discipline</p>
        <p className="max-w-4xl text-2xl font-light leading-10 text-white/76 md:text-4xl md:leading-[1.35]">
          Engineering, construction, and infrastructure thinking brought together
          from concept to handover.
        </p>
      </div>
    </section>
  );
}

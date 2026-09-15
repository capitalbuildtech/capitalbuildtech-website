'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PageHero({ eyebrow, title, subtitle, image, alt }) {
  return (
    <section className="relative isolate min-h-[64svh] overflow-hidden bg-brand-deep pt-28 text-brand-white">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/82 via-black/58 to-black/32" />
      <div className="container-outer flex min-h-[calc(64svh-7rem)] items-end pb-16">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <p className="eyebrow mb-5 text-white/60">{eyebrow}</p>}
          <h1 className="font-heading text-5xl font-light leading-[1.02] sm:text-6xl lg:text-8xl">
            {title}
          </h1>
          {subtitle && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}

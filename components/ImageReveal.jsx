'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionImage = motion.create ? motion.create(Image) : motion(Image);

export default function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
}) {
  return (
    <motion.figure
      className={`relative overflow-hidden bg-brand-ink/10 ${className}`}
      initial={{ clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <MotionImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover transition duration-700 ease-premium ${imgClassName}`}
        whileHover={{ scale: 1.035 }}
      />
    </motion.figure>
  );
}

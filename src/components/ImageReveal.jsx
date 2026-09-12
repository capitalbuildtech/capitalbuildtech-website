import { motion } from 'framer-motion';

export default function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  return (
    <motion.figure
      className={`overflow-hidden bg-brand-ink/10 ${className}`}
      initial={{ clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className={`image-cover min-h-full transition duration-700 ease-premium ${imgClassName}`}
        whileHover={{ scale: 1.035 }}
      />
    </motion.figure>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function CommitmentsGrid({ items }) {
  return (
    <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
      {items.map((item, index) => (
        <motion.div
          key={item}
          className="bg-brand-deep p-5 text-white/72"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.04 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

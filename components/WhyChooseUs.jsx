'use client';

import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Clock,
  HardHat,
  MessageSquareText,
  ShieldCheck,
  Users,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const items = [
  ['Quality Without Compromise', BadgeCheck],
  ['Professional Engineering Solutions', HardHat],
  ['Client-Focused Service', Users],
  ['Transparent Communication', MessageSquareText],
  ['Timely Project Execution', Clock],
  ['Safety & Technical Compliance', ShieldCheck],
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-brand-deep text-brand-white">
      <div className="container-outer">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Capital BuildTech"
          text="A clear commitment to quality, communication, technical discipline, and responsible execution."
          theme="dark"
        />
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {items.map(([label, Icon], index) => (
            <motion.article
              key={label}
              className="group min-h-56 bg-brand-deep p-7 transition duration-500 hover:bg-brand-dark"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <Icon className="h-8 w-8 text-brand-blue" aria-hidden="true" />
              <h3 className="mt-12 max-w-xs font-heading text-2xl font-light leading-tight text-brand-white">
                {label}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

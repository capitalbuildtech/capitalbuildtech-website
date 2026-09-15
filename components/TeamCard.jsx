'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function TeamCard({ member, index = 0, detailed = false }) {
  return (
    <motion.article
      className="grid overflow-hidden border border-brand-ink/12 bg-white md:grid-cols-[0.8fr_1.2fr]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex min-h-80 items-end overflow-hidden bg-brand-deep p-7 text-brand-white">
        <div className="absolute inset-0 architectural-grid opacity-55" aria-hidden="true" />
        <div className="absolute left-8 top-8 h-28 w-28 border border-white/14" aria-hidden="true" />
        <div className="absolute right-10 top-16 h-36 w-24 border border-brand-blue/45" aria-hidden="true" />
        <div className="relative">
          <span className="grid h-24 w-24 place-items-center border border-white/22 font-heading text-3xl font-light tracking-[0.14em]">
            {member.initials}
          </span>
          <p className="mt-5 text-sm text-white/50">Portrait placeholder</p>
        </div>
      </div>
      <div className="p-7 md:p-9">
        <p className="eyebrow text-brand-blue">{member.position}</p>
        <h3 className="mt-4 font-heading text-3xl font-light leading-tight text-brand-ink">
          {member.name}
        </h3>
        <ul className="mt-6 space-y-2 text-sm leading-6 text-brand-ink/64">
          {member.credentials.map((credential) => (
            <li key={credential}>{credential}</li>
          ))}
        </ul>
        {(detailed || member.bio) && (
          <p className="mt-6 leading-7 text-brand-ink/62">{member.bio}</p>
        )}
        <div className="mt-7 space-y-3 border-t border-brand-ink/10 pt-6 text-sm">
          <a
            href={`tel:${member.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 text-brand-ink/68 transition hover:text-brand-blue"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {member.phone}
          </a>
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-3 break-all text-brand-ink/68 transition hover:text-brand-blue"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            {member.email}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

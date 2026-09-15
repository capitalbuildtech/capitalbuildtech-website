'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      layout
      className="group overflow-hidden border border-brand-ink/12 bg-white"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.title}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-ink/10">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 ease-premium group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="eyebrow text-brand-blue">{project.type}</span>
            <span className="grid h-10 w-10 shrink-0 place-items-center border border-brand-ink/12 transition duration-500 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
          <h3 className="font-heading text-2xl font-light leading-tight text-brand-ink">
            {project.title}
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-brand-ink/58">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
            <span>{project.location}</span>
          </p>
          <div className="mt-6 border-t border-brand-ink/10 pt-5 text-sm text-brand-ink/58">
            {project.status}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

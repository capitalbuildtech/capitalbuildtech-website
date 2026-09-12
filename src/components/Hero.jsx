import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { company } from '../data/company.js';
import ButtonLink from './ButtonLink.jsx';

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-brand-deep text-brand-white">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
        alt="Modern high-rise architecture viewed from below"
        className="absolute inset-0 -z-30 image-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black/86 via-black/58 to-black/22" />
      <div className="absolute inset-0 -z-10 architectural-grid opacity-45" aria-hidden="true" />

      <div className="container-outer flex min-h-screen items-end pb-20 pt-28">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow text-white/58">{company.displayName}</p>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-brand-blue">
              Building Design | Engineering | Construction
            </p>
            <h1 className="mt-8 max-w-5xl font-heading text-5xl font-light leading-[0.98] sm:text-7xl lg:text-8xl xl:text-9xl">
              Engineering the Future. Building with Purpose.
            </h1>
          </motion.div>

          <motion.div
            className="max-w-xl lg:justify-self-end"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg leading-8 text-white/72">
              Professional building design, engineering, construction management,
              site supervision, and project implementation solutions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink to="/services" variant="light">
                Explore Our Services
              </ButtonLink>
              <ButtonLink to="/projects" variant="light">
                View Projects
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/44 md:flex">
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
        Scroll
      </div>
    </section>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { company } from '../data/company.js';
import BrandLogo from './BrandLogo.jsx';

export default function MobileMenu({ open, onClose, navItems }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="site-menu"
          className="fixed inset-0 z-[60] overflow-y-auto bg-brand-deep text-brand-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="absolute inset-0 architectural-grid opacity-60" aria-hidden="true" />
          <div className="container-outer relative z-10 flex min-h-screen flex-col py-6">
            <div className="flex items-center justify-between">
              <BrandLogo inverted onClick={onClose} />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center border border-white/24 transition duration-300 hover:border-white/60 hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
              <nav className="space-y-3" aria-label="Menu navigation">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.055, duration: 0.55 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `group flex items-center justify-between border-b border-white/12 py-5 font-heading text-4xl font-light uppercase leading-none transition duration-500 hover:border-white/40 hover:text-white sm:text-6xl ${
                          isActive ? 'text-white' : 'text-white/62'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className="h-6 w-6 transition duration-500 group-hover:translate-x-2"
                        aria-hidden="true"
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.aside
                className="border border-white/12 bg-white/[0.04] p-7 md:p-10"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.65 }}
              >
                <p className="eyebrow text-white/44">Start a project</p>
                <h2 className="mt-5 font-heading text-3xl font-light leading-tight md:text-5xl">
                  {company.tagline}
                </h2>
                <p className="mt-6 max-w-lg leading-8 text-white/62">
                  Professional building design, engineering, construction management,
                  site supervision, and project implementation solutions.
                </p>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="group mt-8 inline-flex items-center gap-3 border border-white/28 px-5 py-3 text-sm font-semibold transition duration-500 hover:border-white/60 hover:bg-white/10"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </motion.aside>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

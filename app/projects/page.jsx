'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projectCategories, projects } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const searchTarget = `${project.title} ${project.type} ${project.location} ${project.status}`.toLowerCase();
      return matchesCategory && searchTarget.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <AnimatedPage>
      <PageHero
        eyebrow="Projects"
        title="Project portfolio"
        subtitle="Sample entries are clearly labeled until actual project information is supplied."
        image="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=2200&q=85"
        alt="Architectural skyline used for project portfolio page"
      />

      <section className="section-pad bg-brand-white">
        <div className="container-outer">
          <SectionHeading
            eyebrow="Portfolio"
            title="Search and filter project data"
            text="The portfolio is driven from a central data file so verified projects can be added without rebuilding the page."
          />

          <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-center">
            <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-11 shrink-0 border px-5 text-sm font-semibold transition duration-300 ${
                    activeCategory === category
                      ? 'border-brand-blue bg-brand-blue text-white'
                      : 'border-brand-ink/14 bg-white text-brand-ink/68 hover:border-brand-ink/34 hover:text-brand-ink'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="relative block">
              <span className="sr-only">Search projects</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink/38"
                aria-hidden="true"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects"
                className="h-12 w-full border border-brand-ink/14 bg-white pl-11 pr-4 text-brand-ink transition focus:border-brand-blue focus:outline-none"
              />
            </label>
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="border border-brand-ink/12 bg-brand-light p-10 text-center text-brand-ink/62">
              No project placeholders match the current filter.
            </div>
          )}
        </div>
      </section>
    </AnimatedPage>
  );
}

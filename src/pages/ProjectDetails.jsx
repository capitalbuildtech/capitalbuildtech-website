import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../data/projects.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <AnimatedPage>
        <SEO title="Project Not Found | Capital BuildTech Engineering" />
        <section className="min-h-screen bg-brand-white pt-36">
          <div className="container-outer max-w-3xl">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Projects
            </Link>
            <h1 className="mt-8 font-heading text-5xl font-light text-brand-ink">
              Project not found.
            </h1>
            <p className="mt-5 leading-8 text-brand-ink/62">
              This route does not match an available project entry.
            </p>
          </div>
        </section>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <SEO
        title={`${project.title} | Capital BuildTech Engineering`}
        description={project.overview}
        image={project.image}
      />
      <PageHero
        eyebrow={project.type}
        title={project.title}
        subtitle={`${project.location} | ${project.status}`}
        image={project.image}
        alt={project.imageAlt}
      />

      <section className="section-pad bg-brand-white">
        <div className="container-outer grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Projects
            </Link>
            <div className="mt-8 border border-brand-ink/12 bg-brand-light p-6">
              <h2 className="eyebrow text-brand-ink/48">Project Specifications</h2>
              <dl className="mt-6 space-y-5">
                {project.specifications.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/42">
                      {label}
                    </dt>
                    <dd className="mt-1 text-brand-ink/72">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <div>
            <SectionHeading
              eyebrow="Overview"
              title="Project information"
              text="This detail page is powered by the central project data file and can be updated with verified project records."
            />
            <p className="text-xl leading-9 text-brand-ink/68">{project.overview}</p>

            <h2 className="mt-14 font-heading text-3xl font-light text-brand-ink">
              Scope of Work
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border border-brand-ink/10 bg-white p-5 text-brand-ink/68"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-heading text-3xl font-light text-brand-ink">Gallery</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {project.gallery.map((image, index) => (
                <figure
                  key={image}
                  className={`${index === 0 ? 'md:col-span-2' : ''} aspect-[4/3] overflow-hidden bg-brand-ink/10`}
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery placeholder ${index + 1}`}
                    loading="lazy"
                    className="image-cover"
                  />
                </figure>
              ))}
            </div>

            <div className="mt-14 border border-brand-ink/12 bg-brand-deep p-8 text-brand-white">
              <p className="eyebrow text-brand-blue">Next Step</p>
              <h2 className="mt-5 font-heading text-4xl font-light">
                Add verified project data or start a new conversation.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/62">
                Once real project details are supplied, this page can present the
                verified overview, scope, specifications, and gallery.
              </p>
              <div className="mt-8">
                <ButtonLink to="/contact" variant="light">
                  Start a Conversation
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

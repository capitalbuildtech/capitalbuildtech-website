import { projects } from '@/data/projects';
import ButtonLink from './ButtonLink';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function ProjectsShowcase() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="section-pad bg-brand-white">
      <div className="container-outer">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Project showcase ready for verified work"
          text="Sample portfolio entries are clearly labeled until Capital BuildTech Engineering supplies actual project information."
          action={
            <ButtonLink to="/projects">
              View All Projects
            </ButtonLink>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { company } from '@/data/company';
import ButtonLink from './ButtonLink';
import ImageReveal from './ImageReveal';

export default function HomeIntro() {
  return (
    <section className="section-pad bg-brand-light light-grid">
      <div className="container-outer grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="eyebrow text-brand-blue">Company</p>
          <h2 className="mt-5 font-heading text-4xl font-light leading-[1.05] text-brand-ink sm:text-6xl">
            Building with Purpose
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-brand-ink/68">
            <p>{company.description}</p>
            <p>{company.since}</p>
          </div>
          <div className="mt-9">
            <ButtonLink to="/about">Learn More</ButtonLink>
          </div>
        </div>
        <ImageReveal
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85"
          alt="Architectural plans and design tools on a working table"
          className="aspect-[4/5] lg:aspect-[5/4]"
        />
      </div>
    </section>
  );
}

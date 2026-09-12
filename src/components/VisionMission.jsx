import { company } from '../data/company.js';
import SectionHeading from './SectionHeading.jsx';

export default function VisionMission() {
  return (
    <section className="section-pad bg-brand-white">
      <div className="container-outer">
        <SectionHeading
          eyebrow="Direction"
          title="Vision and Mission"
          text="A focused view of how Capital BuildTech Engineering defines long-term trust, better buildings, and client value."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="border border-brand-ink/12 bg-brand-light p-8 md:p-10">
            <p className="eyebrow text-brand-blue">Vision</p>
            <p className="mt-10 font-heading text-3xl font-light leading-[1.25] text-brand-ink md:text-4xl">
              {company.vision}
            </p>
          </article>
          <article className="border border-brand-ink/12 bg-brand-ink p-8 text-brand-white md:p-10">
            <p className="eyebrow text-brand-blue">Mission</p>
            <p className="mt-10 font-heading text-3xl font-light leading-[1.25] text-brand-white/88 md:text-4xl">
              {company.mission}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

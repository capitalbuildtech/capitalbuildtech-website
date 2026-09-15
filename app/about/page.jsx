import AnimatedPage from '@/components/AnimatedPage';
import ButtonLink from '@/components/ButtonLink';
import CommitmentsGrid from '@/components/CommitmentsGrid';
import ImageReveal from '@/components/ImageReveal';
import PageHero from '@/components/PageHero';
import ProcessTimeline from '@/components/ProcessTimeline';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import VisionMission from '@/components/VisionMission';
import { company } from '@/data/company';
import { team } from '@/data/team';

export const metadata = {
  title: 'About',
  description:
    'Learn about Capital BuildTech Engineering, a building design and construction service provider delivering practical engineering solutions since 2019.',
};

const commitments = [
  'Quality Without Compromise',
  'Professional Engineering Solutions',
  'Client-Focused Service',
  'Transparent Communication',
  'Timely Project Execution',
  'Safety & Technical Compliance',
  'Long-Term Customer Support',
];

export default function About() {
  return (
    <AnimatedPage>
      <PageHero
        eyebrow="About"
        title="About Capital BuildTech Engineering"
        subtitle="Building Design | Engineering | Construction"
        image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=85"
        alt="Architectural facade detail"
      />

      <section className="section-pad bg-brand-white">
        <div className="container-outer grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-brand-blue">Company Overview</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-[1.06] text-brand-ink sm:text-6xl">
              Reliable, practical engineering solutions since 2019.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-brand-ink/68">
            <p>{company.description}</p>
            <p>{company.since}</p>
            <p>{company.objective}</p>
            <p>{company.approach}</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-light light-grid">
        <div className="container-outer">
          <SectionHeading
            eyebrow="Approach"
            title="From concept through handover"
            text="Every project moves through a clear sequence so client requirements, drawings, site activity, supervision, and final delivery remain aligned."
          />
          <ProcessTimeline compact />
        </div>
      </section>

      <section className="section-pad bg-brand-deep text-brand-white">
        <div className="container-outer grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ImageReveal
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1600&q=85"
            alt="Construction management team reviewing building progress"
            className="aspect-[5/4]"
          />
          <div>
            <p className="eyebrow text-brand-blue">Our Commitment</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-[1.08] sm:text-6xl">
              Disciplined delivery with client value at the center.
            </h2>
            <CommitmentsGrid items={commitments} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-white">
        <div className="container-outer">
          <SectionHeading
            eyebrow="Team"
            title="Our Team"
            text="Profiles use only the team information supplied for Capital BuildTech Engineering."
            action={<ButtonLink to="/team">View Team</ButtonLink>}
          />
          <div className="grid gap-6 xl:grid-cols-2">
            {team.map((member, index) => (
              <TeamCard key={member.email} member={member} index={index} detailed />
            ))}
          </div>
        </div>
      </section>

      <VisionMission />
    </AnimatedPage>
  );
}

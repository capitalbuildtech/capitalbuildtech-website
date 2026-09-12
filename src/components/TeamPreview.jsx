import { team } from '../data/team.js';
import ButtonLink from './ButtonLink.jsx';
import SectionHeading from './SectionHeading.jsx';
import TeamCard from './TeamCard.jsx';

export default function TeamPreview() {
  return (
    <section className="section-pad bg-brand-light">
      <div className="container-outer">
        <SectionHeading
          eyebrow="Our Team"
          title="Engineering knowledge and project coordination"
          text="A multidisciplinary team combining engineering knowledge, practical site experience, and professional project coordination."
          action={
            <ButtonLink to="/team">
              Meet the Team
            </ButtonLink>
          }
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {team.map((member, index) => (
            <TeamCard key={member.email} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import AnimatedPage from '../components/AnimatedPage.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { team } from '../data/team.js';

export default function Team() {
  return (
    <AnimatedPage>
      <SEO
        title="Team | Capital BuildTech Engineering"
        description="Meet the Capital BuildTech Engineering team profiles supplied for the website."
      />
      <PageHero
        eyebrow="Team"
        title="Our Team"
        subtitle="A multidisciplinary team combining engineering knowledge, practical site experience, and professional project coordination."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2200&q=85"
        alt="Professional engineering team meeting around plans"
      />

      <section className="section-pad bg-brand-white">
        <div className="container-outer">
          <SectionHeading
            eyebrow="Profiles"
            title="Civil engineering leadership"
            text="The page uses only the supplied names, credentials, contacts, and roles. Portraits can be replaced with real photos later."
          />
          <div className="grid gap-7 xl:grid-cols-2">
            {team.map((member, index) => (
              <TeamCard key={member.email} member={member} index={index} detailed />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

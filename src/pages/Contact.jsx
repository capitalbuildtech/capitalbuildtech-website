import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage.jsx';
import ContactForm from '../components/ContactForm.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { company } from '../data/company.js';

export default function Contact() {
  return (
    <AnimatedPage>
      <SEO
        title="Contact | Capital BuildTech Engineering"
        description="Contact Capital BuildTech Engineering for building design, engineering, construction management, site supervision, and project implementation requirements."
      />
      <PageHero
        eyebrow="Contact"
        title="Start a Conversation"
        subtitle="Talk to the engineering team about building design, construction, or project requirements."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85"
        alt="Modern office and architectural workspace"
      />

      <section className="section-pad bg-brand-light light-grid">
        <div className="container-outer">
          <SectionHeading
            eyebrow="Capital BuildTech Engineering"
            title="Let's Build Something Better."
            text="Use the form for project inquiries, or contact the team directly by phone or email."
          />

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="space-y-5">
              <div className="border border-brand-ink/12 bg-white p-7">
                <Phone className="h-7 w-7 text-brand-blue" aria-hidden="true" />
                <h2 className="mt-6 font-heading text-2xl font-light">Phone</h2>
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="mt-3 block text-brand-ink/68 transition hover:text-brand-blue"
                >
                  {company.phone}
                </a>
              </div>
              <div className="border border-brand-ink/12 bg-white p-7">
                <Mail className="h-7 w-7 text-brand-blue" aria-hidden="true" />
                <h2 className="mt-6 font-heading text-2xl font-light">Email</h2>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-3 block break-all text-brand-ink/68 transition hover:text-brand-blue"
                >
                  {company.email}
                </a>
              </div>
              <div className="border border-brand-ink/12 bg-brand-deep p-7 text-brand-white">
                <MapPin className="h-7 w-7 text-brand-blue" aria-hidden="true" />
                <h2 className="mt-6 font-heading text-2xl font-light">Map Placeholder</h2>
                <p className="mt-3 leading-7 text-white/62">
                  Office location has not been supplied. This area is ready for an
                  embedded map when a verified address is available.
                </p>
              </div>
            </aside>

            <div className="border border-brand-ink/12 bg-white p-7 md:p-10">
              <h2 className="font-heading text-3xl font-light text-brand-ink">
                Project Inquiry
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-brand-ink/62">
                Share the basics of your requirement and the team can follow up
                through the supplied contact details.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

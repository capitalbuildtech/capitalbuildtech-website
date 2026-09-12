import ButtonLink from './ButtonLink.jsx';

export default function ContactCTA() {
  return (
    <section className="bg-brand-deep py-20 text-brand-white">
      <div className="container-outer border-y border-white/12 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow text-brand-blue">Contact</p>
            <h2 className="mt-5 font-heading text-5xl font-light leading-[1.04] sm:text-7xl">
              Let&apos;s Build Something Better.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/66">
              Have a project in mind? Talk to our engineering team about your
              building design, construction, or project requirements.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink to="/contact" variant="light">
                Start a Conversation
              </ButtonLink>
              <ButtonLink to="/services" variant="light">
                View Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

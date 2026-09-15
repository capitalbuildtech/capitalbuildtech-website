import AnimatedPage from '@/components/AnimatedPage';
import ButtonLink from '@/components/ButtonLink';
import ImageReveal from '@/components/ImageReveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ServiceIcon from '@/components/ServiceIcon';
import { services } from '@/data/services';

export const metadata = {
  title: 'Services',
  description:
    'Explore Capital BuildTech Engineering services including architectural design, structural design, electrical design, plumbing design, construction management, supervision, and project implementation.',
};

export default function Services() {
  return (
    <AnimatedPage>
      <PageHero
        eyebrow="Services"
        title="Design, engineering, supervision, and implementation"
        subtitle="Integrated engineering and construction solutions from concept to completion."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=85"
        alt="Concrete and steel building structure under construction"
      />

      <section className="section-pad bg-brand-white">
        <div className="container-outer">
          <SectionHeading
            eyebrow="What We Do"
            title="Six connected service disciplines"
            text="Each service area is structured so real project scopes, drawings, and deliverables can be extended without changing the page design."
          />
          <div className="space-y-8">
            {services.map((service, index) => (
              <article
                id={service.slug}
                key={service.slug}
                className={`grid scroll-mt-28 overflow-hidden border border-brand-ink/12 bg-white lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
                }`}
              >
                <ImageReveal
                  src={service.image}
                  alt={service.imageAlt}
                  className="min-h-[360px]"
                />
                <div className="p-7 md:p-10 lg:p-12">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-heading text-sm font-semibold text-brand-blue">
                        {service.number}
                      </p>
                      <h2 className="mt-4 font-heading text-4xl font-light leading-tight text-brand-ink">
                        {service.title}
                      </h2>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-brand-ink/12 text-brand-blue">
                      <ServiceIcon name={service.icon} />
                    </span>
                  </div>
                  <p className="mt-7 text-lg leading-8 text-brand-ink/66">{service.description}</p>
                  <h3 className="mt-9 text-sm font-semibold uppercase tracking-[0.16em] text-brand-ink/48">
                    Services included
                  </h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.included.map((item) => (
                      <li key={item} className="border-l border-brand-blue pl-4 text-brand-ink/68">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9">
                    <ButtonLink to="/contact">Discuss This Service</ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

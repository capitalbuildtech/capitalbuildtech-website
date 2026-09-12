import { services } from '../data/services.js';
import ButtonLink from './ButtonLink.jsx';
import SectionHeading from './SectionHeading.jsx';
import ServiceCard from './ServiceCard.jsx';

export default function ServicesPreview() {
  return (
    <section className="section-pad bg-brand-deep text-brand-white">
      <div className="container-outer">
        <SectionHeading
          eyebrow="What We Do"
          title="Integrated engineering and construction solutions"
          text="From concept to completion, the service structure keeps design, engineering, site coordination, and execution connected."
          theme="dark"
          action={
            <ButtonLink to="/services" variant="light">
              View Services
            </ButtonLink>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} theme="dark" />
          ))}
        </div>
      </div>
    </section>
  );
}

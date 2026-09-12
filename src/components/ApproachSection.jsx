import ProcessTimeline from './ProcessTimeline.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function ApproachSection() {
  return (
    <section className="section-pad bg-brand-light light-grid">
      <div className="container-outer">
        <SectionHeading
          eyebrow="Process"
          title="Our Integrated Approach"
          text="A practical workflow that connects planning, multidisciplinary design, construction management, supervision, implementation, and handover."
        />
        <ProcessTimeline />
      </div>
    </section>
  );
}

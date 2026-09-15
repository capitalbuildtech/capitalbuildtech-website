import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const placeholders = [
  {
    label: 'Future Client Testimonial',
    text:
      'This testimonial area is ready for verified client feedback. Add real client names, project references, and approved quotes when available.',
  },
  {
    label: 'Future Project Feedback',
    text:
      'Use this component for authenticated reviews only. No customer statements have been fabricated.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-brand-white">
      <div className="container-outer">
        <SectionHeading
          eyebrow="Testimonials"
          title="Ready for verified client voices"
          text="The structure is prepared for future testimonials while avoiding invented client claims."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {placeholders.map((item) => (
            <article key={item.label} className="border border-brand-ink/12 bg-white p-8">
              <Quote className="h-8 w-8 text-brand-blue" aria-hidden="true" />
              <p className="mt-8 text-xl leading-9 text-brand-ink/70">{item.text}</p>
              <p className="mt-8 eyebrow text-brand-ink/42">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

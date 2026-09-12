import ButtonLink from './ButtonLink.jsx';

export default function CinematicBanner() {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden bg-brand-deep text-brand-white">
      <img
        src="https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=2200&q=85"
        alt="Large building construction site with crane and concrete structure"
        loading="lazy"
        className="absolute inset-0 -z-20 image-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/58" />
      <div className="container-outer flex min-h-[72svh] items-center">
        <div className="max-w-3xl">
          <p className="eyebrow text-white/54">Project Delivery</p>
          <h2 className="mt-6 font-heading text-5xl font-light leading-[1.02] sm:text-7xl lg:text-8xl">
            Built to Stand. Engineered to Last.
          </h2>
          <div className="mt-10">
            <ButtonLink to="/projects" variant="light">
              Explore Our Projects
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

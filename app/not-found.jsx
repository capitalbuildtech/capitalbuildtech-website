import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-brand-white pt-20">
      <div className="container-outer max-w-3xl py-24">
        <p className="eyebrow text-brand-blue">404</p>
        <h1 className="mt-5 font-heading text-5xl font-light text-brand-ink sm:text-7xl">
          Page not found.
        </h1>
        <p className="mt-6 max-w-xl leading-8 text-brand-ink/62">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-3 border border-brand-ink/20 px-5 py-3 text-sm font-semibold text-brand-ink transition duration-500 hover:border-brand-ink/45 hover:bg-brand-ink hover:text-brand-white"
        >
          <ArrowLeft className="h-4 w-4 transition duration-500 group-hover:-translate-x-1" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}

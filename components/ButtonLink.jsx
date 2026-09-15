import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const variants = {
  light:
    'border-white/35 bg-white/8 text-brand-white hover:border-white/70 hover:bg-white/14',
  dark:
    'border-brand-ink/20 bg-transparent text-brand-ink hover:border-brand-ink/45 hover:bg-brand-ink hover:text-brand-white',
  blue:
    'border-brand-blue bg-brand-blue text-white hover:border-[#18568b] hover:bg-[#18568b]',
  ghost:
    'border-transparent bg-transparent text-current hover:border-current/20 hover:bg-current/5',
};

export default function ButtonLink({
  to,
  children,
  variant = 'dark',
  className = '',
  ariaLabel,
}) {
  return (
    <Link
      href={to}
      aria-label={ariaLabel}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3 text-sm font-semibold transition duration-500 ease-premium focus-visible:rounded-sm ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 transition duration-500 ease-premium group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

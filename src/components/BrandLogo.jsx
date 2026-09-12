import { Link } from 'react-router-dom';
import { company } from '../data/company.js';

export default function BrandLogo({ inverted = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group inline-flex items-center gap-3 focus-visible:rounded-sm"
      aria-label={`${company.name} home`}
    >
      <span
        className={`relative grid h-11 w-11 shrink-0 place-items-center border ${
          inverted
            ? 'border-white/35 text-brand-white'
            : 'border-brand-ink/25 text-brand-ink'
        }`}
      >
        <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-brand-blue" />
        <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-brand-blue" />
        <span className="font-heading text-sm font-semibold tracking-[0.16em]">CB</span>
      </span>
      <span className="leading-none">
        <span
          className={`block font-heading text-[0.78rem] font-semibold uppercase tracking-[0.2em] ${
            inverted ? 'text-brand-white' : 'text-brand-ink'
          }`}
        >
          CAPITAL
        </span>
        <span
          className={`mt-1 block font-heading text-[0.58rem] font-semibold uppercase tracking-[0.18em] ${
            inverted ? 'text-white/68' : 'text-brand-ink/68'
          }`}
        >
          BUILDTECH ENGINEERING
        </span>
      </span>
    </Link>
  );
}

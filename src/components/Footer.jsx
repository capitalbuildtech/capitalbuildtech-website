import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../data/company.js';
import { services } from '../data/services.js';
import BrandLogo from './BrandLogo.jsx';

const pages = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Projects', '/projects'],
  ['Team', '/team'],
  ['Contact', '/contact'],
];

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-white">
      <div className="container-outer border-t border-white/10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
          <div>
            <BrandLogo inverted />
            <p className="mt-7 max-w-md leading-8 text-white/58">{company.description}</p>
            <p className="mt-5 eyebrow text-brand-blue">{company.tagline}</p>
          </div>

          <div>
            <h2 className="eyebrow text-white/44">Pages</h2>
            <ul className="mt-5 space-y-3">
              {pages.map(([label, to]) => (
                <li key={to}>
                  <Link className="text-white/64 transition hover:text-white" to={to}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-white/44">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    className="text-white/64 transition hover:text-white"
                    to={`/services#${service.slug}`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-white/44">Contact</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  className="inline-flex items-center gap-3 text-white/64 transition hover:text-white"
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                >
                  <Phone className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-3 break-all text-white/64 transition hover:text-white"
                  href={`mailto:${company.email}`}
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/44 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Capital BuildTech Engineering.</p>
          <p>Building Design | Engineering | Construction</p>
        </div>
      </div>
    </footer>
  );
}

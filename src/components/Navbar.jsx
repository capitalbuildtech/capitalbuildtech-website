import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo.jsx';
import MobileMenu from './MobileMenu.jsx';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-500 ease-premium ${
          scrolled || menuOpen
            ? 'border-b border-white/10 bg-brand-deep/90 shadow-soft backdrop-blur-xl'
            : 'border-b border-white/10 bg-black/14 backdrop-blur-[2px]'
        }`}
      >
        <nav className="container-outer flex h-20 items-center justify-between gap-6 text-brand-white">
          <BrandLogo inverted />
          <div className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `eyebrow transition duration-300 hover:text-white ${
                    isActive ? 'text-white' : 'text-white/58'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/22 text-brand-white transition duration-300 hover:border-white/55 hover:bg-white/10"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navItems={navItems} />
    </>
  );
}

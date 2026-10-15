import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logoBanner from '../assets/logo-banner.png';
import { PHONE_TEL } from '../data/siteConfig';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Client Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Appointment', href: '#book' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'bg-bg border-accent/15 shadow-[0_10px_30px_-15px_rgba(124,212,222,0.35)]'
          : 'bg-bg border-white/5'
      }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-1.5">
        <a href="#top" className="flex items-center shrink-0">
          <img src={logoBanner} alt="Beauty Fest Salon & Spa" className="logo-blend h-12 sm:h-14 w-auto object-contain" />
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-gray-300">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link hover:text-accent transition-colors uppercase tracking-wide text-[12px] xl:text-[13px] whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={PHONE_TEL}
          className="hidden lg:inline-flex items-center gap-2 btn-primary font-semibold text-sm px-5 py-2.5 rounded"
        >
          <Phone size={16} />
          Call Now
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-bg border-t border-white/10 px-4 pb-4 animate-fade-in">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 text-gray-300 uppercase text-sm tracking-wide border-b border-white/5 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              onClick={handleNavClick}
              className="mt-3 inline-flex items-center justify-center gap-2 btn-primary font-semibold text-sm px-5 py-3 rounded"
            >
              <Phone size={16} />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import { Phone, Mail, Instagram, MapPin } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
} from '../data/siteConfig';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Book Now', href: '#book' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-script text-3xl leading-none"><span className="text-gradient animate-shimmer">Beauty Fest</span></p>
          <p className="text-accent text-xs font-semibold tracking-wider mt-1 mb-4">
            SALON &amp; SPA
          </p>
          <p className="text-gray-400 text-sm italic mb-1">A breath of fresh "hair"</p>
          <p className="text-gray-400 text-sm">Beauty Fest Salon &amp; Spa,</p>
          <p className="text-gray-400 text-sm">Vaughan, ON.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm tracking-wide mb-4">QUICK LINKS</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-gray-400 text-sm hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm tracking-wide mb-4">CONNECT WITH US</h4>
          <ul className="space-y-2.5">
            <li>
              <a href={PHONE_TEL} className="flex items-center gap-2 text-gray-400 text-sm hover:text-accent transition-colors">
                <Phone size={14} className="text-accent" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-gray-400 text-sm hover:text-accent transition-colors">
                <Mail size={14} className="text-accent" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 text-sm hover:text-accent transition-colors">
                <Instagram size={14} className="text-accent" />
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={14} className="text-accent" />
              Vaughan, Ontario
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-6 text-center">
        <p className="text-gray-500 text-xs">© {year} Beauty Fest Salon &amp; Spa. All rights reserved.</p>
      </div>
    </footer>
  );
}

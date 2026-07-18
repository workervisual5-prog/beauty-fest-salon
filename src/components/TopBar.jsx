import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/siteConfig';

export default function TopBar() {
  return (
    <div className="bg-black text-xs sm:text-sm text-gray-300 text-center py-2 px-4">
      <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
        <Phone size={14} className="text-teal-accent" />
        Call to book:{' '}
        <a href={PHONE_TEL} className="font-semibold text-white hover:text-teal-accent transition-colors">
          {PHONE_DISPLAY}
        </a>
        <span className="mx-1 text-gray-500">·</span>
        Walk-ins Welcome
      </span>
    </div>
  );
}

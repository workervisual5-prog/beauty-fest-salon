import { Phone } from 'lucide-react';
import logoIcon from '../assets/logo-icon.png';
import { PHONE_TEL } from '../data/siteConfig';

export default function Hero() {
  return (
    <section id="top" className="relative text-center px-4 sm:px-6 pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <img
          src={logoIcon}
          alt="Beauty Fest Salon & Spa"
          className="h-40 sm:h-44 md:h-52 w-auto object-contain mb-8"
        />

        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-white leading-none">
          Beauty Fest
        </h1>

        <p className="mt-4 text-teal-accent font-semibold tracking-[0.2em] text-sm sm:text-base uppercase">
          Salon &amp; Spa
        </p>

        <div className="underline-accent mx-auto my-5" />

        <p className="italic text-gray-400 text-lg sm:text-xl">A breath of fresh 'hair'</p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#book"
            className="bg-teal-accent text-black font-semibold px-8 py-4 rounded hover:bg-teal-300 transition-colors uppercase tracking-wide text-sm text-center"
          >
            Book Appointment
          </a>
          <a
            href={PHONE_TEL}
            className="border border-white/30 text-white font-semibold px-8 py-4 rounded hover:border-teal-accent hover:text-teal-accent transition-colors uppercase tracking-wide text-sm inline-flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

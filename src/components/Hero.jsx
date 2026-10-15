import { Phone, Sparkles } from 'lucide-react';
import logoIcon from '../assets/logo-icon.png';
import { PHONE_TEL } from '../data/siteConfig';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative text-center px-4 sm:px-6 pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden"
    >
      {/* Soft drifting glows behind the content */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent-deep/25 blur-3xl animate-drift" />
        <div
          className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-accent/15 blur-3xl animate-drift"
          style={{ animationDelay: '-7s' }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-t from-transparent to-bg" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="relative max-w-3xl mx-auto flex flex-col items-center">
        <div className="animate-fade-up logo-blend">
          <img
            src={logoIcon}
            alt="Beauty Fest Salon & Spa"
            className="h-40 sm:h-44 md:h-52 w-auto object-contain mb-8 animate-float"
          />
        </div>

        <p
          className="animate-fade-up inline-flex items-center gap-2 text-accent-light/90 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4"
          style={{ animationDelay: '150ms' }}
        >
          <Sparkles size={14} />
          Vaughan's Beauty Destination
          <Sparkles size={14} />
        </p>

        <h1
          className="animate-fade-up font-script text-7xl sm:text-8xl md:text-9xl leading-[1.1] px-4 drop-shadow-[0_0_35px_rgba(124,212,222,0.35)]"
          style={{ animationDelay: '300ms' }}
        >
          <span className="text-gradient animate-shimmer">Beauty Fest</span>
        </h1>

        <div
          className="animate-fade-up mt-3 flex items-center gap-4"
          style={{ animationDelay: '450ms' }}
        >
          <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-accent animate-grow-x origin-right" style={{ animationDelay: '700ms' }} />
          <p className="text-white font-semibold tracking-[0.35em] text-sm sm:text-base uppercase">
            Salon &amp; Spa
          </p>
          <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-accent animate-grow-x origin-left" style={{ animationDelay: '700ms' }} />
        </div>

        <p
          className="animate-fade-up mt-6 italic text-gray-300 text-lg sm:text-xl"
          style={{ animationDelay: '600ms' }}
        >
          A breath of fresh 'hair'
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          style={{ animationDelay: '750ms' }}
        >
          <a
            href="#book"
            className="btn-primary font-semibold px-8 py-4 rounded-full uppercase tracking-wide text-sm text-center"
          >
            Book Appointment
          </a>
          <a
            href={PHONE_TEL}
            className="border border-white/25 text-white font-semibold px-8 py-4 rounded-full hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors uppercase tracking-wide text-sm inline-flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

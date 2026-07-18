import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import {
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  BUSINESS_HOURS,
  GOOGLE_MAPS_LINK,
  GOOGLE_MAPS_WRITE_REVIEW_LINK,
  GOOGLE_MAPS_EMBED_SRC,
} from '../data/siteConfig';

function currentDay() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' });
}

export default function Contact() {
  const today = currentDay();

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Get in Touch
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-white">Contact Us</h2>
        <div className="underline-accent mx-auto my-6" />
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-bg-card border border-white/10 rounded-lg p-6 sm:p-8">
          <h3 className="font-script text-2xl sm:text-3xl text-teal-accent mb-5">Contact Details</h3>
          <ul className="space-y-5">
            <ContactRow icon={MapPin} label="Address">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-accent transition-colors"
              >
                {ADDRESS}
              </a>
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <a href={PHONE_TEL} className="hover:text-teal-accent transition-colors">
                {PHONE_DISPLAY}
              </a>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a href={`mailto:${EMAIL}`} className="hover:text-teal-accent transition-colors">
                {EMAIL}
              </a>
            </ContactRow>
            <ContactRow icon={Instagram} label="Instagram">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-accent transition-colors"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </ContactRow>
          </ul>
        </div>

        <div className="bg-bg-card border border-white/10 rounded-lg p-6 sm:p-8">
          <h3 className="flex items-center gap-2 font-script text-2xl sm:text-3xl text-teal-accent mb-5">
            <Clock size={20} />
            Business Hours
          </h3>
          <ul className="divide-y divide-white/10">
            {BUSINESS_HOURS.map(({ day, hours }) => {
              const isToday = day === today;
              return (
                <li
                  key={day}
                  className={`flex justify-between py-3 text-sm ${
                    isToday ? 'bg-teal-accent/10 px-3 -mx-3 rounded' : ''
                  }`}
                >
                  <span className={isToday ? 'text-teal-accent font-semibold' : 'text-gray-300'}>
                    {day} {isToday && <span className="text-teal-accent/70 font-normal">(Today)</span>}
                  </span>
                  <span className={hours === 'Closed' ? 'text-red-400' : 'text-gray-300'}>{hours}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6">
        <div className="bg-bg-card border border-white/10 rounded-lg overflow-hidden">
          <iframe
            title="Beauty Fest Salon & Spa location"
            src={GOOGLE_MAPS_EMBED_SRC}
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 opacity-90"
          />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5">
            <p className="text-gray-400 text-sm">Find us on Google Maps</p>
            <div className="flex gap-3">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-black bg-teal-accent px-5 py-2.5 rounded hover:bg-teal-300 transition-colors"
              >
                Get Directions
              </a>
              <a
                href={GOOGLE_MAPS_WRITE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white border border-white/20 px-5 py-2.5 rounded hover:border-teal-accent hover:text-teal-accent transition-colors"
              >
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, children }) {
  return (
    <li className="flex items-start gap-4">
      <span className="h-9 w-9 shrink-0 rounded-full bg-teal-accent/10 flex items-center justify-center">
        <Icon size={16} className="text-teal-accent" />
      </span>
      <span className="flex flex-col">
        <span className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">{label}</span>
        <span className="text-gray-200 text-sm">{children}</span>
      </span>
    </li>
  );
}

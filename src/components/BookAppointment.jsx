import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Instagram, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/services';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '../data/siteConfig';

const INITIAL_FORM = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  notes: '',
};

const ALL_SERVICE_NAMES = SERVICE_CATEGORIES.map((c) => c.label);

export default function BookAppointment() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.phone || !form.service || !form.date || !form.time) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="book" className="px-4 sm:px-6 lg:px-8 py-20 bg-bg-panel/40">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Reserve Your Spot
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-white">Book Your Appointment</h2>
        <div className="underline-accent mx-auto my-6" />
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid lg:grid-cols-3 gap-8">
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-bg-card border border-white/10 rounded-lg p-6 sm:p-8 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="First Name" required>
              <input
                type="text"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                placeholder="Your first name"
                className="input-field"
                required
              />
            </Field>
            <Field label="Last Name" required>
              <input
                type="text"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                placeholder="Your last name"
                className="input-field"
                required
              />
            </Field>
            <Field label="Phone Number" required>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (___) ___-____"
                className="input-field"
                required
              />
            </Field>
            <Field label="Email (optional)">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="input-field"
              />
            </Field>

            <div className="sm:col-span-2">
              <Field label="Service Requested" required>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="">— Select a Service —</option>
                  {ALL_SERVICE_NAMES.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Preferred Date" required>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="input-field"
                required
              />
            </Field>
            <Field label="Preferred Time" required>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="input-field"
                required
              />
            </Field>

            <div className="sm:col-span-2">
              <Field label="Additional Notes">
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or details..."
                  rows={4}
                  className="input-field resize-none"
                />
              </Field>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-teal-accent text-black font-semibold px-6 py-4 rounded hover:bg-teal-300 transition-colors uppercase tracking-wide text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Appointment Request
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="mt-4 flex items-center gap-2 text-teal-accent text-sm">
              <CheckCircle2 size={16} />
              Thanks! Your request has been sent. We'll confirm your appointment by phone shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 flex items-center gap-2 text-red-400 text-sm">
              <XCircle size={16} />
              Something went wrong. Please fill in all required fields or try again, or call us directly.
            </p>
          )}

          <p className="mt-4 text-gray-500 text-xs text-center">
            We'll confirm your appointment via phone. Walk-ins always welcome!
          </p>
        </form>

        <div className="flex flex-col gap-5">
          <a
            href={PHONE_TEL}
            className="bg-bg-card border border-white/10 rounded-lg p-6 hover:border-teal-accent/40 transition-colors"
          >
            <div className="h-11 w-11 rounded-full bg-teal-accent/10 flex items-center justify-center mb-4">
              <Phone size={20} className="text-teal-accent" />
            </div>
            <h3 className="text-white font-semibold mb-1">Call to Book</h3>
            <p className="text-gray-400 text-sm mb-2">Speak directly with our team</p>
            <p className="text-teal-accent font-medium">{PHONE_DISPLAY}</p>
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bg-card border border-white/10 rounded-lg p-6 hover:border-teal-accent/40 transition-colors"
          >
            <div className="h-11 w-11 rounded-full bg-teal-accent/10 flex items-center justify-center mb-4">
              <Instagram size={20} className="text-teal-accent" />
            </div>
            <h3 className="text-white font-semibold mb-1">DM on Instagram</h3>
            <p className="text-gray-400 text-sm mb-2">Message us for appointments</p>
            <p className="text-teal-accent font-medium">{INSTAGRAM_HANDLE}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-gray-400 text-xs font-semibold tracking-wide uppercase mb-2">
        {label} {required && <span className="text-teal-accent">*</span>}
      </span>
      {children}
    </label>
  );
}

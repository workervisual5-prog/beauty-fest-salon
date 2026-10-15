import { Sparkles, Award, Heart, Home } from 'lucide-react';
import aboutPhoto from '../assets/about-photo.jpg';

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Expert Stylists',
    desc: 'Skilled professionals dedicated to your perfect look.',
  },
  {
    icon: Award,
    title: 'Premium Products',
    desc: 'High-quality products including Olaplex and ammonia-free options.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    desc: 'Treatments tailored to your unique style and needs.',
  },
  {
    icon: Home,
    title: 'Warm Atmosphere',
    desc: 'A welcoming space where you feel right at home.',
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto text-center reveal">
        <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Get to Know Us
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-white">About Us</h2>
        <div className="underline-accent mx-auto my-6" />
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <img
          src={aboutPhoto}
          alt="Makeup artist applying eyeshadow to a bride"
          className="reveal rounded-2xl w-full h-auto object-cover shadow-2xl shadow-accent-deep/20"
        />

        <div className="reveal" style={{ '--delay': '150ms' }}>
          <h3 className="font-script text-3xl sm:text-4xl text-accent mb-1">
            Your Destination for Beauty &amp; Wellness
          </h3>
          <div className="w-10 h-0.5 bg-accent mb-5" />

          <p className="text-gray-300 leading-relaxed mb-4">
            Beauty Fest Salon &amp; Spa is your one-stop luxury beauty destination in Vaughan,
            Ontario. We specialize in threading, waxing, hair services, facials, and make-up, all
            performed by experienced professionals who care about making you look and feel your
            best.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Whether you're preparing for a special occasion or simply treating yourself, our team
            provides personalized services using premium products in a warm and welcoming
            environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                style={{ '--delay': `${300 + i * 100}ms` }}
                className="reveal card-lift bg-bg-card border border-white/10 rounded-lg p-5 text-left hover:border-accent/40"
              >
                <Icon size={22} className="text-accent mb-3" />
                <h4 className="font-semibold text-white mb-1">{title}</h4>
                <p className="text-gray-400 text-sm leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { SERVICE_CATEGORIES, PRICING_NOTE } from '../data/services';

export default function Services() {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === active);

  return (
    <section id="services" className="px-4 sm:px-6 lg:px-8 py-20 bg-bg-panel/40">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          What We Offer
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-white">Our Services</h2>
        <div className="underline-accent mx-auto my-6" />
        <p className="text-gray-400 max-w-2xl mx-auto">
          From threading to bridal packages, we offer a full range of beauty services at
          competitive prices.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {SERVICE_CATEGORIES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleToggle(id)}
              onPointerEnter={(e) => {
                // Only auto-open on hover for real mouse pointers.
                // On touch devices this must not fire, or the first tap
                // gets consumed simulating hover and a second tap is
                // needed before onClick registers.
                if (e.pointerType === 'mouse') setActive(id);
              }}
              className={`flex items-center gap-2 px-6 py-4 rounded border text-sm font-medium uppercase tracking-wide transition-colors ${
                active === id
                  ? 'border-teal-accent text-teal-accent bg-teal-accent/5'
                  : 'border-white/15 text-gray-200 hover:border-teal-accent/50 hover:text-teal-accent'
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[4rem]">
          {activeCategory ? (
            <div className="max-w-xl mx-auto bg-bg-card border border-white/10 rounded-lg p-6 text-left animate-fade-in">
              <h3 className="text-teal-accent font-semibold uppercase tracking-wide text-sm mb-4">
                {activeCategory.label} Pricing
              </h3>
              <ul className="divide-y divide-white/10 max-h-[26rem] overflow-y-auto pr-1">
                {activeCategory.items.map((item) => (
                  <li key={item.name} className="flex justify-between gap-4 py-2.5 text-gray-200">
                    <span>{item.name}</span>
                    <span className="text-teal-accent font-medium whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs italic mt-4 pt-4 border-t border-white/10">
                {PRICING_NOTE}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Hover over or tap a service category above to view pricing</p>
          )}
        </div>
      </div>
    </section>
  );
}

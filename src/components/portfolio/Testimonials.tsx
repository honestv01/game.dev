import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from './data';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-300/10 border border-yellow-300/20 mb-6">
            <span className="text-yellow-300 text-sm font-medium">References</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Professional notes
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300"> from collaborations</span>
          </h2>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`energy-card relative p-8 rounded-2xl border transition-all duration-500 ${
                i === active
                  ? 'bg-white/[0.04] border-amber-300/20 shadow-lg shadow-amber-400/5'
                  : 'bg-white/[0.01] border-white/5 hover:border-white/10'
              }`}
            >
              <Quote size={32} className={`mb-6 ${i === active ? 'text-amber-300/40' : 'text-white/10'}`} />
              <p className="text-stone-300 text-base leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                    i === active ? 'bg-gradient-to-br from-amber-300 to-yellow-300 text-[#120b03]' : 'bg-white/10 text-white'
                  }`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-stone-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="energy-card relative p-8 rounded-2xl bg-white/[0.04] border border-amber-300/20">
            <Quote size={32} className="text-amber-300/40 mb-6" />
            <p className="text-stone-300 text-base leading-relaxed mb-8 italic">"{testimonials[active].text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-yellow-300 flex items-center justify-center text-[#120b03] font-semibold text-sm">
                {testimonials[active].avatar}
              </div>
              <div>
                <div className="text-white font-medium text-sm">{testimonials[active].name}</div>
                <div className="text-stone-500 text-xs">{testimonials[active].role}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-amber-300 w-6' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;




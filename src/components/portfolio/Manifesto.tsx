import React from 'react';
import { ArrowRight } from 'lucide-react';

const Manifesto: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/[0.02] to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-amber-300/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-yellow-300/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="text-6xl lg:text-8xl font-serif text-amber-300/20 leading-none select-none">"</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
          Games win when they feel immediate.
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300"> My job is to make every frame count</span>
          {' '}from first touch to repeat engagement.
        </h2>

        <p className="text-stone-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Game products fail when performance, systems architecture, and iteration speed are treated as afterthoughts.
          I build with Unity and Unreal so gameplay quality, technical constraints, and release planning are addressed early.
          The result is practical execution: clear architecture, measurable outcomes, and reliable cross-platform delivery.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-bold text-amber-300 mb-2">60fps</div>
            <div className="text-white text-sm font-medium mb-1">Performance Target</div>
            <div className="text-stone-500 text-xs leading-relaxed">
              Frame-time budgets are profiled and tuned for the intended platform mix.
            </div>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-bold text-yellow-300 mb-2">Unity + Unreal</div>
            <div className="text-white text-sm font-medium mb-1">Engine Coverage</div>
            <div className="text-stone-500 text-xs leading-relaxed">
              Dual-engine delivery supports varied team workflows and production requirements.
            </div>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-bold text-amber-400 mb-2">C# + C++</div>
            <div className="text-white text-sm font-medium mb-1">Maintainable Build</div>
            <div className="text-stone-500 text-xs leading-relaxed">
              Clean gameplay architecture keeps systems testable and easier to scale post-launch.
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="inline-flex items-center gap-2 px-7 py-3.5 shimmer-border bg-gradient-to-r from-amber-300 to-yellow-300 text-[#120b03] font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-400/20 transition-all duration-300 hover:-translate-y-0.5 group"
        >
          Start Your Project
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Manifesto;




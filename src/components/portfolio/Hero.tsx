import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Linkedin, Mail, Sparkles } from 'lucide-react';
import { stats } from './data';

const deliveryPillars = [
  { id: '01', title: 'Gameplay Scope', copy: 'Define platform targets, core mechanics, and measurable production milestones.' },
  { id: '02', title: 'Engine Build', copy: 'Unity + Unreal implementation with maintainable gameplay architecture.' },
  { id: '03', title: 'Cross-Platform Optimization', copy: 'Tune performance and controls for PC, mobile, and live ops environments.' },
] as const;

const rotatingHeroLines = [
  'Unity and Unreal gameplay development for cross-platform products.',
  'From prototype to production with C#, C++, and Blueprints.',
  'Built for player feel, performance budgets, and reliable shipping.',
] as const;

const linkedinUrl = 'https://www.linkedin.com/in/trung-th%C3%A0nh-tr%E1%BA%A7n-1abb6861';
const email = 'codesmith95316@gmail.com';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [heroImageSrc, setHeroImageSrc] = useState('/background.png');

  useEffect(() => {
    setLoaded(true);

    let timer = 0;
    let charIndex = 0;
    let lineIndex = 0;
    let deleting = false;

    const tick = () => {
      const currentLine = rotatingHeroLines[lineIndex];

      if (!deleting) {
        charIndex += 1;
        setTypedText(currentLine.slice(0, charIndex));

        if (charIndex >= currentLine.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1500);
          return;
        }

        timer = window.setTimeout(tick, 38);
        return;
      }

      charIndex -= 1;
      setTypedText(currentLine.slice(0, charIndex));

      if (charIndex <= 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % rotatingHeroLines.length;
        timer = window.setTimeout(tick, 260);
        return;
      }

      timer = window.setTimeout(tick, 22);
    };

    timer = window.setTimeout(tick, 360);
    return () => window.clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - 92;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-hero relative flex items-center overflow-hidden">
      <div className="home-hero-bg absolute inset-0" aria-hidden="true">
        <img
          src={heroImageSrc}
          alt=""
          className="home-hero-photo"
          onError={(event) => {
            const image = event.currentTarget;
            image.onerror = null;
            setHeroImageSrc('/hero-lifestyle.svg');
          }}
        />
        <img src="/hero-topology.svg" alt="" className="home-hero-map" />
        <div className="home-hero-vignette" />
        <div className="home-hero-scanline" />
        <div className="home-hero-glow home-hero-glow-a" />
        <div className="home-hero-glow home-hero-glow-b" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className={`lg:col-span-7 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 mb-7 backdrop-blur-sm">
              <Sparkles size={15} className="text-amber-300" />
              <span className="text-amber-200 text-xs sm:text-sm font-medium tracking-wide">Industry: Unity / Unreal / Cross-Platform Games</span>
            </div>

            <h1 className="text-[2.4rem] sm:text-[3.4rem] lg:text-[4.5rem] xl:text-[5.15rem] font-bold text-white leading-[0.98] tracking-[-0.02em] mb-6">
              Unity and Unreal game systems
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-200">
                built for shipping teams.
              </span>
            </h1>

            <p className="text-stone-300/95 text-base sm:text-lg lg:text-[1.2rem] leading-relaxed max-w-2xl mb-6">
              I build game systems and production-ready features using Unity and Unreal Engine.
              The focus is practical delivery: clean architecture, gameplay feel, and stable performance across platforms.
            </p>

            <div className="home-hero-typed-wrap mb-10">
              <span className="text-stone-300 font-mono text-sm sm:text-base">
                {typedText}
                <span className="inline-block w-[2px] h-5 align-[-3px] bg-amber-300 ml-1 animate-pulse" />
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="shimmer-border inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-300 to-yellow-300 text-[#120b03] font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-400/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Start A Game Project
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-stone-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  aria-label="Open LinkedIn profile for Trung-Thanh Tran"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-stone-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  aria-label="Send email to Trung-Thanh Tran"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="h-8 w-px bg-white/20 hidden sm:block" />

              <div className="flex flex-wrap items-center gap-3">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="px-3 py-2 rounded-lg bg-[#1f1709]/70 border border-amber-200/10">
                    <div className="text-white font-semibold text-sm">{stat.value}</div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-stone-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="home-hero-panel home-hero-offer energy-card">
              <div className="home-hero-offer-head">
                <span className="home-hero-offer-kicker">Build Scope</span>
                <span className="home-hero-offer-badge">Unity / Unreal</span>
              </div>

              <h3 className="home-hero-offer-title">
                Gameplay delivery for
                <span className="block text-amber-200">studios and publishing teams.</span>
              </h3>

              <div className="home-hero-offer-list">
                {deliveryPillars.map((item) => (
                  <article key={item.id} className="home-hero-offer-item">
                    <span className="home-hero-offer-item-id">{item.id}</span>
                    <div>
                      <h4 className="home-hero-offer-item-title">{item.title}</h4>
                      <p className="home-hero-offer-item-copy">{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="home-hero-offer-chips">
                <span className="home-hero-offer-chip">Core stack: Unity + Unreal + C# / C++</span>
                <span className="home-hero-offer-chip">Cross-platform constraints handled from day one</span>
              </div>

              <div className="home-hero-offer-stats">
                <div className="home-hero-metric">
                  <span className="home-hero-metric-value">60fps</span>
                  <p className="home-hero-metric-label">Mobile perf target</p>
                </div>
                <div className="home-hero-metric">
                  <span className="home-hero-metric-value">C# / C++</span>
                  <p className="home-hero-metric-label">Gameplay code stack</p>
                </div>
                <div className="home-hero-metric">
                  <span className="home-hero-metric-value">Live Ops</span>
                  <p className="home-hero-metric-label">Release-ready pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-stone-500 hover:text-amber-300 transition-colors group"
          >
            <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;




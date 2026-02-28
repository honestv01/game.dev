import React from 'react';
import Navbar from './portfolio/Navbar';
import Hero from './portfolio/Hero';
import TechMarquee from './portfolio/TechMarquee';
import About from './portfolio/About';
import Process from './portfolio/Process';
import Skills from './portfolio/Skills';
import Manifesto from './portfolio/Manifesto';
import Projects from './portfolio/Projects';
import Testimonials from './portfolio/Testimonials';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';
import { useScrollEffects } from '@/hooks/use-scroll-effects';

const AppLayout: React.FC = () => {
  useScrollEffects();

  const scrollToContact = () => {
    const target = document.getElementById('contact');
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 92;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  };

  return (
    <div className="theme-shell min-h-screen bg-[#120b03] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="energy-grain-layer" />
        <img src="/energy-rings.svg" alt="" className="energy-ring-graphic hidden lg:block" />
        <img src="/energy-rings.svg" alt="" className="energy-ring-graphic energy-ring-graphic--secondary hidden lg:block" />
        <div className="energy-orb energy-orb-a hidden lg:block" />
        <div className="energy-orb energy-orb-b hidden lg:block" />
        <div className="absolute -top-28 left-[-14rem] w-[34rem] h-[34rem] rounded-full bg-amber-300/15 blur-[130px] float-slow" />
        <div className="absolute top-[18%] right-[-12rem] w-[30rem] h-[30rem] rounded-full bg-yellow-300/10 blur-[120px] animated-aurora" />
        <div className="absolute bottom-[-12rem] left-1/2 -translate-x-1/2 w-[40rem] h-[28rem] rounded-full bg-yellow-300/10 blur-[140px] float-slow" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(217,170,86,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(217,170,86,0.24)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>
      <div className="scroll-rail hidden lg:block" aria-hidden="true" />
      <button
        onClick={scrollToContact}
        className="talk-join-btn talk-join-btn--floating hidden md:inline-flex"
        aria-label="Open contact section"
      >
        <div className="talk-join-btn__shell">
          <div className="talk-join-btn__edge">
            <div className="talk-join-btn__spark talk-join-btn__spark--a" />
            <div className="talk-join-btn__spark talk-join-btn__spark--b" />
          </div>
          <div className="talk-join-btn__inner">
            <span className="talk-join-btn__micro">CLICK TO</span>
            <span className="talk-join-btn__label">LET&apos;S TALK</span>
          </div>
        </div>
      </button>
      <Navbar />
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '0ms' } as React.CSSProperties}>
        <Hero />
      </div>
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '30ms' } as React.CSSProperties}>
        <TechMarquee />
      </div>
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '20ms' } as React.CSSProperties}>
        <About />
      </div>
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '20ms' } as React.CSSProperties}>
        <Process />
      </div>
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '20ms' } as React.CSSProperties}>
        <Skills />
      </div>
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '20ms' } as React.CSSProperties}>
        <Manifesto />
      </div>
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '20ms' } as React.CSSProperties}>
        <Projects />
      </div>
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '20ms' } as React.CSSProperties}>
        <Testimonials />
      </div>
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '20ms' } as React.CSSProperties}>
        <Contact />
      </div>
      <div data-scroll-reveal style={{ '--scroll-reveal-delay': '0ms' } as React.CSSProperties}>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;






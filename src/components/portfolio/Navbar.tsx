import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      const heroSection = document.querySelector<HTMLElement>('.home-hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setInHero(rect.top <= 96 && rect.bottom > 110);
      } else {
        setInHero(currentY < window.innerHeight * 0.5);
      }

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 92;
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navToneClass = inHero ? 'navbar-hero' : scrolled ? 'navbar-scrolled' : 'navbar-idle';

  return (
    <nav className={`navbar-shell fixed top-0 left-0 right-0 z-50 transform-gpu transition-all duration-500 ${navToneClass} translate-y-0`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-300 to-yellow-300 flex items-center justify-center font-bold text-[#120b03] text-sm shadow-lg shadow-amber-300/20">
              TT
            </div>
            <span className={`font-semibold text-lg tracking-tight hidden sm:block ${inHero ? 'text-white/95' : 'text-white'}`}>
              Trung-Thanh <span className={inHero ? 'text-amber-200/95' : 'text-amber-300'}>Tran</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? inHero
                      ? 'text-white bg-white/12'
                      : 'text-amber-300 bg-amber-300/10'
                    : inHero
                      ? 'text-white/75 hover:text-white hover:bg-white/8'
                      : 'text-stone-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button onClick={() => scrollTo('#contact')} className="header-talk-btn" aria-label="Open contact section">
              <span className="header-talk-btn__text">Start Project</span>
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#120b03]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-amber-300 bg-amber-300/10'
                  : 'text-stone-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full mt-3 px-5 py-3 shimmer-border bg-gradient-to-r from-amber-300 to-yellow-300 text-[#120b03] font-semibold text-sm rounded-lg"
          >
            Start Project
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




import React from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';

const linkedinUrl = 'https://www.linkedin.com/in/trung-th%C3%A0nh-tr%E1%BA%A7n-1abb6861';
const email = 'codesmith95316@gmail.com';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-300 to-yellow-300 flex items-center justify-center font-bold text-[#120b03] text-sm">
                TT
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Trung-Thanh Tran</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-xs">
              Researcher and technical manager focused on Unity and Unreal game development for cross-platform delivery.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-stone-500 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Open LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${email}`}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-stone-500 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Send email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {['About', 'Process', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollTo(item.toLowerCase())} className="text-stone-500 text-sm hover:text-amber-300 transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">More</h4>
            <ul className="space-y-3">
              {['Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollTo(item.toLowerCase())} className="text-stone-500 text-sm hover:text-amber-300 transition-colors">
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-stone-500 text-sm hover:text-amber-300 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="text-stone-500 text-sm hover:text-amber-300 transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Start A Project</h4>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              Share your game objective and I will help shape a practical Unity or Unreal build roadmap.
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 shimmer-border bg-gradient-to-r from-amber-300 to-yellow-300 text-[#120b03] font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-amber-400/20 transition-all"
            >
              <Mail size={14} />
              {email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-sm">{currentYear} Trung-Thanh Tran. Cross-platform game systems.</p>

          <button onClick={scrollToTop} className="flex items-center gap-2 text-stone-500 text-sm hover:text-amber-300 transition-colors group">
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




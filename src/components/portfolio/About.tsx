import React from 'react';
import { Zap, Users, Code2, Lightbulb } from 'lucide-react';
import { IMAGES } from './data';

const values = [
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Every build targets stable frame-time, predictable memory usage, and platform-ready performance.',
  },
  {
    icon: Users,
    title: 'Player-Centered Systems',
    description: 'Core loops are designed around player behavior, progression clarity, and retention outcomes.',
  },
  {
    icon: Code2,
    title: 'Engine-Level Architecture',
    description: 'Unity C# and Unreal C++ or Blueprints structured for maintainable gameplay iteration.',
  },
  {
    icon: Lightbulb,
    title: 'Production Discipline',
    description: 'I align design, engineering, QA, and release planning to ship game features reliably.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-amber-300/50" />
          <span className="text-amber-300 text-sm font-medium uppercase tracking-widest">About Me</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-amber-300/20 rounded-2xl" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-yellow-300/20 rounded-2xl" />

              <div className="relative overflow-hidden rounded-2xl">
                <img src={IMAGES.portrait} alt="Trung-Thanh Tran" className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120b03] via-transparent to-transparent" />
              </div>

              <div className="float-slow absolute -bottom-6 -right-6 bg-[#241907] border border-white/10 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-300 to-yellow-300 flex items-center justify-center">
                    <Zap size={18} className="text-[#120b03]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">18+ Years Experience</div>
                    <div className="text-stone-500 text-xs">Game Production Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Building Unity and Unreal game systems
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300"> for real-world productions </span>
              and shipping products
            </h2>

            <div className="space-y-4 text-stone-400 text-lg leading-relaxed mb-10">
              <p>
                I am Trung-Thanh Tran, a researcher at Freelance, self-employed, and a technical manager working with game publishing.
                My delivery focus is cross-platform game development with Unity and Unreal for studios and publishing teams.
              </p>
              <p>
                I have operated across product coordination, technical support, and platform delivery roles, including eXo Platform,
                Vietnam Game Publisher, and freelance execution since 2018. This background helps me translate business goals into
                practical build decisions.
              </p>
              <p>
                Education includes a Master degree from Institut de la Francophonie pour l Informatique and a Bachelor degree in
                Information Technology from University of Engineering and Technology, Hanoi. Showing competence is not difficult.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="energy-card group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-300/20 hover:bg-amber-300/[0.03] transition-all duration-300"
                >
                  <value.icon size={20} className="text-amber-300 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold text-sm mb-1.5">{value.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




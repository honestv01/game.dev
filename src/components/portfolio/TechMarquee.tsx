import React from 'react';

const techItems = [
  'Unity',
  'Unreal Engine 5',
  'C#',
  'C++',
  'Blueprint Scripting',
  'Gameplay Systems',
  'AI Behaviors',
  'Animation State Machines',
  'Steam Deployment',
  'Android / iOS Builds',
  'Roblox Integration',
  'Live Ops Events',
  'Telemetry and Balancing',
  'Frame-Time Profiling',
  'Memory Optimization',
  'Multiplayer Session Logic',
];

const TechMarquee: React.FC = () => {
  return (
    <div className="relative py-8 overflow-hidden border-y border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-300/45 to-transparent" />

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#120b03] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#120b03] to-transparent z-10" />

      <div className="space-y-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techItems, ...techItems].map((item, i) => (
            <span
              key={`top-${item}-${i}`}
              className="mx-6 text-stone-600 text-sm font-medium tracking-wider uppercase flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300/35" />
              {item}
            </span>
          ))}
        </div>

        <div className="flex animate-marquee-reverse whitespace-nowrap opacity-70">
          {[...techItems.slice().reverse(), ...techItems.slice().reverse()].map((item, i) => (
            <span
              key={`bottom-${item}-${i}`}
              className="mx-6 text-stone-600 text-xs font-medium tracking-[0.18em] uppercase flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-300/35" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          animation: marquee 26s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 36s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;




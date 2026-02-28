import React from 'react';
import { Bug, Code2, Gamepad2, Layout, Rocket, Wrench } from 'lucide-react';

type SkillGroup = {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Core Engine',
    icon: Gamepad2,
    items: ['Unity (2D/3D)', 'Unreal Engine 5', 'Gameplay Frameworks', 'Animation State Machines'],
  },
  {
    title: 'Language',
    icon: Code2,
    items: ['C#', 'C++', 'Blueprint Visual Scripting', 'Modular Gameplay Patterns'],
  },
  {
    title: 'Platform Delivery',
    icon: Layout,
    items: ['PC and Steam Builds', 'Android / iOS Packaging', 'Roblox Deployment', 'Input and UI Integration'],
  },
  {
    title: 'Tooling',
    icon: Wrench,
    items: ['Git / Perforce', 'CI Build Automation', 'Profiler and Debugger', 'Release Versioning'],
  },
  {
    title: 'Game Systems',
    icon: Rocket,
    items: ['Combat and AI Behaviors', 'Progression and Economy', 'Multiplayer Session Flow', 'Live Ops Content Hooks'],
  },
  {
    title: 'Debugging',
    icon: Bug,
    items: ['Frame-Time Profiling', 'Memory and Asset Tracing', 'Crash and Log Analysis', 'Device Compatibility Testing'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-amber-300/50" />
            <span className="text-amber-300 text-sm font-medium uppercase tracking-widest">Skills & Tools</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            Required stack for
            <span className="bg-gradient-to-r from-amber-100 via-yellow-200 to-yellow-200 bg-clip-text text-transparent"> Unity and Unreal game delivery.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="energy-card rounded-2xl border border-white/10 bg-[#1a1308]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/35 hover:shadow-[0_18px_45px_-28px_rgba(251,191,36,0.45)]"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-300/10 text-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.22)]">
                  <group.icon size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-white leading-none">{group.title}</h3>
              </div>

              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-200 text-lg">
                    <span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_10px_rgba(245,158,11,0.65)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




import React, { useEffect, useMemo, useState } from 'react';
import { ExternalLink, Filter, Github, Search, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { projects, type Project } from './data';

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
const allTags = Array.from(new Set(projects.flatMap((p) => [...p.tags, ...p.systems]))).sort();
const expertiseTrack = [
  'Unity Gameplay Architecture',
  'Unreal Engine Production',
  'C# and C++ Programming',
  'Blueprint and Tool Scripting',
  'Cross-Platform Optimization',
  'Live Ops and Telemetry',
  'Multiplayer and Session Systems',
  'Steam / Mobile / Roblox Shipping',
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div
    onClick={onClick}
    className="energy-card project-card-animated-border group cursor-pointer bg-white/[0.02] rounded-2xl overflow-hidden hover:bg-amber-300/[0.01] transition-all duration-500"
  >
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120b03] via-transparent to-transparent opacity-60" />

      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 rounded-full bg-[#120b03]/80 backdrop-blur-sm border border-white/10 text-xs text-stone-300 font-medium">
          {project.category}
        </span>
      </div>

      <div className="absolute inset-0 bg-amber-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    <div className="p-5">
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-amber-300 transition-colors">{project.title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/[0.04] text-stone-400 text-xs font-mono">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-stone-500 text-xs">+{project.tags.length - 3}</span>
        )}
      </div>

      <div className="flex items-center gap-2 pt-3 border-t border-white/5">
        <span className="text-xs text-stone-600">Systems:</span>
        {project.systems.slice(0, 2).map((system) => (
          <span key={system} className="text-xs text-yellow-300/80 font-medium">
            {system}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-[#1a1207] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="relative aspect-video">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1207] via-transparent to-transparent" />
        </div>

        <div className="p-8 -mt-12 relative">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-300/10 border border-amber-300/20 text-amber-300 text-xs font-medium mb-4">
            {project.category}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-stone-400 text-base leading-relaxed mb-6">{project.description}</p>

          <div className="mb-6">
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Tech Tags</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-stone-300 text-sm font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Game Systems</h4>
            <div className="flex flex-wrap gap-2">
              {project.systems.map((system) => (
                <span key={system} className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-300/20 text-yellow-300 text-sm font-medium">
                  {system}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 shimmer-border bg-gradient-to-r from-amber-300 to-yellow-300 text-[#120b03] font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-amber-400/20 transition-all"
              >
                <ExternalLink size={14} />
                Visit Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-stone-600 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all"
              >
                <Github size={14} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Projects: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (!selectedProject) return;

    const html = document.documentElement;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPaddingRight = document.body.style.paddingRight;
    const scrollbarGap = window.innerWidth - html.clientWidth;

    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if (scrollbarGap > 0) {
      document.body.style.paddingRight = `${scrollbarGap}px`;
    }

    return () => {
      html.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.paddingRight = previousBodyPaddingRight;
    };
  }, [selectedProject]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const normalizedSearch = search.toLowerCase();
      const matchesSearch =
        search === '' ||
        p.title.toLowerCase().includes(normalizedSearch) ||
        p.description.toLowerCase().includes(normalizedSearch) ||
        p.tags.some((t) => t.toLowerCase().includes(normalizedSearch)) ||
        p.systems.some((s) => s.toLowerCase().includes(normalizedSearch));
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesTag = !activeTag || p.tags.includes(activeTag) || p.systems.includes(activeTag);
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [search, activeCategory, activeTag]);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-300/10 border border-amber-300/20 mb-6">
            <span className="text-amber-300 text-sm font-medium">Projects</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Selected work in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300"> Unity, Unreal, and cross-platform game development</span>
          </h2>
          <p className="text-stone-400 text-lg mb-6">
            Project references across Steam, mobile, Roblox, and mini-app releases with production-focused game systems.
          </p>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] py-2.5">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#120b03] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#120b03] to-transparent z-10" />
            <div className="projects-expertise-track flex whitespace-nowrap">
              {[...expertiseTrack, ...expertiseTrack].map((item, index) => (
                <span key={`${item}-${index}`} className="mx-5 inline-flex items-center gap-2 text-xs sm:text-sm text-stone-300 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300/80" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <div className="relative w-full">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              placeholder="Search projects, systems, technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-300/30 focus:ring-1 focus:ring-amber-300/20 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-amber-300/15 text-amber-300 border border-amber-300/30'
                    : 'bg-white/[0.03] text-stone-400 border border-white/5 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2.5 rounded-xl border transition-all ${
                showFilters || activeTag
                  ? 'bg-yellow-300/15 text-yellow-300 border-yellow-300/30'
                  : 'bg-white/[0.03] text-stone-400 border-white/5 hover:text-white'
              }`}
            >
              <Filter size={16} />
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-stone-500 text-xs uppercase tracking-wider font-semibold">Filter by tech and systems:</span>
              {activeTag && (
                <button onClick={() => setActiveTag(null)} className="text-xs text-amber-300 hover:underline">
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTag === tag
                      ? 'bg-yellow-300/15 text-yellow-300 border border-yellow-300/30'
                      : 'bg-white/[0.03] text-stone-400 border border-white/5 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg mb-4">No projects match your filters.</p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory('All');
                setActiveTag(null);
              }}
              className="text-amber-300 text-sm font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {search || activeCategory !== 'All' || activeTag ? (
          <div className="mt-6 text-center">
            <span className="text-stone-600 text-sm">Showing {filtered.length} of {projects.length} projects</span>
          </div>
        ) : null}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      <style>{`
        @keyframes projects-expertise-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .projects-expertise-track {
          animation: projects-expertise-marquee 28s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-expertise-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;




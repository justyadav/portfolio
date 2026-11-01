import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, projectFilters, type Project } from '../../data/portfolio';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="work" className="py-24 sm:py-36 relative bg-[#030303] overflow-hidden">
      <div className="section-container">
        {/* Chapter Header */}
        <div className="chapter-header">
          <span className="chapter-number">02 / SELECTED WORK</span>
          <span className="chapter-subtitle">BUILT. DEPLOYED. PUT INTO THE WORLD.</span>
        </div>

        {/* Display Heading & Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.15] max-w-2xl">
              Ideas are a start. This is the work.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#aaa9a4] max-w-xl">
              From hosting platforms people rely on to Discord bots powering active communities and safety-critical mobile engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#ff8c59] text-[#030303] font-semibold shadow-[0_0_20px_rgba(255,140,89,0.3)]'
                    : 'bg-[#121212] border border-white/10 text-[#aaa9a4] hover:text-[#f1eee8] hover:border-white/25'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Luxury Editorial Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project: Project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="editorial-card group p-7 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  {/* Card Meta Row */}
                  <div className="flex items-center justify-between gap-4 mb-6 text-xs font-mono">
                    <span className="text-[#ff8c59] font-medium tracking-widest">
                      {project.number}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#181818] border border-white/10 text-[#aaa9a4] text-[10px] tracking-wider uppercase">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#f1eee8] group-hover:text-white transition-colors mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Category Note */}
                  <div className="text-xs font-mono text-[#8c8c8c] uppercase tracking-wider mb-5">
                    {project.category}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#aaa9a4] leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.08] mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#161616] border border-white/[0.06] text-[#8c8c8c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer / Action Link */}
                  <div className="flex items-center justify-between">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff8c59] hover:text-[#ff7536] transition-colors"
                      >
                        <span>Visit Platform</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-[#666]">
                        Verified Production System
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

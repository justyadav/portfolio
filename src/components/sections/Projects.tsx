import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { projectsData, type Project } from '../../data/portfolio';

const categories = ['All', 'Cloud', 'Bot', 'SaaS', 'Mobile'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#09090b] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>SELECTED ARCHITECTURE & CODE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-[1.15]">
              Featured Projects & Systems
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl font-normal">
              Flagship builds engineered for real-world load, production availability, and instant response times.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === category
                    ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.35)]'
                    : 'bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project: Project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card group p-7 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40"
              >
                <div>
                  {/* Card Meta Row */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="inline-flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3" />
                          <span>Flagship</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.statusText}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Problem & Solution Block */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/15">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>The Engineered Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.08] mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-zinc-300 group-hover:border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !min-h-[38px] !py-1.5 !px-4 !text-xs gap-1.5"
                      >
                        <span>Live Demo / Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !min-h-[38px] !py-1.5 !px-4 !text-xs gap-1.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                        <span>GitHub Repo</span>
                      </a>
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
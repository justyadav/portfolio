import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectFilters, type Project } from '../../data/portfolio';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getAssetUrl } from '../../utils/assets';

interface ProjectCardProps {
  project: Project;
  reducedMotion: boolean;
}

function ProjectCard({ project, reducedMotion }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !project.image || imgError;

  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
  const rawDetails =
    (project.repoUrl && project.repoUrl.trim().length > 0 ? project.repoUrl : '') ||
    ((project as { detailsUrl?: string }).detailsUrl &&
    (project as { detailsUrl?: string }).detailsUrl?.trim().length
      ? (project as { detailsUrl?: string }).detailsUrl
      : '');
  const detailsUrl = rawDetails && rawDetails.trim().length > 0 ? rawDetails : null;
  const hasDetailsUrl = Boolean(detailsUrl);
  const hasAnyLink = hasLiveUrl || hasDetailsUrl;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 30,
      scale: reducedMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.01 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: reducedMotion ? 1 : 0.95,
      y: reducedMotion ? 0 : 15,
      transition: {
        duration: reducedMotion ? 0.01 : 0.25,
        ease: 'easeIn' as const,
      },
    },
  };

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={reducedMotion ? {} : { y: -4 }}
      className="group relative flex flex-col rounded-2xl bg-[#15151C] border border-[#2A2A35] hover:border-[#9367FF] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
    >
      {/* Top Image area (16:9 aspect ratio) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0F0F14] border-b border-[#2A2A35]">
        {showPlaceholder ? (
          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#15151C] via-[#1C1C26] to-[#0D0D12] p-6 text-center select-none">
            {/* Background glowing accent */}
            <div
              className="absolute -top-12 -right-12 w-40 h-40 bg-[#9367FF]/15 rounded-full blur-2xl group-hover:bg-[#9367FF]/25 transition-colors duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#7B263B]/15 rounded-full blur-2xl"
              aria-hidden="true"
            />

            {/* Large editorial serif project number */}
            <span className="font-serif text-4xl sm:text-6xl font-bold text-[#F5F3F7]/15 group-hover:text-[#9367FF]/35 transition-colors duration-300 tracking-tighter">
              {project.number}
            </span>

            {/* Subtle category title hint */}
            <span className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-[#A5A2AE]/70 max-w-[85%] truncate">
              {project.title}
            </span>
          </div>
        ) : (
          <>
            <img
              src={getAssetUrl(project.image)}
              alt={`${project.title} thumbnail`}
              onError={() => setImgError(true)}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Subtle dark gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#15151C] via-transparent to-transparent opacity-60 pointer-events-none"
              aria-hidden="true"
            />
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="p-7 sm:p-8 flex flex-col flex-1">
        {/* Meta Row: Project Number & Category */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <span className="text-xs font-semibold text-[#9367FF] tracking-wider uppercase">
            {project.number}
          </span>
          <span className="text-xs sm:text-sm text-[#A5A2AE] font-medium truncate">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F3F7] group-hover:text-[#9367FF] transition-colors duration-200 mb-3.5 tracking-tight">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm sm:text-base text-[#A5A2AE] leading-[1.8] mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6" aria-label="Project technologies">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-xl bg-[#1C1C26] text-[#A5A2AE] border border-[#2A2A35]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Buttons Row */}
        {hasAnyLink && (
          <div className="pt-5 border-t border-[#2A2A35] flex items-center gap-5 mt-auto">
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#F5F3F7] hover:text-[#9367FF] transition-colors duration-200 group/link"
              >
                <span>View Live</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
            {hasDetailsUrl && detailsUrl && (
              <a
                href={detailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View details for ${project.title}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#A5A2AE] hover:text-[#F5F3F7] transition-colors duration-200 group/link"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const prefersReduced = useReducedMotion();

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section
      id="projects"
      className="py-28 lg:py-36 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 bg-[#9367FF]/10 rounded-full blur-[128px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#7B263B]/10 rounded-full blur-[128px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-[#9367FF]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#9367FF] uppercase">
              FEATURED WORK
            </span>
          </div>

          <h2
            id="projects-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.25] text-[#F5F3F7] tracking-tight space-y-2"
          >
            <span className="block">Selected</span>
            <span className="block">Projects</span>
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 mb-14 sm:mb-18"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectFilters.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#9367FF] text-white shadow-[0_0_20px_rgba(147,103,255,0.4)] border border-[#9367FF]'
                    : 'bg-[#15151C]/80 text-[#A5A2AE] border border-[#2A2A35] hover:border-[#9367FF]/50 hover:text-[#F5F3F7]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                reducedMotion={prefersReduced}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

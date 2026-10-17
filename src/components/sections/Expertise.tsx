import type React from 'react';
import { motion } from 'framer-motion';
import { expertise } from '../../data/portfolio';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Code2, Server, Bot, Lightbulb } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Code2, Server, Bot, Lightbulb };

export function Expertise() {
  const headingLines = expertise.heading.split('\n');

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative py-28 sm:py-36 section-container overflow-hidden"
    >
      {/* Decorative ambient gradients */}
      <div
        className="absolute -left-20 top-1/4 w-80 h-80 rounded-full bg-[#9367FF]/5 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-[#7B263B]/5 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {/* Header: Section label + Heading in serif */}
        <motion.div variants={fadeInUp} className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-[#9367FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9367FF]">
              {expertise.sectionLabel}
            </span>
          </div>

          <h2
            id="expertise-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.25] text-[#F5F3F7] tracking-tight space-y-2"
          >
            {headingLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* 4-column grid on desktop, 2 on tablet, 1 on mobile */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {expertise.categories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;

            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#15151C] border border-[#2A2A35] p-7 sm:p-8 hover:border-[#9367FF] transition-colors duration-300 shadow-xl hover:shadow-[0_15px_30px_-5px_rgba(147,103,255,0.15)]"
              >
                {/* Subtle card glow overlay on hover */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#9367FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon at top */}
                  <div className="w-13 h-13 rounded-xl bg-[#9367FF]/10 border border-[#9367FF]/20 flex items-center justify-center text-[#9367FF] mb-7 group-hover:bg-[#9367FF]/20 group-hover:border-[#9367FF]/40 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  {/* Category title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F3F7] mb-5 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* List of skills as individual tags/chips */}
                <div className="relative z-10 flex flex-wrap gap-2.5 pt-5 mt-6 border-t border-[#2A2A35]/60">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-[#1C1C26] text-[#A5A2AE] border border-[#2A2A35]/80 group-hover:border-[#9367FF]/30 hover:!border-[#9367FF] hover:!text-[#F5F3F7] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Expertise;

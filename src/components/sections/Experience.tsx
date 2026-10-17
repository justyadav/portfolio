import { motion } from 'framer-motion';
import { timeline, whatIDo } from '../../data/portfolio';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '../../utils/animations';
import { Briefcase, ArrowRight } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 bg-[#08080D] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-[#9367FF]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-48 w-96 h-96 bg-[#7B263B]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 xl:gap-20 items-start"
        >
          {/* Left side (~60%): Professional Timeline */}
          <motion.div variants={slideInLeft} className="lg:col-span-7">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9367FF]/10 border border-[#9367FF]/20 mb-5">
              <Briefcase className="w-3.5 h-3.5 text-[#9367FF]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-widest text-[#9367FF] uppercase">
                CAREER JOURNEY
              </span>
            </div>

            {/* Heading in serif */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-[#F5F3F7] leading-[1.25] mb-12 sm:mb-16 space-y-2">
              <span className="block">Experience &amp;</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9367FF] to-[#D4B3FF]">
                Journey
              </span>
            </h2>

            {/* Vertical timeline */}
            <div className="relative pl-7 sm:pl-9 border-l border-[#9367FF]/30 space-y-12 sm:space-y-16">
              {timeline.map((entry, index) => (
                <motion.div
                  key={`${entry.organization}-${index}`}
                  variants={fadeInUp}
                  className="relative group"
                >
                  {/* Timeline node circle */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#08080D] border-2 border-[#9367FF] shadow-[0_0_12px_rgba(147,103,255,0.6)] group-hover:bg-[#9367FF] group-hover:scale-125 transition-all duration-300" />
                  </div>

                  {/* Date badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3.5">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#9367FF]/15 text-[#9367FF] border border-[#9367FF]/30">
                      {entry.current && (
                        <span
                          className="relative flex h-2 w-2"
                          aria-label="Current role"
                          title="Current role"
                        >
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                      )}
                      {entry.date}
                    </span>
                  </div>

                  {/* Role title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3F7] tracking-tight mb-2 group-hover:text-white transition-colors">
                    {entry.role}
                  </h3>

                  {/* Organization name */}
                  <p className="text-base sm:text-lg font-medium text-[#9367FF] mb-4">
                    {entry.organization}
                  </p>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-[#A5A2AE] leading-[1.85] mb-5">
                    {entry.description}
                  </p>

                  {/* Skill tags */}
                  {entry.skills && entry.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2.5">
                      {entry.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 text-xs rounded-xl bg-[#15151C] text-[#A5A2AE] border border-[#2A2A35] hover:border-[#9367FF]/40 hover:text-[#F5F3F7] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side (~40%): What I Do panel */}
          <motion.div variants={slideInRight} className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-card rounded-2xl border border-[#2A2A35] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Top ambient accent glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 bg-[#9367FF]/10 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#9367FF]" />
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#9367FF] font-semibold">
                  Core Disciplines
                </h3>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F3F7] leading-tight mb-8">
                What I Do
              </h4>

              <div className="space-y-6 sm:space-y-7">
                {whatIDo.map((item, index) => (
                  <div
                    key={index}
                    className="group relative pl-5 border-l-2 border-[#2A2A35] hover:border-[#9367FF] transition-all duration-300 pb-2"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h5 className="text-base sm:text-lg font-semibold text-[#F5F3F7] group-hover:text-[#9367FF] transition-colors">
                        {item.title}
                      </h5>
                      <ArrowRight className="w-4 h-4 text-[#A5A2AE] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#9367FF] transition-all duration-200" />
                    </div>
                    <p className="text-sm sm:text-base text-[#A5A2AE] leading-[1.8]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;

import { motion } from 'framer-motion';
import { about } from '../../data/portfolio';
import { Server, Bot, Globe, Shield, Trophy } from 'lucide-react';

const highlightIcons = [Server, Bot, Globe, Shield];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#09090b] overflow-hidden">
      {/* Background Subtle Radial */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{about.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
            {about.heading}
          </h2>
        </div>

        {/* 2-Column Story & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative paragraphs & Athletic foundation badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            {about.bioParagraphs.map((para, i) => (
              <p key={i} className="text-zinc-400">
                {para}
              </p>
            ))}

            {/* Rugby Athlete Discipline Callout */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/20 via-zinc-900/50 to-emerald-950/20 border border-cyan-500/20 backdrop-blur-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                <Trophy className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  National Rugby Discipline × Systems Mindset
                </h3>
                <p className="text-xs text-zinc-400 leading-normal">
                  High-stakes athletic competition built extreme composure under high-concurrency spikes, system incidents, and mission-critical deployment deadlines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((item, idx) => {
              const IconComp = highlightIcons[idx % highlightIcons.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 flex flex-col justify-between group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
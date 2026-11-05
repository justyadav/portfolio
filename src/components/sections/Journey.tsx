import { motion } from 'framer-motion';
import { journeyMilestones } from '../../data/portfolio';
import { Check, Calendar } from 'lucide-react';

export function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 relative bg-[#09090b] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>CHRONOLOGY & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
            Engineering Journey & Milestones
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl font-normal">
            From national athletic arenas to high-concurrency cloud systems leadership.
          </p>
        </div>

        {/* Vertical Timeline with Continuous Connector */}
        <div className="relative border-l border-cyan-500/30 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12 sm:space-y-16">
          {journeyMilestones.map((item, idx) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Node Beacon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#09090b] border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.6)]" />

              {/* Glassmorphic Milestone Card */}
              <div className="glass-card p-6 sm:p-8">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 font-semibold">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400/80 mb-4">
                  {item.role}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Key Bullet Achievements */}
                <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                      <div className="w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
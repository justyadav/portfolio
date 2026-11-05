import { motion } from 'framer-motion';
import { techStackData } from '../../data/portfolio';
import { Code2, Cpu, Database, Server, CheckCircle2 } from 'lucide-react';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Languages: Code2,
  'Frameworks & Runtimes': Cpu,
  'Database & Caching': Database,
  'DevOps & Cloud': Server,
};

export function TechStack() {
  return (
    <section id="stack" className="py-24 sm:py-32 relative bg-[#09090b] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>TOOLING & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
            Engineered for high concurrency, low latency, and zero downtime.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl font-normal">
            A production-tested stack optimized across bare-metal server nodes, async backend runtimes, and responsive reactive interfaces.
          </p>
        </div>

        {/* 4-Column Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStackData.map((category, catIdx) => {
            const IconComp = categoryIcons[category.category] || Code2;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-400 font-semibold">
                      {category.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-6">
                    {category.category}
                  </h3>

                  {/* Skills List with Badges */}
                  <div className="space-y-3.5 mb-6">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-zinc-200">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer validation pip */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Production Tested</span>
                  </span>
                  <span>{category.items.length} Techs</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
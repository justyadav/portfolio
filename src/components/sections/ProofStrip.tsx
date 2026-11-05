import { motion } from 'framer-motion';
import { statsStrip } from '../../data/portfolio';
import { RollingNumber } from '../ui/RollingNumber';
import { Clock, Users, Server, Activity } from 'lucide-react';

const icons = [Clock, Users, Server, Activity];

export function ProofStrip() {
  return (
    <section aria-label="Real-time KPI metrics" className="relative z-20 w-full py-8 sm:py-12 bg-[#09090b]">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {statsStrip.map((item, index) => {
            const IconComponent = icons[index % icons.length];

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-cyan-300 transition-colors">
                    {item.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <RollingNumber
                      value={item.metric}
                      className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
                      suffixClassName="font-mono text-2xl text-cyan-400 font-semibold ml-0.5"
                      separateSuffix={true}
                    />
                  </div>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProofStrip;
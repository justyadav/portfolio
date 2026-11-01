import { motion } from 'framer-motion';
import { proofStrip } from '../../data/portfolio';

export function ProofStrip() {
  return (
    <section aria-label="Career highlights" className="proof-grid w-full relative z-20">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] py-8 sm:py-10">
          {proofStrip.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-5 sm:py-2 first:pl-0 last:pr-0"
            >
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="font-sans font-light text-2xl sm:text-4xl tracking-tight text-[#f1eee8]">
                  {item.metric.replace('+', '')}
                </span>
                <span className="font-mono text-2xl text-[#ff8c59] font-medium">
                  {item.metric.includes('+') ? '+' : item.metric.includes('%') ? '%' : ''}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#c2bfb8] font-normal leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProofStrip;

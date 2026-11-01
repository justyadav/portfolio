import { motion } from 'framer-motion';
import { impact } from '../../data/portfolio';

export function Impact() {
  return (
    <section id="impact" className="py-24 sm:py-36 relative bg-[#030303] overflow-hidden">
      <div className="section-container">
        {/* Chapter Header */}
        <div className="chapter-header">
          <span className="chapter-number">{impact.chapterNumber} / {impact.chapterLabel}</span>
          <span className="chapter-subtitle">{impact.chapterSubtitle}</span>
        </div>

        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.15] max-w-3xl mb-6">
            {impact.displayHeadline}
          </h2>
          <p className="text-base sm:text-lg text-[#c2bfb8] max-w-2xl leading-relaxed">
            {impact.introText}
          </p>
        </motion.div>

        {/* Reach Strip with Large Display Numbers (Sarthak style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 pt-8 border-t border-white/[0.08]">
          {impact.stats.map((stat, idx) => (
            <motion.div
              key={stat.metric}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col"
            >
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#f1eee8] tracking-tight mb-3">
                {stat.number}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#ff8c59] font-medium mb-3">
                {stat.metric}
              </div>
              <p className="text-xs sm:text-sm text-[#c2bfb8] leading-relaxed">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;

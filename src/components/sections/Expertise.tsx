import { motion } from 'framer-motion';
import { expertise } from '../../data/portfolio';

export function Expertise() {
  return (
    <section id="expertise" className="py-24 sm:py-36 relative bg-[#030303] overflow-hidden">
      <div className="section-container">
        {/* Chapter Header */}
        <div className="chapter-header">
          <span className="chapter-number">{expertise.chapterNumber} / {expertise.chapterLabel}</span>
          <span className="chapter-subtitle">{expertise.chapterSubtitle}</span>
        </div>

        {/* Display Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.15] max-w-3xl">
            {expertise.displayHeadline}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#c2bfb8] max-w-xl">
            Disciplined software engineering paired with hands-on infrastructure operations. Built for performance, uptime, and maintainability.
          </p>
        </motion.div>

        {/* 4-Tier Categorized Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 sm:mb-28">
          {expertise.tiers.map((tier, idx) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="editorial-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs tracking-widest text-[#ff8c59] uppercase block mb-3">
                  TIER 0{idx + 1}
                </span>
                <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#f1eee8] mb-3">
                  {tier.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c2bfb8] leading-relaxed mb-6 font-normal">
                  {tier.context}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                {tier.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-[#161616] border border-white/[0.08] text-[#f1eee8]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#ff8c59]" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3-Step Execution Philosophy (Sarthak style: 01, 02, 03) */}
        <div className="pt-12 border-t border-white/[0.08]">
          <span className="block font-mono text-xs uppercase tracking-widest text-[#b0ada6] mb-8">
            THE EXECUTION PHILOSOPHY
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {expertise.processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display italic text-3xl sm:text-4xl text-[#ff8c59]">
                    {step.number}
                  </span>
                  <h4 className="font-sans font-semibold text-base sm:text-lg text-[#f1eee8]">
                    {step.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#c2bfb8] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;

import { motion } from 'framer-motion';
import { achievements } from '../../data/portfolio';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Award, Rocket, Shield } from 'lucide-react';

export function Achievements() {
  const milestoneIcons = [Rocket, Award, Shield];

  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 bg-[#08080D] overflow-hidden"
    >
      {/* Background ambient gradient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#7B263B]/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-20 md:mb-24"
        >
          <span className="text-xs font-semibold tracking-widest text-[#9367FF] uppercase mb-4 inline-block">
            MILESTONES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F3F7] leading-[1.25] space-y-2">
            <span className="block">Achievements &amp;</span>
            <span className="block">Highlights</span>
          </h2>
        </motion.div>

        {/* 3 cards responsive grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {achievements.map((item, index) => {
            const Icon = milestoneIcons[index % milestoneIcons.length];
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group border border-[#2A2A35] hover:border-[#9367FF]/40 transition-colors duration-300"
              >
                {/* 3px height violet accent line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#9367FF] via-[#7B263B] to-[#9367FF]"
                  aria-hidden="true"
                />

                {/* Subtle card glow on hover */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 bg-[#9367FF]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#9367FF]/10 border border-[#9367FF]/20 flex items-center justify-center text-[#9367FF] mb-6 group-hover:scale-110 group-hover:bg-[#9367FF]/20 transition-all duration-300">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F3F7] group-hover:text-white transition-colors mb-3.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#A5A2AE] leading-[1.8]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center text-xs text-[#A5A2AE]/70 mt-12 sm:mt-16"
        >
          This section is updated as new milestones are achieved.
        </motion.p>
      </div>
    </section>
  );
}

export default Achievements;

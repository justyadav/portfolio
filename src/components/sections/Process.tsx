import { motion } from 'framer-motion';
import { process } from '../../data/portfolio';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export function Process() {
  return (
    <section
      id="process"
      className="relative py-28 md:py-36 bg-[#08080D] overflow-hidden"
    >
      {/* Subtle ambient glow in center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#9367FF]/5 blur-[140px] rounded-full pointer-events-none"
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
            HOW I WORK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F3F7] leading-[1.25]">
            My Development
            <br className="hidden sm:inline" /> Process
          </h2>
        </motion.div>

        {/* 5-step process container */}
        <div className="relative">
          {/* Horizontal connecting lines for desktop */}
          <div
            className="hidden lg:block absolute top-[34px] left-[6%] right-[6%] h-[1px] bg-[#9367FF]/20 pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            className="hidden lg:block absolute top-[34px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#9367FF]/40 via-[#9367FF] to-[#7B263B] pointer-events-none origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            aria-hidden="true"
          />

          {/* Vertical connecting lines for mobile */}
          <div
            className="lg:hidden absolute left-[15px] top-4 bottom-8 w-[1px] bg-[#9367FF]/20 pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            className="lg:hidden absolute left-[15px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#9367FF] via-[#7B263B] to-[#9367FF] pointer-events-none origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            aria-hidden="true"
          />

          {/* Steps Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 relative"
          >
            {process.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="relative flex flex-col pl-10 lg:pl-0 group"
              >
                {/* Mobile node indicator */}
                <div
                  className="lg:hidden absolute left-[15px] top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#08080D] border-2 border-[#9367FF] group-hover:bg-[#9367FF] transition-colors shadow-[0_0_8px_rgba(147,103,255,0.4)]"
                  aria-hidden="true"
                />

                {/* Step number: large in serif, violet */}
                <div className="font-serif text-4xl sm:text-6xl font-bold text-[#9367FF]/25 group-hover:text-[#9367FF]/70 transition-colors duration-300 leading-none mb-5 select-none">
                  {item.step}
                </div>

                {/* Step Title: white, title-case, tracking-wide */}
                <h3 className="text-white font-semibold text-base sm:text-lg tracking-wide mb-3 group-hover:text-[#F5F3F7] transition-colors">
                  {item.title}
                </h3>

                {/* Step Description: muted, text-sm */}
                <p className="text-[#A5A2AE] text-sm sm:text-base leading-[1.8]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Process;

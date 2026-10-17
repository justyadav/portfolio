import { motion } from 'framer-motion';
import { about } from '../../data/portfolio';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export function About() {
  const headingLines = about.heading.split('\n');

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-28 sm:py-36 section-container overflow-hidden"
    >
      {/* Decorative ambient gradients */}
      <div
        className="absolute -right-24 top-1/4 w-96 h-96 rounded-full bg-[#9367FF]/5 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-1/3 w-80 h-80 rounded-full bg-[#7B263B]/5 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle abstract geometric accent */}
      <div
        className="hidden xl:block absolute right-6 top-16 w-28 h-28 border border-[#9367FF]/15 rounded-2xl rotate-12 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-2 border border-[#9367FF]/10 rounded-xl -rotate-6" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {/* Header: Section label + Large editorial serif heading */}
        <motion.div variants={fadeInUp} className="max-w-4xl mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-[#9367FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9367FF]">
              {about.sectionLabel}
            </span>
          </div>

          <h2
            id="about-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.25] text-[#F5F3F7] tracking-tight space-y-2"
          >
            {headingLines.map((line, idx) => (
              <span key={idx} className="block">
                {line.includes('&') ? (
                  <>
                    {line.split('&')[0]}
                    <span className="text-[#9367FF] font-serif">&</span>
                    {line.split('&')[1]}
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Asymmetrical 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column (~60%): Biography */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-7 sm:space-y-8">
            {about.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg sm:text-xl leading-[1.85] text-[#A5A2AE] font-normal"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right Column (~40%): Capabilities */}
          <motion.div variants={fadeInUp} className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#15151C] border border-[#2A2A35] p-7 sm:p-9 overflow-hidden shadow-xl">
              {/* Subtle top violet accent gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9367FF] to-transparent"
                aria-hidden="true"
              />

              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9367FF] mb-8 flex items-center gap-2">
                <span>Core Capabilities &amp; Focus</span>
              </h3>

              <ul className="space-y-5">
                {about.capabilities.map((capability, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="mt-2.5 flex h-2 w-2 shrink-0 items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9367FF] shadow-[0_0_8px_rgba(147,103,255,0.7)] group-hover:scale-125 transition-transform duration-200" />
                    </div>
                    <span className="text-base sm:text-lg text-[#F5F3F7]/90 font-medium leading-relaxed group-hover:text-[#F5F3F7] transition-colors duration-200">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Full-width highlight quote */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 sm:mt-28 pt-14 sm:pt-18 border-t border-[#2A2A35]/80"
        >
          <div className="relative pl-8 sm:pl-10 border-l-2 border-[#9367FF]">
            <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#F5F3F7] leading-relaxed">
              &ldquo;{about.highlight}&rdquo;
            </blockquote>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;

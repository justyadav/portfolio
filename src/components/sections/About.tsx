import { motion } from 'framer-motion';
import { about } from '../../data/portfolio';
import { getAssetUrl } from '../../utils/assets';
import defaultPortrait from '../../assets/portrait.png';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-36 relative bg-[#030303] overflow-hidden">
      <div className="section-container">
        {/* Chapter Header (Sarthak style) */}
        <div className="chapter-header">
          <span className="chapter-number">{about.chapterNumber} / {about.chapterLabel}</span>
          <span className="chapter-subtitle">{about.chapterSubtitle}</span>
        </div>

        {/* Section Display Heading in Instrument Serif */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.15] max-w-4xl mb-16 sm:mb-24"
        >
          {about.displayHeadline}
        </motion.h2>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait Card & Identity Notes */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b0b] group shadow-2xl">
              <img
                src={getAssetUrl('/images/portrait.png')}
                onError={(e) => {
                  if (e.currentTarget.src !== defaultPortrait) {
                    e.currentTarget.src = defaultPortrait;
                  }
                }}
                alt="Manish Yadav"
                className="w-full h-auto object-cover object-center aspect-[4/5] filter contrast-105 brightness-95 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 right-5 font-mono text-[11px] text-[#aaa9a4] tracking-wider uppercase">
                {about.identityNotes}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#8c8c8c] px-1">
              <span>FOUNDER · DEVELOPER</span>
              <span className="text-[#ff8c59]">ARIXBYTE LTD</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Pull Quote & Core Disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Story Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#aaa9a4] leading-[1.8] font-normal mb-10 sm:mb-12">
              {about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Editorial Pull Quote in Serif */}
            <blockquote className="p-6 sm:p-8 rounded-2xl bg-[#0b0b0b] border-l-2 border-[#ff8c59] border-y border-r border-white/[0.06] mb-10 sm:mb-12 shadow-lg">
              <p className="font-display italic text-xl sm:text-2xl lg:text-3xl text-[#f1eee8] leading-snug">
                {about.pullQuote}
              </p>
            </blockquote>

            {/* Core Disciplines List */}
            <div>
              <span className="block font-mono text-xs uppercase tracking-widest text-[#8c8c8c] mb-4">
                CORE DISCIPLINES & FOCUS
              </span>
              <div className="flex flex-wrap gap-2.5">
                {about.disciplines.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono text-[#f1eee8] bg-[#141414] border border-white/10 hover:border-[#ff8c59]/50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59] mr-2" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

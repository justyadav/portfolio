import { motion } from 'framer-motion';
import { journey } from '../../data/portfolio';

export function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-36 relative bg-[#030303] overflow-hidden">
      <div className="section-container">
        {/* Chapter Header */}
        <div className="chapter-header">
          <span className="chapter-number">{journey.chapterNumber} / {journey.chapterLabel}</span>
          <span className="chapter-subtitle">{journey.chapterSubtitle}</span>
        </div>

        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.15] max-w-3xl">
            {journey.displayHeadline}
          </h2>
        </motion.div>

        {/* Timeline Stream */}
        <div className="relative border-l border-white/[0.1] pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12 sm:space-y-16">
          {journey.milestones.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#030303] border-2 border-[#ff8c59] group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(255,140,89,0.5)]" />

              {/* Year and Tag */}
              <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                <span className="text-xl sm:text-2xl font-display text-[#f1eee8] font-normal">
                  {milestone.year}
                </span>
                <span className="text-[10px] tracking-widest text-[#ff8c59] uppercase px-2 py-0.5 rounded bg-[#161616] border border-white/10">
                  {milestone.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#f1eee8] mb-2 tracking-tight">
                {milestone.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#aaa9a4] max-w-2xl leading-relaxed">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;

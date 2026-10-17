import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  heading: string;
  className?: string;
}

export function SectionHeading({ label, heading, className = '' }: SectionHeadingProps) {
  const lines = heading.split('\n');

  return (
    <motion.div
      className={`mb-16 sm:mb-20 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className="inline-block text-xs font-semibold tracking-[0.3em] text-[#9367FF] uppercase mb-4 sm:mb-5">
        {label}
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.25] text-[#F5F3F7] space-y-2">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </motion.div>
  );
}

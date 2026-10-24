import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { hero, siteConfig } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getAssetUrl } from '../../utils/assets';
import defaultPortrait from '../../assets/portrait.jpg';

// Custom Lucide-styled LinkedIn icon component
function Linkedin({
  className = 'w-4 h-4',
  size = 16,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [descriptorIndex, setDescriptorIndex] = useState(0);

  // Rotating descriptors cycle every 3.5 seconds
  useEffect(() => {
    if (!hero.rotatingDescriptors || hero.rotatingDescriptors.length <= 1) return;
    const interval = setInterval(() => {
      setDescriptorIndex((prev) => (prev + 1) % hero.rotatingDescriptors.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden bg-[#08080D]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] violet-glow rounded-full opacity-35 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] burgundy-glow rounded-full opacity-20 blur-[120px] pointer-events-none -z-10" />

      {/* Cinematic Centered Background Portrait (Reference Inspired) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden select-none">
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
          <img
            src={hero.portrait ? getAssetUrl(hero.portrait) : defaultPortrait}
            alt=""
            aria-hidden="true"
            className="w-full h-full max-h-[920px] object-cover sm:object-contain object-center opacity-65 md:opacity-80 filter contrast-110 brightness-95"
          />
          {/* Subtle multi-directional gradient vignette blending portrait into #08080D canvas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080D] via-[#08080D]/40 to-[#08080D]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080D] via-transparent to-[#08080D]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08080D]/30 to-[#08080D]" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="section-container w-full flex-1 flex items-center py-8 sm:py-12 z-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: INTRO & HEADLINES ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small uppercase intro badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#15151C]/90 border border-[#2A2A35] shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#9367FF] animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-[#9367FF]">
                  {hero.topline}
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-6 sm:mb-8"
            >
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#A5A2AE] font-normal mb-3 sm:mb-4 tracking-normal">
                {hero.greeting}
              </p>
              <h1 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F5F3F7] tracking-tight leading-[1.1] drop-shadow-[0_0_35px_rgba(147,103,255,0.25)]">
                {hero.name}
              </h1>
            </motion.div>

            {/* Headline — Developer, Builder, Entrepreneur (CTO × CMO removed) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8 sm:mb-10"
            >
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#9367FF] via-[#B894FF] to-[#EAB308] bg-clip-text text-transparent tracking-wide">
                {hero.headline[0]}
              </p>
            </motion.div>

            {/* Description paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#A5A2AE] text-base sm:text-lg lg:text-xl leading-[1.85] max-w-xl mb-10 sm:mb-12 font-normal"
            >
              {hero.description}
            </motion.p>

            {/* Two CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap items-center gap-5"
            >
              {/* Primary Filled Violet Button */}
              <a
                href={hero.cta.primary.href}
                onClick={(e) => handleSmoothScroll(e, hero.cta.primary.href)}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#9367FF] hover:bg-[#7B52E0] text-white font-medium text-base shadow-[0_0_25px_rgba(147,103,255,0.35)] hover:shadow-[0_0_35px_rgba(147,103,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9367FF] cursor-pointer"
              >
                {hero.cta.primary.label}
              </a>

              {/* Secondary Outlined Button */}
              <a
                href={hero.cta.secondary.href}
                onClick={(e) => handleSmoothScroll(e, hero.cta.secondary.href)}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#2A2A35] hover:border-[#9367FF] bg-[#15151C]/60 hover:bg-[#15151C] text-[#F5F3F7] hover:text-white font-medium text-base backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9367FF] cursor-pointer"
              >
                {hero.cta.secondary.label}
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: EDITORIAL GRAPHIC ACCENTS (REFERENCE INSPIRED) ================= */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex flex-col items-center lg:items-end gap-6"
            >
              {/* Editorial Graphic Cluster (from reference image) */}
              <div className="flex items-center gap-4 bg-[#15151C]/60 backdrop-blur-md p-5 rounded-2xl border border-[#2A2A35]/60 shadow-2xl">
                {/* Small white dot */}
                <div className="w-4 h-4 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                {/* White circular ring */}
                <div className="w-12 h-12 rounded-full border-4 border-white/90 flex items-center justify-center" />
                {/* Gold / Amber accent sphere */}
                <div className="w-16 h-16 rounded-full bg-[#EAB308] shadow-[0_0_30px_rgba(234,179,8,0.45)]" />
              </div>

              {/* Tagline label */}
              <div className="text-sm font-mono tracking-[0.25em] text-[#EAB308] uppercase font-semibold text-center lg:text-right">
                strategy • code • systems
              </div>

              {/* Delicate vertical pin line with glowing node (from reference image) */}
              <div className="hidden lg:flex flex-col items-center my-4 mr-10">
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#A5A2AE]/40 to-transparent relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-white absolute top-1/2 -left-[4px] shadow-[0_0_10px_white]" />
                </div>
              </div>

              {/* Rotating descriptor badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="px-5 py-2.5 rounded-full bg-[#15151C]/90 border border-[#2A2A35] shadow-lg flex items-center gap-3 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#9367FF]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#9367FF] font-semibold">
                  Mindset:
                </span>
                <div className="h-6 overflow-hidden flex items-center min-w-[170px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={descriptorIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="font-serif italic text-sm sm:text-base text-[#F5F3F7] tracking-wide"
                    >
                      {hero.rotatingDescriptors[descriptorIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR (EDITORIAL FOOTER) ================= */}
      <div className="section-container w-full relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#2A2A35]/50">
        {/* Bottom-left: Reference-style editorial copyright tagline */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#A5A2AE]/80 tracking-wide text-center sm:text-left">
          <span>
            <strong className="font-semibold text-[#F5F3F7]">{siteConfig.name.toLowerCase()}</strong> {new Date().getFullYear()} — created with passion, engineering & vision.
          </span>
          {hero.linkedIn && hero.linkedIn.trim() !== '' && (
            <a
              href={hero.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-1.5 rounded-full bg-[#15151C] border border-[#2A2A35] hover:border-[#9367FF] text-[#A5A2AE] hover:text-[#9367FF] transition-colors inline-flex items-center"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Bottom-right: Scroll Indicator + Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-5 sm:gap-7"
        >
          {hero.availability && hero.availability.trim() !== '' && (
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#15151C]/90 border border-[#2A2A35] text-xs font-medium text-[#A5A2AE] shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{hero.availability}</span>
            </div>
          )}

          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, '#about')}
            aria-label="Scroll down to About section"
            className="p-3 rounded-full border border-[#2A2A35] hover:border-[#9367FF]/50 bg-[#15151C]/60 hover:bg-[#15151C] text-[#A5A2AE] hover:text-[#F5F3F7] transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9367FF] cursor-pointer"
          >
            <motion.div
              animate={prefersReduced ? {} : { y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 group-hover:text-[#9367FF] transition-colors" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Subtle bottom gradient overlay for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-[#08080D] via-[#08080D]/60 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
    </section>
  );
}

export default Hero;

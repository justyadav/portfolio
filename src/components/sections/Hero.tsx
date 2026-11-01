import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { hero, siteConfig } from '../../data/portfolio';
import { getAssetUrl } from '../../utils/assets';
import defaultPortrait from '../../assets/portrait.webp';

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative min-h-[95vh] w-full flex flex-col justify-between pt-32 pb-14 sm:pt-40 sm:pb-20 overflow-hidden bg-[#030303]"
    >
      {/* Background Studio Portrait with Seamless Radial & Edge Vignette */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden select-none">
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
          <img
            src={hero.portrait ? getAssetUrl(hero.portrait) : defaultPortrait}
            alt=""
            aria-hidden="true"
            width={1024}
            height={576}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full max-h-[880px] object-cover sm:object-contain object-center opacity-40 sm:opacity-55 filter contrast-105 brightness-90 transition-opacity duration-1000"
          />
          {/* Multi-directional vignette dissolving portrait into #030303 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-[#030303]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030303_75%)]" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="section-container w-full flex-1 flex flex-col justify-center relative z-10 py-6 sm:py-10">
        <div className="max-w-4xl">
          {/* Topline & Kicker (Sarthak style) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#c2bfb8]"
          >
            <span className="text-[#ff8c59] font-medium">{hero.topline}</span>
            <span className="opacity-40">·</span>
            <span>{hero.kicker}</span>
          </motion.div>

          {/* Giant Display Headline in Instrument Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f1eee8] leading-[1.05] tracking-tight mb-6 sm:mb-8 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
          >
            {hero.displayHeadline}
          </motion.h1>

          {/* Name & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 mb-10 sm:mb-12"
          >
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight">
              {siteConfig.name}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#c2bfb8] font-normal leading-[1.75] max-w-2xl">
              {hero.leadText}
            </p>
          </motion.div>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <a
              href={hero.ctaPrimary.href}
              onClick={(e) => handleSmoothScroll(e, hero.ctaPrimary.href)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f1eee8] hover:bg-white text-[#030303] font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(241,238,232,0.25)] group"
            >
              <span>{hero.ctaPrimary.label}</span>
              <ArrowUpRight className="w-4 h-4 text-[#030303] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={hero.ctaSecondary.href}
              onClick={(e) => handleSmoothScroll(e, hero.ctaSecondary.href)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-[#0b0b0b]/60 hover:bg-[#141414] hover:border-white/30 text-[#f1eee8] font-medium text-sm tracking-wide transition-all duration-300 backdrop-blur-sm"
            >
              <span>{hero.ctaSecondary.label}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Meta Strip */}
      <div className="section-container w-full relative z-10 flex items-center justify-between pt-6 border-t border-white/[0.08] text-xs font-mono text-[#b0ada6]">
        {/* Left: Location Coordinates */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59]" />
          <span>{hero.coordinates}</span>
        </div>

        {/* Right: Scroll Indicator */}
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, '#about')}
          className="min-h-[44px] min-w-[44px] inline-flex items-center gap-2 text-[#c2bfb8] hover:text-[#f1eee8] transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="hidden sm:inline">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;

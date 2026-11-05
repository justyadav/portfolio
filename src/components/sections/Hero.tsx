import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Copy, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DiscordIcon } from '../ui/Icons';
import { hero, siteConfig } from '../../data/portfolio';
import defaultPortrait from '../../assets/portrait.webp';

export function Hero() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(hero.socials.discordHandle);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2200);
  };

  return (
    <section
      id="top"
      aria-label="Hero Overview"
      className="relative min-h-[92vh] w-full flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#09090b]"
    >
      {/* Ambient Radial Glow Overlays */}
      <div className="ambient-glow-top" aria-hidden="true" />
      <div className="ambient-glow-emerald right-[-100px] top-[20%]" aria-hidden="true" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio, Titles, CTAs, Socials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 w-fit mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium">{hero.statusBadge}</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">{hero.subtitle}</span>
            </motion.div>

            {/* Name & Handle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                {hero.name}
                <span className="block text-2xl sm:text-3xl font-mono font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 mt-2">
                  ({hero.handle})
                </span>
              </h1>
            </motion.div>

            {/* Title / Role */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-zinc-300 tracking-tight mb-6"
            >
              {siteConfig.title}
            </motion.h2>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mb-8"
            >
              {hero.bio}
            </motion.p>

            {/* Primary & Secondary CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href={hero.ctaPrimary.href}
                onClick={(e) => handleSmoothScroll(e, hero.ctaPrimary.href)}
                className="btn-primary"
              >
                <span>{hero.ctaPrimary.label}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-950" />
              </a>

              <a
                href={hero.ctaSecondary.href}
                onClick={(e) => handleSmoothScroll(e, hero.ctaSecondary.href)}
                className="btn-secondary"
              >
                <span>{hero.ctaSecondary.label}</span>
              </a>
            </motion.div>

            {/* Quick Social Links Bar with Interactive Discord Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mr-2">
                DIRECT CONNECT:
              </span>

              {/* GitHub */}
              <a
                href={hero.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon !h-9 !w-9 !rounded-lg"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={hero.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon !h-9 !w-9 !rounded-lg"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${hero.socials.email}`}
                className="btn-icon !h-9 !w-9 !rounded-lg"
                aria-label="Send Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Discord Copy Button Pill */}
              <button
                onClick={handleCopyDiscord}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-cyan-500/10 text-xs font-mono text-zinc-300 transition-all cursor-pointer"
                title="Click to copy Discord tag"
              >
                <DiscordIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>{hero.socials.discordHandle}</span>
                {copiedDiscord ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-500 hover:text-cyan-400 ml-1" />
                )}
              </button>

              {/* Discord Server Link */}
              <a
                href={hero.socials.discordServer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400/80 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/30 ml-1"
              >
                Join Community →
              </a>
            </motion.div>
          </div>

          {/* Right Column: Stylized Asymmetric Avatar Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Cyan Glow Backlight */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-transparent to-emerald-500/20 blur-xl opacity-75" />

              {/* Main Avatar Card Frame */}
              <div className="relative rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-white/10 via-white/[0.03] to-white/[0.05] border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-900">
                  <img
                    src={defaultPortrait}
                    alt={hero.name}
                    width={500}
                    height={625}
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
                  />
                  {/* Subtle inner dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />

                  {/* Floating Verified Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#09090b]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">99.9% Cloud Uptime</div>
                        <div className="text-[10px] text-zinc-400 font-mono">Infrastructure SLA Delivered</div>
                      </div>
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>

                {/* Card Header Meta */}
                <div className="pt-3 px-2 pb-1 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-3 h-3" />
                    <span>SYSTEMS ARCHITECT</span>
                  </span>
                  <span>DELHI · INDIA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
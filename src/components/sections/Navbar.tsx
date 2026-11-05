import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { siteConfig, navigation } from '../../data/portfolio';

export interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#' || href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Left: Brand Logo & Status Indicator */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="group flex items-center gap-2.5 text-inherit no-underline focus:outline-none"
              aria-label={`${siteConfig.name} (${siteConfig.handle}) - Home`}
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {siteConfig.handle}
                </span>
                <span className="text-[10px] text-zinc-400 tracking-wide font-sans hidden sm:block">
                  {siteConfig.name}
                </span>
              </div>
            </a>

            {/* Glowing Availability Beacon */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{siteConfig.availability}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navigation.map((item) => {
              const isActive = activeSection.toLowerCase() === item.id.toLowerCase();

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Compact "Hire Me" Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary !min-h-[38px] !py-1.5 !px-4 !text-xs !font-medium gap-1.5 group"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-icon"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#09090b]/98 backdrop-blur-2xl pt-28 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                NAVIGATION
              </span>
              {navigation.map((item) => {
                const isActive = activeSection.toLowerCase() === item.id.toLowerCase();
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between py-3 border-b border-white/[0.06] text-lg font-medium transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </div>

            <div className="pt-8 border-t border-white/[0.08] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{siteConfig.availability}</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary w-full text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
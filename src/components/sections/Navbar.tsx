import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 40);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
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
      const navbarHeight = 72;
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
            ? 'glass-nav py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Left: Monogram Wordmark + Live Availability Badge */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="group min-h-[44px] flex items-center gap-2.5 text-inherit no-underline focus:outline-none"
              aria-label={`${siteConfig.name} - Home`}
            >
              <span className="font-mono text-xs font-semibold tracking-wider px-2 py-1 rounded bg-[#161616] border border-white/10 text-[#ff8c59] group-hover:border-[#ff8c59]/60 transition-colors">
                {siteConfig.brandSymbol}
              </span>
              <span className="font-sans font-semibold text-sm sm:text-base tracking-tight text-[#f1eee8] group-hover:text-white transition-colors">
                {siteConfig.name}
              </span>
            </a>

            {/* Live Indicator (Sarthak style) */}
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/10 text-xs font-mono text-[#c2bfb8]">
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
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection.toLowerCase() === sectionId.toLowerCase();

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`min-h-[40px] inline-flex items-center px-3 py-1.5 text-xs font-mono tracking-wide rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-[#ff8c59] bg-[#161616] border border-[#ff8c59]/30'
                      : 'text-[#c2bfb8] hover:text-[#f1eee8] hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="opacity-40 mr-1.5">{item.index}</span>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Connect Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-secondary !min-h-[40px] !py-2 !px-4 !text-xs !font-mono gap-1.5 group shadow-sm"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ff8c59] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Hamburger with Accessible 48x48 Target */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center p-2.5 rounded-lg bg-[#141414] border border-white/10 text-[#f1eee8] hover:text-white focus:outline-none cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#030303]/98 backdrop-blur-2xl pt-28 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#b0ada6]">
                INDEX / DIRECTORY
              </span>
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="min-h-[48px] flex items-center justify-between py-3 border-b border-white/10 text-xl font-display text-[#f1eee8] hover:text-[#ff8c59] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#b0ada6]">{item.index}</span>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c2bfb8]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{siteConfig.availability}</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary w-full !rounded-xl"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

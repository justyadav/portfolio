import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig, navigation } from '../../data/portfolio';

export interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 50 : false
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on desktop viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#' || href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#2A2A35]/60'
          : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
      }`}
    >
      <nav
        className="section-container flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Left: Brand Monogram + Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#')}
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9367FF] rounded-xl"
          aria-label={`${siteConfig.name} - Back to top`}
        >
          {/* Monogram with violet gradient */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9367FF] via-[#7B52E0] to-[#7B263B] p-[1.5px] shadow-[0_0_15px_rgba(147,103,255,0.3)] group-hover:shadow-[0_0_25px_rgba(147,103,255,0.6)] group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full bg-[#08080D] rounded-xl flex items-center justify-center">
              <span className="font-serif font-black text-sm tracking-wider bg-gradient-to-r from-white via-[#F5F3F7] to-[#A5A2AE] bg-clip-text text-transparent">
                {siteConfig.monogram}
              </span>
            </div>
          </div>
          {/* Name text */}
          <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-[#F5F3F7] group-hover:text-white transition-colors duration-200">
            {siteConfig.name}
          </span>
        </a>

        {/* Right Desktop: Navigation Links + "Let's Talk" Button */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navigation.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection.toLowerCase() === sectionId.toLowerCase();

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9367FF] rounded-full ${
                  isActive
                    ? 'text-[#F5F3F7]'
                    : 'text-[#A5A2AE] hover:text-[#F5F3F7]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-[#9367FF]/15 border border-[#9367FF]/40 -z-10 shadow-[0_0_12px_rgba(147,103,255,0.25)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* Let's Talk Button */}
          <div className="ml-3 pl-3 border-l border-[#2A2A35]">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#9367FF] to-[#7B263B] shadow-[0_0_20px_rgba(147,103,255,0.3)] hover:shadow-[0_0_30px_rgba(147,103,255,0.55)] hover:brightness-110 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9367FF]"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-[#A5A2AE] hover:text-[#F5F3F7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9367FF] rounded-xl transition-colors"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Animated Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden bg-[#08080D]/95 backdrop-blur-2xl border-b border-[#2A2A35] shadow-2xl"
          >
            <div className="section-container py-6 flex flex-col space-y-3">
              {navigation.map((item, index) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection.toLowerCase() === sectionId.toLowerCase();

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#9367FF]/15 text-[#9367FF] border border-[#9367FF]/30'
                        : 'text-[#A5A2AE] hover:text-[#F5F3F7] hover:bg-[#15151C]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#9367FF] shadow-[0_0_8px_#9367FF]" />
                    )}
                  </motion.a>
                );
              })}

              <div className="pt-3 border-t border-[#2A2A35]/60">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#9367FF] to-[#7B263B] shadow-[0_0_20px_rgba(147,103,255,0.3)] active:scale-95 transition-all"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

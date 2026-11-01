import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../../data/portfolio';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#030303] py-12 relative z-20">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#8c8c8c]">
        {/* Left: Brand / Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-[#f1eee8]">{siteConfig.name}</span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span>{siteConfig.title}</span>
        </div>

        {/* Center: Dynamic Year & Heritage */}
        <div className="text-center">
          <span>© {new Date().getFullYear()} — Built with purpose & precision.</span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-[#aaa9a4] hover:text-[#ff8c59] transition-colors cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;

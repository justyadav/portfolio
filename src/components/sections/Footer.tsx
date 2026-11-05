import { ArrowUp, Terminal } from 'lucide-react';
import { siteConfig } from '../../data/portfolio';

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#09090b] py-12 relative z-20">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-400">
        {/* Left: Brand Monogram & Name */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{siteConfig.name}</span>
            <span className="text-zinc-600">({siteConfig.handle})</span>
            <span className="hidden sm:inline text-zinc-600">·</span>
            <span className="hidden sm:inline text-zinc-400">CTO @ {siteConfig.company}</span>
          </div>
        </div>

        {/* Center: Live SLA status */}
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>99.9% Uptime Verified</span>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-500">© {currentYear}</span>
          <button
            onClick={scrollToTop}
            className="btn-secondary !min-h-[36px] !py-1.5 !px-3.5 !text-xs !font-mono gap-1.5 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
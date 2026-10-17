import { contact, siteConfig } from '../../data/portfolio';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#08080D] border-t border-[#2A2A35] py-14 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#9367FF]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        {/* Monogram / Brand Icon */}
        <div className="mb-6">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9367FF] via-[#7B52E0] to-[#7B263B] p-[1px] shadow-lg shadow-[#9367FF]/20">
              <div className="w-full h-full bg-[#08080D] rounded-xl flex items-center justify-center group-hover:bg-[#15151C] transition-colors">
                <span className="font-serif font-bold text-lg bg-gradient-to-r from-[#9367FF] to-[#F5F3F7] bg-clip-text text-transparent">
                  {siteConfig.monogram}
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Tagline */}
        <p className="font-serif italic text-base sm:text-lg text-[#F5F3F7]/90 tracking-wide mb-3">
          {contact.footer.tagline}
        </p>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-[#A5A2AE] font-mono tracking-wider mb-8">
          {contact.footer.copyright}
        </p>

        {/* Back to top link */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#A5A2AE] hover:text-[#9367FF] transition-colors cursor-pointer group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

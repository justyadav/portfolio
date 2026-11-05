import { motion } from 'framer-motion';
import { reviewsData, type Testimonial } from '../../data/portfolio';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 relative bg-[#09090b] overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-glow-emerald left-1/3 top-1/4" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>CLIENT FEEDBACK & SOCIAL PROOF</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Trusted by Server Owners & Enterprise Clients
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-normal">
            Real feedback from communities running tournament automation, cloud game nodes, and custom Discord bots.
          </p>
        </div>

        {/* 3-Card Responsive Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviewsData.map((item: Testimonial, idx: number) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="glass-card p-7 flex flex-col justify-between group hover:border-emerald-500/35"
            >
              <div>
                {/* Top Meta: Stars & Verification Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Quote Icon */}
                <Quote className="w-7 h-7 text-cyan-500/20 mb-3 group-hover:text-cyan-400/40 transition-colors" />

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Community Info */}
              <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.author}
                  </h3>
                  <div className="text-xs text-zinc-400 font-normal">
                    {item.role}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-zinc-400 text-right">
                  {item.community}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
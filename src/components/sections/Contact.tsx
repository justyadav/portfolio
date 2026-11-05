import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle, Copy, ArrowUpRight, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { contactData } from '../../data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contactData.web3formsKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Project Inquiry',
          message: formData.message,
          from_name: `${formData.name} via Portfolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Submission failed. Please reach out directly via email or Discord.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('A network error occurred. Please connect directly via email or Discord.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#09090b] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-[1.15]">
            {contactData.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl font-normal">
            {contactData.subheading}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Channels & Instant Copy Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Discord Direct Connect Card */}
            <div className="glass-card p-6 group hover:border-cyan-500/40">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase">DISCORD HANDLE</div>
                    <div className="text-sm font-semibold text-white font-mono">{contactData.discordHandle}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(contactData.discordHandle, 'discord')}
                  className="btn-icon !h-8 !w-8"
                  title="Copy Discord handle"
                >
                  {copiedField === 'discord' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedField === 'discord' && (
                <div className="text-[11px] font-mono text-emerald-400 mt-1">
                  ✓ Copied handle to clipboard
                </div>
              )}

              <a
                href={contactData.discordServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 mt-3 pt-3 border-t border-white/[0.06] w-full"
              >
                <span>Join Discord Community Server</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email Direct Card */}
            <div className="glass-card p-6 group hover:border-cyan-500/40">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase">DIRECT EMAIL</div>
                    <div className="text-sm font-semibold text-white">{contactData.email}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(contactData.email, 'email')}
                  className="btn-icon !h-8 !w-8"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedField === 'email' && (
                <div className="text-[11px] font-mono text-emerald-400 mt-1">
                  ✓ Copied email to clipboard
                </div>
              )}

              <a
                href={`mailto:${contactData.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 mt-3 pt-3 border-t border-white/[0.06] w-full"
              >
                <span>Open Mail Client</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Channels Row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={contactData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-3 group hover:border-cyan-500/35"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-cyan-400">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">GitHub</div>
                  <div className="text-[11px] font-mono text-zinc-400">@justyadav</div>
                </div>
              </a>

              <a
                href={contactData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-3 group hover:border-cyan-500/35"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-cyan-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">LinkedIn</div>
                  <div className="text-[11px] font-mono text-zinc-400">Profile</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 sm:p-10"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <p className="text-xs text-zinc-400 font-normal">Average response time: &lt; 24 hours</p>
                </div>
                <Sparkles className="w-5 h-5 text-cyan-400/60" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.05] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-2">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.05] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-zinc-400 mb-2">
                    SUBJECT / PROJECT TYPE
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Discord Bot Automation / Cloud Hosting Deployment"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.05] transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-2">
                    PROJECT DETAILS & REQUIREMENTS *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your server architecture, throughput needs, or technical timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.05] transition-all text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Your inquiry was dispatched successfully! I will follow up shortly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-zinc-950" />
                  <span>{status === 'submitting' ? 'Dispatching...' : 'Send Message'}</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
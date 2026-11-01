import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle, Copy, ArrowUpRight } from 'lucide-react';
import { contact } from '../../data/portfolio';

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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
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
          access_key: contact.web3formsKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Inquiry',
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
        setErrorMessage(result.message || 'Submission failed. Please try again or reach out directly.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again or reach out directly via email.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative bg-[#030303] overflow-hidden">
      <div className="section-container">
        {/* Chapter Header */}
        <div className="chapter-header">
          <span className="chapter-number">{contact.chapterNumber} / {contact.chapterLabel}</span>
          <span className="chapter-subtitle">{contact.chapterSubtitle}</span>
        </div>

        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="font-display italic text-4xl sm:text-6xl text-[#f1eee8] leading-[1.15] max-w-3xl mb-4">
            {contact.displayHeadline}
          </h2>
          <p className="text-base sm:text-lg text-[#c2bfb8] max-w-xl leading-relaxed">
            {contact.description}
          </p>
        </motion.div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="editorial-card p-6 sm:p-8 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#b0ada6] block">
                DIRECT INBOX
              </span>
              <div>
                <p className="text-lg font-mono text-[#f1eee8] font-medium break-all mb-4">
                  {contact.email}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-secondary !min-h-[44px] !px-4 !py-2.5 !text-xs !font-mono gap-1.5"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contact.email}`}
                    className="btn-primary !min-h-[44px] !px-4 !py-2.5 !text-xs !font-mono gap-1.5"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links with WCAG Accessible Touch Target Bounds */}
            <div className="editorial-card p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#b0ada6] block">
                CONNECTED PLATFORMS
              </span>
              <div className="space-y-1">
                {contact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] flex items-center justify-between py-3 text-sm font-mono text-[#c2bfb8] hover:text-[#f1eee8] border-b border-white/[0.06] last:border-none group"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#b0ada6] group-hover:text-[#ff8c59] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="editorial-card p-7 sm:p-9 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#b0ada6] block">
                SEND A MESSAGE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#c2bfb8] mb-2 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-[#030303] border border-white/10 text-sm text-[#f1eee8] placeholder-[#8c8c8c] focus:outline-none focus:border-[#ff8c59] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#c2bfb8] mb-2 uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#030303] border border-white/10 text-sm text-[#f1eee8] placeholder-[#8c8c8c] focus:outline-none focus:border-[#ff8c59] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-[#c2bfb8] mb-2 uppercase">
                  Subject / Project Type
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Infrastructure Consulting / Development"
                  className="w-full px-4 py-3 rounded-xl bg-[#030303] border border-white/10 text-sm text-[#f1eee8] placeholder-[#8c8c8c] focus:outline-none focus:border-[#ff8c59] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[#c2bfb8] mb-2 uppercase">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-[#030303] border border-white/10 text-sm text-[#f1eee8] placeholder-[#8c8c8c] focus:outline-none focus:border-[#ff8c59] transition-colors resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full !min-h-[48px] !py-4 !px-6 text-sm flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

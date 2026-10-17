import { useState } from 'react';
import { motion } from 'framer-motion';
import { contact } from '../../data/portfolio';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Mail, Globe, Send, AlertCircle, Copy, Check, Terminal } from 'lucide-react';

// Custom SVG Icons for maximum reliability
function LinkedInIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function DiscordIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6h0a14.5 14.5 0 0 0-4-1.2 12.3 12.3 0 0 0-.6 1.2 14.1 14.1 0 0 0-2.8 0A12.3 12.3 0 0 0 10 4.8 14.5 14.5 0 0 0 6 6a16.2 16.2 0 0 0-2.5 11 14.2 14.2 0 0 0 4.5 2.2c.4-.5.7-1 1-1.6a9.5 9.5 0 0 1-1.6-.8l.4-.3c3.2 1.5 6.4 1.5 9.4 0l.4.3a9.5 9.5 0 0 1-1.6.8c.3.6.6 1.1 1 1.6a14.2 14.2 0 0 0 4.5-2.2A16.2 16.2 0 0 0 18 6Z" />
      <circle cx="9" cy="12" r="1.5" />
      <circle cx="15" cy="12" r="1.5" />
    </svg>
  );
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'needs-config'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [copiedPayload, setCopiedPayload] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const accessKey =
      (contact as { web3formsKey?: string }).web3formsKey ||
      (import.meta.env.VITE_WEB3FORMS_KEY as string) ||
      '';

    if (!accessKey) {
      console.log('[AEGRA Portfolio] Contact form submitted with payload:', formData);
      setStatus('needs-config');
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
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
        setSubmitError(result.message || 'Failed to deliver message. Please try again or reach out directly.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setSubmitError('A network error occurred. Please try again or reach out directly.');
    }
  };

  const handleCopyMessage = () => {
    const text = `From: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 3000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-28 sm:py-36 bg-[#08080D] overflow-hidden"
    >
      {/* Background ambient glows */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#7B263B]/15 blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-10 w-[450px] h-[450px] rounded-full bg-[#9367FF]/15 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* ================= LEFT COLUMN ================= */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Section Tag */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[1px] bg-[#9367FF]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9367FF]">
                  GET IN TOUCH
                </span>
              </div>

              {/* Main Heading */}
              <h2
                id="contact-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.22] text-[#F5F3F7] tracking-tight mb-8 space-y-2"
              >
                <span className="block">
                  <span>LET'S </span>
                  <span className="text-[#9367FF]">BUILD</span>
                </span>
                <span className="block">WHAT'S NEXT.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#A5A2AE] leading-[1.85] mb-10 max-w-md">
                {contact.description}
              </p>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="space-y-6 pt-4 border-t border-[#2A2A35]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#A5A2AE] mb-3">
                  Direct Channels
                </p>
                <div className="flex flex-wrap gap-3">
                  {contact.email ? (
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#15151C] border border-[#2A2A35] text-[#F5F3F7] text-sm hover:border-[#9367FF] hover:bg-[#1C1C26] transition-all group"
                    >
                      <Mail className="w-4 h-4 text-[#9367FF] group-hover:scale-110 transition-transform" />
                      <span>{contact.email}</span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#15151C]/60 border border-dashed border-[#2A2A35] text-xs font-mono text-[#A5A2AE]">
                      <Mail className="w-3.5 h-3.5 text-[#9367FF]" />
                      <span>email: contact@manishyadav.dev</span>
                    </div>
                  )}

                  {contact.links.arixbyte ? (
                    <a
                      href={contact.links.arixbyte}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#15151C] border border-[#2A2A35] text-[#F5F3F7] text-sm hover:border-[#9367FF] hover:bg-[#1C1C26] transition-all group"
                    >
                      <Globe className="w-4 h-4 text-[#9367FF] group-hover:scale-110 transition-transform" />
                      <span>ArixByte</span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#15151C]/60 border border-dashed border-[#2A2A35] text-xs font-mono text-[#A5A2AE]">
                      <Globe className="w-3.5 h-3.5 text-[#9367FF]" />
                      <span>arixbyte.com</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Profiles Row */}
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#A5A2AE] mb-3">
                  Social Profiles
                </p>
                <div className="flex items-center gap-3">
                  {contact.links.linkedIn ? (
                    <a
                      href={contact.links.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="w-11 h-11 rounded-xl bg-[#15151C] border border-[#2A2A35] flex items-center justify-center text-[#F5F3F7] hover:border-[#9367FF] hover:bg-[#9367FF]/10 transition-all hover:scale-105"
                    >
                      <LinkedInIcon className="w-5 h-5 text-[#9367FF]" />
                    </a>
                  ) : (
                    <span
                      title="LinkedIn (Configurable in src/data/portfolio.ts)"
                      className="w-11 h-11 rounded-xl bg-[#15151C]/60 border border-[#2A2A35] flex items-center justify-center text-[#A5A2AE] opacity-60 cursor-not-allowed"
                    >
                      <LinkedInIcon className="w-5 h-5" />
                    </span>
                  )}

                  {contact.links.github ? (
                    <a
                      href={contact.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="w-11 h-11 rounded-xl bg-[#15151C] border border-[#2A2A35] flex items-center justify-center text-[#F5F3F7] hover:border-[#9367FF] hover:bg-[#9367FF]/10 transition-all hover:scale-105"
                    >
                      <GitHubIcon className="w-5 h-5 text-[#9367FF]" />
                    </a>
                  ) : (
                    <span
                      title="GitHub (Configurable in src/data/portfolio.ts)"
                      className="w-11 h-11 rounded-xl bg-[#15151C]/60 border border-[#2A2A35] flex items-center justify-center text-[#A5A2AE] opacity-60 cursor-not-allowed"
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </span>
                  )}

                  {contact.links.discord ? (
                    <a
                      href={contact.links.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Discord Server"
                      className="w-11 h-11 rounded-xl bg-[#15151C] border border-[#2A2A35] flex items-center justify-center text-[#F5F3F7] hover:border-[#9367FF] hover:bg-[#9367FF]/10 transition-all hover:scale-105"
                    >
                      <DiscordIcon className="w-5 h-5 text-[#9367FF]" />
                    </a>
                  ) : (
                    <span
                      title="Discord Community (Configurable in src/data/portfolio.ts)"
                      className="w-11 h-11 rounded-xl bg-[#15151C]/60 border border-[#2A2A35] flex items-center justify-center text-[#A5A2AE] opacity-60 cursor-not-allowed"
                    >
                      <DiscordIcon className="w-5 h-5" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: INTERACTIVE CONTACT FORM ================= */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 rounded-2xl bg-[#15151C]/80 border border-[#2A2A35] p-6 sm:p-10 backdrop-blur-xl relative shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2A2A35]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9367FF] animate-pulse" />
                <h3 className="text-sm font-semibold tracking-wider text-[#F5F3F7] uppercase">
                  Send a Direct Message
                </h3>
              </div>
              <span className="text-xs font-mono text-[#A5A2AE]">
                Response within 24h
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium uppercase tracking-wider text-[#A5A2AE] mb-2">
                    Your Name <span className="text-[#9367FF]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-[#08080D]/80 border ${
                      errors.name ? 'border-[#7B263B] focus:border-[#7B263B]' : 'border-[#2A2A35] focus:border-[#9367FF]'
                    } text-[#F5F3F7] placeholder-[#A5A2AE]/40 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#E05275] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-wider text-[#A5A2AE] mb-2">
                    Email Address <span className="text-[#9367FF]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#08080D]/80 border ${
                      errors.email ? 'border-[#7B263B] focus:border-[#7B263B]' : 'border-[#2A2A35] focus:border-[#9367FF]'
                    } text-[#F5F3F7] placeholder-[#A5A2AE]/40 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#E05275] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium uppercase tracking-wider text-[#A5A2AE] mb-2">
                  Subject <span className="text-[#9367FF]">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Consultation, Partnership, or Inquiry"
                  className={`w-full px-4 py-3 rounded-xl bg-[#08080D]/80 border ${
                    errors.subject ? 'border-[#7B263B] focus:border-[#7B263B]' : 'border-[#2A2A35] focus:border-[#9367FF]'
                  } text-[#F5F3F7] placeholder-[#A5A2AE]/40 text-sm focus:outline-none transition-colors`}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-[#E05275] flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Row 3: Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-wider text-[#A5A2AE] mb-2">
                  Message <span className="text-[#9367FF]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#08080D]/80 border ${
                    errors.message ? 'border-[#7B263B] focus:border-[#7B263B]' : 'border-[#2A2A35] focus:border-[#9367FF]'
                  } text-[#F5F3F7] placeholder-[#A5A2AE]/40 text-sm focus:outline-none transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-[#E05275] flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#9367FF] to-[#7B263B] text-[#F5F3F7] font-semibold text-sm tracking-wide shadow-lg shadow-[#9367FF]/20 hover:shadow-[#9367FF]/40 hover:opacity-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Processing Submission...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success Notification */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-xl bg-[#15231F] border border-[#10B981]/40 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-[#34D399]" />
                    </div>
                    <div className="text-xs text-[#A5A2AE] space-y-1">
                      <p className="font-semibold text-sm text-[#F5F3F7]">
                        Message Sent Successfully!
                      </p>
                      <p className="leading-relaxed">
                        Thank you for reaching out. Your message has been delivered directly to Manish's inbox. He'll get back to you shortly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end pt-2 border-t border-[#10B981]/20">
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-3 py-1.5 rounded-xl bg-[#08080D] border border-[#2A2A35] text-xs text-[#F5F3F7] hover:border-[#9367FF] transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Error Notification */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-[#231518] border border-[#7B263B]/60 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#E05275] shrink-0 mt-0.5" />
                    <div className="text-xs text-[#A5A2AE] space-y-1">
                      <p className="font-semibold text-[#F5F3F7]">
                        Delivery Failed
                      </p>
                      <p className="text-[#E05275]">
                        {submitError || 'Could not deliver message right now. Please try again or reach out directly.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#7B263B]/30">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#08080D] border border-[#2A2A35] text-xs font-mono text-[#F5F3F7] hover:border-[#9367FF] transition-colors"
                    >
                      {copiedPayload ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#34D399]" />
                          <span>Copied to clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy draft</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Notice state if API endpoint needs configuration */}
              {status === 'needs-config' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-[#1C1C26] border border-[#2A2A35] space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <Terminal className="w-5 h-5 text-[#9367FF] shrink-0 mt-0.5" />
                    <div className="text-xs text-[#A5A2AE] space-y-1">
                      <p className="font-semibold text-[#F5F3F7]">
                        Form validated successfully
                      </p>
                      <p>
                        The form endpoint has been logged to the console. To enable direct live email delivery, connect an email service like <span className="text-[#9367FF]">EmailJS</span>, <span className="text-[#9367FF]">Formspree</span>, or a serverless webhook.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#2A2A35]/60">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#08080D] border border-[#2A2A35] text-xs font-mono text-[#F5F3F7] hover:border-[#9367FF] transition-colors"
                    >
                      {copiedPayload ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#34D399]" />
                          <span>Copied to clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy draft payload</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

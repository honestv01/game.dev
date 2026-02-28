import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Clock, Linkedin, Mail, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
}

interface ContactApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  budget: '',
};

const budgetOptions = ['Under $2K', '$2K - $8K', '$8K - $20K', '$20K+', 'Not sure yet'];

const linkedinUrl = 'https://www.linkedin.com/in/trung-th%C3%A0nh-tr%E1%BA%A7n-1abb6861';
const email = 'codesmith95316@gmail.com';

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setApiError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          budget: form.budget,
          message: form.message.trim(),
        }),
      });
      const data = (await response.json().catch(() => null)) as ContactApiResponse | null;

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || 'Failed to send message');
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again later.';
      console.error('Contact form error:', err);
      setApiError(message);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (apiError) setApiError(null);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-400/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-amber-300/50" />
              <span className="text-amber-300 text-sm font-medium uppercase tracking-widest">Get In Touch</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Let&apos;s build a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300"> Unity or Unreal game</span>
            </h2>

            <p className="text-stone-400 text-lg leading-relaxed mb-10">
              Share your game goals and I will map the right implementation plan for Unity or Unreal,
              including gameplay systems, optimization targets, and release planning.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-300/20 hover:bg-amber-300/[0.02] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-300/10 flex items-center justify-center group-hover:bg-amber-300/20 transition-colors">
                  <Mail size={18} className="text-amber-300" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Email</div>
                  <div className="text-stone-400 text-sm">{email}</div>
                </div>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-yellow-300/30 hover:bg-yellow-300/[0.03] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-yellow-300/10 flex items-center justify-center">
                  <Linkedin size={18} className="text-yellow-300" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">LinkedIn</div>
                  <div className="text-stone-400 text-sm">linkedin.com/in/trung-thanh-tran-1abb6861</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-yellow-300/10 flex items-center justify-center">
                  <MapPin size={18} className="text-yellow-300" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Location</div>
                  <div className="text-stone-400 text-sm">Vietnam - Remote Worldwide</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                  <Clock size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Response Time</div>
                  <div className="text-stone-400 text-sm">Usually within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-stone-400 hover:text-white hover:bg-white/5 transition-all text-sm"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-stone-400 hover:text-white hover:bg-white/5 transition-all text-sm"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-12 rounded-2xl bg-white/[0.02] border border-amber-400/20">
                <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-stone-400 text-lg mb-6">Thanks for reaching out. I will respond as soon as possible.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setApiError(null);
                  }}
                  className="text-amber-300 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {apiError && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-400/10 border border-red-400/20">
                    <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-400 text-sm font-medium">Unable to send message</p>
                      <p className="text-red-400/70 text-sm mt-0.5">{apiError}</p>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-400/50 focus:border-red-400'
                          : 'border-white/10 focus:border-amber-300/30 focus:ring-1 focus:ring-amber-300/20'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-400/50 focus:border-red-400'
                          : 'border-white/10 focus:border-amber-300/30 focus:ring-1 focus:ring-amber-300/20'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-stone-400 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="Unity game, Unreal prototype, platform release"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-300/30 focus:ring-1 focus:ring-amber-300/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-stone-400 text-sm mb-2">Estimated Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleChange('budget', form.budget === opt ? '' : opt)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          form.budget === opt
                            ? 'bg-amber-300/15 text-amber-300 border border-amber-300/30'
                            : 'bg-white/[0.03] text-stone-400 border border-white/5 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-stone-400 text-sm mb-2">Your Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell me about your gameplay goals, target platforms, and required systems."
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none resize-none transition-all ${
                      errors.message
                        ? 'border-red-400/50 focus:border-red-400'
                        : 'border-white/10 focus:border-amber-300/30 focus:ring-1 focus:ring-amber-300/20'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 shimmer-border bg-gradient-to-r from-amber-300 to-yellow-300 text-[#120b03] font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-400/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#120b03]/30 border-t-[#120b03] rounded-full animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




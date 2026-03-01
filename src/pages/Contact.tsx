import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6 md:px-12 min-h-screen flex flex-col justify-center"
    >
      <Helmet>
        <title>Contact — Ravi Singh</title>
        <meta name="description" content="Get in touch with Ravi Singh for creative collaborations, video editing, and art commissions." />
      </Helmet>

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-5xl md:text-7xl text-text-primary mb-8"
          >
            Let's Have a Conversation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl text-text-primary/80 leading-relaxed mb-12"
          >
            Interested in working together? Kindly drop a message.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary mb-1">Email</h3>
                <a href="mailto:raviprakashart00@gmail.com" className="font-sans text-2xl text-text-primary hover:text-accent transition-colors">
                  raviprakashart00@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary mb-1">Location</h3>
                <p className="font-sans text-2xl text-text-primary">
                  Pune, India
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary mb-4">Socials</h3>
              <div className="flex gap-6">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/ravixart/", label: "LinkedIn" },
                  { Icon: Instagram, href: "https://www.instagram.com/_ravixart_/", label: "Instagram" },
                  { Icon: Mail, href: "mailto:raviprakashart00@gmail.com", label: "Email" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="text-text-primary hover:text-accent transition-colors duration-300"
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8 bg-white/50 p-8 md:p-12 rounded-sm border border-divider"
        >
          <input type="hidden" name="title" value="New Contact Form Submission" />
          <div className="space-y-2">
            <label htmlFor="name" className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-transparent border-b border-text-primary/20 py-2 focus:outline-none focus:border-accent transition-colors font-sans text-xl"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-transparent border-b border-text-primary/20 py-2 focus:outline-none focus:border-accent transition-colors font-sans text-xl"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-text-primary/20 py-2 focus:outline-none focus:border-accent transition-colors font-sans text-xl resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-text-primary text-bg-warm py-4 font-sans text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-300 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : status === 'error' ? 'Failed — Try Again' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className="font-sans text-sm text-accent text-center">Thanks! I'll get back to you soon.</p>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;

import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Dribbble } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 bg-[#F0EFE9] border-t border-divider">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-4xl md:text-6xl text-text-primary mb-8"
        >
          Let's Create  Something Exceptional
        </motion.h2>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="mailto:raviprakashart00@gmail.com"
          className="font-sans text-lg md:text-xl text-text-primary hover:text-accent transition-colors duration-300 border-b border-text-primary/20 hover:border-accent pb-1 mb-16"
        >
          raviprakashart00@gmail.com
        </motion.a>

        <div className="flex gap-8 mb-16">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/ravixart/" },
            { Icon: Instagram, href: "https://www.instagram.com/_ravixart_/" },
            { Icon: Mail, href: "mailto:raviprakashart00@gmail.com" }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <Icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="font-sans text-xs text-text-secondary uppercase tracking-widest"
        >
          © 2026 Ravi Singh. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6 md:px-12"
    >
      <Helmet>
        <title>About — Ravi Singh</title>
        <meta name="description" content="Learn about Ravi Singh — a video editor and creative media professional with over five years of experience in visual storytelling, motion design, and art." />
      </Helmet>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start mb-32">
          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden aspect-[3/4]"
            >
              <img
                src="/RAVI_ABOUT.png"
                alt="Ravi Singh"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-5xl md:text-7xl text-text-primary mb-12"
            >
              About Ravi
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-xl md:text-2xl leading-relaxed text-text-primary space-y-8"
            >
              <p>
                Hi, I am Ravi. A video editor and creative media professional with a strong foundation in traditional art and visual storytelling.
              </p>
              <p>
                I have over five years of overall experience in video editing. My work ranges from short-form content to entire YouTube advertisement videos, with everything in between and sometimes vlogs too.
              </p>
              <p>
                I enjoy creating meaningful, high-quality creative work for individuals, brands, and organisations. Working with as many styles as I can, it really feels like the heart of what I do.
              </p>
              <p>
                I like to learn and implement new tools and different ways to tell a better story in my workflow. This is the greatest competition that I plan to keep on exploring, always :)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12"
            >
              <a href="https://drive.google.com/drive/folders/1KtMHTV51cineawXs8QfxO6XouRILFNnv?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] border border-text-primary/20 px-6 py-3 hover:bg-text-primary hover:text-bg-warm transition-all duration-300 group">
                View Resume
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Skills & Tools — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32"
        >
          <div>
            <h3 className="font-sans text-xl md:text-2xl uppercase tracking-[0.2em] text-text-secondary mb-8">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Video Editing", "Motion Design", "Visual Storytelling",
                "Storyboarding", "Scriptwriting", "Thumbnail Design",
                "Sound Design", "Videography", "Photography",
                "Graphic Design", "Drawing", "Painting"
              ].map((skill) => (
                <span key={skill} className="font-sans text-base text-text-primary border border-divider px-5 py-2.5 transition-transform duration-300 hover:-translate-y-1 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary mb-8">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Premiere Pro", "After Effects", "Photoshop",
                "Illustrator", "Lightroom", "DaVinci Resolve",
                "Adobe Firefly"
              ].map((tool) => (
                <span key={tool} className="font-sans text-base text-text-primary border border-divider px-5 py-2.5 transition-transform duration-300 hover:-translate-y-1 cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="border-t border-divider pt-24">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs uppercase tracking-[0.25em] text-text-secondary mb-16"
          >
            Experience
          </motion.h2>

          <div className="space-y-16 max-w-4xl">
            {[
              { period: "Oct 2025 — Present", role: "Creative Media Manager", company: "Vizuara Technologies Private Limited" },
              { period: "Oct 2024 — Oct 2025", role: "Creative Media Editor", company: "Kiyas Naturals, Bangalore" },
              { period: "Sept 2020 — Sept 2024", role: "Freelance Video Editor", company: "" },
              { period: "2023 — 2024", role: "Art Instructor", company: "Deep Art Studios, Guwahati" },
              { period: "2022, 2024", role: "Judge — Independence Day Art Event", company: "Leo Club of Guwahati" },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-divider/50 pb-12 last:border-0"
              >
                <div className="md:col-span-3 font-mono text-sm text-text-secondary pt-1">
                  {exp.period}
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-sans text-2xl text-text-primary mb-1">
                    {exp.role}
                  </h3>
                  {exp.company && <div className="text-text-primary/80 font-medium">{exp.company}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

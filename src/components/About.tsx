// src/components/About.tsx
'use client';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Target, Zap } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      desc: 'Expert in MERN stack',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      desc: 'Creative solutions',
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      desc: 'Optimized & fast',
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      desc: 'Deadline focused',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Get to know who I am and what drives me
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Text Content */}
          <motion.div variants={item} className="space-y-6">
            <div>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                I'm a Full-Stack Web Developer with a passion for building beautiful, performant, and user-centric web applications. I thrive on turning complex problems into simple, elegant solutions using modern technologies.
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                With expertise in the MERN stack and strong fundamentals in responsive design, I've successfully delivered projects ranging from e-commerce platforms to enterprise solutions. I'm constantly learning and staying updated with emerging technologies.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Core Competencies
              </h3>
              <ul className="space-y-3">
                {[
                  'Full-Stack Development (MERN)',
                  'Responsive & Accessible UI Design',
                  'RESTful API Development',
                  'Database Architecture',
                  'Git & Version Control',
                  'Agile Methodology',
                ].map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  whileHover={{ y: -8 }}
                  className="group p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white">
                      <Icon size={24} />
                    </div>
                  </motion.div>

                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {highlight.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border border-cyan-200 dark:border-cyan-800/30 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            My Journey
          </h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I started my web development journey with HTML and CSS, gradually building expertise in JavaScript and modern frameworks. Through multiple projects and collaborations, I've developed a holistic understanding of both frontend and backend development. Today, I'm focused on creating seamless user experiences while writing clean, maintainable code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

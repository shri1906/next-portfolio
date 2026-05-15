// src/components/About.tsx
'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Target, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

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

  // Skeleton loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
        {/* Skeleton Loader */}
        {loading ? (
          <div className="animate-pulse space-y-16">

            {/* Header Skeleton */}
            <div className="text-center space-y-4">
              <div className="mx-auto h-12 w-72 rounded-lg bg-slate-200 dark:bg-slate-800" />
              <div className="mx-auto h-5 w-96 rounded bg-slate-200 dark:bg-slate-800" />
            </div>

            {/* Main Content Skeleton */}
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800" />

                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-4 w-4/6 rounded bg-slate-200 dark:bg-slate-800" />
                </div>

                {/* Competencies Skeleton */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="h-8 w-52 rounded bg-slate-200 dark:bg-slate-800" />

                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />

                      <div className="h-4 w-64 rounded bg-slate-200 dark:bg-slate-800" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Cards Skeleton */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-slate-800" />

                    <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-800" />

                    <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Skeleton */}
            <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="h-8 w-48 rounded bg-slate-200 dark:bg-slate-800" />

              <div className="space-y-3">
                <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>
          </div>
        ) : (
          // Actual Content 
          <>
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
                    I&apos;m a Full-Stack Web Developer with a passion
                    for building beautiful, performant, and user-centric
                    web applications. I thrive on turning complex problems
                    into simple, elegant solutions using modern technologies.
                  </p>

                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    With expertise in the MERN stack and strong fundamentals
                    in responsive design, I&apos;ve successfully delivered
                    projects ranging from e-commerce platforms to enterprise
                    solutions. I&apos;m constantly learning and staying updated
                    with emerging technologies.
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
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />

                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right - Highlights Grid */}
              <motion.div
                variants={item}
                className="grid grid-cols-2 gap-4"
              >
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
                I started my web development journey with HTML and CSS,
                gradually building expertise in JavaScript and modern
                frameworks. Through multiple projects and collaborations,
                I&apos;ve developed a holistic understanding of both frontend
                and backend development. Today, I&apos;m focused on creating
                seamless user experiences while writing clean, maintainable code.
              </p>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
// src/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export function Hero() {
  const text = "Shivam Maurya";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 150); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent dark:from-blue-500/10 dark:via-cyan-500/5 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent-500/20 via-orange-500/10 to-transparent dark:from-orange-500/10 dark:via-accent-500/5 blur-3xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center space-y-8"
        >
          {/* Greeting Badge */}
          <motion.div variants={item} className="inline-block">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-500/30 dark:border-cyan-500/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={item} className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-slate-900 dark:text-white">
                Hi, I'm
              </span>

              <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-accent-500 dark:from-cyan-400 dark:via-blue-400 dark:to-orange-400 bg-clip-text text-transparent">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A Full-Stack Web Developer crafting beautiful, performant web experiences with modern technologies. Specialized in React, Node.js, and creating seamless user journeys.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* View My Work (GitHub) */}
            <motion.a
              href="https://github.com/shri1906"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow-lg"
            >
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.a>

            {/* Download CV */}
            <motion.a
              href="/Shivam_Maurya_Resume.pdf"
              download="Shivam_Maurya_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Download
                  size={18}
                  className="group-hover:translate-y-1 transition"
                />
                Download CV
              </span>
            </motion.a>
          </motion.div>
          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-200 dark:border-slate-800">
            {[
              { label: 'Projects', value: '8+' },
              { label: 'Tech Stack', value: '20+' },
              { label: 'Experience', value: '2+ yrs' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

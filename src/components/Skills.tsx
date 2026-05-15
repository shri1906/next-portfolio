'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type SkillCategory = 'Frontend' | 'Backend' | 'Tools' | 'Other';

interface Skill {
  name: string;
  icon: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
}

interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
  color: string;
  bgGradient: string;
}

const skillsData: SkillGroup[] = [
  {
    category: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    bgGradient:
      'from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30',
    skills: [
      { name: 'HTML5', icon: '/html.png', level: 'Expert' },
      { name: 'CSS3', icon: '/css3.png', level: 'Expert' },
      { name: 'JavaScript', icon: '/JavaScript.png', level: 'Expert' },
      { name: 'TypeScript', icon: '/typescript.webp', level: 'Advanced' },
      { name: 'React.js', icon: '/react.png', level: 'Expert' },
      { name: 'Next.js', icon: '/nextjs.png', level: 'Advanced' },
      { name: 'Tailwind CSS', icon: '/tailwindcss.png', level: 'Advanced' },
      { name: 'Redux', icon: '/redux.png', level: 'Advanced' },
      { name: 'Bootstrap CSS', icon: '/bootstrap.jpg', level: 'Expert' },
      { name: 'Chakra UI', icon: '/chakra.webp', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-orange-500 to-accent-500',
    bgGradient:
      'from-orange-50 to-accent-50 dark:from-orange-950/30 dark:to-accent-950/30',
    skills: [
      { name: 'Node.js', icon: '/nodejs.png', level: 'Expert' },
      { name: 'Express.js', icon: '/express.png', level: 'Expert' },
      { name: 'MongoDB', icon: '/mongodb.png', level: 'Advanced' },
      { name: 'REST APIs', icon: '/rest-api.png', level: 'Expert' },
      { name: 'PHP', icon: '/php.png', level: 'Proficient' },
      { name: 'MySQL', icon: '/mysql.png', level: 'Advanced' },
      { name: 'Socket.io', icon: '/socketio.webp', level: 'Advanced' },
    ],
  },
  {
    category: 'Tools',
    color: 'from-purple-500 to-pink-500',
    bgGradient:
      'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
    skills: [
      { name: 'Git/GitHub', icon: '/github.png', level: 'Expert' },
      { name: 'VS Code', icon: '/vscode.png', level: 'Expert' },
      { name: 'Postman', icon: '/postman.png', level: 'Advanced' },
      { name: 'Vercel', icon: '/vercel.png', level: 'Advanced' },
      { name: 'DevTools', icon: '/devtools.png', level: 'Expert' },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Skills() {

  // Skeleton Loader State
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skeleton Loader */}
        {loading ? (
          <div className="animate-pulse space-y-16">

            {/* Header Skeleton */}
            <div className="text-center space-y-4">
              <div className="mx-auto h-12 w-80 rounded-lg bg-slate-200 dark:bg-slate-800" />

              <div className="mx-auto h-5 w-[500px] max-w-full rounded bg-slate-200 dark:bg-slate-800" />
            </div>

            {/* Skill Groups Skeleton */}
            {[1, 2, 3].map((group) => (
              <div
                key={group}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 space-y-8"
              >

                {/* Category Skeleton */}
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 rounded-full bg-slate-300 dark:bg-slate-700" />

                  <div className="h-10 w-40 rounded bg-slate-200 dark:bg-slate-800" />
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
                    >

                      {/* Icon Skeleton */}
                      <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 flex-shrink-0" />

                      {/* Text Skeleton */}
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />

                        <div className="h-5 w-16 rounded-full bg-slate-200 dark:bg-slate-800" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Footer Skeleton */}
            <div className="p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 space-y-4">
              <div className="mx-auto h-5 w-72 rounded bg-slate-200 dark:bg-slate-800" />

              <div className="mx-auto h-4 w-[600px] max-w-full rounded bg-slate-200 dark:bg-slate-800" />

              <div className="mx-auto h-4 w-[450px] max-w-full rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        ) : (
          // Actual Skills Section 
          <>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Technical Skills
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-400">
                Tools and technologies I&apos;ve mastered through hands-on projects
              </p>
            </motion.div>

            {/* Skill Groups */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {skillsData.map((group) => (
                <motion.div
                  key={group.category}
                  variants={itemVariants}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${group.bgGradient} border border-slate-200 dark:border-slate-700`}
                >

                  {/* Category */}
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className={`w-1 h-8 bg-gradient-to-b ${group.color} rounded-full`}
                    />

                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -6 }}
                        className="group flex items-center gap-3 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-cyan-500 hover:shadow-md transition-all duration-300 cursor-pointer min-w-0"
                      >

                        {/* Icon */}
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30 transition">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={24}
                            height={24}
                            className="object-contain h-auto w-100"
                            priority
                          />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </p>

                          <span
                            className={`text-xs px-2 rounded-full whitespace-nowrap ${
                              skill.level === 'Expert'
                                ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                                : skill.level === 'Advanced'
                                  ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                                  : 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-center"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">
                  Always learning & evolving
                </span>

                <br />

                Exploring new technologies like AI integration,
                Web3, and advanced performance optimization
              </p>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
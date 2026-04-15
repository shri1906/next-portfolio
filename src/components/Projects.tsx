// src/components/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  type: 'Individual' | 'Group' | 'Collaborative';
  metrics: string[];
  liveLink: string;
  githubLink: string;
  color: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'CORS Registration Portal',
    description: 'A secure registration and subscription management portal for Survey of India enabling users to purchase real-time survey data with enterprise-grade security.',
    contribution: 'Led full-stack development including user authentication, payment gateway integration, and responsive UI design',
    technologies: ['React.js', 'Node.js','Express.js','Bootstrap','CSS3', 'MySQL'],
    type: 'Collaborative',
    metrics: ['30,000+ active users', '40% faster completion'],
    liveLink: 'https://cors.surveyofindia.gov.in/',
    githubLink: '',
    color: 'from-cyan-500 to-blue-500',
    image: '/cors.PNG',
  },
  {
    id: 2,
    title: 'Employee Management System',
    description: 'A comprehensive MERN stack application for managing employee records with CRUD operations, real-time updates, and role-based access control.',
    contribution: 'Architected and implemented complete stack including JWT authentication and MongoDB aggregation queries',
    technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    type: 'Individual',
    metrics: ['1000+ records support', '0.2s response time'],
    liveLink: 'https://ems-shri1906.vercel.app/login',
    githubLink: 'https://github.com/shri1906/EMS-MERN',
    color: 'from-orange-500 to-accent-500',
    image: '/ems.PNG',
  },
  {
    id: 3,
    title: 'Art Gallery Showcase',
    description: 'An elegant Art Gallery website showcasing various art pieces with detailed descriptions, filtering, and responsive design.',
    contribution: 'Designed and implemented complete UI/UX with smooth animations and image optimization',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    type: 'Individual',
    metrics: ['Beautiful galleries', 'Smooth animations'],
    liveLink: 'https://brush-and-beyond.vercel.app/',
    githubLink: 'https://github.com/shri1906/art-gallery',
    color: 'from-purple-500 to-pink-500',
    image: '/art-gallery.PNG',
  },
  {
    id: 4,
    title: 'Sephora Clone',
    description: 'A full-featured e-commerce platform clone with shopping cart, checkout, and payment integration features.',
    contribution: 'Developed cart management and checkout pages with Redux state management and Firebase integration',
    technologies: ['React.js', 'Redux', 'Chakra UI', 'Firebase', 'MongoDB'],
    type: 'Group',
    metrics: ['Cart optimization', 'Fast checkout'],
    liveLink: 'https://sephora-pink.vercel.app/',
    githubLink: 'https://github.com/Ankur982/dull-letter-5131',
    color: 'from-pink-500 to-rose-500',
    image: '/sephora.PNG',
  },
  {
    id: 5,
    title: 'TimeCamp Clone',
    description: 'A feature-rich time tracking application for managing tasks and monitoring productivity with real-time updates.',
    contribution: 'Built dashboard page with advanced data visualization and real-time sync capabilities',
    technologies: ['React.js', 'Redux', 'Chakra UI', 'Firebase'],
    type: 'Group',
    metrics: ['Real-time sync', 'Live dashboard'],
    liveLink: 'https://timecampclone-cw.netlify.app/',
    githubLink: 'https://github.com/ssksds/Time-Camp-Clone',
    color: 'from-indigo-500 to-cyan-500',
    image: '/time-camp.png',
  },
  {
    id: 6,
    title: 'IT Solution Website',
    description: 'A professional IT services website showcasing various IT solutions with modern design and responsive layout.',
    contribution: 'Designed responsive UI and implemented smooth scrolling with Bootstrap and custom CSS',
    technologies: ['React.js', 'Bootstrap', 'CSS3'],
    type: 'Individual',
    metrics: ['Responsive design', 'Modern UI'],
    liveLink: 'https://ram-it-solutions.vercel.app/',
    githubLink: 'https://github.com/shri1906/ram-it-solutions',
    color: 'from-green-500 to-emerald-500',
    image: 'ramIT.PNG',
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A showcase of my best work and contributions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl dark:hover:shadow-xl flex flex-col overflow-hidden">
                {/* Card Header with image */}
                <div className="relative w-full h-48 mb-4 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 border"
                  />
                </div>

                {/* Project Type Badge */}
                <div className="mb-3 inline-block">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.type === 'Individual'
                      ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                      : project.type === 'Group'
                        ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                        : 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                    }`}>
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Contribution */}
                <div className="mb-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Your Role
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-400">
                    {project.contribution}
                  </p>
                </div>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
                      >
                        ✨ {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6 flex-1">
                  <p className="text-xs font-bold text-slate-900 dark:text-white mb-3">
                    TECH STACK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-glow transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live
                  </motion.a>

                  {project.githubLink && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 border border-cyan-200 dark:border-cyan-800/30"
        >
          <p className="text-xl text-slate-900 dark:text-white font-semibold mb-4">
            👀 Want to see more?
          </p>
          <a
            href="https://github.com/shri1906"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-glow transition-all duration-300"
          >
            <Code2 size={20} />
            Explore My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

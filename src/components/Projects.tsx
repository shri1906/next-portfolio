'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

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
    description:
      'A secure registration and subscription management portal for Survey of India enabling users to purchase real-time survey data with enterprise-grade security.',
    contribution:
      'Led full-stack development including user authentication and responsive UI design',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'Bootstrap',
      'CSS3',
      'MySQL',
    ],
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
    description:
      'A comprehensive MERN stack application for managing employee records with CRUD operations, real-time updates, and role-based access control.',
    contribution:
      'Architected and implemented complete stack including JWT authentication and MongoDB aggregation queries',
    technologies: [
      'React.js',
      'Express.js',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
    ],
    type: 'Individual',
    metrics: ['1000+ records support', '0.2s response time'],
    liveLink:
      'https://employee-management-system-nyu0.onrender.com/login',
    githubLink:
      'https://github.com/shri1906/Employee-Management-System',
    color: 'from-orange-500 to-red-500',
    image: '/ems.JPG',
  },
  {
    id: 3,
    title: 'Real-time Chat App',
    description:
      'A real-time chat application enabling instant messaging with multiple users, typing indicators, and live updates using WebSockets.',
    contribution:
      'Implemented real-time messaging with Socket.io, built chat UI with Next.js, and handled state management for seamless communication.',
    technologies: [
      'Next.js',
      'Socket.io',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    type: 'Individual',
    metrics: [
      'Real-time messaging',
      'Low latency communication',
    ],
    liveLink: 'https://chatter-box-h1bi.onrender.com/',
    githubLink: 'https://github.com/shri1906/chatter-box',
    color: 'from-green-500 to-emerald-500',
    image: '/chat.JPG',
  },
  {
    id: 4,
    title: 'Blog Application',
    description:
      'A full-stack blog platform where users can create, edit, and publish articles with authentication and dynamic content rendering.',
    contribution:
      'Developed REST APIs with Node.js, implemented authentication, and built responsive UI using Next.js.',
    technologies: [
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
    ],
    type: 'Individual',
    metrics: ['SEO optimized', 'Dynamic content rendering'],
    liveLink: 'https://blog-web-4hnn.onrender.com/',
    githubLink: 'https://github.com/shri1906/blog-web',
    color: 'from-yellow-500 to-orange-500',
    image: '/blog.JPG',
  },
  {
    id: 5,
    title: 'IT Solution Website',
    description:
      'A professional IT services website showcasing various IT solutions with modern design and responsive layout using the MERN stack.',
    contribution:
      'Developed REST APIs with Node.js, implemented authentication, and built responsive UI using MERN stack. Integrated RazorPay for secure payment processing.',
    technologies: [
      'React.js',
      'MongoDB',
      'Node.js',
      'Express.js',
      'RazorPay',
      'Bootstrap',
      'CSS3',
    ],
    type: 'Individual',
    metrics: ['Responsive design', 'Modern UI'],
    liveLink: 'https://e-solutions-portal.onrender.com/',
    githubLink:
      'https://github.com/shri1906/E-solutions-MERN',
    color: 'from-green-500 to-emerald-500',
    image: '/gauri.JPG',
  },
  {
    id: 6,
    title: 'Art Gallery Showcase',
    description:
      'An elegant Art Gallery website showcasing various art pieces with detailed descriptions, filtering, and responsive design.',
    contribution:
      'Designed and implemented complete UI/UX with smooth animations and image optimization',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Framer Motion',
    ],
    type: 'Individual',
    metrics: ['Beautiful galleries', 'Smooth animations'],
    liveLink: 'https://brush-and-beyond.vercel.app/',
    githubLink:
      'https://github.com/shri1906/art-gallery',
    color: 'from-purple-500 to-pink-500',
    image: '/art-gallery.PNG',
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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function Projects() {
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Skeleton Loader */}
        {loading ? (
          <div className="animate-pulse space-y-16">

            {/* Header Skeleton */}
            <div className="text-center space-y-4">
              <div className="mx-auto h-12 w-80 rounded-lg bg-slate-200 dark:bg-slate-800" />

              <div className="mx-auto h-5 w-96 rounded bg-slate-200 dark:bg-slate-800" />
            </div>

            {/* Horizontal Skeleton */}
            <div className="flex gap-6 overflow-hidden">

              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="min-w-[380px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-5"
                >

                  {/* Image */}
                  <div className="w-full h-48 rounded-xl bg-slate-200 dark:bg-slate-800" />

                  {/* Badge */}
                  <div className="h-6 w-28 rounded-full bg-slate-200 dark:bg-slate-800" />

                  {/* Title */}
                  <div className="h-8 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />

                  {/* Description */}
                  <div className="space-y-3">
                    <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />

                    <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />

                    <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800" />
                  </div>

                  {/* Role */}
                  <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-3">
                    <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />

                    <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />

                    <div className="h-4 w-4/5 rounded bg-slate-200 dark:bg-slate-800" />
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-2">
                    <div className="h-6 w-32 rounded-full bg-slate-200 dark:bg-slate-800" />

                    <div className="h-6 w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
                  </div>

                  {/* Tech */}
                  <div className="space-y-3">
                    <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />

                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4].map((tag) => (
                        <div
                          key={tag}
                          className="h-7 w-20 rounded-lg bg-slate-200 dark:bg-slate-800"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <div className="h-11 flex-1 rounded-lg bg-slate-200 dark:bg-slate-800" />

                    <div className="h-11 flex-1 rounded-lg bg-slate-200 dark:bg-slate-800" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Skeleton */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-8 space-y-4">
              <div className="mx-auto h-6 w-64 rounded bg-slate-200 dark:bg-slate-800" />

              <div className="mx-auto h-12 w-64 rounded-lg bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
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

            {/* Buttons */}
            <div className="flex justify-end gap-3 mb-6">

              {/* Prev */}
              <button
                onClick={() => {
                  scrollRef.current?.scrollBy({
                    left: -400,
                    behavior: 'smooth',
                  });
                }}
                className="w-11 h-11 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-cyan-500 hover:text-white transition flex items-center justify-center"
              >
                <ArrowLeft
                  size={18}
                />
              </button>

              {/* Next */}
              <button
                onClick={() => {
                  scrollRef.current?.scrollBy({
                    left: 400,
                    behavior: 'smooth',
                  });
                }}
                className="w-11 h-11 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-cyan-500 hover:text-white transition flex items-center justify-center"
              >
                <ArrowRight
                  size={18}
                />
              </button>
            </div>

            {/* Horizontal Slider */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div
                ref={scrollRef}
                className="
                  flex gap-8 overflow-x-auto pb-4
                  scroll-smooth scrollbar-hide
                "
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="group min-w-[370px] max-w-[370px] flex-shrink-0"
                  >
                    <div className="h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl flex flex-col overflow-hidden">

                      {/* Image */}
                      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Badge */}
                      <div className="mb-3 inline-block">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${project.type === 'Individual'
                            ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                            : project.type === 'Group'
                              ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                              : 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                            }`}
                        >
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
                          My Role
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
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold"
                        >
                          <ExternalLink size={16} />
                          Live
                        </motion.a>

                        {project.githubLink && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
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
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
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
          </>
        )}
      </div>
    </section>
  );
}
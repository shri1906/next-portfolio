// src/components/Contact.tsx
'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MessageSquare, ArrowRight } from 'lucide-react';

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/shri1906',
      color: 'hover:text-slate-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-cyan-500',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:your@email.com',
      color: 'hover:text-red-500',
    },
  ];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus('✨ Message sent successfully!');
          setLoading(false);
          form.current?.reset();

          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('Failed to send message!');
          setLoading(false);
        }
      );
  };
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all duration-300"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>Sending...</>
                ) : (
                  <>
                    <MessageSquare size={18} />
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </motion.button>
              {/* Success Message */}
              {status && (
                <p className="text-center text-green-500 font-medium">
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            {/* Info Boxes */}
            <div className="space-y-6 m-8">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  description: 'shivammaurya7310@gmail.com',
                  href: 'mailto:shivammaurya7310@gmail.com',
                },
                {
                  icon: MessageSquare,
                  title: 'Response Time',
                  description: 'Usually within 24 hours',
                  href: '#',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className="block w-full p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-6">
                Connect on social media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 ${social.color} transition-all duration-300`}
                      title={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Designed & built with ❤️ using Next.js + Tailwind CSS
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-6">
            © {new Date().getFullYear()} Shivam Maurya. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

// src/app/page.tsx
'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact, Footer } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
          
          {/* Animated gradient background */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-800/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-200/10 dark:bg-accent-800/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

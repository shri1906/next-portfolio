// src/app/layout.tsx
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shivam Maurya - Full-Stack Web Developer',
  description: 'Full-Stack Web Developer specializing in React, Node.js, and MongoDB. Explore my portfolio of modern web applications and projects.',
  keywords: ['Full-Stack Developer', 'React', 'Node.js', 'Web Developer', 'MERN Stack', 'JavaScript'],
  authors: [{ name: 'Shivam Maurya' }],
  openGraph: {
    title: 'Shivam Maurya - Full-Stack Web Developer',
    description: 'Full-Stack Web Developer portfolio showcasing modern web applications',
    type: 'website',
    url: 'https://shri1906.github.io/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Maurya - Full-Stack Web Developer',
    description: 'Explore my portfolio of full-stack web development projects',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.webp" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// src/app/layout.tsx
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://shivammaurya-coder.vercel.app"),

  title: {
    default: "Shivam Maurya | Full Stack Developer",
    template: "%s | Shivam Maurya",
  },

  description:
    "Portfolio of Shivam Maurya, Full Stack Developer specializing in Next.js, React, Node.js, TypeScript, Express, and MySQL.",

  keywords: [
    "Shivam Maurya",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "JavaScript",
    "MySQL",
    "Portfolio",
  ],

  authors: [{ name: "Shivam Maurya" }],
  creator: "Shivam Maurya",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://shivammaurya-coder.vercel.app",
  },

  openGraph: {
    title: "Shivam Maurya | Full Stack Developer",
    description:
      "Portfolio showcasing projects built with Next.js, React, Node.js and MySQL.",
    url: "https://shivammaurya-coder.vercel.app",
    siteName: "Shivam Maurya Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shivam Maurya Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shivam Maurya | Full Stack Developer",
    description:
      "Portfolio of Full Stack Developer Shivam Maurya",
    images: ["/og-image.png"],
  },
  verification: {
    google: "i_msjbEt3WEOJVjMEMXGKWaBAC1q2FrtpIfrr0q-SZU",
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

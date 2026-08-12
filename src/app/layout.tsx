// src/app/layout.tsx
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';
import { Inter, Sora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivammaurya-coder.vercel.app"),

  title: {
    default: "Shivam Maurya | Full Stack Developer",
    template: "%s | Shivam Maurya",
  },

  description:
        'Shivam Maurya is a Full Stack Developer specializing in React, Next.js, Node.js, Express, MySQL, MongoDB and modern web application development.',

  keywords: [
    'Shivam Maurya',
    'Shivam Maurya Developer',
    'Shivam Maurya Full Stack Developer',
    'Shivam Maurya React Developer',
    'Shivam Maurya Next.js Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    '$hivaM@1999'
  ],

  authors: [{ name: "Shivam Maurya", url: "https://shivammaurya-coder.vercel.app" }],
  creator: "Shivam Maurya",
    publisher: 'Shivam Maurya',

   robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: "https://shivammaurya-coder.vercel.app",
  },

  openGraph: {
    title: "Shivam Maurya | Full Stack Developer",
    description:
       'Portfolio of Shivam Maurya, Full Stack Developer specializing in React, Next.js, Node.js and modern web development.',
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
       'Portfolio of Shivam Maurya, Full Stack Developer.',
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
    <html lang="en"
      className={`${inter.variable} ${sora.variable}`}
      suppressHydrationWarning>
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

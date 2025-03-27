import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hariharan R - Building Tech Solutions | Java Developer',
  description:
    'Hariharan R - Tech-savvy developer skilled in Java, Spring Boot, SQL, and Next.js. Building innovative solutions, collaborating, and aking an impact in tech.',
  keywords: [
    'Hariharan R',
    'Hariharan R portfolio',
    'Java Developer portfolio',
    'Web Developer portfolio',
    'Innovative Java projects',
    'Software developer portfolio',
    'Java and web development',
    'Full-stack developer portfolio',
    'Developer portfolio website',
    'Tech innovator portfolio',
    'Java coding projects',
    'Web application developer',
    'Personal development portfolio',
    'Creative Java solutions',
    'Java development showcase',
    'Java programming portfolio',
  ],
  authors: [{ name: 'Hariharan R', url: 'https://hariharanr1893.vercel.app/' }],
  icons: {
    icon: '/page-icon.png',
  },
  openGraph: {
    title: 'Hariharan R - Building Tech Solutions | Java Developer',
    description:
      'Explore the portfolio of Hariharan R, featuring innovative solutions and creative development projects.',
    url: 'https://hariharanr1893.vercel.app/',
    siteName: 'Hariharan R Portfolio',
    images: [
      {
        url: 'https://hariharanr1893.vercel.app/page-hero3.png',
        width: 1200,
        height: 630,
        alt: 'Hariharan R Portfolio Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hariharanr1893.vercel.app/',
  },
  other: {
    'schema-markup': JSON.stringify({
      '@context': 'http://schema.org',
      '@type': 'Person',
      name: 'Hariharan R',
      jobTitle: 'Java Developer & Innovator',
      url: 'https://hariharanr1893.vercel.app/',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karaikal',
        addressRegion: 'Puducherry/Karaikal',
        postalCode: '609602',
        addressCountry: 'India',
      },
      email: 'hariramesh1893@gmail.com',
      telephone: '+919342510436',
      birthDate: '2003-09-18',
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

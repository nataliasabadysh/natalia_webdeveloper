import './globals.css';
import localFont from 'next/font/local';
import { Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const FixelDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/non-natural-grotesk-trialversion-regular.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-nn',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
});

export const metadata = {
  // metadataBase: new URL('would be my domain '),
  title: {
    default: 'Natalia Sabadysh',
    template: '%s | Natalia Sabadysh',
  },
  description: 'Developer, writer, and creator.',
  verification: {
    google: '123',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${FixelDisplay.variable} ${manrope.variable} font-nn`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

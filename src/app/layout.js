import './globals.css';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const FixelDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/non-natural-grotesk-trialversion-regular.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-FixelDisplay',
  display: 'swap',
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
      <body className={`${FixelDisplay.variable} container`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

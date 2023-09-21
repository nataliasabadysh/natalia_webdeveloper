import './globals.css';
import localFont from 'next/font/local';

const FixelDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/non-natural-grotesk-trialversion-regular.otf',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata = {
  metadataBase: new URL('https://nextjs13-seo.vercel.app'),
  title: {
    default: 'Natalia',
    template: `Software Developer`,
  },
  description: 'Explore the latest posts from my travel blog.',
  verification: {
    google: 'google-site-verification=123123123',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={FixelDisplay}>{children}</body>
    </html>
  );
}

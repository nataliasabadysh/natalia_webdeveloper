import { compareDesc, parseISO } from 'date-fns';

export const cx = (...classNames) => classNames.filter(Boolean).join(' ');

export const sortBlogs = blogs => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)),
    );
};

export const siteMetadata = {
  title: 'Software Developer',
  author: 'Natalia Sabadysh',
  headerTitle: 'Personal Blog',
  description: '',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: '', // your website URL
  siteLogo: '/logo.png',
  socialBanner: '/social-banner.png', // add social banner in the public folder
  email: 'nataliasabadysh@gmail.com',
  github: 'https://github.com/nataliasabadysh',
  twitter: 'https://twitter.com/nataliasabadysh',
  facebook: 'https://facebook.com/nataliasabadysh',
  youtube: 'https://youtube.com/nataliasabadysh',
  linkedin: 'https://www.linkedin.com/in/nataliasabadysh/',
  dribbble: 'https://www.dribbble.com/nataliasabadysh',
  locale: 'en-US',
};

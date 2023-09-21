import Image from 'next/image';
// components
import Banner from './components/banner/banner';
import About from './components/about/about';
import Clients from './components/clients/clients';
import Projects from './components/projects/project';
import Blog from './components/blog/blog';

import Header from './components/header/header';
import Footer from './components/footer/footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className='container'>
        <Banner />
        <About />
        <Clients />
        <Projects />
        <Blog />
      </main>

      <Footer />
    </>
  );
}

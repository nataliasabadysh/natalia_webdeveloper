import Image from 'next/image';
// components
import Banner from './components/banner/banner';
import About from './components/about/about';
import Clients from './components/clients/clients';
import Projects from './components/projects/project';
import Blog from './components/blog/blog';

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Clients />
      <Projects />
      <Blog />
    </main>
  );
}

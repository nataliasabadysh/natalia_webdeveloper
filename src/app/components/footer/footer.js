import Link from 'next/link';

const socialLinks = [{ platform: '', href: 'https://linkedin.com' }];

export default function Footer() {
  return (
    <footer className='container'>
      <a>Logo</a>

      <section>
        <h2>Slogan</h2>

        <h3>title </h3>
        <ul>
          <li>
            <Link href="">menu </Link>
          </li>
          <li>
            <Link href="">menu</Link>
          </li>
          <li>
            <Link href="">menu</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}

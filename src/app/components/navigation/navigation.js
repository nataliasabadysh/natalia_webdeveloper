import Link from 'next/link';
import styles from './navigation.module.css';

export const Navigation = () => {
  return (
    <div>
      <div>
        <a>logo</a>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/contact">about</Link>
          </li>
          <li>
            <Link href="/contact">blog</Link>
          </li>
          <li>
            <Link href="/contact">projects</Link>
          </li>
          <li>
            <Link href="/contact">contacts</Link>
          </li>
        </ul>

        <button>CTA</button>
      </nav>
    </div>
  );
};

import { Navigation } from '../navigation/navigation';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>Natalia S.</div>
      {/* <Navigation /> */}
      <a className="btn" rel="noopener noreferrer" href="#">
        CV
      </a>
    </header>
  );
}

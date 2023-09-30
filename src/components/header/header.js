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

{/* <h4 class="wordCarousel">
    <span>Word swipe animation: </span>
    <div>
        <!-- Use classes 2,3,4, or 5 to match the number of words -->
        <ul class="flip5">
            <li>React Develoepr</li>
            <li>Mentor</li>
            <li>UI/UX lover</li>
            <li>Software Developer</li>
            <li>Cunsalt</li>
        </ul>
    </div>
</h4> */}
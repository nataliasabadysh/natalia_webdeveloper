import Link from 'next/link';
import styles from './navigation.module.css';

export const Navigation = () => {
  return (
    <div className={styles.menu}>
      <span className={styles.contentBurger}>
        <div className={styles.burger}>
          <span></span>
        </div>
      </span>
    </div>
  );
};
